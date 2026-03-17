// Nigerian Bulk SMS Directory — Platform Data & Shared Logic

const platforms = [
  {
    id: "ebulksms",
    name: "EBulkSMS",
    website: "https://www.ebulksms.com",
    affiliateLink: "https://www.ebulksms.com/signup?ref=vcqvv",
    founded: 2013,
    tagline: "Developer-friendly SMS for Nigerian businesses",
    rating: 4.8,
    featured: true,
    pricePerSMS: 1.80,
    minRecharge: 2000,
    freeTrial: true,
    apiAvailable: true,
    dndSupport: true,
    voiceSMS: false,
    whatsapp: true,
    channels: ["SMS", "WhatsApp", "Flash SMS"],
    bestFor: ["Developers", "SMEs", "Startups"],
    pricing: [
      { range: "1–999 units", price: "₦5.00" },
      { range: "1,000–10,000 units", price: "₦2.00" },
      { range: "10,000+ units", price: "₦1.80" }
    ],
    pros: [
      "Cheapest per unit rate in Nigeria",
      "SMS units never expire",
      "Strong developer API",
      "Auto duplicate number removal",
      "DND refund policy"
    ],
    cons: [
      "Small volumes are expensive at ₦5/unit",
      "DND bypass costs extra",
      "No refunds once credits are loaded"
    ],
    commission: "10% recurring",
    hasAffiliate: true,
    notableClients: []
  },
  {
    id: "bulksmsnigeria",
    name: "BulkSMSNigeria",
    website: "https://www.bulksmsnigeria.com",
    affiliateLink: null,
    founded: 2015,
    tagline: "OTP and transactional SMS for developers",
    rating: 4.2,
    featured: false,
    pricePerSMS: 2.00,
    minRecharge: null,
    freeTrial: false,
    apiAvailable: true,
    dndSupport: false,
    voiceSMS: true,
    whatsapp: false,
    channels: ["SMS", "Voice SMS", "OTP"],
    bestFor: ["Developers", "SaaS platforms", "OTP systems"],
    pricing: [
      { range: "Nigeria", price: "₦2–₦4 per SMS" }
    ],
    pros: [
      "Sandbox testing environment",
      "Voice SMS support",
      "Multiple wallet funding options",
      "Detailed delivery reports"
    ],
    cons: [
      "Sender ID approval takes 24–48 hours",
      "International SMS needs ₦200k recharge history",
      "7.5% VAT on all recharges from Feb 2025"
    ],
    commission: null,
    hasAffiliate: false,
    notableClients: []
  },
  {
    id: "nigeriabulksms",
    name: "Nigeria Bulk SMS",
    website: "https://www.nigeriabulksms.com",
    affiliateLink: "http://portal.nigeriabulksms.com/register/?referral=27657039",
    founded: 2008,
    tagline: "Nigeria's oldest bulk SMS platform since 2008",
    rating: 4.0,
    featured: false,
    pricePerSMS: 8.00,
    minRecharge: 5000,
    freeTrial: true,
    apiAvailable: true,
    dndSupport: true,
    voiceSMS: true,
    whatsapp: false,
    channels: ["SMS", "Voice SMS", "TTS"],
    bestFor: ["Large businesses", "NGOs", "Government", "Religious institutions"],
    pricing: [
      { range: "5,000–999,999 units", price: "₦8.00" },
      { range: "1,000,000+ units", price: "₦6.00" }
    ],
    pros: [
      "Oldest platform in Nigeria since 2008",
      "200,000+ customers served",
      "Voice SMS and TTS support",
      "Strong reseller program"
    ],
    cons: [
      "Most expensive per unit pricing",
      "Credits expire after 1 year",
      "High minimum recharge of ₦5,000"
    ],
    commission: "2.5% lifetime",
    hasAffiliate: true,
    notableClients: []
  },
  {
    id: "multitexter",
    name: "Multitexter",
    website: "https://www.multitexter.com",
    affiliateLink: "https://www.multitexter.com/signup?ref=292358",
    founded: null,
    tagline: "Pay as you go bulk SMS for every budget",
    rating: 3.8,
    featured: false,
    pricePerSMS: 1.90,
    minRecharge: 500,
    freeTrial: false,
    apiAvailable: true,
    dndSupport: false,
    voiceSMS: false,
    whatsapp: false,
    channels: ["SMS"],
    bestFor: ["Small businesses", "Budget senders"],
    pricing: [
      { range: "100–199 units", price: "₦5.00" },
      { range: "500–9,999 units", price: "₦2.00" },
      { range: "10,000–3,999,999 units", price: "₦1.90" },
      { range: "4,200,000+ units", price: "₦1.85" }
    ],
    pros: [
      "Lowest minimum recharge at ₦500",
      "No maximum purchase limit",
      "Simple pay as you go"
    ],
    cons: [
      "Charges 4 units per SMS page on all networks",
      "No DND support",
      "Limited features"
    ],
    commission: "Units credited per referral",
    hasAffiliate: true,
    notableClients: []
  },
  {
    id: "betasms",
    name: "BetaSMS",
    website: "https://www.betasms.com",
    affiliateLink: null,
    founded: 2018,
    tagline: "Trusted by Coca-Cola, UBA and Air France",
    rating: 4.1,
    featured: false,
    pricePerSMS: 2.99,
    minRecharge: null,
    freeTrial: false,
    apiAvailable: true,
    dndSupport: true,
    voiceSMS: true,
    whatsapp: false,
    channels: ["SMS", "Voice SMS", "Robo Calls", "Email"],
    bestFor: ["Churches", "NGOs", "Political campaigns", "Large enterprises"],
    pricing: [
      { range: "1,000–19,999 units", price: "₦2.99" },
      { range: "20,000–49,999 units", price: "₦2.50" },
      { range: "50,000–99,999 units", price: "₦1.99" },
      { range: "100,000+ units", price: "₦1.85" }
    ],
    pros: [
      "Trusted by major Nigerian and global brands",
      "SMS units never expire",
      "Voice SMS and robo calls",
      "International delivery",
      "Free mobile app"
    ],
    cons: [
      "DND bypass excludes MTN on starter plan",
      "DND bypass excludes MTN and Airtel on premium",
      "No affiliate program"
    ],
    commission: null,
    hasAffiliate: false,
    notableClients: ["Coca-Cola", "UBA", "Air France", "British American Tobacco"]
  },
  {
    id: "sendchamp",
    name: "Sendchamp",
    website: "https://www.sendchamp.com",
    affiliateLink: null,
    founded: null,
    tagline: "Multi-channel messaging — SMS, WhatsApp, Email in one",
    rating: 4.3,
    featured: false,
    pricePerSMS: 6.00,
    minRecharge: null,
    freeTrial: false,
    apiAvailable: true,
    dndSupport: false,
    voiceSMS: true,
    whatsapp: true,
    channels: ["SMS", "WhatsApp", "Email", "Voice", "Facebook Messenger", "Instagram"],
    bestFor: ["Developers", "Multi-channel businesses", "Fintechs"],
    pricing: [
      { range: "SMS", price: "₦6.00 per SMS" },
      { range: "WhatsApp", price: "₦2.70 per message" },
      { range: "Email", price: "₦1.50 per mail" },
      { range: "Voice", price: "₦60.00 per minute" }
    ],
    pros: [
      "Multi-channel — SMS WhatsApp Email Voice in one",
      "Strong webhook and API support",
      "Postman collection available",
      "Instagram and Facebook Messenger support"
    ],
    cons: [
      "Most expensive SMS rate at ₦6/unit",
      "No affiliate program",
      "No free trial"
    ],
    commission: null,
    hasAffiliate: false,
    notableClients: []
  },
  {
    id: "smartsmssolutions",
    name: "SmartSMS Solutions",
    website: "https://www.smartsmssolutions.com",
    affiliateLink: null,
    founded: null,
    tagline: "SMS, airtime, data, bills — all in one API",
    rating: 4.0,
    featured: false,
    pricePerSMS: 6.43,
    minRecharge: null,
    freeTrial: false,
    apiAvailable: true,
    dndSupport: true,
    voiceSMS: true,
    whatsapp: false,
    channels: ["SMS", "Voice OTP", "Airtime", "Data", "Electricity", "Pay TV", "WAEC"],
    bestFor: ["VTU businesses", "Fintechs", "Developers needing multiple services"],
    pricing: [
      { range: "Promotional SMS", price: "₦6.43 per SMS" },
      { range: "OTP/Bank Bind SMS", price: "₦6.76 per SMS" },
      { range: "Voice OTP", price: "₦0.30 per second" }
    ],
    pros: [
      "Beyond SMS — bills airtime data in one API",
      "Voice OTP at ₦0.30 per second",
      "Supports all DISCOs for electricity",
      "WAEC pin purchases available"
    ],
    cons: [
      "Highest SMS pricing in the directory",
      "No affiliate program",
      "Complex for simple SMS needs"
    ],
    commission: null,
    hasAffiliate: false,
    notableClients: []
  },
  {
    id: "termii",
    name: "Termii",
    website: "https://www.termii.com",
    affiliateLink: null,
    founded: null,
    tagline: "Enterprise grade OTP and verification for Nigerian fintechs",
    rating: 4.5,
    featured: false,
    pricePerSMS: 17.00,
    minRecharge: null,
    freeTrial: true,
    apiAvailable: true,
    dndSupport: true,
    voiceSMS: true,
    whatsapp: true,
    channels: ["SMS", "WhatsApp", "Voice", "Email"],
    bestFor: ["Fintechs", "Enterprise", "OTP verification systems"],
    pricing: [
      { range: "SMS Nigeria", price: "~₦17 per SMS" },
      { range: "WhatsApp OTP", price: "~₦90 per message" },
      { range: "Token verification", price: "~₦0.16 per check" }
    ],
    pros: [
      "Enterprise grade reliability",
      "Handles 10,000 numbers per API request",
      "Trusted by Nigerian fintechs",
      "Strong OTP and verification focus",
      "Multi-channel in one platform"
    ],
    cons: [
      "Most expensive platform overall",
      "Pricing in USD",
      "No affiliate program",
      "Overkill for small businesses"
    ],
    commission: null,
    hasAffiliate: false,
    notableClients: []
  },
  {
    id: "smsmobile24",
    name: "SMSMobile24",
    website: "https://www.smsmobile24.com",
    affiliateLink: null,
    founded: null,
    tagline: "Listed for transparency; directory does not recommend for operations",
    rating: null,
    featured: false,
    recommended: false,
    pricePerSMS: null,
    minRecharge: null,
    freeTrial: null,
    apiAvailable: null,
    dndSupport: null,
    voiceSMS: null,
    whatsapp: null,
    channels: [],
    bestFor: [],
    pricing: [],
    pros: [],
    cons: ["Site difficult to navigate", "Unclear sign-up path", "Details hard to find"],
    commission: null,
    hasAffiliate: false,
    notableClients: [],
    honestReview: "I do not perceive them as an SMS bulker, although other sources may say so. As soon as I got to their website I didn't understand it — I found it difficult to navigate my way to sign up or even get their details. This directory would not recommend them for operations."
  },
  {
    id: "ibulky",
    name: "iBulky",
    website: "https://www.ibulky.com",
    affiliateLink: null,
    founded: 2008,
    tagline: "Mass communication and HLR database cleaning for organizations of all sizes",
    rating: 4.4,
    featured: false,
    pricePerSMS: 1.30,
    minRecharge: 1000,
    freeTrial: false,
    apiAvailable: true,
    dndSupport: false,
    voiceSMS: false,
    whatsapp: false,
    channels: ["SMS", "Flash SMS", "Branded SMS", "Scheduled SMS"],
    bestFor: ["Churches", "Charity organizations", "Small businesses", "Large enterprises", "Marketing", "HLR database cleaning"],
    pricing: [
      { range: "50–5,000 units", price: "₦1.80" },
      { range: "5,001–15,000 units", price: "₦1.70" },
      { range: "15,001–50,000 units", price: "₦1.60" },
      { range: "50,001–999,999 units", price: "₦1.40" },
      { range: "1,000,000 & above", price: "₦1.30" }
    ],
    pros: [
      "Industry experience since 2008 — over 15 years in Nigerian bulk SMS",
      "Low barrier to entry: minimum recharge ₦1,000",
      "HLR Lookup for database validation and cleaner contact lists",
      "Flexible volume-based pricing, as low as ₦1.30 per unit; units never expire"
    ],
    cons: [
      "DND bypass (Corporate Route) not explicitly detailed in primary marketing",
      "No integrated WhatsApp messaging; focuses on traditional bulk SMS"
    ],
    commission: null,
    hasAffiliate: false,
    notableClients: [],
    honestReview: "I would say I'm glad to have had to come across this platform — no question asked I would recommend this to churches and charity organizations as your full-pledged tool."
  }
];

// Quiz facts — shown below every step
const QUIZ_FACTS = [
  "SMS has a 98% open rate vs 20% for email in Nigeria",
  "Over 50,000 Nigerian businesses send bulk SMS daily",
  "The Nigerian bulk SMS industry processes ₦100M+ daily",
  "SMS campaigns get 3x more responses than WhatsApp broadcasts",
  "A weekly SMS to 500 customers costs less than a bowl of eba 🍲",
  "Churches using SMS reminders see 40% better attendance",
  "Realtors using SMS follow-up close deals 2x faster",
  "ECommerce stores with SMS confirmations get 40% fewer complaints"
];

// ——— Homepage: render featured card + small cards ———
function renderPlatformCards(list) {
  const listToShow = list || platforms;
  const featured = listToShow.filter(function (p) { return p.featured; })[0];
  const rest = listToShow.filter(function (p) { return !p.featured; });
  renderFeaturedCard(featured);
  renderCardRow("platform-cards", rest.slice(0, 4));
  renderCardRow("platform-cards-row2", rest.slice(4, 10));
}

function renderFeaturedCard(p) {
  const wrap = document.getElementById("featured-card-wrap");
  if (!wrap) return;
  if (!p) {
    wrap.innerHTML = "";
    wrap.style.display = "none";
    return;
  }
  wrap.style.display = "";
  const link = p.affiliateLink || p.website;
  const tagline = p.tagline || "The fastest, at all points";
  const logoUrl = getLogoUrl(p.website, 128);
  const logoImg = logoUrl
    ? '<img src="' + logoUrl + '" alt="" class="featured-card-logo" width="64" height="64">'
    : '<span class="featured-card-icon-inner" aria-hidden="true">📱</span>';
  var featuredBadge = p.featured ? '<span class="featured-card-badge">⭐ Featured</span>' : '';
  wrap.innerHTML =
    '<article class="featured-card">' +
      '<div class="featured-card-icon">' + logoImg + '</div>' +
      '<div class="featured-card-body">' +
        '<div class="featured-card-heading">' +
          '<h2 class="featured-card-name">' + escapeHtml(p.name) + '</h2>' + featuredBadge +
        '</div>' +
        '<p class="featured-card-tagline">' + escapeHtml(tagline) + '</p>' +
        '<div class="featured-card-actions">' +
          '<a href="' + link + '" target="_blank" rel="noopener" class="btn btn-accent">Sign Up Free →</a>' +
          '<a href="' + p.id + '.html" class="btn btn-outline">View Details</a>' +
        '</div>' +
      '</div>' +
    '</article>';
}

function renderCardRow(containerId, list) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  const cards = list.map(function (p) {
    const desc = p.tagline || (p.pricePerSMS != null ? "₦" + formatPrice(p.pricePerSMS) + " / SMS" : "") + (p.bestFor && p.bestFor[0] ? " · " + p.bestFor[0] : "");
    const freeTrialText = p.freeTrial
      ? '<span class="card-trial card-trial-yes">✓ Free Trial</span>'
      : '<span class="card-trial card-trial-no">✗ Free Trial</span>';
    const logoUrl = getLogoUrl(p.website, 64);
    const smallLogo = logoUrl
      ? '<img src="' + logoUrl + '" alt="" class="platform-card-small-logo" width="48" height="48">'
      : '<span class="platform-card-small-initials">' + escapeHtml((p.name || "SMS").replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || "SMS") + "</span>";
    return (
      '<article class="platform-card platform-card-small">' +
        '<div class="platform-card-small-icon">' + smallLogo + '</div>' +
        '<h3 class="platform-card-name">' + escapeHtml(p.name) + '</h3>' +
        '<p class="platform-card-desc">' + escapeHtml(desc) + '</p>' +
        freeTrialText +
        '<a href="' + p.id + '.html" class="btn btn-outline btn-card">View Details</a>' +
      '</article>'
    );
  }).join("");
  grid.innerHTML = cards || "<p class=\"text-muted\">No platforms match your filters.</p>";
}

function formatPrice(n) {
  if (n == null) return "—";
  return Number(n) === n && n % 1 !== 0 ? n.toFixed(2) : String(n);
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

// Logo URL from platform website (Google favicon service – no hosting needed)
function getLogoUrl(website, size) {
  if (!website) return "";
  try {
    var host = new URL(website).hostname;
    return "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(host) + "&sz=" + (size || 128);
  } catch (e) {
    return "";
  }
}

// ——— Homepage: filters ———
function initHomeFilters() {
  const filterFreeTrial = document.getElementById("filter-free-trial");
  const filterApi = document.getElementById("filter-api");
  const filterDnd = document.getElementById("filter-dnd");
  const filterBestFor = document.getElementById("filter-best-for");

  function applyFilters() {
    let list = platforms.slice();
    if (filterFreeTrial && filterFreeTrial.checked) {
      list = list.filter(function (p) { return p.freeTrial; });
    }
    if (filterApi && filterApi.checked) {
      list = list.filter(function (p) { return p.apiAvailable; });
    }
    if (filterDnd && filterDnd.checked) {
      list = list.filter(function (p) { return p.dndSupport; });
    }
    if (filterBestFor && filterBestFor.value === "Developers") {
      list = list.filter(function (p) {
        return (p.bestFor || []).indexOf("Developers") !== -1;
      });
    }
    renderPlatformCards(list);
  }

  [filterFreeTrial, filterApi, filterDnd, filterBestFor].forEach(function (el) {
    if (el) el.addEventListener("change", applyFilters);
  });
}

// ——— Quiz: 7 questions (optimized for finance & efficiency match) ———
var QUIZ_QUESTIONS = [
  {
    id: "useCase",
    question: "What best describes your use case?",
    options: [
      { value: "Church", label: "Church / Religious" },
      { value: "School", label: "School" },
      { value: "Ecommerce", label: "Ecommerce" },
      { value: "Real Estate", label: "Real Estate" },
      { value: "Restaurant", label: "Restaurant" },
      { value: "Developer", label: "Developer / Tech" },
      { value: "NGO", label: "NGO / Charity" },
      { value: "Other", label: "Other" }
    ]
  },
  {
    id: "goal",
    question: "What's your main goal with SMS?",
    options: [
      { value: "Save cost", label: "Save cost — best price per SMS" },
      { value: "Reach more", label: "Reach more people reliably" },
      { value: "API", label: "API / automation" },
      { value: "Multi-channel", label: "SMS + WhatsApp (or more channels)" },
      { value: "Free trial", label: "Try before I pay (free trial)" }
    ]
  },
  {
    id: "contacts",
    question: "Roughly how many contacts will you send to per month?",
    options: [
      { value: "Under 100", label: "Under 100" },
      { value: "100–500", label: "100–500" },
      { value: "500–2000", label: "500–2,000" },
      { value: "2000–10k", label: "2,000–10,000" },
      { value: "10k+", label: "10,000+" }
    ]
  },
  {
    id: "budget",
    question: "How much are you comfortable putting in upfront (recharge)?",
    options: [
      { value: "Low", label: "As low as possible (₦500–₦1k)" },
      { value: "1k-5k", label: "₦1,000–₦5,000" },
      { value: "5k-20k", label: "₦5,000–₦20,000" },
      { value: "20k+", label: "₦20,000+ / No limit" }
    ]
  },
  {
    id: "dnd",
    question: "Do you need to reach DND (Do Not Disturb) numbers?",
    options: [
      { value: "Yes", label: "Yes — marketing / promos" },
      { value: "No", label: "No — OTP / alerts only" },
      { value: "Not sure", label: "Not sure" }
    ]
  },
  {
    id: "channels",
    question: "Which channels do you need?",
    options: [
      { value: "SMS only", label: "SMS only" },
      { value: "SMS + WhatsApp", label: "SMS + WhatsApp" },
      { value: "SMS + Voice", label: "SMS + Voice" },
      { value: "Multiple", label: "Multiple (SMS, WhatsApp, Email, etc.)" }
    ]
  },
  {
    id: "trial",
    question: "Would you prefer a free trial before paying?",
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No — I'm okay to pay from day one" }
    ]
  }
];

function getPlatform(id) {
  return platforms.filter(function (p) { return p.id === id; })[0] || platforms[0];
}

// Score a platform against quiz answers (higher = better match). Excludes non-recommended.
function scorePlatformForAnswers(p, answers) {
  if (p.recommended === false) return -1;
  var score = 0;
  var useCase = answers.useCase;
  var goal = answers.goal;
  var contacts = answers.contacts;
  var budget = answers.budget;
  var dnd = answers.dnd;
  var channels = answers.channels;
  var trial = answers.trial;

  // Use case fit
  var bestFor = p.bestFor || [];
  if (useCase === "Church" || useCase === "NGO") {
    if (bestFor.indexOf("Churches") !== -1 || bestFor.indexOf("Religious institutions") !== -1 || bestFor.indexOf("Charity organizations") !== -1) score += 40;
    else if (p.id === "nigeriabulksms" || p.id === "betasms" || p.id === "ibulky") score += 35;
  }
  if (useCase === "Developer") {
    if (p.apiAvailable && (bestFor.indexOf("Developers") !== -1 || bestFor.indexOf("Fintechs") !== -1)) score += 35;
    if (goal === "API" && (p.id === "termii" || p.id === "ebulksms")) score += 25;
  }
  if (["Ecommerce", "School", "Restaurant", "Real Estate", "Other"].indexOf(useCase) !== -1) {
    if (p.pricePerSMS != null && p.pricePerSMS <= 2.5) score += 20;
    if (p.minRecharge != null && p.minRecharge <= 2000) score += 15;
  }

  // Goal
  if (goal === "Save cost" && p.pricePerSMS != null) score += Math.max(0, 30 - p.pricePerSMS * 5);
  if (goal === "Free trial" && p.freeTrial) score += 35;
  if (goal === "API" && p.apiAvailable) score += 25;
  if (goal === "Multi-channel" && (p.whatsapp || (p.channels && p.channels.length > 2))) score += 30;
  if (goal === "Reach more") score += 10;

  // Contacts vs volume pricing
  if (contacts === "Under 100" || contacts === "100–500") {
    if (p.minRecharge != null && p.minRecharge <= 1000) score += 25;
    if (p.id === "multitexter" && p.minRecharge === 500) score += 15;
  }
  if (contacts === "2000–10k" || contacts === "10k+") {
    if (p.pricing && p.pricing.length > 1) score += 20;
    if (p.pricePerSMS != null && p.pricePerSMS <= 2.5) score += 15;
  }

  // Budget
  if (budget === "Low" && p.minRecharge != null && p.minRecharge <= 1000) score += 30;
  if (budget === "1k-5k" && p.minRecharge != null && p.minRecharge <= 5000) score += 20;
  if (budget === "20k+") score += 5;

  // DND
  if (dnd === "Yes" && p.dndSupport) score += 30;
  if (dnd === "No") score += 5;

  // Channels
  if (channels === "SMS only") score += 5;
  if (channels === "SMS + WhatsApp" && p.whatsapp) score += 25;
  if (channels === "Multiple" && p.id === "sendchamp") score += 35;

  // Trial
  if (trial === "Yes" && p.freeTrial) score += 25;

  return score;
}

function getQuizRecommendation(answers) {
  var candidates = platforms.filter(function (p) { return p.recommended !== false; });
  var scored = candidates.map(function (p) {
    return { platform: p, score: scorePlatformForAnswers(p, answers) };
  }).filter(function (x) { return x.score >= 0; });
  scored.sort(function (a, b) { return b.score - a.score; });
  var best = scored[0];
  var alt = scored[1];
  var platform = (best && best.platform) || getPlatform("ebulksms");
  var altPlatform = (alt && alt.platform) || getPlatform("multitexter");
  var reason = shortReason(platform, answers);
  var scenario = buildScenario(platform, answers);
  return {
    platform: platform,
    alt: altPlatform,
    reason: reason,
    scenario: scenario
  };
}

function shortReason(p, answers) {
  var parts = [];
  if (p.pricePerSMS != null) parts.push("₦" + formatPrice(p.pricePerSMS) + "/SMS");
  if (p.minRecharge != null) parts.push("min recharge ₦" + formatPrice(p.minRecharge));
  if (p.freeTrial) parts.push("free trial");
  if (p.dndSupport) parts.push("DND support");
  return parts.length ? p.name + " offers " + parts.join(", ") + "." : p.name + " fits your use case.";
}

// Build scenario from platform data + answers (finances & efficiency).
function buildScenario(p, answers) {
  var price = p.pricePerSMS != null ? "₦" + formatPrice(p.pricePerSMS) : null;
  var minR = p.minRecharge;
  var contacts = answers.contacts;
  var budget = answers.budget;
  var lines = [];

  if (price && minR != null) {
    var approxSms = Math.floor(minR / p.pricePerSMS);
    lines.push("With a minimum recharge of ₦" + formatPrice(minR) + " and " + price + " per SMS, you can send roughly " + (approxSms >= 100 ? approxSms + "+" : approxSms) + " messages from your first top-up — so your upfront cost stays predictable.");
  } else if (price) {
    lines.push("At " + price + " per SMS you get one of the most cost-efficient rates in Nigeria — more reach for every naira.");
  }

  if (p.pricing && p.pricing.length > 1) {
    var tier = p.pricing[p.pricing.length - 1];
    if (tier.price && tier.range) {
      lines.push("As you scale, their volume pricing (e.g. " + tier.range + " at " + tier.price + ") keeps your cost per message efficient.");
    }
  }

  if (p.freeTrial && answers.trial === "Yes") {
    lines.push("They offer a free trial so you can verify delivery and fit before spending.");
  }

  if (p.dndSupport && answers.dnd === "Yes") {
    lines.push("DND bypass is supported, so your marketing messages can reach more numbers.");
  }

  var noExpiry = (p.pros || []).some(function (s) { return /never expire|don't expire/i.test(s); });
  if (noExpiry) {
    lines.push("Credits don't expire — you're not under pressure to burn units, which helps with cash flow.");
  }

  if (p.id === "sendchamp" && (answers.channels === "Multiple" || answers.goal === "Multi-channel")) {
    lines.push("One platform for SMS, WhatsApp and Email means one bill and one integration — better efficiency and easier budgeting.");
  }

  if (p.id === "termii" && answers.goal === "API") {
    lines.push("Enterprise-grade API and OTP focus mean reliability for fintech and high-volume verification — worth the premium when uptime matters.");
  }

  if ((p.id === "ibulky" || p.id === "nigeriabulksms") && (answers.useCase === "Church" || answers.useCase === "NGO")) {
    lines.push("Built for organisations like yours: predictable costs and volume plans that suit recurring broadcasts.");
  }

  if (lines.length === 0) {
    lines.push("Based on your answers, " + p.name + " matches your use case and budget — check their full review for exact pricing and features.");
  }

  return lines.join(" ");
}

// ——— Quiz: get random fact ———
function getRandomFact() {
  return QUIZ_FACTS[Math.floor(Math.random() * QUIZ_FACTS.length)];
}

// ——— Quiz: init (7 questions + loading) ———
function initQuiz() {
  var container = document.getElementById("quiz-container");
  if (!container) return;

  var questionStep = document.getElementById("quiz-question-step");
  var loadingStep = document.getElementById("quiz-loading-step");
  var progressBar = document.getElementById("quiz-progress-bar");
  var questionTitle = document.getElementById("quiz-question-title");
  var optionsContainer = document.getElementById("quiz-options-container");
  var factEl = document.getElementById("quiz-fact");
  var totalQuestions = QUIZ_QUESTIONS.length;
  var totalSteps = totalQuestions + 1; // 7 questions + 1 loading
  var answers = {};
  var currentStep = 1;

  function showQuestionStep(stepNum) {
    questionStep.classList.add("active");
    if (loadingStep) loadingStep.classList.remove("active");
    if (progressBar) progressBar.style.width = (stepNum / totalSteps) * 100 + "%";
    var q = QUIZ_QUESTIONS[stepNum - 1];
    if (!q) return;
    questionTitle.textContent = q.question;
    optionsContainer.innerHTML = "";
    q.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.setAttribute("data-quiz-option", "");
      btn.setAttribute("data-value", opt.value);
      btn.textContent = opt.label;
      optionsContainer.appendChild(btn);
    });
    if (factEl) factEl.textContent = getRandomFact();
  }

  function showLoadingStep() {
    questionStep.classList.remove("active");
    if (loadingStep) loadingStep.classList.add("active");
    if (progressBar) progressBar.style.width = "100%";
    var loadingFactEl = document.getElementById("quiz-loading-fact");
    if (loadingFactEl) loadingFactEl.textContent = getRandomFact();
    var factInterval = setInterval(function () {
      if (loadingFactEl) loadingFactEl.textContent = getRandomFact();
    }, 800);
    setTimeout(function () {
      clearInterval(factInterval);
      var rec = getQuizRecommendation(answers);
      showResult(rec);
    }, 2500);
  }

  function showResult(rec) {
    document.getElementById("quiz-steps-wrap").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    var p = rec.platform;
    document.getElementById("quiz-result-platform").textContent = p.name;
    document.getElementById("quiz-result-reason").textContent = rec.reason;
    var scenarioEl = document.getElementById("quiz-result-scenario");
    if (scenarioEl) scenarioEl.textContent = rec.scenario || rec.reason;
    var logoEl = document.getElementById("quiz-result-logo");
    if (logoEl && p.website) {
      logoEl.src = getLogoUrl(p.website, 128);
      logoEl.alt = p.name;
      logoEl.style.display = "";
    } else if (logoEl) logoEl.style.display = "none";
    var cta = document.getElementById("quiz-result-cta");
    var link = p.affiliateLink || p.website;
    cta.href = link;
    cta.textContent = p.affiliateLink ? "Get Started Free →" : "Visit Website →";
    if (link) cta.setAttribute("target", "_blank");
    var detailsBtn = document.getElementById("quiz-result-details");
    if (detailsBtn) {
      detailsBtn.href = p.id + ".html";
      detailsBtn.removeAttribute("target");
    }
  }

  function onOptionClick(value) {
    var q = QUIZ_QUESTIONS[currentStep - 1];
    if (q) answers[q.id] = value;
    if (currentStep < totalQuestions) {
      currentStep++;
      showQuestionStep(currentStep);
      // Re-bind new buttons
      optionsContainer.querySelectorAll(".quiz-option").forEach(function (btn) {
        btn.addEventListener("click", function () {
          onOptionClick(btn.dataset.value);
        });
      });
    } else {
      showLoadingStep();
    }
  }

  showQuestionStep(1);
  optionsContainer.querySelectorAll(".quiz-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      onOptionClick(btn.dataset.value);
    });
  });
}

// ——— Init ———
document.addEventListener("DOMContentLoaded", function () {
  // #region agent log
  function __logResponsive(hypothesisId, message, data) {
    try {
      fetch('http://127.0.0.1:7746/ingest/051269bc-2b50-4e7c-99f2-e4e050e46166', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '1066cb' },
        body: JSON.stringify({
          sessionId: '1066cb',
          runId: 'responsive-check',
          hypothesisId: hypothesisId,
          location: 'script.js:DOMContentLoaded',
          message: message,
          data: data || {},
          timestamp: Date.now()
        })
      }).catch(function () {});
    } catch (e) {}
  }

  function __scanOverflow() {
    var docEl = document.documentElement;
    var body = document.body;
    var overflows = [];
    var candidates = [
      { name: 'documentElement', el: docEl },
      { name: 'body', el: body },
      { name: '.navbar', el: document.querySelector('.navbar') },
      { name: '.main', el: document.querySelector('.main') },
      { name: '.featured-card', el: document.querySelector('.featured-card') },
      { name: '.compare-table-wrap', el: document.querySelector('.compare-table-wrap') },
      { name: '.platform-content-layout', el: document.querySelector('.platform-content-layout') }
    ];
    candidates.forEach(function (c) {
      if (!c.el) return;
      var sw = c.el.scrollWidth || 0;
      var cw = c.el.clientWidth || 0;
      if (sw > cw + 2) {
        overflows.push({ name: c.name, scrollWidth: sw, clientWidth: cw });
      }
    });
    __logResponsive(
      'H1_overflow',
      'responsive overflow scan',
      {
        path: location && location.pathname ? location.pathname : '',
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        docClientWidth: docEl ? docEl.clientWidth : null,
        docScrollWidth: docEl ? docEl.scrollWidth : null,
        overflowCount: overflows.length,
        overflows: overflows.slice(0, 6)
      }
    );
  }
  // #endregion

  __logResponsive('H2_viewport', 'responsive init', { path: location.pathname, innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  __scanOverflow();
  window.addEventListener('resize', function () {
    __scanOverflow();
  });

  if (document.getElementById("platform-cards")) {
    renderPlatformCards(platforms);
    initHomeFilters();
  }
  if (document.getElementById("quiz-container")) {
    initQuiz();
  }
});
