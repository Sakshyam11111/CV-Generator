export default function TemplateThumbnail({ template }) {
  const base = { width: "100%", height: "100%", position: "relative", overflow: "hidden", fontFamily: "DM Sans, sans-serif", borderRadius: 2 };
  const line = (w, h, color, mt = 2) => ({ width: w, height: h, background: color, borderRadius: 1, marginTop: mt });

  const renders = {
    "dark-sidebar": () => (
      <div style={{ ...base, display: "flex" }}>
        <div style={{ width: "35%", background: "#1a2744", padding: "6px 4px" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#556080", margin: "0 auto 4px" }} />
          {[60, 45, 50, 40].map((w, i) => <div key={i} style={line(`${w}%`, 2, "#556080", 3)} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", padding: "6px 4px" }}>
          <div style={line("80%", 3, "#1a2744", 0)} />
          <div style={line("55%", 2, "#aaa", 2)} />
          {[90, 75, 85, 70, 80].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 4)} />)}
        </div>
      </div>
    ),
    "blue-header": () => (
      <div style={{ ...base, background: "#fff" }}>
        <div style={{ background: "#c9dde8", height: "22%", display: "flex", alignItems: "center", padding: "0 6px", gap: 4 }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#8fa8b8", flexShrink: 0 }} />
          <div>
            <div style={{ width: 40, height: 2.5, background: "#4a7a94", borderRadius: 1 }} />
            <div style={{ width: 28, height: 1.5, background: "#6a96ad", borderRadius: 1, marginTop: 2 }} />
          </div>
        </div>
        <div style={{ display: "flex", padding: "4px 4px" }}>
          <div style={{ width: "35%" }}>{[55, 40, 50].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#aaa", 3)} />)}</div>
          <div style={{ flex: 1 }}>{[90, 80, 85, 75].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}</div>
        </div>
      </div>
    ),
    "purple-clean": () => (
      <div style={{ ...base, background: "#fff", padding: "6px 8px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 50, height: 3, background: "#7c3aed", margin: "0 auto", borderRadius: 1 }} />
          <div style={{ width: 35, height: 2, background: "#a78bfa", margin: "2px auto", borderRadius: 1 }} />
        </div>
        <div style={{ borderTop: "1.5px solid #7c3aed", marginTop: 5, paddingTop: 3 }}>
          <div style={{ width: 25, height: 2, background: "#7c3aed", borderRadius: 1 }} />
          {[90, 80, 85].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
        <div style={{ borderTop: "1.5px solid #7c3aed", marginTop: 5, paddingTop: 3 }}>
          <div style={{ width: 30, height: 2, background: "#7c3aed", borderRadius: 1 }} />
          {[90, 75].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
      </div>
    ),
    "minimal-spaced": () => (
      <div style={{ ...base, background: "#fff", padding: "8px" }}>
        <div style={{ letterSpacing: 2 }}>
          <div style={{ width: 65, height: 3, background: "#111", borderRadius: 1 }} />
          <div style={{ width: 45, height: 1.5, background: "#555", borderRadius: 1, marginTop: 2 }} />
        </div>
        <div style={{ borderTop: "1px solid #ddd", marginTop: 6, paddingTop: 4, display: "flex", gap: 4 }}>
          <div style={{ width: "40%" }}>{[55, 40, 50, 42].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#bbb", 3)} />)}</div>
          <div style={{ flex: 1 }}>{[85, 75, 80, 70].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ddd", 3)} />)}</div>
        </div>
      </div>
    ),
    "clean-simple": () => (
      <div style={{ ...base, background: "#fff", padding: "6px 8px" }}>
        <div style={{ width: 55, height: 3, background: "#111", borderRadius: 1 }} />
        <div style={{ width: 38, height: 2, background: "#555", borderRadius: 1, marginTop: 2 }} />
        <div style={{ width: "100%", height: 1, background: "#ddd", marginTop: 5 }} />
        <div style={{ marginTop: 3 }}>
          <div style={{ width: 22, height: 2, background: "#111", borderRadius: 1 }} />
          {[90, 80, 85, 70, 75].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
        <div style={{ width: "100%", height: 1, background: "#ddd", marginTop: 5 }} />
        <div style={{ marginTop: 3 }}>
          <div style={{ width: 22, height: 2, background: "#111", borderRadius: 1 }} />
          {[80, 65].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
      </div>
    ),
    "bold-center": () => (
      <div style={{ ...base, background: "#fff", padding: "6px 8px", textAlign: "center" }}>
        <div style={{ width: 65, height: 4, background: "#111", margin: "0 auto", borderRadius: 1 }} />
        <div style={{ width: 40, height: 2, background: "#444", margin: "2px auto", borderRadius: 1 }} />
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 3 }}>
          {[20, 20, 20].map((w, i) => <div key={i} style={{ width: w, height: 1.5, background: "#888", borderRadius: 1 }} />)}
        </div>
        <div style={{ borderTop: "1.5px solid #ddd", marginTop: 5, paddingTop: 3, textAlign: "left" }}>
          <div style={{ width: 20, height: 2, background: "#111", borderRadius: 1 }} />
          {[90, 80, 75].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
      </div>
    ),
    "wide-spaced": () => (
      <div style={{ ...base, background: "#fff", padding: "8px" }}>
        <div style={{ width: 70, height: 4, background: "#111", borderRadius: 1 }} />
        <div style={{ width: 48, height: 2, background: "#555", borderRadius: 1, marginTop: 2 }} />
        <div style={{ width: 50, height: 1, background: "#aaa", borderRadius: 1, marginTop: 2 }} />
        <div style={{ borderTop: "1px solid #eee", marginTop: 5, paddingTop: 3 }}>
          <div style={{ width: 30, height: 2, background: "#111", borderRadius: 1 }} />
          {[90, 85, 75, 80].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ddd", 3)} />)}
        </div>
        <div style={{ display: "flex", gap: 4, marginTop: 5 }}>
          <div style={{ width: "40%" }}>{[50, 42, 48].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#bbb", 3)} />)}</div>
          <div style={{ flex: 1 }}>{[70, 60, 65].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}</div>
        </div>
      </div>
    ),
    "black-panel": () => (
      <div style={{ ...base, display: "flex" }}>
        <div style={{ flex: 1, background: "#fff", padding: "6px 5px" }}>
          <div style={{ width: 55, height: 3, background: "#111", borderRadius: 1 }} />
          <div style={{ width: 38, height: 2, background: "#555", borderRadius: 1, marginTop: 2 }} />
          <div style={{ width: "100%", height: 1, background: "#ddd", marginTop: 4 }} />
          {[80, 70, 75, 65, 70].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
        <div style={{ width: "32%", background: "#111", padding: "6px 4px" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#444", margin: "0 auto 4px" }} />
          {[70, 55, 60, 50].map((w, i) => <div key={i} style={{ width: `${w}%`, height: 1.5, background: "#555", borderRadius: 1, marginTop: 3 }} />)}
        </div>
      </div>
    ),
    "dark-header": () => (
      <div style={{ ...base, background: "#f5f5f5" }}>
        <div style={{ background: "#2d2d2d", height: "22%", display: "flex", alignItems: "center", padding: "0 6px", gap: 4 }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid #555", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: 10, height: 2, background: "#888", borderRadius: 1 }} />
          </div>
          <div>
            <div style={{ width: 38, height: 2.5, background: "#fff", borderRadius: 1 }} />
            <div style={{ width: 26, height: 1.5, background: "#888", borderRadius: 1, marginTop: 2 }} />
          </div>
        </div>
        <div style={{ display: "flex", padding: "4px 4px" }}>
          <div style={{ width: "38%", paddingRight: 3 }}>{[55, 42, 50, 38].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#999", 3)} />)}</div>
          <div style={{ flex: 1 }}>{[88, 78, 82, 70].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#bbb", 3)} />)}</div>
        </div>
      </div>
    ),
    "accent-bar": () => (
      <div style={{ ...base, background: "#fff", padding: "6px 8px", display: "flex", gap: 6 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
            <div style={{ width: 3, height: 18, background: "#111", borderRadius: 1, flexShrink: 0 }} />
            <div>
              <div style={{ width: 38, height: 2.5, background: "#111", borderRadius: 1 }} />
              <div style={{ width: 28, height: 1.5, background: "#555", borderRadius: 1, marginTop: 2 }} />
            </div>
          </div>
          {[{w:80},{w:70},{w:75}].map((x, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 3, marginTop: 5 }}>
              <div style={{ width: 2, height: 8, background: "#111", borderRadius: 1, flexShrink: 0, marginTop: 1 }} />
              <div style={{ width: `${x.w}%`, height: 1.5, background: "#ccc", borderRadius: 1 }} />
            </div>
          ))}
        </div>
        <div style={{ width: "35%" }}>
          {[70, 55, 60, 50, 58].map((w, i) => <div key={i} style={line(`${w}%`, 1.5, "#ccc", 3)} />)}
        </div>
      </div>
    ),
  };

  const renderFn = renders[template.style];
  return renderFn ? renderFn() : <div style={{ ...base, background: "#f0f0f0" }} />;
}