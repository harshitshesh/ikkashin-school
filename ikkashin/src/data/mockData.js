// Mock Data for Social Baluni Public School (SBPS Dehradun)

export const SCHOOL_INFO = {
  name: "Social Baluni Public School",
  shortName: "SBPS Dehradun",
  tagline: "Empowering Minds, Sculpting Leaders, Serving the Nation",
  address: "Baluni Bypass Road, Near ISBT, Dehradun, Uttarakhand - 248001",
  phone: "+91 98970 00000 / +91 0135 2720000",
  email: "info@sbpsdoon.com",
  admissionsEmail: "admissions@sbpsdoon.com",
  established: 2008,
  stats: {
    students: "3,000+",
    staff: "400+",
    schools: "3 Academies in 1 Campus",
    campusArea: "25+ Acres",
    ndaSelections: "180+ Selections",
    iitSelections: "320+ Selections",
    sportsTrophies: "45+ State/National Medals"
  }
};

export const THREE_ECOSYSTEMS = [
  {
    id: "boarding",
    title: "Residential Boarding School",
    subtitle: "Home away from home with world-class residential amenities",
    icon: "Home",
    color: "from-blue-600 to-indigo-700",
    badge: "24/7 Security & Care",
    description: "Modern hostels separate for boys and girls, nutritious dining hall, 24x7 medical assistance, supervised evening study hours, and wholesome recreational activities.",
    features: [
      "AC Hostels with ergonomic dormitories",
      "Nutritious 4-meal daily menu curated by dietitians",
      "Dedicated wardens & 24/7 campus security",
      "Mandatory evening self-study & faculty doubt sessions"
    ],
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "defence",
    title: "Baluni Defence Academy (NDA/CDS)",
    subtitle: "Rigorous physical training & SSB interview prep by retired officers",
    icon: "ShieldAlert",
    color: "from-emerald-600 to-teal-800",
    badge: "Official NDA Wing",
    description: "Integrated NDA coaching alongside Class XI & XII CBSE academics. Obstacle course, shooting range, drill ground, physical fitness, and SSB interview psychological testing.",
    features: [
      "Physical training by ex-Armed Forces instructors",
      "10-lane indoor rifle shooting range & fencing academy",
      "Comprehensive SSB interview & GTO ground prep",
      "Specialized NDA written exam test series"
    ],
    image: "https://images.unsplash.com/photo-1579952318893-20a31006100e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "iit-neet",
    title: "IIT-JEE & NEET Competitive Wing",
    subtitle: "Super 30 Intensive Batches led by top Kota & Delhi faculty",
    icon: "GraduationCap",
    color: "from-amber-500 to-orange-600",
    badge: "Top Rankers Factory",
    description: "Seamless synchronization of CBSE board syllabus with advanced JEE Advanced / NEET level problem solving. Specialized study material, daily DPPs, and AI test analytics.",
    features: [
      "Faculty from premier Kota & Delhi coaching institutes",
      "Daily Practice Papers (DPP) & regular OMR mock tests",
      "Personalized doubt clearance counters",
      "Smart classrooms & digital lab simulations"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  }
];

export const NOTICES_DATA = [
  {
    id: "N101",
    title: "Registration Open for NDA & IIT-JEE Integrated Batch 2026-27",
    category: "Admissions",
    date: "2026-10-02",
    isPinned: true,
    urgent: true,
    summary: "Entrance test and scholarship assessment exam will be held on October 25th, 2026 across major centers in North India.",
    link: "/admissions"
  },
  {
    id: "N102",
    title: "Annual Sports Meet 'SPARDHA 2026' Schedule Announced",
    category: "Sports",
    date: "2026-09-28",
    isPinned: true,
    urgent: false,
    summary: "Inter-house cricket, fencing, shooting, and athletics championships kick off on November 10th. Registration ends Nov 2nd.",
    link: "/sports"
  },
  {
    id: "N103",
    title: "CBSE Class X & XII Pre-Board Examination Time Table Released",
    category: "Academics",
    date: "2026-09-25",
    isPinned: false,
    urgent: false,
    summary: "Pre-board examination phase-1 will commence from November 15th. Students can view detailed date-sheet on student portal.",
    link: "/student-portal"
  },
  {
    id: "N104",
    title: "SBPS Cadet Selected for Republic Day Camp (RDC 2027) New Delhi",
    category: "Achievements",
    date: "2026-09-20",
    isPinned: false,
    urgent: false,
    summary: "Cadet Aman Rawat of Class 11 NDA Wing has been selected to represent Uttarakhand Contingent at RDC Rajpath.",
    link: "/news-events"
  },
  {
    id: "N105",
    title: "Parent-Teacher Interactive Meeting (PTM) for Term-1 Results",
    category: "Circular",
    date: "2026-09-15",
    isPinned: false,
    urgent: false,
    summary: "PTM will be conducted on Saturday, Oct 18th from 9:00 AM to 1:30 PM. Parents are requested to attend.",
    link: "/news-events"
  }
];

export const HALL_OF_FAME = [
  {
    id: 1,
    name: "Vikramaditya Singh",
    exam: "NDA 154th Course",
    rank: "AIR 14 (Recommended)",
    batch: "Class of 2025 - NDA Wing",
    quote: "The rigorous physical discipline and daily GTO practice at Baluni Defence Academy turned my dream of joining the Indian Military Academy into reality.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Riya Sundriyal",
    exam: "JEE Advanced 2025",
    rank: "AIR 218 (IIT Bombay CSE)",
    batch: "Class of 2025 - Super 30 Batch",
    quote: "Integrating CBSE syllabus with Kota pattern JEE prep saved me hundreds of hours. Faculty support here is unparalleled.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Karan Johar",
    exam: "NEET UG 2025",
    rank: "Score: 705/720 (AIIMS Delhi)",
    batch: "Class of 2025 - Medical Wing",
    quote: "Weekly doubt sessions and simulated OMR tests built high accuracy and exam temperament in me.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Harshita Bisht",
    exam: "National Fencing Championship",
    rank: "Gold Medalist (Under-19)",
    batch: "Class of 2026 - Sports Wing",
    quote: "Baluni Sports Academy provided state-of-the-art fencing equipment and international-level coaching right inside the school campus.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  }
];

export const SPORTS_ECOSYSTEM = [
  {
    id: "cricket",
    name: "Cricket Academy",
    coach: "Col. S.P. Rana (Retd) & Coach Rajesh Negi",
    facilities: "Standard turf pitches, bowling machines, video analysis enclosure",
    achievements: "Winners of All-India Inter-School IPSC Trophy 2025",
    icon: "Trophy",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    stats: "2 International Players Trained"
  },
  {
    id: "shooting",
    name: "Rifle & Pistol Shooting",
    coach: "National Coach Archana Sharma",
    facilities: "10m Air Rifle Swiss Electronic Target Range",
    achievements: "3 Gold & 2 Silver Medals at CBSE National Games",
    icon: "Target",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
    stats: "State-of-the-Art Swiss Electronic Targets"
  },
  {
    id: "fencing",
    name: "Fencing Academy",
    coach: "Master Coach Devendra Singh",
    facilities: "Piste strips, electronic scoring gear, Foil/Epee/Sabre suits",
    achievements: "Overall State Champions 3 Years in a Row",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=800",
    stats: "Only School in Dehradun with Fencing Piste"
  },
  {
    id: "football",
    name: "Football Club",
    coach: "Coach Alex D'Souza (AFC B-License)",
    facilities: "Full size FIFA standard grass pitch with floodlights",
    achievements: "Runners Up - Uttarakhand Youth League",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    stats: "Night Floodlight Matches"
  },
  {
    id: "boxing",
    name: "Boxing & Martial Arts",
    coach: "Chief Instructor Surender Thapa",
    facilities: "Elevated ring, heavy bags, headgear & safety equipment",
    achievements: "5 National Level Qualifiers in 2025",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
    stats: "Self Defense for All Students"
  },
  {
    id: "athletics",
    name: "Track & Field Athletics",
    coach: "Olympian Athletic Coach S. Rawat",
    facilities: "400m 8-lane track, long jump pit, high jump mats",
    achievements: "12 Medals in State Athletic Meet",
    icon: "Flag",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    stats: "Scientific Endurance & Agility Drills"
  }
];

export const FACULTY_STAFF = [
  {
    id: "F01",
    name: "Dr. R.K. Baluni",
    role: "Chairman & Managing Director",
    department: "Management",
    qualification: "Ph.D. Educational Leadership, M.Sc",
    experience: "30+ Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F02",
    name: "Mrs. Savita Baluni",
    role: "Director Academics",
    department: "Management",
    qualification: "M.A., M.Ed, Gold Medalist",
    experience: "25+ Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F03",
    name: "Col. D.S. Chauhan (Retd)",
    role: "Headmaster & NDA Wing Commandant",
    department: "Defence Academy",
    qualification: "Ex-SSB Board President, M.Sc Defence Studies",
    experience: "32+ Years Army & Academics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F04",
    name: "Prof. Alok Verma",
    role: "Dean - IIT-JEE / NEET Division",
    department: "IIT/NEET",
    qualification: "B.Tech IIT Roorkee, Ex-Kota Senior HOD",
    experience: "18+ Years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F05",
    name: "Dr. Meenakshi Sundaram",
    role: "Head of Science Department",
    department: "Science & Math",
    qualification: "Ph.D. Chemistry, B.Ed",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F06",
    name: "Subedar Major H.S. Joshi (Retd)",
    role: "Chief Physical Training Officer (GTO)",
    department: "Defence Academy",
    qualification: "Army Physical Training Corps",
    experience: "24+ Years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F07",
    name: "Ms. Shalini Gupta",
    role: "HOD Humanities & English Literature",
    department: "Humanities",
    qualification: "M.A. English (DU), M.Phil",
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "F08",
    name: "Mr. Coach Rajesh Negi",
    role: "Sports Director & Head Cricket Coach",
    department: "Sports",
    qualification: "B.P.Ed, NIS Certified Coach",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "NDA Wing Drill & obstacle Training",
    category: "NDA Wing",
    type: "photo",
    image: "https://images.unsplash.com/photo-1579952318893-20a31006100e?auto=format&fit=crop&q=80&w=800",
    date: "2026-09-15"
  },
  {
    id: 2,
    title: "State Fencing Championship Winners",
    category: "Sports",
    type: "photo",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=800",
    date: "2026-08-30"
  },
  {
    id: 3,
    title: "IIT-JEE Advanced Super 30 Smart Classroom",
    category: "Academics",
    type: "photo",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    date: "2026-09-01"
  },
  {
    id: 4,
    title: "Residential Hostel & Dining Complex",
    category: "Campus Life",
    type: "photo",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
    date: "2026-08-20"
  },
  {
    id: 5,
    title: "Annual Cultural Fest - Rhythm 2026",
    category: "Cultural",
    type: "photo",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    date: "2026-07-14"
  },
  {
    id: 6,
    title: "10m Air Rifle Shooting Competition",
    category: "Sports",
    type: "photo",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
    date: "2026-09-10"
  }
];

export const MOCK_STUDENT_PORTAL = {
  student: {
    id: "SBPS2025/1104",
    name: "Aarav Sharma",
    class: "11th Science (PCM + NDA Wing)",
    rollNo: "24",
    house: "Subhash Chandra Bose House",
    admissionType: "Boarding + NDA Academy",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    attendancePercentage: 94.2,
    feeDue: 0,
    feeStatus: "Paid (Term 1 & 2)",
    parentName: "Rajesh Sharma",
    contact: "+91 98765 43210"
  },
  marksheet: [
    { subject: "Physics (JEE/NDA)", max: 100, obtained: 91, grade: "A1" },
    { subject: "Chemistry", max: 100, obtained: 88, grade: "A2" },
    { subject: "Mathematics (Advanced)", max: 100, obtained: 95, grade: "A1" },
    { subject: "English Core", max: 100, obtained: 86, grade: "A2" },
    { subject: "NDA General Ability & GTO", max: 100, obtained: 94, grade: "A1" },
    { subject: "Physical Training & Fitness", max: 100, obtained: 98, grade: "A1" }
  ],
  assignments: [
    { id: "A1", subject: "Physics", title: "Rotational Dynamics DPP-05", dueDate: "2026-10-08", status: "Pending" },
    { id: "A2", subject: "Mathematics", title: "Definite Integration Module 3", dueDate: "2026-10-06", status: "Submitted" },
    { id: "A3", subject: "NDA GTO", title: "Current Affairs & Military History Report", dueDate: "2026-10-10", status: "Pending" }
  ],
  feeReceipts: [
    { id: "REC-9941", date: "2026-07-05", amount: "₹ 75,000", description: "Term-1 Tuition & Hostel Fee", status: "Paid" },
    { id: "REC-8820", date: "2026-04-10", amount: "₹ 50,000", description: "Admission Deposit & Uniform Kit", status: "Paid" }
  ]
};

export const FEE_STRUCTURE = [
  { grade: "Classes 6th - 8th (Middle)", tuitionAnnual: 65000, hostelAnnual: 90000, ndaWingAddon: 25000, iitWingAddon: 25000 },
  { grade: "Classes 9th - 10th (Foundation)", tuitionAnnual: 75000, hostelAnnual: 100000, ndaWingAddon: 30000, iitWingAddon: 35000 },
  { grade: "Classes 11th - 12th (Science + IIT/NEET)", tuitionAnnual: 95000, hostelAnnual: 110000, ndaWingAddon: 0, iitWingAddon: 45000 },
  { grade: "Classes 11th - 12th (Science + NDA Defence)", tuitionAnnual: 95000, hostelAnnual: 110000, ndaWingAddon: 45000, iitWingAddon: 0 }
];

export const MOCK_APPLICATIONS = [
  {
    id: "APP-2026-8812",
    studentName: "Devansh Thapa",
    parentName: "Suraj Thapa",
    gradeApplied: "Class 11th - NDA Wing",
    phone: "9812345678",
    email: "suraj.thapa@example.com",
    city: "Dehradun",
    hostelRequired: "Yes",
    status: "Under Review",
    dateSubmitted: "2026-10-04"
  },
  {
    id: "APP-2026-7419",
    studentName: "Priyanka Joshi",
    parentName: "V.K. Joshi",
    gradeApplied: "Class 11th - IIT JEE",
    phone: "9876543210",
    email: "vk.joshi@example.com",
    city: "Haridwar",
    hostelRequired: "No (Day Scholar)",
    status: "Approved & Called for Assessment",
    dateSubmitted: "2026-10-01"
  }
];
