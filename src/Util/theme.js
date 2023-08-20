if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "light");
}

const getTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") {
    setTheme(localStorageTheme);
  } else if (localStorageTheme === "light") {
    setTheme(localStorageTheme);
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // Dark theme is enabled
      setTheme("dark");
    } else {
      // Light theme is enabled
      setTheme("light");
    }
  }
};

function handleThemeChange(event) {
  if (event.matches) {
    // Dark theme is enabled
    setTheme("dark");
  } else {
    // Light theme is enabled
    setTheme("light");
  }
}

const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

darkThemeQuery.addEventListener("change", handleThemeChange);
const setTheme = theme => {
  console.log(theme);
  document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
};
// Initial check of the theme
handleThemeChange(darkThemeQuery);
export { getTheme };
