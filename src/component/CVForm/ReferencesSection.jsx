export default function ReferencesSection({ data, updateNested, addItem, removeItem }) {
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

  const labelStyle = { fontSize: 11.5, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 5, display: "block" };

  return (
    <div>
      {data.references.map((ref, i) => (
        <div key={i} style={{ background: "#f9f9f9", borderRadius: 8, padding: 14, marginBottom: 12, border: "1px solid #eee" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontWeight: 600, fontSize: 13, color: "#333" }}>Reference #{i + 1}</span>
            {i > 0 && <button onClick={() => removeItem("references", i)} style={{ background: "none", border: "none", color: "#e00", cursor: "pointer", fontSize: 12 }}>Remove</button>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              ["Name", "name"],
              ["Company / Role", "company"],
              ["Phone", "phone"],
              ["Email", "email"]
            ].map(([lbl, key]) => (
              <div key={key}>
                <label style={labelStyle}>{lbl}</label>
                <input
                  style={inputStyle}
                  value={ref[key]}
                  onChange={e => updateNested("references", i, key, e.target.value)}
                  placeholder={lbl}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={() => addItem("references", { name: "", company: "", phone: "", email: "" })}
        style={{ background: "#111", color: "#fff", border: "none", borderRadius: 7, padding: "8px 16px", fontSize: 12.5, cursor: "pointer", fontWeight: 600 }}
      >
        + Add Reference
      </button>
    </div>
  );
}