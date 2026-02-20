/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         BRAINBOT v4.0 — SUPER EDITION                       ║
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
    classes: "Class 5 to Class 10 (CBSE & ICSE, English Medium)",
    admissionFee: "₹300 (one-time, non-refundable)",
    freeDemo: true,
    fees: [
      { name: "Class 4–6 (All Subjects)", price: "₹1,400/month" },
      { name: "Class 6–8 (All Subjects)", price: "₹2,000/month" },
      { name: "Class 6–8 (Science & Maths only)", price: "₹1,200/month" },
      { name: "Class 9–10 (Science & Maths)", price: "₹1,500/month" },
      { name: "Class 9–10 (Commerce & Maths)", price: "₹1,500/month" },
      { name: "Class 9–10 (Computer Science only)", price: "₹1,000/month" },
      { name: "Class 11–12 (Computer Science)", price: "₹1,200/month" },
      { name: "MS Office Course", price: "₹1,200/month" },
      { name: "Tally & Accounting", price: "₹1,200/month" },
    ],
    courses: [
      "Python Programming",
      "Java Programming",
      "C Language",
      "HTML, CSS & JavaScript",
      "React Basics",
      "MySQL Database",
      "MS Word, Excel, PowerPoint",
      "Tally ERP",
      "Basic Accounting & GST",
      "Scratch (for beginners)",
      "All school subjects (Class 4–10)",
      "Mathematics (all levels)",
      "Science (Physics, Chemistry, Biology)",
      "English Grammar & Spoken English",
      "Social Science & GK",
    ],
    subjects: {
      core: ["Mathematics"],
      optional: ["Science", "English", "General Knowledge", "Computer", "Spoken English", "Social Science"],
    },
    rules: [
      "Fees once paid are non-refundable.",
      "Regular attendance is compulsory.",
      "Parents should monitor student homework and practice.",
      "Tests will be conducted regularly.",
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
  //  GREETING (first open)
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
      💻 <strong>Coding</strong> — Python, Java, HTML, CSS, JS<br>
      📊 <strong>MS Office & Tally</strong><br>
      🏫 <strong>Institute info</strong> — fees, courses, admission<br>
      😂 <strong>Jokes & Fun</strong> — thoda haas lo bhi!<br>
      💬 <strong>Casual baat</strong> — bhai ki tarah baat karo!<br><br>
      <em>Kya poochna hai? Seedha likho! 👇</em>`
    );

    // Ask name after 2 seconds
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
  //  ADVANCED CALCULATOR ENGINE
  //  Handles: basic math, percentages, sqrt, power,
  //  geometry, x/y/z variables, word problems,
  //  * and x as multiply, fractions, etc.
  // ════════════════════════════════════════════
  function tryCalculate(q) {
    const raw = q.trim();
    // Normalize: replace 'x' as multiply only when between numbers, replace × with *
    let expr = raw
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/(\d)\s*x\s*(\d)/gi, "$1*$2")  // 3x4 → 3*4
      .replace(/(\d)\s*X\s*(\d)/g, "$1*$2");

    // ── "what is X times Y" / "multiply X and Y" ──
    const timesMatch = raw.match(/(\d+\.?\d*)\s*(?:times|multiplied by|into|bar|guna)\s*(\d+\.?\d*)/i);
    if (timesMatch) {
      const a = parseFloat(timesMatch[1]), b = parseFloat(timesMatch[2]);
      const res = a * b;
      return `🧮 <strong>${a} × ${b} = <span style="color:#fbbf24;font-size:1.1em;">${res}</span></strong><br><br><em>Multiplication (Gunn): ${a} ko ${b} baar jodne pe = ${res}!</em> 😊`;
    }

    // ── "X divided by Y" ──
    const divMatch = raw.match(/(\d+\.?\d*)\s*(?:divided by|bhaag|÷|by)\s*(\d+\.?\d*)/i);
    if (divMatch) {
      const a = parseFloat(divMatch[1]), b = parseFloat(divMatch[2]);
      if (b === 0) return `🧮 Kisi bhi number ko zero se divide <strong>nahi kar sakte!</strong> 😅 Maths ka rule hai yeh!`;
      const res = a / b;
      const rounded = Number.isInteger(res) ? res : parseFloat(res.toFixed(6));
      return `🧮 <strong>${a} ÷ ${b} = <span style="color:#fbbf24;font-size:1.1em;">${rounded}</span></strong><br><br><em>Division (Bhaag): ${a} ko ${b} parts mein baanto = ${rounded}</em> 😊`;
    }

    // ── Percentage of ──
    const pctOf = raw.match(/(\d+\.?\d*)\s*(%|percent|℅)\s*(?:of|ka|of the|×|of\s+the)\s*(\d+\.?\d*)/i);
    if (pctOf) {
      const pct = parseFloat(pctOf[1]), num = parseFloat(pctOf[3]);
      const res = ((pct / 100) * num);
      const rounded = Number.isInteger(res) ? res : parseFloat(res.toFixed(4));
      return `🧮 <strong>${pct}% of ${num} = <span style="color:#fbbf24;font-size:1.1em;">${rounded}</span></strong><br><br><em>Formula: (${pct} ÷ 100) × ${num} = ${rounded}</em><br>💡 Percentage = "per 100" — easy! 😊`;
    }

    // ── What percent is X of Y ──
    const whatPct = raw.match(/what\s*percent|kitna\s*percent|(\d+\.?\d*)\s*is\s*what\s*percent/i);
    if (whatPct) {
      const numParts = raw.match(/(\d+\.?\d*).*?(\d+\.?\d*)/);
      if (numParts) {
        const part = parseFloat(numParts[1]), whole = parseFloat(numParts[2]);
        if (whole !== 0) {
          const res = ((part / whole) * 100).toFixed(2);
          return `🧮 <strong>${part} is <span style="color:#fbbf24;">${res}%</span> of ${whole}</strong><br><br><em>Formula: (${part} ÷ ${whole}) × 100 = ${res}%</em> 📐`;
        }
      }
    }

    // ── Percentage increase/decrease ──
    const pctIncrease = raw.match(/percentage\s*(?:increase|badhna)\s*from\s*(\d+\.?\d*)\s*to\s*(\d+\.?\d*)/i);
    if (pctIncrease) {
      const old = parseFloat(pctIncrease[1]), nw = parseFloat(pctIncrease[2]);
      const res = (((nw - old) / old) * 100).toFixed(2);
      const dir = nw > old ? "📈 increase" : "📉 decrease";
      return `🧮 <strong>Percentage ${dir}: <span style="color:#fbbf24;">${Math.abs(res)}%</span></strong><br><br><em>Formula: ((${nw} - ${old}) ÷ ${old}) × 100 = ${res}%</em>`;
    }

    // ── Square Root ──
    const sqrtMatch = raw.match(/(?:sqrt|square\s*root\s*of|√|varg\s*mool)\s*\(?(\d+\.?\d*)\)?/i);
    if (sqrtMatch) {
      const n = parseFloat(sqrtMatch[1]);
      const res = Math.sqrt(n);
      const isWhole = Number.isInteger(res);
      return `🧮 <strong>√${n} = <span style="color:#fbbf24;">${isWhole ? res : res.toFixed(6)}</span></strong><br><br>${isWhole ? "✅ <strong>Perfect square hai!</strong><br>" : ""}Matlab: jo number khud se multiply hoke ${n} banata hai = ${isWhole ? res : res.toFixed(4)} 😊`;
    }

    // ── Cube Root ──
    const cbrtMatch = raw.match(/(?:cbrt|cube\s*root\s*of|∛|ghanshal)\s*\(?(\d+\.?\d*)\)?/i);
    if (cbrtMatch) {
      const n = parseFloat(cbrtMatch[1]);
      const res = Math.cbrt(n);
      const rounded = Number.isInteger(res) ? res : parseFloat(res.toFixed(6));
      return `🧮 <strong>∛${n} = <span style="color:#fbbf24;">${rounded}</span></strong><br><br><em>Cube root: kaunsa number khud se teen baar multiply hoke ${n} banta hai = ${rounded}</em> 🔢`;
    }

    // ── Power/Exponent ──
    const powerMatch = raw.match(/(\d+\.?\d*)\s*(?:\^|\*\*|to\s*the\s*power\s*(?:of)?|ki\s*power|raised\s*to)\s*(\d+\.?\d*)/i);
    if (powerMatch) {
      const base = parseFloat(powerMatch[1]), exp = parseFloat(powerMatch[2]);
      const res = Math.pow(base, exp);
      return `🧮 <strong>${base}^${exp} = <span style="color:#fbbf24;">${res}</span></strong><br><br><em>${base} को ${exp} baar multiply karo = ${res}</em> 💪`;
    }

    // ── Log ──
    const logMatch = raw.match(/(?:log|log10|log base 10)\s*\(?(\d+\.?\d*)\)?/i);
    if (logMatch) {
      const n = parseFloat(logMatch[1]);
      const res = Math.log10(n);
      return `🧮 <strong>log(${n}) = <span style="color:#fbbf24;">${parseFloat(res.toFixed(6))}</span></strong><br><br><em>log₁₀(${n}) — base 10 logarithm</em> 📐`;
    }
    const lnMatch = raw.match(/(?:ln|natural\s*log)\s*\(?(\d+\.?\d*)\)?/i);
    if (lnMatch) {
      const n = parseFloat(lnMatch[1]);
      const res = Math.log(n);
      return `🧮 <strong>ln(${n}) = <span style="color:#fbbf24;">${parseFloat(res.toFixed(6))}</span></strong><br><br><em>Natural logarithm (base e = 2.718...) of ${n}</em> 📐`;
    }

    // ── Geometry ──
    const circleArea = raw.match(/area\s*(?:of)?\s*circle\s*(?:r(?:adius)?\s*=?\s*)(\d+\.?\d*)/i);
    if (circleArea) {
      const r = parseFloat(circleArea[1]);
      const area = (Math.PI * r * r).toFixed(4);
      const circ = (2 * Math.PI * r).toFixed(4);
      return `🧮 <strong>Circle (r=${r}):</strong><br>📐 Area = πr² = <span style="color:#fbbf24;">${area} sq units</span><br>📏 Circumference = 2πr = <span style="color:#fbbf24;">${circ} units</span><br><br><em>π ≈ 3.14159</em>`;
    }
    const rectArea = raw.match(/area\s*(?:of)?\s*rect(?:angle)?\s*(\d+\.?\d*)\s*[x×,\s*]\s*(\d+\.?\d*)/i);
    if (rectArea) {
      const l = parseFloat(rectArea[1]), b2 = parseFloat(rectArea[2]);
      return `🧮 <strong>Rectangle (${l} × ${b2}):</strong><br>📐 Area = <span style="color:#fbbf24;">${l*b2} sq units</span><br>📏 Perimeter = 2(l+b) = <span style="color:#fbbf24;">${2*(l+b2)} units</span>`;
    }
    const squareArea = raw.match(/area\s*(?:of)?\s*square\s*(?:side\s*=?\s*|a\s*=?\s*)(\d+\.?\d*)/i);
    if (squareArea) {
      const a = parseFloat(squareArea[1]);
      return `🧮 <strong>Square (side=${a}):</strong><br>📐 Area = a² = <span style="color:#fbbf24;">${a*a} sq units</span><br>📏 Perimeter = 4a = <span style="color:#fbbf24;">${4*a} units</span>`;
    }
    const triangleArea = raw.match(/area\s*(?:of)?\s*triangle\s*(?:b(?:ase)?\s*=?\s*)(\d+\.?\d*)\s*(?:h(?:eight)?\s*=?\s*)(\d+\.?\d*)/i);
    if (triangleArea) {
      const b3 = parseFloat(triangleArea[1]), h = parseFloat(triangleArea[2]);
      return `🧮 <strong>Triangle (base=${b3}, height=${h}):</strong><br>📐 Area = ½ × b × h = <span style="color:#fbbf24;">${0.5*b3*h} sq units</span>`;
    }
    const cylinderVol = raw.match(/volume\s*(?:of)?\s*cylinder\s*r\s*=?\s*(\d+\.?\d*)\s*h\s*=?\s*(\d+\.?\d*)/i);
    if (cylinderVol) {
      const r = parseFloat(cylinderVol[1]), h = parseFloat(cylinderVol[2]);
      const vol = (Math.PI * r * r * h).toFixed(4);
      return `🧮 <strong>Cylinder (r=${r}, h=${h}):</strong><br>📐 Volume = πr²h = <span style="color:#fbbf24;">${vol} cubic units</span>`;
    }
    const sphereVol = raw.match(/volume\s*(?:of)?\s*sphere\s*r\s*=?\s*(\d+\.?\d*)/i);
    if (sphereVol) {
      const r = parseFloat(sphereVol[1]);
      const vol = ((4/3) * Math.PI * r * r * r).toFixed(4);
      return `🧮 <strong>Sphere (r=${r}):</strong><br>📐 Volume = 4/3 × πr³ = <span style="color:#fbbf24;">${vol} cubic units</span>`;
    }

    // ── Simple Interest ──
    const siMatch = raw.match(/simple\s*interest|SI\b/i);
    if (siMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 3) {
        const P = parseFloat(nums[0]), R = parseFloat(nums[1]), T = parseFloat(nums[2]);
        const si = (P * R * T) / 100;
        const amount = P + si;
        return `🧮 <strong>Simple Interest:</strong><br>Principal (P) = ₹${P}<br>Rate (R) = ${R}%<br>Time (T) = ${T} years<br><br>📐 SI = (P×R×T)/100 = <span style="color:#fbbf24;">₹${si}</span><br>💰 Total Amount = P + SI = <span style="color:#fbbf24;">₹${amount}</span>`;
      }
    }

    // ── Compound Interest ──
    const ciMatch = raw.match(/compound\s*interest|CI\b/i);
    if (ciMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 3) {
        const P = parseFloat(nums[0]), R = parseFloat(nums[1]), T = parseFloat(nums[2]);
        const amount = P * Math.pow(1 + R/100, T);
        const ci = amount - P;
        return `🧮 <strong>Compound Interest:</strong><br>Principal (P) = ₹${P}<br>Rate (R) = ${R}%<br>Time (T) = ${T} years<br><br>📐 Amount = P(1 + R/100)ᵀ = <span style="color:#fbbf24;">₹${amount.toFixed(2)}</span><br>💰 CI = Amount - P = <span style="color:#fbbf24;">₹${ci.toFixed(2)}</span>`;
      }
    }

    // ── HCF/LCM ──
    const hcfMatch = raw.match(/(?:hcf|gcd)\s*(?:of)?\s*(\d+)\s*(?:and|,|\s+)\s*(\d+)/i);
    if (hcfMatch) {
      const a = parseInt(hcfMatch[1]), b = parseInt(hcfMatch[2]);
      const g = gcd(a, b);
      const l = (a * b) / g;
      return `🧮 <strong>HCF of ${a} and ${b} = <span style="color:#fbbf24;">${g}</span></strong><br>Bonus: LCM of ${a} and ${b} = <span style="color:#fbbf24;">${l}</span><br><br><em>HCF = Highest Common Factor (sabse bada common factor)</em>`;
    }
    const lcmMatch = raw.match(/lcm\s*(?:of)?\s*(\d+)\s*(?:and|,|\s+)\s*(\d+)/i);
    if (lcmMatch) {
      const a = parseInt(lcmMatch[1]), b = parseInt(lcmMatch[2]);
      const g = gcd(a, b);
      const l = (a * b) / g;
      return `🧮 <strong>LCM of ${a} and ${b} = <span style="color:#fbbf24;">${l}</span></strong><br>Bonus: HCF of ${a} and ${b} = <span style="color:#fbbf24;">${g}</span><br><br><em>LCM = Least Common Multiple (sabse chhota common multiple)</em>`;
    }

    // ── Factorial ──
    const factMatch = raw.match(/(\d+)\s*!|factorial\s*(?:of)?\s*(\d+)/i);
    if (factMatch) {
      const n = parseInt(factMatch[1] || factMatch[2]);
      if (n > 20) return `🧮 ${n}! bahut bada number hai — calculator bhi ghabra jaata hai! 😅 (it's astronomically large!)`;
      const res = factorial(n);
      return `🧮 <strong>${n}! = <span style="color:#fbbf24;">${res}</span></strong><br><br><em>Factorial: ${n}! = ${Array.from({length:n},(_,i)=>n-i).join(' × ')} = ${res}</em>`;
    }

    // ── Pythagoras ──
    const pythagorasMatch = raw.match(/pythagoras|hypotenuse|a=(\d+).*b=(\d+)|b=(\d+).*c=(\d+)/i);
    if (pythagorasMatch) {
      const nums = raw.match(/(\d+\.?\d*)/g);
      if (nums && nums.length >= 2) {
        const a = parseFloat(nums[0]), b = parseFloat(nums[1]);
        const c = Math.sqrt(a*a + b*b);
        return `🧮 <strong>Pythagoras Theorem:</strong><br>a = ${a}, b = ${b}<br>c² = a² + b² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${a*a + b*b}<br>c = √${a*a + b*b} = <span style="color:#fbbf24;">${parseFloat(c.toFixed(4))}</span><br><br><em>a² + b² = c² — right angle triangle ka rule! 📐</em>`;
      }
    }

    // ── Prime number check ──
    const primeCheck = raw.match(/(?:is\s*)?(\d+)\s*(?:prime|prime\s*number|अभाज्य)/i);
    if (primeCheck) {
      const n = parseInt(primeCheck[1]);
      const isPrime = checkPrime(n);
      return `🧮 <strong>${n} ${isPrime ? "✅ PRIME hai!" : "❌ Prime nahi hai."}</strong><br><br><em>${isPrime ? `${n} ko sirf 1 aur ${n} se divide kar sakte hain!` : `${n} ke zyada factors hain — prime nahi.`}</em>`;
    }

    // ── Trig functions ──
    const sinMatch = raw.match(/sin\s*\(?\s*(\d+\.?\d*)\s*°?\)?/i);
    if (sinMatch) {
      const deg = parseFloat(sinMatch[1]);
      const res = Math.sin(deg * Math.PI / 180);
      return `🧮 <strong>sin(${deg}°) = <span style="color:#fbbf24;">${parseFloat(res.toFixed(6))}</span></strong>`;
    }
    const cosMatch = raw.match(/cos\s*\(?\s*(\d+\.?\d*)\s*°?\)?/i);
    if (cosMatch) {
      const deg = parseFloat(cosMatch[1]);
      const res = Math.cos(deg * Math.PI / 180);
      return `🧮 <strong>cos(${deg}°) = <span style="color:#fbbf24;">${parseFloat(res.toFixed(6))}</span></strong>`;
    }
    const tanMatch = raw.match(/tan\s*\(?\s*(\d+\.?\d*)\s*°?\)?/i);
    if (tanMatch) {
      const deg = parseFloat(tanMatch[1]);
      const res = Math.tan(deg * Math.PI / 180);
      return `🧮 <strong>tan(${deg}°) = <span style="color:#fbbf24;">${parseFloat(res.toFixed(6))}</span></strong>`;
    }

    // ── Safe arithmetic expression eval ──
    // Replace x (standalone, between numbers) with *
    let cleanExpr = expr
      .replace(/[^0-9+\-*/().%\s]/g, "")
      .trim();

    if (/^[\d\s+\-*/().%]+$/.test(cleanExpr) && /[+\-*/]/.test(cleanExpr)) {
      try {
        const result = Function('"use strict"; return (' + cleanExpr + ')')();
        if (typeof result === "number" && isFinite(result)) {
          const rounded = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
          return `🧮 <strong>${raw} = <span style="color:#fbbf24;font-size:1.15em;">${rounded}</span></strong><br><br>Calculator ready! Aur kya calculate karna hai? 😄`;
        }
      } catch (_) {}
    }

    return null;
  }

  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  function factorial(n) { if (n <= 1) return 1; return n * factorial(n-1); }
  function checkPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
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
💻 Python, Java, C Language | 🌐 HTML, CSS, JavaScript, React<br>
🗄️ MySQL Database | 📊 MS Office Suite | 🧾 Tally & Accounting<br>
🤖 AI Development (mujhe banaya! 😄)<br><br>
<strong>Teaching Style:</strong><br>
✅ Concept-based — samjho, ratto mat!<br>
✅ Personal attention — chhote batches<br>
✅ Regular tests & progress reports<br>
✅ Free demo class available!<br><br>
<strong>Contact:</strong><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;font-weight:700;">WhatsApp karo</a><br>
💼 <a href="https://www.linkedin.com/in/aman-khan-210187324" target="_blank" style="color:#60a5fa;">LinkedIn</a><br>
🌐 <a href="https://aman00369.github.io/FuturePath-Learning-Institute/" target="_blank" style="color:#a78bfa;">Website</a><br><br>
<em>😄 Aman Sir itne dedicated hain ki unhone ek poora AI bana diya students ke liye! Respect! 🙏</em>`,

    fees: () => {
      const cards = INSTITUTE.fees.map(f =>
        `<div class="ai-course-card" onclick="location.href='#register'">
          <span>📚 ${f.name}</span>
          <span class="ai-course-price">${f.price}</span>
        </div>`
      ).join("");
      return `<span class="aie">💰</span><strong>FuturePath — Complete Fee Structure!</strong><br><br>${cards}<br>
        💳 One-time Admission Fee: <strong>₹300 only</strong><br>
        ✅ No hidden charges!<br>
        ✅ Free Demo Class available!<br>
        ✅ Mon-Sun, 3 batches daily<br><br>
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

    misbah: () => {
      const s = INSTITUTE.students.misbah;
      doEmojiRain(["😂", "🏏", "🤣", "💪", "😅"]);
      return `<span class="aie">🏏</span><strong>Misbah — FuturePath ka Most Iconic Student!</strong><br><br>
Haan bhai, hamaare institute mein ek bahut famous student hai — <strong>Misbah</strong>! 😄<br><br>
<strong>Uske baare mein kuch famous baatein:</strong><br>
😂 ${s.traits[0]}<br>
💛 ${s.traits[1]}<br>
💪 ${s.traits[2]}<br>
😅 ${s.traits[3]}<br>
🌟 ${s.traits[4]}<br>
🏏 ${s.traits[5]}<br>
😂 ${s.traits[6]}<br><br>
<strong>Aman Sir ka Misbah ke liye special message:</strong><br>
<em>"Misbah, tu jaanta hai tu kar sakta hai — bas ek baar decide kar le ki rukna nahi! Tere andar potential hai, bhai! 🔥"</em><br><br>
<em>💡 Lesson for all: Motivation aati jaati hai — but <strong>discipline</strong> hamesha kaam karti hai! WTC final mat miss karna padhai ke liye! 🏏😄</em>`;
    },

    // ── SCIENCE ──
    photosynthesis: `<span class="aie">🌿</span><strong>Photosynthesis — Plants ka Khana Banana!</strong><br><br>
<strong>Formula:</strong> CO₂ + H₂O + Sunlight → Glucose + O₂<br><br>
<strong>Step by step:</strong><br>
1️⃣ Patte ki stomata (chhote chhid) se CO₂ andar<br>
2️⃣ Roots se paani patte tak<br>
3️⃣ Chlorophyll sunlight pakadta hai<br>
4️⃣ Glucose banta hai (plant ka food!)<br>
5️⃣ Oxygen bahar — jo hum breathe karte hain! 🌬️<br><br>
🌿 Plants: CO₂ IN → O₂ OUT<br>
😮 Humans: O₂ IN → CO₂ OUT<br>
We need each other! 🤝<br><br>
<em>😄 Thank the plants for every breath you take! 🌳</em>`,

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
<strong>Ohm's Law:</strong><br>
<code>V = I × R</code> | <code>I = V/R</code> | <code>R = V/I</code><br><br>
<strong>Power:</strong> <code>P = V × I</code> (Watts)<br><br>
<strong>Series vs Parallel:</strong><br>
🔗 Series — ek fuse → sab band!<br>
⑂ Parallel — ek fuse → baaki chalta hai (ghar mein parallel!)<br><br>
<em>😄 Bijli ki speed = Light ki speed! 3×10⁸ m/s! ⚡</em>`,

    // ── MATHS ──
    algebra: `<span class="aie">📐</span><strong>Algebra — Letters se Maths!</strong><br><br>
<strong>Example:</strong> x + 5 = 12 → x = 7<br><br>
<strong>Linear Equation solve karna:</strong><br>
2x + 3 = 11 → 2x = 8 → x = 4 ✅<br><br>
<strong>Important Identities:</strong><br>
📌 (a+b)² = a² + 2ab + b²<br>
📌 (a-b)² = a² - 2ab + b²<br>
📌 (a+b)(a-b) = a² - b²<br>
📌 (x+a)(x+b) = x² + (a+b)x + ab<br><br>
<strong>Quadratic Formula:</strong><br>
<code>x = (-b ± √(b²-4ac)) / 2a</code><br><br>
<em>😄 Algebra ek puzzle hai — once you get it, it's actually fun! 🧩</em>`,

    // ── CS ──
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
fruits = ["mango", "apple"]
print(fruits[0])  # mango</pre><br>
<em>😄 Python seekhna hai? Aman Sir FuturePath mein sikhate hain! 📞 8910517578</em>`,

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
  &lt;/body&gt;
&lt;/html&gt;</pre><br>
<em>😄 Aman Sir ek real Front-end Developer hain — HTML unhe daily kaam aata hai! 💻</em>`,

    msoffice: `<span class="aie">📊</span><strong>MS Office — Har Job Ke Liye Zaroori!</strong><br><br>
📝 <strong>MS Word</strong> — Documents, letters, essays<br>
📊 <strong>MS Excel</strong> — Spreadsheets, calculations, accounts<br>
📽️ <strong>MS PowerPoint</strong> — Presentations, slideshows<br><br>
<strong>Excel Important Functions:</strong><br>
<code>=SUM(A1:A10)</code> → Numbers add karo<br>
<code>=AVERAGE(A1:A10)</code> → Average nikalo<br>
<code>=IF(A1>50,"Pass","Fail")</code> → Condition<br>
<code>=VLOOKUP(value,range,col,0)</code> → Search in table<br><br>
<strong>Word Shortcuts:</strong><br>
Ctrl+B → Bold | Ctrl+I → Italic | Ctrl+Z → Undo<br>
Ctrl+S → Save | Ctrl+P → Print | F7 → Spell Check<br><br>
<em>📍 ₹1,200/month at FuturePath + Certificate! 🏆</em>`,

    tally: `<span class="aie">🧾</span><strong>Tally — India ka #1 Accounting Software!</strong><br><br>
<strong>Tally kya karta hai?</strong><br>
📒 Ledger banana | 💰 Vouchers enter karna<br>
📊 Balance Sheet | 🧾 GST filing<br>
📦 Stock/Inventory | 💸 Payroll<br><br>
<strong>Important Shortcuts:</strong><br>
F5 → Payment | F6 → Receipt | F8 → Sales | F9 → Purchase<br>
F2 → Date change | Alt+F3 → Company | Ctrl+A → Save<br><br>
<em>📍 Aman Sir Tally sikhate hain — ₹1,200/month! Career ke liye best! 💼</em>`,

    gst: `<span class="aie">🧾</span><strong>GST — Goods & Services Tax</strong><br><br>
1 July 2017 ko lagu hua India mein!<br><br>
<strong>GST Slabs:</strong><br>
⚪ 0% — Anaaj, milk, education, health<br>
🟡 5% — Basic goods, packaged food<br>
🟠 12% — Computers, processed food<br>
🔵 18% — Electronics, restaurants (most common!)<br>
🔴 28% — Luxury cars, tobacco<br><br>
<strong>Types:</strong><br>
🏛️ CGST — Centre ka hissa<br>
🏠 SGST — State ka hissa<br>
🔀 IGST — Interstate transactions<br><br>
<em>😄 Us samose mein bhi 5% GST hai! Notice karo receipt! 🥟</em>`,

    // ── FUN ──
    jokes: [
      "Programming joke: Why do programmers prefer dark mode? Kyunki LIGHT attracts BUGS! 🐛😂",
      "Math book sad kyun thi? Kyunki usmein bahut zyada PROBLEMS thi! 📚😅",
      "Misbah ne homework kyu nahi kiya? 'Sir, WTC match tha!' Aman Sir: 'India bhi khel raha tha — main ne bhi dekha aur homework bhi check kiya!' 😂🏏",
      "Python developer party mein gaya. 'Kya karte ho?' 'Mujhe snakes pasand hain!' Sab bhaag gaye! 🐍😂",
      "Computer thanda kyun tha? Kyunki usne apna WINDOWS khula chhod diya! 🪟❄️",
      "Programmer ka favorite khana? MICROCHIPS! 🍟💻",
      "Oxygen aur Magnesium mile — teacher boli 'OMg!' 😂",
      "Student exam mein: 'Ghar pe sab yaad tha...' Aman Sir: 'Toh ghar pe hi paper dete! 😄'",
      "Misbah: 'Sir main kal zaroor padhunga.' Sab students ek saath: 'Yeh kal kabhi nahi aata!' 😂😂",
      "Why can't Tally keep secrets? Har cheez DEBIT ya CREDIT ho jaati hai! 🧾😂",
      "Teacher: Gravity kya hai? Student: 'Wo cheez jo meri pencil girne pe blame hoti hai!' 🍎😄",
      "1 + 1 = 2, 2 + 2 = 4... Misbah: 'Sir ye WTC team selection se mushkil hai!' 😂🏏",
    ],

    solar: `<span class="aie">🌌</span><strong>Solar System — 8 Planets!</strong><br><br>
1️⃣ 🌑 <strong>Mercury</strong> — Sabse chhota, sabse paas Sun ke<br>
2️⃣ 🌟 <strong>Venus</strong> — Sabse garam! (465°C), ulta ghoomta<br>
3️⃣ 🌍 <strong>Earth</strong> — Hamaara pyaara ghar! 😊<br>
4️⃣ 🔴 <strong>Mars</strong> — Laal planet, future home?<br>
5️⃣ 🟤 <strong>Jupiter</strong> — Sabse bada! Great Red Spot<br>
6️⃣ 💛 <strong>Saturn</strong> — Beautiful rings! 💍<br>
7️⃣ 🔵 <strong>Uranus</strong> — Side pe jhuka ghoomta hai<br>
8️⃣ 🌊 <strong>Neptune</strong> — Sabse door, fastest winds!<br><br>
<strong>Trick:</strong> "<em>My Very Energetic Mother Just Served Us Nachos</em>"<br>
<em>😄 Pluto ab dwarf planet hai — uski feelings mat poochho! 😢</em>`,

    india: `<span class="aie">🇮🇳</span><strong>India — Mera Pyaara Desh!</strong><br><br>
🏛️ Capital: New Delhi | 👥 Population: ~140 crore<br>
📅 Independence: 15 August 1947<br>
📜 Republic Day: 26 January 1950<br>
💰 Currency: Indian Rupee (₹)<br><br>
<strong>Famous Indians:</strong><br>
🕊️ Mahatma Gandhi — Father of the Nation<br>
📜 Dr. Ambedkar — Father of Indian Constitution<br>
🔭 APJ Abdul Kalam — Missile Man of India<br>
🧪 CV Raman — Nobel Prize in Physics<br><br>
<em>😄 India ne duniya ko Zero, Chess, Yoga aur Decimal system diya! 🏆</em>`,
  };

  // ════════════════════════════════════════════
  //  NAME DETECTION
  // ════════════════════════════════════════════
  function detectName(q) {
    const nameMatch = q.match(/(?:i am|i'm|mera naam|main|my name is|naam hai|call me)\s+([a-zA-Z]+)/i)
      || q.match(/^([A-Z][a-z]+)(?:\s|$)/);
    if (nameMatch) {
      const n = nameMatch[1];
      if (n.length > 2 && !["the","and","are","you","how","what","why","sir","can","yes","nahi","hello","okay","that"].includes(n.toLowerCase())) {
        return n;
      }
    }
    return null;
  }

  // ════════════════════════════════════════════
  //  MAIN RESPONSE ENGINE
  // ════════════════════════════════════════════
  function getResponse(input) {
    const q = input.toLowerCase().trim();
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
        Ab main tumhe personally ${userName} bolke bulaunga!<br><br>
        Ab bolo — kya chahiye? Maths? Science? Coding? Institute info? Jokes? Ya bas timepass? 😄<br><br>
        Sab kuch kar sakta hoon main! 🤖✨`;
    }

    // ── Greetings & small talk ──
    if (/^(hi+|hello+|hey+|hii+|namaste|namaskar|hola|salam|assalam|yo+|sup)/.test(q)) {
      const hour = new Date().getHours();
      const timeMsg = hour < 12 ? "Good morning! Subah subah padhai — good habit! ☀️" :
                      hour < 17 ? "Good afternoon! Khaana ho gaya? 😄" :
                      "Good evening! Din kaisa tha? 😊";
      return r([
        `<span class="aie">👋</span><strong>${timeMsg}</strong><br><br>Main hoon BrainBot${nameStr} — Aman Sir ka AI! 🤖<br><br>Kya poochna hai aaj? Science, Maths, Coding, ya sirf baat karna hai? 😊`,
        `<span class="aie">🎉</span>Hey${nameStr}! BrainBot ready hai! 💪<br><br>Bolo kya kaam hai — calculator? homework? institute info? Sab karta hoon! 😄`,
      ]);
    }

    // ── How are you / Kaise ho ──
    if (/(how are you|kaise ho|kaisa hai|kya hal|what's up|kya chal raha|wassup|hows it going)/.test(q)) {
      return r([
        `<span class="aie">😄</span>Main ekdum <strong>mast</strong> hoon${nameStr}! Code likhna aur samjhana — yahi meri life hai! 🤖<br><br>Aur tum kaise ho? Padhai chal rahi hai theek se? 😊`,
        `<span class="aie">🌟</span>Arre bahut badhiya!${nameStr ? " " + nameStr + "," : ""} aaj ek naya student aaya — woh bohot smart sawaal pooch raha tha! 😊<br><br>Tum batao — kya chal raha hai life mein? Koi subject mushkil lag raha? 📚`,
        `<span class="aie">🤖</span>Bhai main toh robot hoon — main hamesha 100% fit hoon! 😄 No headaches, no stress!<br><br>Tum kaise ho${nameStr ? " " + nameStr : ""}? Kya padh rahe ho aajkal? 📖`,
      ]);
    }

    // ── What can you do ──
    if (/(what can you do|kya kar sakte|tumhara kaam|abilities|features|help me|kya sikhate|kya poochh sakta)/.test(q)) {
      return `<span class="aie">💡</span><strong>Main kya kar sakta hoon?</strong><br><br>
        🧪 <strong>Science</strong> — Physics, Chemistry, Biology (Class 4-12)<br>
        📐 <strong>Maths</strong> — Basic to Advanced (fractions → calculus concepts)<br>
        🧮 <strong>Calculator</strong> — Simple aur complex calculations<br>
        💻 <strong>Coding</strong> — Python, Java, HTML, CSS, JS, React, SQL<br>
        📊 <strong>MS Office</strong> — Word, Excel, PowerPoint shortcuts & tips<br>
        🧾 <strong>Tally & Accounting</strong> — GST, ledgers, vouchers<br>
        🌍 <strong>GK & History</strong> — India, World, Science facts<br>
        🏫 <strong>Institute Info</strong> — Fees, courses, timings, demo class<br>
        😂 <strong>Jokes & Fun</strong> — Misbah ke kisse bhi! 😄<br>
        💬 <strong>Casual baat</strong> — bas chat karna ho toh woh bhi!<br><br>
        <em>Seedha poochho — main hamesha ready hoon! 🤖</em>`;
    }

    // ── Thanks ──
    if (/(thank|thanks|shukriya|dhanyawad|thx|ty\b|bahut acha|very helpful|great bot)/.test(q)) {
      return r([
        `<span class="aie">🥹</span>Bahut bahut welcome${nameStr}! 😊 Yeh sunke dil khush ho gaya!<br><br>Koi aur sawaal ho toh seedha poochho — main hoon! 🤖💪`,
        `<span class="aie">❤️</span>Arre yaar${nameStr}! Itna formal mat ho — hum dost hain! 😄<br><br>Aman Sir ka message: "<em>Meri taraf se bhi thanks for studying hard!</em>" 🎓`,
      ]);
    }

    // ── Bye ──
    if (/(bye|goodbye|ciao|alvida|ok bye|okay bye|tata|good night|so ja)/.test(q)) {
      return `<span class="aie">👋</span>Bye bye${nameStr}! Phir milenge! 😊<br><br>
        📞 Aman Sir: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
        📍 Near Taiba Club, Phoolbagan, Kolkata<br><br>
        <em>Khub padho, khub seekho — FuturePath mein aao! 🎓✨</em>`;
    }

    // ── Who made you ──
    if (/(who made|who built|who created|created by|made by|kisne banaya|kaun banaya|your creator|who are you|what are you)/.test(q)) {
      return `<span class="aie">🤖</span>Main <strong>BrainBot</strong> hoon — banaya hai <strong>Aman Sir (Aman Khan)</strong> ne!<br><br>
        Woh ek real <strong>Front-end Developer + Teacher</strong> hain jo FuturePath Learning Institute chalate hain Kolkata mein! 🏫<br><br>
        Koi external API nahi — main 100% Aman Sir ki mehnat aur code se chalta hoon! 💪<br><br>
        Main isliye bana hoon ki Class 4 se bade log — sab ke sawaalon ka jawab de sakoon! 😊`;
    }

    // ── Calculator trigger words ──
    if (/(calculate|calc|kitna|compute|solve|answer|result|barabar|equal|=\?|kya hoga|answer kya)/.test(q)) {
      const calcResult = tryCalculate(q);
      if (calcResult) return calcResult;
    }

    // ── Direct calculation first ──
    const calcResult = tryCalculate(q);
    if (calcResult) return calcResult;

    // ── Misbah ──
    if (/(misbah|the student who lies|wtc student|jo jhooth bolta|famous student)/.test(q)) return KB.misbah();

    // ── Science ──
    if (/(photosynthesis|plants food|plant khana)/.test(q)) return KB.photosynthesis;
    if (/(newton|laws of motion|inertia|f=ma)/.test(q)) return KB.newton;
    if (/(electricity|bijli|current|voltage|ohm|circuit)/.test(q)) return KB.electricity;
    if (/(hawa|what is air|air kya|atmosphere)/.test(q)) return `<span class="aie">💨</span><strong>Hawa (Air)</strong><br><br>
Hawa gases ka mixture hai!<br>🔵 Nitrogen — 78% | 🟡 Oxygen — 21% | ⚪ CO₂ — 0.04%<br><br>
<strong>Hawa ke kaam:</strong><br>
✅ Saans lene ke liye | ✅ Plants ke liye CO₂ | ✅ Aag jalane ke liye<br><br><em>😄 Ek saans mein ~0.5 litre hawa lete hain hum!</em>`;

    if (/(gravity|gravitational|neeche girti|free fall)/.test(q)) return `<span class="aie">🌍</span><strong>Gravity!</strong><br><br>
<strong>g = 9.8 m/s²</strong> — Earth ki gravity!<br><br>
🍎 Seb girata hai — Newton ne dekha!<br>
🌙 Moon ka ek chakkar 27 din mein<br>
🌊 Oceans ki tides Moon ki gravity se<br><br>
<strong>Newton's Law:</strong> F = G × (m₁ × m₂) / r²<br><br>
<em>😄 Moon pe 60 kg wala sirf 10 kg feel karega! 🚀</em>`;

    if (/(sound|awaaz|frequency|amplitude)/.test(q)) return `<span class="aie">🔊</span><strong>Awaaz (Sound)</strong><br><br>
Sound vibrations se banti hai jo hawa mein travel karti hai!<br><br>
🌬️ Hawa mein: ~340 m/s | 💧 Paani mein: ~1500 m/s<br>
❌ Space mein: nahi travel karti! (No air = no sound)<br><br>
📊 Frequency — vibrations per second (Hertz)<br>
📣 Amplitude — vibration size (loudness)<br>
Human ear: 20 Hz to 20,000 Hz<br><br>
<em>😄 Lightning pehle dikhti hai, thunder baad mein — light > sound! ⚡</em>`;

    if (/(solar system|planet|surya mandal|mangal|jupiter|saturn|neptune)/.test(q)) return KB.solar;
    if (/(india|bharat|hamaara desh)/.test(q)) return KB.india;
    if (/(atom|proton|neutron|electron|nucleus)/.test(q)) return `<span class="aie">⚛️</span><strong>Atom!</strong><br><br>
Kisi bhi cheez ka sabse chhota building block!<br><br>
🔴 <strong>Proton</strong> — Nucleus mein, Positive (+)<br>
⚫ <strong>Neutron</strong> — Nucleus mein, Neutral (0)<br>
🔵 <strong>Electron</strong> — Nucleus ke chaaron taraf, Negative (-)<br><br>
📌 Atomic Number = protons count<br>
📌 Mass Number = protons + neutrons<br><br>
<em>😄 Hum sab atoms se bane hain — literally stardust! 🌟</em>`;

    // ── Maths ──
    if (/(algebra|quadratic|equation|solve karo|x ki value|variable)/.test(q)) return KB.algebra;
    if (/(percentage|percent|kitne marks)/.test(q)) return `<span class="aie">📊</span><strong>Percentage Formula!</strong><br><br>
<code>% = (Part ÷ Whole) × 100</code><br><br>
Example: 24/30 → (24÷30)×100 = <strong>80%</strong> 🏆<br><br>
<code>Value = (% ÷ 100) × Total</code><br>
500 ka 20% = (20÷100)×500 = <strong>₹100</strong><br><br>
<em>😄 Exams mein yeh formula zaroor aata hai! 📝</em>`;

    if (/(geometry|area|perimeter|volume|pythagoras|circle|triangle|rectangle|square shape)/.test(q)) return `<span class="aie">📏</span><strong>Geometry Formulas!</strong><br><br>
⬛ Square: Area = a² | Perimeter = 4a<br>
▬ Rectangle: Area = l×b | Perimeter = 2(l+b)<br>
🔺 Triangle: Area = ½×b×h | Angles = 180°<br>
⭕ Circle: Area = πr² | Circumference = 2πr<br>
📦 Cube: Volume = a³ | Surface Area = 6a²<br>
🔵 Sphere: Volume = 4/3πr³<br>
🥫 Cylinder: Volume = πr²h<br><br>
<strong>Pythagoras: a² + b² = c²</strong> 📐<br><br>
<em>💡 Specific formula chahiye? Likho — e.g. "area of circle r=5"</em>`;

    if (/(trigonometry|sin|cos|tan|soh cah toa|hypotenuse)/.test(q)) return `<span class="aie">📐</span><strong>Trigonometry — SOH CAH TOA!</strong><br><br>
🔵 <strong>Sin θ = Opposite / Hypotenuse</strong><br>
🟢 <strong>Cos θ = Adjacent / Hypotenuse</strong><br>
🟡 <strong>Tan θ = Opposite / Adjacent</strong><br><br>
<strong>Common Values:</strong><br>
sin(30°)=1/2 | cos(30°)=√3/2 | tan(30°)=1/√3<br>
sin(45°)=1/√2 | cos(45°)=1/√2 | tan(45°)=1<br>
sin(60°)=√3/2 | cos(60°)=1/2 | tan(60°)=√3<br><br>
<em>💡 Specific value chahiye? "sin(45)" type karo — main calculate kar deta hoon! 🧮</em>`;

    // ── CS/Coding ──
    if (/(python|py code)/.test(q)) return KB.python;
    if (/(html|hypertext)/.test(q)) return KB.html;
    if (/(javascript|js |dom |jquery)/.test(q)) return `<span class="aie">⚡</span><strong>JavaScript!</strong><br><br>
<pre>let name = "Rahul";
const age = 15;

function greet(n) {
  alert("Hello " + n + "!");
}
greet(name);

// If-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor — FuturePath join karo! 😄");
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}</pre><br>
<em>😄 BrainBot ka dimag JavaScript se bana hai! Aman Sir ne likha! 🤖</em>`;

    if (/(java |java code|oops|class object)/.test(q) && !/(javascript)/.test(q)) return `<span class="aie">☕</span><strong>Java Programming!</strong><br><br>
<pre>public class Hello {
    public static void main(String[] args) {
        System.out.println("Namaste!");
        
        int age = 15;
        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }
        
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}</pre><br>
<strong>OOP Concepts:</strong> Class | Object | Inheritance | Polymorphism<br><br>
<em>😄 Aman Sir Java sikhate hain! 📞 8910517578</em>`;

    if (/(database|sql|mysql|select|insert|create table)/.test(q)) return `<span class="aie">🗄️</span><strong>SQL / MySQL!</strong><br><br>
<pre>CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  marks FLOAT
);

INSERT INTO students VALUES (1, 'Rahul', 85);
SELECT * FROM students;
SELECT name FROM students WHERE marks > 80;
UPDATE students SET marks = 90 WHERE name = 'Rahul';
DELETE FROM students WHERE id = 1;</pre><br>
<em>😄 WhatsApp, Instagram, YouTube — sab databases use karte hain! 🗄️</em>`;

    // ── MS Office & Tally ──
    if (/(ms office|microsoft office|word excel|office suite)/.test(q)) return KB.msoffice;
    if (/(excel|spreadsheet|vlookup|sum formula)/.test(q)) return KB.msoffice;
    if (/(tally|tally erp|tally prime)/.test(q)) return KB.tally;
    if (/(gst|cgst|sgst|igst|goods.*service.*tax)/.test(q)) return KB.gst;
    if (/(accounting|golden rule|debit credit|balance sheet|ledger|journal entry)/.test(q)) return `<span class="aie">💰</span><strong>Accounting ke Golden Rules!</strong><br><br>
1️⃣ <strong>Personal Account:</strong> Debit the Receiver | Credit the Giver<br>
2️⃣ <strong>Real Account:</strong> Debit what comes in | Credit what goes out<br>
3️⃣ <strong>Nominal Account:</strong> Debit expenses/losses | Credit incomes/gains<br><br>
<strong>Important Terms:</strong><br>
💰 Asset — jo business ke paas hai<br>
💳 Liability — jo business ko dena hai<br>
👤 Capital — owner ka paisa<br>
📒 Ledger — accounts ki book<br><br>
<em>😄 Aman Sir Tally & Accounting sikhate hain — ₹1,200/month! 🧾</em>`;

    // ── Institute related ──
    if (/(aman sir|aman khan|teacher kaun|sir ke baare)/.test(q)) return KB.amanSir;
    if (/(fees|fee|kitna|price|cost|charge|monthly|mahina|kitne paise)/.test(q)) return KB.fees();
    if (/(location|address|kahan|phoolbagan|taiba|kolkata mein|kaise aana|kahan padhate)/.test(q)) return KB.location;
    if (/(contact|phone|call|whatsapp|number)/.test(q)) return `<span class="aie">📞</span><strong>Aman Sir se Contact Karo!</strong><br><br>
📱 <strong>Mobile:</strong> <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <strong>WhatsApp:</strong> <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;font-weight:700;">Click karke message karo</a><br>
💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aman-khan-210187324" target="_blank" style="color:#60a5fa;">Aman Khan</a><br>
🌐 <strong>Website:</strong> <a href="https://aman00369.github.io/FuturePath-Learning-Institute/" target="_blank" style="color:#a78bfa;">FuturePath Website</a><br><br>
📍 Near Taiba Club, Phoolbagan, Kolkata<br><br>
<em>Jaldi call karo — limited seats hain! 🏃</em>`;

    if (/(demo|free class|trial class|pehle dekhna)/.test(q)) return `<span class="aie">🎓</span><strong>FREE Demo Class! 🎉</strong><br><br>
Haan! Aman Sir dete hain <strong>free trial class</strong> — bina kisi commitment ke!<br><br>
Pehle dekho kaise padhate hain — phir decide karo! 😊<br><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">WhatsApp pe book karo</a><br><br>
Admission fee sirf <strong>₹300</strong> (one-time)!`;

    if (/(timing|batch|time|morning|evening|afternoon|schedule|kab aaye)/.test(q)) return `<span class="aie">⏰</span><strong>Batch Timings!</strong><br><br>
🌅 <strong>Morning:</strong> 7:00 AM – 10:00 AM<br>
☀️ <strong>Afternoon:</strong> 12:00 PM – 3:00 PM<br>
🌆 <strong>Evening:</strong> 5:00 PM – 8:00 PM<br><br>
Individual (1-on-1) ya Small Group — dono available!<br>
Mon to Sun — saat din! 📅<br><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> — slot book karo!`;

    if (/(course|kya padhate|syllabus|subject|kya available|kya sikhate)/.test(q)) {
      const list = INSTITUTE.courses.map(c => `✅ ${c}`).join("<br>");
      return `<span class="aie">📚</span><strong>FuturePath mein kya kya sikhate hain?</strong><br><br>${list}<br><br>📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> — details ke liye call karo!`;
    }

    if (/(why join|kyun join|best kyun|benefit|why futurepath|kyun aye)/.test(q)) {
      const list = INSTITUTE.features.map(f => `✅ ${f}`).join("<br>");
      return `<span class="aie">🌟</span><strong>Kyun FuturePath join karein?</strong><br><br>${list}<br><br>Free demo: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> 📞`;
    }

    if (/(admission|register|enroll|join karna|admission form)/.test(q)) return `<span class="aie">📝</span><strong>FuturePath mein Admission Kaise Lein?</strong><br><br>
<strong>Step 1:</strong> Call ya WhatsApp karo — <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
<strong>Step 2:</strong> Free demo class attend karo<br>
<strong>Step 3:</strong> Registration form bharo<br>
<strong>Step 4:</strong> One-time admission fee ₹300 pay karo<br>
<strong>Step 5:</strong> Apna batch aur timing select karo<br>
<strong>Step 6:</strong> Classes start! 🎓<br><br>
<strong>Documents needed:</strong> Student photo, school name, class details<br><br>
📍 Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058`;

    // ── Fun & Jokes ──
    if (/(joke|funny|hanso|comedy|mazak|haha|lol)/.test(q)) {
      doEmojiRain(["😂", "🤣", "😄", "😆", "🎭"]);
      return `<span class="aie">😂</span><em>${r(KB.jokes)}</em><br><br>Hahaha! 😅 Aur sunna? Phir se "joke" likho! 🎪`;
    }

    if (/(riddle|paheli|puzzle|bujho toh)/.test(q)) {
      const riddles = [
        { q: "Mera ek chehra hai, haath nahi, aankh nahi — lekin time batata hoon. Main kya hoon?", a: "⌚ Ghadi!" },
        { q: "Kitna bhi khaao, pet nahi bharta. Main kya hoon?", a: "📚 Knowledge (Gyan)!" },
        { q: "Jitna kato, utna barhta hoon. Main kya hoon?", a: "🕳️ Gadhha (Hole)!" },
        { q: "Misbah ne poori class mein sabse zyada kya kiya? Hint: Aman Sir ko pata tha!", a: "🏏 WTC matches dekhna... aur fir bolna 'homework ho gaya sir!' 😂" },
      ];
      const chosen = r(riddles);
      return `<span class="aie">🧩</span><strong>Paheli:</strong><br><br><em>${chosen.q}</em><br><br><details><summary>👆 Answer dekhne ke liye click karo!</summary><br><strong>${chosen.a}</strong></details>`;
    }

    // ── Motivational ──
    if (/(sad|stressed|dar|scared|fail|nahi ho raha|mushkil|padhai nahi|samajh nahi|demotivated|motivation nahi)/.test(q)) {
      doEmojiRain(["💪", "🌟", "✨", "🔥", "❤️"]);
      return r([
        `<span class="aie">💪</span><strong>Sun${nameStr}!</strong><br><br>Misbah bhi kabhi kabhi aise feel karta hai — motivation drop ho jaati hai, sab mushkil lagta hai...<br><br>Lekin jab woh try karta hai — Aman Sir kehte hain woh sach mein <strong>bahut accha karta hai!</strong> 🌟<br><br>Tum bhi waise ho — <strong>capability hai, bas consistency chahiye!</strong><br><br>Jo topic mushkil hai — mujhse poochho! Main easy karta hoon! 😊`,
        `<span class="aie">🌟</span><strong>Ek baat suno!</strong><br><br>• Thomas Edison ne 1000 baar fail hoke bulb banaya<br>• Einstein school mein average student tha<br>• Aman Sir ne bhi sab kuch zero se seekha<br><br>Tumhare paas resources hain, teacher hain, aur main hoon! 🤖<br><br><strong>Kya mushkil hai? Batao — milke solve karte hain!</strong> 💪`,
      ]);
    }

    // ── WTC Cricket (Misbah reference) ──
    if (/(wtc|world test|cricket|ipl|match|kohli|rohit|sachin)/.test(q)) {
      return `<span class="aie">🏏</span><strong>Cricket fan ho${nameStr}!</strong><br><br>
        Misbah jaisa! Woh bhi FuturePath mein cricket ki baat karta rehta hai — especially <strong>WTC</strong>! 😄<br><br>
        Cricket mein bhi maths kaam aata hai — run rate calculate karna, average nikalna!<br>
        <code>Batting Avg = Total Runs ÷ Times Out</code><br>
        <code>Run Rate = Total Runs ÷ Total Overs</code><br><br>
        <em>😄 Misbah tip: Cricket dekho — lekin homework pehle karo! Aman Sir ki advice! 🏏📚</em>`;
    }

    // ── About institute (general) ──
    if (/(futurepath|institute|tuition|coaching|school|padhna chahta|join|enroll|kahan padhun)/.test(q)) {
      return `<span class="aie">🏫</span><strong>FuturePath Learning Institute!</strong><br><br>
        📍 Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058<br>
        👨‍💻 Aman Sir (Aman Khan) — Front-end Developer + Teacher<br><br>
        <strong>Classes:</strong> 5 to 10 (CBSE & ICSE)<br>
        <strong>Fees:</strong> ₹1,000 – ₹2,000/month only!<br>
        <strong>Admission:</strong> ₹300 (one-time)<br>
        <strong>Demo:</strong> FREE trial class! 🎓<br><br>
        📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
        💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">WhatsApp</a><br><br>
        <em>Aao — personal attention, concept-based learning, affordable fees! 😊</em>`;
    }

    // ── Fallback — smart generic responses ──
    const fallbacks = [
      `<span class="aie">🤔</span>Hmm${nameStr}! Yeh sawaal interesting hai!<br><br>Thoda aur detail mein batao — kaunsi class ke liye chahiye? Kya topic exactly?<br><br>Ya seedha puchho:<br>📐 Maths | 🧪 Science | 💻 Coding | 🏫 Institute | 😂 Jokes`,
      `<span class="aie">💡</span>Arre${nameStr}! Yeh sawaal mujhe aur specific chahiye!<br><br>Kuch examples:<br>➡️ "area of circle r=5" likho calculate ke liye<br>➡️ "photosynthesis kya hai" science ke liye<br>➡️ "python code for loop" coding ke liye<br>➡️ "fees kya hai" institute ke liye<br><br>Kya poochna hai? 😊`,
      `<span class="aie">🤖</span>Main samajh raha hoon${nameStr}!<br><br>Lekin thoda aur clearly batao — mujhe exact sawaal chahiye taaki sahi jawab de sakoon!<br><br>Kya topic hai? Science, Maths, Coding, ya Institute ke baare mein? 😊`,
    ];
    return r(fallbacks);
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

    // Simulate thinking delay (natural feel)
    const delay = Math.min(300 + text.length * 8, 1200);
    setTimeout(() => {
      hideTyping();
      const reply = getResponse(text);
      addBotMsg(reply);
      // Occasional institute promo (every 7 messages)
      if (conversationCount % 7 === 0) {
        setTimeout(() => {
          addBotMsg(`<span class="aie">💡</span><em>Yaad dilata hoon — <strong>FuturePath Learning Institute</strong> mein Aman Sir personally padhate hain! Free demo available. Call: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> 📞</em>`);
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
    // Show notification badge after 3s
    setTimeout(() => {
      const badge = document.getElementById("aiNotifBadge");
      if (badge && !aiOpen) badge.style.display = "flex";
    }, 3000);
  });

  if (document.readyState !== "loading") {
    initStars();
  }
})();
