import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

const images = [
  "/assets/images/progressivesmearcarousel-images.png",
  "/assets/images/progressivesmearcarousel-images-2.png",
  "/assets/images/progressivesmearcarousel-images-3.png",
  "/assets/images/progressivesmearcarousel-images-4.png",
  "/assets/images/progressivesmearcarousel-images-5.png",
  "/assets/images/progressivesmearcarousel-images-6.png",
  "/assets/images/progressivesmearcarousel-images-7.png",
  "/assets/images/progressivesmearcarousel-images.jpg",
  "/assets/images/progressivesmearcarousel-images-8.png",
  "/assets/images/progressivesmearcarousel-images-2.jpg",
];

const repeatedImages: string[] = [];
while (repeatedImages.length < 18) repeatedImages.push(...images);

interface CarouselLayout {
  itemWidth: number;
  itemHeight: number;
  sideItemWidth: number;
  sideItemHeight: number;
  gap: number;
}

function getCarouselLayout(width: number): CarouselLayout {
  if (width <= 809) {
    return { itemWidth: 300, itemHeight: 225, sideItemWidth: 170, sideItemHeight: 190, gap: 60 };
  }
  if (width <= 1199) {
    return { itemWidth: 400, itemHeight: 300, sideItemWidth: 270, sideItemHeight: 241, gap: 60 };
  }
  return { itemWidth: 500, itemHeight: 285, sideItemWidth: 320, sideItemHeight: 280, gap: 64 };
}

export default function ProgressiveSmearCarousel() {
  const [layout, setLayout] = useState(() => getCarouselLayout(window.innerWidth));
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const target = useRef(0);
  const position = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const snapTimer = useRef<number | null>(null);
  const drag = useRef<{ x: number; time: number; velocityX: number } | null>(null);

  useEffect(() => {
    const updateLayout = () => setLayout(getCarouselLayout(window.innerWidth));
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(
    () => () => {
      if (animationFrame.current !== null) window.cancelAnimationFrame(animationFrame.current);
      if (snapTimer.current !== null) window.clearTimeout(snapTimer.current);
    },
    [],
  );

  const animateToTarget = () => {
    if (animationFrame.current !== null) return;
    let lastTime = 0;

    const tick = (time: number) => {
      if (lastTime === 0) lastTime = time - 1000 / 60;
      const elapsed = Math.min((time - lastTime) / 1000, 1 / 60);
      lastTime = time;

      const displacement = target.current - position.current;
      velocity.current += (180 * displacement - 80 * velocity.current) * elapsed;
      position.current += velocity.current * elapsed;

      if (Math.abs(displacement) < 0.001 && Math.abs(velocity.current) < 0.001) {
        position.current = target.current;
        velocity.current = 0;
        setProgress(position.current);
        animationFrame.current = null;
        return;
      }

      setProgress(position.current);
      animationFrame.current = window.requestAnimationFrame(tick);
    };

    animationFrame.current = window.requestAnimationFrame(tick);
  };

  const setTarget = (nextTarget: number, snapAfterIdle = false) => {
    target.current = nextTarget;
    animateToTarget();
    if (snapTimer.current !== null) window.clearTimeout(snapTimer.current);
    snapTimer.current = snapAfterIdle
      ? window.setTimeout(() => {
          target.current = Math.round(target.current);
          snapTimer.current = null;
          animateToTarget();
        }, 150)
      : null;
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY * 0.8;
    if (delta !== 0) setTarget(target.current + delta * 0.004, true);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, time: event.timeStamp, velocityX: 0 };
    if (snapTimer.current !== null) window.clearTimeout(snapTimer.current);
    snapTimer.current = null;
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const elapsed = event.timeStamp - drag.current.time;
    const delta = event.clientX - drag.current.x;
    drag.current.velocityX = elapsed > 0 ? (delta / elapsed) * 1000 : 0;
    drag.current.x = event.clientX;
    drag.current.time = event.timeStamp;
    setTarget(target.current - delta * 0.005);
  };

  const handlePointerEnd = () => {
    if (!drag.current) return;
    target.current = Math.round(target.current - drag.current.velocityX * 0.0015);
    drag.current = null;
    setIsDragging(false);
    animateToTarget();
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setTarget(Math.round(target.current) + (event.key === "ArrowRight" ? 1 : -1));
  };

  const total = repeatedImages.length;
  const firstStep = layout.itemWidth / 2 + layout.gap + layout.sideItemWidth / 2;
  const nextStep = layout.sideItemWidth + layout.gap;

  return (
    <div
      className={`progressive-smear-carousel${isDragging ? " is-dragging" : ""}`}
      role="region"
      aria-label="Digital project image carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="progressive-smear-carousel__cards" aria-hidden="true">
        {repeatedImages.map((src, index) => {
          let offset = ((index - progress) % total + total) % total;
          if (offset > total / 2) offset -= total;
          const distance = Math.abs(offset);
          const sizeProgress = Math.min(distance, 1);
          const width = layout.itemWidth + (layout.sideItemWidth - layout.itemWidth) * sizeProgress;
          const height = layout.itemHeight + (layout.sideItemHeight - layout.itemHeight) * sizeProgress;
          const sign = Math.sign(offset);
          const x =
            distance === 0
              ? 0
              : sign *
                (distance <= 1
                  ? firstStep * distance
                  : firstStep + (distance - 1) * nextStep * 0.85);
          const rotation = sign * Math.min(distance * 35, 84);
          const opacity = distance <= 5 ? 1 : Math.max(0, 1 - (distance - 5) / 2);

          return (
            <div
              className="progressive-smear-carousel__card"
              key={`${src}-${index}`}
              data-carousel-index={index}
              data-carousel-distance={distance.toFixed(2)}
              style={{
                width,
                height,
                marginLeft: -width / 2,
                marginTop: -height / 2,
                opacity,
                zIndex: 1000 - Math.round(distance * 10),
                transform: `translateX(${x}px) translateZ(${-distance * 200}px) rotateY(${rotation}deg)`,
              }}
            >
              <img src={src} alt="" draggable={false} />
            </div>
          );
        })}
      </div>
      <div
        className="progressive-smear-carousel__interaction-surface"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      />
    </div>
  );
}