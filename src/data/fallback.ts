import type { AboutPageContent, HomePageContent, Project } from "../types/content";

const image = (name: string) => `/assets/images/${name}`;

export const homeFallback: HomePageContent = {
  heroTitle: "YOUR COMPLETE IT & DIGITAL INFRASTRUCTURE.",
  heroDescription:
    "Web engineering, cloud hosting, network setup, IP telephony, CCTV installation, and 24/7 rapid remote technical/ IT support—all built and managed under one roof",
  metrics: [
    {
      value: "1%",
      title: "Uptime & Network Reliability",
      description:
        "Enterprise-grade networking, local infrastructure, and edge routing built to keep your operations running seamlessly 24/7.",
    },
    {
      value: "0X",
      title: "Faster Data-Driven Decisions",
      description:
        "Interactive data analytics and custom reporting engines that turn raw business metrics into clear, actionable intelligence.",
    },
    {
      value: "1%",
      title: "Seed + series A funding",
      description:
        "Bespoke custom software engineering—delivering high-performance offline desktop tools and scalable cloud applications.",
    },
    {
      value: "12+",
      title: "Awards recognition",
      description:
        "Deploying scalable cloud environments and secure on-premise networks to safeguard your data at every layer.",
    },
  ],
  services: [
    {
      title: "Cloud Migration & Ops",
      description:
        "Seamless hybrid infrastructure backed by enterprise-grade local security for complete end-to-end data protection.",
      imageUrl: image("services-card-vy29lxghc.webp"),
    },
    {
      title: "High-Impact Web Design",
      description:
        "Web Design & UX/UI. Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.",
      imageUrl: image("services-card-wlxfg4mi6.jpeg"),
    },
    {
      title: "Custom ERP & Local Apps",
      description:
        "Custom Development, MVP prototyping, and an ongoing design partner for your product.",
      imageUrl: image("services-card-bdovic0vi.jpg"),
    },
    {
      title: "Network Architecture",
      description:
        "Cloud computing infrastructure paired with robust local network security to ensure end-to-end data safety.",
      imageUrl: image("services-card-klzjikktl.png"),
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We uncover your goals, audience, and challenges to build a clear roadmap for success.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Transforming insights into bold, user-focused designs that connect and convert.",
    },
    {
      number: "03",
      title: "Development & Launch",
      description:
        "From pixel to code, we craft high-performing websites and launch them flawlessly.",
    },
    {
      number: "04",
      title: "Optimization & Scale",
      description:
        "We monitor, refine, and enhance to ensure continuous growth and lasting impact.",
    },
  ],
  pricingPlans: [
    {
      name: "Product design",
      description: "Ideal for launching or revamping a website or product to boost conversions.",
      price: "$2,200",
      priceUnit: "One time",
      features: [
        "Senior designer",
        "One Active Request",
        "7-10 Days delivery-time",
        "SEO optimized",
        "1-1 Private Slack channel",
        "50% secured upfront payment",
        "Add Framer Development +$1,000",
      ],
    },
    {
      name: "Design partner",
      description:
        "Perfect for monthly design partnerships, keeping your brand fresh and driving consistent conversions.",
      priceUnit: "/ month",
      features: [
        "Dedicated team & expert designers",
        "Multiple requests under fair use",
        "2-3 Days delivery-time",
        "Monthly CRO & Growth Strategy",
        "1-1 Private Slack channel",
        "Framer development",
        "Up to 8 pages + 404 page",
        "50% secured upfront payment",
      ],
    },
    {
      name: "Custom",
      description:
        "Ideal for brands seeking unlimited design and motion support, delivering high-impact results without restrictions.",
      label: "Limited spots",
      priceUnit: "Starts at",
      features: [
        "Dedicated team & expert designers",
        "Unlimited requests",
        "2 Days Delivery, monthly commitment",
        "Advanced SEO & Marketing",
        "1-1 Private Slack channel",
        "Framer development",
        "50% secured upfront payment",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
      name: "Julian Ortega",
      role: "CEO",
      metric: "62%",
      metricDescription: "increase in mobile traffic retention",
      imageUrl: image("testimonial-card-kdanvbptr-4.png"),
    },
    {
      quote:
        "We launched our new site in under three weeks and saw results almost immediately. The design felt premium from day one — exactly what we needed to stand out in a crowded market.",
      name: "Melissa Gomez",
      role: "Co-Founder",
      metric: "3.1×",
      metricDescription: "increase in qualified leads",
      imageUrl: image("testimonial-card-kdanvbptr.jpg"),
    },
    {
      quote:
        "From the first call, the team just got it. They redesigned our entire funnel and the impact was immediate — more signups, lower drop-off, and a brand that finally matched our ambition.",
      name: "George Adams",
      role: "CEO",
      metric: "41%",
      metricDescription: "reduction in drop-off rate",
      imageUrl: image("testimonial-card-kdanvbptr-2.jpg"),
    },
    {
      quote:
        "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
      name: "Sarah Coleman",
      role: "CMO",
      metric: "2.3×",
      metricDescription: "increase in lead conversion",
      imageUrl: image("testimonial-card-kdanvbptr.png"),
    },
    {
      quote:
        "The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive. Their UX insights and performance tweaks made a huge difference in keeping users engaged.",
      name: "Marcus Levine",
      role: "Co-founder",
      metric: "45%",
      metricDescription: "Reduced bounce rate",
      imageUrl: image("testimonial-card-kdanvbptr-3.png"),
    },
    {
      quote:
        "Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision. Easily one of the best agencies we’ve worked with.",
      name: "Amina Khatri",
      role: "Head of Product",
      metric: "3x",
      metricDescription: "faster MVP launch",
      imageUrl: image("testimonial-card-kdanvbptr-2.png"),
    },
  ],
  faqs: [
    {
      question: "What is included with each Framer template?",
      answer:
        "Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize.",
    },
    {
      question: "Do I need coding skills to use your templates?",
      answer: "",
    },
    {
      question: "Can I use a template for multiple projects?",
      answer: "",
    },
    {
      question: "Are the templates optimized for performance?",
      answer: "",
    },
    {
      question: "Do you offer support after purchase?",
      answer: "",
    },
    {
      question: "Can I integrate third-party tools with these templates?",
      answer: "",
    },
    {
      question: "Do you offer customizations beyond the template?",
      answer: "",
    },
    {
      question: "Will my template receive updates?",
      answer: "",
    },
  ],
};

export const aboutFallback: AboutPageContent = {
  heroTitle: "Ambitious talents, for bold ideas.",
  heroSubtitle: "creating a culture where ideas flow freely and innovation thrives.",
  storyTitle: "Our story matters most",
  storyBody:
    "We believe great work comes from collaboration, curiosity, and a shared vision. Each team member, from designers to developers to strategists, brings unique skills and perspectives, creating a culture where ideas flow freely and innovation thrives. Beyond projects, we celebrate milestones together, share learnings, and support one another. Our bond goes beyond work, shaping Lamosa into not just a team but a community that’s driven to help brands grow and succeed.",
  teamMembers: [
    {
      name: "Elias Reed",
      role: "Founder & Creative Director",
      imageUrl: image("team-members-elias-reed-photo.jpg"),
    },
    {
      name: "Maya Koji",
      role: "Lead Product Designer",
      imageUrl: image("team-members-maya-koji-photo.png"),
    },
    {
      name: "Leo Martínez",
      role: "Senior Full-Stack Developer",
      imageUrl: image("team-members-leo-martinez-photo.jpg"),
    },
    {
      name: "Amina Johnson",
      role: "Brand Strategist",
      imageUrl: image("team-members-amina-johnson-photo.png"),
    },
    {
      name: "Tarek El-Hassan",
      role: "UI Motion Designer",
      imageUrl: image("team-members-tarek-el-hassan-photo.png"),
    },
  ],
  awards: [
    {
      name: "Awwwards – Site of the Day",
      description: "Recognizing outstanding design, creativity, and innovation in web experiences.",
      year: "2025",
    },
    {
      name: "FWA – Cutting Edge Award",
      description: "Awarded for pushing creative and technical boundaries in web design.",
      year: "2024",
    },
    {
      name: "CSS Design Awards – Best UI/UX",
      description: "Celebrating cutting-edge user interface and user experience design.",
      year: "2023",
    },
    {
      name: "Behance Interaction Design Feature",
      description: "Spotlighting exceptional interaction design showcased to a global audience.",
      year: "2023",
    },
    {
      name: "Webby Awards – Best Visual Design",
      description: "Honoring excellence in visual aesthetics and creative digital storytelling.",
      year: "2022",
    },
  ],
};

export const projectsFallback: Project[] = [
  {
    title: "Redesigning Atlas",
    slug: "redesigning-atlas",
    categories: ["SaaS", "Product Design", "UI Design", "UX Design"],
    description: "+45% engagement, -20% churn",
    coverUrl: image("projects-redesigning-atlas-banner.png"),
    gallery: [
      image("projects-redesigning-atlas-image-1.jpg"),
      image("projects-redesigning-atlas-image-2.png"),
      image("projects-redesigning-atlas-image-3.jpg"),
      image("projects-redesigning-atlas-image-4.png"),
      image("projects-redesigning-atlas-image-5.png"),
    ],
    storyHeadings: ["The Challenge & Research", "The Redesign & Results"],
    story: [
      "Atlas Technologies approached us to modernize the interface and overall user experience of their aging CRM platform. While their product was undeniably powerful, outdated workflows and a cluttered UI were limiting adoption and frustrating users. Complex navigation paths, inconsistent visual elements, and a steep learning curve were driving up support tickets and slowing down onboarding.",
      "We kicked off with a full UX audit, mapping the entire customer journey to uncover where users were getting stuck. Through user interviews, behavioral analytics, and direct observation, we identified major friction points in onboarding, dashboard navigation, and reporting features. These insights formed the foundation for a clear, data-driven redesign strategy.",
      "With a strategy in place, we restructured the platform’s information hierarchy to make workflows more intuitive and logical. Contextual UI patterns replaced generic layouts, while a cleaner, scalable design system brought visual consistency across the entire product. Using Framer, we built interactive prototypes to validate improvements early, ensuring user feedback shaped the final experience.",
    ],
  },
  {
    title: "Orbital Website Redesign",
    slug: "orbital-website-redesign",
    categories: ["Fintech", "Web Design", "UI Design", "UX Design"],
    description: "A modern, high-converting website for a fast-growing digital bank.",
    coverUrl: image("projects-orbital-website-redesign-banner.png"),
    gallery: [
      image("projects-orbital-website-redesign-image-1.png"),
      image("projects-orbital-website-redesign-image-2.png"),
      image("projects-orbital-website-redesign-image-5.png"),
    ],
    storyHeadings: ["The Challenge & Strategy", "The Build & Impact"],
    story: [
      "Orbital Bank, one of the fastest-growing players in digital banking, needed a complete overhaul of their outdated web presence. While their products and services reflected a forward-thinking approach to finance, their online experience didn’t match that vision. They wanted a modern, high-converting website that could build trust, highlight their innovation, and serve as a growth engine for customer acquisition.",
      "Lamosa began with a deep UX audit, mapping the customer journey and pinpointing friction points, drop-offs, and missed conversion opportunities. We crafted a strategy that balanced aesthetics with performance—building a visual and functional foundation that could evolve with the brand as it scaled.",
      "We implemented a sleek, scalable layout system, combining strong typography, a minimal and user-friendly interface, and a cool, trustworthy color palette ideal for the fintech space. Subtle micro-interactions and animations added moments of delight without sacrificing speed or usability. Accessibility was a top priority—ensuring inclusive, compliant, and intuitive experiences for all users.",
    ],
  },
  {
    title: "Launch MVP for Finlytics",
    slug: "launch-mvp-for-finlytics",
    categories: ["Fintech", "Product Design", "UI Design", "UX Design"],
    description: "A mobile-first investor dashboard MVP designed for a 30-day launch.",
    coverUrl: image("projects-launch-mvp-for-finlytics-banner.png"),
    gallery: [
      image("projects-launch-mvp-for-finlytics-image-1.png"),
      image("projects-launch-mvp-for-finlytics-image-2.jpg"),
      image("projects-launch-mvp-for-finlytics-image-3.png"),
      image("projects-launch-mvp-for-finlytics-image-4.png"),
      image("projects-launch-mvp-for-finlytics-image-5.png"),
    ],
    storyHeadings: ["The Vision & Challenge", "The Build & Launch"],
    story: [
      "Finlytics, a fast-moving fintech startup, set out to create intuitive financial dashboards tailored for individual investors. Their goal was clear: launch a minimum viable product (MVP) they could showcase to early adopters and potential investors within just 30 days. The challenge? Balancing speed with quality—ensuring the product was both functional and compelling, without sacrificing the ability to evolve rapidly after launch.",
      "They brought Lamosa on board at the product definition stage. Our role was to work as an embedded partner from day one, mapping user flows, sketching key interactions, and establishing feature priorities for version one. We knew every decision had to count, and that meant designing a product that could both wow at demos and serve as a reliable foundation for growth.",
      "Our team handled end-to-end design: UX/UI architecture, visual identity, and high-fidelity prototyping in Framer. The MVP was designed to be mobile-friendly from the ground up, optimized for quick data integration, and lightweight enough to iterate on without friction. We worked in rapid sprints, validating decisions with stakeholders and aligning every update with the 30-day deadline.",
    ],
  },
  {
    title: "Echo analytics",
    slug: "echo-analytics-motion-branding-launch-microsite",
    categories: ["SaaS", "Motion Design", "Branding", "Web Design"],
    description: "A motion-rich launch experience for a data analytics brand.",
    coverUrl: image("projects-echo-analytics-motion-branding-launch-microsite-ban.png"),
    gallery: [
      image("projects-echo-analytics-motion-branding-launch-microsite-ima.png"),
      image("projects-echo-analytics-motion-branding-launch-microsite-ima-2.png"),
      image("projects-echo-analytics-motion-branding-launch-microsite-ima-3.png"),
    ],
    storyHeadings: ["The Challenge & Approach", "The Build & Results"],
    story: [
      "Echo Analytics, a new player in the competitive data analytics space, wanted a launch that would instantly position them as a cutting-edge and design-forward brand. They needed more than just a website—they wanted an immersive, motion-rich experience that could tell their story visually, convey trust, and differentiate them from established competitors.",
      "Lamosa worked closely with their leadership team to define a sleek identity system and a microsite that blended storytelling with interactivity. The focus was on translating complex analytics concepts into a clear, engaging experience—one that would spark curiosity and create instant credibility with investors, prospects, and the data community.",
      "We developed a minimalist yet expressive interface enriched with custom animations, smooth transitions, and scroll-triggered interactions. These dynamic elements weren’t just for show—they were strategically designed to guide the user through Echo’s value proposition step by step, making every scroll feel intentional. The brand identity extended seamlessly across digital assets, ensuring a cohesive and memorable presence.",
    ],
  },
  {
    title: "Nova Platform",
    slug: "nova-e-commerce-platform-ui-overhaul",
    categories: ["Web Design", "Product Design", "UI Design", "UX Design"],
    description: "A streamlined shopping flow that lifted conversion rates by 28%.",
    coverUrl: image("projects-nova-e-commerce-platform-ui-overhaul-image-1.png"),
    gallery: [
      image("projects-nova-e-commerce-platform-ui-overhaul-image-1.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-2.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-3.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-4.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-5.png"),
    ],
    storyHeadings: ["The Challenge & Discovery", "The Redesign & Outcomes"],
    story: [
      "Nova asked us to modernize their e-commerce experience, with a special focus on product pages and the checkout flow. Despite strong traffic, shoppers were stalling at key decision points. We ran extensive user testing, reviewed session replays, and analyzed heatmaps to pinpoint friction—unclear product hierarchy, competing CTAs, and a multi-step checkout that created cognitive load. These insights shaped a clear plan to streamline the journey from discovery to purchase.",
      "We rebuilt the shopping flow end to end: simplified product detail pages with tighter information architecture, clearer pricing and variant selection, trust signals above the fold, and performance optimizations for faster load times. The checkout was reduced to fewer steps with auto-fill, real-time validation, and transparent shipping/tax summaries to reduce anxiety. The result was a noticeably smoother path to purchase—conversion rates rose by 28%, cart abandonment dropped significantly, and the site now feels faster, clearer, and more trustworthy across devices.",
      "Working with Lamosa was a game-changer. They turned our cluttered UX into a clean, high-converting experience. The difference was immediate and measurable.",
    ],
  },
  {
    title: "Brand Identity - StudioZ",
    slug: "boldbrand-identity-for-studioz",
    categories: ["Branding", "Motion Design", "Web Design"],
    description: "A flexible identity system for a creative agency.",
    coverUrl: image("projects-launch-mvp-for-finlytics-image-5.png"),
    gallery: [
      image("projects-launch-mvp-for-finlytics-banner.png"),
      image("projects-echo-analytics-motion-branding-launch-microsite-ban.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-1.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-2.png"),
      image("projects-nova-e-commerce-platform-ui-overhaul-image-3.png"),
    ],
    storyHeadings: ["The Challenge & Strategy", "The Identity Overhaul & Results"],
    story: [
      "StudioZ, a creative agency celebrated for its sharp storytelling and bold art direction, came to us for a brand refresh that would reflect the ambition and maturity of their evolving portfolio. While their client work was expressive and high-impact, their own identity lacked cohesion and structure—making it harder to communicate their true creative caliber. We began with a full branding sprint, running strategy workshops and conducting deep visual research to clarify their voice, mood, and audience positioning. This groundwork gave us a clear creative north star for the transformation ahead.",
      "We designed a distinctive new logotype, refined color palette, versatile type system, and a modular layout framework built for consistency across web, social, and pitch decks. To extend the brand’s personality, we developed a motion design direction with fluid transitions and subtle interactive cues, ensuring the identity feels alive and dynamic. Alongside the visual overhaul, we provided brand usage guidelines to empower the StudioZ team with clarity and control. The refreshed brand not only boosted inbound leads but also gave the agency a sharper, more unified presence across all touchpoints—matching the energy and sophistication of their work.",
      "We finally have a visual identity that lives up to our creative vision. The branding system Lamosa delivered feels tailored, expressive, and scalable. It’s already helped us win new clients and pitch with more confidence.",
    ],
  },
];
