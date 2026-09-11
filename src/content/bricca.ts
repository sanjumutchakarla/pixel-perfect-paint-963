/**
 * Single source of content for the BRICCA Foundation website.
 *
 * Everything here comes from the organisation's own brief/document.
 * Items marked PLACEHOLDER are NOT documented facts — replace them with
 * official details before publishing.
 */

import education from "@/assets/program-education.jpg";
import livelihood from "@/assets/program-livelihood.jpg";
import women from "@/assets/program-women.jpg";
import disability from "@/assets/program-disability.jpg";
import health from "@/assets/program-health.jpg";
import relief from "@/assets/program-relief.jpg";
import agriculture from "@/assets/program-agriculture.jpg";
import sports from "@/assets/program-sports.jpg";
import coastal from "@/assets/program-coastal.jpg";

export const org = {
  name: "BRICCA Foundation",
  short: "BRICCA",
  since: 2019,
  tagline: "Transforming Lives. Empowering Communities.",
  region: "Andhra Pradesh, India",
  intro:
    "BRICCA Foundation works with rural, tribal and coastal communities across Andhra Pradesh, delivering education, livelihood, health and inclusion programmes that create measurable, documented social impact.",
};

export const stats = [
  { value: 2019, suffix: "", label: "Working since", plain: "2019" },
  { value: 900, suffix: "+", label: "Families supported", plain: "900+" },
  { value: 5000, suffix: "+", label: "Food packets distributed", plain: "5,000+" },
  { value: 1500, suffix: "+", label: "Vaccination beneficiaries", plain: "1,500+" },
  { value: 9, suffix: "", label: "Vaccination camps", plain: "9" },
];

export type Program = {
  no: string;
  slug: string;
  title: string;
  short: string;
  objective: string;
  beneficiaries: string;
  image: string;
};

export const programs: Program[] = [
  {
    no: "01",
    slug: "education",
    title: "Education",
    short: "Building stronger foundations for learning.",
    objective:
      "Improve access to quality learning and digital education for children in underserved communities.",
    beneficiaries: "School-going children and out-of-school learners",
    image: education,
  },
  {
    no: "02",
    slug: "livelihood",
    title: "Livelihood & Skills",
    short: "Skills that lead to dignified employment.",
    objective:
      "Deliver vocational and digital skill training that connects young people to employment and enterprise.",
    beneficiaries: "Unemployed and underemployed youth",
    image: livelihood,
  },
  {
    no: "03",
    slug: "women",
    title: "Women Empowerment",
    short: "Independence through enterprise and voice.",
    objective:
      "Support women with training, group formation and entrepreneurship pathways.",
    beneficiaries: "Women in rural and coastal communities",
    image: women,
  },
  {
    no: "04",
    slug: "disability-inclusion",
    title: "Disability Inclusion",
    short: "Access, training and equal opportunity.",
    objective:
      "Create inclusive training and accessible opportunities for persons with disabilities.",
    beneficiaries: "Persons with disabilities and their families",
    image: disability,
  },
  {
    no: "05",
    slug: "health",
    title: "Health",
    short: "Community health, close to home.",
    objective:
      "Run health awareness, screening and vaccination support in underserved villages.",
    beneficiaries: "Rural households and vulnerable groups",
    image: health,
  },
  {
    no: "06",
    slug: "disaster-relief",
    title: "Disaster Relief",
    short: "Rapid, dignified support in crisis.",
    objective:
      "Provide relief material and community support during emergencies and disasters.",
    beneficiaries: "Disaster-affected families",
    image: relief,
  },
  {
    no: "07",
    slug: "agriculture",
    title: "Agriculture",
    short: "Sustainable farming, stronger incomes.",
    objective:
      "Promote sustainable agricultural practices and farmer support activities.",
    beneficiaries: "Small and marginal farmers",
    image: agriculture,
  },
  {
    no: "08",
    slug: "sports",
    title: "Sports",
    short: "Confidence, discipline and teamwork.",
    objective:
      "Use sports activities to build confidence, health and life skills among young people.",
    beneficiaries: "Children and youth",
    image: sports,
  },
  {
    no: "09",
    slug: "tribal-coastal",
    title: "Tribal & Coastal Development",
    short: "Programmes shaped by local realities.",
    objective:
      "Deliver community development work designed for tribal and coastal contexts.",
    beneficiaries: "Tribal and coastal communities",
    image: coastal,
  },
];

export const partners = [
  {
    name: "TRRAIN",
    note: "Retail skilling and inclusion partner",
  },
  {
    name: "World Bank",
    note: "World Bank-supported initiatives",
  },
  {
    name: "Gangavaram Port",
    note: "CSR partnership",
  },
];

export const projects = [
  {
    donor: "TRRAIN",
    project: "Skilling and inclusion programme",
    year: "Fiscal year — PLACEHOLDER",
    amount: "Amount — PLACEHOLDER",
  },
  {
    donor: "World Bank",
    project: "World Bank-supported community initiative",
    year: "Fiscal year — PLACEHOLDER",
    amount: "Amount — PLACEHOLDER",
  },
  {
    donor: "Gangavaram Port",
    project: "CSR community development project",
    year: "Fiscal year — PLACEHOLDER",
    amount: "Amount — PLACEHOLDER",
  },
];

export const awards = [
  { year: "2020", title: "Ugadhi Puraskar Award", by: "" },
  { year: "2021", title: "Star of the Game", by: "Magic Bus India Foundation" },
  { year: "2022", title: "Ugadhi Puraskar Award", by: "" },
  { year: "2025", title: "Telugu Velugu Ugadi Mahanandhi National Award", by: "" },
];

export const compliance = [
  { title: "Society Registration", detail: "Registration no. — PLACEHOLDER", status: "Registered" },
  { title: "PAN", detail: "PAN — PLACEHOLDER", status: "Active" },
  { title: "12A", detail: "Registration no. — PLACEHOLDER", status: "Registered" },
  { title: "80G", detail: "Registration no. — PLACEHOLDER", status: "Registered" },
  { title: "CSR-1", detail: "Registration no. — PLACEHOLDER", status: "Registered" },
  { title: "NGO Darpan", detail: "Unique ID — PLACEHOLDER", status: "Registered" },
  { title: "FCRA", detail: "Application submitted", status: "Under Process — Pending Approval" },
];

export const leadership = {
  founder: {
    name: "Choppa Gangadhara Rao",
    role: "Founder & Executive Director",
    experience: "18+ years of experience",
    bio: "Founder and Executive Director of BRICCA Foundation, leading the organisation's community programmes across Andhra Pradesh since 2019.",
  },
  team: [
    { role: "Programme Management", note: "Planning and delivery of field programmes" },
    { role: "Field Operations", note: "Community mobilisation and on-ground execution" },
    { role: "Finance & Compliance", note: "Audit, statutory filings and donor reporting" },
    { role: "Monitoring & Reporting", note: "Documentation of beneficiaries and outcomes" },
  ],
};

export const roadmap = [
  {
    year: "2026",
    title: "Deepen existing programmes",
    body: "Strengthen education, livelihood and health programmes in the communities BRICCA already serves.",
  },
  {
    year: "Next",
    title: "Expand partnerships",
    body: "Grow CSR and institutional partnerships to widen programme reach and funding stability.",
  },
  {
    year: "Ahead",
    title: "Sustained community impact",
    body: "Build long-term, measurable community outcomes with transparent documentation and reporting.",
  },
];

export const contact = {
  address: "Andhra Pradesh, India — full registered address: PLACEHOLDER",
  phone: "Phone: PLACEHOLDER",
  email: "Email: PLACEHOLDER",
  bank: [
    { label: "Account name", value: "PLACEHOLDER" },
    { label: "Bank & branch", value: "PLACEHOLDER" },
    { label: "Account number", value: "PLACEHOLDER" },
    { label: "IFSC code", value: "PLACEHOLDER" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/projects", label: "Projects" },
  { to: "/partners", label: "Partners" },
  { to: "/recognition", label: "Recognition" },
  { to: "/contact", label: "Contact" },
] as const;
