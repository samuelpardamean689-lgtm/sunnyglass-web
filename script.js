// Ambil elemen tombol hamburger dan menu navigasi
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Saat tombol hamburger diklik: buka/tutup menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open');

  // Update aria-expanded untuk pembaca layar (aksesibilitas)
  const isOpen = navMenu.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Saat salah satu link menu diklik, otomatis tutup menu (khusus mobile)
const navLinks = document.querySelectorAll('#navMenu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  });
});
