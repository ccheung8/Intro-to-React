import { Settings } from "./components/Settings";
import "./App.css";
import { useTheme } from "./provider/UseTheme";

function App() {
  const { setTheme } = useTheme();

  return (
    <div className="container">
      <h1>useContext example app</h1>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        style={{ marginBottom: "10px" }}
      >
        Toggle Theme
      </button>
      <Settings />
    </div>
  );
}

export default App;
