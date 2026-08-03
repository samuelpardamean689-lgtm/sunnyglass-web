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

// ===== ANIMASI SCROLL REVEAL =====
// IntersectionObserver mendeteksi kapan sebuah elemen "masuk" ke area yang terlihat di layar
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Setelah muncul sekali, kita berhenti mengamati elemen itu (biar tidak diulang-ulang)
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15 // animasi dipicu saat 15% elemen sudah terlihat
});

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${(index % 4) * 0.1}s`;
  revealObserver.observe(el);
});
