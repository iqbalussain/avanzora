export interface CareerRole {
  slug: string;
  title: string;
  summary: string;
  postedAt: string;
  deadline: string;
  location: string;
  employmentType: string;
  salary: string;
  about: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const careerBenefits = [
  {
    title: "Competitve Salary",
    description: "Competitive salary with performance bonuses.",
  },
  {
    title: "Creativity",
    description: "Creative freedom and decision-making authority.",
  },
  {
    title: "Team Events",
    description: "Virtual and in-person meet-up to connect and have fun.",
  },
  {
    title: "Learning & Growth",
    description: "Annual budget for courses, conferences, and mentorship.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness support.",
  },
  {
    title: "Generous time off",
    description: "Recharge with flexible vacation and paid holidays.",
  },
];

export const careerRoles: CareerRole[] = [
  {
    slug: "creative-director",
    title: "Creative Director",
    summary: "Lead the vision, strategy, and execution of world-class digital experiences.",
    postedAt: "Aug 1, 2025",
    deadline: "Sep 20, 2025",
    location: "Onsite",
    employmentType: "Full Time",
    salary: "$90,000 – $120,000/year",
    about:
      "As our Creative Director, you’ll guide the creative strategy and ensure our design, motion, and development teams produce work that exceeds client expectations. You’ll be the bridge between client needs and the execution of high-impact digital experiences.",
    description:
      "We’re searching for a visionary Creative Director with a deep understanding of digital design, user experience, and brand storytelling. You’ll oversee multiple projects, mentor creative teams, and ensure every deliverable is strategically aligned and beautifully executed. This role demands leadership, innovation, and a strong grasp of industry trends.",
    responsibilities: [
      "Lead creative vision across all client projects.",
      "Ensure consistency and excellence in all design deliverables.",
      "Collaborate with clients to define brand direction and strategy.",
      "Mentor and inspire designers, developers, and motion artists.",
      "Review and approve final outputs for quality and brand alignment.",
    ],
    requirements: [
      "8+ years in creative leadership roles.",
      "Strong portfolio of agency or studio work.",
      "Expertise in Figma, Framer, and modern design practices.",
      "Exceptional leadership and client communication skills.",
    ],
    benefits: [
      "Competitive salary with performance bonuses.",
      "Annual company retreats.",
      "Creative freedom and decision-making authority.",
      "Opportunities to work with international, high-profile clients.",
    ],
  },
  {
    slug: "motion-designer",
    title: "Motion Designer",
    summary: "Bring digital experiences to life with stunning motion and animation.",
    postedAt: "Jul 20, 2025",
    deadline: "Aug 30, 2025",
    location: "Remote",
    employmentType: "Part Time",
    salary: "$50,000 – $70,000/year",
    about:
      "We’re looking for a Motion Designer who can turn static designs into captivating, dynamic experiences. You’ll create animations, micro-interactions, and product explainers that communicate ideas with flair and precision.",
    description:
      "As a Motion Designer, you’ll collaborate closely with our design and development teams to infuse our digital products with engaging movement and transitions. Whether it’s subtle button animations or full-scale promotional videos, your work will help brands stand out in a competitive market.",
    responsibilities: [
      "Design and produce animations for websites, ads, and social content.",
      "Develop smooth transitions and interactive effects for Framer projects.",
      "Work with storyboards and translate concepts into motion.",
      "Ensure animations align with brand tone and enhance usability.",
    ],
    requirements: [
      "3+ years in motion design or animation.",
      "Skilled in After Effects, Lottie, and Framer motion capabilities.",
      "Strong portfolio showcasing animation work.",
      "Ability to manage multiple projects and deadlines.",
    ],
    benefits: [
      "Flexible work arrangements.",
      "Opportunities to collaborate with global brands.",
      "Paid per project with premium rates.",
    ],
  },
  {
    slug: "no-code-web-developer-(framer-specialist)",
    title: "No-Code Web Developer",
    summary: "Build beautiful, functional websites without writing a single line of code.",
    postedAt: "Aug 9, 2025",
    deadline: "Sep 12, 2025",
    location: "Remote",
    employmentType: "Full Time",
    salary: "$55,000 – $75,000/year",
    about:
      "We’re seeking a Framer expert to turn high-fidelity designs into fully functional, high-performance websites. You’ll work alongside designers, copywriters, and strategists to create seamless user experiences and bring creative visions to life—fast.",
    description:
      "As a No-Code Web Developer, you’ll be responsible for translating design concepts into interactive, conversion-optimized websites in Framer. Your role goes beyond simple builds—you’ll optimize for speed, SEO, and usability while integrating animations and micro-interactions to enhance the user journey.",
    responsibilities: [
      "Develop pixel-perfect, responsive websites in Framer based on provided Figma files.",
      "Implement CMS collections, conditional logic, and dynamic content.",
      "Optimize websites for speed, SEO, and cross-device performance.",
      "Add animations, interactions, and motion effects that enhance usability.",
      "Collaborate with designers to ensure the creative vision is met.",
    ],
    requirements: [
      "3+ years of web development experience, with a strong Framer portfolio.",
      "Proficiency in Figma and basic HTML/CSS understanding.",
      "Experience integrating APIs and third-party tools.",
      "Strong problem-solving and troubleshooting skills.",
    ],
    benefits: [
      "Fully remote work setup.",
      "Flexible working hours.",
      "$1,000/year for upskilling.",
      "Opportunity to work on award-winning digital experiences.",
    ],
  },
  {
    slug: "freelance-motion-designer-(remote)",
    title: "Senior Product Designer",
    summary: "Craft high-impact, conversion-driven designs for global brands.",
    postedAt: "Jul 29, 2025",
    deadline: "Aug 25, 2025",
    location: "Remote",
    employmentType: "Full Time",
    salary: "$70,000 – $90,000/year",
    about:
      "As our Senior Product Designer, you’ll lead projects from concept to launch, shaping visually stunning, high-performing websites and digital products. You’ll collaborate with cross-functional teams, blend creative vision with strategic thinking, and ensure every design decision drives measurable business results.",
    description:
      "We’re looking for a highly skilled product designer to elevate our client projects to the next level. You’ll take full ownership of the design process, from translating ideas into wireframes to delivering polished, interactive UIs built for conversion. Working closely with developers, you’ll ensure pixel-perfect, responsive, and brand-consistent designs. This role is ideal for a creative strategist with a keen eye for detail, a passion for user experience, and the drive to innovate in every project.",
    responsibilities: [
      "Lead end-to-end design processes for websites, SaaS products, and digital campaigns.",
      "Conduct research, analyze insights, and define design strategies that align with client goals.",
      "Create wireframes, prototypes, and high-fidelity designs in Figma.",
      "Collaborate with developers to ensure seamless, performance-optimized implementation.",
      "Advocate for design best practices, accessibility, and brand consistency.",
    ],
    requirements: [
      "5+ years in UI/UX or product design roles.",
      "Strong portfolio with web and mobile application work.",
      "Mastery of Figma and prototyping tools.",
      "Proven experience with responsive and component-based design systems.",
      "Excellent communication and client-facing skills.",
    ],
    benefits: [
      "100% remote work with flexible hours.",
      "$1,500 annual learning budget.",
      "Monthly wellness stipend.",
      "Work with top-tier SaaS brands and high-growth startups.",
    ],
  },
];
