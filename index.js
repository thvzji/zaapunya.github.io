function changeTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  
  if (currentTheme === 'dark-theme') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
  } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
  }
}
