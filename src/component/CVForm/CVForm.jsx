import { useState } from 'react';
import { TABS } from '../../constants';
import PersonalInfo from './PersonalInfo';
import ProfessionalSummary from './ProfessionalSummary';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsAndLanguages from './SkillsAndLanguages';
import ReferencesSection from './ReferencesSection';

const tabComponents = [
  PersonalInfo,
  ProfessionalSummary,
  ExperienceSection,
  EducationSection,
  SkillsAndLanguages,
  ReferencesSection,
];

export default function CVForm({ template, onSubmit, onBack }) {
  const [data, setData] = useState({
    name: "", title: "", email: "", phone: "", address: "", website: "",
    summary: "",
    experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
    education: [{ institution: "", degree: "", startDate: "", endDate: "", description: "" }],
    skills: [""],
    languages: [""],
    references: [{ name: "", company: "", phone: "", email: "" }],
  });
  const [activeTab, setActiveTab] = useState(0);

  const update = (field, value) => setData(prev => ({ ...prev, [field]: value }));
  const updateNested = (field, index, subfield, value) =>
    setData(prev => {
      const arr = [...prev[field]];
      arr[index] = { ...arr[index], [subfield]: value };
      return { ...prev, [field]: arr };
    });
  const addItem = (field, empty) => setData(prev => ({ ...prev, [field]: [...prev[field], empty] }));
  const removeItem = (field, index) => setData(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));

  const TabContent = tabComponents[activeTab];

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fa", fontFamily: "DM Sans, sans-serif" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#555", fontSize: 13 }}>← Back to Templates</button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {template && <span style={{ fontSize: 12, color: "#888", background: "#f0f0f0", padding: "3px 10px", borderRadius: 20 }}>Template: {template.label}</span>}
        </div>
        <button onClick={() => onSubmit(data)} style={{ background: "#111", color: "#fff", border: "none", borderRadius: 7, padding: "8px 20px", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>Preview CV →</button>
      </div>

      <div style={{ maxWidth: 760, margin: "32px auto", padding: "0 20px" }}>
        <h2 style={{ margin: "0 0 6px", fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>Fill in your details</h2>
        <p style={{ margin: "0 0 24px", color: "#888", fontSize: 13.5 }}>Complete each section to build your professional CV.</p>

        <div style={{ display: "flex", gap: 0, borderBottom: "2px solid #e5e7eb", marginBottom: 24 }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                background: "none",
                border: "none",
                padding: "10px 14px",
                fontSize: 13,
                fontWeight: activeTab === i ? 700 : 500,
                color: activeTab === i ? "#111" : "#777",
                borderBottom: activeTab === i ? "2px solid #111" : "2px solid transparent",
                marginBottom: -2,
                cursor: "pointer",
                transition: "all 0.15s"
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 10, padding: 24, border: "1px solid #e5e7eb" }}>
          <TabContent data={data} update={update} updateNested={updateNested} addItem={addItem} removeItem={removeItem} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            disabled={activeTab === 0}
            style={{
              background: "#fff",
              border: "1.5px solid #e5e7eb",
              borderRadius: 7,
              padding: "8px 18px",
              fontSize: 13,
              cursor: activeTab === 0 ? "default" : "pointer",
              color: activeTab === 0 ? "#bbb" : "#333"
            }}
          >
            ← Previous
          </button>
          {activeTab < TABS.length - 1 ? (
            <button
              onClick={() => setActiveTab(activeTab + 1)}
              style={{ background: "#111", color: "#fff", border: "none", borderRadius: 7, padding: "8px 20px", fontSize: 13, cursor: "pointer", fontWeight: 600 }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => onSubmit(data)}
              style={{ background: "#111", color: "#fff", border: "none", borderRadius: 7, padding: "8px 20px", fontSize: 13, cursor: "pointer", fontWeight: 600 }}
            >
              ✓ Preview CV
            </button>
          )}
        </div>
      </div>
    </div>
  );
}