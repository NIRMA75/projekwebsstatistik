document.addEventListener('DOMContentLoaded', () => {

  /* ================= CAROUSEL ================= */
  const slides = [...document.querySelectorAll('.slides .slide')];
  const dotsContainer = document.querySelector('.carousel-dots');
  let current = 0;
  let autoPlay = null;

  if (slides.length && dotsContainer) {

    slides.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'dot';
      d.addEventListener('click', () => show(i));
      dotsContainer.appendChild(d);
    });

    const dots = [...dotsContainer.children];

    function show(i) {
      slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
      dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
      current = i;
    }

    function next() {
      show((current + 1) % slides.length);
    }

    show(0);
    if (slides.length > 1) autoPlay = setInterval(next, 4500);

    const wrap = document.querySelector('.carousel');
    wrap?.addEventListener('mouseenter', () => clearInterval(autoPlay));
    wrap?.addEventListener('mouseleave', () => autoPlay = setInterval(next, 4500));

  }

  /* ================= DRAWER ================= */
const drawerBtn = document.getElementById("drawerToggle"); // tombol titik tiga
const drawer = document.getElementById("navDrawer");
const backdrop = document.getElementById("drawerBackdrop");
const closeBtn = document.getElementById("closeDrawer");

// Fungsi buka drawer
function openDrawer() {
  drawer.classList.add("open");
  backdrop.classList.add("show");
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

// Fungsi tutup drawer
function closeDrawerFunc() {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
  setTimeout(() => (backdrop.hidden = true), 250);
  document.body.style.overflow = "";
}

// Event listener untuk semua halaman
if (drawerBtn) drawerBtn.addEventListener("click", openDrawer);
if (closeBtn) closeBtn.addEventListener("click", closeDrawerFunc);
if (backdrop) backdrop.addEventListener("click", closeDrawerFunc);


  /* ================= HORIZONTAL EPISODE SLIDER ================= */
  const episodeGrid = document.getElementById('episodeGrid');

  if (episodeGrid) {
    episodeGrid.style.display = "flex";
    episodeGrid.style.overflowX = "auto";
    episodeGrid.style.gap = "16px";
    episodeGrid.style.scrollSnapType = "x mandatory";

    // setiap card snap ke posisi
    const cards = episodeGrid.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.minWidth = "260px";
      card.style.scrollSnapAlign = "start";
    });
  }

  /* ================= LANGUAGE SWITCHER ================= */
  document.getElementById("langSelect").addEventListener("change", function () {
  const lang = this.value;
  applyLanguage(lang);
});

function applyLanguage(lang) {
  const dict = {
    id: {
      home: "Beranda",
      episode: "Episode",
      history: "Riwayat",
      favorite: "Favorit",
      about: "Tentang Ngopi Data",
      slogan: "Santai Bahas Data-Serius Berbagi Makna",
      contentTitle: "Tentang Ngopi Data",
      p1: `TL; DR: Ngopi Data ... berdasarkan pada data.`,
      p2: `Podcast ini juga menyajikan ... standar saat ini.`,
      p3: `Kami telah meninggalkan ... fitur umpan balik.`,
      p4: `Ngopi Data dibangun oleh ... Azzahra Lailatun Nahdi.`,
      footer: "© 2025 Ngopi Data. Semua hak dilindungi."
    },
    en: {
      home: "Home",
      episode: "Episodes",
      history: "History",
      favorite: "Favorites",
      about: "About Ngopi Data",
      slogan: "Casually Discuss Data – Seriously Share Meaning",
      contentTitle: "About Ngopi Data",
      p1: `TL;DR: Ngopi Data, or Smart Chats by Data Science Students, is the best web-based podcast player created by students of the Data Science Study Program at UIN K.H. Abdurrahman Wahid Pekalongan. This independent podcast delivers interesting, fresh, and inspiring information across various fields grounded in data.`,
      p2: `This podcast also presents research and community service experiences that are informative and valuable for both data scientists and fellow podcasters, all blended into one show—Ngopi Data. We started with our web player: a simple yet intuitively designed website that elevates the online podcast-listening experience to today’s standards.`,
      p3: `We have removed the worst parts of the web (such as pop-ups, required logins, slow pages, and excessive ads) because this browser-based player is focused on user comfort. If you find something confusing, encounter a bug, or want to share suggestions, you can contact our team anytime through the feedback feature.`,
      p4: `Ngopi Data was created by students of the Data Science Study Program at UIN K.H. Abdurrahman Wahid Pekalongan: Devita Rizqi Maulida, Nirma Ayu Suryaningtyas, Selvalenitna Rista Anggita, and Azzahra Lailatun Nahdi.`,
      footer: "© 2025 Ngopi Data. All rights reserved."
    }
  };

  const t = dict[lang];

  document.querySelector(".sidebar-nav ul li:nth-child(1) a").textContent = t.home;
  document.querySelector(".sidebar-nav ul li:nth-child(2) a").textContent = t.episode;
  document.querySelector(".sidebar-nav ul li:nth-child(3) a").textContent = t.history;
  document.querySelector(".sidebar-nav ul li:nth-child(4) a").textContent = t.favorite;

  document.querySelector(".site-hub").textContent = t.slogan;

  document.querySelector(".main-content h1").textContent = t.contentTitle;

  const ps = document.querySelectorAll(".main-content p");
  ps[0].textContent = t.p1;
  ps[1].textContent = t.p2;
  ps[2].textContent = t.p3;
  ps[3].textContent = t.p4;

  document.querySelector("footer p").textContent = t.footer;
}


  /* ================= SEARCH FUNCTION ================= */
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function doSearch(){
    const q = (searchInput.value || '').trim().toLowerCase();
    // contoh aksi: highlight / saring card sesuai judul
    document.querySelectorAll('.card-grid .card').forEach(card => {
      const t = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      card.style.opacity = t.includes(q) || !q ? '1' : '0.35';
    });
  }

  searchBtn?.addEventListener('click', doSearch);
  searchInput?.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') doSearch(); });

});

/* ====STATISTIK NGOPI DATA ====*/
document.getElementById("todayVisitors").innerText = 124;
document.getElementById("totalVisitors").innerText = 5821;
document.getElementById("likedPosts").innerText = 312;
document.getElementById("podcastCount").innerText = 44;
document.getElementById("activityRate").innerText = "87%";

const months = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

const visitorData = [120,150,300,280,350,420,510,480,560,630,700,750];
const postData = [4,6,8,7,9,12,10,11,14,16,18,20];

new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: months,
        datasets: [
            {
                label: "Pengunjung",
                data: visitorData,
                borderWidth: 3,
                borderColor: "#6f5f25", 
                backgroundColor: "transparent",
                tension: 0.35
            },
            {
                label: "Postingan",
                data: postData,
                borderWidth: 3,
                borderColor: "#b8922f",
                backgroundColor: "transparent",
                tension: 0.35
            }
        ]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// SUBMENU-1
document.querySelectorAll(".menu-toggle").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const parent = this.parentElement;
        const submenu = parent.querySelector(".submenu-1");
        const arrow = this.querySelector(".arrow");

        if (!submenu) return; // submenu tidak ditemukan

        const isOpen = submenu.style.display === "block";

        submenu.style.display = isOpen ? "none" : "block";
        arrow.classList.toggle("rotate", !isOpen);
    });
});


