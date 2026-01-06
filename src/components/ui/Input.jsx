export function Input({ placeholder, type = "text", onChange }) {
return (
<input
type={type}
placeholder={placeholder}
onChange={onChange}
style={{
padding: "10px",
borderRadius: "6px",
border: "1px solid #ccc",
marginBottom: "10px",
width: "100%"
}}
/>
);
}