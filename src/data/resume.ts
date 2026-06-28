export interface ProjectLink {
  type?: string;
  href: string;
}

export interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: ProjectLink[];
  win?: string;
}

export interface WorkEntry {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

export interface EducationEntry {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface ProjectEntry {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video: string;
}

export interface VolunteeringEntry {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  navbar?: boolean;
}

export interface ResumeData {
  personal: {
    name: string;
    initials: string;
    description: string;
    summary: string;
    avatar: string;
    location: string;
    locationUrl: string;
  };
  skills: {
    name: string;
    icon: string;
  }[];
  navbar: {
    href: string;
    icon: string;
    label: string;
  }[];
  contact: {
    email: string;
    phone: string;
    social: Record<string, SocialLink>;
  };
  work: WorkEntry[];
  education: EducationEntry[];
  projects: ProjectEntry[];
  volunteering: VolunteeringEntry[];
  hackathons: Hackathon[];
}

export const resume: ResumeData = {
  personal: {
    name: "Yash Gupta",
    initials: "YG",
    description:
      "Cybersecurity PM at ICICI Bank | Zscaler · Zero Trust · ZTNA | Engineer turned Product Manager",
    summary:
      "I'm an engineer-turned-Product-Manager working at the intersection of enterprise cybersecurity and infrastructure. At [ICICI Bank](/#work) I manage the Zscaler product suite and have led large-scale infrastructure migrations to Zero Trust architecture.\n\nPrior to this, I built a national-level cybersecurity audit scoring framework at [CERT-In](/#work) (India's national computer emergency response team), and developed an AI-powered product summarisation pipeline using AWS Bedrock at [1Vendor Platform](/#work).\n\nI graduated with a B.Tech in Production & Industrial Engineering from [BIT Mesra](/#education) in the **top 5% of my batch**. My interests span zero trust architecture, cloud security, AI/ML applications, and building systems that work at scale under real-world constraints.",
    avatar: "/me.jpg",
    location: "Mumbai, Maharashtra, India",
    locationUrl: "https://www.google.com/maps/place/Mumbai",
  },
  skills: [
    { name: "Zscaler", icon: "zscaler" },
    { name: "Zero Trust", icon: "zerotrust" },
    { name: "AWS", icon: "aws" },
    { name: "Salesforce", icon: "salesforce" },
    { name: "ServiceNow", icon: "servicenow" },
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
    { name: "Pandas", icon: "python" },
    { name: "Git", icon: "github" },
  ],
  navbar: [
    { href: "/", icon: "home", label: "Home" },
    { href: "/blog", icon: "blog", label: "Blog" },
    { href: "/ideas", icon: "ideas", label: "Ideas" },
  ],
  contact: {
    email: "ygbit8@gmail.com",
    phone: "+916206261692",
    social: {
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashgupta8823/",
        icon: "linkedin",
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ygbit8@gmail.com",
        icon: "email",
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "ICICI Bank",
      href: "https://www.icicibank.com/",
      badges: ["Full-time"],
      location: "Mumbai, India",
      title: "Deputy Manager II – Technology Infrastructure (Cybersecurity)",
      logoUrl: "/icici.png",
      start: "Jul 2025",
      end: "Present",
      description:
        "Managing the Zscaler product suite (ZIA, ZPA, ZDX, ZCC) deployed across 140,000+ employees, ensuring secure and reliable internet and application access.\n\nLed the migration of 282 banking applications and 6,000 servers from legacy Bluecoat proxy to Zscaler, representing the largest infrastructure migration of its kind in the organisation. Handle end-to-end issue resolution (access, connectivity, whitelisting, blocking) at scale; primary point of contact for Zscaler support operations.\n\nCoordinate cross-functional stakeholders, including application owners, network teams, and business units, for ZTNA onboarding and Active Directory SDL configuration. Manage firewall port request workflows via ServiceNow and F5 load balancer configurations.",
    },
    {
      company: "1Vendor Platform (1VP)",
      href: "",
      badges: ["Internship"],
      location: "Bengaluru, India",
      title: "Software Development Engineer Intern",
      logoUrl: "/vendor1.jpg",
      start: "Feb 2025",
      end: "Jun 2025",
      description:
        "Built an AI-powered product description summarisation system using AWS Bedrock (Amazon Titan AI), Lambda, S3, and DynamoDB, delivering an end-to-end AI pipeline from ingestion to storage.\n\nDeveloped a Salesforce order tracking component using Lightning Web Components (LWC) and Apex for real-time order status display. Built a Python automation tool for duplicate detection in large CSV datasets using Pandas, improving data quality and significantly reducing manual effort.",
    },
    {
      company: "CERT-In",
      href: "https://www.cert-in.org.in/",
      badges: ["Internship"],
      location: "New Delhi, India",
      title: "Project Intern – Cybersecurity",
      logoUrl: "/certin.jpg",
      start: "May 2024",
      end: "Jul 2024",
      description:
        "Designed and developed a cybersecurity audit scoring framework to evaluate and benchmark security audits across organisations at a national level.\n\nDelivered data-driven insights that informed policy adjustments and operational improvements at India's national CERT. Contributed to national-level cybersecurity standards and frameworks used for compliance evaluation across government and private entities.",
    },
    {
      company: "IIM Ranchi",
      href: "https://www.iimranchi.ac.in/",
      badges: ["Research"],
      location: "Ranchi, India",
      title: "Research Intern",
      logoUrl: "/iimr.webp",
      start: "Apr 2024",
      end: "Jul 2024",
      description:
        "Worked on recommendation systems research by reviewing multiple academic papers on collaborative filtering, content-based and hybrid approaches, and curating new ideas building on existing literature.",
    },
  ],
  education: [
    {
      school: "Birla Institute of Technology, Mesra",
      href: "https://www.bitmesra.ac.in/",
      degree:
        "B.Tech – Production & Industrial Engineering | CGPA: 8.07/10 (Top 5%)",
      logoUrl: "/bit_mesra.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Bluecoat → Zscaler Migration",
      href: "https://www.icicibank.com/",
      dates: "Jul 2025 – Present",
      active: true,
      description:
        "Led the bank-wide migration of 282 banking applications and 6,000 servers from legacy Bluecoat proxy to Zscaler across ICICI Bank. Managed secure connectivity and ZTNA onboarding for 140,000+ employees, coordinating across application owners, network teams, and business units. This is the largest infrastructure migration of its kind in the organisation.",
      technologies: [
        "Zscaler ZIA",
        "Zscaler ZPA",
        "Zscaler ZDX",
        "ZTNA",
        "Zero Trust",
        "Active Directory",
        "ServiceNow",
        "F5 Load Balancers",
      ],
      links: [],
      image: "/project/bluecoat_zscaler.webp",
      video: "",
    },
    {
      title: "AI Product Summariser – AWS Bedrock",
      href: "",
      dates: "Feb 2025 – Jun 2025",
      active: false,
      description:
        "Built an end-to-end AI-powered product description summarisation pipeline at 1Vendor Platform using AWS Bedrock with Amazon Titan AI as the foundation model. Integrated Lambda for serverless compute, S3 for document storage, and DynamoDB for result persistence, enabling scalable, automated content generation for large product catalogues.",
      technologies: [
        "AWS Bedrock",
        "Amazon Titan AI",
        "AWS Lambda",
        "AWS S3",
        "DynamoDB",
        "Python",
        "Prompt Engineering",
      ],
      links: [],
      image: "/project/aws_bedrock.png",
      video: "",
    },
    {
      title: "CERT-In Cybersecurity Audit Scoring Framework",
      href: "https://www.cert-in.org.in/",
      dates: "May 2024 – Jul 2024",
      active: false,
      description:
        "Designed and developed a comprehensive cybersecurity audit scoring framework for CERT-In to evaluate and benchmark security postures of organisations across India. The framework produced data-driven insights that informed national-level policy adjustments and operational improvements, contributing to India's cybersecurity compliance standards.",
      technologies: [
        "Python",
        "Data Analysis",
        "Cybersecurity Frameworks",
        "Policy Development",
        "Excel",
      ],
      links: [],
      image: "/project/certin_framework.png",
      video: "",
    },
    {
      title: "Heart Disease Prediction Model",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Built a logistic regression model on clinical parameters for real-time heart disease risk prediction. Developed a clinical decision support interface that enables healthcare practitioners to input patient data and receive risk scores. Focused on interpretability and ease of use in clinical settings.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Logistic Regression",
        "Pandas",
        "Machine Learning",
        "Healthcare AI",
      ],
      links: [],
      image: "/project/heart_disease.png",
      video: "",
    },
    {
      title: "Music Store Data Analysis (SQL)",
      href: "",
      dates: "2023",
      active: false,
      description:
        "Analysed a music store's sales database using SQL to uncover revenue trends, identify popular genres, and understand customer behaviour patterns. Produced actionable business insights for inventory management and targeted marketing strategies.",
      technologies: ["SQL", "Data Analysis", "Business Intelligence", "PostgreSQL"],
      links: [],
      image: "/project/music_sql.png",
      video: "",
    },
    {
      title: "Road Congestion Reduction – Greater Mumbai",
      href: "",
      dates: "IIT Guwahati Case Study",
      active: false,
      description:
        "Designed adaptive traffic control systems and dynamic pricing strategies for large-scale urban traffic management in Greater Mumbai. Led stakeholder engagement and risk management across multiple transport modalities. Focused on systemic approaches to reduce peak-hour congestion and improve overall urban mobility.",
      technologies: [
        "Traffic Modelling",
        "Dynamic Pricing",
        "Stakeholder Management",
        "Urban Planning",
        "Risk Analysis",
      ],
      links: [],
      image: "/project/road_congestion.webp",
      video: "",
    },
  ],
  volunteering: [],
  hackathons: [],
};
