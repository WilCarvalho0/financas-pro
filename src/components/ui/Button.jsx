export function Button({ label, onClick, variant = "primary" }) {
const style = {
padding: "10px 16px",
borderRadius: "8px",
border: "none",
background: variant === "primary" ? "var(--secondary)" : "var(--accent)",
color: "#fff",
fontWeight: "600"
};


return <button style={style} onClick={onClick}>{label}</button>;
}