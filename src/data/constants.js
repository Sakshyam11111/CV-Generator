import template1Img  from '../assets/template1.png';
import template2Img  from '../assets/template2.png';
import template3Img  from '../assets/template3.png';
import template4Img  from '../assets/template4.png';
import template5Img  from '../assets/template5.png';
import template6Img  from '../assets/template6.png';
import template7Img  from '../assets/template7.png';
import template8Img  from '../assets/template8.png';
import template9Img  from '../assets/template9.png';
import template10Img from '../assets/template10.png';

export const TEMPLATES = [
  { id: 1,  name: "Isabel Mercado",      style: "dark-sidebar",   color: "#1a2744",  label: "Dark Sidebar",   image: template1Img  },
  { id: 2,  name: "Donna Stroupe",       style: "blue-header",    color: "#7fa3b8",  label: "Blue Header",    image: template2Img  },
  { id: 3,  name: "Jacqueline Thompson", style: "purple-clean",   color: "#7c3aed",  label: "Purple Classic", image: template3Img  },
  { id: 4,  name: "Sebastian Bennett",   style: "minimal-spaced", color: "#111111",  label: "Minimal Spaced", image: template4Img  },
  { id: 5,  name: "Olivia Schumacher",   style: "clean-simple",   color: "#222222",  label: "Clean Simple",   image: template5Img  },
  { id: 6,  name: "Professional Bold",   style: "bold-center",    color: "#111111",  label: "Bold Center",    image: template6Img  },
  { id: 7,  name: "Connor Hamilton",     style: "wide-spaced",    color: "#111111",  label: "Wide Spaced",    image: template7Img  },
  { id: 8,  name: "Morgan Maxwell",      style: "black-panel",    color: "#111111",  label: "Black Panel",    image: template8Img  },
  { id: 9,  name: "Lorna Alvarado",      style: "dark-header",    color: "#2d2d2d",  label: "Dark Header",    image: template9Img  },
  { id: 10, name: "Jamie Chastain",      style: "accent-bar",     color: "#111111",  label: "Accent Bar",     image: template10Img },
];

export const DEFAULT_DATA = {
  name: "",
  title: "",
  email: "",
  phone: "",
  address: "",
  website: "",
  summary: "",
  experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
  education: [{ institution: "", degree: "", startDate: "", endDate: "", description: "" }],
  skills: [""],
  languages: [""],
  references: [{ name: "", company: "", phone: "", email: "" }],
};

export const TABS = [
  "Personal",
  "Summary",
  "Experience",
  "Education",
  "Skills",
  "References"
];