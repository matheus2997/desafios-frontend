const toggleSwitch = document.querySelector('#toggle');
toggleSwitch.addEventListener('click', switchTheme);

function switchTheme(e) {
  const isLightTheme = localStorage.getItem('theme') === 'light';
  const theme = isLightTheme ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
}
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light') {
    toggleSwitch.checked = true;
  }
}
