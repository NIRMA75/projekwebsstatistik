document.querySelectorAll('.menu-toggle').forEach(menu => {
  menu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
  });
});
