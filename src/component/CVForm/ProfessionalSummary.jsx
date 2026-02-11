export default function ProfessionalSummary({ data, update }) {
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
      <label style={labelStyle}>Professional Summary / About Me</label>
      <textarea
        style={{ ...inputStyle, height: 140, resize: "vertical" }}
        value={data.summary}
        onChange={e => update("summary", e.target.value)}
        placeholder="Write a brief professional summary..."
      />
    </div>
  );
}