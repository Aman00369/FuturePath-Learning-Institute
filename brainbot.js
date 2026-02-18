/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         BRAINBOT — by Aman Sir                          ║
 * ║         FuturePath Learning Institute, Kolkata          ║
 * ║         Version 3.0 — Super Smart Edition               ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 
 */

(function () {
  "use strict";

  // ════════════════════════════════════════════
  //  INSTITUTE KNOWLEDGE BASE
  //  (Edit this section to update info easily)
  // ════════════════════════════════════════════
  const INSTITUTE = {
    name: "FuturePath Learning Institute",
    teacher: "Aman Sir (Aman Khan)",
    phone: "8910517578",
    whatsapp: "https://wa.me/918910517578",
    linkedin: "https://www.linkedin.com/in/aman-khan-210187324",
    location: "Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058",
    timings: {
      morning: "7:00 AM – 10:00 AM",
      afternoon: "12:00 PM – 3:00 PM",
      evening: "5:00 PM – 8:00 PM",
    },
    classes: "Class 4 to Class 12 (CBSE & ICSE, English Medium)",
    admissionFee: "₹300 (one-time)",
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
      "All school subjects (Class 4–12)",
    ],
    teacherSkills: [
      "Python", "Java", "C Language", "HTML", "CSS",
      "JavaScript", "React", "MySQL", "MS Office", "Tally",
      "Web Development", "Front-end Development",
    ],
    features: [
      "Concept-Based Teaching (not rote learning)",
      "Personal Attention — small batches",
      "Weekly Tests & Progress Reports",
      "Board Exam Focused (CBSE & ICSE)",
      "Affordable Fees — no hidden charges",
      "Free Demo Class available",
      "English Medium friendly",
      "Lab File & Project Support",
      "Career Guidance",
    ],
  };

  // ════════════════════════════════════════════
  //  STATE
  // ════════════════════════════════════════════
  let aiOpen = false;
  let aiFirstOpen = true;
  let currentMode = "general";
  let msgCount = 0;
  let conversationHistory = []; // for multi-turn AI context

  // ════════════════════════════════════════════
  //  STARS BACKGROUND
  // ════════════════════════════════════════════
  function initStars() {
    const se = document.getElementById("aiStars");
    if (!se) return;
    for (let i = 0; i < 35; i++) {
      const s = document.createElement("div");
      s.className = "ai-star";
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-duration:${Math.random() * 3 + 1.5}s;animation-delay:${Math.random() * 3}s;width:${Math.random() > 0.8 ? 3 : 2}px;height:${Math.random() > 0.8 ? 3 : 2}px;`;
      se.appendChild(s);
    }
  }

  // ════════════════════════════════════════════
  //  TOGGLE CHAT WINDOW
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
    document.querySelectorAll(".ai-mode-pill").forEach((p) =>
      p.classList.remove("ai-active")
    );
    el.classList.add("ai-active");
    currentMode = mode;
    const msgs = {
      general:
        "💬 <strong>General mode!</strong> Kuch bhi poochho — science, history, GK, jokes, ya institute ke baare mein! 😄",
      courses:
        "📚 <strong>Courses mode!</strong> Fees, syllabus, registration, demo class — sab pata hai mujhe! 🤓",
      cs: "💻 <strong>CS/Coding mode!</strong> Python, Java, HTML, databases, algorithms — lao apne sawaal! 🔥",
      math: "📐 <strong>Maths mode!</strong> Calculations, formulas, step-by-step solutions — calculator bhi hoon main! 🧮",
      fun: "🎉 <strong>Fun mode!</strong> Jokes, riddles, fun facts — let's enjoy! 😜",
    };
    addBotMsg(msgs[mode] || msgs.general);
  };

  // ════════════════════════════════════════════
  //  GREETING
  // ════════════════════════════════════════════
  function greetUser() {
    addBotMsg(
      `<span class="aie">🎉</span>
      <strong>Hello! Main hoon BrainBot!</strong><br>
      Aman Sir ne mujhe banaya hai — FuturePath Learning Institute ke liye! 🤖✨<br><br>
      Main <strong>kuch bhi</strong> samjha sakta hoon:<br>
      🧪 Science | 📐 Maths | 💻 Coding | 📊 MS Office<br>
      🧾 Tally | 📚 School Subjects | 🌍 GK | 😂 Jokes<br>
      🧮 Calculator | 🏫 Institute Info<br><br>
      <em>Class 4 ka student ho ya bade — sab ke liye easy language mein samjhaunga!</em> 😊<br><br>
      <strong>Kya poochna hai? Likho neeche! 👇</strong>`
    );
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
  //  SMART CALCULATOR
  //  Handles: 2+2, 25% of 400, sqrt(144),
  //           area of circle r=5, simple word math
  // ════════════════════════════════════════════
  function tryCalculate(q) {
    const clean = q.trim();

    // Percentage: "25% of 400" or "25 percent of 400"
    const pctOf = clean.match(/(\d+\.?\d*)\s*(%|percent)\s*(of|ka|of the)\s*(\d+\.?\d*)/i);
    if (pctOf) {
      const pct = parseFloat(pctOf[1]);
      const num = parseFloat(pctOf[4]);
      const res = (pct / 100) * num;
      return `🧮 <strong>${pct}% of ${num} = <span style="color:#fbbf24;font-size:1.1em;">${res}</span></strong><br><br><em>Formula: (${pct} ÷ 100) × ${num} = ${res}</em><br>Simple! Percentage ka matlab hota hai — "per 100". 😊`;
    }

    // "what percent is X of Y"
    const whatPct = clean.match(/(\d+\.?\d*)\s*(ka|is)\s*(\d+\.?\d*)\s*(mein|ka|in|of|percent|%)/i);
    if (whatPct && clean.includes("percent")) {
      const part = parseFloat(whatPct[1]);
      const whole = parseFloat(whatPct[3]);
      const res = ((part / whole) * 100).toFixed(2);
      return `🧮 <strong>${part} is <span style="color:#fbbf24;">${res}%</span> of ${whole}</strong><br><br><em>Formula: (${part} ÷ ${whole}) × 100 = ${res}%</em> 📐`;
    }

    // Square root: sqrt(144) or √144 or square root of 144
    const sqrtMatch = clean.match(/(?:sqrt|square root of|√)\s*\(?(\d+\.?\d*)\)?/i);
    if (sqrtMatch) {
      const n = parseFloat(sqrtMatch[1]);
      const res = Math.sqrt(n);
      const isWhole = Number.isInteger(res);
      return `🧮 <strong>√${n} = <span style="color:#fbbf24;">${isWhole ? res : res.toFixed(4)}</span></strong><br><br>${isWhole ? "✅ Perfect square hai! " : ""}Square root matlab — kaunsa number khud se multiply hoke ${n} banta hai? Jawab: ${isWhole ? res : res.toFixed(4)}! 😊`;
    }

    // Power: 2^10 or 2**10 or 2 to the power 10
    const powerMatch = clean.match(/(\d+\.?\d*)\s*(?:\^|\*\*|to the power of?|ki power)\s*(\d+\.?\d*)/i);
    if (powerMatch) {
      const base = parseFloat(powerMatch[1]);
      const exp = parseFloat(powerMatch[2]);
      const res = Math.pow(base, exp);
      return `🧮 <strong>${base}^${exp} = <span style="color:#fbbf24;">${res}</span></strong><br><br><em>${base} को ${exp} baar multiply karo khud se = ${res}</em> 💪`;
    }

    // Area of circle: "area of circle r=5" or "area circle radius 5"
    const circleArea = clean.match(/area\s*(?:of)?\s*circle\s*(?:r(?:adius)?\s*=?\s*)(\d+\.?\d*)/i);
    if (circleArea) {
      const r = parseFloat(circleArea[1]);
      const area = (Math.PI * r * r).toFixed(4);
      return `🧮 <strong>Area of Circle (r=${r}) = <span style="color:#fbbf24;">πr² = ${area}</span></strong><br><br>Formula: π × r²<br>= 3.14159 × ${r} × ${r}<br>= <strong>${area} square units</strong> 📐`;
    }

    // Area of rectangle
    const rectArea = clean.match(/area\s*(?:of)?\s*rect(?:angle)?\s*(\d+\.?\d*)\s*[x×,\s]\s*(\d+\.?\d*)/i);
    if (rectArea) {
      const l = parseFloat(rectArea[1]), b = parseFloat(rectArea[2]);
      return `🧮 <strong>Area of Rectangle = l × b = ${l} × ${b} = <span style="color:#fbbf24;">${l * b}</span></strong><br><br>Perimeter = 2(l+b) = 2(${l}+${b}) = <strong>${2*(l+b)}</strong> 📐`;
    }

    // Simple arithmetic — safe eval
    const mathExpr = clean.replace(/[^0-9+\-*/().%\s]/g, "").trim();
    if (/^[\d\s+\-*/().%]+$/.test(mathExpr) && /[+\-*/]/.test(mathExpr)) {
      try {
        // eslint-disable-next-line no-new-func
        const result = Function('"use strict"; return (' + mathExpr + ')')();
        if (typeof result === "number" && isFinite(result)) {
          const rounded = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
          return `🧮 <strong>${clean} = <span style="color:#fbbf24;font-size:1.15em;">${rounded}</span></strong><br><br>Calculator ready! Aur kya calculate karna hai? 😄`;
        }
      } catch (_) {}
    }

    return null;
  }

  // ════════════════════════════════════════════
  //  CORE KNOWLEDGE BASE — Easy language answers
  //  (Covers Class 4 to Class 12 + Professional)
  // ════════════════════════════════════════════
  const KB = {

    // ── SCIENCE: BASICS (Class 4–6 level) ──
    air: `<span class="aie">💨</span><strong>Hawa (Air) kya hai?</strong><br><br>
Hawa ek gas ka mixture hai jo hum saans lete hain! Hum use dekh nahi sakte, lekin feel kar sakte hain.<br><br>
<strong>Hawa mein kya hota hai?</strong><br>
🔵 Nitrogen — 78% (sabse zyada!)<br>
🟡 Oxygen — 21% (hum yahi saans lete hain)<br>
⚪ Carbon Dioxide — 0.04%<br>
⚫ Other gases — baaki<br><br>
<strong>Hawa ke kaam:</strong><br>
✅ Saans lene mein madad (oxygen se)<br>
✅ Paudo ko grow karne mein madad (CO₂ se)<br>
✅ Hawa ke bina aag nahi jalti<br><br>
<em>😄 Fun fact: Ek baar saans mein hum lagbhag 0.5 litre hawa lete hain!</em>`,

    water: `<span class="aie">💧</span><strong>Paani (Water) — H₂O</strong><br><br>
Paani duniya ki sabse zaroori cheez hai! Bina paani ke koi bhi jeev nahi reh sakta.<br><br>
<strong>Paani ka formula:</strong> H₂O = 2 Hydrogen + 1 Oxygen atom<br><br>
<strong>Paani ke 3 roop:</strong><br>
💧 <strong>Liquid (Paani)</strong> — normal temperature pe<br>
🧊 <strong>Solid (Barf/Ice)</strong> — 0°C pe jam jaata hai<br>
♨️ <strong>Gas (Bhaap/Steam)</strong> — 100°C pe bhaap banta hai<br><br>
<strong>Paani ke kaam:</strong><br>
🌊 Pyaas bujhata hai<br>
🌱 Paudo ko zinda rakhta hai<br>
🧼 Saaf karne ke liye<br>
🏭 Electricity banane ke liye (hydroelectric power)<br><br>
<em>😄 Hamare body mein 70% paani hota hai! Hum basically walking water balloon hain! 😂</em>`,

    sun: `<span class="aie">☀️</span><strong>Suraj (Sun) kya hai?</strong><br><br>
Suraj ek bahut bada <strong>tara (star)</strong> hai — hamare solar system ke beech mein!<br><br>
<strong>Size:</strong> Suraj itna bada hai ki usmein 13 lakh Zameen (Earth) fit ho sakti hain! 🤯<br><br>
<strong>Suraj kitna door hai?</strong><br>
Zameen se lagbhag <strong>15 crore kilometre</strong> door!<br>
Suraj ki roshni Zameen tak <strong>8 minute 20 second</strong> mein pahuchti hai!<br><br>
<strong>Suraj ke kaam:</strong><br>
🌱 Plants ko photosynthesis ke liye energy<br>
🌡️ Earth ka temperature maintain karta hai<br>
☁️ Water cycle chalata hai (evaporation → rain)<br>
⚡ Solar panels se electricity<br><br>
<em>😄 Suraj aag ka gola hai — surface temperature 5,500°C! Uske paas mat jao! 🔥</em>`,

    moon: `<span class="aie">🌙</span><strong>Chaand (Moon)</strong><br><br>
Chaand Zameen ka <strong>natural satellite</strong> hai — matlab chaand hamesha Zameen ke chakkar lagata rehta hai!<br><br>
<strong>Facts:</strong><br>
📏 Distance: Zameen se lagbhag <strong>3,84,400 km</strong><br>
⏱️ Zameen ka ek chakkar: <strong>27 din</strong> mein lagata hai<br>
🌡️ Temperature: -180°C se +130°C<br><br>
<strong>Chaand pe kya nahi hai?</strong><br>
❌ Hawa nahi (no atmosphere)<br>
❌ Paani nahi (no liquid water)<br>
❌ Awaaz nahi sunayi degi wahan<br><br>
<strong>Chaand ki phases (akaar):</strong><br>
🌑 New Moon → 🌒 → 🌓 Half Moon → 🌕 Full Moon → 🌘 → 🌑<br><br>
<em>😄 Chaand pe gravity Zameen se 6 guna kam hai! Wahan jump karo toh bahut oopar jaoge! 🚀</em>`,

    plant: `<span class="aie">🌱</span><strong>Plants (Paude) kaise jiते hain?</strong><br><br>
Plants apna khana khud banate hain — is process ko <strong>Photosynthesis</strong> kehte hain!<br><br>
<strong>Plants ko kya chahiye?</strong><br>
☀️ Sunlight (dhoop)<br>
💧 Paani (roots se)<br>
💨 Carbon Dioxide — CO₂ (hawa se)<br>
🟢 Chlorophyll — green colour jo sunlight pakadta hai<br><br>
<strong>Formula (aasaan bhasha mein):</strong><br>
<code>Sunlight + CO₂ + Paani → Glucose (food) + Oxygen</code><br><br>
Plants CO₂ lete hain aur <strong>Oxygen dete hain</strong> — isliye hum kehte hain "plants humari life line hain!" 🌳<br><br>
<strong>Plant ke parts:</strong><br>
🌱 Root (jad) — paani absorb karta hai<br>
🪵 Stem (tana) — paani upar bhejta hai<br>
🍃 Leaf (patta) — photosynthesis hota hai<br>
🌸 Flower (phool) — reproduction ke liye<br><br>
<em>😄 Ek bada ped ek din mein 100+ log ki oxygen produce kar sakta hai!</em>`,

    oxygen: `<span class="aie">🧪</span><strong>Oxygen (O₂)</strong><br><br>
Oxygen woh gas hai jo hum saans mein lete hain — iske bina insaan sirf <strong>3-5 minute</strong> hi jee sakta hai!<br><br>
<strong>Simple facts:</strong><br>
🔢 Symbol: O | Atomic Number: 8<br>
🌍 Hawa mein: 21% hoti hai oxygen<br>
🌿 Plants banati hain photosynthesis se<br>
💧 Paani mein bhi oxygen hoti hai (H₂O)<br><br>
<strong>Oxygen ke kaam:</strong><br>
🫁 Saans lena — most important!<br>
🔥 Aag jalana (fire needs oxygen)<br>
🏥 Hospitals mein patients ke liye<br>
🚀 Rockets mein fuel jalane ke liye<br>
⚙️ Metals ko cut karne ke liye (welding)<br><br>
<strong>Body mein kya hota hai?</strong><br>
Oxygen → lungs → blood → heart → poore body mein jaati hai → cells energy banati hain!<br><br>
<em>😄 Oxygen discover kiya tha Joseph Priestley ne 1774 mein! Cool scientist tha! 🔬</em>`,

    photosynthesis: `<span class="aie">🌿</span><strong>Photosynthesis — Plants ka Khana Banana!</strong><br><br>
<strong>Simple bhasha mein:</strong> Plants sunlight use karke apna khana (glucose) banate hain!<br><br>
<strong>Formula:</strong><br>
<code>CO₂ + H₂O + Sunlight → Glucose + O₂</code><br>
Carbon dioxide + Paani + Dhoop → Sugar (food) + Oxygen<br><br>
<strong>Step by step:</strong><br>
1️⃣ Patte ki stomata (chhote chhote chhid) se CO₂ andar aata hai<br>
2️⃣ Roots se paani patte tak pahunchta hai<br>
3️⃣ Chlorophyll (green pigment) sunlight pakadta hai<br>
4️⃣ In sab se glucose banta hai (plant ka food!)<br>
5️⃣ Oxygen bahar nikalti hai — jo hum breathe karte hain! 🌬️<br><br>
<strong>Yaad rakhne ka trick:</strong><br>
🌿 Plants <strong>CO₂ IN, O₂ OUT</strong><br>
😮 Humans <strong>O₂ IN, CO₂ OUT</strong><br>
We need each other! 🤝<br><br>
<em>😄 Jo oxygen tum abhi saans mein le rahe ho — kisi patte ne banaya tha! Thank the plants! 🌳</em>`,

    respiration: `<span class="aie">💨</span><strong>Respiration (Saans Lena)</strong><br><br>
<strong>Respiration 2 tarah ka hota hai:</strong><br><br>
<strong>1. Breathing (Saans lena):</strong><br>
Naak/Munh → Throat → Lungs → Blood → Body cells<br>
O₂ andar, CO₂ bahar<br><br>
<strong>2. Cellular Respiration (Cells mein energy banana):</strong><br>
<code>Glucose + O₂ → CO₂ + H₂O + ENERGY</code><br>
Cells food (glucose) aur oxygen use karke energy banate hain! This is how your body works!<br><br>
<strong>Aerobic vs Anaerobic:</strong><br>
🟢 <strong>Aerobic</strong> — oxygen ke saath, zyada energy (normal breathing)<br>
🔴 <strong>Anaerobic</strong> — bina oxygen, kam energy (heavy exercise mein)<br>
Anaerobic mein <strong>lactic acid</strong> banta hai — isliye muscles mein dard hota hai! 😅<br><br>
<em>😄 Yeast bhi anaerobic respiration karta hai — isliye bread phulti hai aur CO₂ se bubbles bante hain!</em>`,

    heart: `<span class="aie">❤️</span><strong>Dil (Heart) — Hamare Body ka Pump!</strong><br><br>
Heart ek <strong>muscular pump</strong> hai jo poore life bina ruke kaam karta hai!<br><br>
<strong>Facts:</strong><br>
💓 Size: Apni mutthi jitna bada<br>
🔢 Heartbeat: 60–100 times per minute normal<br>
📅 1 din mein: lagbhag 1,00,000 baar dhakta hai!<br>
🩸 Roz: lagbhag 7,000 litre blood pump karta hai<br><br>
<strong>Heart ke 4 chambers:</strong><br>
🔴 Right Atrium → Right Ventricle → Lungs (O₂ lene) → Left Atrium → Left Ventricle → Poori body!<br><br>
<strong>Blood vessels:</strong><br>
🔴 Artery — heart se body tak blood le jaati hai<br>
🔵 Vein — body se heart tak blood wapas laati hai<br>
🟡 Capillary — sabse thin vessels, cells ke paas<br><br>
<em>😄 Ek din mein heart jo blood pump karta hai, us se ek swimming pool bhar jaaye! 🏊</em>`,

    // ── SCIENCE: PHYSICS ──
    newton: `<span class="aie">🍎</span><strong>Newton ke Teen Laws of Motion</strong><br><br>
Newton ek bahut bada scientist tha. Usne motion ke 3 rules discover kiye!<br><br>
<strong>📌 1st Law — Inertia ka Law:</strong><br>
"Jo cheez ruki hui hai, ruki rahegi. Jo chal rahi hai, chalti rahegi — jab tak koi force na lage!"<br>
👉 Example: Bus achanak rukti hai toh aap aage jhuk jaate ho — that's inertia! 🚌<br><br>
<strong>📌 2nd Law — F = ma:</strong><br>
<code>Force = Mass × Acceleration</code><br>
Bhaari cheez ko dhakelne mein zyada force chahiye!<br>
👉 Cycle dhakela vs Truck dhakela — truck ke liye zyada force! 🚛<br><br>
<strong>📌 3rd Law — Action-Reaction:</strong><br>
"Har action ka ek equal aur opposite reaction hota hai!"<br>
👉 Jump karo — ground aapko push karta hai upar! Rocket same principle pe kaam karta hai! 🚀<br><br>
<em>😄 Story: Newton ke sar pe seb gira — aur usne gravity discover ki! Physics painful bhi ho sakta hai! 🍎</em>`,

    gravity: `<span class="aie">🌍</span><strong>Gravity — Wo Force Jo Sab Ko Neeche Kheenchti Hai!</strong><br><br>
<strong>Simple bhasha mein:</strong> Gravity ek invisible force hai jo sab cheez ko Zameen ki taraf kheenchti hai!<br><br>
<strong>g = 9.8 m/s²</strong> — matlab: agar kuch giraoge toh har second 9.8 m/s zyada fast hoga!<br><br>
<strong>Gravity ke wajah se:</strong><br>
🍎 Seb gir ta hai neeche<br>
🌊 Oceans ki tides aati hain (Moon ki gravity se!)<br>
🌍 Planets Sun ke chakkar lagate hain<br>
🚶 Hum zameen pe chale sakte hain<br><br>
<strong>Newton ka Law of Gravitation:</strong><br>
<code>F = G × (m₁ × m₂) / r²</code><br>
Do cheezon ke beech gravity — dono ki mass se barhti hai, doori se ghatti hai!<br><br>
<em>😄 Moon pe gravity Zameen se 6 guna kam hai! Wahan 60 kg ka aadmi sirf 10 kg jaisa feel karega! 🌙</em>`,

    electricity: `<span class="aie">⚡</span><strong>Bijli (Electricity)</strong><br><br>
<strong>Bijli kya hai?</strong> Electrons ka flow — jaise paani pipe mein behta hai, bijli wire mein behti hai!<br><br>
<strong>Teen important cheezein:</strong><br>
⚡ <strong>Current (I)</strong> — electrons ka flow, Amperes (A) mein<br>
🔋 <strong>Voltage (V)</strong> — "push" jo current ko push karta hai, Volts mein<br>
🔴 <strong>Resistance (R)</strong> — current ko rokne wali force, Ohms (Ω) mein<br><br>
<strong>Ohm's Law — Sabse Important Formula:</strong><br>
<code>V = I × R</code><br>
<code>I = V / R</code><br>
<code>R = V / I</code><br><br>
<strong>Power formula:</strong><br>
<code>P = V × I (Watts mein)</code><br><br>
<strong>Series vs Parallel Circuit:</strong><br>
🔗 Series — sab connected hain, ek fuse → sab band!<br>
⑂ Parallel — alag alag connected, ek fuse → baaki chalta hai (ghar ki wiring!)<br><br>
<em>😄 Bijli ki speed — light ki speed jitni fast! 3 × 10⁸ m/s! 🔥</em>`,

    sound: `<span class="aie">🔊</span><strong>Awaaz (Sound)</strong><br><br>
<strong>Awaaz kya hai?</strong> Awaaz ek vibration hai jo hawa (ya paani ya solid) mein travel karti hai!<br><br>
<strong>Sound kaise banta hai?</strong><br>
1. Koi cheez vibrate hoti hai (guitar string, vocal cords)<br>
2. Vibration hawa ke particles ko dhakelta hai<br>
3. Ye particles agale particles ko dhakelte hain<br>
4. Wave aati aati hamari ear tak pahunchti hai!<br><br>
<strong>Sound ki Speed:</strong><br>
🌬️ Hawa mein: ~340 m/s (ya 1200 km/hr!)<br>
💧 Paani mein: ~1500 m/s (zyada fast!)<br>
🪵 Solid mein: bahut zyada fast!<br><br>
<strong>Sound vacuum (space) mein travel nahi karti!</strong><br>
Isliye space mein koi awaaz nahi! 🌌<br><br>
<strong>Important terms:</strong><br>
📊 Frequency — kitni baar vibrates per second (Hertz)<br>
📣 Amplitude — vibration kitni badi hai (loudness)<br>
Human ear: 20 Hz to 20,000 Hz sun sakti hai<br><br>
<em>😄 Bijli (lightning) pehle dikhti hai, baad mein thunder sunai deta hai — kyunki light sound se fast hai! ⚡</em>`,

    light: `<span class="aie">💡</span><strong>Roshni (Light)</strong><br><br>
<strong>Light kya hai?</strong> Electromagnetic radiation — jo hum dekh sakte hain!<br><br>
<strong>Light ki speed:</strong> <code>3 × 10⁸ m/s</code> = 3 crore metre per second! 🚀<br>
Ye universe mein sabse fast cheez hai!<br><br>
<strong>Light ke properties:</strong><br>
📏 Straight line mein travel karti hai<br>
🪟 Reflection — mirror se bounce back<br>
🌊 Refraction — paani ya glass mein enter karne pe bend hoti hai<br>
🌈 Dispersion — prism se 7 colours mein split hoti hai (VIBGYOR)<br><br>
<strong>Rainbow ke 7 colours (VIBGYOR):</strong><br>
🟣 Violet | 🔵 Indigo | 💙 Blue | 🟢 Green | 🟡 Yellow | 🟠 Orange | 🔴 Red<br><br>
<strong>Convex vs Concave lens:</strong><br>
🔍 Convex (bulging) — objects bade dikhata hai (magnifying glass)<br>
🕶️ Concave (dipped) — objects chhote dikhata hai<br><br>
<em>😄 Suraj ki roshni Zameen tak aane mein 8 min 20 sec lagta hai! Bahut door hai Suraj! ☀️</em>`,

    // ── MATHS ──
    fractions: `<span class="aie">🍕</span><strong>Fractions (Bhinn) — Easy hai!</strong><br><br>
<strong>Fraction kya hota hai?</strong><br>
Jaise ek pizza ke 8 piece hain, tum 3 khate ho — toh tumne <strong>3/8</strong> (teen by aath) pizza khaya!<br><br>
<strong>Parts of a Fraction:</strong><br>
<code>3 ← Numerator (Ansh) — kitna liya</code><br>
<code>─</code><br>
<code>8 ← Denominator (Haran) — total kitna tha</code><br><br>
<strong>Types:</strong><br>
✅ <strong>Proper Fraction</strong>: numerator < denominator (3/8) — ek se chhota<br>
✅ <strong>Improper Fraction</strong>: numerator > denominator (9/4) — ek se bada<br>
✅ <strong>Mixed Number</strong>: 2¼ = whole number + fraction<br><br>
<strong>Add kaise karo (same denominator):</strong><br>
3/8 + 2/8 = 5/8 (sirf numerator add karo!)<br><br>
<strong>Add kaise karo (different denominator):</strong><br>
1/2 + 1/3 = 3/6 + 2/6 = 5/6 (pehle denominator same karo!)<br><br>
<em>😄 Fractions daily life mein use hote hain! "Aadha glass paani" = 1/2! 😊</em>`,

    percentage: `<span class="aie">📊</span><strong>Percentage (Pratishat) — "Per 100"</strong><br><br>
<strong>Percentage ka matlab:</strong> "100 mein se kitna"<br>
50% = 50/100 = aadha = 0.5<br><br>
<strong>Important Formulas:</strong><br><br>
<strong>1. Kisi cheez ka percent nikalna:</strong><br>
<code>% = (Part ÷ Whole) × 100</code><br>
Example: 30 marks mein se 24 mile → (24÷30)×100 = <strong>80%</strong> 🏆<br><br>
<strong>2. Percent se value nikalna:</strong><br>
<code>Value = (% ÷ 100) × Total</code><br>
Example: 500 ka 20% = (20÷100)×500 = <strong>₹100</strong><br><br>
<strong>3. Percentage Increase:</strong><br>
<code>((New-Old) ÷ Old) × 100</code><br>
₹80 se ₹100 → (20÷80)×100 = <strong>25% increase</strong><br><br>
<strong>3. Percentage Decrease:</strong><br>
<code>((Old-New) ÷ Old) × 100</code><br>
₹100 se ₹80 → (20÷100)×100 = <strong>20% decrease</strong><br><br>
<em>😄 Exams mein percentage formula zaroor aata hai! Yaad rakh lena! 📝</em>`,

    algebra: `<span class="aie">📐</span><strong>Algebra — Letters se Maths!</strong><br><br>
<strong>Algebra kya hai?</strong><br>
Jab hum kisi unknown number ki jagah letter (x, y, z) use karte hain — wo algebra hai!<br><br>
<strong>Example:</strong> x + 5 = 12 → x = 12 - 5 = <strong>7</strong><br><br>
<strong>Linear Equation solve karna:</strong><br>
<code>2x + 3 = 11</code><br>
Step 1: 2x = 11 - 3 = 8<br>
Step 2: x = 8 ÷ 2 = <strong>4</strong> ✅<br><br>
<strong>Important Algebraic Identities:</strong><br>
📌 (a+b)² = a² + 2ab + b²<br>
📌 (a-b)² = a² - 2ab + b²<br>
📌 (a+b)(a-b) = a² - b²<br>
📌 (x+a)(x+b) = x² + (a+b)x + ab<br><br>
<strong>Quadratic Formula:</strong><br>
ax² + bx + c = 0<br>
<code>x = (-b ± √(b²-4ac)) / 2a</code><br><br>
<em>😄 Algebra mein x dhundhna ek puzzle solve karne jaisa hai! Once you get it, it's fun! 🧩</em>`,

    geometry: `<span class="aie">📏</span><strong>Geometry — Shapes ki Maths!</strong><br><br>
<strong>2D Shapes ke Formulas:</strong><br><br>
⬛ <strong>Square (Varg):</strong><br>
Area = a² | Perimeter = 4a<br><br>
▬ <strong>Rectangle (Aayat):</strong><br>
Area = l × b | Perimeter = 2(l+b)<br><br>
🔺 <strong>Triangle (Tribhuj):</strong><br>
Area = ½ × base × height<br>
Angles ka sum = 180°<br><br>
⭕ <strong>Circle (Vratt):</strong><br>
Area = πr² | Circumference = 2πr (π ≈ 3.14)<br><br>
<strong>3D Shapes:</strong><br>
📦 Cube: Volume = a³ | Surface Area = 6a²<br>
📦 Cuboid: Volume = l×b×h<br>
🔵 Sphere: Volume = 4/3 πr³<br>
🥫 Cylinder: Volume = πr²h<br>
🍦 Cone: Volume = ⅓ πr²h<br><br>
<strong>Pythagoras Theorem (Right Triangle):</strong><br>
<code>a² + b² = c²</code> (c = hypotenuse, sabse bada side)<br><br>
<em>😄 Geometry painter, architect, engineer — sab use karte hain! 🏗️</em>`,

    trigonometry: `<span class="aie">📐</span><strong>Trigonometry (Tri = Teen, Gon = Angle)</strong><br><br>
<strong>Right angle triangle mein 3 sides hoti hain:</strong><br>
📌 Hypotenuse — sabse lamba side (right angle ke saamne)<br>
📌 Opposite — jo angle study kar rahe ho uske saamne<br>
📌 Adjacent — jo angle study kar rahe ho ke paas<br><br>
<strong>3 Main Ratios — SOH CAH TOA:</strong><br>
🔵 <strong>Sin θ = Opposite / Hypotenuse</strong><br>
🟢 <strong>Cos θ = Adjacent / Hypotenuse</strong><br>
🟡 <strong>Tan θ = Opposite / Adjacent</strong><br><br>
<strong>Memory trick: <em>"SOH-CAH-TOA"</em></strong><br>
Some Officers Have | Curly Auburn Hair | Towards Our Admiration 😄<br><br>
<strong>Common Values (yaad karo!):</strong><br>
| θ  | Sin | Cos | Tan |<br>
|30° | 1/2 | √3/2 | 1/√3 |<br>
|45° | 1/√2 | 1/√2 | 1 |<br>
|60° | √3/2 | 1/2 | √3 |<br><br>
<em>😄 Trig ka use pilots, architects, engineers, game developers — sab karte hain! 🎮</em>`,

    statistics: `<span class="aie">📊</span><strong>Statistics — Data se Sense Banana!</strong><br><br>
<strong>Mean (Average/Madhyaman):</strong><br>
<code>Mean = Sum of all values ÷ Number of values</code><br>
Example: 10, 20, 30, 40, 50<br>
Mean = (10+20+30+40+50) ÷ 5 = 150 ÷ 5 = <strong>30</strong><br><br>
<strong>Median (Middle Value):</strong><br>
Values ko order mein rakho, beech wala nikalo<br>
Example: 3, 5, <strong>7</strong>, 9, 11 → Median = 7<br>
Even numbers: do middle ka average<br><br>
<strong>Mode (Sabse zyada baar aane wala):</strong><br>
Example: 2, 3, 3, 4, 3, 5 → Mode = <strong>3</strong><br><br>
<strong>Range = Maximum - Minimum</strong><br><br>
<strong>Graphs ke types:</strong><br>
📊 Bar Graph — comparison<br>
🥧 Pie Chart — proportions (360° total)<br>
📈 Line Graph — time ke saath change<br>
📉 Histogram — frequency distribution<br><br>
<em>😄 Statistics isliye important hai kyunki har field mein data hota hai — cricket, business, science, sab!</em>`,

    // ── COMPUTER SCIENCE ──
    python: `<span class="aie">🐍</span><strong>Python Programming — Easiest Language!</strong><br><br>
<strong>Python kya hai?</strong><br>
1991 mein Guido van Rossum ne banaya — Monty Python comedy show ke naam pe! 😄<br>
Ek bahut simple, powerful language — AI, websites, automation sab mein use hoti hai!<br><br>
<strong>Basic Python Code:</strong><br>
<pre># Output karna
print("Namaste Aman Sir!")

# Variables
name = "Rahul"
age = 15
marks = 85.5

# If-else
if marks >= 33:
    print("Pass!")
else:
    print("Fail!")

# Loop (1 to 5)
for i in range(1, 6):
    print(i)

# Function banao
def add(a, b):
    return a + b

result = add(10, 20)
print(result)  # 30

# List
fruits = ["mango", "apple", "banana"]
print(fruits[0])  # mango</pre><br>
<em>😄 Python seekhna chahte ho? Aman Sir FuturePath mein sikhate hain — sirf ₹1,000-1,200/month! 🚀</em>`,

    java: `<span class="aie">☕</span><strong>Java Programming</strong><br><br>
<strong>Java kya hai?</strong><br>
1995 mein James Gosling ne banaya. Android apps, banking systems, enterprise software — sab mein Java!<br>
Motto: "Write Once, Run Anywhere" 🌍<br><br>
<strong>Basic Java Code:</strong><br>
<pre>public class Hello {
    public static void main(String[] args) {
        System.out.println("Namaste!");

        // Variables
        int age = 15;
        String name = "Rahul";

        // If-else
        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }

        // Loop
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}</pre><br>
<strong>OOP Concepts (Class 11-12 ke liye):</strong><br>
🔵 Class | 🟢 Object | 🟡 Inheritance | 🔴 Polymorphism<br><br>
<em>😄 Java seekhna hai? Aman Sir FuturePath mein sikhate hain! 📞 8910517578</em>`,

    html: `<span class="aie">🌐</span><strong>HTML — Websites ka Skeleton!</strong><br><br>
<strong>HTML kya hai?</strong><br>
HyperText Markup Language — har website HTML se bani hoti hai!<br><br>
<strong>Basic HTML Structure:</strong><br>
<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Meri Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bada Heading&lt;/h1&gt;
    &lt;p&gt;Ek paragraph hai yeh.&lt;/p&gt;
    &lt;a href="google.com"&gt;Google pe jao&lt;/a&gt;
    &lt;img src="photo.jpg" alt="Meri Photo"&gt;
    &lt;ul&gt;
      &lt;li&gt;Item 1&lt;/li&gt;
      &lt;li&gt;Item 2&lt;/li&gt;
    &lt;/ul&gt;
    &lt;button&gt;Click karo!&lt;/button&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre><br>
<strong>Common Tags:</strong><br>
h1-h6 (headings) | p (paragraph) | div (container)<br>
table | form | input | img | a (link)<br><br>
<em>😄 Aman Sir khud ek Front-end Developer hain! HTML unhe daily kaam aata hai! 💻</em>`,

    css: `<span class="aie">🎨</span><strong>CSS — Websites ko Sundar Banana!</strong><br><br>
<strong>CSS kya hai?</strong><br>
Cascading Style Sheets — HTML ko styling deta hai! Colors, fonts, layout — sab CSS se!<br><br>
<strong>Basic CSS Examples:</strong><br>
<pre>/* Body ka background */
body {
  background-color: #1a1a2e;
  font-family: Arial;
}

/* Heading ka color */
h1 {
  color: pink;
  font-size: 2rem;
  text-align: center;
}

/* Button ka style */
button {
  background: orange;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

/* Hover effect */
button:hover {
  background: red;
}</pre><br>
<strong>Important CSS concepts:</strong><br>
📦 Box Model: Content → Padding → Border → Margin<br>
📱 Flexbox: modern layout<br>
🔲 Grid: advanced layout<br><br>
<em>😄 BrainBot ka yeh sundar design CSS se hi bana hai — by Aman Sir! 🎨</em>`,

    javascript: `<span class="aie">⚡</span><strong>JavaScript (JS) — Websites ko Smart Banana!</strong><br><br>
<strong>JavaScript kya hai?</strong><br>
HTML structure deta hai, CSS style deta hai, <strong>JavaScript action deta hai!</strong><br>
Button click → kuch ho | Form submit → kuch check ho — yeh JS karta hai!<br><br>
<strong>Basic JavaScript:</strong><br>
<pre>// Variable
let name = "Rahul";
const age = 15;

// Function
function greet(name) {
  alert("Hello " + name + "!");
}
greet("Aman Sir");

// If-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Array
let marks = [85, 90, 78, 92];
console.log(marks[0]); // 85

// Loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// Button click
document.getElementById("btn").onclick = function() {
  alert("Button click hua!");
};</pre><br>
<em>😄 BrainBot ka dimag JavaScript se bana hai! Aman Sir ne likha hai! 🤖</em>`,

    programming: `<span class="aie">💻</span><strong>Programming kya hoti hai?</strong><br><br>
<strong>Simple bhasha mein:</strong><br>
Computer ko instructions dena — aise language mein jo computer samjhe!<br>
Jaise hum Hindi/English mein bol ke kaam karwate hain — computer ko code mein batate hain!<br><br>
<strong>Popular Programming Languages:</strong><br>
🐍 <strong>Python</strong> — Easiest, AI/Data Science ke liye<br>
☕ <strong>Java</strong> — Android apps, Enterprise<br>
⚡ <strong>JavaScript</strong> — Websites (browser mein chalta hai)<br>
🔵 <strong>C/C++</strong> — Fast, Games aur OS ke liye<br>
🌐 <strong>HTML/CSS</strong> — Web design (strictly programming nahi)<br>
🗄️ <strong>SQL</strong> — Database ke liye<br><br>
<strong>Kaunsi language pehle seekhein?</strong><br>
✅ Beginner → <strong>Python ya Scratch</strong><br>
✅ School board → <strong>Python ya Java</strong> (CBSE/ICSE syllabus)<br>
✅ Web banana hai → <strong>HTML + CSS + JavaScript</strong><br><br>
<em>😄 Aman Sir sab sikhate hain FuturePath mein! Call karo: 8910517578 📞</em>`,

    // ── MS OFFICE ──
    msoffice: `<span class="aie">📊</span><strong>MS Office — Har Job Ke Liye Zaroori!</strong><br><br>
<strong>MS Office mein kya hota hai?</strong><br><br>
📝 <strong>MS Word</strong> — Documents likhne ke liye (letters, essays, reports)<br>
📊 <strong>MS Excel</strong> — Spreadsheets, calculations, data (accounts, marks)<br>
📽️ <strong>MS PowerPoint</strong> — Presentations aur slideshows<br>
🗃️ <strong>MS Access</strong> — Database manage karna<br><br>
<strong>MS Word Important Shortcuts:</strong><br>
Ctrl+S → Save | Ctrl+P → Print | Ctrl+Z → Undo<br>
Ctrl+B → Bold | Ctrl+I → Italic | Ctrl+U → Underline<br>
Ctrl+F → Find | Ctrl+H → Find & Replace<br><br>
<strong>MS Excel Important Functions:</strong><br>
<code>=SUM(A1:A10)</code> → Numbers add karo<br>
<code>=AVERAGE(A1:A10)</code> → Average nikalo<br>
<code>=MAX(A1:A10)</code> → Sabse bada number<br>
<code>=MIN(A1:A10)</code> → Sabse chhota number<br>
<code>=IF(A1>50,"Pass","Fail")</code> → Condition<br><br>
<em>📍 Aman Sir MS Office sikhate hain — ₹1,200/month + Certificate! 🏆</em>`,

    excel: `<span class="aie">📊</span><strong>Microsoft Excel — Spreadsheet King!</strong><br><br>
<strong>Excel kya hai?</strong><br>
Numbers, data, accounts manage karne ka software — rows aur columns mein!<br><br>
<strong>Important Functions:</strong><br>
<pre>=SUM(A1:A10)        → A1 to A10 add karo
=AVERAGE(B1:B10)    → Average nikalo
=MAX(C1:C10)        → Highest value
=MIN(C1:C10)        → Lowest value
=COUNT(A1:A10)      → Kitne numbers hain
=IF(A1>=33,"Pass","Fail")  → Condition
=VLOOKUP(value,range,col,0) → Table mein search
=CONCATENATE(A1," ",B1) → Text jodo
=TODAY()            → Aaj ki date</pre><br>
<strong>Useful Shortcuts:</strong><br>
Alt+= → AutoSum | Ctrl+T → Table banao<br>
Ctrl+; → Today's date insert karo<br>
F2 → Cell edit karo | Ctrl+D → Neeche fill karo<br><br>
<em>😄 Excel seekh lo — accountants, managers, sab use karte hain! ₹1,200/month at FuturePath! 💼</em>`,

    // ── TALLY / ACCOUNTING ──
    tally: `<span class="aie">🧾</span><strong>Tally — India ka No.1 Accounting Software!</strong><br><br>
<strong>Tally kya hai?</strong><br>
Ek accounting software jisse business apna accounts manage karta hai!<br>
Tally Solutions, Bangalore ne 1986 mein banaya.<br>
India mein 90%+ businesses Tally use karte hain! 🏢<br><br>
<strong>Tally mein kya karte hain?</strong><br>
📒 Ledger banana (accounts record)<br>
💰 Vouchers enter karna (transactions)<br>
📊 Balance Sheet dekhna<br>
🧾 GST filing aur returns<br>
📦 Stock/Inventory manage karna<br>
💸 Payroll (salary) manage karna<br><br>
<strong>Important Tally Shortcuts:</strong><br>
Alt+F3 → Company select/create<br>
F2 → Date change karo<br>
F4 → Contra entry<br>
F5 → Payment entry<br>
F6 → Receipt entry<br>
F8 → Sales entry<br>
F9 → Purchase entry<br>
Ctrl+A → Save/Accept<br>
Esc → Back/Cancel<br><br>
<em>📍 Aman Sir Tally sikhate hain — sirf ₹1,200/month! Career ke liye best investment! 💼</em>`,

    accounting: `<span class="aie">💰</span><strong>Accounting (Lekha-Jokha)</strong><br><br>
<strong>Accounting kya hai?</strong><br>
Business ki saari money ki entry rakhna — kaisa aaya, kaisa gaya, kitna bacha!<br><br>
<strong>Golden Rules — Sabse Important! (Yaad karo!)</strong><br>
1️⃣ <strong>Personal Account:</strong><br>
   Debit the Receiver | Credit the Giver<br>
   (Jo le usko debit, jo de usko credit)<br><br>
2️⃣ <strong>Real Account:</strong><br>
   Debit what comes in | Credit what goes out<br>
   (Jo aaye debit, jo jaye credit)<br><br>
3️⃣ <strong>Nominal Account:</strong><br>
   Debit all expenses/losses | Credit all incomes/gains<br>
   (Kharcha debit, kamayi credit)<br><br>
<strong>Important Terms:</strong><br>
💰 Asset — jo business ke paas hai (cash, building)<br>
💳 Liability — jo business ko dena hai (loan)<br>
👤 Capital — owner ka paisa<br>
📒 Ledger — saari accounts ki book<br>
📄 Journal — daily transactions<br><br>
<em>😄 Accounting isliye zaroori hai — bina hisaab ke koi business nahi chal sakta! 📚</em>`,

    gst: `<span class="aie">🧾</span><strong>GST — Goods and Services Tax</strong><br><br>
<strong>GST kya hai?</strong><br>
1 July 2017 ko India mein lagu hua — ek tax jo pehle ke bahut saare taxes ki jagah aaya!<br>
(VAT, Service Tax, Excise — sab hatake ek GST!)<br><br>
<strong>GST Slabs (Tax Rates):</strong><br>
⚪ <strong>0%</strong> — Zaroorat ki cheezein: anaaj, milk, education, health<br>
🟡 <strong>5%</strong> — Basic goods: packaged food, economy class ticket<br>
🟠 <strong>12%</strong> — Computers, processed food<br>
🔵 <strong>18%</strong> — Electronics, restaurants, services (most common!)<br>
🔴 <strong>28%</strong> — Luxury: cars, tobacco, aerated drinks<br><br>
<strong>GST ke 3 types:</strong><br>
🏛️ <strong>CGST</strong> — Central ka hissa (Centre Government ko)<br>
🏠 <strong>SGST</strong> — State ka hissa (State Government ko)<br>
🔀 <strong>IGST</strong> — Interstate (ek state se doosri state)<br><br>
<strong>ITC (Input Tax Credit):</strong><br>
Jo tax tune khareedne pe diya → wo wapas mil sakta hai! Sirf "value added" pe tax lagta hai!<br><br>
<em>😄 Jo samosa tum khate ho usmein bhi GST hoti hai! 5% — ab se notice karo receipt! 🥟</em>`,

    // ── HISTORY & GK ──
    india: `<span class="aie">🇮🇳</span><strong>India — Hamare Desh ke Baare Mein!</strong><br><br>
<strong>Basic Facts:</strong><br>
🏛️ Capital: <strong>New Delhi</strong><br>
🏙️ Largest City: Mumbai<br>
👥 Population: ~140 crore (Duniya mein dusra no.!)<br>
📐 Area: 32.87 lakh km² (7th largest country)<br>
💰 Currency: Indian Rupee (₹)<br>
📅 Independence: <strong>15 August 1947</strong><br>
📜 Republic Day: <strong>26 January 1950</strong><br><br>
<strong>Government:</strong><br>
🏛️ Parliamentary Democracy<br>
👤 President — Droupadi Murmu (Head of State)<br>
👤 Prime Minister — Narendra Modi (Head of Govt)<br>
Parliament: Lok Sabha (Lower) + Rajya Sabha (Upper)<br><br>
<strong>Famous Indians:</strong><br>
🕊️ Mahatma Gandhi — Father of the Nation<br>
📜 Dr. Ambedkar — Father of Indian Constitution<br>
🔭 APJ Abdul Kalam — Missile Man of India<br>
🧪 CV Raman — Nobel Prize in Physics (Raman Effect)<br><br>
<em>😄 India ne duniya ko Zero, Chess, Yoga, aur Decimal system diya! Proud hona chahiye! 🏆</em>`,

    capitalCities: `<span class="aie">🌍</span><strong>World ke Important Capitals</strong><br><br>
🇮🇳 India → <strong>New Delhi</strong><br>
🇺🇸 USA → <strong>Washington D.C.</strong><br>
🇬🇧 UK → <strong>London</strong><br>
🇨🇳 China → <strong>Beijing</strong><br>
🇯🇵 Japan → <strong>Tokyo</strong><br>
🇫🇷 France → <strong>Paris</strong><br>
🇩🇪 Germany → <strong>Berlin</strong><br>
🇷🇺 Russia → <strong>Moscow</strong><br>
🇧🇷 Brazil → <strong>Brasília</strong><br>
🇦🇺 Australia → <strong>Canberra</strong><br>
🇵🇰 Pakistan → <strong>Islamabad</strong><br>
🇧🇩 Bangladesh → <strong>Dhaka</strong><br>
🇳🇵 Nepal → <strong>Kathmandu</strong><br>
🇸🇦 Saudi Arabia → <strong>Riyadh</strong><br>
🇮🇱 Israel → <strong>Jerusalem</strong><br><br>
<em>😄 GK exams mein capitals zaroor aate hain! Yaad kar lo! 📚</em>`,

    solar: `<span class="aie">🌌</span><strong>Haara Solar System (Surya Mandal)</strong><br><br>
<strong>8 Planets — Sun se door ke order mein:</strong><br>
1️⃣ 🌑 <strong>Mercury (Budh)</strong> — Sabse chhota, sabse paas<br>
2️⃣ 🌟 <strong>Venus (Shukra)</strong> — Sabse garam! (465°C), ulta ghoomta hai<br>
3️⃣ 🌍 <strong>Earth (Zameen)</strong> — Hamaara ghar! Life hai yahaan<br>
4️⃣ 🔴 <strong>Mars (Mangal)</strong> — Laal rang, future mein humans jaayenge!<br>
5️⃣ 🟤 <strong>Jupiter (Brihaspati)</strong> — Sabse bada! Great Red Spot (bada toofan)<br>
6️⃣ 💛 <strong>Saturn (Shani)</strong> — Rings wala planet!<br>
7️⃣ 🔵 <strong>Uranus (Aruna)</strong> — Side pe jhuka hua ghoomta hai<br>
8️⃣ 🌊 <strong>Neptune (Varuna)</strong> — Sabse door, fastest winds!<br><br>
<strong>Yaad karne ka trick:</strong><br>
"<em>My Very Energetic Mother Just Served Us Nachos</em>"<br>
M-V-E-M-J-S-U-N<br><br>
<em>😄 Pluto pehle planet tha, ab dwarf planet hai — uski feelings mat poochho! 😢</em>`,

    freedom: `<span class="aie">🕊️</span><strong>India ki Azaadi — Freedom Struggle</strong><br><br>
<strong>British Rule:</strong> 1757 (Battle of Plassey) se shuru, 1947 tak<br><br>
<strong>Important Events:</strong><br>
🔫 1857 — Sepoy Mutiny (First War of Independence)<br>
🏛️ 1885 — Indian National Congress bani<br>
🚶 1919 — Jallianwala Bagh massacre (Amritsar)<br>
🌾 1920 — Non-Cooperation Movement (Gandhi ji)<br>
🧂 1930 — Dandi March / Salt Satyagraha<br>
✊ 1942 — Quit India Movement ("Do or Die!")<br>
🇮🇳 1947 — 15 August — AZAAD BHARAT!<br><br>
<strong>Important Freedom Fighters:</strong><br>
🕊️ Mahatma Gandhi — Non-violence ke path pe<br>
⚔️ Subhas Chandra Bose — "Tum mujhe khoon do, main tumhe azaadi dunga!"<br>
🔥 Bhagat Singh — "Inquilab Zindabad!" — 23 saal mein shaheed<br>
🌹 Jawaharlal Nehru — First PM of India<br>
📜 Dr. Ambedkar — Constitution banaya<br><br>
<em>😄 Azaadi ki qeemat samjho — un logon ne apni jaan di! Respect karo! 🙏</em>`,

    // ── AMAN SIR & INSTITUTE ──
    amanSir: `<span class="aie">👨‍💻</span><strong>THE LEGEND — Aman Sir! 🦸</strong><br><br>
<strong>Full Name:</strong> Aman Khan<br>
<strong>Profession:</strong> Front-end Developer + Passionate Teacher<br>
<strong>Institute:</strong> FuturePath Learning Institute<br>
<strong>Location:</strong> Near Taiba Club, Phoolbagan, Kolkata<br><br>
<strong>Skills:</strong><br>
💻 Python, Java, C Language<br>
🌐 HTML, CSS, JavaScript, React<br>
🗄️ MySQL Database<br>
📊 MS Office Suite<br>
🧾 Tally & Accounting<br>
🤖 AI Development (mujhe banaya! 😄)<br><br>
<strong>Teaching Style:</strong><br>
✅ Concept-based — samjho, ratto mat!<br>
✅ Personal attention — chhote batches<br>
✅ Regular tests & progress reports<br>
✅ Board exam focused<br>
✅ Free demo class available!<br><br>
<strong>Contact:</strong><br>
📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;font-weight:700;">WhatsApp pe Message</a><br>
💼 <a href="https://www.linkedin.com/in/aman-khan-210187324" target="_blank" style="color:#60a5fa;">LinkedIn</a><br><br>
<em>😄 Aman Sir itne acche teacher hain ki unhone ek AI bhi bana diya students ke liye! 🤖✨</em>`,

    fees: () => {
      const cards = INSTITUTE.fees
        .map(
          (f) =>
            `<div class="ai-course-card" onclick="location.href='#register'">
            <span>📚 ${f.name}</span>
            <span class="ai-course-price">${f.price}</span>
          </div>`
        )
        .join("");
      return `<span class="aie">💰</span><strong>FuturePath Learning Institute — Puri Fee Structure!</strong><br><br>${cards}<br>
        ✅ One-time Admission Fee: <strong>₹300 only</strong><br>
        ✅ No hidden charges!<br>
        ✅ Free Demo Class available!<br><br>
        📞 Call karo: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a>`;
    },

    location: `<span class="aie">📍</span><strong>Humara Location:</strong><br><br>
<strong>Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058</strong><br><br>
Auto, bus, ya metro se aasaan pahunch! 🚌🚇<br><br>
<strong>📞 Call/WhatsApp:</strong> <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
<strong>💬 WhatsApp:</strong> <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">Click karo</a><br><br>
<strong>⏰ Batch Timings:</strong><br>
🌅 Morning: 7:00 AM – 10:00 AM<br>
☀️ Afternoon: 12:00 PM – 3:00 PM<br>
🌆 Evening: 5:00 PM – 8:00 PM`,

    jokes: [
      "Programming students ke liye: Why do programmers prefer dark mode? Kyunki LIGHT attracts BUGS! 🐛😂",
      "Teacher: 'Homework kiya?' Student: 'Sir, mera dog ne kha liya!' Teacher: 'Tum computer science student ho!' Student: '...mera computer crashed!' 😂",
      "Math book sad kyun thi? Kyunki usmein bahut zyada PROBLEMS thi! 📚😅",
      "Python developer ek party mein gaya. Logo ne pucha 'Kya karte ho?' Developer: 'Mujhe snakes se pyaar hai!' Sab bhaag gaye! 🐍😂",
      "Student: 'Sir mujhe Excel nahi aata.' Aman Sir: 'Seedha baat karo — tum homework nahi karte!' 😂",
      "Computer thanda kyun tha? Kyunki usne apna WINDOWS khula chhod diya! 🪟❄️",
      "Programmer ka favorite khana? MICROCHIPS! 🍟💻",
      "JavaScript developer ko kaise console karo? Console.log se! 😂 (developers samjhe!)",
      "Aman Sir ka student exam hall mein: 'Sab yaad tha ghar pe, yahan bhool gaya.' Aman Sir: 'Isliye practice karte hain!' 😄",
      "Why can't Tally keep secrets? Kyunki har cheez DEBIT ya CREDIT ho jaati hai! 🧾😂",
      "Class 4 student to Class 12 student: 'Bade hoke kya banoge?' 'Stressed!' 😂",
      "Oxygen aur Magnesium ek saath mile... Teacher: 'OMg!' Class: '😂'",
      "Teacher: Gravity kya hai? Student: Sir, wo cheez jo meri pencil girne par blame hoti hai har baar! 🍎😄",
    ],
  };

  // ════════════════════════════════════════════
  //  MAIN RESPONSE ENGINE — Pattern matching
  // ════════════════════════════════════════════
  function getLocalResponse(input) {
    const q = input.toLowerCase().trim();
    const r = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // ── Greetings ──
    if (/^(hi+|hello+|hey+|hii+|namaste|namaskar|hola|salam|assalam|good morning|good evening|good afternoon|yo+|sup|ola)/.test(q)) {
      return r([
        `<span class="aie">👋</span><strong>Hello! Kaise ho?</strong> 😊<br><br>Main hoon <strong>BrainBot</strong> — Aman Sir ka AI assistant!<br><br>Main tumhe help kar sakta hoon:<br>🧪 Science samjhane mein<br>📐 Maths solve karne mein<br>💻 Coding sikhane mein<br>📊 MS Office / Tally ke baare mein<br>🏫 FuturePath ke baare mein<br>😂 Jokes bhi batata hoon!<br><br><strong>Kya poochna hai? Likho! 😄</strong>`,
        `<span class="aie">🎉</span>Heyyyy! Main BrainBot hoon — Aman Sir ne banaya hai mujhe!<br><br>Tum kisi bhi class mein ho — 4th ya 12th — main easy language mein samjhaunga! 😊<br><br>Kya poochna hai aaj?`,
      ]);
    }

    // ── Thanks ──
    if (/(thank|thanks|shukriya|shukriyaa|dhanyawad|thx|ty\b)/.test(q)) {
      return `<span class="aie">🥹</span>Bahut bahut welcome! 😊<br><br>Main 24/7 available hoon — kabhi bhi poochho!<br><br>Aur yaad raho — <strong>FuturePath Learning Institute</strong> mein Aman Sir direct personal attention dete hain! 📚`;
    }

    // ── Bye ──
    if (/(bye|goodbye|later|ciao|alvida|ok bye|okay bye|tata)/.test(q)) {
      return `<span class="aie">👋</span>Bye bye! Phir milenge! 😊<br><br>📞 Aman Sir se baat karo: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>📍 Near Taiba Club, Phoolbagan, Kolkata<br><br>Khub padho, khub seekho! 🎓✨`;
    }

    // ── Who made you ──
    if (/(who made|who built|who created|your creator|made by|built by|who are you|what are you|kaun banaya|kisne banaya)/.test(q)) {
      return `<span class="aie">🤖</span>Main <strong>BrainBot</strong> hoon — banaya hai <strong>Aman Sir (Aman Khan)</strong> ne!<br><br>Woh FuturePath Learning Institute ke founder hain — ek real Front-end Developer jo passionately padhate hain!<br><br>Mujhe specially banaya gaya hai ki Class 4 ke chhote bacche se lekar Class 12 ke bade student tak — sab ko easy language mein help kar sakoon! 😊<br><br>Kya poochna hai? 👇`;
    }

    // ── Calculator first ──
    const calcResult = tryCalculate(q);
    if (calcResult) return calcResult;

    // ── Science ──
    if (/(hawa|air |what is air|air kya)/.test(q)) return KB.air;
    if (/(paani|water|h2o|jal )/.test(q) && !/(cycle|body|water cycle)/.test(q)) return KB.water;
    if (/(suraj|sun |solar |surya)/.test(q) && !/(solar system|surya mandal)/.test(q)) return KB.sun;
    if (/(chaand|moon |chand )/.test(q)) return KB.moon;
    if (/(paudha|plant|tree|ped|vanaspati)/.test(q) && !/(photosynthesis)/.test(q)) return KB.plant;
    if (/(oxygen|o2|oksigen)/.test(q)) return KB.oxygen;
    if (/(photosynthesis|photo synthesis|poona|khana banana plant)/.test(q)) return KB.photosynthesis;
    if (/(respiration|saans|breathing|cellular respiration|aerobic|anaerobic)/.test(q)) return KB.respiration;
    if (/(heart|dil |cardiac|heartbeat)/.test(q)) return KB.heart;
    if (/(newton|laws of motion|inertia|f=ma|force mass)/.test(q)) return KB.newton;
    if (/(gravity|gravitation|gravitational|neeche girti|free fall|g = 9)/.test(q)) return KB.gravity;
    if (/(electricity|bijli|current|voltage|resistance|ohm|circuit|ampere)/.test(q)) return KB.electricity;
    if (/(awaaz|sound|waves?|frequency|amplitude)/.test(q)) return KB.sound;
    if (/(roshni|light|optics|reflection|refraction|spectrum|rainbow|vibgyor)/.test(q)) return KB.light;
    if (/(atom|atomic|proton|neutron|electron|nucleus|element|periodic)/.test(q)) return `<span class="aie">⚛️</span><strong>Atom — Sabse Chhota Particle!</strong><br><br><strong>Atom kya hai?</strong><br>Kisi bhi cheez ka sabse chhota building block — itna chhota ki ek baal ki moti mein 10 lakh atoms fit ho sakti hain!<br><br><strong>Atom ke 3 parts:</strong><br>🔴 <strong>Proton</strong> — Nucleus mein, Positive charge (+)<br>⚫ <strong>Neutron</strong> — Nucleus mein, No charge (neutral)<br>🔵 <strong>Electron</strong> — Nucleus ke chaaron taraf ghoomta hai, Negative charge (-)<br><br><strong>Important terms:</strong><br>📌 Atomic Number = protons ki sankhya (element define karta hai)<br>📌 Mass Number = protons + neutrons<br>📌 Valence electrons — sabse bahari shell ke electrons<br><br><strong>Atoms → Molecules → Compounds → Matter!</strong><br><br><em>😄 Tum, main, hamaari duniya — sab atoms se bane hain! We are literally stardust! 🌟</em>`;
    if (/(evolution|darwin|natural selection|species|adaptation)/.test(q)) return `<span class="aie">🦕</span><strong>Evolution — Darwin ka Theory!</strong><br><br><strong>Simple bhasha mein:</strong><br>Millions of years mein, living creatures thoda thoda badal jaate hain — environment ke hisaab se!<br><br><strong>Darwin ka Theory of Natural Selection (1859):</strong><br>1. Har species mein variation hota hai (sab same nahi hote)<br>2. Jo zyada suited hote hain environment ke liye — woh zyada survive karte hain<br>3. Woh apne traits bachon mein pass karte hain<br>4. Millions of years mein — naye species ban jaate hain!<br><br><strong>"Survival of the Fittest" = Jo best adapt kare woh survive kare!</strong><br><br><strong>Evidence:</strong><br>🦴 Fossils | 🧬 DNA similarities | 🦊 Darwin's finches (Galapagos Islands)<br><br><em>😄 Humans aur chimps mein 98.7% same DNA hai! Hamare door ke rishtedaar! 🐒</em>`;

    // ── Maths ──
    if (/(fraction|bhinn|numerator|denominator|aadha|chauthai)/.test(q)) return KB.fractions;
    if (/(percentage|percent|pratishat|marks mein|kitne mark)/.test(q)) return KB.percentage;
    if (/(algebra|linear equation|quadratic|variable|x ki value|solve karo|polynomial)/.test(q)) return KB.algebra;
    if (/(geometry|shape|area|perimeter|volume|pythagoras|circle area|triangle area|rectangle area)/.test(q)) return KB.geometry;
    if (/(trigonometry|sin|cos|tan|soh cah toa|right angle|hypotenuse)/.test(q)) return KB.trigonometry;
    if (/(statistics|mean|median|mode|average|data analysis)/.test(q)) return KB.statistics;
    if (/(probability|chance|dice|coin toss|likelihood|sambhavna)/.test(q)) return `<span class="aie">🎲</span><strong>Probability (Sambhavna) — Chance nikalna!</strong><br><br><strong>Formula:</strong><br><code>P(Event) = Favourable outcomes ÷ Total outcomes</code><br><br>0 = Impossible | 1 = Certain (100%)<br><br><strong>Examples:</strong><br>🪙 Coin toss pe Heads: P = 1/2 = 0.5 = 50%<br>🎲 Dice pe 6 aane ki chance: P = 1/6 ≈ 16.7%<br>🃏 52 cards mein se Ace: P = 4/52 = 1/13<br><br><strong>Rules:</strong><br>📌 P(A) + P(NOT A) = 1<br>📌 Two independent events: P(A and B) = P(A) × P(B)<br>📌 Mutually exclusive: P(A or B) = P(A) + P(B)<br><br><em>😄 Probability isliye important hai — game shows, insurance, weather forecast sab isko use karte hain! 🌦️</em>`;
    if (/(pi |π |3\.14|circle constant)/.test(q)) return `<span class="aie">🥧</span><strong>Pi (π) — Sabse Famous Mathematical Constant!</strong><br><br><strong>Value:</strong> π ≈ 3.14159265358979...<br>Ye kabhi khatam nahi hoti — infinite decimal! Ek irrational number hai!<br><br><strong>Kaha se aaya?</strong><br>Kisi bhi circle ka: <code>π = Circumference ÷ Diameter</code><br>Ye ratio HAMESHA same hoti hai — chahe circle chhota ho ya bada!<br><br><strong>Formulas mein use:</strong><br>⭕ Circle Area = πr²<br>⭕ Circumference = 2πr<br>🥫 Cylinder Volume = πr²h<br>🔵 Sphere Volume = 4/3πr³<br><br><em>😄 Pi Day = 14 March (3/14)! Scientists ne 100 trillion digits calculate ki hain! 🤯</em>`;

    // ── CS/Coding ──
    if (/(python|py |snake game|python code)/.test(q) && !/(monty)/.test(q)) return KB.python;
    if (/(java |java programming|java code|oops java)/.test(q) && !/(javascript|js)/.test(q)) return KB.java;
    if (/(html|hypertext markup)/.test(q)) return KB.html;
    if (/(css|cascading style|styling website)/.test(q) && !/(access)/.test(q)) return KB.css;
    if (/(javascript|js |node\.?js|dom |jquery)/.test(q)) return KB.javascript;
    if (/(programming kya|coding kya|code kya|software kya|app kaise banta)/.test(q)) return KB.programming;
    if (/(database|sql|mysql|select query|create table|insert into)/.test(q)) return `<span class="aie">🗄️</span><strong>Database aur SQL</strong><br><br><strong>Database kya hai?</strong><br>Data store karne ki organised jagah — jaise ek bahut bada digital register!<br><br><strong>MySQL Basic Commands:</strong><br><pre>-- Table banao
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  class INT,
  marks FLOAT
);

-- Data daalo
INSERT INTO students VALUES (1, 'Rahul', 10, 85);

-- Data nikalo
SELECT * FROM students;
SELECT name FROM students WHERE marks > 80;

-- Update karo
UPDATE students SET marks = 90 WHERE name = 'Rahul';

-- Delete karo
DELETE FROM students WHERE id = 1;</pre><br><em>😄 WhatsApp, Instagram, YouTube — sab databases use karte hain! Aur Aman Sir FuturePath mein sikhate hain! 🚀</em>`;
    if (/(react|reactjs|jsx|component|hooks)/.test(q)) return `<span class="aie">⚛️</span><strong>React.js — Facebook ka Framework!</strong><br><br><strong>React kya hai?</strong><br>Facebook/Meta ne banaya — fast, interactive websites ke liye!<br>Instagram, WhatsApp Web, Netflix — sab React use karte hain!<br><br><strong>Core Concept — Components:</strong><br><pre>function Welcome({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}

// Use karo:
&lt;Welcome name="Aman Sir" /&gt;</pre><br><strong>Key Features:</strong><br>⚡ Virtual DOM — sirf jo badla usko update karo (fast!)<br>🧩 Reusable components — ek baar banao, kahin bhi use karo<br>🔄 useState, useEffect — dynamic data manage karo<br><br><em>😄 Aman Sir React sikhate hain FuturePath mein — wahi technology jo Facebook uses karta hai! 🚀</em>`;
    if (/(internet kya|how internet|ip address|dns |http|browser kaise|website kaise)/.test(q)) return `<span class="aie">🌐</span><strong>Internet Kaise Kaam Karta Hai?</strong><br><br><strong>Internet kya hai?</strong><br>Crores of computers jo cables, satellites aur wireless se connected hain — ek bada network!<br>"Inter-connected Networks" = Internet!<br><br><strong>Website open karne par kya hota hai?</strong><br>1. Tum type karte ho: www.google.com<br>2. Browser DNS server se poochta hai: "Google ka IP kya hai?"<br>3. DNS reply karta hai: "142.250.x.x"<br>4. Browser Google ke server se connect hota hai (HTTP/HTTPS)<br>5. Server HTML+CSS+JS bhejta hai<br>6. Browser render karta hai — page dikh jaata hai! 🎉<br><br><strong>Important Terms:</strong><br>🔢 IP Address — har device ka unique address<br>📖 DNS — Domain Name System (internet ki phone book)<br>🔒 HTTPS — secure connection (bank websites use karte hain)<br>🌐 URL — poora web address<br><br><em>😄 Internet har din 5 billion GB data handle karta hai! 🤯</em>`;

    // ── MS Office ──
    if (/(ms office|microsoft office|office suite)/.test(q)) return KB.msoffice;
    if (/(excel|spreadsheet|vlookup|pivot|worksheet)/.test(q)) return KB.excel;
    if (/(ms word|word document|typing|document kaise)/.test(q)) return `<span class="aie">📝</span><strong>MS Word — Documents likhne ka best tool!</strong><br><br><strong>Kaam aata hai:</strong> Letters, essays, resumes, reports sab Word mein likhte hain!<br><br><strong>Important Shortcuts:</strong><br>Ctrl+N → New file | Ctrl+O → Open file<br>Ctrl+S → Save | Ctrl+P → Print<br>Ctrl+Z → Undo | Ctrl+Y → Redo<br>Ctrl+B → Bold | Ctrl+I → Italic<br>Ctrl+U → Underline | Ctrl+A → Select All<br>Ctrl+C → Copy | Ctrl+V → Paste<br>Ctrl+F → Find | Ctrl+H → Find & Replace<br>F7 → Spell Check<br><br><strong>Useful Features:</strong><br>📊 Insert Table (Alt+N+T)<br>📷 Insert Image (Alt+N+P)<br>📋 Mail Merge — ek letter bahut logon ko<br>📑 Table of Contents — automatic<br><br><em>😄 Word mein typing seekh lo — koi bhi office job ke liye zaroori hai! ₹1,200/month at FuturePath! ✍️</em>`;
    if (/(powerpoint|ppt|presentation|slides|slideshow)/.test(q)) return `<span class="aie">📽️</span><strong>MS PowerPoint — Presentations banana!</strong><br><br><strong>PowerPoint kya hai?</strong><br>Slides (pages) mein information show karna — school projects, office meetings, sab ke liye!<br><br><strong>Shortcuts:</strong><br>F5 → Slideshow shuru karo (start se)<br>Shift+F5 → Current slide se shuru karo<br>Esc → Slideshow band karo<br>Ctrl+M → New slide add karo<br>Ctrl+D → Slide duplicate karo<br>B → Black screen (pausing ke liye)<br><br><strong>Pro Tips:</strong><br>✅ Slide pe kam text rakho — mostly images/points<br>✅ Ek slide pe ek main idea<br>✅ Readable fonts use karo (min 24pt)<br>✅ Consistent colors aur theme rakho<br>✅ Animations zyada mat daalo — distraction hota hai<br><br><em>😄 Good presentation = less reading, more talking! Aman Sir ke paas seekho! 🎤</em>`;

    // ── Tally & Accounting ──
    if (/(tally|tally erp|tally prime)/.test(q)) return KB.tally;
    if (/(accounting|bookkeeping|golden rule|debit credit|balance sheet|ledger|journal)/.test(q)) return KB.accounting;
    if (/(gst|goods and services tax|cgst|sgst|igst)/.test(q)) return KB.gst;

    // ── History & GK ──
    if (/(india kya|about india|bharat |hamaara desh|india facts)/.test(q)) return KB.india;
    if (/(capital |capitals|raj dhani)/.test(q)) return KB.capitalCities;
    if (/(solar system|surya mandal|planet|mangal|brihaspati|shani|uranus|neptune)/.test(q)) return KB.solar;
    if (/(azaadi|freedom|independence|british|mughal|revolt 1857|quit india|dandi|gandhi|bhagat|bose|nehru)/.test(q)) return KB.freedom;
    if (/(world war|ww2|hitler|nazi|second world war)/.test(q)) return `<span class="aie">🌍</span><strong>World War II (1939-1945)</strong><br><br><strong>Kisne ladi?</strong><br>⚔️ <strong>Allied Powers:</strong> Britain, USA, USSR, France, India<br>⚔️ <strong>Axis Powers:</strong> Germany (Hitler), Italy (Mussolini), Japan<br><br><strong>Important Events:</strong><br>📅 1939 → Germany ne Poland par hamla — war shuru!<br>📅 1941 → Japan ne Pearl Harbor par hamla → USA join hua<br>📅 1942-43 → Battle of Stalingrad — turning point!<br>📅 1944 → D-Day (Normandy landing — Allies ne France attack kiya)<br>📅 May 1945 → Germany ne surrender kiya (VE Day!)<br>📅 Aug 1945 → USA ne Hiroshima & Nagasaki par atomic bombs giraaye → Japan ka surrender<br><br><strong>Impact:</strong><br>💀 70-85 million log mare — history ka sabse bada war<br>🌍 UN (United Nations) bana — future mein wars rokne ke liye<br>☢️ Nuclear age shuru hua<br><br><em>🕊️ War ki keemat bahut bhari hoti hai. Padhke samjho, repeat mat hone do! 🙏</em>`;

    // ── Aman Sir & Institute ──
    if (/(aman sir|aman khan|teacher|sir kaun|kaun padhate|futurepath teacher|sir ke baare)/.test(q)) return KB.amanSir;
    if (/(fees|fee|kitna|price|cost|charge|rate|kitne paise|mahina|monthly)/.test(q)) return KB.fees();
    if (/(location|kahan hai|address|phoolbagan|taiba|kolkata mein|kaise pahunche|kahan padhate)/.test(q)) return KB.location;
    if (/(contact|phone number|call|whatsapp|number kya|number batao)/.test(q)) return `<span class="aie">📞</span><strong>Aman Sir se Contact Karo!</strong><br><br>📱 <strong>Mobile:</strong> <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;font-weight:700;">Click karke message karo</a><br>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aman-khan-210187324" target="_blank" style="color:#60a5fa;">Aman Khan</a><br>📍 <strong>Location:</strong> Near Taiba Club, Phoolbagan, Kolkata<br><br>Jaldi call karo — limited seats hain! 🏃`;
    if (/(demo class|free class|trial|pehle dekhna|bina admission)/.test(q)) return `<span class="aie">🎓</span><strong>FREE Demo Class Available!</strong> 🎉<br><br>Haan! Aman Sir dete hain <strong>free trial class</strong> — bina kisi commitment ke!<br><br>Pehle dekhlo kaise padhate hain — phir decide karo! 😊<br><br>📞 Call karo: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">WhatsApp pe book karo</a><br><br>Admission fee sirf ₹300 (one-time)!`;
    if (/(timing|batch|time|morning|evening|afternoon|schedule|kab aaye|class kab)/.test(q)) return `<span class="aie">⏰</span><strong>Batch Timings!</strong><br><br>🌅 <strong>Morning Batch:</strong> 7:00 AM – 10:00 AM<br>☀️ <strong>Afternoon Batch:</strong> 12:00 PM – 3:00 PM<br>🌆 <strong>Evening Batch:</strong> 5:00 PM – 8:00 PM<br><br>Individual (1-on-1) ya Small Group (2-5 students) — dono available!<br><br>📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> pe call karke apna slot book karo!`;
    if (/(course|kya padhate|kya sikhate|syllabus|subject|kya available)/.test(q)) {
      const list = INSTITUTE.courses.map((c) => `✅ ${c}`).join("<br>");
      return `<span class="aie">📚</span><strong>FuturePath mein kya kya sikhate hain?</strong><br><br>${list}<br><br>📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> — call karo details ke liye!`;
    }
    if (/(why choose|kyun join|best kyun|kyu aye|kyu futurepath|benefit|advantages)/.test(q)) {
      const list = INSTITUTE.features.map((f) => `✅ ${f}`).join("<br>");
      return `<span class="aie">🌟</span><strong>Kyun FuturePath join karein?</strong><br><br>${list}<br><br>Free demo class ke liye call karo: <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a> 📞`;
    }

    // ── Fun & Jokes ──
    if (/(joke|jokes|funny|hanso|hasi|comedy|mazak|lol|haha)/.test(q)) {
      doEmojiRain(["😂", "🤣", "😄", "😆", "🎭"]);
      return `<span class="aie">😂</span><em>${r(KB.jokes)}</em><br><br>Hahaha! 😅 Aur sunna? Phir se "joke" likho! 🎪`;
    }
    if (/(riddle|paheli|puzzle|bujho toh jaano)/.test(q)) {
      const riddles = [
        { q: "Mera ek chehra hai, par aankh nahi, haath nahi, lekin time batata hoon — main kya hoon?", a: "⌚ Ghadi (Watch/Clock)!" },
        { q: "Kitna bhi khaao, pet nahi bharta — main kya hoon?", a: "📚 Knowledge (Gyan)!" },
        { q: "Main paani mein rehta hoon, lekin bheegta nahi — main kya hoon?", a: "🫧 Bubble (Pani ka bulbula)!" },
        { q: "Jitna kato, utna barhta hoon — main kya hoon?", a: "🕳️ Gadhha (Hole)!" },
      ];
      const chosen = r(riddles);
      return `<span class="aie">🧩</span><strong>Paheli:</strong><br><br><em>${chosen.q}</em><br><br><details><summary>👆 Answer dekhne ke liye click karo!</summary><br><strong>${chosen.a}</strong></details>`;
    }

    // ── Motivational ──
    if (/(sad|stressed|dar|scared|cant do|nahi ho raha|mushkil|fail|padhai nahi|samajh nahi)/.test(q)) {
      doEmojiRain(["💪", "🌟", "✨", "🔥", "❤️"]);
      return r([
        `<span class="aie">💪</span>Ek baat suno! <strong>Har expert pehle ek beginner tha!</strong><br><br>Aman Sir ne bhi sab kuch zero se seekha — aaj woh ek real Front-end Developer hain aur 50+ students padha rahe hain! 🚀<br><br>Jo topic mushkil lag raha hai — mujhse poochho, main easy karta hoon!<br><br>Aur FuturePath join karo — Aman Sir personally attention dete hain! 😊`,
        `<span class="aie">🌟</span><strong>Fail hona bura nahi — sikhna chhod dena bura hai!</strong><br><br>Thomas Edison ne 1000 baar fail hoke bulb banaya!<br>Albert Einstein school mein average student tha!<br><br>Tum bhi kar sakte ho — bas practice karo aur sahi guidance lo! 💪<br><br>Kya topic mushkil hai? Batao — main samjhaunga! 😊`,
      ]);
    }

    // ── General fallback ──
    return null;
  }

  // ════════════════════════════════════════════
  //  AI API CALL (OpenRouter — multiple free models)
  // ════════════════════════════════════════════
  const SYSTEM_PROMPT = `You are BrainBot 🤖 — a super-smart, friendly AI assistant created by Aman Sir (Aman Khan) for FuturePath Learning Institute in Phoolbagan, Kolkata.

YOUR PERSONALITY:
- Friendly, warm, encouraging — like a helpful elder sibling
- Use simple Hindi-English (Hinglish) mixed language — easy for all ages
- Students range from Class 4 (8-9 years old) to adults — adjust language accordingly
- Use emojis generously to make responses fun
- Always give examples from daily life to explain concepts
- Be patient and never make students feel dumb
- Praise good questions!

ALWAYS ANSWER IN HINGLISH (Hindi + English mix) unless the user writes in pure English, then reply in simple English.

INSTITUTE DETAILS (mention when relevant, always be promotional):
- Name: FuturePath Learning Institute
- Teacher: Aman Sir (Aman Khan) — Front-end Developer & passionate teacher
- Location: Near Taiba Club, Phoolbagan, Panihati, Kolkata - 700058
- Phone: 8910517578
- Classes: 4 to 12 (CBSE & ICSE)
- Fees: ₹1,000–₹2,000/month
- Courses: Python, Java, C, HTML/CSS/JS, React, MySQL, MS Office, Tally, All subjects
- Admission: ₹300 one-time | Free demo class available!

FORMATTING RULES:
- Use **bold** for important terms
- Use code blocks for code examples
- Break complex topics into numbered steps
- Always end with encouragement or a fun fact
- For maths: show step-by-step working
- For science: use real-life examples
- Keep answers focused and clear`;

  async function callOpenRouter(text) {
    const MODELS = [
      "google/gemma-3-27b-it:free",
      "meta-llama/llama-3.2-11b-vision-instruct:free",
      "qwen/qwen-2.5-72b-instruct:free",
      "mistralai/mistral-7b-instruct:free",
      "google/gemma-2-9b-it:free",
    ];
    const model = MODELS[Math.floor(Math.random() * MODELS.length)];

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "HTTP-Referer":
            "https://aman00369.github.io/FuturePath-Learning-Institute/",
          "X-Title": "BrainBot by Aman Sir — FuturePath",
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...conversationHistory.slice(-6), // last 3 turns context
            { role: "user", content: text },
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) throw new Error("API error: " + response.status);
    const data = await response.json();
    if (
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
    ) {
      return data.choices[0].message.content;
    }
    throw new Error("No response from model");
  }

  function formatAIReply(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`\n]+)`/g, "<code>$1</code>")
      .replace(/```[\w]*\n?([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      .replace(/^#{1,3}\s+(.+)$/gm, '<strong style="color:#fbbf24;">$1</strong>')
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>");
  }

  // ════════════════════════════════════════════
  //  MAIN SEND FUNCTION
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

    // 1. Try local knowledge base first (instant, no API needed)
    const localReply = getLocalResponse(text);
    if (localReply) {
      setTimeout(() => {
        hideTyping();
        addBotMsg(localReply);
        // Save to conversation history
        conversationHistory.push({ role: "user", content: text });
        conversationHistory.push({ role: "assistant", content: "...local response..." });
      }, 400); // small delay to feel natural
      return;
    }

    // 2. Call OpenRouter AI for anything not in local KB
    try {
      const aiReply = await callOpenRouter(text);
      hideTyping();
      const formatted = formatAIReply(aiReply);
      addBotMsg(formatted);
      // Save to history for context
      conversationHistory.push({ role: "user", content: text });
      conversationHistory.push({ role: "assistant", content: aiReply });
      // Keep history manageable
      if (conversationHistory.length > 20) {
        conversationHistory = conversationHistory.slice(-16);
      }
    } catch (err) {
      console.warn("AI API failed:", err.message);
      hideTyping();
      // Smart fallback — try to give something useful
      addBotMsg(
        `<span class="aie">😅</span>Abhi internet thoda slow hai! Ek baar phir try karo.<br><br>
        Ya seedha Aman Sir se poochho:<br>
        📞 <a href="tel:8910517578" style="color:#fbbf24;font-weight:700;">8910517578</a><br>
        💬 <a href="https://wa.me/918910517578" target="_blank" style="color:#10b981;">WhatsApp pe message</a><br><br>
        Meanwhile, kuch aur poochho — science, maths, coding, GK, ya jokes! 😄`
      );
    }
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

  // ════════════════════════════════════════════
  //  EXPOSE SEND FUNCTION
  // ════════════════════════════════════════════
  window.aiSendMessage = aiSendMessage;

  // ════════════════════════════════════════════
  //  INIT
  // ════════════════════════════════════════════
  window.addEventListener("DOMContentLoaded", function () {
    initStars();
  });

  // Also init immediately if DOM already loaded
  if (document.readyState !== "loading") {
    initStars();
  }
})();