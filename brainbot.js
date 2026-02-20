/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         BRAINBOT v5.0 — MEGA SUPER EDITION                  ║
 * ║         FuturePath Learning Institute, Kolkata              ║
 * ║         Created by Aman Sir (Aman Khan)                     ║
 * ║         No external API — 100% local, always works!         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

(function () {
  "use strict";

  // ════════════════════════════════════════════
  //  INSTITUTE KNOWLEDGE BASE
  // ════════════════════════════════════════════
  const INSTITUTE = {
    name: "FuturePath Learning Institute",
    teacher: "Aman Sir (Aman Khan)",
    phone: "8910517578",
    whatsapp: "https://wa.me/918910517578",
    linkedin: "https://www.linkedin.com/in/aman-khan-210187324",
    website: "https://aman00369.github.io/FuturePath-Learning-Institute/",
    location: "Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058",
    timings: {
      morning: "7:00 AM – 10:00 AM",
      afternoon: "12:00 PM – 3:00 PM",
      evening: "5:00 PM – 8:00 PM",
    },
    classes: "Class 5 to Class 12 (CBSE & ICSE, English Medium)",
    admissionFee: "₹300 (one-time, non-refundable)",
    freeDemo: true,
    fees: [
      { name: "Class 7–10 (School Classes)", price: "₹1,000/month" },
      { name: "Class 11–12 (School Classes)", price: "₹1,200/month" },
      { name: "Basic Computer / MS Office Internet (2M)", price: "₹700/mo = ₹1,400 total" },
      { name: "MS Office Full Course (5M)", price: "₹700/mo = ₹3,500 total" },
      { name: "Computer & Office Full (7M)", price: "₹800/mo = ₹5,600 total" },
      { name: "Web Dev Foundation (6M)", price: "₹800/mo = ₹4,800 total" },
      { name: "Web Dev Professional — HTML, CSS, JS, React (6M)", price: "₹900/mo = ₹3,600 total" },
      { name: "Advanced Web Dev — React JS, Tailwind etc. (6M)", price: "₹1,000/mo = ₹5,000 total" },
      { name: "C Programming (8M)", price: "₹800/mo = ₹6,400 total" },
      { name: "Java Programming (8M)", price: "₹1,000/mo = ₹8,000 total" },
      { name: "Python Programming (6M)", price: "₹1,000/mo = ₹5,000 total" },
      { name: "Advanced Programming Full Stack (12M)", price: "₹1,200/mo = ₹14,400 total" },
      { name: "Tally & Accounting", price: "₹1,200/month" },
    ],
    courses: [
      "Basic Computer",
      "MS Office (Word, Excel, PowerPoint)",
      "Advanced Excel (Formulas, Pivot, Dashboard)",
      "Internet & Email",
      "MS Access (Database Basics)",
      "HTML & CSS",
      "JavaScript",
      "Frontend Development (React JS, Tailwind CSS)",
      "C Programming",
      "Java Programming",
      "Python Programming",
      "Advanced Programming (Full Stack)",
      "MySQL Database",
      "Tally ERP & Accounting",
      "Basic Accounting & GST",
      "Scratch (for beginners)",
      "School Classes 7–12 (All Subjects)",
      "Mathematics (all levels)",
      "Science (Physics, Chemistry, Biology)",
      "English Grammar & Spoken English",
      "Social Science & GK",
    ],
    rules: [
      "Fees once paid are non-refundable.",
      "Regular attendance is compulsory.",
      "Parents should monitor student homework and practice.",
      "Tests will be conducted regularly.",
      "Certificate given after course completion.",
    ],
    features: [
      "Concept-Based Teaching — samjho, ratto mat!",
      "Personal Attention — chhote batches (Individual & Small Group)",
      "Weekly Tests & Progress Reports",
      "Board Exam Focused (CBSE & ICSE)",
      "Affordable Fees — no hidden charges",
      "Free Demo Class available!",
      "English Medium friendly",
      "Lab File & Project Support",
      "Career Guidance",
      "Morning, Afternoon & Evening batches available",
      "Certificate after course completion",
      "Practical Training — real projects!",
    ],
    students: {
      misbah: {
        name: "Misbah",
        nickname: "The Legend Who Tries! 😄",
        traits: [
          "Sometimes tells little lies... but everyone knows he's joking 😂",
          "But deep down — bahut accha student hai!",
          "Jab padhai karta hai toh sach mein bahut hard try karta hai 💪",
          "Problem hai — motivation jaldi khatam ho jaati hai uski",
          "Aman Sir kehte hain: 'Misbah ka dil sona hai, bas thoda polish karna hai!'",
          "WTC (World Test Cricket) ka bahut bada fan! 🏏",
          "Jab cricket ki baat aaye — ghante bhar baat kar sakta hai 😄",
        ],
      },
    },
  };

  // ════════════════════════════════════════════
  //  STATE
  // ════════════════════════════════════════════
  let aiOpen = false;
  let aiFirstOpen = true;
  let msgCount = 0;
  let userName = "";
  let hasGreeted = false;
  let conversationCount = 0;

  // ════════════════════════════════════════════
  //  STARS BACKGROUND
  // ════════════════════════════════════════════
  function initStars() {
    const se = document.getElementById("aiStars");
    if (!se) return;
    for (let i = 0; i < 35; i++) {
      const s = document.createElement("div");
      s.className = "ai-star";
      s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${Math.random()*3+1.5}s;animation-delay:${Math.random()*3}s;width:${Math.random()>0.8?3:2}px;height:${Math.random()>0.8?3:2}px;`;
      se.appendChild(s);
    }
  }

  // ════════════════════════════════════════════
  //  TOGGLE
  // ════════════════════════════════════════════
  window.aiToggle = function () {
    aiOpen = !aiOpen;
    const win = document.getElementById("aiWindow");
    if (win) win.classList.toggle("ai-open", aiOpen);
    if (aiOpen) {
      const badge = document.getElementById("aiNotifBadge");
      if (badge) badge.style.display = "none";
      if (aiFirstOpen) {
        aiFirstOpen = false;
        setTimeout(greetUser, 400);
      }
      setTimeout(() => {
        const inp = document.getElementById("aiInput");
        if (inp) inp.focus();
      }, 450);
    }
  };

  // ════════════════════════════════════════════
  //  MODE SWITCHER
  // ════════════════════════════════════════════
  window.setMode = function (el, mode) {
    document.querySelectorAll(".ai-mode-pill").forEach((p) => p.classList.remove("ai-active"));
    el.classList.add("ai-active");
    const msgs = {
      general: "💬 <strong>General mode!</strong> Kuch bhi poochho — science, history, GK, jokes, ya institute ke baare mein! 😄",
      courses: "📚 <strong>Courses mode!</strong> Fees, syllabus, registration, demo class — sab pata hai mujhe! 🤓",
      cs: "💻 <strong>CS/Coding mode!</strong> Python, Java, HTML, databases, algorithms — lao apne sawaal! 🔥",
      math: "📐 <strong>Maths mode!</strong> Simple se leke advanced tak — calculations, formulas, step-by-step solutions! 🧮",
      fun: "🎉 <strong>Fun mode!</strong> Jokes, riddles, fun facts, aur Misbah ke kisse! 😜",
    };
    addBotMsg(msgs[mode] || msgs.general);
  };

  // ════════════════════════════════════════════
  //  GREETING
  // ════════════════════════════════════════════
  function greetUser() {
    const hour = new Date().getHours();
    let timeGreet = "Hello";
    if (hour >= 5 && hour < 12) timeGreet = "🌅 Good Morning";
    else if (hour >= 12 && hour < 17) timeGreet = "☀️ Good Afternoon";
    else if (hour >= 17 && hour < 21) timeGreet = "🌆 Good Evening";
    else timeGreet = "🌙 Good Night (late ho raha hai, so jao! 😄)";

    addBotMsg(
      `<span class="aie">🎉</span><strong>${timeGreet}! Main hoon BrainBot!</strong> 🤖✨<br><br>
      Aman Sir ne mujhe banaya hai — <strong>FuturePath Learning Institute</strong> ke liye!<br><br>
      Main tere kaam aa sakta hoon:<br>
      🧪 <strong>Science</strong> — physics, chemistry, biology<br>
      📐 <strong>Maths</strong> — basic se advanced, sab kuch<br>
      🧮 <strong>Calculator</strong> — hard se hard calculation bhi!<br>
      💻 <strong>Coding</strong> — Python, Java, HTML, CSS, JS, React<br>
      🌍 <strong>GK & Capitals</strong> — 100+ countries, history, facts<br>
      📊 <strong>MS Office & Tally</strong><br>
      🏫 <strong>Institute info</strong> — fees, courses, admission, form<br>
      😂 <strong>Jokes & Fun</strong> — thoda haas lo bhi!<br>
      💬 <strong>Casual baat</strong> — bhai ki tarah baat karo!<br><br>
      <em>Kya poochna hai? Seedha likho! 👇</em>`
    );
    setTimeout(() => {
      addBotMsg("Ek kaam karo — pehle apna naam batao! 😊 Isse main personally address kar sakta hoon tujhe! 🙌");
    }, 2000);
  }

  // ════════════════════════════════════════════
  //  MESSAGE RENDERING
  // ════════════════════════════════════════════
  function addBotMsg(html) {
    const el = document.getElementById("aiMessages");
    if (!el) return;
    const d = document.createElement("div");
    d.className = "ai-msg";
    const av = document.createElement("div");
    av.className = "ai-msg-avatar";
    av.textContent = "🤖";
    const b = document.createElement("div");
    b.className = "ai-bubble" + (msgCount % 6 === 0 ? " ai-rainbow" : "");
    b.innerHTML = html;
    d.appendChild(av);
    d.appendChild(b);
    el.appendChild(d);
    el.scrollTop = el.scrollHeight;
    msgCount++;
  }

  function addUserMsg(text) {
    const el = document.getElementById("aiMessages");
    if (!el) return;
    const d = document.createElement("div");
    d.className = "ai-msg ai-user";
    const av = document.createElement("div");
    av.className = "ai-msg-avatar";
    av.textContent = "🧑";
    const b = document.createElement("div");
    b.className = "ai-bubble";
    b.textContent = text;
    d.appendChild(b);
    d.appendChild(av);
    el.appendChild(d);
    el.scrollTop = el.scrollHeight;
  }

  function showTyping() {
    const el = document.getElementById("aiMessages");
    if (!el) return;
    const d = document.createElement("div");
    d.className = "ai-typing";
    d.id = "aiTypingInd";
    d.innerHTML = `<div class="ai-msg-avatar">🤖</div><div class="ai-typing-dots"><span></span><span></span><span></span></div>`;
    el.appendChild(d);
    el.scrollTop = el.scrollHeight;
  }

  function hideTyping() {
    const t = document.getElementById("aiTypingInd");
    if (t) t.remove();
  }

  // ════════════════════════════════════════════
  //  EMOJI RAIN
  // ════════════════════════════════════════════
  function doEmojiRain(emojis) {
    const c = document.getElementById("aiEmojiRain");
    if (!c) return;
    for (let i = 0; i < 14; i++) {
      setTimeout(() => {
        const e = document.createElement("div");
        e.className = "ai-rain-emoji";
        e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        e.style.left = Math.random() * 90 + "%";
        e.style.animationDuration = Math.random() * 1.5 + 1 + "s";
        e.style.animationDelay = Math.random() * 0.5 + "s";
        e.style.fontSize = Math.random() * 1.2 + 1 + "rem";
        c.appendChild(e);
        setTimeout(() => e.remove(), 2500);
      }, i * 80);
    }
  }

  // ════════════════════════════════════════════
  //  HELPER MATH FUNCTIONS
  // ════════════════════════════════════════════
  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }
  function checkPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
  }

  // ════════════════════════════════════════════
  //  FUZZY TYPO FIXER
  // ════════════════════════════════════════════
  function fixTypos(input) {
    return input
      .replace(/photosinthesis|fotosynthesis|photosythesis|photosyntesis/gi, "photosynthesis")
      .replace(/newten|nuton|nyuton|newtin/gi, "newton")
      .replace(/gravty|graviti|gravety|gravitey/gi, "gravity")
      .replace(/electricty|electrcity|elektrisity|electriciti/gi, "electricity")
      .replace(/algebera|algabra|algbra|aljebra/gi, "algebra")
      .replace(/trignometry|trigonometri|trignometri|triganometry/gi, "trigonometry")
      .replace(/piethagoras|pithagorass|pythagorss|pitagoras/gi, "pythagoras")
      .replace(/percntage|precentage|percntge|percentege/gi, "percentage")
      .replace(/caclulate|calcualte|claculate|calculte/gi, "calculate")
      .replace(/programing|progrming|progranning|programmin/gi, "programming")
      .replace(/pyhton|pythn|phyton|pyton/gi, "python")
      .replace(/javascrip|javasript|javscript|javascritp/gi, "javascript")
      .replace(/\braect\b|\breactj\b/gi, "react")
      .replace(/tailwnd|tailwid|tailwind css/gi, "tailwind")
      .replace(/histry|histori|hstory/gi, "history")
      .replace(/admision|amission|admissoin/gi, "admission")
      .replace(/certficate|certiifcate|certifcate|sertificate/gi, "certificate")
      .replace(/acounting|accountng|accunting/gi, "accounting")
      .replace(/capitl|captal|captial|capitel/gi, "capital")
      .replace(/counrty|cuntry|coutnry|countri/gi, "country")
      .replace(/oxigen|oxgen|oxijen|oksigen/gi, "oxygen")
      .replace(/nitogen|nitrgen|nitragen/gi, "nitrogen")
      .replace(/magnetsim|magnatism|magnetizm/gi, "magnetism")
      .replace(/probablity|probabilty|probibility/gi, "probability")
      .replace(/statistcs|statisics|statistic/gi, "statistics")
      .replace(/kya h\b|kya ha\b|kya haii/gi, "kya hai")
      .replace(/\bwats\b|\bwht is\b/gi, "what is");
  }

  // ════════════════════════════════════════════
  //  WORLD CAPITALS DATABASE
  // ════════════════════════════════════════════
  const WORLD_CAPITALS = {
    // ── Asia ──
    india: { capital: "New Delhi", flag: "🇮🇳", continent: "Asia" },
    china: { capital: "Beijing", flag: "🇨🇳", continent: "Asia" },
    japan: { capital: "Tokyo", flag: "🇯🇵", continent: "Asia" },
    pakistan: { capital: "Islamabad", flag: "🇵🇰", continent: "Asia" },
    bangladesh: { capital: "Dhaka", flag: "🇧🇩", continent: "Asia" },
    srilanka: { capital: "Sri Jayawardenepura Kotte", flag: "🇱🇰", continent: "Asia" },
    nepal: { capital: "Kathmandu", flag: "🇳🇵", continent: "Asia" },
    bhutan: { capital: "Thimphu", flag: "🇧🇹", continent: "Asia" },
    afghanistan: { capital: "Kabul", flag: "🇦🇫", continent: "Asia" },
    myanmar: { capital: "Naypyidaw", flag: "🇲🇲", continent: "Asia" },
    thailand: { capital: "Bangkok", flag: "🇹🇭", continent: "Asia" },
    vietnam: { capital: "Hanoi", flag: "🇻🇳", continent: "Asia" },
    indonesia: { capital: "Jakarta", flag: "🇮🇩", continent: "Asia" },
    malaysia: { capital: "Kuala Lumpur", flag: "🇲🇾", continent: "Asia" },
    singapore: { capital: "Singapore City", flag: "🇸🇬", continent: "Asia" },
    philippines: { capital: "Manila", flag: "🇵🇭", continent: "Asia" },
    southkorea: { capital: "Seoul", flag: "🇰🇷", continent: "Asia" },
    northkorea: { capital: "Pyongyang", flag: "🇰🇵", continent: "Asia" },
    iran: { capital: "Tehran", flag: "🇮🇷", continent: "Asia" },
    iraq: { capital: "Baghdad", flag: "🇮🇶", continent: "Asia" },
    saudiarabia: { capital: "Riyadh", flag: "🇸🇦", continent: "Asia" },
    uae: { capital: "Abu Dhabi", flag: "🇦🇪", continent: "Asia" },
    israel: { capital: "Jerusalem", flag: "🇮🇱", continent: "Asia" },
    turkey: { capital: "Ankara", flag: "🇹🇷", continent: "Asia" },
    russia: { capital: "Moscow", flag: "🇷🇺", continent: "Europe/Asia" },
    cambodia: { capital: "Phnom Penh", flag: "🇰🇭", continent: "Asia" },
    laos: { capital: "Vientiane", flag: "🇱🇦", continent: "Asia" },
    mongolia: { capital: "Ulaanbaatar", flag: "🇲🇳", continent: "Asia" },
    kazakhstan: { capital: "Astana", flag: "🇰🇿", continent: "Asia" },
    uzbekistan: { capital: "Tashkent", flag: "🇺🇿", continent: "Asia" },
    // ── Europe ──
    uk: { capital: "London", flag: "🇬🇧", continent: "Europe" },
    france: { capital: "Paris", flag: "🇫🇷", continent: "Europe" },
    germany: { capital: "Berlin", flag: "🇩🇪", continent: "Europe" },
    italy: { capital: "Rome", flag: "🇮🇹", continent: "Europe" },
    spain: { capital: "Madrid", flag: "🇪🇸", continent: "Europe" },
    portugal: { capital: "Lisbon", flag: "🇵🇹", continent: "Europe" },
    netherlands: { capital: "Amsterdam", flag: "🇳🇱", continent: "Europe" },
    belgium: { capital: "Brussels", flag: "🇧🇪", continent: "Europe" },
    switzerland: { capital: "Bern", flag: "🇨🇭", continent: "Europe" },
    austria: { capital: "Vienna", flag: "🇦🇹", continent: "Europe" },
    sweden: { capital: "Stockholm", flag: "🇸🇪", continent: "Europe" },
    norway: { capital: "Oslo", flag: "🇳🇴", continent: "Europe" },
    denmark: { capital: "Copenhagen", flag: "🇩🇰", continent: "Europe" },
    finland: { capital: "Helsinki", flag: "🇫🇮", continent: "Europe" },
    poland: { capital: "Warsaw", flag: "🇵🇱", continent: "Europe" },
    ukraine: { capital: "Kyiv", flag: "🇺🇦", continent: "Europe" },
    greece: { capital: "Athens", flag: "🇬🇷", continent: "Europe" },
    czechrepublic: { capital: "Prague", flag: "🇨🇿", continent: "Europe" },
    hungary: { capital: "Budapest", flag: "🇭🇺", continent: "Europe" },
    romania: { capital: "Bucharest", flag: "🇷🇴", continent: "Europe" },
    serbia: { capital: "Belgrade", flag: "🇷🇸", continent: "Europe" },
    croatia: { capital: "Zagreb", flag: "🇭🇷", continent: "Europe" },
    // ── Americas ──
    usa: { capital: "Washington D.C.", flag: "🇺🇸", continent: "North America" },
    canada: { capital: "Ottawa", flag: "🇨🇦", continent: "North America" },
    mexico: { capital: "Mexico City", flag: "🇲🇽", continent: "North America" },
    brazil: { capital: "Brasília", flag: "🇧🇷", continent: "South America" },
    argentina: { capital: "Buenos Aires", flag: "🇦🇷", continent: "South America" },
    colombia: { capital: "Bogotá", flag: "🇨🇴", continent: "South America" },
    chile: { capital: "Santiago", flag: "🇨🇱", continent: "South America" },
    peru: { capital: "Lima", flag: "🇵🇪", continent: "South America" },
    venezuela: { capital: "Caracas", flag: "🇻🇪", continent: "South America" },
    cuba: { capital: "Havana", flag: "🇨🇺", continent: "North America" },
    // ── Africa ──
    nigeria: { capital: "Abuja", flag: "🇳🇬", continent: "Africa" },
    ethiopia: { capital: "Addis Ababa", flag: "🇪🇹", continent: "Africa" },
    kenya: { capital: "Nairobi", flag: "🇰🇪", continent: "Africa" },
    southafrica: { capital: "Pretoria", flag: "🇿🇦", continent: "Africa" },
    egypt: { capital: "Cairo", flag: "🇪🇬", continent: "Africa" },
    ghana: { capital: "Accra", flag: "🇬🇭", continent: "Africa" },
    morocco: { capital: "Rabat", flag: "🇲🇦", continent: "Africa" },
    algeria: { capital: "Algiers", flag: "🇩🇿", continent: "Africa" },
    tanzania: { capital: "Dodoma", flag: "🇹🇿", continent: "Africa" },
    // ── Oceania ──
    australia: { capital: "Canberra", flag: "🇦🇺", continent: "Oceania" },
    newzealand: { capital: "Wellington", flag: "🇳🇿", continent: "Oceania" },
    fiji: { capital: "Suva", flag: "🇫🇯", continent: "Oceania" },
  };

  // Aliases for common misspellings / alternate names
  const CAPITAL_ALIASES = {
    "united states": "usa", "america": "usa", "united states of america": "usa",
    "united kingdom": "uk", "england": "uk", "britain": "uk", "great britain": "uk",
    "south korea": "southkorea", "korea": "southkorea",
    "north korea": "northkorea",
    "saudi arabia": "saudiarabia", "saudi": "saudiarabia",
    "new zealand": "newzealand",
    "south africa": "southafrica",
    "sri lanka": "srilanka", "srilnka": "srilanka", "sri lnka": "srilanka",
    "czech republic": "czechrepublic", "czech": "czechrepublic",
    "uae": "uae", "dubai": "uae", "emirates": "uae", "united arab emirates": "uae",
    "chna": "china", "chin": "china",
    "farance": "france", "franche": "france",
    "germny": "germany", "germnay": "germany",
    "jaapan": "japan", "jpan": "japan", "japn": "japan",
    "russa": "russia", "rusia": "russia",
    "australi": "australia", "austraila": "australia",
    "pakstan": "pakistan", "pakisten": "pakistan",
  };

  function getCapitalAnswer(q) {
    const clean = q.toLowerCase().replace(/[^a-z\s]/g, " ").trim();

    // Check aliases first
    for (const [alias, key] of Object.entries(CAPITAL_ALIASES)) {
      if (clean.includes(alias)) {
        return formatCapital(key, WORLD_CAPITALS[key]);
      }
    }
    // Check direct keys
    for (const key of Object.keys(WORLD_CAPITALS)) {
      if (clean.includes(key)) {
        return formatCapital(key, WORLD_CAPITALS[key]);
      }
    }
    return null;
  }

  function formatCapital(key, data) {
    const name = key.replace(/([a-z])([A-Z])/g, "$1 $2");
    const display = name.charAt(0).toUpperCase() + name.slice(1);
    return `<span class="aie">${data.flag}</span><strong>${data.flag} ${display}</strong><br><br>
🏛️ Capital: <strong style="color:#fbbf24;font-size:1.15em;">${data.capital}</strong><br>
🌍 Continent: ${data.continent}<br><br>
<em>😊 Aur kisi desh ka capital poochna hai? Bas likho! 🌏</em>`;
  }

  // ════════════════════════════════════════════
  //  ADVANCED CALCULATOR ENGINE
  // ════════════════════════════════════════════
  function tryCalculate(q) {
    const raw = q.trim();
    let expr = raw
      .replace(/×/g, "*").replace(/÷/g, "/")
      .replace(/(\d)\s*x\s*(\d)/gi, "$1*$2")
      .replace(/(\d)\s*X\s*(\d)/g, "$1*$2");

    // Multiply words
    const timesMatch = raw.match(/(\d+\.?\d*)\s*(?:times|multiplied by|into|guna)\s*(\d+\.?\d*)/i);
    if (timesMatch) {
      const a = parseFloat(timesMatch[1]), b = parseFloat(timesMatch[2]);
      return `🧮 <strong>${a} × ${b} = <span style="color:#fbbf24;font-size:1.1em;">${a * b}</span></strong><br><br><em>Multiplication ready! 😊</em>`;
    }

    // Divide words
    const divMatch = raw.match(/(\d+\.?\d*)\s*(?:divided by|bhaag|by)\s*(\d+\.?\d*)/i);
    if (divMatch) {
      const a = parseFloat(divMatch[1]), b = parseFloat(divMatch[2]);
      if (b === 0) return `🧮 Zero se divide nahi kar sakte! Math ka rule hai! 😅`;
      const res = parseFloat((a / b).toFixed(6));
      return `🧮 <strong>${a} ÷ ${b} = <span style="color:#fbbf24;font-size:1.1em;">${res}</span></strong>`;
    }

    // Percentage of
    const pctOf = raw.match(/(\d+\.?\d*)\s*(?:%|percent)\s*(?:of|ka)\s*(\d+\.?\d*)/i);
    if (pctOf) {
      const pct = parseFloat(pctOf[1]), num = parseFloat(pctOf[3] || pctOf[2]);
      const res = parseFloat(((pct / 100) * num).toFixed(4));
      return `🧮 <strong>${pct}% of ${num} = <span style="color:#fbbf24;">${res}</span></strong><br><br><em>Formula: (${pct} ÷ 100) × ${num} = ${res}</em> 😊`;
    }

    // Percentage increase/decrease
    const pctIncrease = raw.match(/percentage\s*(?:increase|decrease)\s*from\s*(\d+\.?\d*)\s*to\s*(\d+\.?\d*)/i);
    if (pctIncrease) {
      const old = parseFloat(pctIncrease[1]), nw = parseFloat(pctIncrease[2]);
      const res = (((nw - old) / old) * 100).toFixed(2);
      const dir = nw > old ? "📈 increase" : "📉 decrease";
      return `🧮 <strong>Percentage ${dir}: <span style="color:#fbbf24;">${Math.abs(res)}%</span></strong><br><br><em>Formula: ((${nw} - ${old}) ÷ ${old}) × 100 = ${res}%</em>`;
    }

    // Square Root
    const sqrtMatch = raw.match(/(?:sqrt|square\s*root\s*of|√|varg\s*mool)\s*\(?(\d+\.?\d*)\)?/i);
    if (sqrtMatch) {
      const n = parseFloat(sqrtMatch[1]);
      const res = Math.sqrt(n);
      const isWhole = Number.isInteger(res);
      return `🧮 <strong>√${n} = <span style="color:#fbbf24;">${isWhole ? res : res.toFixed(6)}</span></strong><br><br>${isWhole ? "✅ <strong>Perfect square hai!</strong><br>" : ""}jo number khud se multiply hoke ${n} banta hai = ${isWhole ? res : res.toFixed(4)} 😊`;
    }

    // Cube Root
    const cbrtMatch = raw.match(/(?:cbrt|cube\s*root\s*of|∛)\s*\(?(\d+\.?\d*)\)?/i);
    if (cbrtMatch) {
      const n = parseFloat(cbrtMatch[1]);
      const res = Math.cbrt(n);
      return `🧮 <strong>∛${n} = <span style="color:#fbbf24;">${parseFloat(res.toFixed(6))}</span></strong>`;
    }

    // Power
    const powerMatch = raw.match(/(\d+\.?\d*)\s*(?:\^|\*\*|to\s*the\s*power\s*(?:of)?|ki\s*power|raised\s*to)\s*(\d+\.?\d*)/i);
    if (powerMatch) {
      const base = parseFloat(powerMatch[1]), exp = parseFloat(powerMatch[2]);
      return `🧮 <strong>${base}^${exp} = <span style="color:#fbbf24;">${Math.pow(base, exp)}</span></strong><br><br><em>${base} को ${exp} baar multiply karo 💪</em>`;
    }

    // Log
    const logMatch = raw.match(/(?:log|log10)\s*\(?(\d+\.?\d*)\)?/i);
    if (logMatch) {
      const n = parseFloat(logMatch[1]);
      return `🧮 <strong>log(${n}) = <span style="color:#fbbf24;">${parseFloat(Math.log10(n).toFixed(6))}</span></strong>`;
    }
    const lnMatch = raw.match(/(?:ln|natural\s*log)\s*\(?(\d+\.?\d*)\)?/i);
    if (lnMatch) {
      const n = parseFloat(lnMatch[1]);
      return `🧮 <strong>ln(${n}) = <span style="color:#fbbf24;">${parseFloat(Math.log(n).toFixed(6))}</span></strong>`;
    }

    // Geometry
    const circleArea = raw.match(/area\s*(?:of)?\s*circle\s*(?:r(?:adius)?\s*=?\s*)(\d+\.?\d*)/i);
    if (circleArea) {
      const r = parseFloat(circleArea[1]);
      return `🧮 <strong>Circle (r=${r}):</strong><br>📐 Area = πr² = <span style="color:#fbbf24;">${(Math.PI * r * r).toFixed(4)}</span> sq units<br>📏 Circumference = 2πr = <span style="color:#fbbf24;">${(2 * Math.PI * r).toFixed(4)}</span> units`;
    }
    const rectArea = raw.match(/area\s*(?:of)?\s*rect(?:angle)?\s*(\d+\.?\d*)\s*[x×,\s*]\s*(\d+\.?\d*)/i);
    if (rectArea) {
      const l = parseFloat(rectArea[1]), b2 = parseFloat(rectArea[2]);
      return `🧮 <strong>Rectangle (${l} × ${b2}):</strong><br>📐 Area = <span style="color:#fbbf24;">${l * b2}</span> sq units<br>📏 Perimeter = <span style="color:#fbbf24;">${2 * (l + b2)}</span> units`;
    }
    const squareArea = raw.match(/area\s*(?:of)?\s*square\s*(?:side\s*=?\s*|a\s*=?\s*)(\d+\.?\d*)/i);
    if (squareArea) {
      const a = parseFloat(squareArea[1]);
      return `🧮 <strong>Square (side=${a}):</strong><br>📐 Area = <span style="color:#fbbf24;">${a * a}</span> sq units<br>📏 Perimeter = <span style="color:#fbbf24;">${4 * a}</span> units`;
    }
    const triangleArea = raw.match(/area\s*(?:of)?\s*triangle\s*(?:b(?:ase)?\s*=?\s*)(\d+\.?\d*)\s*(?:h(?:eight)?\s*=?\s*)(\d+\.?\d*)/i);
    if (triangleArea) {
      const b3 = parseFloat(triangleArea[1]), h = parseFloat(triangleArea[2]);
      return `🧮 <strong>Triangle (base=${b3}, height=${h}):</strong><br>📐 Area = ½ × b × h = <span style="color:#fbbf24;">${0.5 * b3 * h}</span> sq units`;
    }
    const cylinderVol = raw.match(/volume\s*(?:of)?\s*cylinder\s*r\s*=?\s*(\d+\.?\d*)\s*h\s*=?\s*(\d+\.?\d*)/i);
    if (cylinderVol) {
      const r = parseFloat(cylinderVol[1]), h = parseFloat(cylinderVol[2]);
      return `🧮 <strong>Cylinder (r=${r}, h=${h}):</strong><br>📐 Volume = πr²h = <span style="color:#fbbf24;">${(Math.PI * r * r * h).toFixed(4)}</span> cubic units`;
    }
    const sphereVol = raw.match(/volume\s*(?:of)?\s*sphere\s*r\s*=?\s*(\d+\.?\d*)/i);
    if (sphereVol) {
      const r = parseFloat(sphereVol[1]);
      return `🧮 <strong>Sphere (r=${r}):</strong><br>📐 Volume = 4/3 × πr³ = <span style="color:#fbbf24;">${((4 / 3) * Math.PI * r * r * r).toFixed(4)}</span> cubic units`;
    }

    // Simple Interest
    const siMatch = raw.match(/simple\s*interest|SI\b/i);
    if (siMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 3) {
        const P = parseFloat(nums[0]), R = parseFloat(nums[1]), T = parseFloat(nums[2]);
        const si = (P * R * T) / 100;
        return `🧮 <strong>Simple Interest:</strong><br>P=₹${P} | R=${R}% | T=${T}yrs<br>📐 SI = <span style="color:#fbbf24;">₹${si}</span><br>💰 Total = <span style="color:#fbbf24;">₹${P + si}</span>`;
      }
    }

    // Compound Interest
    const ciMatch = raw.match(/compound\s*interest|CI\b/i);
    if (ciMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 3) {
        const P = parseFloat(nums[0]), R = parseFloat(nums[1]), T = parseFloat(nums[2]);
        const amount = P * Math.pow(1 + R / 100, T);
        const ci = amount - P;
        return `🧮 <strong>Compound Interest:</strong><br>P=₹${P} | R=${R}% | T=${T}yrs<br>📐 Amount = <span style="color:#fbbf24;">₹${amount.toFixed(2)}</span><br>💰 CI = <span style="color:#fbbf24;">₹${ci.toFixed(2)}</span>`;
      }
    }

    // HCF/LCM
    const hcfMatch = raw.match(/(?:hcf|gcd)\s*(?:of)?\s*(\d+)\s*(?:and|,|\s+)\s*(\d+)/i);
    if (hcfMatch) {
      const a = parseInt(hcfMatch[1]), b = parseInt(hcfMatch[2]);
      const g = gcd(a, b);
      return `🧮 <strong>HCF of ${a} and ${b} = <span style="color:#fbbf24;">${g}</span></strong><br>Bonus: LCM = <span style="color:#fbbf24;">${(a * b) / g}</span>`;
    }
    const lcmMatch = raw.match(/lcm\s*(?:of)?\s*(\d+)\s*(?:and|,|\s+)\s*(\d+)/i);
    if (lcmMatch) {
      const a = parseInt(lcmMatch[1]), b = parseInt(lcmMatch[2]);
      const g = gcd(a, b);
      return `🧮 <strong>LCM of ${a} and ${b} = <span style="color:#fbbf24;">${(a * b) / g}</span></strong><br>Bonus: HCF = <span style="color:#fbbf24;">${g}</span>`;
    }

    // Factorial
    const factMatch = raw.match(/(\d+)\s*!|factorial\s*(?:of)?\s*(\d+)/i);
    if (factMatch) {
      const n = parseInt(factMatch[1] || factMatch[2]);
      if (n > 20) return `🧮 ${n}! bahut bada hai — astronomically large! 😅`;
      const res = factorial(n);
      return `🧮 <strong>${n}! = <span style="color:#fbbf24;">${res}</span></strong><br><br><em>${Array.from({ length: n }, (_, i) => n - i).join(" × ")} = ${res}</em>`;
    }

    // Pythagoras
    const pythagorasMatch = raw.match(/pythagoras|hypotenuse/i);
    if (pythagorasMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 2) {
        const a = parseFloat(nums[0]), b = parseFloat(nums[1]);
        const c = Math.sqrt(a * a + b * b);
        return `🧮 <strong>Pythagoras:</strong><br>a=${a}, b=${b}<br>c = √(${a}² + ${b}²) = √${a * a + b * b} = <span style="color:#fbbf24;">${parseFloat(c.toFixed(4))}</span><br><br><em>a² + b² = c² 📐</em>`;
      }
    }

    // Prime check
    const primeCheck = raw.match(/(?:is\s*)?(\d+)\s*(?:prime|prime\s*number)/i);
    if (primeCheck) {
      const n = parseInt(primeCheck[1]);
      const isPrime = checkPrime(n);
      return `🧮 <strong>${n} ${isPrime ? "✅ PRIME hai!" : "❌ Prime nahi hai."}</strong><br><br><em>${isPrime ? `${n} ko sirf 1 aur ${n} se divide kar sakte hain!` : `${n} ke zyada factors hain.`}</em>`;
    }

    // Statistics
    const statsMatch = raw.match(/mean|median|mode|average\s*of/i);
    if (statsMatch) {
      const nums = raw.match(/\d+\.?\d*/g);
      if (nums && nums.length >= 2) {
        const data = nums.map(Number).sort((a, b) => a - b);
        const mean = (data.reduce((s, x) => s + x, 0) / data.length).toFixed(2);
        const mid = Math.floor(data.length / 2);
        const median = data.length % 2 === 0 ? ((data[mid - 1] + data[mid]) / 2).toFixed(2) : data[mid];
        const freq = {}; data.forEach(n => freq[n] = (freq[n] || 0) + 1);
        const mode = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
        return `🧮 <strong>Statistics for [${data.join(", ")}]:</strong><br><br>
📊 Mean (Average) = <span style="color:#fbbf24;">${mean}</span><br>
📍 Median (Middle) = <span style="color:#fbbf24;">${median}</span><br>
🔁 Mode (Most frequent) = <span style="color:#fbbf24;">${mode}</span><br>
📉 Range = <span style="color:#fbbf24;">${data[data.length - 1] - data[0]}</span>`;
      }
    }

    // Trig
    const sinMatch = raw.match(/sin\s*\(?\s*(\d+\.?\d*)\s*°?\)?/i);
    if (sinMatch) { const d = parseFloat(sinMatch[1]); return `🧮 <strong>sin(${d}°) = <span style="color:#fbbf24;">${parseFloat(Math.sin(d * Math.PI / 180).toFixed(6))}</span></strong>`; }
    const cosMatch = raw.match(/cos\s*\(?\s*(\d+\.?\d*)\s*°?\)?/i);
    if (cosMatch) { const d = parseFloat(cosMatch[1]); return `🧮 <strong>cos(${d}°) = <span style="color:#fbbf24;">${parseFloat(Math.cos(d * Math.PI / 180).toFixed(6))}</span></strong>`; }
    const tanMatch = raw.match(/tan\s*\(?\s*(\d+\.?\d*)\s*°?\)?/i);
    if (tanMatch) { const d = parseFloat(tanMatch[1]); return `🧮 <strong>tan(${d}°) = <span style="color:#fbbf24;">${parseFloat(Math.tan(d * Math.PI / 180).toFixed(6))}</span></strong>`; }

    // Temperature conversion
    const celToFah = raw.match(/(\d+\.?\d*)\s*(?:celsius|°c|c)\s*(?:to|in)\s*(?:fahrenheit|°f|f)/i);
    if (celToFah) {
      const c = parseFloat(celToFah[1]);
      const f = (c * 9 / 5 + 32).toFixed(2);
      return `🌡️ <strong>${c}°C = <span style="color:#fbbf24;">${f}°F</span></strong><br><em>Formula: (°C × 9/5) + 32</em>`;
    }
    const fahToCel = raw.match(/(\d+\.?\d*)\s*(?:fahrenheit|°f|f)\s*(?:to|in)\s*(?:celsius|°c|c)/i);
    if (fahToCel) {
      const f = parseFloat(fahToCel[1]);
      const c = ((f - 32) * 5 / 9).toFixed(2);
      return `🌡️ <strong>${f}°F = <span style="color:#fbbf24;">${c}°C</span></strong><br><em>Formula: (°F - 32) × 5/9</em>`;
    }

    // Speed / Distance / Time
    const speedMatch = raw.match(/speed|distance|time/i);
    if (speedMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 2) {
        if (/speed/.test(raw) && nums.length >= 2) {
          const d = parseFloat(nums[0]), t = parseFloat(nums[1]);
          return `🏃 <strong>Speed = Distance ÷ Time</strong><br>= ${d} ÷ ${t} = <span style="color:#fbbf24;">${parseFloat((d / t).toFixed(4))}</span> units/hr<br><br><em>D=S×T | S=D/T | T=D/S</em>`;
        }
      }
    }

    // Safe arithmetic eval
    let cleanExpr = expr.replace(/[^0-9+\-*/().%\s]/g, "").trim();
    if (/^[\d\s+\-*/().%]+$/.test(cleanExpr) && /[+\-*/]/.test(cleanExpr)) {
      try {
        const result = Function('"use strict"; return (' + cleanExpr + ')')();
        if (typeof result === "number" && isFinite(result)) {
          const rounded = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
          return `🧮 <strong>${raw} = <span style="color:#fbbf24;font-size:1.15em;">${rounded}</span></strong><br><br>Calculator ready! Aur kya? 😄`;
        }
      } catch (_) {}
    }
    return null;
  }

  // ════════════════════════════════════════════
  //  KNOWLEDGE BASE
  // ════════════════════════════════════════════
  const KB = {

    // ── INSTITUTE ──
    amanSir: `<span class="aie">👨‍💻</span><strong>THE LEGEND — Aman Sir! 🦸‍♂️</strong><br><br>
<strong>Full Name:</strong> Aman Khan<br>
<strong>Role:</strong> Front-end Developer + Passionate Teacher + Creator of BrainBot 🤖<br>
<strong>Institute:</strong> FuturePath Learning Institute<br>
<strong>Location:</strong> Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058<br><br>
<strong>Skills:</strong><br>
💻 Python, Java, C Language | 🌐 HTML, CSS, JavaScript, React, Tailwind<br>
🗄️ MySQL Database | 📊 MS Office Suite | 🧾 Tally & Accounting<br>
🤖 AI Development (mujhe banaya! 😄)<br><br>
<strong>Teaching Style:</strong><br>
✅ Concept-based — samjho, ratto mat!<br>
✅ Personal attention — chhote batches<br>
✅ Regular tests & progress reports<br>
✅ Free demo class available!<br>
✅ Certificate after completion!<br><br>
<strong>Contact:</strong><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;font-weight:700;">WhatsApp karo</a><br>
💼 <a href="https://www.linkedin.com/in/aman-khan-210187324" target="_blank" style="color:#60a5fa;">LinkedIn</a><br>
🌐 <a href="https://aman00369.github.io/FuturePath-Learning-Institute/" target="_blank" style="color:#a78bfa;">Website</a><br><br>
<em>😄 Aman Sir itne dedicated hain ki unhone ek poora AI bana diya students ke liye! Respect! 🙏</em>`,

    fees: () => {
      const cards = INSTITUTE.fees.map(f =>
        `<div class="ai-course-card"><span>📚 ${f.name}</span><span class="ai-course-price">${f.price}</span></div>`
      ).join("");
      return `<span class="aie">💰</span><strong>FuturePath — Complete Fee Structure!</strong><br><br>${cards}<br>
        💳 One-time Admission Fee: <strong>₹300 only</strong><br>
        ✅ No hidden charges! | ✅ Free Demo Class! | ✅ Certificate after course!<br><br>
        📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> — call karo abhi! 🏃`;
    },

    location: `<span class="aie">📍</span><strong>FuturePath ka Address:</strong><br><br>
<strong>Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058</strong><br><br>
🚌 Auto/Bus se aasaan pahunch!<br>
🗺️ <a href="https://maps.google.com/?q=Phoolbagan+Panihati+Kolkata" target="_blank" style="color:#fbbf24;">Google Maps pe dekho</a><br><br>
<strong>📞 Call/WhatsApp:</strong> <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br><br>
<strong>⏰ Batch Timings:</strong><br>
🌅 Morning: 7:00 AM – 10:00 AM<br>
☀️ Afternoon: 12:00 PM – 3:00 PM<br>
🌆 Evening: 5:00 PM – 8:00 PM`,

    admissionForm: `<span class="aie">📋</span><strong>FuturePath Learning Institute</strong><br>
<em>Computer Education • Programming • Practical Training Centre</em><br>
<strong>STUDENT ADMISSION FORM</strong><br><br>
<strong>📌 1. Student Information</strong><br>
Name | Father's Name | Date of Birth | Gender | Mobile | Email | Address<br><br>
<strong>📌 2. Educational Details</strong><br>
School/College | Stream | Class/Qualification | Previous Computer Knowledge<br><br>
<strong>📌 3. Course Selection:</strong><br>
💻 <u>Computer & Office:</u> Basic Computer | MS Office | Advanced Excel | Internet & Email | MS Access<br>
🌐 <u>Web Development:</u> HTML & CSS | JavaScript | React JS + Tailwind | Advanced Web Dev<br>
🖥️ <u>Programming:</u> C | Java | Python | Advanced Programming (Full Stack)<br>
🏫 <u>School Classes:</u> Class 7 | 8 | 9 | 10 | 11 | 12 | College<br><br>
<strong>📌 4. Fee Structure:</strong><br>
<div class="ai-course-card"><span>🖥️ Computer & Office (7M)</span><span class="ai-course-price">₹800/mo = ₹5,600</span></div>
<div class="ai-course-card"><span>🌐 Web Dev Foundation (6M)</span><span class="ai-course-price">₹800/mo = ₹4,800</span></div>
<div class="ai-course-card"><span>🌐 Web Dev Professional (6M)</span><span class="ai-course-price">₹900/mo = ₹3,600</span></div>
<div class="ai-course-card"><span>🌐 Advanced Web Dev (6M)</span><span class="ai-course-price">₹1,000/mo = ₹5,000</span></div>
<div class="ai-course-card"><span>💻 C Programming (8M)</span><span class="ai-course-price">₹800/mo = ₹6,400</span></div>
<div class="ai-course-card"><span>☕ Java Programming (8M)</span><span class="ai-course-price">₹1,000/mo = ₹8,000</span></div>
<div class="ai-course-card"><span>🐍 Python Programming (6M)</span><span class="ai-course-price">₹1,000/mo = ₹5,000</span></div>
<div class="ai-course-card"><span>🚀 Advanced Programming (12M)</span><span class="ai-course-price">₹1,200/mo = ₹14,400</span></div>
<div class="ai-course-card"><span>📚 Class 7–10 School</span><span class="ai-course-price">₹1,000/month</span></div>
<div class="ai-course-card"><span>📚 Class 11–12 School</span><span class="ai-course-price">₹1,200/month</span></div>
<br>💳 <strong>Admission Fee (One-Time): ₹300</strong><br><br>
<strong>📌 5. Payment:</strong> Cash | UPI | Online<br><br>
<strong>📌 6. Rules:</strong><br>
✅ Fees non-refundable | ✅ Regular attendance | ✅ Certificate after completion<br><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> &nbsp;|&nbsp;
🌐 <a href="https://aman00369.github.io/FuturePath-Learning-Institute/" target="_blank" style="color:#a78bfa;">Website</a><br>
📍 Near Taiba Club, Phoolbagan, Panihati, Kolkata`,

    misbah: () => {
      const s = INSTITUTE.students.misbah;
      doEmojiRain(["😂", "🏏", "🤣", "💪", "😅"]);
      return `<span class="aie">🏏</span><strong>Misbah — FuturePath ka Most Iconic Student!</strong><br><br>
Haan bhai — <strong>Misbah</strong>! 😄<br><br>
😂 ${s.traits[0]}<br>💛 ${s.traits[1]}<br>💪 ${s.traits[2]}<br>
😅 ${s.traits[3]}<br>🌟 ${s.traits[4]}<br>🏏 ${s.traits[5]}<br>😂 ${s.traits[6]}<br><br>
<strong>Aman Sir ka message:</strong><br>
<em>"Misbah, tu kar sakta hai — bas ek baar decide kar le ki rukna nahi! 🔥"</em><br><br>
<em>💡 Motivation aati jaati hai — but <strong>discipline</strong> hamesha kaam karti hai! 😄</em>`;
    },

    // ── SCIENCE ──
    oxygen: `<span class="aie">💨</span><strong>Oxygen (O₂) — Zindagi ka Gas!</strong><br><br>
🔵 <strong>Symbol:</strong> O | <strong>Atomic Number:</strong> 8 | <strong>State:</strong> Gas<br>
🌡️ <strong>Boiling Point:</strong> -183°C<br><br>
<strong>Oxygen kya karta hai?</strong><br>
🫁 Lungs O₂ leta hai → blood mein → energy banti hai<br>
🔥 Combustion (aag) ke liye zaroori<br>
🌿 Plants photosynthesis mein O₂ banati hain<br>
🏥 Hospitals mein patients ko pure O₂ dete hain<br><br>
<strong>Oxygen ke compounds:</strong><br>
💧 H₂O (Paani) | 💨 CO₂ (Carbon Dioxide) | 🔴 Fe₂O₃ (Zaang/Rust)<br><br>
<strong>Discovery:</strong> Carl Scheele (1772) & Joseph Priestley (1774)<br><br>
<em>😄 Hum ek din mein ~550 litres O₂ breathe karte hain! 🙏</em>`,

    hydrogen: `<span class="aie">⚗️</span><strong>Hydrogen (H₂) — Sabse Halka Element!</strong><br><br>
🔵 <strong>Symbol:</strong> H | <strong>Atomic Number:</strong> 1 | Sabse halka element!<br><br>
💧 H₂O = 2 Hydrogen + 1 Oxygen (paani!)<br>
🚀 Rockets mein fuel ke roop mein<br>
☀️ Sun mein hydrogen fusion se energy banti hai<br>
🔋 Hydrogen fuel cells — future of energy!<br><br>
<em>😄 Universe ka 75% hydrogen hai — hum star stuff mein rehte hain! 🌌</em>`,

    carbon: `<span class="aie">⚫</span><strong>Carbon (C) — Life ka Building Block!</strong><br><br>
🔵 <strong>Symbol:</strong> C | <strong>Atomic Number:</strong> 6<br><br>
<strong>Allotropes (Carbon ke forms):</strong><br>
💎 Diamond — sabse hard natural substance<br>
✏️ Graphite — pencil mein<br>
⚽ Fullerene C₆₀ — football shape!<br><br>
🌿 CO₂ = plants ka food | 🔥 Coal = fuel<br>
🧬 Saari living things carbon-based hain!<br><br>
<em>😄 Diamond aur pencil lead DONO carbon se bane hain — sirf arrangement different! 💎✏️</em>`,

    nitrogen: `<span class="aie">🌬️</span><strong>Nitrogen (N₂) — Hawa ka Raja!</strong><br><br>
🔵 <strong>Symbol:</strong> N | <strong>Atomic Number:</strong> 7<br>
📊 Hawa mein <strong>78%</strong> Nitrogen hai!<br><br>
🌱 Plants ke liye zaroori — protein banta hai<br>
❄️ Liquid Nitrogen: -196°C — bahut thanda!<br>
💥 Fertilizers mein use<br>
🍟 Chips packets mein N₂ bhara jaata hai (freshness ke liye!)<br><br>
<em>😄 Chips ka packet mostly nitrogen hai, chips kam! 😅</em>`,

    photosynthesis: `<span class="aie">🌿</span><strong>Photosynthesis — Plants ka Khana Banana!</strong><br><br>
<strong>Formula:</strong> CO₂ + H₂O + Sunlight → Glucose + O₂<br><br>
<strong>Step by step:</strong><br>
1️⃣ Stomata (chhote chhid) se CO₂ andar<br>
2️⃣ Roots se paani patte tak<br>
3️⃣ Chlorophyll sunlight pakadta hai<br>
4️⃣ Glucose banta hai (plant ka food!)<br>
5️⃣ Oxygen bahar — jo hum breathe karte hain! 🌬️<br><br>
🌿 Plants: CO₂ IN → O₂ OUT | 😮 Humans: O₂ IN → CO₂ OUT<br>
We need each other! 🤝<br><br>
<em>😄 Thank the plants for every breath! 🌳</em>`,

    newton: `<span class="aie">🍎</span><strong>Newton ke 3 Laws of Motion</strong><br><br>
<strong>📌 1st Law — Inertia:</strong><br>
"Jo cheez ruki hai, ruki rahegi — jo chal rahi hai, chalti rahegi — jab tak force na lage!"<br>
👉 Bus achanak ruke → aap aage jhuk jaate ho! 🚌<br><br>
<strong>📌 2nd Law — F = ma:</strong><br>
<code>Force = Mass × Acceleration</code><br>
👉 Bhaari cheez zyada force maangti hai! Truck vs Cycle 🚛<br><br>
<strong>📌 3rd Law — Action-Reaction:</strong><br>
"Har action ka equal aur opposite reaction hota hai!"<br>
👉 Jump karo → Ground aapko push karta hai upar! 🚀<br><br>
<em>😄 Seb ne Newton ko sikhaya — padhai kabhi bhi ho sakti hai! 🍎</em>`,

    electricity: `<span class="aie">⚡</span><strong>Electricity — Current, Voltage, Resistance</strong><br><br>
⚡ <strong>Current (I)</strong> — electrons ka flow | unit: Ampere (A)<br>
🔋 <strong>Voltage (V)</strong> — "push" | unit: Volt (V)<br>
🔴 <strong>Resistance (R)</strong> — current ko rokna | unit: Ohm (Ω)<br><br>
<strong>Ohm's Law:</strong> <code>V = I × R</code> | <code>I = V/R</code> | <code>R = V/I</code><br>
<strong>Power:</strong> <code>P = V × I</code> (Watts)<br><br>
<strong>Series vs Parallel:</strong><br>
🔗 Series — ek fuse → sab band!<br>
⑂ Parallel — ek band → baaki chalta hai (ghar mein parallel!)<br><br>
<em>😄 Bijli ki speed = Light ki speed! 3×10⁸ m/s! ⚡</em>`,

    magnetism: `<span class="aie">🧲</span><strong>Magnetism!</strong><br><br>
🧲 Like poles repel | Unlike poles attract<br>
📍 Har magnet mein North & South pole hota hai<br>
🌍 Earth itself is a giant magnet!<br><br>
<strong>Electromagnet:</strong><br>
Current carrying wire → magnetic field!<br><br>
<strong>Uses:</strong> Motor, Generator, MRI machine, Speakers, Compass<br><br>
<em>😄 Compass kaam karta hai kyunki Earth = giant magnet! 🧭</em>`,

    optics: `<span class="aie">🔭</span><strong>Optics — Light ki Science!</strong><br><br>
⚡ Light speed = <strong>3 × 10⁸ m/s</strong> (vacuum mein)<br><br>
<strong>Reflection:</strong> Angle of incidence = Angle of reflection<br>
<strong>Refraction:</strong> Light medium change karte waqt bend hota hai<br>
🌈 <strong>VIBGYOR:</strong> Violet, Indigo, Blue, Green, Yellow, Orange, Red<br><br>
<strong>Lenses:</strong><br>
🔍 Convex → converging (magnifying glass!)<br>
🔎 Concave → diverging<br><br>
<strong>Mirrors:</strong><br>
🪞 Concave → converges (torch, telescope)<br>
🪞 Convex → diverges (rear view mirror!)<br><br>
<em>😄 Rainbow = nature ka prism! ☀️🌈</em>`,

    acids: `<span class="aie">🧪</span><strong>Acids, Bases & pH!</strong><br><br>
<strong>pH Scale: 0 to 14</strong><br>
🔴 pH 0–6 = <strong>Acid</strong> (khatta/sour)<br>
🟢 pH 7 = <strong>Neutral</strong> (pure water)<br>
🔵 pH 8–14 = <strong>Base/Alkali</strong><br><br>
<strong>Common Acids:</strong><br>
🍋 Citric acid (lemon) | 🍎 Malic (apple) | 🔋 H₂SO₄ (battery) | 🧴 HCl (stomach!)<br><br>
<strong>Common Bases:</strong><br>
🧼 NaOH (soap) | 🦷 Toothpaste | 🌾 Baking Soda (NaHCO₃)<br><br>
<strong>Litmus Test:</strong><br>
🔴 Red paper → Blue = Base | 🔵 Blue paper → Red = Acid<br><br>
<em>😄 Aapka stomach acid pH ~2 hai — kafi strong! 😮</em>`,

    periodicTable: `<span class="aie">⚗️</span><strong>Periodic Table!</strong><br><br>
📊 <strong>118 elements</strong> total!<br><br>
<strong>Groups:</strong><br>
1️⃣ Alkali Metals: H, Li, Na, K, Rb, Cs<br>
2️⃣ Alkaline Earth: Be, Mg, Ca, Sr, Ba<br>
🔵 Halogens (17): F, Cl, Br, I<br>
⚪ Noble Gases (18): He, Ne, Ar, Kr<br><br>
<strong>Common Formulas:</strong><br>
💧 Water = H₂O | 🧂 Salt = NaCl | 🍬 Sugar = C₁₂H₂₂O₁₁<br>
🔴 Rust = Fe₂O₃ | 💨 CO₂ | 🌡️ H₂SO₄<br><br>
<em>😄 Trick: "Hi He LiBe BCNOFNe" — first 10 elements! 📝</em>`,

    heart: `<span class="aie">❤️</span><strong>Heart — Dil ki Baat!</strong><br><br>
❤️ Size: Apni mutthi jitna!<br>
💓 Normal heartbeat: 60–100 BPM<br>
🩸 Daily ~7,500 litres blood pump!<br><br>
<strong>4 Chambers:</strong><br>
🔴 Left Ventricle — body ko blood bhejta (sabse powerful!)<br>
🔵 Right Ventricle — lungs ko blood bhejta<br>
🔴 Left Atrium — lungs se O₂ blood leta<br>
🔵 Right Atrium — body se CO₂ blood leta<br><br>
<strong>Blood Types:</strong> A, B, AB, O (O- = Universal Donor! 🏥)<br><br>
<em>😄 Ek zindagi mein heart 2.5 billion baar dhadakta hai! Non-stop! 💪</em>`,

    brain: `<span class="aie">🧠</span><strong>Brain — Sabse Powerful Computer!</strong><br><br>
🧠 Weight: ~1.4 kg | 86 billion neurons!<br>
⚡ Signals: 120 m/s (430 km/h!)<br><br>
<strong>Brain Parts:</strong><br>
🎯 <strong>Cerebrum</strong> — thinking, memory, speech (80%)<br>
⚖️ <strong>Cerebellum</strong> — balance, coordination<br>
🔌 <strong>Brain Stem</strong> — breathing, heartbeat (auto!)<br><br>
<strong>Reflex Action:</strong> Brain bypass → instant reaction!<br>
Hot cheez touch → hand hatao → phir feel karo! ⚡<br><br>
<em>😄 Brain raat ko bhi active — isliye sapne aate hain! 💭</em>`,

    solar: `<span class="aie">🌌</span><strong>Solar System — 8 Planets!</strong><br><br>
1️⃣ 🌑 <strong>Mercury</strong> — Sabse chhota, sabse paas Sun ke<br>
2️⃣ 🌟 <strong>Venus</strong> — Sabse garam! (465°C), ulta ghoomta<br>
3️⃣ 🌍 <strong>Earth</strong> — Hamaara pyaara ghar! 😊<br>
4️⃣ 🔴 <strong>Mars</strong> — Laal planet, future home?<br>
5️⃣ 🟤 <strong>Jupiter</strong> — Sabse bada! Great Red Spot<br>
6️⃣ 💛 <strong>Saturn</strong> — Beautiful rings! 💍<br>
7️⃣ 🔵 <strong>Uranus</strong> — Side pe jhuka ghoomta<br>
8️⃣ 🌊 <strong>Neptune</strong> — Sabse door, fastest winds!<br><br>
<strong>Trick:</strong> <em>"My Very Energetic Mother Just Served Us Nachos"</em><br>
<em>😄 Pluto ab dwarf planet hai — uski feelings mat poochho! 😢</em>`,

    gravity: `<span class="aie">🌍</span><strong>Gravity!</strong><br><br>
<strong>g = 9.8 m/s²</strong> — Earth ki gravity!<br><br>
🍎 Seb girata hai — Newton ne dekha 1687 mein!<br>
🌙 Moon ka ek chakkar 27 din mein<br>
🌊 Oceans ki tides Moon ki gravity se!<br><br>
<strong>Newton's Law of Gravitation:</strong><br>
<code>F = G × (m₁ × m₂) / r²</code><br><br>
<em>😄 Moon pe 60 kg wala sirf 10 kg feel karega! 🚀</em>`,

    sound: `<span class="aie">🔊</span><strong>Sound — Awaaz ki Science!</strong><br><br>
Sound vibrations se banti hai jo medium mein travel karti hai!<br><br>
🌬️ Hawa mein: ~340 m/s | 💧 Paani mein: ~1500 m/s<br>
❌ Space mein: nahi! (No air = no sound)<br><br>
📊 Frequency — vibrations/sec (Hertz Hz)<br>
📣 Amplitude — loudness<br>
👂 Human ear: 20 Hz to 20,000 Hz<br>
🦇 Bats: ultrasonic (above 20,000 Hz!)<br><br>
<em>😄 Lightning pehle dikhti hai, thunder baad mein — light > sound! ⚡</em>`,

    atom: `<span class="aie">⚛️</span><strong>Atom!</strong><br><br>
Kisi bhi cheez ka sabse chhota building block!<br><br>
🔴 <strong>Proton</strong> — Nucleus mein, Positive (+)<br>
⚫ <strong>Neutron</strong> — Nucleus mein, Neutral (0)<br>
🔵 <strong>Electron</strong> — Nucleus ke chaaron taraf, Negative (-)<br><br>
📌 Atomic Number = protons | 📌 Mass Number = protons + neutrons<br><br>
<strong>Atomic Models:</strong><br>
Thomson (Plum Pudding) → Rutherford (Nucleus!) → Bohr (Orbits!) → Quantum<br><br>
<em>😄 Hum sab atoms se bane hain — literally stardust! 🌟</em>`,

    // ── MATHS ──
    algebra: `<span class="aie">📐</span><strong>Algebra — Letters se Maths!</strong><br><br>
<strong>Example:</strong> x + 5 = 12 → x = 7<br><br>
<strong>Linear Equation:</strong><br>
2x + 3 = 11 → 2x = 8 → x = 4 ✅<br><br>
<strong>Important Identities:</strong><br>
📌 (a+b)² = a² + 2ab + b²<br>
📌 (a-b)² = a² - 2ab + b²<br>
📌 (a+b)(a-b) = a² - b²<br>
📌 (x+a)(x+b) = x² + (a+b)x + ab<br><br>
<strong>Quadratic Formula:</strong><br>
<code>x = (-b ± √(b²-4ac)) / 2a</code><br><br>
<em>😄 Algebra ek puzzle hai — once you get it, it's fun! 🧩</em>`,

    trigonometry: `<span class="aie">📐</span><strong>Trigonometry — SOH CAH TOA!</strong><br><br>
🔵 <strong>Sin θ = Opposite / Hypotenuse</strong><br>
🟢 <strong>Cos θ = Adjacent / Hypotenuse</strong><br>
🟡 <strong>Tan θ = Opposite / Adjacent</strong><br><br>
<strong>Standard Values:</strong><br>
sin(30°)=1/2 | cos(30°)=√3/2 | tan(30°)=1/√3<br>
sin(45°)=1/√2 | cos(45°)=1/√2 | tan(45°)=1<br>
sin(60°)=√3/2 | cos(60°)=1/2 | tan(60°)=√3<br>
sin(90°)=1 | cos(90°)=0 | tan(90°)=∞<br><br>
<em>💡 "sin(45)" type karo — calculate kar deta hoon! 🧮</em>`,

    statistics: `<span class="aie">📊</span><strong>Statistics!</strong><br><br>
<strong>Example: 2, 4, 4, 6, 8</strong><br><br>
📊 <strong>Mean (Average):</strong> Sum ÷ Count = 24 ÷ 5 = <strong>4.8</strong><br>
📍 <strong>Median (Middle):</strong> Sort karo → <strong>4</strong><br>
🔁 <strong>Mode (Most frequent):</strong> <strong>4</strong><br>
📉 <strong>Range:</strong> Max - Min = 8 - 2 = <strong>6</strong><br><br>
<strong>Variance:</strong> Σ(x - mean)² ÷ n<br>
<strong>Std Dev (σ):</strong> √Variance<br><br>
<em>💡 "mean of 5,10,15,20" type karo — calculate kar deta hoon! 🧮</em>`,

    probability: `<span class="aie">🎲</span><strong>Probability — Chance ka Maths!</strong><br><br>
<code>P(Event) = Favourable outcomes / Total outcomes</code><br><br>
🪙 Coin flip: P(Heads) = 1/2 = <strong>50%</strong><br>
🎲 Dice: P(getting 6) = 1/6 ≈ <strong>16.67%</strong><br>
🎲 P(even number on dice) = 3/6 = <strong>50%</strong><br><br>
<strong>Rules:</strong><br>
📌 0 ≤ P ≤ 1 | P(impossible) = 0 | P(certain) = 1<br>
📌 P(A) + P(A') = 1<br><br>
<em>😄 Exam mein aayega? P = depends on study! 📚</em>`,

    setTheory: `<span class="aie">🔵</span><strong>Set Theory!</strong><br><br>
A = {1, 2, 3, 4} | B = {3, 4, 5, 6}<br><br>
🔗 <strong>Union (A ∪ B):</strong> {1,2,3,4,5,6} — dono mila do<br>
⭕ <strong>Intersection (A ∩ B):</strong> {3,4} — common elements<br>
➖ <strong>Difference (A - B):</strong> {1,2} — B wale hata do<br>
🔄 <strong>Complement (A'):</strong> Jo A mein nahi<br><br>
<strong>Formula:</strong> n(A ∪ B) = n(A) + n(B) - n(A ∩ B)<br><br>
<em>😄 Venn Diagram = circles se maths! Easy! 🔵🔴</em>`,

    coordinate: `<span class="aie">📉</span><strong>Coordinate Geometry!</strong><br><br>
📍 Point = (x, y) — x horizontal, y vertical<br><br>
<strong>Distance Formula:</strong><br>
<code>d = √[(x₂-x₁)² + (y₂-y₁)²]</code><br><br>
<strong>Midpoint:</strong><br>
<code>M = ((x₁+x₂)/2, (y₁+y₂)/2)</code><br><br>
<strong>Slope:</strong> <code>m = (y₂-y₁)/(x₂-x₁)</code><br><br>
<strong>Line Equations:</strong><br>
Slope-intercept: <code>y = mx + c</code><br>
Standard: <code>ax + by + c = 0</code><br><br>
<em>💡 Graph paper pe dots lagao — sab easy! 📌</em>`,

    // ── CODING ──
    python: `<span class="aie">🐍</span><strong>Python Programming!</strong><br><br>
<pre># Output
print("Namaste FuturePath!")

# Variables
name = "Rahul"
age = 15
marks = 85.5

# If-else
if marks >= 33:
    print("Pass! 🎉")
else:
    print("Keep trying!")

# For loop
for i in range(1, 6):
    print(i)

# Function
def add(a, b):
    return a + b
print(add(10, 20))  # 30

# List
fruits = ["mango", "apple", "banana"]
print(fruits[0])  # mango

# Dictionary
student = {"name": "Rahul", "marks": 85}
print(student["name"])</pre><br>
<em>😄 Python sikhna hai? Aman Sir FuturePath mein sikhate hain! 📞 8910517578</em>`,

    html: `<span class="aie">🌐</span><strong>HTML — Websites ka Skeleton!</strong><br><br>
<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Meri Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bada Heading&lt;/h1&gt;
    &lt;p&gt;Ek paragraph.&lt;/p&gt;
    &lt;a href="google.com"&gt;Google&lt;/a&gt;
    &lt;img src="photo.jpg" alt="Photo"&gt;
    &lt;button&gt;Click karo!&lt;/button&gt;
    &lt;ul&gt;
      &lt;li&gt;Item 1&lt;/li&gt;
      &lt;li&gt;Item 2&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre><br>
<em>😄 Aman Sir ek real Front-end Developer hain! 💻</em>`,

    javascript: `<span class="aie">⚡</span><strong>JavaScript!</strong><br><br>
<pre>let name = "Rahul";
const age = 15;

function greet(n) {
  return "Hello " + n + "!";
}
console.log(greet(name));

// If-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor — FuturePath join karo! 😄");
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Array
let marks = [85, 90, 78];
console.log(marks.length); // 3</pre><br>
<em>😄 BrainBot ka dimag JavaScript se bana hai! Aman Sir ne likha! 🤖</em>`,

    java: `<span class="aie">☕</span><strong>Java Programming!</strong><br><br>
<pre>public class Hello {
    public static void main(String[] args) {
        System.out.println("Namaste FuturePath!");
        
        int age = 15;
        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }
        
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
        
        // Array
        int[] marks = {85, 90, 78};
        System.out.println(marks.length);
    }
}</pre><br>
<strong>OOP Concepts:</strong> Class | Object | Inheritance | Polymorphism | Encapsulation<br><br>
<em>😄 Java sikhna hai? 📞 8910517578</em>`,

    react: `<span class="aie">⚛️</span><strong>React JS — Frontend ka Future!</strong><br><br>
<pre>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        +1
      &lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(0)}&gt;
        Reset
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
export default Counter;</pre><br>
<strong>React Hooks:</strong> useState | useEffect | useRef | useContext<br><br>
<em>😄 Aman Sir React sikhate hain! 📞 8910517578</em>`,

    sql: `<span class="aie">🗄️</span><strong>SQL / MySQL!</strong><br><br>
<pre>CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  marks FLOAT
);

INSERT INTO students VALUES (1, 'Rahul', 85);
SELECT * FROM students;
SELECT name FROM students WHERE marks &gt; 80;
UPDATE students SET marks = 90 WHERE name = 'Rahul';
DELETE FROM students WHERE id = 1;

-- Aggregate functions
SELECT AVG(marks) FROM students;
SELECT COUNT(*) FROM students;</pre><br>
<em>😄 WhatsApp, Instagram — sab databases use karte hain! 🗄️</em>`,

    git: `<span class="aie">🐙</span><strong>Git & GitHub — Code ka Diary!</strong><br><br>
<pre>git init                      # Naya repo start
git add .                     # Sab files stage karo
git commit -m "First commit"  # Save karo
git push origin main           # GitHub pe upload
git pull                       # Update lo
git clone &lt;url&gt;               # Copy karo
git branch feature             # Naya branch
git merge feature              # Merge karo</pre><br>
<strong>Concepts:</strong><br>
📌 Repository = project folder<br>
📌 Commit = save point | Branch = parallel version<br><br>
<em>😄 "Git mein sab save" = developer ka peace of mind! 😌</em>`,

    msoffice: `<span class="aie">📊</span><strong>MS Office — Har Job Ke Liye Zaroori!</strong><br><br>
📝 <strong>MS Word</strong> — Documents, letters, essays<br>
📊 <strong>MS Excel</strong> — Spreadsheets, calculations, accounts<br>
📽️ <strong>MS PowerPoint</strong> — Presentations, slideshows<br>
🗄️ <strong>MS Access</strong> — Database basics<br><br>
<strong>Excel Important Functions:</strong><br>
<code>=SUM(A1:A10)</code> → Add karo<br>
<code>=AVERAGE(A1:A10)</code> → Average<br>
<code>=IF(A1>50,"Pass","Fail")</code> → Condition<br>
<code>=VLOOKUP(value,range,col,0)</code> → Search<br>
<code>=COUNTIF(range,"condition")</code> → Count<br><br>
<strong>Word Shortcuts:</strong><br>
Ctrl+B Bold | Ctrl+I Italic | Ctrl+U Underline<br>
Ctrl+Z Undo | Ctrl+S Save | F7 Spell Check<br><br>
<em>📍 FuturePath mein sikhao — Certificate milega! 🏆</em>`,

    tally: `<span class="aie">🧾</span><strong>Tally — India ka #1 Accounting Software!</strong><br><br>
<strong>Tally kya karta hai?</strong><br>
📒 Ledger banana | 💰 Vouchers enter karna<br>
📊 Balance Sheet | 🧾 GST filing<br>
📦 Stock/Inventory | 💸 Payroll<br><br>
<strong>Important Shortcuts:</strong><br>
F5 → Payment | F6 → Receipt | F8 → Sales | F9 → Purchase<br>
F2 → Date change | Alt+F3 → Company | Ctrl+A → Save<br><br>
<em>📍 Aman Sir sikhate hain — Career ke liye best! 💼</em>`,

    gst: `<span class="aie">🧾</span><strong>GST — Goods & Services Tax</strong><br><br>
1 July 2017 ko lagu hua India mein!<br><br>
<strong>GST Slabs:</strong><br>
⚪ 0% — Anaaj, milk, education, health<br>
🟡 5% — Basic goods, packaged food<br>
🟠 12% — Computers, processed food<br>
🔵 18% — Electronics, restaurants (most common!)<br>
🔴 28% — Luxury cars, tobacco<br><br>
<strong>Types:</strong><br>
🏛️ CGST — Centre | 🏠 SGST — State | 🔀 IGST — Interstate<br><br>
<em>😄 Us samose mein bhi 5% GST hai! 🥟</em>`,

    accounting: `<span class="aie">💰</span><strong>Accounting ke Golden Rules!</strong><br><br>
1️⃣ <strong>Personal Account:</strong> Debit the Receiver | Credit the Giver<br>
2️⃣ <strong>Real Account:</strong> Debit what comes in | Credit what goes out<br>
3️⃣ <strong>Nominal Account:</strong> Debit expenses/losses | Credit incomes/gains<br><br>
<strong>Important Terms:</strong><br>
💰 Asset — jo business ke paas hai<br>
💳 Liability — jo business ko dena hai<br>
👤 Capital — owner ka paisa<br>
📒 Ledger — accounts ki book<br>
📄 Journal — daily transactions<br><br>
<em>😄 Aman Sir Tally & Accounting sikhate hain! 🧾</em>`,

    // ── GK / HISTORY ──
    indiaGK: `<span class="aie">🇮🇳</span><strong>India — Mera Pyaara Desh!</strong><br><br>
🏛️ Capital: New Delhi | Currency: ₹ Indian Rupee<br>
👥 Population: ~140 crore (2nd largest!)<br>
📅 Independence: 15 August 1947<br>
📜 Republic Day: 26 January 1950<br>
🏛️ Parliament: Lok Sabha + Rajya Sabha<br><br>
<strong>Famous Indians:</strong><br>
🕊️ Mahatma Gandhi — Father of the Nation<br>
📜 Dr. Ambedkar — Father of Constitution<br>
🔭 APJ Abdul Kalam — Missile Man, 11th President<br>
🧪 CV Raman — Nobel Prize Physics (1930)<br>
🎵 Rabindranath Tagore — Nobel Prize Literature (1913)<br><br>
<strong>India ne duniya ko diya:</strong><br>
🔢 Zero | ♟️ Chess | 🧘 Yoga | 💯 Decimal system<br><br>
<em>😄 India oldest civilization mein se ek hai! 🏆</em>`,

    freedomFighters: `<span class="aie">🇮🇳</span><strong>India ke Freedom Fighters!</strong><br><br>
🕊️ <strong>Mahatma Gandhi</strong> — Non-violence, Salt March 1930, Quit India 1942<br>
🌹 <strong>Jawaharlal Nehru</strong> — 1st PM, "Discovery of India"<br>
⚡ <strong>Bhagat Singh</strong> — "Inquilab Zindabad!" (23 yrs mein shaheed 1931)<br>
🦁 <strong>Subhash Chandra Bose</strong> — INA, "Jai Hind!", "Tum mujhe khoon do..."<br>
💪 <strong>Bal Gangadhar Tilak</strong> — "Swaraj hamara janmasiddha adhikar hai!"<br>
👩 <strong>Rani Lakshmibai</strong> — 1857 ki Rani (Jhansi ki Rani)<br>
📜 <strong>Dr. B.R. Ambedkar</strong> — Constitution writer<br>
🔥 <strong>Mangal Pandey</strong> — 1857 ki kranti ka spark!<br><br>
<em>🙏 Unke balidaan ki wajah se hum azaad hain!</em>`,

    worldWar: `<span class="aie">🌍</span><strong>World Wars — History!</strong><br><br>
<strong>⚔️ World War 1 (1914–1918):</strong><br>
Cause: Assassination of Archduke Franz Ferdinand<br>
Allied vs Central Powers<br>
Result: ~20 million deaths, Treaty of Versailles 1919<br><br>
<strong>⚔️ World War 2 (1939–1945):</strong><br>
Cause: Hitler/Nazi Germany expansion<br>
Allied Powers (US, UK, USSR, India) vs Axis (Germany, Italy, Japan)<br>
📅 Hiroshima atomic bomb: 6 Aug 1945<br>
🏁 Japan surrendered: 2 Sept 1945<br>
Result: ~70 million deaths, UN formed!<br><br>
<strong>India in WW2:</strong> 2.5 million Indian soldiers fought! 💪<br><br>
<em>😄 "Those who cannot remember history are condemned to repeat it."</em>`,

    mughal: `<span class="aie">🏰</span><strong>Mughal Empire!</strong><br><br>
👑 <strong>Babur</strong> (1526) — Founded, First Battle of Panipat<br>
👑 <strong>Humayun</strong> — Lost & regained empire<br>
🌟 <strong>Akbar the Great</strong> — Din-i-Ilahi, Navratnas, Largest empire<br>
👑 <strong>Jahangir</strong> — Art & architecture lover<br>
🕌 <strong>Shah Jahan</strong> — Taj Mahal! (1632–1653) Red Fort!<br>
👑 <strong>Aurangzeb</strong> — Last great Mughal, strict ruler<br><br>
<strong>Taj Mahal Facts:</strong><br>
📍 Agra | ❤️ Shah Jahan → Mumtaz ke liye<br>
👷 22 saal (1631-1653) | 20,000+ workers!<br>
🏆 7 Wonders of the World!<br><br>
<em>😄 Taj Mahal pura white marble se bana hai! ✨</em>`,

    scienceFacts: `<span class="aie">🔬</span><strong>Amazing Science Facts!</strong><br><br>
🦷 Tooth enamel — body ka hardest substance!<br>
❤️ Heart pumps 1 million barrels blood in a lifetime!<br>
🧬 DNA 2 metres long — ek cell mein fold hoke!<br>
⚡ Nerve signals: 120 m/s speed!<br>
🌍 Earth 24 ghante mein rotate: 1,670 km/h!<br>
☀️ Sun se Earth tak light: 8 min 20 sec!<br>
🌊 Ocean = 97% of Earth's water!<br>
🦴 Baby mein 300 bones — adult mein 206!<br>
🔵 Blood vessels length: 100,000 km (Earth ke 2.5 rounds!)<br>
🌡️ Human body normal temp: 37°C / 98.6°F<br><br>
<em>😄 Science facts sunke dimag ghoom jaata hai na! 🤯</em>`,

    gkFacts: `<span class="aie">🌍</span><strong>General Knowledge — Amazing Facts!</strong><br><br>
🏔️ Everest — duniya ki sabse oonchi choti (8,849m)<br>
🌊 Pacific — sabse bada ocean (Earth ka 30%!)<br>
🦁 Africa — sabse zyada countries (54!)<br>
🇷🇺 Russia — sabse bada desh area mein<br>
🇻🇦 Vatican City — sabse chhota desh<br>
🐘 African Elephant — sabse bada land animal<br>
🐳 Blue Whale — sabse bada animal ever!<br>
🌵 Sahara — sabse bada hot desert<br>
🏜️ Antarctica — sabse thanda continent (-89°C record!)<br>
💧 Nile — sabse lamba river (6,650 km!)<br>
🌳 Amazon — sabse bada rainforest<br>
💎 Diamond — hardest natural substance<br><br>
<em>😄 Quiz mein yeh zaroor aate hain! 📝</em>`,

    indiaFacts: `<span class="aie">🇮🇳</span><strong>India ke Interesting Facts!</strong><br><br>
🏏 Cricket — India ki national passion!<br>
🌶️ India = world's largest spice producer!<br>
📐 India ne Zero diya duniya ko (Aryabhata!)<br>
♟️ Chess ka janam India mein hua!<br>
🧘 Yoga — 5000 saal purana, India se!<br>
🌊 India mein 7,516 km coastline hai!<br>
🏔️ Himalaya — world's highest mountain range!<br>
🦚 Peacock — India ka national bird<br>
🐯 Tiger — India ka national animal<br>
🪷 Lotus — India ka national flower<br>
🏏 Sachin Tendulkar — 100 international centuries!<br>
🚀 ISRO — India ka space program (Chandrayaan, Mangalyaan!)<br><br>
<em>😄 India — Incredible India! 🇮🇳🏆</em>`,

    computers: `<span class="aie">💻</span><strong>Computer Basics — Har Cheez Ke Baare Mein!</strong><br><br>
<strong>Computer ke Parts:</strong><br>
🖥️ Monitor | ⌨️ Keyboard | 🖱️ Mouse | 🖨️ Printer<br>
💾 RAM (temporary) | 💿 ROM (permanent) | 🖴 HDD/SSD (storage)<br><br>
<strong>Units of Memory:</strong><br>
1 Byte = 8 bits<br>
1 KB = 1024 Bytes<br>
1 MB = 1024 KB<br>
1 GB = 1024 MB<br>
1 TB = 1024 GB<br><br>
<strong>Generations of Computer:</strong><br>
1st: Vacuum tubes | 2nd: Transistors | 3rd: ICs<br>
4th: Microprocessors | 5th: AI era (aaj!)<br><br>
<strong>Operating Systems:</strong> Windows, macOS, Linux, Android, iOS<br><br>
<em>😄 FuturePath mein Computer sikhao — Basic se Advanced! 💻</em>`,

    career: `<span class="aie">🚀</span><strong>Career Guidance — Aman Sir ki Advice!</strong><br><br>
<strong>High Demand Fields 2024-2030:</strong><br>
💻 Software Developer — ₹4–40 LPA<br>
📊 Data Scientist / AI Engineer — ₹6–60 LPA<br>
🌐 Full Stack Web Developer — ₹4–25 LPA<br>
🔒 Cybersecurity Expert — ₹5–30 LPA<br>
📱 App Developer (Android/iOS) — ₹4–20 LPA<br>
🧾 Accountant / Tally Expert — ₹2–8 LPA<br>
🎨 UI/UX Designer — ₹3–15 LPA<br><br>
<strong>FuturePath se career shuru karo:</strong><br>
📚 School Classes → Board exams ace karo<br>
💻 Coding courses → Job ready bano<br>
📊 MS Office → Office job ke liye<br>
🌐 Web Dev → Freelance karo ghar se!<br><br>
<em>😄 "Seedha start karo — har expert pehle beginner tha!" - Aman Sir 🎓</em>`,

    shortcuts: `<span class="aie">⌨️</span><strong>Important Keyboard Shortcuts!</strong><br><br>
<strong>Universal:</strong><br>
Ctrl+C Copy | Ctrl+V Paste | Ctrl+X Cut<br>
Ctrl+Z Undo | Ctrl+Y Redo | Ctrl+S Save<br>
Ctrl+A Select All | Ctrl+F Find | Ctrl+P Print<br><br>
<strong>MS Word:</strong><br>
Ctrl+B Bold | Ctrl+I Italic | Ctrl+U Underline<br>
Ctrl+E Center | F7 Spell Check<br><br>
<strong>Excel:</strong><br>
Ctrl+; → Today's date | F2 → Edit cell<br>
Alt+Enter → New line in cell | F11 → Chart<br><br>
<strong>Windows:</strong><br>
Win+D → Desktop | Alt+F4 → Close<br>
Win+L → Lock screen | Ctrl+Shift+Esc → Task Manager<br>
PrintScreen → Screenshot<br><br>
<em>😄 Shortcuts seekhlo — 10x faster kaam karo! ⚡</em>`,

    jokes: [
      "Programming joke: Why do programmers prefer dark mode? Kyunki LIGHT attracts BUGS! 🐛😂",
      "Math book sad kyun thi? Kyunki usmein bahut zyada PROBLEMS thi! 📚😅",
      "Misbah ne homework kyu nahi kiya? 'Sir, WTC match tha!' Aman Sir: 'India bhi khel raha tha — main ne bhi dekha aur homework bhi check kiya!' 😂🏏",
      "Python developer party mein gaya. 'Kya karte ho?' 'Mujhe snakes pasand hain!' Sab bhaag gaye! 🐍😂",
      "Computer thanda kyun tha? Kyunki usne apna WINDOWS khula chhod diya! 🪟❄️",
      "Programmer ka favorite khana? MICROCHIPS! 🍟💻",
      "Oxygen aur Magnesium mile — teacher boli 'OMg!' 😂⚗️",
      "Student exam mein: 'Ghar pe sab yaad tha...' Aman Sir: 'Toh ghar pe hi paper dete! 😄'",
      "Misbah: 'Sir main kal zaroor padhunga.' Sab students: 'Yeh kal kabhi nahi aata!' 😂😂",
      "Why can't Tally keep secrets? Har cheez DEBIT ya CREDIT ho jaati hai! 🧾😂",
      "Teacher: Gravity kya hai? Student: 'Wo cheez jo meri pencil girne pe blame hoti hai!' 🍎😄",
      "1 + 1 = 2, 2 + 2 = 4... Misbah: 'Sir ye WTC team selection se mushkil hai!' 😂🏏",
      "HTML developer ne ladki ko propose kiya: 'Kya tum meri &lt;body&gt; mein rehogi?' 😂🌐",
      "JavaScript error: 'undefined is not a function'... Student: 'Sir main bhi undefined feel karta hoon exams mein!' 😭",
      "Teacher: CO₂ kya hai? Student: 'Sir woh jo exams ke time badhta hai... tension se!' 😂",
      "Ek student ne poocha: 'Sir Python easy hai?' Aman Sir: 'Haan — but like a real python, pehle scary lagta hai!' 🐍😄",
    ],
  };

  // ════════════════════════════════════════════
  //  NAME DETECTION
  // ════════════════════════════════════════════
  function detectName(q) {
    const nameMatch = q.match(/(?:i am|i'm|mera naam|main|my name is|naam hai|call me|mujhe)\s+([a-zA-Z]+)/i)
      || q.match(/^([A-Z][a-z]+)(?:\s|$)/);
    if (nameMatch) {
      const n = nameMatch[1];
      const skip = ["the","and","are","you","how","what","why","sir","can","yes","nahi","hello","okay","that","this","bhai","yaar","good","nice","from","java","html","python","react","bolo","batao"];
      if (n.length > 2 && !skip.includes(n.toLowerCase())) return n;
    }
    return null;
  }

  // ════════════════════════════════════════════
  //  MAIN RESPONSE ENGINE
  // ════════════════════════════════════════════
  function getResponse(input) {
    // Fix typos first
    const fixed = fixTypos(input);
    const q = fixed.toLowerCase().trim();
    const r = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const nameStr = userName ? `, <strong>${userName}</strong>` : "";

    conversationCount++;

    // ── Name detection ──
    const detectedName = detectName(input);
    if (detectedName && !hasGreeted) {
      userName = detectedName;
      hasGreeted = true;
      doEmojiRain(["🎉", "✨", "🌟", "😊", "👋"]);
      return `<span class="aie">🎉</span>Wah! <strong>${userName}</strong> — kya pyaara naam hai! 😊<br><br>
        Ab main tumhe personally <strong>${userName}</strong> bolke bulaunga!<br><br>
        Ab bolo — kya chahiye? Maths? Science? Coding? Capitals? Institute info? Ya jokes? 😄<br>
        Sab kuch kar sakta hoon! 🤖✨`;
    }

    // ── Greetings ──
    if (/^(hi+|hello+|hey+|hii+|namaste|namaskar|hola|salam|assalam|yo+|sup|helo|hlw|heyy)/.test(q)) {
      const hour = new Date().getHours();
      const timeMsg = hour < 12 ? "Good morning! Subah subah padhai — good habit! ☀️" :
        hour < 17 ? "Good afternoon! Khaana ho gaya? 😄" : "Good evening! Din kaisa tha? 😊";
      return r([
        `<span class="aie">👋</span><strong>${timeMsg}</strong><br><br>Main hoon BrainBot${nameStr} — Aman Sir ka AI! 🤖<br><br>Kya poochna hai? Science, Maths, Capitals, Coding, ya sirf baat? 😊`,
        `<span class="aie">🎉</span>Hey${nameStr}! BrainBot ready hai! 💪<br><br>Calculator? Homework? Institute info? World capitals? Sab karta hoon! 😄`,
      ]);
    }

    // ── How are you ──
    if (/(how are you|kaise ho|kaisa hai|kya hal|what's up|kya chal raha|wassup|hows it|kese ho)/.test(q)) {
      return r([
        `<span class="aie">😄</span>Main ekdum <strong>mast</strong> hoon${nameStr}! Code likhna aur samjhana — yahi meri life hai! 🤖<br><br>Aur tum kaise ho? Padhai chal rahi hai? 😊`,
        `<span class="aie">🤖</span>Bhai main toh robot hoon — hamesha 100% fit! 😄 No headaches, no stress!<br><br>Tum kaise ho${nameStr}? Kya padh rahe ho aajkal? 📖`,
      ]);
    }

    // ── Thanks ──
    if (/(thank|thanks|shukriya|dhanyawad|thx|ty\b|bahut acha|very helpful|great bot|accha laga)/.test(q)) {
      return r([
        `<span class="aie">🥹</span>Bahut bahut welcome${nameStr}! 😊 Yeh sunke dil khush ho gaya!<br><br>Koi aur sawaal ho toh seedha poochho! 🤖💪`,
        `<span class="aie">❤️</span>Arre yaar${nameStr}! Itna formal mat ho — hum dost hain! 😄<br><br>Aman Sir ka message: "<em>Meri taraf se bhi thanks for studying hard!</em>" 🎓`,
      ]);
    }

    // ── Bye ──
    if (/(bye|goodbye|alvida|ok bye|okay bye|tata|good night|so ja|baad mein|phir milenge)/.test(q)) {
      return `<span class="aie">👋</span>Bye bye${nameStr}! Phir milenge! 😊<br><br>
        📞 Aman Sir: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
        📍 Near Taiba Club, Phoolbagan, Kolkata<br><br>
        <em>Khub padho, khub seekho — FuturePath mein aao! 🎓✨</em>`;
    }

    // ── Who made you ──
    if (/(who made|who built|who created|created by|made by|kisne banaya|kaun banaya|your creator|who are you|what are you|brainbot kaun)/.test(q)) {
      return `<span class="aie">🤖</span>Main <strong>BrainBot v5.0</strong> hoon — banaya hai <strong>Aman Sir (Aman Khan)</strong> ne!<br><br>
        Woh ek real <strong>Front-end Developer + Teacher</strong> hain! 🏫<br>
        Koi external API nahi — 100% Aman Sir ki mehnat! 💪<br><br>
        <a href="https://aman00369.github.io/FuturePath-Learning-Institute/" target="_blank" style="color:#a78bfa;">FuturePath Website</a>`;
    }

    // ── What can you do ──
    if (/(what can you do|kya kar sakte|tumhara kaam|abilities|kya poochh sakta|help me|kya sikhate)/.test(q)) {
      return `<span class="aie">💡</span><strong>Main kya kar sakta hoon?</strong><br><br>
        🧪 Science — Physics, Chemistry, Biology | O₂, H₂, Atoms, DNA<br>
        📐 Maths — Basic to Advanced + Calculator!<br>
        🌍 GK & Capitals — 60+ countries, India facts, world records<br>
        🇮🇳 History — Freedom fighters, Mughals, World Wars<br>
        💻 Coding — Python, Java, HTML, CSS, JS, React, SQL, Git<br>
        📊 MS Office & Tally | ⌨️ Shortcuts<br>
        🏫 Institute Info — Fees, courses, admission, form<br>
        😂 Jokes, Riddles, Fun facts!<br>
        💬 Normal baat — bhai ki tarah! 😄<br><br>
        <em>Seedha poochho — main hoon! 🤖</em>`;
    }

    // ── Direct calculation check first ──
    if (/(calculate|calc|kitna|compute|solve|barabar|equal|=\?|answer kya|result kya)/.test(q)) {
      const calcResult = tryCalculate(q);
      if (calcResult) return calcResult;
    }
    const calcResult = tryCalculate(q);
    if (calcResult) return calcResult;

    // ── Country Capitals ──
    const capAnswer = getCapitalAnswer(q);
    if (capAnswer) return capAnswer;

    if (/(capital of|capital kya|ka capital|what is capital|capitals|rajdhani|country capital)/.test(q)) {
      const capAnswer2 = getCapitalAnswer(q);
      if (capAnswer2) return capAnswer2;
      return `<span class="aie">🌍</span><strong>World Capitals — main jaanta hoon sab!</strong><br><br>
Kaunse desh ka capital poochna hai? Likho:<br>
➡️ "India ka capital kya hai?"<br>
➡️ "Capital of Japan?"<br>
➡️ "France capital?"<br>
➡️ "USA capital kya hai?"<br><br>
60+ countries ke capitals mere paas hain! 🗺️😊`;
    }

    // ── Misbah ──
    if (/(misbah|the student who|wtc student|jo jhooth bolta|famous student)/.test(q)) return KB.misbah();

    // ── Science ──
    if (/(oxygen|o2\b)/.test(q)) return KB.oxygen;
    if (/(hydrogen|h2\b)/.test(q)) return KB.hydrogen;
    if (/(carbon\b|co2\b|carbon dioxide)/.test(q)) return KB.carbon;
    if (/(nitrogen|n2\b)/.test(q)) return KB.nitrogen;
    if (/(photosynthesis|plants food|plant khana)/.test(q)) return KB.photosynthesis;
    if (/(newton|laws of motion|inertia|f=ma)/.test(q)) return KB.newton;
    if (/(electricity|bijli|current|voltage|ohm|circuit)/.test(q)) return KB.electricity;
    if (/(magnetism|magnet|magnetic|electromagnet)/.test(q)) return KB.magnetism;
    if (/(optics|light ray|reflection|refraction|lens|mirror|prism|vibgyor)/.test(q)) return KB.optics;
    if (/(acid|base|ph scale|alkali|litmus|acidic)/.test(q)) return KB.acids;
    if (/(periodic table|element|valency|atomic number|molar mass|chemical formula)/.test(q)) return KB.periodicTable;
    if (/(heart|cardiac|blood circulation|blood type)/.test(q)) return KB.heart;
    if (/(brain|dimag|nervous system|neuron|reflex)/.test(q)) return KB.brain;
    if (/(gravity|gravitational|free fall|g=9)/.test(q)) return KB.gravity;
    if (/(sound|frequency|amplitude|ultrasonic|decibel)/.test(q)) return KB.sound;
    if (/(solar system|planet|surya|mercury|venus|mars|jupiter|saturn|uranus|neptune)/.test(q)) return KB.solar;
    if (/(atom|proton|neutron|electron|nucleus|atomic model)/.test(q)) return KB.atom;
    if (/(science facts|amazing science|cool science|did you know science)/.test(q)) return KB.scienceFacts;
    if (/(hawa|what is air|air kya|atmosphere composition)/.test(q)) return `<span class="aie">💨</span><strong>Hawa (Air)</strong><br><br>
Hawa gases ka mixture hai!<br>🔵 Nitrogen — 78% | 🟡 Oxygen — 21% | ⚪ Argon — 0.9% | 🌿 CO₂ — 0.04%<br><br>
<strong>Hawa ke kaam:</strong><br>✅ Saans lene ke liye | ✅ Plants ke liye CO₂ | ✅ Aag jalane ke liye<br><br>
<em>😄 Ek saans mein ~0.5 litre hawa! 🌬️</em>`;

    if (/(thermodynamics|heat energy|entropy|kelvin|temperature conversion)/.test(q)) return `<span class="aie">🌡️</span><strong>Thermodynamics & Heat!</strong><br><br>
<strong>Temperature Conversion:</strong><br>
°C → K: T(K) = T(°C) + 273.15<br>
°C → °F: T(°F) = T(°C) × 9/5 + 32<br><br>
<strong>Laws of Thermodynamics:</strong><br>
1️⃣ Energy conservation — ΔU = Q - W<br>
2️⃣ Entropy always increases<br>
3️⃣ Absolute zero (0K) = unachievable<br><br>
<strong>Heat Transfer:</strong> 🔥 Conduction | 🌀 Convection | ☀️ Radiation<br><br>
<em>💡 "°C to °F" ya "°F to °C" likhke calculate karo! 🌡️</em>`;

    // ── Maths ──
    if (/(algebra|quadratic|equation|x ki value|variable|polynomial)/.test(q)) return KB.algebra;
    if (/(trigonometry|trig\b|soh cah toa|hypotenuse)/.test(q)) return KB.trigonometry;
    if (/(statistics|mean|median|mode|standard deviation|variance)/.test(q)) return KB.statistics;
    if (/(probability|chance|likelihood|dice|coin flip)/.test(q)) return KB.probability;
    if (/(set theory|union|intersection|venn|subset)/.test(q)) return KB.setTheory;
    if (/(coordinate|x axis|y axis|slope|cartesian|plotting|graph)/.test(q)) return KB.coordinate;
    if (/(percentage|percent|kitne marks|marks percentage)/.test(q)) return `<span class="aie">📊</span><strong>Percentage Formula!</strong><br><br>
<code>% = (Part ÷ Whole) × 100</code><br><br>
Example: 24/30 → (24÷30)×100 = <strong>80%</strong> 🏆<br><br>
<code>Value = (% ÷ 100) × Total</code><br>
500 ka 20% = (20÷100)×500 = <strong>₹100</strong><br><br>
<em>💡 "20% of 500" type karo — calculate kar deta hoon! 🧮</em>`;

    if (/(geometry|area|perimeter|volume|shape formula)/.test(q)) return `<span class="aie">📏</span><strong>Geometry Formulas!</strong><br><br>
⬛ Square: Area = a² | Perimeter = 4a<br>
▬ Rectangle: Area = l×b | Perimeter = 2(l+b)<br>
🔺 Triangle: Area = ½×b×h | Angles sum = 180°<br>
⭕ Circle: Area = πr² | Circumference = 2πr<br>
📦 Cube: Volume = a³ | Surface Area = 6a²<br>
🔵 Sphere: Volume = 4/3πr³<br>
🥫 Cylinder: Volume = πr²h<br><br>
<strong>Pythagoras: a² + b² = c²</strong> 📐<br><br>
<em>💡 "area of circle r=5" type karo — calculate! 🧮</em>`;

    // ── CS/Coding ──
    if (/(python|py code|python program)/.test(q)) return KB.python;
    if (/(html|hypertext markup)/.test(q)) return KB.html;
    if (/(javascript|js code|dom\b|jquery)/.test(q) && !/(java\b)/.test(q.replace(/javascript/g, ""))) return KB.javascript;
    if (/(java\b|java code|oops concept|class object) /.test(q) && !/(javascript)/.test(q)) return KB.java;
    if (/(react|reactjs|jsx|usestate|useeffect|hooks)/.test(q)) return KB.react;
    if (/(database|sql|mysql|select|insert|create table)/.test(q)) return KB.sql;
    if (/(git|github|version control|commit|push|pull|repository)/.test(q)) return KB.git;
    if (/(tailwind|tailwindcss|utility class|css framework)/.test(q)) return `<span class="aie">🎨</span><strong>Tailwind CSS!</strong><br><br>
<pre>&lt;div class="flex items-center justify-center 
           bg-blue-500 text-white p-4 rounded-xl
           shadow-lg hover:bg-blue-700 
           transition-all duration-300"&gt;
  Hello FuturePath! 🎓
&lt;/div&gt;</pre><br>
<strong>Common Classes:</strong><br>
📦 flex, grid | 📏 p-4, m-2 | 🎨 bg-blue-500, text-white<br>
📱 sm:, md:, lg: (responsive!) | rounded-xl, shadow-lg<br><br>
<em>😄 No separate CSS file — sab ek jagah! 🔥</em>`;

    if (/(c language|c program|c code|\bc\b.*program)/.test(q)) return `<span class="aie">💻</span><strong>C Language!</strong><br><br>
<pre>#include &lt;stdio.h&gt;

int main() {
    printf("Namaste FuturePath!\\n");
    
    int age = 15;
    if (age &gt;= 18) {
        printf("Adult\\n");
    } else {
        printf("Minor\\n");
    }
    
    // Loop
    for (int i = 1; i &lt;= 5; i++) {
        printf("%d\\n", i);
    }
    
    return 0;
}</pre><br>
<em>😄 C language = programming ki mother! Aman Sir sikhate hain! 📞 8910517578</em>`;

    // ── MS Office & Tally ──
    if (/(ms office|microsoft office|word excel|office suite|ms word)/.test(q)) return KB.msoffice;
    if (/(excel|spreadsheet|vlookup|sum formula|pivot)/.test(q)) return KB.msoffice;
    if (/(tally|tally erp|tally prime)/.test(q)) return KB.tally;
    if (/(gst|cgst|sgst|igst|goods.*service.*tax)/.test(q)) return KB.gst;
    if (/(accounting|golden rule|debit credit|balance sheet|ledger|journal entry)/.test(q)) return KB.accounting;
    if (/(shortcut|keyboard tricks|ctrl\+|hotkey)/.test(q)) return KB.shortcuts;
    if (/(computer basics|what is computer|computer kya|ram|rom|hardware|software|operating system)/.test(q)) return KB.computers;

    // ── GK / History ──
    if (/(india fact|bharat ke baare|incredible india|india ke baare)/.test(q)) return KB.indiaFacts;
    if (/(india|bharat|hamaara desh|republic day|independence day)/.test(q) && !/(capital)/.test(q)) return KB.indiaGK;
    if (/(freedom fighter|independence|gandhi|nehru|subhash|bhagat singh|azadi|rani lakshmibai)/.test(q)) return KB.freedomFighters;
    if (/(world war|ww1|ww2|wwii|second world war|first world war)/.test(q)) return KB.worldWar;
    if (/(mughal|akbar|aurangzeb|babur|shahjahan|taj mahal|delhi sultanate)/.test(q)) return KB.mughal;
    if (/(gk facts|general knowledge|gk question|world records|amazing facts|did you know)/.test(q)) return KB.gkFacts;
    if (/(career|future|job|kya bane|konsa field|scope|salary|profession)/.test(q)) return KB.career;

    // ── Institute related ──
    if (/(aman sir|aman khan|teacher kaun|sir ke baare)/.test(q)) return KB.amanSir;
    if (/(fees|fee|kitna|price|cost|charge|monthly|mahina|kitne paise)/.test(q)) return KB.fees();
    if (/(location|address|kahan|phoolbagan|taiba|kolkata mein|kaise aana)/.test(q)) return KB.location;
    if (/(contact|phone|call|whatsapp|number|number kya)/.test(q)) return `<span class="aie">📞</span><strong>Aman Sir se Contact Karo!</strong><br><br>
📱 <strong>Mobile:</strong> <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <strong>WhatsApp:</strong> <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;font-weight:700;">Click karke message karo</a><br>
💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aman-khan-210187324" target="_blank" style="color:#60a5fa;">Aman Khan</a><br>
🌐 <strong>Website:</strong> <a href="https://aman00369.github.io/FuturePath-Learning-Institute/" target="_blank" style="color:#a78bfa;">FuturePath Website</a><br><br>
📍 Near Taiba Club, Phoolbagan, Kolkata<br><br>
<em>Jaldi call karo — limited seats! 🏃</em>`;

    if (/(demo|free class|trial class|pehle dekhna)/.test(q)) return `<span class="aie">🎓</span><strong>FREE Demo Class! 🎉</strong><br><br>
Haan! Aman Sir dete hain <strong>free trial class</strong> — bina kisi commitment ke!<br><br>
Pehle dekho kaise padhate hain — phir decide karo! 😊<br><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">WhatsApp pe book karo</a><br><br>
Admission fee sirf <strong>₹300</strong> (one-time)!`;

    if (/(timing|batch|time|morning batch|evening batch|afternoon|schedule|kab aaye)/.test(q)) return `<span class="aie">⏰</span><strong>Batch Timings!</strong><br><br>
🌅 <strong>Morning:</strong> 7:00 AM – 10:00 AM<br>
☀️ <strong>Afternoon:</strong> 12:00 PM – 3:00 PM<br>
🌆 <strong>Evening:</strong> 5:00 PM – 8:00 PM<br><br>
Individual (1-on-1) ya Small Group — dono available!<br>
Mon to Sun — saat din! 📅<br><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> — slot book karo!`;

    if (/(course|kya padhate|syllabus|subject|kya available|kya sikhate)/.test(q)) {
      const list = INSTITUTE.courses.map(c => `✅ ${c}`).join("<br>");
      return `<span class="aie">📚</span><strong>FuturePath mein kya kya sikhate hain?</strong><br><br>${list}<br><br>📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a>`;
    }

    if (/(why join|kyun join|best kyun|benefit|why futurepath|kyun aye)/.test(q)) {
      const list = INSTITUTE.features.map(f => `✅ ${f}`).join("<br>");
      return `<span class="aie">🌟</span><strong>Kyun FuturePath join karein?</strong><br><br>${list}<br><br>Free demo: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> 📞`;
    }

    if (/(admission|register|enroll|join karna|admission form|form chahiye|form dikhao|student form)/.test(q)) return KB.admissionForm;

    if (/(certificate|certifi)/.test(q)) return `<span class="aie">🏆</span><strong>Certificate — FuturePath ka Certificate!</strong><br><br>
✅ Course complete karne ke baad <strong>Certificate</strong> milta hai!<br>
✅ Aman Sir personally sign karte hain<br>
✅ Job interviews mein helpful!<br>
✅ All courses mein certificate!<br><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a>`;

    if (/(futurepath|institute|tuition|coaching|padhna chahta|join|enroll)/.test(q)) return `<span class="aie">🏫</span><strong>FuturePath Learning Institute!</strong><br><br>
        📍 Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058<br>
        👨‍💻 Aman Sir (Aman Khan) — Front-end Developer + Teacher<br><br>
        <strong>Classes:</strong> 5 to 12 (CBSE & ICSE) + Computer Courses<br>
        <strong>Fees:</strong> ₹700 – ₹1,200/month only!<br>
        <strong>Admission:</strong> ₹300 (one-time) | <strong>Demo:</strong> FREE! 🎓<br>
        <strong>Certificate:</strong> ✅ After every course!<br><br>
        📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> &nbsp;|&nbsp;
        💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">WhatsApp</a>`;

    // ── Fun ──
    if (/(joke|funny|hanso|comedy|mazak|haha|lol|hasao)/.test(q)) {
      doEmojiRain(["😂", "🤣", "😄", "😆", "🎭"]);
      return `<span class="aie">😂</span><em>${r(KB.jokes)}</em><br><br>Hahaha! 😅 Aur sunna? Phir "joke" likho! 🎪`;
    }

    if (/(riddle|paheli|puzzle|bujho toh)/.test(q)) {
      const riddles = [
        { q: "Mera ek chehra hai, haath nahi — lekin time batata hoon. Main kya hoon?", a: "⌚ Ghadi!" },
        { q: "Kitna bhi khaao, pet nahi bharta. Main kya hoon?", a: "📚 Knowledge (Gyan)!" },
        { q: "Jitna kato, utna barhta hoon. Main kya hoon?", a: "🕳️ Gadhha (Hole)!" },
        { q: "Misbah ne poori class mein sabse zyada kya kiya?", a: "🏏 WTC matches dekhna... aur fir bolna 'homework ho gaya sir!' 😂" },
        { q: "Woh kya cheez hai jo seedhi chalti hai lekin kabhi aage nahi badhti?", a: "🕰️ Time (Waqt)!" },
      ];
      const chosen = r(riddles);
      return `<span class="aie">🧩</span><strong>Paheli!</strong><br><br><em>${chosen.q}</em><br><br><details><summary>👆 Answer dekhne ke liye click karo!</summary><br><strong>${chosen.a}</strong></details>`;
    }

    if (/(motivation|sad|stressed|demotivated|fail|nahi ho raha|mushkil|samajh nahi)/.test(q)) {
      doEmojiRain(["💪", "🌟", "✨", "🔥", "❤️"]);
      return r([
        `<span class="aie">💪</span><strong>Sun${nameStr}!</strong><br><br>
Misbah bhi kabhi aise feel karta hai — lekin jab try karta hai toh bahut accha karta hai! 🌟<br><br>
<strong>Kuch legendary failures:</strong><br>
🍎 Einstein — school mein average student tha!<br>
💡 Edison — 1000 baar fail hua bulb banane mein!<br>
🚀 Elon Musk — pehli 3 rockets fail hue!<br><br>
<strong>Tum bhi kar sakte ho!</strong> 💪<br>
Kya mushkil hai? Batao — milke solve karte hain! 😊`,
        `<span class="aie">🌟</span>Ek baat suno${nameStr}!<br><br>
"Har raat ke baad subah hoti hai — har mushkil ke baad ek solution hota hai!" ☀️<br><br>
Kaunsa topic mushkil lag raha hai? Main seedha explain karta hoon! 🤖💪`,
      ]);
    }

    if (/(wtc|world test|cricket|ipl|match|kohli|rohit|sachin)/.test(q)) {
      return `<span class="aie">🏏</span><strong>Cricket fan ho${nameStr}!</strong><br><br>
        Bilkul Misbah jaisa! 😄 Woh bhi WTC ki baat karta rehta hai!<br><br>
        Cricket mein bhi maths kaam aata hai:<br>
        <code>Batting Avg = Total Runs ÷ Times Out</code><br>
        <code>Run Rate = Total Runs ÷ Total Overs</code><br>
        <code>Strike Rate = (Runs / Balls) × 100</code><br><br>
        <em>😄 Cricket dekho — lekin homework pehle! Aman Sir ki advice! 🏏📚</em>`;
    }

    // ── Smart Fallback ──
    const smartFallbacks = [
      `<span class="aie">🤔</span>Hmm${nameStr}, yeh thoda unclear tha! 😅 Koi baat nahi — try karo:<br><br>
🌍 "<strong>India ka capital?</strong>" ya "<strong>Capital of France?</strong>"<br>
💨 "<strong>What is oxygen?</strong>" ya "<strong>What is gravity?</strong>"<br>
🧮 "<strong>25% of 800</strong>" ya "<strong>sqrt 144</strong>"<br>
📋 "<strong>Admission form dikhao</strong>"<br>
😂 "<strong>Joke sunao</strong>"<br>
💻 "<strong>Python code dikhao</strong>"<br><br>
Main hoon — poochho! 🤖`,

      `<span class="aie">💡</span>${nameStr ? nameStr + ", " : ""}thoda aur clearly batao! 😊<br><br>
Main expert hoon in mein:<br>
📐 Maths | 🧪 Science | 💻 Coding | 🌍 GK & Capitals<br>
🇮🇳 History | 🏫 Institute info | 😂 Jokes | 🔢 Calculator<br><br>
Direct poochho — main samjhunga! 😄`,

      `<span class="aie">🤖</span>Oops${nameStr ? " " + nameStr : ""}! Spelling thodi different thi ya sawaal unclear tha — koi baat nahi! 😄<br><br>
Try again karo ya example dekho:<br>
➡️ "Capital of Japan?" | ➡️ "What is photosynthesis?"<br>
➡️ "15% of 2000 calculate karo" | ➡️ "Python loop code"<br><br>
Main sab samajhta hoon! ✍️`,
    ];
    return r(smartFallbacks);
  }

  // ════════════════════════════════════════════
  //  MAIN SEND
  // ════════════════════════════════════════════
  async function aiSendMessage() {
    const inp = document.getElementById("aiInput");
    if (!inp) return;
    const text = inp.value.trim();
    if (!text) return;

    addUserMsg(text);
    inp.value = "";
    aiAutoResize(inp);
    showTyping();

    const delay = Math.min(300 + text.length * 8, 1200);
    setTimeout(() => {
      hideTyping();
      const reply = getResponse(text);
      addBotMsg(reply);
      if (conversationCount % 7 === 0) {
        setTimeout(() => {
          addBotMsg(`<span class="aie">💡</span><em>Yaad dilata hoon — <strong>FuturePath Learning Institute</strong> mein Aman Sir personally padhate hain! Free demo + Certificate. Call: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> 📞</em>`);
        }, 1500);
      }
    }, delay);
  }

  // ════════════════════════════════════════════
  //  QUICK REPLIES
  // ════════════════════════════════════════════
  window.aiQuickSend = function (text) {
    const inp = document.getElementById("aiInput");
    if (inp) inp.value = text;
    aiSendMessage();
  };

  // ════════════════════════════════════════════
  //  KEYBOARD & RESIZE
  // ════════════════════════════════════════════
  window.aiKeyDown = function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      aiSendMessage();
    }
  };

  window.aiAutoResize = function (el) {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 80) + "px";
  };

  window.aiSendMessage = aiSendMessage;

  // ════════════════════════════════════════════
  //  INIT
  // ════════════════════════════════════════════
  window.addEventListener("DOMContentLoaded", function () {
    initStars();
    setTimeout(() => {
      const badge = document.getElementById("aiNotifBadge");
      if (badge && !aiOpen) badge.style.display = "flex";
    }, 3000);
  });

  if (document.readyState !== "loading") {
    initStars();
  }

})();
