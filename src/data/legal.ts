export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}

export const legalDocuments: Record<string, LegalDocument> = {
  "privacy-policy": {
    title: "Privacy Policy",
    updatedAt: "Jul 11, 2025",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Welcome to Lamosa Studio. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.",
        ],
      },
      {
        title: "Information We Collect",
        paragraphs: [
          "We collect personal information that you voluntarily provide when using our website or services, including:",
          "We also collect certain non-personal data such as IP address, browser type, and usage behavior through cookies and analytics tools.",
        ],
        bullets: ["Full name", "Email address", "Company name", "Billing and payment information"],
      },
      {
        title: "How We Use Your Information",
        paragraphs: ["We use the information we collect to:"],
        bullets: [
          "Provide, operate, and improve our services",
          "Process payments and manage transactions",
          "Communicate with you about updates, news, or promotions",
          "Improve user experience and website functionality",
        ],
      },
      {
        title: "Sharing Your Information",
        paragraphs: [
          "We do not sell your personal information. We may share it with trusted service providers who help us operate our business (e.g., payment processors or hosting services), under strict confidentiality agreements.",
        ],
      },
      {
        title: "Cookies and Tracking",
        paragraphs: [
          "We use cookies and similar tracking technologies to understand how users interact with our site. You can manage or disable cookies through your browser settings.",
        ],
      },
      {
        title: "Data Retention",
        paragraphs: [
          "We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.",
        ],
      },
      {
        title: "Your Rights",
        paragraphs: [
          "You have the right to access, correct, or delete your data. You may also object to certain uses or request data portability. To exercise your rights, contact us at:",
        ],
        bullets: ["privacy@lamosa.com"],
      },
      {
        title: "Security",
        paragraphs: [
          "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
        ],
      },
      {
        title: "Children’s Privacy",
        paragraphs: [
          "Our services are not intended for individuals under the age of 16. We do not knowingly collect data from children.",
        ],
      },
      {
        title: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy periodically. Significant changes will be communicated via email or a notice on our website.",
        ],
      },
      {
        title: "Contact",
        paragraphs: ["If you have questions about this Privacy Policy, contact us at:"],
        bullets: ["legal@lamosa.com"],
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    updatedAt: "Jul 11, 2025",
    sections: [
      {
        title: "Agreement to Terms",
        paragraphs: [
          "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
        ],
      },
      {
        title: "Services",
        paragraphs: [
          "Lamosa Studio provides design, development, branding, and digital product services. We reserve the right to modify or discontinue any service at any time.",
        ],
      },
      {
        title: "User Responsibilities",
        paragraphs: [
          "You agree to use our services lawfully and not engage in activities that could harm the functionality or reputation of our platform.",
        ],
      },
      {
        title: "Payments",
        paragraphs: [
          "All payments must be made through approved payment gateways. You agree to provide accurate billing details and authorize us to charge for services rendered.",
        ],
      },
      {
        title: "Intellectual Property",
        paragraphs: [
          "All content, templates, and code created by Lamosa Studio are protected by copyright and may not be copied, reused, or redistributed without permission.",
        ],
      },
      {
        title: "User-Submitted Content",
        paragraphs: [
          "Any content or feedback you submit to us may be used in our marketing or service improvements, unless stated otherwise.",
        ],
      },
      {
        title: "Third-Party Links",
        paragraphs: [
          "Our website may contain links to external websites. We are not responsible for their content or privacy practices.",
        ],
      },
      {
        title: "Termination",
        paragraphs: [
          "We reserve the right to suspend or terminate your access to our services for violations of these Terms.",
        ],
      },
      {
        title: "Disclaimers",
        paragraphs: [
          "Our services are provided “as is” without warranties of any kind. We do not guarantee uninterrupted access or results.",
        ],
      },
      {
        title: "Limitation of Liability",
        paragraphs: [
          "We are not liable for indirect or consequential damages that arise from your use of our services or products.",
        ],
      },
      {
        title: "Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of the country in which Lamosa Studio operates. Any disputes will be resolved in that jurisdiction.",
        ],
      },
      {
        title: "Changes to Terms",
        paragraphs: [
          "We may update these Terms periodically. Continued use of the website after updates constitutes acceptance of the revised terms.",
        ],
      },
      {
        title: "Contact",
        paragraphs: ["If you have questions about these Terms, reach us at:"],
        bullets: ["legal@lamosa.com"],
      },
    ],
  },
};
