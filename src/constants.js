export const TEMPLATES = [
  { id: 1, name: "Isabel Mercado", style: "dark-sidebar", color: "#1a2744", label: "Dark Sidebar" },
  { id: 2, name: "Donna Stroupe", style: "blue-header", color: "#7fa3b8", label: "Blue Header" },
  { id: 3, name: "Jacqueline Thompson", style: "purple-clean", color: "#7c3aed", label: "Purple Classic" },
  { id: 4, name: "Sebastian Bennett", style: "minimal-spaced", color: "#111111", label: "Minimal Spaced" },
  { id: 5, name: "Olivia Schumacher", style: "clean-simple", color: "#222222", label: "Clean Simple" },
  { id: 6, name: "Professional Bold", style: "bold-center", color: "#111111", label: "Bold Center" },
  { id: 7, name: "Connor Hamilton", style: "wide-spaced", color: "#111111", label: "Wide Spaced" },
  { id: 8, name: "Morgan Maxwell", style: "black-panel", color: "#111111", label: "Black Panel" },
  { id: 9, name: "Lorna Alvarado", style: "dark-header", color: "#2d2d2d", label: "Dark Header" },
  { id: 10, name: "Jamie Chastain", style: "accent-bar", color: "#111111", label: "Accent Bar" },
];

export const DEFAULT_DATA = {
  name: "", title: "", email: "", phone: "", address: "", website: "",
  summary: "",
  experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
  education: [{ institution: "", degree: "", startDate: "", endDate: "", description: "" }],
  skills: [""],
  languages: [""],
  references: [{ name: "", company: "", phone: "", email: "" }],
};

export const TABS = ["Personal", "Summary", "Experience", "Education", "Skills", "References"];