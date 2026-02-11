export default function PersonalInfo({ data, update }) {
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          ["Full Name", "name"],
          ["Job Title", "title"],
          ["Email", "email"],
          ["Phone", "phone"],
          ["Address", "address"],
          ["Website", "website"]
        ].map(([label, field]) => (
          <div key={field}>
            <label style={labelStyle}>{label}</label>
            <input
              style={inputStyle}
              value={data[field]}
              onChange={e => update(field, e.target.value)}
              placeholder={label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}