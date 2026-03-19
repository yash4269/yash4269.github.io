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
    name: "Saurabh Gupta",
    initials: "SG",
    description:
      "Co-Founder @Heisenbug | Building agentic compliance solutions | Obsessed with systems that work in the real world",
    summary:
      "I grew up wanting to build things but never had the parts. So I learned to improvise. At [IIT Bombay](/#education) I have done UAVs, cryptography, robots, and now a startup. Everything I have worked on connects back to the same obsession: building systems that work in the real world, under real constraints. [Heisenbug](https://www.heisenbug.ai/) is the most important thing I am building right now - an agentic compliance platform tackling India's DPDP Act. What I ultimately want is to push human civilisation up the [Kardashev scale](https://en.wikipedia.org/wiki/Kardashev_scale) by contributing to interplanetary travel, and I believe robotic general intelligence is the way.",
    avatar: "/me.png",
    location: "Mumbai, Maharashtra, India",
    locationUrl: "https://www.google.com/maps/place/Mumbai",
  },
  skills: [
    { name: "Python", icon: "python" },
    { name: "C/C++", icon: "cpp" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Typescript", icon: "typescript" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Postgres", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
    { name: "Go", icon: "golang" },
    { name: "Kubernetes", icon: "kubernetes" },
  ],
  navbar: [
    { href: "/", icon: "home", label: "Home" },
    { href: "/blog", icon: "blog", label: "Blog" },
    { href: "/ideas", icon: "ideas", label: "Ideas" },
  ],
  contact: {
    email: "saurabhgupta0342@gmail.com",
    phone: "+919508709729",
    social: {
      github: {
        name: "GitHub",
        url: "https://github.com/saurabh4269",
        icon: "github",
        navbar: true,
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saurabhgupta0342/",
        icon: "linkedin",
        navbar: true,
      },
      x: {
        name: "X",
        url: "https://x.com/SaurabhGupta_42",
        icon: "x",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gupta.saurabh@iitb.ac.in",
        icon: "email",
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Heisenbug",
      href: "https://www.heisenbug.ai/",
      badges: ["Founder"],
      location: "Mumbai, India",
      title: "Co-Founder",
      logoUrl: "/heisenbug.svg",
      start: "Dec 2025",
      end: "Present",
      description:
        "Heisenbug is a technology company building agentic compliance and security-first systems for a world where data, regulation, and digital workflows are rapidly colliding.Our mission is to help organizations navigate the growing complexity of data privacy, governance, and compliance through trustworthy, continuously adaptive infrastructure. \n\nOur first product, Goodman, is an agentic privacy-operations platform that monitors, enforces, and responds to data-protection obligations across an organization's entire data stack.",
    },
    {
      company: "Nokia",
      href: "https://www.nokia.com/",
      badges: ["Research"],
      location: "Mumbai, India",
      title: "Post-Quantum Cryptography Research Intern",
      logoUrl: "/nokia.svg",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Contributed to IETF draft evaluation on PQC algorithms in TLS 1.3. Worked on benchmarking Post-Quantum Cryptography algorithms as part of an effort aligned with NIST standardization, with Nokia collaborating alongside TC2AI. Evaluated PQC algorithms within TLS 1.3, focusing on real world performance characteristics.\n\nDesigned a Docker based test pipeline to measure handshake latency, data volume, and CPU energy consumption. Implemented scripts for data aggregation, analysis, and visualization across PQC key exchange and authentication flows. Benchmarked PQC implementations against classical cryptographic counterparts to support informed recommendations.",
    },
    {
      company: "IITB Trust Lab",
      href: "https://trustlab.iitb.ac.in/",
      badges: ["Research"],
      location: "Mumbai, India",
      title: "Cybersecurity Research Developer",
      logoUrl: "/trust_lab.svg",
      start: "May 2024",
      end: "Jul 2024",
      description:
        "At IITB Trust Lab, we began by exploring the capabilities and cybersecurity applications of Wireshark. We studied its architecture, protocol-dissection workflows, and opportunities for improving detection, analysis, and operational visibility. During this phase, we proposed enhancements related to protocol dissection, anomaly detection, and SOC integration, including visualization workflows using Grafana. \n\nBuilding on this foundation, we later joined the Summer of Code program, where we were selected among 131 participating teams to co-author a whitepaper with the Wireshark team. We developed a Wireshark plugin that integrates machine-learning-based threat detection for encrypted network traffic, applying protocol fingerprinting and a Naive Bayes classifier for advanced traffic analysis. We also built a Lua-based detection module after setting up and compiling the full Wireshark and Mercury source code locally with CMake.",
    },
    {
      company: "baatchIIT",
      href: "",
      badges: ["Startup"],
      location: "IIT Bombay",
      title: "Bootstrapped Venture",
      logoUrl: "/baatchiit.png",
      start: "Jan 2024",
      end: "Jun 2024",
      description:
        "Led JoSAA counselling support initiative, mentoring over 180 students after personally reaching out to more than 800 students alongside a friend. Built and operated a lean revenue model generating approximately Rs. 2 lakh with minimal investment, while coordinating mentors from NITs and IIITs. Managed mentor payouts efficiently and achieved around 20 percent profit, resulting in roughly Rs. 40k net.\n\nAlso discovered a few unconventional life hacks along the way that I would be happy to share in person. O_o",
    },
    {
      company: "Just",
      href: "",
      badges: ["Startup"],
      location: "IIT Bombay",
      title: "Co-Founder",
      logoUrl: "/just.png",
      start: "Jan 2023",
      end: "Jul 2023",
      description:
        "Built a platform to help people find others with shared interests for real world activities, moving beyond traditional dating apps by focusing on shared moments rather than long term commitments. Led product design and development with a team of five developers and three cofounders, and secured Rs. 1 lakh in funding along with Rs. 10 lakh in investment commitments.\n\nDespite strong early interest, we were unable to crack go to market strategy and did not achieve meaningful traction or revenue. It was something we were genuinely excited about, which made the experience more impactful.\n\nThe journey provided a deep learning curve, including talking to users without bias, focusing on benefits over features, executing with discipline, managing finances, hiring and collaborating with a team, and handling difficult conversations when they mattered. It did not become the company we imagined, but it was a practical and humbling experience.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Bombay",
      href: "https://www.iitb.ac.in/",
      degree:
        "Dual Degree (B.Tech. + M.Tech.) Environmental Science and Engineering | Minors: Artificial Intelligence and Data Science | Robotics",
      logoUrl: "/iitb.svg",
      start: "2022",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Goodman - Agentic Privacy Operations Platform",
      href: "https://www.heisenbug.ai/",
      dates: "December 2025 - Present",
      active: true,
      description:
        "Heisenbug's flagship product. An agentic privacy operations platform that continuously monitors, enforces, and responds to data protection obligations across an organization's entire data infrastructure — built ground-up for India's DPDP Act with agentic AI at the core.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Agentic AI",
        "DPDP Compliance",
        "Next.js",
        "TypeScript",
      ],
      links: [
        { type: "Website", href: "https://www.heisenbug.ai/" },
      ],
      image: "/project/goodman.png",
      video: "",
    },
    {
      title: "Flexible Spine Quadruped Gait Simulation",
      href: "https://github.com/saurabh4269/flexible_spine_quadruped",
      dates: "August 2024 - December 2024",
      active: false,
      description:
        "Developed a Simscape model of a quadruped with a flexible spine. Analyzed locomotion via Lagrangian formulation. Simulated bounding gait cycles with torsional spring-damper modeling, achieving 2+ natural gait cycles validated with 10+ graphs.",
      technologies: [
        "MATLAB",
        "Simscape",
        "Lagrangian Dynamics",
        "Robotics",
        "Control Systems",
      ],
      links: [],
      image: "/project/flexible_spine_quadruped.gif",
      video: "",
    },
    {
      title: "Propulsive Re-Landing of Rocket",
      href: "",
      dates: "Sep 2023 - Mar 2024",
      active: false,
      description:
        "Proposed and designed a reusable liquid fuel rocket with a focus on propulsive re landing and control systems. Developed a methalox engine concept and performed preliminary kinematic calculations for fuel requirements.\n\nSimulated thrust vector control using MATLAB, designing control strategies for mid air reorientation and soft landing. Built CAD models and conducted feasibility and economic analyses inspired by modern reusable launch systems.",
      technologies: ["MATLAB", "CAD", "Control Systems", "Rocket Propulsion", "Simulation"],
      links: [],
      image: "/project/ros.png",
      video: "",
    },
    {
      title: "Unmanned Aerial Systems Challenge 2024",
      href: "",
      dates: "Jan 2024 - Jul 2024",
      active: false,
      description:
        "Participated in the international UAS Challenge organized by IMechE, UK, focused on designing autonomous UAVs capable of waypoint navigation and payload delivery.\n\nDesigned and built a fixed wing UAV with a 2.2 meter wingspan and 5 kg weight, optimized for 16 mps cruise speed, achieving 35 minutes endurance and 30 km range with up to 3 kg payload capacity.\n\nImplemented autonomous flight capabilities including automatic takeoff, waypoint navigation, payload drop, and landing using ArduPilot. Achieved Operational Supportability Award, Best Flight Special Mention, and secured 2nd global rank in simulation through accurate modeling and performance optimization in XPlane.",
      technologies: ["ArduPilot", "Pixhawk", "XPlane", "Autonomous Systems", "Flight Dynamics"],
      links: [],
      image: "/project/ares.png",
      video: "",
    },
    {
      title: "Proteus - Aerodynamic Optimization",
      href: "",
      dates: "Aug 2023 - Sep 2023",
      active: false,
      description:
        "Implemented genetic algorithms using Python integrated with XFLR5, Flow5, and OpenVSP to optimize aerodynamic structures.\n\nDeveloped efficient 2D and 3D airfoils tailored to specific operating conditions and designed optimized configurations for unconventional aircraft using Bezier curve based modeling.",
      technologies: ["Python", "XFLR5", "OpenVSP", "Genetic Algorithms", "Aerodynamics"],
      links: [],
      image: "/project/bezier.gif",
      video: "",
    },
    {
      title: "Autonomous Quadcopter",
      href: "",
      dates: "Aug 2022 - Dec 2022",
      active: false,
      description:
        "Built and tested an autonomous quadcopter by integrating Pixhawk flight controller with onboard sensors and RF communication systems.\n\nCalibrated transmitters and sensors, performed aerial test flights, and implemented waypoint based autonomous navigation using QGroundControl and MAVROS.",
      technologies: ["Pixhawk", "MAVROS", "QGroundControl", "Embedded Systems", "UAV"],
      links: [],
      image: "/project/skyhawk.png",
      video: "",
    },
    {
      title: "Broke-O-Meter - Zero Knowledge Proof of Poverty",
      href: "https://github.com/hi-heisenbug/broke_o_meter",
      dates: "2025 - Present",
      active: true,
      description:
        "Built a fully client side system to prove a user's bank balance is below a chosen threshold without revealing the actual value. Designed a cryptographic proof flow using a simulated Pedersen commitment and Fiat Shamir transformation with SHA 256 via the Web Crypto API.\n\nIntegrated Tesseract.js for in browser OCR and created a portable proof format that encodes commitments, challenges, and validity checks without exposing the balance. Implemented independent verification and currency normalization, keeping the system entirely serverless.",
      technologies: [
        "JavaScript",
        "Web Crypto API",
        "SHA-256",
        "Tesseract.js",
        "Zero Knowledge Proofs",
        "Cryptography",
        "OCR",
        "Client Side Systems"
      ],
      links: [
        { type: "Website", href: "https://broke.heisenbug.ai" },
      ],
      image: "/project/broke_o_meter.gif",
      video: "",
    },
    {
      title: "Wireshark Privacy-Preserving Threat Detection Plugin",
      href: "https://drive.google.com/drive/folders/1-YYDsH1iOsmtf3EUxBonaDoeZG4W8rpb",
      dates: "May 2024 - July 2024",
      active: false,
      description:
        "Developed a Wireshark Lua plugin integrating ML-based threat detection to analyze encrypted network traffic. Used Naive Bayes classifiers with network protocol fingerprinting. Co-authored a whitepaper selected from 131 teams at IITB Trust Lab's FOSSx program.",
      technologies: [
        "Lua",
        "Python",
        "Wireshark",
        "Naive Bayes",
        "CMake",
        "Mercury",
        "Cybersecurity",
      ],
      links: [
        { type: "Source", href: "https://drive.google.com/drive/folders/1-YYDsH1iOsmtf3EUxBonaDoeZG4W8rpb" },
      ],
      image: "/project/wireshark.gif",
      video: "",
    },
    {
      title: "PQC TLS 1.3 Benchmark Pipeline",
      href: "https://docs.google.com/spreadsheets/d/19usnXCOk2Ub5Y3wLpGXtmk9eAAuGt-AufPS7lN3Gov8/edit?usp=sharing",
      dates: "May 2025 - July 2025",
      active: false,
      description:
        "Built a Docker-based test pipeline for Nokia to benchmark Post-Quantum Cryptography algorithms (Kyber, Dilithium) against classical counterparts in TLS 1.3, measuring handshake latency, CPU energy, and data volume to support Nokia's IETF draft evaluation.",
      technologies: [
        "Docker",
        "Python",
        "TLS 1.3",
        "Kyber",
        "Dilithium",
        "OpenSSL",
        "PQC",
      ],
      links: [
        { type: "Source", href: "https://github.com/saurabh4269" },
      ],
      image: "/project/pqc_dashboard.png",
      video: "",
    },
    {
      title: "Pipelined IITB-RISC Processor",
      href: "https://github.com/saurabh4269/pipelined_risc_cpu",
      dates: "April 2024",
      active: false,
      description:
        "Designed an 8-register, 16-bit processor with a 6-stage pipeline executing 15 instructions in VHDL. Implemented control flow mechanisms and data forwarding to enhance performance. Validated through thorough simulation in Quartus.",
      technologies: ["VHDL", "Quartus", "Microprocessors", "Pipeline Architecture"],
      links: [
        { type: "Source", href: "https://github.com/saurabh4269/pipelined_risc_cpu" },
      ],
      image: "/project/rtl_viewer.png",
      video: "",
    },
  ],
  volunteering: [
    {
      company: "Rakshak IIT Bombay",
      href: "https://rakshakiitb.in/",
      badges: ["UAV", "Avionics", "Competition"],
      location: "Mumbai, India",
      title: "Senior Design Engineer - Avionics",
      logoUrl: "/rakshak.svg",
      start: "Apr 2023",
      end: "Jul 2024",
      description:
        "Contributed to a 40+ member student initiative focused on developing cost effective UAVs for search and rescue operations, participating in international competitions involving autonomous UAV systems and multirotors.\n\nWorked on systems for the Student Unmanned Aerial Systems competition, building UAV capabilities such as waypoint navigation, payload delivery, and object detection using machine learning techniques.\n\nStudied ROS architecture for autonomous control and developed Python based nodes for inter process communication. Explored UAV design principles including platform selection, PID tuning, and hardware integration.\n\nGained hands on experience with flight control and mission planning tools including Pixhawk, ArduPilot, Mission Planner, and QGIS.",
    },
    {
      company: "Finance Club, IIT Bombay",
      href: "https://www.linkedin.com/company/finance-club-iit-bombay/",
      badges: ["Investment", "Research"],
      location: "Mumbai, India",
      title: "Investment Analyst",
      logoUrl: "/finance_club.svg",
      start: "Jul 2023",
      end: "Mar 2024",
      description:
        "Selected among 200+ applicants through a rigorous process to represent the financial interests of a 10k+ student community. Worked as part of a 22 member team to establish and manage a student run INR 5 lakh fund, conducting cross sector equity research.\n\nDeveloped Pine Script and Python based investment strategies grounded in researched hypotheses, enabling efficient analysis of market data and improving decision making accuracy.\n\nPartnered with Roots Ventures within the Venture Capital division to produce in depth sector reports, and contributed to business analysis including a circular economy startup in the waste management space. Also developed a competitive analysis of Smytten.\n\nCollaborated with the Indian Finance Students Association to publish content focused on macroeconomic trends and insights.",
    },
    {
      company: "Electronics and Robotics Club, IIT Bombay",
      href: "https://erc.tech-iitb.org/",
      badges: ["Leadership", "Technical"],
      location: "Mumbai, India",
      title: "Institute Technical Convener",
      logoUrl: "/erc.svg",
      start: "May 2023",
      end: "Mar 2024",
      description:
        "I worked with a core team of eight to lead the execution of XLR8'23, the Institute's largest freshmen technical event with over 800 participants. I helped curate the technical content for the Control Theory and ROS Bootcamp, which enrolled over 280 students, and delivered sessions on computer networking and IoT while working on communication protocols and path-planning concepts.\n\nOutside the formal work, it was a lot of all-nighters, late-night brainstorming sessions modelling different systems, and countless dry-runs before events. The people I worked with were exceptional, and the experience is especially meaningful because I met my future co-founder there.",
    },
  ],
  hackathons: [
    {
      title: "Cardano Hackathon Asia 2025 (IBW Edition)",
      dates: "Nov 2025",
      location: "Bangalore, India",
      description:
        "Selected among the top teams for the Grand Finale of Cardano Hackathon Asia 2025, held as part of India Blockchain Week. Represented IIT Bombay at an international platform, engaging in a high intensity 30 hour in person finale after progressing through a competitive selection process involving thousands of applicants.\n\nDuring the event, we received an on the spot grant proposal in ADA to continue building our product. Built meaningful connections with leaders across the ecosystem including Patrick Tobler, Giuliano Lazzarotto, CTO of EMURGO, members of the Cardano Foundation, and several Indian founders and entrepreneurs.\n\nThe experience provided deep exposure to the blockchain ecosystem through mentorship, competition, and collaboration, making it an invaluable milestone in our journey.",
      image: "/cardano_hack.png",
      links: [],
    },
    {
      title: "UAS Challenge 2024 - IMechE, UK",
      dates: "Jul 2024",
      location: "Lincolnshire, United Kingdom",
      description:
        "Participated in an international competition organized by IMechE, UK to design an autonomous UAV capable of waypoint navigation and payload delivery. Designed a fixed wing aircraft with a 2.2 meter wingspan and 5 kg weight, optimized for a cruise speed of 16 mps, achieving 35 minutes of endurance and a range of 30 km while supporting payloads up to 3 kg.\n\nDeveloped autonomous capabilities including automatic takeoff, waypoint navigation, payload drop, and landing using ArduPilot, demonstrating strong proficiency in flight systems and control. Achieved 2nd global rank in simulation by accurately modeling the aircraft in XPlane and optimizing its stability and performance characteristics.\n\nRecognized with the Operational Supportability Award for efficiently transitioning the UAV from stowed to flight ready condition with safety and precision within 2 minutes, along with a Best Flight Special Mention for exceptional stability and maneuverability.",
      image: "/imeche.png",
      win: "2nd Global Rank (Simulation) · Operational Supportability Award · Best Flight Special Mention",
      links: [],
    },
  ],
};
