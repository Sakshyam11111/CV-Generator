import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEMPLATES } from '../data/constants';

export default function TemplateSelection({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fa", fontFamily: "DM Sans, sans-serif" }}>
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28, background: "#111", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="2" width="4" height="5" rx="0.5" fill="white"/>
              <rect x="8" y="2" width="4" height="3" rx="0.5" fill="white" opacity="0.7"/>
              <rect x="2" y="8" width="10" height="1.5" rx="0.5" fill="white" opacity="0.5"/>
              <rect x="2" y="10.5" width="7" height="1.5" rx="0.5" fill="white" opacity="0.5"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: -0.3 }}>CVBuilder</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ fontSize: 13, color: "#555", padding: "6px 14px", cursor: "pointer", borderRadius: 6 }}>Sign in</span>
          <span style={{
            fontSize: 13, color: "#fff", background: "#111",
            padding: "6px 14px", cursor: "pointer", borderRadius: 6, fontWeight: 500
          }}>Get started free</span>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "48px 20px 32px" }}>
        <h1 style={{
          fontSize: 36, fontWeight: 700, margin: 0, letterSpacing: -1,
          fontFamily: "Playfair Display, serif"
        }}>
          Choose Your Template
        </h1>
        <p style={{ color: "#666", marginTop: 10, fontSize: 15, maxWidth: 480, margin: "10px auto 0" }}>
          Select a professionally designed template to get started. You can always switch later.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20
        }}>
          <div
            onClick={() => navigate('/createblank')}
            onMouseEnter={() => setHovered("blank")}
            onMouseLeave={() => setHovered(null)}
            style={{
              aspectRatio: "3/4",
              border: `2px dashed ${hovered === "blank" ? "#111" : "#d1d5db"}`,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              cursor: "pointer",
              background: hovered === "blank" ? "#f9f9f9" : "#fff",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "2px solid #111",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, color: "#111"
            }}>+</div>
            <span style={{ fontWeight: 600, fontSize: 13, color: "#111" }}>Create blank</span>
          </div>

          {TEMPLATES.map(t => (
            <div
              key={t.id}
              onClick={() => onSelect(t)}
              onMouseEnter={() => setHovered(t.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{
                aspectRatio: "3/4",
                border: `2px solid ${hovered === t.id ? t.color : "#e5e7eb"}`,
                borderRadius: 10,
                overflow: "hidden",
                position: "relative",
                boxShadow: hovered === t.id ? `0 8px 32px ${t.color}25` : "0 1px 4px rgba(0,0,0,0.06)",
                transform: hovered === t.id ? "translateY(-4px)" : "none",
                background: "#fff"
              }}>
                <img
                  src={t.image}
                  alt={t.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block"
                  }}
                />

                {hovered === t.id && (
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s"
                  }}>
                    <span style={{
                      background: "#fff",
                      color: "#111",
                      fontWeight: 700,
                      fontSize: 12,
                      padding: "8px 20px",
                      borderRadius: 20,
                      letterSpacing: 0.5
                    }}>
                      USE TEMPLATE
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 8, paddingLeft: 2 }}>
                <p style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: "#111" }}>
                  {t.label}
                </p>
                <p style={{ margin: 0, fontSize: 11, color: "#888", marginTop: 1 }}>
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}