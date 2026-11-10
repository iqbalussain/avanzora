import type { AboutPageContent, HomePageContent, Project } from "../types/content";

const image = (name: string) => `/assets/images/${name}`;

export const homeFallback: HomePageContent = {
  heroTitle: "Your Complete Technology Partner.",
  heroDescription:
    "From custom software and digital experiences to cloud infrastructure, networking and managed IT support, Avanzora helps businesses build and manage the technology they depend on.",
  metrics: [
    {
      value: "Digital",
      title: "Websites and applications",
      description:
        "Corporate websites, e-commerce and web applications developed around your business needs.",
    },
    {
      value: "Software",
      title: "Business systems",
      description:
        "Custom software, ERP, POS, inventory, payroll and workforce tools.",
    },
    {
      value: "Cloud",
      title: "Hosting and infrastructure",
      description:
        "Hosting, servers, deployment, migration, DNS, SSL and backups.",
    },
    {
      value: "IT",
      title: "Networks and support",
      description:
        "Business networking, Wi-Fi, structured cabling, CCTV, maintenance and technical assistance.",
    },
  ],
  services: [
    {
      title: "Website & Digital Development",
      description:
        "Corporate websites, e-commerce and web applications, with development, maintenance and optimization.",
      imageUrl: image("services-card-vy29lxghc.webp"),
    },
    {
      title: "Business Software & Automation",
      description:
        "Custom applications, ERP and POS solutions, workflow automation, integrations, reporting and dashboards.",
      imageUrl: image("services-card-wlxfg4mi6.jpeg"),
    },
    {
      title: "Cloud, Hosting & Infrastructure",
      description:
        "Web and VPS hosting, cloud infrastructure, server configuration, deployment, migration and backups.",
      imageUrl: image("services-card-bdovic0vi.jpg"),
    },
    {
      title: "Networking, Security & IT Support",
      description:
        "Business networks, Wi-Fi, cabling, CCTV, troubleshooting, maintenance and ongoing technical support.",
      imageUrl: image("services-card-klzjikktl.png"),
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Understand your operation",
      description:
        "Review your requirements, current systems and operational priorities.",
    },
    {
      number: "02",
      title: "Plan the right solution",
      description:
        "Define a practical scope for the software, digital experience or infrastructure you need.",
    },
    {
      number: "03",
      title: "Build and deploy",
      description:
        "Develop, configure and launch the agreed technology solution.",
    },
    {
      number: "04",
      title: "Support and improve",
      description:
        "Discuss maintenance, improvements and ongoing support for your solution.",
    },
  ],
  pricingPlans: [
    {
      name: "Website & Digital Development",
      description: "Websites, online stores and web applications developed around your business requirements.",
      cta: "Request Quote",
      priceUnit: "Custom scope based on functional requirements.",
      features: [
        "Corporate and business websites",
        "E-commerce websites and landing pages",
        "Web application development",
        "Frontend and backend development",
        "Website maintenance and optimization",
      ],
    },
    {
      name: "Business Software & Automation",
      description: "Custom applications, business systems, integrations and workflow automation.",
      cta: "Schedule Consultation",
      priceUnit: "Scoped around enterprise modules & scale.",
      features: [
        "Custom business applications",
        "ERP, POS, inventory and workforce systems",
        "Business process automation",
        "API and system integrations",
        "Reporting and dashboards",
      ],
    },
    {
      name: "Cloud, Networking & IT Support",
      description: "Infrastructure, connectivity, security and technical support for business operations.",
      cta: "Discuss Support Plan",
      priceUnit: "Tailored maintenance & deployment packages.",
      features: [
        "Web, VPS and cloud hosting",
        "Server setup, deployment and migration",
        "Business networking and CCTV",
        "Infrastructure maintenance and backups",
        "Technical assistance and consultation",
      ],
    },
  ],
  testimonials: [
    {
      quote: "We start with your business requirements and the systems you already rely on.",
      name: "Requirements first",
      role: "Our approach",
      imageUrl: image("testimonial-card-kdanvbptr-4.png"),
    },
    {
      quote: "Recommendations are shaped around how your organization works.",
      name: "Business focused",
      role: "Our approach",
      imageUrl: image("testimonial-card-kdanvbptr.jpg"),
    },
    {
      quote: "Digital products and business infrastructure belong in the same technology conversation.",
      name: "Connected services",
      role: "Our approach",
      imageUrl: image("testimonial-card-kdanvbptr-2.jpg"),
    },
    {
      quote: "Software, cloud services and IT support can be scoped to work together.",
      name: "Practical integration",
      role: "Our approach",
      imageUrl: image("testimonial-card-kdanvbptr.png"),
    },
    {
      quote: "We focus on useful, maintainable solutions rather than unnecessary complexity.",
      name: "Fit for purpose",
      role: "Our approach",
      imageUrl: image("testimonial-card-kdanvbptr-3.png"),
    },
    {
      quote: "Support and maintenance options are discussed alongside the solution requirements.",
      name: "Ongoing support",
      role: "Our approach",
      imageUrl: image("testimonial-card-kdanvbptr-2.png"),
    },
  ],
  faqs: [
    {
      question: "What services does Avanzora provide?",
      answer: "Avanzora provides software and website development, business applications, cloud and hosting services, networking, CCTV, IT support and business automation.",
    },
    {
      question: "Can you develop custom business software?",
      answer: "Yes. Avanzora can develop business applications and systems such as ERP, POS, inventory, payroll and project-management tools based on business requirements.",
    },
    {
      question: "Do you build websites and web applications?",
      answer: "Yes. Services include corporate and e-commerce websites, landing pages and web applications.",
    },
    {
      question: "Do you provide hosting and cloud infrastructure?",
      answer: "Yes. Services include hosting, VPS and cloud infrastructure, server configuration, deployment, migration, DNS, SSL and backups.",
    },
    {
      question: "Can you install business networks and CCTV?",
      answer: "Avanzora provides business networking, Wi-Fi, structured cabling and CCTV/IP camera systems.",
    },
    {
      question: "Do you offer ongoing IT support?",
      answer: "Avanzora provides technical consultation, setup, troubleshooting and IT maintenance. Support arrangements should be confirmed for each engagement.",
    },
    {
      question: "Can you automate existing business processes?",
      answer: "Avanzora can help with workflow automation, integrations, reporting and dashboards based on the systems and processes involved.",
    },
    {
      question: "Can services be tailored to our requirements?",
      answer: "Services can be scoped around your business requirements, existing technology and priorities.",
    },
  ],
};

export const aboutFallback: AboutPageContent = {
  heroTitle: "Technology. Built for Business.",
  heroSubtitle: "Avanzora helps businesses build, operate and improve the technology they rely on.",
  storyTitle: "One partner for business technology",
  storyBody:
    "Businesses rely on more than a website or a single IT provider. Avanzora connects digital development, business software, cloud infrastructure, networking and technical support. We focus on understanding how an organization works, then identifying practical technology that supports its needs.",
  teamMembers: [
    {
      name: "Software & applications",
      role: "Websites, web apps and business systems",
      imageUrl: image("team-members-elias-reed-photo.jpg"),
    },
    {
      name: "Cloud & hosting",
      role: "Infrastructure, deployment and backups",
      imageUrl: image("team-members-maya-koji-photo.png"),
    },
    {
      name: "Networks & security",
      role: "Business networks, Wi-Fi and CCTV",
      imageUrl: image("team-members-leo-martinez-photo.jpg"),
    },
    {
      name: "Automation & data",
      role: "Integrations, reporting and dashboards",
      imageUrl: image("team-members-amina-johnson-photo.png"),
    },
    {
      name: "Technical support",
      role: "Setup, troubleshooting and maintenance",
      imageUrl: image("team-members-tarek-el-hassan-photo.png"),
    },
  ],
  awards: [
    {
      name: "Website & software development",
      description: "Websites, web applications and custom business software.",
      year: "Core service",
    },
    {
      name: "Cloud & infrastructure",
      description: "Hosting, servers, deployment, migration and backup solutions.",
      year: "Core service",
    },
    {
      name: "Networking & security",
      description: "Business networks, structured cabling, Wi-Fi and CCTV systems.",
      year: "Core service",
    },
    {
      name: "IT support & maintenance",
      description: "Technical setup, troubleshooting, consultation and ongoing support.",
      year: "Core service",
    },
    {
      name: "Automation & data",
      description: "Workflow automation, integrations, reporting and dashboards.",
      year: "Core service",
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
