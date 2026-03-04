export const SITE_CONFIG = {
  name: "The Fortier Group",
  tagline: "Professional ATC Services and Instruction",
  phone: "(760) 532-4772",
  address: "2100 Palomar Airport Rd. #214-56, Carlsbad, CA 92011",
  email: "Tony@4TAGroup.com",
  mapsUrl: "https://goo.gl/maps/oYZcqP53fBkBFetbA",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Employees", href: "/employees" },
] as const;

export const HOME_PAGE = {
  hero: {
    headline: "Air Traffic Control Training, Consulting, and More",
    subheadline:
      "A Certified Women Owned Small Business (WOSB) providing professional services for FAA, DoD and International Clients",
    ctaPrimary: { label: "Our Services", href: "/services" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  services: [
    {
      title: "Training",
      description:
        "The Fortier Group is made of veteran FAA and DoD Air Traffic Control professionals from both enroute and terminal environments. They have continued their service training today's controllers to utilize tomorrow's systems.",
    },
    {
      title: "Quality Assurance",
      description:
        "With an average of more than 25 years of experience in the Air Traffic Control field, our personnel are prepared and capable to provide Quality Assurance oversight and instruction with detailed reporting and recommendations, globally as we have for more than nineteen years.",
    },
    {
      title: "Consulting",
      description:
        "We offer a wide range of services to assist your needs at aerodromes, systems planning, and in the field. Please call our office to schedule a consultation appointment, and we'll address your needs from there",
      bulletPoints: [
        "Simulation Operations",
        "Personnel Management",
        "Runway and Ramp Safety",
        "FAA and ICAO Compliance",
      ],
    },
  ],
} as const;

export const ABOUT_PAGE = {
  intro:
    "The Fortier Group is comprised of an experienced team of professionals ready to provide solutions to Air Traffic Management and Aviation Support for missions worldwide.",
  headline: "Learn About Our Air Traffic Control Training Company",
  body: "The Fortier Group was founded with the idea that the best instruction for Air Traffic Controllers comes from experienced, accomplished Air Traffic Controllers, those that have proven themselves over time. We are proud of our Instructors and Engineers and will continue to provide exceptional training on ATC systems and excellent solutions for your Air Traffic and Safety concerns.",
  founder: {
    heading: "Founder",
    bio: "Larry Fortier Jr. (1933-2012), joined the US Air Force in 1951 and served in Korea as an Air Traffic Controller. Upon completion of his tour and enlistment, he turned down opportunities to play professional baseball to begin a career with the CAA- later the FAA. He served as a controller, supervisor, and manager at several facilities before his appointment as the Director of Air Traffic Systems Requirements. After his retirement from the FAA in 1985, Larry continued to advise other organizations on Air Traffic systems and was later Chairman of the Board for the Air Traffic Control Association. His vision for The Fortier Group continues today.",
  },
  companyProfile: {
    heading: "Company Profile",
    subheading: "The Fortier Group",
    details: [
      { label: "Status", value: "A Woman Owned Small Business" },
      { label: "Certification", value: "FAA eFAST MOA Holder" },
      { label: "Founded", value: "1994" },
      { label: "President", value: "Lynda Fortier" },
      { label: "Areas of expertise", value: "ATC Systems Instruction and Support" },
      { label: "Primary Contract", value: "STARS (Raytheon)" },
    ],
  },
  stats: [
    { value: "25+", label: "Years Average Experience" },
    { value: "19+", label: "Years Global Service" },
    { value: "1994", label: "Founded" },
  ],
} as const;

export const SERVICES_PAGE = {
  headline: "Providing a Wide Array of Air Traffic and Safety Solutions",
  sections: [
    {
      title: "ATC Systems Training",
      content: [
        "The Fortier Group has trained countless controllers at numerous FAA and DoD locations on advanced systems like the Standard Terminal Automation Replacement System, STARS.",
        "We have the finest, most experienced instructors on our staff and we can task-organize a team with a training program to fit any ATC need.",
      ],
      imagePlaceholder: "ATC Systems Training — Image Coming Soon",
    },
    {
      title: "Quality Assurance",
      content: [
        "Our veteran Air Traffic Controllers and staff are experienced in all ATC environments: Tower, Terminal Radar, Enroute, and International facilities.",
        "This extensive background allows us to provide Quality Assurance evaluations that can help streamline facility processes and methods to increase safety as well as efficiency.",
      ],
    },
    {
      title: "Consulting",
      content: [
        "Our team leaders have extensive management experience in the aviation community and can assist with personnel and staffing solutions. With our Government Contract department, we can offer different vehicles for contracting and sourcing your needs.",
      ],
    },
  ],
  trainingList: {
    heading: "ATC and Safety Management Training",
    items: [
      "Terminal, Enroute and ICAO Systems",
      "ERAM Training",
      "Quality Assurance and Safety Training",
      "Simulation Training",
      "Air Traffic Control Cadre Trainers and Course Material Developers",
      "Scenario Generation expertise – Radar and Tower Simulators",
      "Standard Terminal Automated Replacement System (STARS)",
    ],
    imagePlaceholder: "Safety Management Training — Image Coming Soon",
  },
  qaSection: {
    heading: "Quality Assurance Evaluations",
    content: [
      "Quality Assurance evaluations that can help streamline facility processes and methods to increase safety as well as efficiency.",
      "Our veteran Air Traffic Controllers and staff are experienced in all ATC environments: Tower, Terminal Radar, Enroute, and International facilities.",
    ],
  },
} as const;

export const EMPLOYEES_PAGE = {
  heading: "Protected: Employees",
  subheading: "Employee Portal",
  body: "This content is password-protected. To view it, please enter the password below.",
  welcomeMessage: "Welcome, Employee",
  errorMessage: "Incorrect password. Please try again.",
  placeholder: "Enter password",
  buttonText: "Enter",
} as const;

export const CONTACT_PAGE = {
  headline: "Get in Touch",
  subheadline:
    "We'd love to hear from you. Reach out to discuss your air traffic control training and consulting needs.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "(555) 555-5555",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    submitButton: "Send Message",
    successMessage: "Thank you for your message. We'll be in touch soon.",
    errorMessage: "There was an error sending your message. Please try again.",
  },
} as const;

export const FOOTER = {
  copyright: "The Fortier Group. All rights reserved.",
} as const;

export const IMAGE_CREDITS = [
  { photographer: "World Travel Adventures", source: "StockSnap", url: "https://stocksnap.io/photo/pilot-travel-DSMUSKQHIT" },
  { photographer: "World Travel Adventures", source: "StockSnap", url: "https://stocksnap.io/photo/airplane-cockpit-BSCERTTCQO" },
  { photographer: "Matt Moloney", source: "StockSnap", url: "https://stocksnap.io/photo/airport-terminal-CTIWBOSEN7" },
  { photographer: "Jakob Owens", source: "StockSnap", url: "https://stocksnap.io/photo/airplane-airline-6FI8W1L305" },
  { photographer: "Rob Bye", source: "StockSnap", url: "https://stocksnap.io/photo/people-men-KAUU1CKET4" },
  { photographer: "Ruby Khoesial", source: "Unsplash", url: "https://unsplash.com/photos/ciUcYX0eXnQ" },
  { photographer: "Johannes Heel", source: "Unsplash", url: "https://unsplash.com/photos/XmLULwMRxcU" },
  { photographer: "Pascal Meier", source: "Unsplash", url: "https://unsplash.com/photos/UYiesSO4FiM" },
  { photographer: "Bao Menglong", source: "Unsplash", url: "https://unsplash.com/photos/-FhoJYnw-cg" },
] as const;

export const IMAGES = {
  hero: "/images/StockSnap_DSMUSKQHIT.png",
  cockpit: "/images/StockSnap_BSCERTTCQO.png",
  terminal: "/images/StockSnap_CTIWBOSEN7.png",
  airplane: "/images/StockSnap_6FI8W1L305.png",
  people: "/images/StockSnap_KAUU1CKET4.png",
  controlTower: "/images/ruby-khoesial-ciUcYX0eXnQ-unsplash.png",
  runway: "/images/johannes-heel-XmLULwMRxcU-unsplash.png",
  biplane: "/images/pascal-meier-UYiesSO4FiM-unsplash.png",
  whiteAirplane: "/images/bao-menglong--FhoJYnw-cg-unsplash.png",
  logo: "/images/fortier_logo.png",
  efast: "/images/eFast-1.png",
} as const;
