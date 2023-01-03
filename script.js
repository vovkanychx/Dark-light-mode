var body = document.body;
var button = document.querySelector('.mode-toggle');
var buttonChange = document.querySelector('.mode-toggle-button');
var currentTheme = localStorage.getItem('theme');
var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Activate/deactivate dark mode by adding/removing classes for dark mode
function activateDarkMode() {
  body.classList.add('dark');
  buttonChange.classList.add('change-position');
}
function activateLightMode() {
  body.classList.remove('dark');
  buttonChange.classList.remove('change-position');
}
// Useragent stylesheet theme preference
if (prefersDarkMode) {
  activateDarkMode();
} else if (!prefersDarkMode) {
  activateLightMode();
}
// Localstorage item theme preference or change website theme in sync with device theme change
if (currentTheme === 'dark') {
  activateDarkMode();
} else if (currentTheme === 'light') {
  activateLightMode();
} else if (currentTheme == null) {
  var changeFromDark = window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => e.matches && activateDarkMode());
  var changeFromLight = window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => e.matches && activateLightMode());
}
// Change theme to light if dark and vice versa
button.addEventListener('click', function() {
  if (body.classList.contains('dark')) {
    body.classList.toggle('dark');
    buttonChange.classList.toggle('change-position');
    localStorage.setItem('theme', 'light');
  } 
  else if (!body.classList.contains('dark')) {
    body.classList.toggle('dark');
    buttonChange.classList.toggle('change-position');
    localStorage.setItem('theme', 'dark');
  }
});

// localStorage.clear();
