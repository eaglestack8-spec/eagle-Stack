import {
  Trainer,
  MembershipPlan,
  ScheduleDay,
  Facility,
  TransformationStory,
  FAQItem,
  GalleryItem,
} from "../types";

export const STATS = [
  { id: "stat-1", value: "15,000+", label: "Elite Members" },
  { id: "stat-2", value: "35+", label: "Master Trainers" },
  { id: "stat-3", value: "120+", label: "Premium Equipment" },
  { id: "stat-4", value: "12+", label: "Years of Excellence" },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-basic",
    name: "Standard Elite",
    price: "89",
    billingPeriod: "month",
    description: "Premium access to world-class strength and cardio zones during standard hours.",
    features: [
      "Access to all strength and cardio chambers",
      "Locker room & digital lock access",
      "Complimentary alkaline hydration",
      "2 guest passes per month",
      "Initial 1:1 biomechanics assessment",
      "Access to mobile booking app",
    ],
    popular: false,
    colorClass: "from-zinc-900 to-zinc-800 border-zinc-800",
  },
  {
    id: "plan-pro",
    name: "Titan Signature",
    price: "149",
    billingPeriod: "month",
    description: "Our signature experience for dedicated athletes. Includes priority classes and thermal suites.",
    features: [
      "24/7 unlimited biometric biometric-key access",
      "Unlimited premium signature group classes",
      "Lounge access & premium organic shake bar benefits",
      "Full access to luxury recovery thermal suites (Sauna, Steam, Cold Plunge)",
      "4 guest passes per month with lounge access",
      "Bi-weekly private coaching review with master trainer",
      "Complimentary standard towel & robe service",
    ],
    popular: true,
    colorClass: "from-neutral-900 to-[#121212] border-[#00FFFF]/40 shadow-2xl shadow-[#00FFFF]/5",
  },
  {
    id: "plan-elite",
    name: "Olympus Private",
    price: "299",
    billingPeriod: "month",
    description: "The ultimate hyper-personalized coaching ecosystem. Absolute access, absolute luxury.",
    features: [
      "All Signature benefits with guaranteed 24/7 priority access",
      "Unlimited 1-on-1 private training with chosen Master Trainer (4x/mo)",
      "Dedicated luxury private locker & bespoke laundry service",
      "Personalized nutrition, meal delivery coordination & blood work panel analysis",
      "Private infrared sauna, hyperbaric oxygen therapy & massage sessions",
      "Unlimited guest privilege (must accompany member)",
      "Worldwide partner club elite reciprocity",
    ],
    popular: false,
    colorClass: "from-zinc-900 via-neutral-950 to-zinc-900 border-[#00FFFF]/20",
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    name: "Marcus Rutherford",
    role: "Director of Athletics & Strength",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600",
    experience: "14 Years",
    specialties: ["Powerlifting", "Olympic Weightlifting", "Athletic Conditioning"],
    bio: "Former competitive strongman and exercise physiologist. Marcus focuses on raw power, execution mechanics, and building an unbreakable resilient posture.",
    socials: {
      instagram: "marcus_titan_strength",
      twitter: "marcus_rutherford",
      linkedin: "marcus-rutherford-physio",
    },
  },
  {
    id: "trainer-2",
    name: "Elena Rostova",
    role: "Head of Movement & Biomechanics",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
    experience: "9 Years",
    specialties: ["Mobility & Flow", "Postural Correction", "High Intensity Intervals"],
    bio: "Elena blends athletic coaching with nervous system rehabilitation, helping executives move fluidly, erase pain, and optimize explosive speed.",
    socials: {
      instagram: "elena_movement_flow",
      twitter: "elena_rostova",
    },
  },
  {
    id: "trainer-3",
    name: "Darius Sterling",
    role: "Master Body Recomposition Coach",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    experience: "11 Years",
    specialties: ["Hypertrophy", "Nutritional Biochemistry", "Metabolic Conditioning"],
    bio: "Specializing in physique architecture and aesthetic precision. Darius implements body imaging telemetry and scientific dietetics to build sculpted outcomes.",
    socials: {
      instagram: "darius_sterling_aesthetic",
      linkedin: "darius-sterling-science",
    },
  },
];

export const CLASS_SCHEDULE: ScheduleDay[] = [
  {
    day: "Monday",
    classes: [
      { id: "mon-1", className: "Titan Barbell Protocol", time: "06:30 AM", trainer: "Marcus Rutherford", room: "Strength Chamber A", duration: "60 min", intensity: "High" },
      { id: "mon-2", className: "Metabolic Catalyst", time: "09:00 AM", trainer: "Elena Rostova", room: "Chamber B", duration: "45 min", intensity: "High" },
      { id: "mon-3", className: "Olympic Lifting Essentials", time: "12:00 PM", trainer: "Marcus Rutherford", room: "Barbell Grid", duration: "75 min", intensity: "High" },
      { id: "mon-4", className: "Kinetic Flow & Restoration", time: "05:30 PM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "60 min", intensity: "Low" },
      { id: "mon-5", className: "Hi-Definition Aesthetics", time: "07:00 PM", trainer: "Darius Sterling", room: "Sculpt Room", duration: "60 min", intensity: "Medium" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { id: "tue-1", className: "Hypertrophy Blueprint", time: "07:00 AM", trainer: "Darius Sterling", room: "Sculpt Room", duration: "60 min", intensity: "Medium" },
      { id: "tue-2", className: "Functional Velocity Zone", time: "10:30 AM", trainer: "Elena Rostova", room: "Chamber B", duration: "50 min", intensity: "High" },
      { id: "tue-3", className: "Postural Spine Alignment", time: "04:00 PM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "60 min", intensity: "Low" },
      { id: "tue-4", className: "Barbell Protocol Advanced", time: "06:30 PM", trainer: "Marcus Rutherford", room: "Strength Chamber A", duration: "75 min", intensity: "High" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { id: "wed-1", className: "Titan Barbell Protocol", time: "06:30 AM", trainer: "Marcus Rutherford", room: "Strength Chamber A", duration: "60 min", intensity: "High" },
      { id: "wed-2", className: "Metabolic Catalyst", time: "09:00 AM", trainer: "Elena Rostova", room: "Chamber B", duration: "45 min", intensity: "High" },
      { id: "wed-3", className: "Active Core Stability", time: "12:00 PM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "50 min", intensity: "Medium" },
      { id: "wed-4", className: "Structural Iron Condensing", time: "06:00 PM", trainer: "Darius Sterling", room: "Sculpt Room", duration: "60 min", intensity: "High" },
      { id: "wed-5", className: "Yin Breathwork & Meditation", time: "07:30 PM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "60 min", intensity: "Low" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { id: "thu-1", className: "Hypertrophy Blueprint", time: "07:00 AM", trainer: "Darius Sterling", room: "Sculpt Room", duration: "60 min", intensity: "Medium" },
      { id: "thu-2", className: "Athletic Conditioning Grid", time: "10:30 AM", trainer: "Marcus Rutherford", room: "Barbell Grid", duration: "60 min", intensity: "High" },
      { id: "thu-3", className: "Kinetic Flow & Restoration", time: "05:30 PM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "60 min", intensity: "Low" },
      { id: "thu-4", className: "Titan Barbell Protocol", time: "07:00 PM", trainer: "Marcus Rutherford", room: "Strength Chamber A", duration: "60 min", intensity: "High" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { id: "fri-1", className: "Metabolic Catalyst", time: "06:30 AM", trainer: "Elena Rostova", room: "Chamber B", duration: "45 min", intensity: "High" },
      { id: "fri-2", className: "Olympic Lifting Essentials", time: "09:30 AM", trainer: "Marcus Rutherford", room: "Barbell Grid", duration: "75 min", intensity: "High" },
      { id: "fri-3", className: "Hi-Definition Aesthetics", time: "12:00 PM", trainer: "Darius Sterling", room: "Sculpt Room", duration: "60 min", intensity: "Medium" },
      { id: "fri-4", className: "Sunset Thermal Restoration", time: "05:00 PM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "90 min", intensity: "Low" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { id: "sat-1", className: "Olympic Power Triads", time: "08:30 AM", trainer: "Marcus Rutherford", room: "Barbell Grid", duration: "90 min", intensity: "High" },
      { id: "sat-2", className: "Vinyasa Fluid Biomechanics", time: "10:30 AM", trainer: "Elena Rostova", room: "Zen Atrium", duration: "75 min", intensity: "Medium" },
      { id: "sat-3", className: "Sculpting Aesthetics Mega", time: "01:00 PM", trainer: "Darius Sterling", room: "Sculpt Room", duration: "60 min", intensity: "Medium" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { id: "sun-1", className: "Elite Community Strength Run", time: "09:00 AM", trainer: "Marcus Rutherford", room: "Outdoor Path", duration: "60 min", intensity: "Medium" },
      { id: "sun-2", className: "Zen Restorative Meditative Loop", time: "11:00 AM", trainer: "Elena Rostova", room: "Thermal Suite", duration: "60 min", intensity: "Low" },
    ],
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Olympus Strength Arena",
    description: "Constructed with bespoke Eleiko competition plates, custom hammer-strength setups, and smart load-cell biomechanical monitoring systems.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
    specs: ["Eleiko Powerlifting Platforms", "Integrated Force Sensor Plates", "Custom Calibrated Kettlebells", "Heavy Dumbbell Zone (up to 180 lbs)"],
  },
  {
    id: "fac-2",
    title: "Hyperbaric & Thermal Suites",
    description: "The peak of performance preservation. Finnish volcanic saunas, precision eucalyptus steam vents, and a custom chilled -2°C cold-water immersion system.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    specs: ["Siberian Cold Plunge (-2°C)", "Dry Volcanic Finnish Sauna", "Bespoke Infrared Recovery Beds", "Hyperbaric Oxygen Cabins"],
  },
  {
    id: "fac-3",
    title: "Biometric Cardio Observatory",
    description: "Precision-engineeredWoodway curve slatted treadmills, custom assault wind rigs, and high-altitude metabolic simulator zones.",
    image: "https://images.unsplash.com/photo-1571731956622-f1b83e743a44?auto=format&fit=crop&q=80&w=800",
    specs: ["Woodway Curve Treadmills", "Concept2 Rowing & SkiErgs", "Oxygen Reduction Room simulations", "Realtime telemetry output screens"],
  },
  {
    id: "fac-4",
    title: "Aura Sanctuary & Lounge",
    description: "Relax, work, or intake nutrition post-athletic efforts. Offers a custom high-protein peptide juice bar, private workspaces, and designer locker suites.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: ["Fresh Peptide Shake Bar", "Encrypted Private Work Pods", "Heated Limestone Towel Buffing", "LST Water Rain Showers"],
  },
];

export const TESTIMONIALS: TransformationStory[] = [
  {
    id: "story-1",
    name: "Arthur Pendelton",
    age: 38,
    timeframe: "12 Months",
    achievement: "+14 lbs Lean Mass & Spine Alignment",
    beforeWeight: "162 lbs",
    afterWeight: "176 lbs",
    quote: "Titan Fitness saved my athletic posture. The biomechanics assessment revealed major leg-length load discrepancies. Under Marcus's watch, I lifted pain-free for the first time in ten years.",
    beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", // Headshot placeholder
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "story-2",
    name: "Julianne Vance",
    age: 29,
    timeframe: "6 Months",
    achievement: "-24 lbs Body Fat & Marathon PR",
    beforeWeight: "158 lbs",
    afterWeight: "134 lbs",
    quote: "The combination of high-altitude cardio simulators and deep sports physiotherapy allowed me to shave 20 minutes off my Boston marathon timeline, while fully bulletproofing my kneecaps.",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "story-3",
    name: "Kaelen Chen",
    age: 32,
    timeframe: "8 Months",
    achievement: "Absolute Body Recomposition & Power lift +150 lbs",
    beforeWeight: "205 lbs (28% BF)",
    afterWeight: "185 lbs (10% BF)",
    quote: "Darius's nutritional biochemistry program combined with Olympic platforms transformed typing fatigue into raw power. I feel and look and lift better than I did at 22.",
    beforeImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "gal-1", title: "Strength Platforms", category: "Equipments", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=700" },
  { id: "gal-2", title: "Thermal Finnish Sauna", category: "Recovery", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=700" },
  { id: "gal-3", title: "Barbell Protocol Unit", category: "Classes", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=700" },
  { id: "gal-4", title: "Zen Atrium Stretching", category: "Recovery", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=700" },
  { id: "gal-5", title: "Peptide Shake Lounge", category: "Lounge", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=700" },
  { id: "gal-6", title: "Woodway Wind Sprints", category: "Equipments", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=700" },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I secure an Olympus Private tier or assign a specific Master Trainer?",
    answer: "Due to extreme time availability caps, our master trainers are limited to 10 private tier clients each. Once you register for Olympus Private, the Director of Athletics conducts a matching consultation, assigning you based on physical bio-telemetry, specific injury history, and long-term athletic targets.",
  },
  {
    id: "faq-2",
    question: "Do you offer physical reciprocal privileges at other locations?",
    answer: "Yes. Olympus Private and Signature tier members receive complimentary biometric credentials and complete equipment access at any partner luxurious fitness clubs worldwide, including key hubs in London, Geneva, Tokyo, and New York.",
  },
  {
    id: "faq-3",
    question: "What does the biomechanics assessment involve?",
    answer: "Every member starts with a 65-point musculoskeletal assessment. We use specialized foot-pressure mats, force-sensor barbells, range-of-motion optical mapping, and optional blood marker coordination to chart your mobility curve and map potential load hazards.",
  },
  {
    id: "faq-4",
    question: "Are the thermal suites and recovery sauna zones co-ed?",
    answer: "Titan Fitness has both private single-gender locker thermal suites (including a Finnish volcanic sauna, eucalyptus steam, and Cold Plunge) as well as our co-ed Thermal Rest Atrium which features high-intensity infrared chambers and quiet compression recovery domes.",
  },
  {
    id: "faq-5",
    question: "Can I cancel or freeze my membership for business travel?",
    answer: "Absolutely. Signature and Elite members may freeze their billing via their in-app console up to twice a year, for a total accumulated duration of ninety days (90), free of charge.",
  },
];
