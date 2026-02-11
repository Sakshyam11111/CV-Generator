import { useState } from 'react';
import { TABS } from '../../data/constants';
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

  const removeItem = (field, index) =>
    setData(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));

  const TabContent = tabComponents[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 font-['DM_Sans']">
      <div className="bg-white border-b border-gray-200 h-14 px-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
        >
          ← Back to Templates
        </button>

        <div className="flex items-center gap-2">
          {template && (
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Template: {template.label}
            </span>
          )}
        </div>

        <button
          onClick={() => onSubmit(data)}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Preview CV →
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-8">
        <h2 className="text-3xl font-bold font-['Playfair_Display'] tracking-tight mb-1.5">
          Fill in your details
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Complete each section to build your professional CV.
        </p>

        <div className="flex border-b-2 border-gray-200 mb-6">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`
                px-4 py-2.5 text-sm font-medium transition-all
                ${activeTab === i
                  ? 'text-gray-900 font-bold border-b-2 border-gray-900 -mb-0.5'
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <TabContent
            data={data}
            update={update}
            updateNested={updateNested}
            addItem={addItem}
            removeItem={removeItem}
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            disabled={activeTab === 0}
            className={`
              px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-300
              ${activeTab === 0
                ? 'text-gray-400 cursor-not-allowed bg-gray-50'
                : 'text-gray-700 hover:bg-gray-50 transition-colors'
              }
            `}
          >
            ← Previous
          </button>

          {activeTab < TABS.length - 1 ? (
            <button
              onClick={() => setActiveTab(activeTab + 1)}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => onSubmit(data)}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              ✓ Preview CV
            </button>
          )}
        </div>
      </div>
    </div>
  );
}