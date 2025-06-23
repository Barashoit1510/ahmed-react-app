import { useState } from "react";

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyles = {
    backgroundColor: darkMode ? "#333" : "#f4f4f4",
    color: darkMode ? "#f4f4f4" : "#333",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyles}>
      <h1>{darkMode ? "Dark" : "Light"} Mode</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
    </div>
  );
}

export default ThemeToggler;
