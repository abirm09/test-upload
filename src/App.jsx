import { useState } from "react";
import { getTheme } from "./Util/theme";
import Pagination from "./Pagination";

const App = () => {
  const [themeName, setThemeName] = useState(localStorage.getItem("theme"));
  const themes = ["light", "dark", "system"];
  const handleThemeChange = theme => {
    localStorage.setItem("theme", theme);
    setThemeName(localStorage.getItem("theme"));
    getTheme(theme);
  };
  return (
    <>
      <section className="max-w-7xl mx-auto px-2">
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1 capitalize">
            {themeName}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {themes.map((theme, index) => (
              <li
                key={index}
                onClick={() => handleThemeChange(theme)}
                className="capitalize"
              >
                <a>{theme}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Pagination />
    </>
  );
};

export default App;
