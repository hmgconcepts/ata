/**
 * The Ata v2 - Unified Core Platform Engine
 * Multi-Page Enterprise Cold Chain, Quick-Pay FinTech, Escrow & PWA Engine
 */

// Global State Management
const STORAGE_KEY = 'ATA_V2_STATE';

const defaultState = {
  currentRole: 'buyer', // buyer, farmer, driver, inspector, admin
  user: {
    name: 'Amara Okafor',
    role: 'Agribusiness',
    initials: 'AO',
    rating: 4.7,
    ordersCount: 48,
    escrowSecured: '₦1.2M',
    location: 'Lagos, Nigeria',
    phone: '+234 801 234 5678',
    memberSince: 'August 2025',
    walletBalance: 245000
  },
  products: [
    {
      id: 'prod_001',
      title: 'Organic Roma Tomatoes',
      farmer: 'Ibrahim Musa',
      coopName: 'Kaduna Central Tomato Co-op',
      farmerLocation: 'Kaduna, Nigeria',
      farmerRating: 4.8,
      price: 12500,
      unit: '50kg basket',
      availableQty: 200,
      grade: 'Grade A',
      coldRequired: true,
      targetTemp: '10.0°C',
      tempRange: '10°C - 15°C',
      humidityRange: '85% - 95%',
      harvestDate: '28 May 2026',
      bestBefore: '7 Jun 2026',
      category: 'vegetables',
      certifications: ['Organic', 'GAP Certified'],
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=80',
      description: 'Freshly harvested Roma tomatoes from Kaduna farms. Grown without synthetic pesticides, these tomatoes are firm, richly red, and perfect for stews, sauces, and salads. Hand-graded for commercial procurement.'
    },
    {
      id: 'prod_002',
      title: 'Premium Yellow Garri',
      farmer: 'Grace Terna',
      coopName: 'Benue Cassava Processors',
      farmerLocation: 'Makurdi, Benue State',
      farmerRating: 4.5,
      price: 8500,
      unit: '50kg bag',
      availableQty: 500,
      grade: 'Grade A',
      coldRequired: false,
      targetTemp: 'No data',
      tempRange: 'Ambient (20°C - 28°C)',
      humidityRange: '50% - 65%',
      harvestDate: '22 May 2026',
      bestBefore: '22 Nov 2026',
      category: 'grains',
      certifications: ['Standard Certified'],
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80',
      description: 'Crisp, finely processed yellow cassava garri from Benue state. Properly fried with palm oil for rich aroma, long shelf life, and smooth texture.'
    },
    {
      id: 'prod_003',
      title: 'Sweet Orange (Valencia)',
      farmer: 'Funke Adeyemi',
      coopName: 'Gboko Citrus Growers',
      farmerLocation: 'Gboko, Benue State',
      farmerRating: 4.7,
      price: 9500,
      unit: '40kg crate',
      availableQty: 150,
      grade: 'Grade A',
      coldRequired: true,
      targetTemp: '8.0°C',
      tempRange: '7°C - 10°C',
      humidityRange: '85% - 90%',
      harvestDate: '25 May 2026',
      bestBefore: '15 Jun 2026',
      category: 'fruits',
      certifications: ['Organic', 'GAP Certified'],
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop&q=80',
      description: 'Juicy Valencia oranges handpicked at peak ripeness. High sugar-acid balance suitable for commercial juice processing and retail consumption.'
    },
    {
      id: 'prod_004',
      title: 'Fresh Habanero Peppers (Rodo)',
      farmer: 'Usman Bello',
      coopName: 'Kano Spice Producers',
      farmerLocation: 'Kano, Nigeria',
      farmerRating: 4.9,
      price: 14000,
      unit: '25kg bag',
      availableQty: 300,
      grade: 'Grade A',
      coldRequired: true,
      targetTemp: '12.0°C',
      tempRange: '10°C - 13°C',
      humidityRange: '80% - 90%',
      harvestDate: '29 May 2026',
      bestBefore: '10 Jun 2026',
      category: 'spices',
      certifications: ['GAP Certified'],
      image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500&auto=format&fit=crop&q=80',
      description: 'Aromatic red habanero peppers grown in Kano. Selected for firmness, punchy heat level, and high oil content.'
    },
    {
      id: 'prod_005',
      title: 'White Yam Tubers (Specie A)',
      farmer: 'Audu Bako',
      coopName: 'Nasarawa Yam Farmers Union',
      farmerLocation: 'Nasarawa, Nigeria',
      farmerRating: 4.6,
      price: 35000,
      unit: '100 tubers',
      availableQty: 120,
      grade: 'Grade A',
      coldRequired: false,
      targetTemp: '15.0°C',
      tempRange: '14°C - 18°C',
      humidityRange: '70% - 80%',
      harvestDate: '20 May 2026',
      bestBefore: '20 Aug 2026',
      category: 'tubers',
      certifications: ['Standard Certified'],
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=80',
      description: 'Large white unbruised yams harvested from Nasarawa fertile plains. Perfect for pounding and flour extraction.'
    }
  ],
  orders: [
    {
      id: 'RD_001',
      productName: 'Organic Roma Tomatoes',
      farmerName: 'Ibrahim Musa',
      quantityStr: '3 × 50kg basket',
      totalAmount: 37500,
      status: 'In Transit',
      escrowStatus: 'Escrow Held',
      dateStr: '29 May, 11:30',
      origin: 'Kaduna, Nigeria',
      destination: 'Lagos, Nigeria',
      currentTemp: '13.1°C',
      currentHumidity: '87%',
      coldChainIntact: true,
      estimatedDelivery: 'Sunday, 31 May at 15:00',
      timeline: [
        { title: 'Order Confirmed', location: 'Lagos, Nigeria', timestamp: '29 May, 11:35', completed: true },
        { title: 'Payment Held in Escrow', location: 'Lagos, Nigeria', timestamp: '29 May, 11:36', completed: true },
        { title: 'Farmer Preparing Shipment', location: 'Kaduna, Nigeria', timestamp: '29 May, 13:00', completed: true },
        { title: 'In Transit — Abuja Hub', location: 'Abuja, Nigeria', timestamp: '30 May, 09:15', telemetry: '🌡️ 12.4°C  💧 Humidity: 89%', completed: true },
        { title: 'In Transit — Ibadan Hub', location: 'Ibadan, Nigeria', timestamp: '30 May, 15:30', telemetry: '🌡️ 13.1°C  💧 Humidity: 87%', completed: true, active: true },
        { title: 'Out for Delivery (Lagos Hub)', location: 'Lagos, Nigeria', timestamp: '31 May, 12:00', completed: false }
      ]
    },
    {
      id: 'RD_002',
      productName: 'Sweet Orange (Valencia)',
      farmerName: 'Funke Adeyemi',
      quantityStr: '5 × 40kg crate',
      totalAmount: 47500,
      status: 'Delivered',
      escrowStatus: 'Released to Farmer',
      dateStr: '25 May, 10:00',
      origin: 'Benue, Nigeria',
      destination: 'Lagos, Nigeria',
      currentTemp: '8.2°C',
      currentHumidity: '88%',
      coldChainIntact: true,
      estimatedDelivery: 'Delivered on 26 May',
      timeline: [
        { title: 'Order Confirmed', location: 'Lagos, Nigeria', timestamp: '25 May, 10:00', completed: true },
        { title: 'Payment Held in Escrow', location: 'Lagos, Nigeria', timestamp: '25 May, 10:05', completed: true },
        { title: 'In Transit — Cold Hub', location: 'Oyo, Nigeria', timestamp: '25 May, 18:00', telemetry: '🌡️ 8.1°C  💧 Humidity: 88%', completed: true },
        { title: 'Delivered & Dispatched', location: 'Lagos, Nigeria', timestamp: '26 May, 09:30', completed: true },
        { title: 'Escrow Released to Farmer', location: 'Account Transfer', timestamp: '26 May, 10:00', completed: true }
      ]
    },
    {
      id: 'RD_003',
      productName: 'Premium Yellow Garri',
      farmerName: 'Grace Terna',
      quantityStr: '10 × 50kg bag',
      totalAmount: 85000,
      status: 'Confirmed',
      escrowStatus: 'Escrow Held',
      dateStr: '30 May, 12:00',
      origin: 'Makurdi, Nigeria',
      destination: 'Lagos, Nigeria',
      currentTemp: 'Ambient',
      currentHumidity: '58%',
      coldChainIntact: true,
      estimatedDelivery: 'Tuesday, 2 Jun',
      timeline: [
        { title: 'Order Confirmed', location: 'Lagos, Nigeria', timestamp: '30 May, 12:00', completed: true },
        { title: 'Payment Held in Escrow', location: 'Lagos, Nigeria', timestamp: '30 May, 12:02', completed: true },
        { title: 'Awaiting Pickup Dispatch', location: 'Makurdi, Nigeria', timestamp: '31 May, 08:00', completed: false }
      ]
    }
  ],
  telemetryData: [
    { time: '08:00', temp: 11.2 },
    { time: '10:00', temp: 12.1 },
    { time: '12:00', temp: 14.2 },
    { time: '14:00', temp: 14.5 },
    { time: '16:00', temp: 13.8 },
    { time: '18:00', temp: 13.2 },
    { time: '20:00', temp: 13.8 }
  ],
  coldHubs: [
    { id: 'hub_kaduna', name: 'Kaduna Central Solar Cold Hub', state: 'Kaduna', capacity: '1,200 crates', available: '380 crates', pricePerDay: 250, temp: '10°C' },
    { id: 'hub_ibadan', name: 'Ibadan Bodija Produce Cold Hub', state: 'Oyo', capacity: '2,000 crates', available: '620 crates', pricePerDay: 220, temp: '11°C' },
    { id: 'hub_abuja', name: 'Abuja Gwagwalada Cold Logistics Hub', state: 'FCT Abuja', capacity: '1,800 crates', available: '150 crates', pricePerDay: 300, temp: '8°C' },
    { id: 'hub_kano', name: 'Kano Dawanau Agro Storage Hub', state: 'Kano', capacity: '2,500 crates', available: '900 crates', pricePerDay: 200, temp: '12°C' }
  ],
  priceIndex: [
    { produce: 'Roma Tomatoes (50kg)', market: 'Mile 12, Lagos', priceNow: 12500, priceWeekAgo: 14200, trend: 'down', change: '-12%' },
    { produce: 'Valencia Oranges (40kg)', market: 'Bodija, Ibadan', priceNow: 9500, priceWeekAgo: 8900, trend: 'up', change: '+6.7%' },
    { produce: 'Habanero Pepper (25kg)', market: 'Dawanau, Kano', priceNow: 14000, priceWeekAgo: 14000, trend: 'stable', change: '0%' },
    { produce: 'Yellow Garri (50kg)', market: 'Makurdi Main, Benue', priceNow: 8500, priceWeekAgo: 9100, trend: 'down', change: '-6.5%' },
    { produce: 'White Yam (100 Tubers)', market: 'Zaki Biam, Benue', priceNow: 35000, priceWeekAgo: 32000, trend: 'up', change: '+9.3%' }
  ],
  deferredPrompt: null
};

// State Manager
function getState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn('Failed to load local state:', e);
  }
  return defaultState;
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save local state:', e);
  }
}

const appState = getState();

// Initialize Multi-Page Engine
document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNavigation();
  setupRoleSwitcher();
  setupPWA();

  // Route Dispatcher
  const path = window.location.pathname.split('/').pop() || 'index.html';

  if (path === 'index.html' || path === '') {
    initHomePage();
  } else if (path === 'marketplace.html') {
    initMarketplacePage();
  } else if (path === 'product-detail.html') {
    initProductDetailPage();
  } else if (path === 'cold-chain.html') {
    initColdChainPage();
  } else if (path === 'cold-storage.html') {
    initColdStoragePage();
  } else if (path === 'orders.html') {
    initOrdersPage();
  } else if (path === 'tracking.html') {
    initTrackingPage();
  } else if (path === 'fintech.html') {
    initFintechPage();
  } else if (path === 'price-index.html') {
    initPriceIndexPage();
  } else if (path === 'cooperative.html') {
    initCooperativePage();
  } else if (path === 'sustainability.html') {
    initSustainabilityPage();
  } else if (path === 'profile.html') {
    initProfilePage();
  } else if (path === 'enterprise.html') {
    initEnterprisePage();
  } else if (path === 'docs.html') {
    initDocsPage();
  }
});

// Highlight current page link
function highlightActiveNavigation() {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('.bottom-nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Role Switcher Engine
function setupRoleSwitcher() {
  const badge = document.getElementById('role-switcher-badge');
  if (!badge) return;

  const roles = [
    { id: 'buyer', name: 'Agribusiness (Buyer)' },
    { id: 'farmer', name: 'Farmer (Ibrahim Musa)' },
    { id: 'driver', name: 'Cold Transport Driver' },
    { id: 'inspector', name: 'Hub Quality Inspector' },
    { id: 'admin', name: 'Platform Admin' }
  ];

  const currentRoleObj = roles.find(r => r.id === appState.currentRole) || roles[0];
  badge.innerHTML = `👤 Role: ${currentRoleObj.name} ▼`;

  badge.addEventListener('click', () => {
    const nextIdx = (roles.findIndex(r => r.id === appState.currentRole) + 1) % roles.length;
    appState.currentRole = roles[nextIdx].id;
    saveState(appState);
    badge.innerHTML = `👤 Role: ${roles[nextIdx].name} ▼`;
    showToast(`Switched perspective to: ${roles[nextIdx].name}`);
  });
}

// PWA Event Handler
function setupPWA() {
  const installBtn = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    appState.deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'inline-flex';
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (appState.deferredPrompt) {
        appState.deferredPrompt.prompt();
        const { outcome } = await appState.deferredPrompt.userChoice;
        console.log(`PWA user response: ${outcome}`);
        appState.deferredPrompt = null;
        installBtn.style.display = 'none';
      } else {
        alert('To install Ata v2 on your phone/system:\n\n• Mobile: Tap menu (⋮ or Share) and choose "Add to Home Screen".\n• Desktop: Click the install icon in your address bar.');
      }
    });
  }

  // Network Offline Banner
  const updateStatus = () => {
    const banner = document.getElementById('offline-banner');
    if (banner) {
      banner.classList.toggle('active', !navigator.onLine);
    }
  };
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(r => console.log('SW Registered:', r.scope))
      .catch(e => console.warn('SW Fail:', e));
  }
}

// Global Toast Notification Helper
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #166534;
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 200;
    white-space: nowrap;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Global Modal Helpers
function closeModal() {
  const modal = document.getElementById('modal-overlay');
  if (modal) modal.classList.remove('active');
}

// PAGE INITIALIZERS

// 1. Home Page
function initHomePage() {
  renderMarketplaceGrid('home-marketplace-grid', appState.products.slice(0, 3));
}

// 2. Marketplace Page
function initMarketplacePage() {
  renderMarketplaceGrid('marketplace-catalog-grid', appState.products);

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = appState.products.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.farmer.toLowerCase().includes(q) ||
        p.farmerLocation.toLowerCase().includes(q)
      );
      renderMarketplaceGrid('marketplace-catalog-grid', filtered);
    });
  }
}

function renderMarketplaceGrid(containerId, productList) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = productList.map(p => `
    <a href="product-detail.html?id=${p.id}" class="product-card">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="badge-overlay">
          <span class="badge-grade">${p.grade}</span>
          ${p.coldRequired ? `<span class="badge-cold">🌡️ ${p.targetTemp}</span>` : `<span class="badge-cold" style="background:#F3F4F6;color:#4B5563;">No data</span>`}
        </div>
      </div>
      <div class="product-body">
        <div class="product-title">${p.title}</div>
        <div class="farmer-sub">
          <span>${p.farmer} · ${p.farmerLocation}</span>
          <span style="color:#D97706; font-weight:700;">★ ${p.farmerRating}</span>
        </div>
        <div class="price-row">
          <div>
            <span class="price-val">₦${p.price.toLocaleString()}</span>
            <span style="font-size:11px; color:var(--color-text-sub);">/${p.unit}</span>
          </div>
          <span style="font-size:11px; color:var(--color-text-sub);">${p.availableQty} available</span>
        </div>
      </div>
    </a>
  `).join('');
}

// 3. Product Detail Page
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const prodId = params.get('id') || 'prod_001';
  const product = appState.products.find(p => p.id === prodId) || appState.products[0];

  const container = document.getElementById('product-detail-container');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <a href="marketplace.html" style="font-weight:700; color:var(--color-primary); text-decoration:none;">‹ Back to Marketplace</a>
      <span class="v2-badge">${product.coopName}</span>
    </div>

    <div class="card-box" style="padding:0; overflow:hidden;">
      <div style="height:220px; position:relative;">
        <img src="${product.image}" style="width:100%; height:100%; object-fit:cover;" />
        <div class="badge-overlay" style="padding:12px;">
          <span class="badge-grade">${product.grade}</span>
          ${product.coldRequired ? `<span class="tag-pill tag-cold">🌡️ ${product.targetTemp} Required</span>` : ''}
        </div>
      </div>

      <div style="padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <h1 style="font-size:22px; font-weight:900; color:var(--color-text-main);">${product.title}</h1>
            <div style="font-size:13px; color:var(--color-text-sub); margin-top:2px;">
              By <strong>${product.farmer}</strong> (${product.farmerLocation}) · ★ ${product.farmerRating}
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:24px; font-weight:900; color:var(--color-primary-dark);">₦${product.price.toLocaleString()}</div>
            <div style="font-size:11px; color:var(--color-text-sub);">per ${product.unit}</div>
          </div>
        </div>

        <div style="margin:16px 0;">
          <div class="form-label">QUALITY & CERTIFICATIONS</div>
          <div>${product.certifications.map(c => `<span class="tag-pill tag-mint">✓ ${c}</span>`).join('')}</div>
        </div>

        <div class="card-box" style="background:var(--color-bg); margin-bottom:14px;">
          <div class="form-label">DESCRIPTION</div>
          <p style="font-size:13px;">${product.description}</p>
        </div>

        ${product.coldRequired ? `
          <div class="card-box" style="background:var(--color-cold-bg); border-color:var(--color-cold-border);">
            <div class="form-label" style="color:var(--color-cold-text);">COLD CHAIN SPECIFICATIONS</div>
            <div style="font-size:18px; font-weight:800; color:var(--color-cold-text);">🌡️ ${product.targetTemp} (Range: ${product.tempRange})</div>
            <div style="font-size:12px; color:var(--color-cold-text); margin-top:2px;">Humidity Threshold: ${product.humidityRange}</div>
          </div>
        ` : ''}

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
          <div class="card-box" style="background:var(--color-bg); margin:0;">
            <div class="form-label">HARVEST DATE</div>
            <div style="font-weight:700;">📅 ${product.harvestDate}</div>
          </div>
          <div class="card-box" style="background:var(--color-bg); margin:0;">
            <div class="form-label">BEST BEFORE</div>
            <div style="font-weight:700;">📅 ${product.bestBefore}</div>
          </div>
        </div>

        <button class="btn-primary" onclick="openCheckoutModal('${product.id}')">
          🛡️ Order with Escrow Protection
        </button>
      </div>
    </div>
  `;
}

function openCheckoutModal(productId) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-content-body');

  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <h3 style="font-size:18px; font-weight:800;">Escrow Order Builder</h3>
      <button onclick="closeModal()" style="border:none; background:none; font-size:20px; cursor:pointer;">✕</button>
    </div>

    <div class="card-box" style="background:var(--color-primary-light);">
      <div style="font-weight:800; color:var(--color-primary-dark);">${product.title}</div>
      <div style="font-size:12px; color:var(--color-text-sub);">Farmer: ${product.farmer} (${product.farmerLocation})</div>
    </div>

    <div class="form-group">
      <label class="form-label">Select Volume (${product.unit}s):</label>
      <input type="number" id="order-qty" class="form-input" value="3" min="1" max="${product.availableQty}" onchange="calcOrderCosts(${product.price})" />
    </div>

    <div class="form-group">
      <label class="form-label">Delivery Hub Destination:</label>
      <select class="form-select" id="order-dest">
        <option value="Lagos, Nigeria">Lagos Cold Distribution Hub</option>
        <option value="Abuja, Nigeria">Abuja Federal Capital Hub</option>
        <option value="Ibadan, Nigeria">Ibadan Logistics Hub</option>
      </select>
    </div>

    <div class="card-box" id="calc-breakdown-box"></div>

    <button class="btn-primary" onclick="submitEscrowOrder('${product.id}')">
      💳 Confirm Order & Lock Escrow Funds
    </button>
  `;

  calcOrderCosts(product.price);
  overlay.classList.add('active');
}

function calcOrderCosts(unitPrice) {
  const qty = parseInt(document.getElementById('order-qty')?.value || 1, 10);
  const base = unitPrice * qty;
  const approxWeight = qty * 50;
  const logistics = approxWeight * 50;
  const coldFee = approxWeight * 15;
  const escrowFee = Math.round(base * 0.015 + 5000);
  const total = base + logistics + coldFee + escrowFee;

  const box = document.getElementById('calc-breakdown-box');
  if (box) {
    box.innerHTML = `
      <div class="form-label">TRANSACTION & UNIT ECONOMICS</div>
      <div style="display:flex; justify-content:space-between; font-size:13px;"><span>Produce Subtotal</span><strong>₦${base.toLocaleString()}</strong></div>
      <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--color-text-sub);"><span>Logistics Fee (₦50/kg × ${approxWeight}kg)</span><span>₦${logistics.toLocaleString()}</span></div>
      <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--color-text-sub);"><span>IoT Cold Chain Surcharge (₦15/kg)</span><span>₦${coldFee.toLocaleString()}</span></div>
      <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--color-text-sub);"><span>Escrow & Quality Fee</span><span>₦${escrowFee.toLocaleString()}</span></div>
      <div style="display:flex; justify-content:space-between; font-size:16px; font-weight:900; margin-top:6px; padding-top:6px; border-top:1px solid var(--color-divider); color:var(--color-primary-dark);">
        <span>Total Payable</span><span>₦${total.toLocaleString()}</span>
      </div>
    `;
  }
}

function submitEscrowOrder(productId) {
  const product = appState.products.find(p => p.id === productId);
  const qty = parseInt(document.getElementById('order-qty')?.value || 1, 10);
  const dest = document.getElementById('order-dest')?.value || 'Lagos, Nigeria';
  const orderId = `RD_${String(appState.orders.length + 1).padStart(3, '0')}`;

  const base = product.price * qty;
  const total = base + (qty * 50 * 65) + Math.round(base * 0.015 + 5000);

  const newOrder = {
    id: orderId,
    productName: product.title,
    farmerName: product.farmer,
    quantityStr: `${qty} × ${product.unit}`,
    totalAmount: total,
    status: 'In Transit',
    escrowStatus: 'Escrow Held',
    dateStr: 'Just now',
    origin: product.farmerLocation,
    destination: dest,
    currentTemp: product.coldRequired ? product.targetTemp : 'Ambient',
    currentHumidity: '86%',
    coldChainIntact: true,
    estimatedDelivery: '2 Days from now',
    timeline: [
      { title: 'Order Confirmed', location: dest, timestamp: 'Just now', completed: true },
      { title: 'Payment Held in Escrow', location: 'Lagos, Nigeria', timestamp: 'Just now', completed: true },
      { title: 'Farmer Preparing Shipment', location: product.farmerLocation, timestamp: 'Pending', completed: false, active: true }
    ]
  };

  appState.orders.unshift(newOrder);
  saveState(appState);
  closeModal();
  showToast(`Order #${orderId} submitted! Redirecting to orders...`);
  setTimeout(() => window.location.href = 'orders.html', 1200);
}

// 4. Cold Chain Page
function initColdChainPage() {
  renderTelemetryGraph();
}

function renderTelemetryGraph() {
  const wrap = document.getElementById('telemetry-chart-wrap');
  if (!wrap) return;

  const data = appState.telemetryData;
  const temps = data.map(d => d.temp);
  const minTemp = Math.min(...temps) - 2;
  const maxTemp = Math.max(...temps) + 2;

  const width = 340;
  const height = 150;
  const points = data.map((d, idx) => {
    const x = (idx / (data.length - 1)) * (width - 20) + 10;
    const y = height - ((d.temp - minTemp) / (maxTemp - minTemp)) * (height - 30) - 15;
    return `${x},${y}`;
  }).join(' ');

  wrap.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:100%;">
      <line x1="0" y1="25" x2="${width}" y2="25" stroke="#FCA5A5" stroke-dasharray="4" stroke-width="1.5"/>
      <text x="${width - 60}" y="20" fill="#EF4444" font-size="9" font-weight="bold">Max 15°C</text>

      <line x1="0" y1="120" x2="${width}" y2="120" stroke="#FCA5A5" stroke-dasharray="4" stroke-width="1.5"/>
      <text x="${width - 60}" y="132" fill="#EF4444" font-size="9" font-weight="bold">Min 10°C</text>

      <polyline fill="none" stroke="#0284C7" stroke-width="3" stroke-linecap="round" points="${points}" />

      ${data.map((d, idx) => {
        const x = (idx / (data.length - 1)) * (width - 20) + 10;
        const y = height - ((d.temp - minTemp) / (maxTemp - minTemp)) * (height - 30) - 15;
        return `
          <circle cx="${x}" cy="${y}" r="4" fill="#0284C7" stroke="#FFFFFF" stroke-width="2"/>
          <text x="${x}" y="${y - 8}" text-anchor="middle" fill="#0369A1" font-size="9" font-weight="bold">${d.temp}°C</text>
          <text x="${x}" y="${height - 2}" text-anchor="middle" fill="#78716C" font-size="8">${d.time}</text>
        `;
      }).join('')}
    </svg>
  `;
}

function triggerSensorSpike() {
  appState.telemetryData[appState.telemetryData.length - 1].temp = 16.5;
  renderTelemetryGraph();
  alert('⚠️ COLD CHAIN BREACH ALERT!\n\nSensor temperature spiked to 16.5°C exceeding maximum threshold (15.0°C). Automatic warning sent to driver & platform inspector.');
}

// 5. Cold Storage Page
function initColdStoragePage() {
  const container = document.getElementById('hubs-grid');
  if (!container) return;

  container.innerHTML = appState.coldHubs.map(h => `
    <div class="card-box">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <h3 style="font-size:16px; font-weight:800; color:var(--color-primary-dark);">${h.name}</h3>
          <div style="font-size:12px; color:var(--color-text-sub);">📍 ${h.state} · 🌡️ Temp: ${h.temp}</div>
        </div>
        <span class="tag-pill tag-mint">${h.available} Available</span>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:8px; border-top:1px solid var(--color-divider);">
        <div>
          <span style="font-size:16px; font-weight:800; color:var(--color-primary-dark);">₦${h.pricePerDay}</span>
          <span style="font-size:11px; color:var(--color-text-sub);">/ crate / day</span>
        </div>
        <button class="btn-secondary" onclick="bookStorageSpace('${h.name}', ${h.pricePerDay})">📦 Book Space</button>
      </div>
    </div>
  `).join('');
}

function bookStorageSpace(hubName, pricePerDay) {
  const crates = prompt(`Book space at ${hubName}.\nEnter number of crates to store:`, '50');
  if (!crates) return;
  const days = prompt('Enter number of storage days:', '7');
  if (!days) return;

  const total = parseInt(crates, 10) * parseInt(days, 10) * pricePerDay;
  alert(`✓ Cold Storage Reservation Confirmed!\n\n• Hub: ${hubName}\n• Volume: ${crates} crates\n• Duration: ${days} days\n• Total Cost: ₦${total.toLocaleString()}\n\nQRCode reservation receipt generated.`);
}

// 6. Orders Page
function initOrdersPage() {
  const container = document.getElementById('orders-feed');
  if (!container) return;

  container.innerHTML = appState.orders.map(o => `
    <div class="card-box">
      <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
        <span style="font-size:12px; font-weight:700; color:var(--color-text-sub);">Order #${o.id}</span>
        <span style="font-size:11px; color:var(--color-text-light);">${o.dateStr}</span>
      </div>
      <div style="font-size:16px; font-weight:800;">${o.productName}</div>
      <div style="font-size:12px; color:var(--color-text-sub); margin-bottom:8px;">${o.quantityStr} · ${o.farmerName}</div>
      <div>
        <span class="tag-pill tag-mint">• ${o.status}</span>
        <span class="tag-pill tag-escrow">🛡️ ${o.escrowStatus}</span>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; padding-top:8px; border-top:1px dashed var(--color-divider);">
        <span style="font-size:16px; font-weight:900; color:var(--color-primary-dark);">₦${o.totalAmount.toLocaleString()}</span>
        <a href="tracking.html?id=${o.id}" class="btn-secondary" style="text-decoration:none;">Track Route ›</a>
      </div>
    </div>
  `).join('');
}

// 7. Tracking Page
function initTrackingPage() {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('id') || 'RD_001';
  const order = appState.orders.find(o => o.id === orderId) || appState.orders[0];

  const container = document.getElementById('tracking-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-size:18px; font-weight:900;">Order #${order.id}</span>
        <span class="tag-pill tag-mint">• ${order.status}</span>
      </div>
      <div style="font-size:15px; font-weight:800; color:var(--color-primary-dark);">${order.productName}</div>
      <div style="font-size:12px; color:var(--color-text-sub);">${order.quantityStr} · Farmer: ${order.farmerName}</div>
    </div>

    <div class="card-box" style="background:var(--color-cold-bg); border-color:var(--color-cold-border);">
      <div class="form-label" style="color:var(--color-cold-text);">LIVE TELEMETRY SNAPSHOT</div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
        <span style="font-size:20px; font-weight:900; color:var(--color-cold-text);">🌡️ ${order.currentTemp}</span>
        <span style="font-size:13px; color:var(--color-cold-text); font-weight:700;">💧 ${order.currentHumidity} Humidity</span>
        <span class="tag-pill tag-mint" style="margin:0;">● Intact</span>
      </div>
    </div>

    <div class="card-box">
      <div class="form-label">ROUTE CHECKPOINT TIMELINE</div>
      <div style="margin-top:12px; padding-left:16px; border-left:3px solid var(--color-primary);">
        ${order.timeline.map(t => `
          <div style="margin-bottom:16px; position:relative;">
            <div style="font-weight:800; font-size:13px;">${t.title}</div>
            <div style="font-size:12px; color:var(--color-text-sub);">${t.location} · ${t.timestamp}</div>
            ${t.telemetry ? `<div class="tag-pill tag-cold" style="margin-top:4px;">${t.telemetry}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card-box" style="background:var(--color-primary-light); text-align:center;">
      <div class="form-label">ESTIMATED ARRIVAL</div>
      <div style="font-size:18px; font-weight:900; color:var(--color-primary-dark);">${order.estimatedDelivery}</div>
    </div>
  `;
}

// 8. FinTech Page
function initFintechPage() {}

function calcQuickPay() {
  const invoiceAmt = parseFloat(document.getElementById('fin-inv-amt')?.value || 1000000);
  const advance = invoiceAmt * 0.90; // 90%
  const fee = invoiceAmt * 0.025; // 2.5% flat fee
  const netPay = advance - fee;

  const box = document.getElementById('fin-calc-result');
  if (box) {
    box.innerHTML = `
      <div class="card-box" style="background:var(--color-fintech-bg); border-color:var(--color-fintech-border);">
        <div class="form-label" style="color:var(--color-fintech-text);">QUICK-PAY ADVANCE SUMMARY</div>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin:4px 0;"><span>Invoice Amount</span><strong>₦${invoiceAmt.toLocaleString()}</strong></div>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin:4px 0;"><span>24-Hour Advance Rate (90%)</span><strong>₦${advance.toLocaleString()}</strong></div>
        <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--color-text-sub);"><span>Flat Factoring Fee (2.5%)</span><span>-₦${fee.toLocaleString()}</span></div>
        <div style="display:flex; justify-content:space-between; font-size:16px; font-weight:900; color:var(--color-fintech-text); border-top:1px solid var(--color-fintech-border); padding-top:6px; margin-top:6px;">
          <span>Net Disbursed to Farmer Today</span><span>₦${netPay.toLocaleString()}</span>
        </div>
      </div>
    `;
  }
}

// 9. Price Index Page
function initPriceIndexPage() {
  const container = document.getElementById('price-index-table-body');
  if (!container) return;

  container.innerHTML = appState.priceIndex.map(p => `
    <tr>
      <td><strong>${p.produce}</strong></td>
      <td>${p.market}</td>
      <td><strong>₦${p.priceNow.toLocaleString()}</strong></td>
      <td><span class="tag-pill ${p.trend === 'up' ? 'tag-mint' : 'tag-escrow'}">${p.change}</span></td>
    </tr>
  `).join('');
}

// 10. Cooperative Page
function initCooperativePage() {}

// 11. Sustainability Page
function initSustainabilityPage() {}

// 12. Profile Page
function initProfilePage() {}

// 13. Enterprise Page
function initEnterprisePage() {}

function runMatchmaking() {
  const box = document.getElementById('match-output');
  if (!box) return;

  box.innerHTML = `
    <div class="card-box" style="background:var(--color-primary-light); border-color:var(--color-primary-border);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:900; color:var(--color-primary-dark);">MATCH RESULT: 98.6% Compatibility Score</span>
        <span class="tag-pill tag-mint">Optimal Route</span>
      </div>
      <div style="font-size:13px; margin-top:8px;">
        <div><strong>Matched Co-op:</strong> Kaduna Central Tomato Farmers Association (Ibrahim Musa Lead)</div>
        <div><strong>Logistics Corridor:</strong> Kaduna Hub → Abuja Hub → Ibadan Cold Hub → Lagos Central</div>
        <div><strong>Transit Duration:</strong> 14.2 Hours (&lt; 18h Fresh Window)</div>
        <div><strong>Spoilage Risk Reduction:</strong> 99.4% preservation efficiency</div>
      </div>
    </div>
  `;
}

function submitQCBatch() {
  const brix = document.getElementById('qc-brix')?.value || 4.8;
  alert(`✓ Digital Quality Certificate Issued!\n\n• Brix Rating: ${brix}°Bx\n• GAP Certificate Hash: 0x8F92A...B412\n• Order #RD_001 cleared for final delivery disbursal.`);
}

// 14. Docs Page
function initDocsPage() {}
