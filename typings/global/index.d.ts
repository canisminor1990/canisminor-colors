interface Window {
  themeMode: 'dark' | 'light';
  updateTheme: (type: 'dark' | 'light') => void;
  updateCssTheme: (type: 'dark' | 'light') => void;
}
