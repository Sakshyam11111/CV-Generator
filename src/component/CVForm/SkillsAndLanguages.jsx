export default function SkillsAndLanguages({ data, updateArrItem, addItem, removeItem }) {
  const inputStyle = {
    width: "100%",
    padding: "9px 12px",
    border: "1.5px solid #e5e7eb",
    borderRadius: 7,
    fontSize: 13.5,
    fontFamily: "DM Sans, sans-serif",
    outline: "none",
    boxSizing: "border-box",
    color: "#111",
    background: "#fafafa"
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      <div>
        <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: "#111" }}>Skills</h3>
        {data.skills.map((sk, i) => (
          <div key={i} style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            <input
              style={{ ...inputStyle, flex: 1 }}
              value={sk}
              onChange={e => updateArrItem("skills", i, e.target.value)}
              placeholder="e.g. Project Management"
            />
            {i > 0 && <button onClick={() => removeItem("skills", i)} style={{ background: "none", border: "none", color: "#e00", cursor: "pointer", fontSize: 16 }}>×</button>}
          </div>
        ))}
        <button
          onClick={() => addItem("skills", "")}
          style={{ background: "none", border: "1.5px dashed #aaa", color: "#555", borderRadius: 6, padding: "5px 12px", fontSize: 12, cursor: "pointer" }}
        >
          + Add Skill
        </button>
      </div>

      <div>
        <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: "#111" }}>Languages</h3>
        {data.languages.map((lang, i) => (
          <div key={i} style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            <input
              style={{ ...inputStyle, flex: 1 }}
              value={lang}
              onChange={e => updateArrItem("languages", i, e.target.value)}
              placeholder="e.g. English (Fluent)"
            />
            {i > 0 && <button onClick={() => removeItem("languages", i)} style={{ background: "none", border: "none", color: "#e00", cursor: "pointer", fontSize: 16 }}>×</button>}
          </div>
        ))}
        <button
          onClick={() => addItem("languages", "")}
          style={{ background: "none", border: "1.5px dashed #aaa", color: "#555", borderRadius: 6, padding: "5px 12px", fontSize: 12, cursor: "pointer" }}
        >
          + Add Language
        </button>
      </div>
    </div>
  );
}