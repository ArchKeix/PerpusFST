/* ==========================================
   PERPUSFST - DATABASE BUKU & MOCK DATA
   ========================================== */

const BOOKS_DATABASE = [
  {
    id: "quantum-mechanics",
    title: "Quantum Mechanics: Principles & Applications",
    author: "Robert D. Vance",
    published: 2023,
    type: "Buku Fisik", // E-Book, Buku Fisik, Jurnal
    category: "Theoretical Physics",
    location: "Perpustakaan FST, Lantai 7, Gedung FST",
    status: "Tersedia Fisik",
    coverUrl: "", 
    coverColor: "from-slate-900 to-indigo-950",
    coverGlow: "shadow-indigo-500/20",
    summary: "This comprehensive textbook explores the foundational principles of quantum mechanics, bridging the gap between theoretical frameworks and practical laboratory applications. Robert D. Vance provides an accessible yet rigorous approach to wave-particle duality, Schrödinger's equation, and entanglement. Designed specifically for the Faculty of Science and Technology, it incorporates contemporary research data from the FST Research Hub.",
    isPremium: true
  },
  {
    id: "advanced-networks",
    title: "Advanced Computer Networks & Protocols",
    author: "Dr. Sarah Jenkins",
    published: 2024,
    type: "E-Book",
    category: "Computer Science",
    location: "Akses Digital (E-Book)",
    status: "Tersedia Digital",
    coverColor: "from-blue-900 to-slate-950",
    coverGlow: "shadow-blue-500/20",
    summary: "Explore the architectures, protocols, and technologies driving modern high-speed computer networks. This textbook covers advanced topics including software-defined networking (SDN), internet routing protocols, and network performance optimizations. Perfect for graduate students and networking professionals.",
    isPremium: false
  },
  {
    id: "sustainable-agriculture",
    title: "Journal of Sustainable Agriculture",
    author: "FST Agriculture Dept",
    volume: "Vol. 42, Issue 3",
    published: 2024,
    type: "Jurnal",
    category: "Environmental Science",
    location: "Akses Digital (Jurnal)",
    status: "Open Access",
    coverColor: "from-emerald-900 to-emerald-950",
    coverGlow: "shadow-emerald-500/20",
    summary: "This peer-reviewed journal issue compiles original research focusing on sustainable agricultural techniques, soil conservation, and biological pest control. Learn about modern organic farming techniques and climate-resilient crop varieties designed for tropical regions.",
    isOpenAccess: true
  },
  {
    id: "cpp-structures",
    title: "Data Structures in C++",
    author: "Alan Turing Institute",
    published: 2023,
    type: "Buku Fisik",
    category: "Computer Science",
    location: "Perpustakaan FST, Lantai 4, Rak B3",
    status: "Tersedia Fisik",
    coverColor: "from-purple-900 to-slate-950",
    coverGlow: "shadow-purple-500/20",
    summary: "A rigorous textbook explaining the design and implementation of abstract data types, memory management, and algorithm complexity in modern C++. Perfect for students taking core CS courses.",
    isPremium: false
  },
  {
    id: "biochemistry",
    title: "Principles of Biochemistry",
    author: "Dr. Robert Lehmann",
    published: 2022,
    type: "Buku Fisik",
    category: "Biology",
    location: "Perpustakaan FST, Lantai 5, Rak A12",
    status: "Tersedia Fisik",
    coverColor: "from-rose-950 to-slate-950",
    coverGlow: "shadow-rose-500/20",
    summary: "An introduction to chemistry of life, covering protein structure, enzyme kinetics, metabolic pathways, and molecular genetics. Heavily illustrated and containing review questions for students.",
    isPremium: false
  },
  {
    id: "algorithms",
    title: "Advanced Algorithms & Data Structures",
    author: "Prof. Dr. Ahmad Sutrisno",
    published: 2023,
    type: "Buku Fisik",
    category: "Computer Science",
    location: "Perpustakaan FST, Lantai 4, Rak A2",
    status: "Tersedia Fisik",
    coverColor: "from-cyan-900 to-slate-950",
    coverGlow: "shadow-cyan-500/20",
    summary: "Dive deep into complex algorithm designs, dynamic programming, network flows, and NP-hard approximations. Features pseudocode and implementations in Java/C++.",
    isPremium: true
  },
  {
    id: "organic-chemistry",
    title: "Principles of Organic Chemistry",
    author: "Dr. Maria Elena",
    published: 2023,
    type: "E-Book",
    category: "Chemistry",
    location: "Akses Digital (E-Book)",
    status: "Tersedia Digital",
    coverColor: "from-amber-950 to-slate-950",
    coverGlow: "shadow-amber-500/20",
    summary: "Comprehensive guide to organic compounds, reaction mechanisms, synthesis pathways, and spectroscopy analysis. Perfect for undergraduate chemistry courses.",
    isPremium: false
  },
  {
    id: "machine-learning",
    title: "Machine Learning in Practice",
    author: "Kevin Thompson, PhD",
    published: 2023,
    type: "E-Book",
    category: "Computer Science",
    location: "Akses Digital (E-Book)",
    status: "Tersedia Digital",
    coverColor: "from-violet-900 to-slate-950",
    coverGlow: "shadow-violet-500/20",
    summary: "Hands-on tutorials for implementing machine learning algorithms using Python, Scikit-Learn, PyTorch, and TensorFlow. Includes regression, deep learning, and reinforcement learning code.",
    isPremium: true
  },
  {
    id: "modern-databases",
    title: "Modern Database Systems",
    author: "Dr. Catherine Stone",
    published: 2020,
    type: "E-Book",
    category: "Computer Science",
    location: "Akses Digital (E-Book)",
    status: "Tersedia Digital",
    coverColor: "from-teal-900 to-slate-950",
    coverGlow: "shadow-teal-500/20",
    summary: "A modern introduction to relational, NoSQL, and vector database systems, detailing indexing, query optimization, and transaction handling.",
    isPremium: false
  },
  {
    id: "robotics",
    title: "Introduction to Robotics",
    author: "Dr. Marcus Vance",
    published: 2019,
    type: "Buku Fisik",
    category: "Engineering",
    location: "Perpustakaan FST, Lantai 6, Rak D4",
    status: "Tersedia Fisik",
    coverColor: "from-yellow-950 to-slate-950",
    coverGlow: "shadow-yellow-500/20",
    summary: "Foundational robotics covering kinematics, dynamics, control systems, and robot programming paradigms.",
    isPremium: false
  },
  {
    id: "calculus-2",
    title: "Calculus Vol. 2",
    author: "Prof. John Doe",
    published: 2020,
    type: "Buku Fisik",
    category: "Mathematics",
    location: "Perpustakaan FST, Lantai 3, Rak A2",
    status: "Tersedia Fisik",
    coverColor: "from-stone-900 to-slate-950",
    coverGlow: "shadow-stone-500/20",
    summary: "Multivariable calculus, vector calculus, differential equations, and series approximations.",
    isPremium: false
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    author: "Alan Turing Institute",
    published: 2021,
    type: "E-Book",
    category: "Computer Science",
    location: "Akses Digital (E-Book)",
    status: "Tersedia Digital",
    coverColor: "from-sky-900 to-slate-950",
    coverGlow: "shadow-sky-500/20",
    summary: "Explains virtualization, containerization (Docker, K8s), cloud service providers, and distributed systems architecture.",
    isPremium: false
  }
];

/* ==========================================
   APP STATE & LOCAL STORAGE SYNC
   ========================================== */
const DEFAULT_STATE = {
  activeView: "login",
  currentUser: {
    name: "Keino Aflah",
    nim: "12409011030080",
    email: "keino@uinjkt.ac.id"
  },
  borrowedBooks: [
    {
      id: "algorithms",
      borrowedDate: "12 Okt 2023",
      returnDate: "26 Okt 2023",
      status: "TERLAMBAT"
    },
    {
      id: "organic-chemistry",
      borrowedDate: "15 Okt 2023",
      returnDate: "29 Okt 2023",
      status: "SEDANG DIPINJAM"
    },
    {
      id: "machine-learning",
      borrowedDate: "18 Okt 2023",
      returnDate: "01 Nov 2023",
      status: "SEDANG DIPINJAM"
    }
  ],
  history: [
    {
      id: "modern-databases",
      borrowedDate: "01 Sep 2023",
      returnDate: "15 Sep 2023",
      status: "Selesai"
    },
    {
      id: "robotics",
      borrowedDate: "20 Agt 2023",
      returnDate: "03 Sep 2023",
      status: "Selesai"
    },
    {
      id: "calculus-2",
      borrowedDate: "05 Jul 2023",
      returnDate: "25 Jul 2023",
      status: "Terlambat"
    },
    {
      id: "cloud-infrastructure",
      borrowedDate: "10 Jun 2023",
      returnDate: "24 Jun 2023",
      status: "Sedang Dipinjam"
    }
  ],
  bookmarks: ["quantum-mechanics"],
  filters: {
    search: "",
    types: [],
    author: "",
    yearFrom: "",
    yearTo: ""
  },
  selectedBookId: "quantum-mechanics"
};

// Initialize App State
let appState = JSON.parse(localStorage.getItem("perpusfst_state")) || { ...DEFAULT_STATE };

function saveState() {
  localStorage.setItem("perpusfst_state", JSON.stringify(appState));
}

/* ==========================================
   DATE HELPERS (INDONESIAN FORMAT)
   ========================================== */
const MONTHS_INDO = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agt", "Sep", "Okt", "Nov", "Des"
];

function formatIndoDate(date) {
  const d = date.getDate();
  const m = MONTHS_INDO[date.getMonth()];
  const y = date.getFullYear();
  return `${d < 10 ? '0' + d : d} ${m} ${y}`;
}

function parseIndoDate(dateStr) {
  const parts = dateStr.split(" ");
  if (parts.length !== 3) return new Date();
  
  const day = parseInt(parts[0]);
  const monthIndex = MONTHS_INDO.indexOf(parts[1]);
  const year = parseInt(parts[2]);
  
  return new Date(year, monthIndex !== -1 ? monthIndex : 0, day);
}

/* ==========================================
   VIEW ROUTER & SPA CONTROLLER
   ========================================== */
function switchView(viewId) {
  appState.activeView = viewId;
  saveState();
  
  // Hide all views, show active one with fade-in effect
  document.querySelectorAll(".app-view").forEach(view => {
    view.classList.remove("active");
  });
  
  const activeViewEl = document.getElementById(`${viewId}-view`);
  if (activeViewEl) {
    activeViewEl.classList.add("active");
  }
  
  // Render updates according to the active view
  if (viewId === "dashboard") {
    renderDashboard();
  } else if (viewId === "koleksi") {
    renderKoleksi();
  } else if (viewId === "detail") {
    renderDetail();
  } else if (viewId === "pinjaman") {
    renderPinjaman();
  }
  
  // Show/Hide Top Navbar based on login state
  const navbar = document.getElementById("top-navbar");
  if (viewId === "login") {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
    updateNavbarActiveLink(viewId);
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNavbarActiveLink(viewId) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("nav-link-active");
    if (link.dataset.view === viewId) {
      link.classList.add("nav-link-active");
    }
  });
}

/* ==========================================
   BOOK COVER SVG GENERATOR
   ========================================== */
function generateBookCoverHTML(book, extraClasses = "w-full h-full") {
  // Return a stylish dynamic SVG cover
  const initial = book.title ? book.title.charAt(0) : "B";
  const typeLabel = book.type === "Jurnal" ? "JOURNAL" : (book.type === "E-Book" ? "E-BOOK" : "PHYSICAL");
  const accentColor = book.type === "Jurnal" ? "#10b981" : (book.type === "E-Book" ? "#3b82f6" : "#f4bf00");
  
  return `
    <div class="relative w-full h-full bg-gradient-to-br ${book.coverColor || 'from-slate-800 to-slate-950'} rounded-r-lg overflow-hidden flex flex-col justify-between p-4 text-white shadow-lg select-none border-l-[6px] border-black/30">
      <!-- Top Accent Grid -->
      <div class="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      
      <!-- Logo/Label -->
      <div class="relative z-10 flex items-center justify-between">
        <span class="text-[9px] tracking-widest font-extrabold" style="color: ${accentColor}">${typeLabel}</span>
        ${book.isPremium ? '<span class="text-[9px] tracking-wide font-extrabold text-amber-400 bg-amber-400/20 px-1.5 py-0.5 rounded">PREMIUM</span>' : ''}
      </div>
      
      <!-- Title & Author -->
      <div class="relative z-10 my-auto py-2">
        <div class="text-[8px] uppercase tracking-wider text-white/50 font-bold mb-1">${book.category || 'Science & Tech'}</div>
        <h4 class="font-serif text-[15px] font-bold leading-tight line-clamp-3 text-white tracking-wide" title="${book.title}">${book.title}</h4>
        <p class="text-[10px] text-white/70 mt-2 font-sans line-clamp-1 italic">${book.author}</p>
      </div>
      
      <!-- Footer details -->
      <div class="relative z-10 flex items-end justify-between border-t border-white/10 pt-2">
        <span class="text-[8px] text-white/40 font-mono">${book.published}</span>
        <span class="material-symbols-outlined text-[14px]" style="color: ${accentColor}">${book.type === 'Jurnal' ? 'science' : (book.type === 'E-Book' ? 'menu_book' : 'import_contacts')}</span>
      </div>
    </div>
  `;
}

/* ==========================================
   RENDERER: DASHBOARD VIEW
   ========================================== */
function renderDashboard() {
  const container = document.getElementById("dashboard-content");
  if (!container) return;
  
  // Calculate dynamic stats
  const dibacaCount = 24; // Static mockup value
  const diunduhCount = 12; // Static mockup value
  const activeLoans = appState.borrowedBooks.length;
  const dipinjamStr = String(activeLoans).padStart(2, "0");
  
  // Generate active loans list items (Image 2)
  let activeLoansHTML = "";
  if (appState.borrowedBooks.length === 0) {
    activeLoansHTML = `
      <div class="py-8 text-center text-slate-400 border border-slate-200 border-dashed rounded-xl">
        <span class="material-symbols-outlined text-4xl mb-2 text-slate-300">bookmark_border</span>
        <p class="text-sm">Tidak ada peminjaman aktif saat ini.</p>
      </div>
    `;
  } else {
    // Show top 2 active loans as in Image 2
    appState.borrowedBooks.slice(0, 2).forEach(loan => {
      const book = BOOKS_DATABASE.find(b => b.id === loan.id);
      if (!book) return;
      activeLoansHTML += `
        <div class="flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-xl hover:shadow-sm cursor-pointer transition-all" onclick="viewBookDetails('${book.id}')">
          <div class="w-10 h-14 flex-shrink-0 book-cover-container">
            ${generateBookCoverHTML(book)}
          </div>
          <div class="flex-1 min-w-0">
            <h5 class="text-sm font-bold text-slate-800 truncate">${book.title}</h5>
            <p class="text-xs text-slate-500 mt-0.5">Tenggat: ${loan.returnDate}</p>
          </div>
          <span class="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
        </div>
      `;
    });
  }
  
  // Recommended articles (Image 2 bottom)
  const recommendedItems = [
    {
      title: "Algorithm Optimization",
      desc: "12 new journals on computational efficiency.",
      icon: "settings_suggest",
      link: "cpp-structures"
    },
    {
      title: "Molecular Dynamics",
      desc: "Interactive 3D datasets for bio-chem.",
      icon: "biotech",
      link: "biochemistry"
    }
  ];
  
  let recommendationsHTML = "";
  recommendedItems.forEach(item => {
    recommendationsHTML += `
      <div class="p-5 bg-purple-50/50 hover:bg-purple-50 border border-purple-100/50 rounded-xl transition-all flex flex-col justify-between">
        <div>
          <span class="material-symbols-outlined text-purple-700 mb-3">${item.icon}</span>
          <h4 class="font-bold text-slate-800 text-sm mb-1">${item.title}</h4>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">${item.desc}</p>
        </div>
        <a class="text-purple-700 text-xs font-bold flex items-center gap-1 hover:underline cursor-pointer" onclick="viewBookDetails('${item.link}')">
          LIHAT <span class="material-symbols-outlined text-xs">arrow_forward</span>
        </a>
      </div>
    `;
  });

  container.innerHTML = `
    <!-- Top Stats Badges -->
    <div class="glass-panel border border-slate-200/80 rounded-2xl p-6 mb-8">
      <div class="flex justify-around items-center gap-4 py-2">
        <div class="flex flex-col items-center">
          <div class="stat-circle mb-2">${dibacaCount}</div>
          <span class="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">DIBACA</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="stat-circle mb-2">${diunduhCount}</div>
          <span class="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">DIUNDUH</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" onclick="switchView('pinjaman')">
          <div class="stat-circle mb-2 text-amber-400 border border-amber-400/20">${dipinjamStr}</div>
          <span class="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">DIPINJAM</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column: Lanjut Baca -->
      <div class="lg:col-span-2">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xs font-extrabold tracking-wider text-slate-400 uppercase">LANJUT BACA</h3>
          <a class="text-xs font-bold text-amber-500 hover:text-amber-600 flex items-center cursor-pointer" onclick="switchView('pinjaman')">
            Riwayat
          </a>
        </div>
        
        <!-- Big reading card (Image 2 center) -->
        <div class="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-all">
          <div class="w-full md:w-44 h-64 flex-shrink-0 book-cover-container">
            ${generateBookCoverHTML(BOOKS_DATABASE[0], "w-full h-full book-cover-3d")}
          </div>
          <div class="flex-1 flex flex-col justify-between py-1">
            <div>
              <span class="text-[11px] font-bold text-slate-400">${BOOKS_DATABASE[0].author}</span>
              <h4 class="font-serif text-xl font-bold text-slate-800 mt-1 leading-snug cursor-pointer hover:text-amber-500" onclick="viewBookDetails('${BOOKS_DATABASE[0].id}')">${BOOKS_DATABASE[0].title}</h4>
              <p class="text-xs text-slate-500 mt-3 line-clamp-3 leading-relaxed">${BOOKS_DATABASE[0].summary}</p>
            </div>
            
            <div class="mt-6 md:mt-0">
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-bold text-slate-600">65% Selesai</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-6">
                <div class="bg-amber-500 h-full rounded-full" style="width: 65%"></div>
              </div>
              <button class="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-900 px-8 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-amber-500/10" onclick="showToast('Membuka PDF E-Book...', 'info')">
                BACA
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Pinjaman Aktif -->
      <div>
        <h3 class="text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-4">PINJAMAN AKTIF</h3>
        <div class="flex flex-col gap-4">
          ${activeLoansHTML}
          
          <!-- Dashed Add Button -->
          <button class="btn-dashed w-full py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98" onclick="switchView('koleksi')">
            <span class="material-symbols-outlined text-lg">add_circle</span>
            <span class="text-xs font-bold uppercase tracking-wider">TAMBAH PINJAMAN</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Recommendations Section (Image 2 Bottom) -->
    <div class="mt-12">
      <h3 class="text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-4">DISARANKAN UNTUKMU</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${recommendationsHTML}
      </div>
    </div>
  `;
}

/* ==========================================
   RENDERER: KOLEKSI VIEW
   ========================================= */
function renderKoleksi() {
  const gridContainer = document.getElementById("koleksi-grid");
  if (!gridContainer) return;
  
  // Apply filtering
  const filtered = BOOKS_DATABASE.filter(book => {
    // Search match (title, author)
    const q = appState.filters.search.toLowerCase();
    const matchesSearch = !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q);
    
    // Type match
    const matchesType = appState.filters.types.length === 0 || appState.filters.types.includes(book.type);
    
    // Author match
    const authorQuery = appState.filters.author.toLowerCase();
    const matchesAuthor = !authorQuery || book.author.toLowerCase().includes(authorQuery);
    
    // Year match
    const yearFrom = parseInt(appState.filters.yearFrom) || 0;
    const yearTo = parseInt(appState.filters.yearTo) || 3000;
    const matchesYear = book.published >= yearFrom && book.published <= yearTo;
    
    return matchesSearch && matchesType && matchesAuthor && matchesYear;
  });
  
  // Display result count
  const resultsCountText = document.getElementById("results-count");
  if (resultsCountText) {
    resultsCountText.innerText = `Showing 1-${filtered.length} of ${filtered.length} results`;
  }
  
  // Render cards
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <span class="material-symbols-outlined text-5xl mb-3 text-slate-300">search_off</span>
        <p class="text-base font-bold">Koleksi tidak ditemukan</p>
        <p class="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau filter Anda.</p>
      </div>
    `;
    return;
  }
  
  let gridHTML = "";
  filtered.forEach(book => {
    const isBookmarked = appState.bookmarks.includes(book.id);
    const bookmarkIcon = isBookmarked ? "bookmark" : "bookmark_border";
    const bookmarkClass = isBookmarked ? "text-amber-500 fill-amber-500" : "text-slate-400 hover:text-amber-500";
    
    gridHTML += `
      <div class="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
        <div class="p-4 flex flex-col flex-1">
          <!-- Cover container -->
          <div class="relative w-full h-56 flex-shrink-0 book-cover-container cursor-pointer mb-4" onclick="viewBookDetails('${book.id}')">
            ${generateBookCoverHTML(book)}
          </div>
          
          <!-- Book Info -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start gap-2">
                <h5 class="text-sm font-bold text-slate-800 leading-snug line-clamp-2 cursor-pointer hover:text-amber-500" onclick="viewBookDetails('${book.id}')">${book.title}</h5>
                <button class="material-symbols-outlined ${bookmarkClass} transition-colors p-1" onclick="toggleBookmark(event, '${book.id}')">
                  ${bookmarkIcon}
                </button>
              </div>
              <p class="text-[11px] text-slate-500 mt-1 font-sans">${book.author}</p>
            </div>
            
            <div class="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span class="inline-block bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[10px] font-bold">${book.type}</span>
              ${book.type === 'Jurnal' ? `
                <a class="text-blue-600 hover:underline flex items-center gap-1 font-bold cursor-pointer" onclick="showToast('Mengunduh Jurnal PDF...', 'success')">
                  Open Access <span class="material-symbols-outlined text-[14px]">download</span>
                </a>
              ` : `
                <span class="text-slate-400 text-[10px]">${book.published}</span>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  gridContainer.innerHTML = gridHTML;
}

function toggleBookmark(event, bookId) {
  event.stopPropagation();
  const idx = appState.bookmarks.indexOf(bookId);
  if (idx === -1) {
    appState.bookmarks.push(bookId);
    showToast("Disimpan ke Bookmark!", "success");
  } else {
    appState.bookmarks.splice(idx, 1);
    showToast("Dihapus dari Bookmark", "info");
  }
  saveState();
  renderKoleksi();
}

function viewBookDetails(bookId) {
  appState.selectedBookId = bookId;
  saveState();
  switchView("detail");
}

/* ==========================================
   RENDERER: DETAIL BUKU & PEMINJAMAN FORM
   ========================================= */
function renderDetail() {
  const book = BOOKS_DATABASE.find(b => b.id === appState.selectedBookId);
  const container = document.getElementById("detail-content");
  if (!book || !container) return;
  
  // Calculate dynamic default return date
  const defaultDuration = 14;
  const initialReturn = new Date();
  initialReturn.setDate(initialReturn.getDate() + defaultDuration);
  const returnStr = formatIndoDate(initialReturn);
  
  // Custom badges/styles based on book physical/digital status
  const isPhysical = book.type === "Buku Fisik";
  const typeBadge = isPhysical ? 
    `<span class="badge-status bg-orange-100 text-orange-800 border border-orange-200">PHYSICAL</span>` :
    `<span class="badge-status bg-blue-100 text-blue-800 border border-blue-200">${book.type.toUpperCase()}</span>`;
    
  const availabilityBadge = isPhysical ? 
    `<span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Tersedia Fisik
    </span>` :
    `<span class="inline-flex items-center gap-1 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Tersedia Digital
    </span>`;

  container.innerHTML = `
    <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-xs text-slate-500 mb-6">
      <a class="hover:text-slate-800 cursor-pointer" onclick="switchView('koleksi')">Koleksi</a>
      <span class="material-symbols-outlined text-[14px]">chevron_right</span>
      <span>${book.category}</span>
      <span class="material-symbols-outlined text-[14px]">chevron_right</span>
      <span class="text-slate-800 font-bold truncate max-w-[200px]">${book.title}</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column: Cover & Location -->
      <div>
        <div class="w-full h-96 book-cover-container flex justify-center mb-6">
          <div class="w-64 h-full book-cover-3d">
            ${generateBookCoverHTML(book)}
          </div>
        </div>
        
        <!-- Location details -->
        <div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <h4 class="text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-3">LOKASI</h4>
          <div class="flex gap-3 items-start">
            <span class="material-symbols-outlined text-amber-500 mt-0.5">location_on</span>
            <div>
              <p class="text-sm font-bold text-slate-800">${book.location}</p>
              <p class="text-xs text-slate-500 mt-1">Gedung Fakultas Sains dan Teknologi, Kampus 2 UIN Jakarta.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Details & Forms -->
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-2 flex-wrap">
          ${typeBadge}
          ${book.isPremium ? '<span class="badge-status bg-amber-100 text-amber-800 border border-amber-200">PREMIUM</span>' : ''}
        </div>
        
        <h1 class="font-serif text-2xl lg:text-3xl font-bold text-slate-800 leading-snug">${book.title}</h1>
        
        <div class="flex items-center gap-4 mt-3 text-sm text-slate-500">
          <span>Oleh: <strong class="text-slate-800 font-bold">${book.author}</strong></span>
          <span>•</span>
          <span>Tahun: <strong class="text-slate-800 font-bold">${book.published}</strong></span>
          <span>•</span>
          ${availabilityBadge}
        </div>
        
        <!-- Summary Section -->
        <div class="mt-8 border-t border-slate-100 pt-6">
          <h3 class="text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-2">RINGKASAN</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-sans">${book.summary}</p>
        </div>

        <!-- Digital Access Card -->
        <div class="mt-8 bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h4 class="text-sm font-bold text-slate-800">Akses Digital</h4>
            <p class="text-xs text-slate-500 mt-1">Baca atau unduh versi elektronik buku ini.</p>
          </div>
          <div class="flex gap-2">
            <button class="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-900 font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all" onclick="showToast('Membuka Viewer PDF...', 'info')">
              Baca
            </button>
            <button class="border border-slate-200 hover:bg-slate-50 active:scale-95 text-slate-700 font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg bg-white flex items-center gap-1 transition-all" onclick="showToast('Memulai Unduhan PDF...', 'success')">
              <span class="material-symbols-outlined text-sm">download</span> Download
            </button>
          </div>
        </div>

        <!-- Borrow Physical Form (Only if book is Buku Fisik or as a simulation) -->
        <div class="mt-8 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 class="text-base font-bold text-slate-800 mb-4 border-b border-slate-50 pb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-500">assignment_turned_in</span> Form Peminjaman Fisik
          </h3>
          <p class="text-xs text-slate-500 mb-6">Selesaikan data peminjaman di bawah ini:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Nama input -->
            <div>
              <label class="block text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-2">NAMA PEMINJAM</label>
              <div class="form-input-icon">
                <span class="material-symbols-outlined">person</span>
                <input type="text" class="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-600 focus:outline-none" value="${appState.currentUser.name}" readonly disabled />
              </div>
            </div>
            
            <!-- NIM input -->
            <div>
              <label class="block text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-2">NIM / NIDN</label>
              <div class="form-input-icon">
                <span class="material-symbols-outlined">badge</span>
                <input type="text" class="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-600 focus:outline-none" value="${appState.currentUser.nim}" readonly disabled />
              </div>
            </div>
            
            <!-- Durasi dropdown -->
            <div>
              <label class="block text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-2">DURASI PINJAM</label>
              <div class="relative">
                <select id="borrow-duration" class="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3 pr-10 text-sm text-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none appearance-none cursor-pointer" onchange="updateBorrowDate(this.value)">
                  <option value="3">3 Hari</option>
                  <option value="7">7 Hari</option>
                  <option value="14" selected>14 Hari</option>
                  <option value="30">30 Hari</option>
                </select>
                <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
            
            <!-- Tenggat disabled -->
            <div>
              <label class="block text-xs font-extrabold tracking-wider text-slate-400 uppercase mb-2">TENGGAT</label>
              <div class="form-input-icon">
                <span class="material-symbols-outlined">calendar_today</span>
                <input id="borrow-tenggat" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-slate-600 font-bold focus:outline-none" value="${returnStr}" readonly disabled />
              </div>
            </div>
          </div>
          
          <div class="flex gap-3 justify-end mt-8 pt-4 border-t border-slate-50">
            <button class="border border-slate-200 hover:bg-slate-50 active:scale-95 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-slate-600 transition-all cursor-pointer" onclick="switchView('koleksi')">
              Batal
            </button>
            <button class="bg-amber-500 hover:bg-amber-600 active:scale-95 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-slate-900 shadow-md shadow-amber-500/10 transition-all cursor-pointer flex items-center gap-1" onclick="confirmBorrow('${book.id}')">
              <span class="material-symbols-outlined text-sm">library_add</span> Konfirmasi Peminjaman
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateBorrowDate(days) {
  const returnDateInput = document.getElementById("borrow-tenggat");
  if (!returnDateInput) return;
  
  const d = parseInt(days) || 14;
  const fut = new Date();
  fut.setDate(fut.getDate() + d);
  
  returnDateInput.value = formatIndoDate(fut);
}

function confirmBorrow(bookId) {
  const durationSelect = document.getElementById("borrow-duration");
  const durationDays = durationSelect ? parseInt(durationSelect.value) : 14;
  
  // Calculate Dates
  const today = new Date();
  const returnDate = new Date();
  returnDate.setDate(today.getDate() + durationDays);
  
  // Add to borrowed list
  const alreadyBorrowed = appState.borrowedBooks.find(b => b.id === bookId);
  if (alreadyBorrowed) {
    showToast("Anda sedang meminjam buku ini!", "warning");
    switchView("pinjaman");
    return;
  }
  
  appState.borrowedBooks.unshift({
    id: bookId,
    borrowedDate: formatIndoDate(today),
    returnDate: formatIndoDate(returnDate),
    status: "SEDANG DIPINJAM"
  });
  
  saveState();
  showToast("Peminjaman berhasil dikonfirmasi!", "success");
  switchView("pinjaman");
}

/* ==========================================
   RENDERER: PINJAMAN MY VIEW
   ========================================= */
function renderPinjaman() {
  const activeGrid = document.getElementById("active-loans-grid");
  const historyTableBody = document.getElementById("history-table-body");
  if (!activeGrid || !historyTableBody) return;
  
  // 1. Render Active Loans (Cards)
  let activeHTML = "";
  
  // Update section title badge
  const activeCountBadge = document.getElementById("active-loans-count");
  if (activeCountBadge) {
    activeCountBadge.innerText = `${appState.borrowedBooks.length} Buku Aktif`;
  }
  
  if (appState.borrowedBooks.length === 0) {
    activeHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 bg-white border border-slate-100 rounded-2xl">
        <span class="material-symbols-outlined text-5xl mb-2 text-slate-300">menu_book</span>
        <p class="text-base font-bold">Tidak ada buku aktif yang dipinjam</p>
        <p class="text-xs text-slate-500 mt-1">Gunakan tab Koleksi untuk meminjam buku.</p>
      </div>
    `;
  } else {
    appState.borrowedBooks.forEach((loan, index) => {
      const book = BOOKS_DATABASE.find(b => b.id === loan.id);
      if (!book) return;
      
      const badgeClass = loan.status === "TERLAMBAT" ? "badge-terlambat" : "badge-sedang-dipinjam";
      
      activeHTML += `
        <div class="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row gap-4 p-4 hover:shadow-md transition-all">
          <div class="w-full md:w-28 h-40 flex-shrink-0 book-cover-container cursor-pointer" onclick="viewBookDetails('${book.id}')">
            ${generateBookCoverHTML(book)}
          </div>
          <div class="flex-1 flex flex-col justify-between py-1 min-w-0">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="badge-status ${badgeClass}">${loan.status}</span>
              </div>
              <h4 class="text-sm font-bold text-slate-800 truncate cursor-pointer hover:text-amber-500" onclick="viewBookDetails('${book.id}')">${book.title}</h4>
              <p class="text-xs text-slate-500 mt-1">Oleh: ${book.author}</p>
              
              <div class="grid grid-cols-2 gap-2 mt-4 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg">
                <div>
                  <span class="text-slate-400">Dipinjam:</span>
                  <p class="font-bold truncate">${loan.borrowedDate}</p>
                </div>
                <div>
                  <span class="text-slate-400">Kembali:</span>
                  <p class="font-bold truncate ${loan.status === 'TERLAMBAT' ? 'text-red-600 font-extrabold' : ''}">${loan.returnDate}</p>
                </div>
              </div>
            </div>
            
            <div class="flex gap-2 mt-4 md:mt-0">
              <button class="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-900 font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-lg transition-all flex items-center gap-1 cursor-pointer" onclick="renewLoan('${loan.id}', ${index})">
                <span class="material-symbols-outlined text-xs">autorenew</span> Perpanjang
              </button>
              <button class="border border-slate-200 hover:bg-slate-50 active:scale-95 text-slate-600 font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-lg bg-white transition-all cursor-pointer" onclick="showToast('Membuka PDF Digital Reader...', 'info')">
                Baca Digital
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  activeGrid.innerHTML = activeHTML;
  
  // 2. Render History (Table)
  renderHistoryTable();
}

function renderHistoryTable() {
  const historyTableBody = document.getElementById("history-table-body");
  if (!historyTableBody) return;
  
  let historyHTML = "";
  appState.history.forEach(item => {
    const book = BOOKS_DATABASE.find(b => b.id === item.id);
    if (!book) return;
    
    let statusClass = "";
    if (item.status === "Selesai") statusClass = "badge-selesai";
    else if (item.status === "Terlambat") statusClass = "badge-terlambat";
    else if (item.status === "Sedang Dipinjam") statusClass = "badge-sedang-dipinjam";
    
    historyHTML += `
      <tr class="hover:bg-slate-50/50 transition-colors border-b border-slate-100">
        <td class="px-6 py-4">
          <div class="min-w-0">
            <p class="text-sm font-bold text-slate-800 line-clamp-1 cursor-pointer hover:text-amber-500" onclick="viewBookDetails('${book.id}')">${book.title}</p>
            <p class="text-[10px] text-slate-400 mt-0.5">ISBN: 978-602-${book.id.length * 2314}</p>
          </div>
        </td>
        <td class="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">${item.borrowedDate}</td>
        <td class="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">${item.returnDate}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="badge-status ${statusClass}">${item.status}</span>
        </td>
      </tr>
    `;
  });
  
  historyTableBody.innerHTML = historyHTML;
}

function renewLoan(bookId, index) {
  const loan = appState.borrowedBooks[index];
  if (!loan) return;
  
  // Calculate new return date: parse existing date and add 7 days
  const currentReturnDate = parseIndoDate(loan.returnDate);
  currentReturnDate.setDate(currentReturnDate.getDate() + 7);
  
  loan.returnDate = formatIndoDate(currentReturnDate);
  loan.status = "SEDANG DIPINJAM"; // If it was late, renewing updates it to active
  
  saveState();
  showToast(`Peminjaman buku berhasil diperpanjang 7 hari!`, "success");
  renderPinjaman();
  renderDashboard();
}

/* ==========================================
   TOAST NOTIFICATION SYSTEM
   ========================================= */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  // Decide icon based on type
  let icon = "check_circle";
  if (type === "error") icon = "error";
  else if (type === "warning") icon = "warning";
  else if (type === "info") icon = "info";
  
  toast.innerHTML = `
    <span class="material-symbols-outlined text-${type === 'success' ? 'emerald' : (type === 'error' ? 'red' : (type === 'warning' ? 'amber' : 'blue'))}-500 text-lg">${icon}</span>
    <span class="text-xs font-semibold text-slate-700">${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.add("toast-closing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3500);
}

/* ==========================================
   INITIALIZATION & ACTION HANDLERS
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Setup SPA navigations in Navbar
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view) switchView(view);
    });
  });
  
  // Setup Profile view redirection
  const profileButton = document.getElementById("profile-nav-btn");
  if (profileButton) {
    profileButton.addEventListener("click", () => {
      switchView("pinjaman");
    });
  }

  // Setup Sign In form (Login Submit)
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const email = document.getElementById("login-email").value.trim();
      const pass = document.getElementById("login-password").value.trim();
      
      if (!email || !pass) {
        showToast("Silakan masukkan email dan password kampus Anda.", "error");
        return;
      }
      
      // Update name/email in state if Keino
      if (email.toLowerCase().includes("keino")) {
        appState.currentUser.name = "Keino Aflah";
        appState.currentUser.email = email;
      } else {
        // Strip email to make nice display name
        const namePart = email.split("@")[0];
        appState.currentUser.name = namePart.split(".").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
        appState.currentUser.email = email;
      }
      
      // Store state
      saveState();
      
      // Navigate to Dashboard
      showToast(`Selamat datang kembali, ${appState.currentUser.name}!`, "success");
      switchView("dashboard");
      
      // Update header details
      updateHeaderProfile();
    });
  }
  
  // Search Koleksi (Banner & Filters)
  const mainSearchBtn = document.getElementById("main-search-btn");
  const mainSearchInput = document.getElementById("main-search-input");
  
  if (mainSearchBtn && mainSearchInput) {
    mainSearchBtn.addEventListener("click", () => {
      appState.filters.search = mainSearchInput.value;
      saveState();
      switchView("koleksi");
    });
    
    mainSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        appState.filters.search = mainSearchInput.value;
        saveState();
        switchView("koleksi");
      }
    });
  }
  
  // Sidebar Collection Filters
  const applyFilterBtn = document.getElementById("apply-filter-btn");
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", () => {
      // Gather checkbox values
      const checkedTypes = [];
      document.querySelectorAll(".filter-type-checkbox:checked").forEach(cb => {
        checkedTypes.push(cb.value);
      });
      
      appState.filters.types = checkedTypes;
      appState.filters.author = document.getElementById("filter-author").value.trim();
      appState.filters.yearFrom = document.getElementById("filter-year-from").value.trim();
      appState.filters.yearTo = document.getElementById("filter-year-to").value.trim();
      
      saveState();
      renderKoleksi();
      showToast("Filter berhasil diterapkan!", "success");
    });
  }
  
  // Live title search inside collections page
  const collectionQuerySearch = document.getElementById("collection-search-input");
  if (collectionQuerySearch) {
    collectionQuerySearch.addEventListener("input", (e) => {
      appState.filters.search = e.target.value;
      saveState();
      renderKoleksi();
    });
  }
  
  // Initialize Header and Router
  updateHeaderProfile();
  switchView(appState.activeView);
});

function updateHeaderProfile() {
  const profileNameEl = document.getElementById("profile-name");
  if (profileNameEl) {
    profileNameEl.innerText = appState.currentUser.name || "Keino Aflah";
  }
  
  // Fill profile text in forms if any
  const formNameInput = document.getElementById("borrow-nama");
  if (formNameInput) {
    formNameInput.value = appState.currentUser.name;
  }
}
