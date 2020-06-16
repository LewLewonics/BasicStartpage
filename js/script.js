let darkTheme = false;

if (localStorage.getItem('Theme') != null) {
  let root = document.documentElement;
  if (localStorage.getItem('Theme') == "true") {
    console.log('dark mode starting');
    darkTheme = true;
    root.style.setProperty("--primary-color", '#ffffff');
    root.style.setProperty("--secondary-color", '#313131');
  }
}

document.getElementById('theme').addEventListener('click', changeTheme);

function changeTheme() {
  let root = document.documentElement;
  if (darkTheme) {
    root.style.setProperty("--primary-color", '#313131');
    root.style.setProperty("--secondary-color", '#ffffff');
  }
  if (!darkTheme) {
    root.style.setProperty("--primary-color", '#ffffff');
    root.style.setProperty("--secondary-color", '#313131');
  }
  darkTheme = !darkTheme;
  localStorage.setItem(`Theme`, `${darkTheme}`)
}
