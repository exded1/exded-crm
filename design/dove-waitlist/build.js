const fs=require('fs');const {chromium}=require('playwright');
const FONTS=`<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&display=swap" rel="stylesheet">`;
const dove=c=>`<svg viewBox="0 0 48 48" width="26" height="26"><path fill="${c}" d="M8 30c6 0 10-3 13-8 2-4 5-8 11-8 4 0 7 2 8 4l-4 1c-1 6-6 14-16 15l3 6h-4l-3-5c-4 0-7-2-8-5z"/><circle cx="34" cy="17.5" r="1.4" fill="#fff"/></svg>`;
const I={check:'<svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
shield:'<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
share:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
copy:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="9" y="9" width="12" height="12" rx="3"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>',
phone:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>',
hour:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 3h12M6 21h12M7 3c0 5 10 6 10 9s-10 4-10 9M17 3c0 5-10 6-10 9"/></svg>',
gift:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="8" width="18" height="5" rx="1"/><path d="M5 13v8h14v-8M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/></svg>',
user:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>',
up:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>',
heart:'<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 21s-8-5.3-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.7-8 11-8 11z"/></svg>'};
const body=(v)=>`
<header class="hero">
  <div class="top"><div class="logo">${dove(v.logo)}<span>Dove</span></div><span class="pill">Early access</span></div>
  <p class="eyebrow">Welcome aboard</p>
  <h1>You're on the <em>list</em> ${I.heart}</h1>
  <p class="sub">Your spot is saved. Invite friends and help bring Dove to your city first.</p>
  <div class="faces"><span style="--h:340">A</span><span style="--h:20">J</span><span style="--h:45">K</span><span style="--h:300">R</span><b>+2.4k joined this week</b></div>
</header>
<main>
<section class="card stat">
  <div class="row"><span class="live"><i></i>Live waitlist</span><span class="today">${I.up} +124 today</span></div>
  <div class="big">113,581</div><p class="muted">people waiting for Dove</p>
  <div class="row small"><b>Community goal</b><span class="muted">Growing toward 500K</span></div>
  <div class="bar"><div class="fill"></div></div>
  <div class="ticks"><span>0</span><span>125K</span><span>250K</span><span>375K</span><span>500K</span></div>
  <div class="ticket"><span>Your position</span><strong>#113,581</strong></div>
</section>
<section class="card check">
  <div class="row"><h2>Your launch checklist</h2><div class="ring"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" class="bg"/><circle cx="20" cy="20" r="16" class="fg"/></svg><span>2/3</span></div></div>
  <div class="item done"><span class="dot">${I.check}</span><div><b>Account created</b></div></div>
  <div class="item done"><span class="dot">${I.check}</span><div><b>Profile finished</b></div></div>
  <div class="item todo"><span class="dot">${I.shield}</span><div><b>Get verified</b><small>Unlock all features</small></div><button class="btn sm">Verify now</button></div>
</section>
<div class="sec-head"><div><p class="eyebrow dark">Waitlist reward · before launch</p><h2>Earn before Dove launches</h2></div><a>View all →</a></div>
<section class="card promo">
  <div class="row"><span class="tag">Featured challenge</span><span class="count">0<small>/10</small></span></div>
  <div class="money">$100</div><h3>Referral Challenge</h3><p>Invite 10 friends in 24 hours</p>
  <div class="timer"><code>24:00:00</code><span>starts on your first referral</span></div>
  <button class="btn invite">${I.share} Invite your people</button>
  <div class="link"><code>fly.dove-app.com/r/KBCQZSD</code><button>${I.copy} Copy</button></div>
</section>
<section class="card code">
  <h2>Have an invite code?</h2><p class="muted">Enter a friend's code so they get credit when you get verified.</p>
  <div class="field"><input placeholder="Enter code"><button>Apply</button></div>
</section>
<button class="btn cta">${I.phone} Open the app</button>
<a class="skip">Skip for now</a>
</main>
<nav><a class="on"><span>${I.hour}</span>Waitlist</a><a><span>${I.gift}</span>Earn</a><a><span>${I.user}</span>Profile</a></nav>`;
const base=`*{box-sizing:border-box;margin:0}body{width:430px;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased}
h1,h2,h3,.big,.money{font-family:var(--hf)}button{font:inherit;border:0;cursor:pointer}
.hero{padding:22px 22px 70px;position:relative;overflow:hidden}.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:26px}
.logo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:20px}.logo svg{background:var(--logobg);border-radius:12px;padding:6px;width:38px;height:38px}
.pill{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:8px 14px;border-radius:99px}
.eyebrow{font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:8px}
h1{font-size:40px;line-height:1.05;letter-spacing:-.02em}h1 em{font-style:italic}h1 svg{vertical-align:middle}h1{white-space:nowrap}
.sub{margin-top:12px;font-size:15px;line-height:1.5;max-width:300px}
.faces{display:flex;align-items:center;margin-top:20px}.faces span{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:800;color:#fff;background:hsl(var(--h) 75% 58%);margin-right:-8px;border:2px solid var(--facebd)}.faces b{margin-left:18px;font-size:13px}
main{padding:0 16px;margin-top:-46px;position:relative}.card{border-radius:24px;padding:20px;margin-bottom:16px}
.row{display:flex;justify-content:space-between;align-items:center}.muted{opacity:.7;font-size:14px}
.live{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;display:flex;gap:8px;align-items:center}.live i{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px #22c55e33}
.today{font-size:12px;font-weight:800;padding:6px 10px;border-radius:99px;display:flex;gap:4px;align-items:center}
.big{font-size:62px;font-weight:800;letter-spacing:-.03em;line-height:1;margin-top:16px}
.small{margin-top:18px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}.small .muted{text-transform:none;letter-spacing:0;font-size:12px}
.bar{height:12px;border-radius:99px;margin-top:10px;overflow:hidden}.fill{width:23%;height:100%;border-radius:99px}
.ticks{display:flex;justify-content:space-between;font-size:11px;font-weight:700;opacity:.6;margin-top:6px}
.ticket{margin-top:16px;padding:12px 14px;border-radius:14px;display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600}.ticket strong{font-size:16px}
h2{font-size:21px;letter-spacing:-.01em}
.ring{position:relative;width:46px;height:46px}.ring svg{width:46px;height:46px;transform:rotate(-90deg)}.ring circle{fill:none;stroke-width:4}.ring .fg{stroke-dasharray:100.5;stroke-dashoffset:33.5;stroke-linecap:round}.ring span{position:absolute;inset:0;display:grid;place-items:center;font-size:12px;font-weight:800}
.item{display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px dashed var(--line)}.item:last-child{border:0;padding-bottom:0}.item>div{flex:1}.item b{font-size:15px}.item small{display:block;opacity:.65;font-size:12px;margin-top:2px}
.dot{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;flex:none}
.btn{display:flex;align-items:center;justify-content:center;gap:8px;font-weight:800;border-radius:99px}.btn.sm{padding:10px 16px;font-size:13px}
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;margin:28px 4px 12px}.sec-head a{font-size:13px;font-weight:800}.eyebrow.dark{margin-bottom:4px}
.tag{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.count{display:flex!important;align-items:baseline;justify-content:center;padding-top:16px;width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:17px}.count small{font-size:11px;opacity:.6}
.money{font-size:64px;font-weight:800;line-height:1;margin-top:4px;letter-spacing:-.03em}h3{font-size:22px;margin-top:6px}.promo p{font-size:14px;opacity:.85;margin-top:2px}
.timer{display:flex;align-items:center;gap:10px;margin:14px 0 16px;font-size:12px}.timer code{font-weight:700;padding:5px 10px;border-radius:8px;font-size:12px}
.invite{width:100%;padding:16px;font-size:16px}.link{margin-top:10px;display:flex;justify-content:space-between;align-items:center;padding:6px 6px 6px 16px;border-radius:99px;font-size:13px}.link button{display:flex;gap:6px;align-items:center;padding:8px 14px;border-radius:99px;font-weight:800;font-size:13px}
.code p{margin:6px 0 14px;line-height:1.45}.field{display:flex;gap:8px}.field input{flex:1;min-width:0;padding:14px 18px;border-radius:99px;font:inherit;font-size:14px}.field button{padding:0 22px;border-radius:99px;font-weight:800}
.cta{width:100%;padding:18px;font-size:17px;margin-top:6px}.skip{display:block;text-align:center;margin:16px 0 22px;font-size:14px;font-weight:700;text-decoration:underline;opacity:.75}
nav{display:flex;justify-content:space-around;padding:10px 0 22px}nav a{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:700;opacity:.55}nav a span{width:44px;height:44px;display:grid;place-items:center;border-radius:16px}nav a.on{opacity:1}`;
const V={
// A: brand plum hero + warm cream + coral & sunflower
a:{logo:'#5A1827',css:`:root{--hf:'Fraunces',serif;--bg:#FFF4EC;--ink:#3A0F19;--line:#5A182722;--facebd:#5A1827;--logobg:#FFD6C2}
.hero{background:radial-gradient(circle at 90% 0%,#8C2A3E 0,transparent 55%),#5A1827;color:#FFEDE3;border-radius:0 0 36px 36px}
.hero:after{content:'';position:absolute;right:-40px;bottom:-60px;width:200px;height:200px;border-radius:50%;background:#FF7A59;opacity:.25;filter:blur(10px)}
.pill{background:#FFC94A;color:#5A1827}.eyebrow{color:#FFB199}h1 em{color:#FF8A6B}h1 svg{color:#FF8A6B}
.card{background:#fff;box-shadow:0 1px 0 #5A182711,0 14px 30px -14px #5A182740}.today{background:#FFF0C2;color:#7A4B00}.live{color:#5A1827}
.big{color:#5A1827}.bar{background:#FBE3D8}.fill{background:linear-gradient(90deg,#FF7A59,#E8436B)}.ticket{background:#5A1827;color:#FFEDE3}
.ring .bg{stroke:#FBE3D8}.ring .fg{stroke:#FF7A59}.done .dot{background:#5A1827;color:#fff}.todo .dot{background:#FFE7DE;color:#E8436B}
.btn.sm{background:#FF7A59;color:#fff;box-shadow:0 4px 0 #C94E33}.eyebrow.dark{color:#E8436B}.sec-head a{color:#E8436B}
.promo{background:linear-gradient(150deg,#FF8A5C,#E8436B 70%);color:#fff;box-shadow:0 18px 30px -14px #E8436B99}.tag{color:#FFE6A8}.count{background:#fff;color:#5A1827}
.timer code{background:#5A1827;color:#FFC94A}.invite{background:#FFF4EC;color:#5A1827;box-shadow:0 4px 0 #5A1827}.link{background:#ffffff2e;border:1.5px solid #ffffff55}.link code{color:#fff}.link button{background:#5A1827;color:#fff}
.code{background:#FFE9A8}.field input{border:1.5px solid #5A182733;background:#fff}.field button{background:#5A1827;color:#FFC94A}
.cta{background:#5A1827;color:#fff;box-shadow:0 6px 0 #FF7A59}nav{background:#fff;border-top:1px solid #5A182715}nav a.on span{background:#5A1827;color:#FFC94A}`},
// B: light & airy, brand as ink, lilac + mint
b:{logo:'#fff',css:`:root{--hf:'Bricolage Grotesque',sans-serif;--bg:#F7F1FB;--ink:#2B0B13;--line:#5A182720;--facebd:#F7F1FB;--logobg:#5A1827}
.hero{background:linear-gradient(160deg,#FCE7F0 0%,#EDE3FF 60%,#F7F1FB 100%);padding-bottom:66px}
.hero:before{content:'';position:absolute;right:-70px;top:-50px;width:170px;height:170px;border-radius:44px;transform:rotate(18deg);background:linear-gradient(135deg,#B892FF,#FF8FB8);opacity:.3}
.pill{background:#5A1827;color:#fff}.eyebrow{color:#8C3A55}h1{color:#5A1827}h1 em{color:#D63A79;font-style:normal;background:#FFD3E5;padding:0 8px;border-radius:12px}h1 svg{color:#D63A79}
.card{background:#fff;border:1.5px solid #5A18271A;box-shadow:0 20px 40px -24px #5A182755}.stat{background:linear-gradient(180deg,#fff 0,#fff 70%,#FFF5FA 100%)}
.today{background:#D9F7E8;color:#0E6B45}.live{color:#5A1827}.big{color:#5A1827}.bar{background:#EFE6FA}.fill{background:linear-gradient(90deg,#B892FF,#D63A79)}.ticket{background:#F3ECFF;color:#5A1827;border:1.5px dashed #B892FF}
.ring .bg{stroke:#EFE6FA}.ring .fg{stroke:#D63A79}.done .dot{background:#2EC48A;color:#fff}.todo .dot{background:#F3ECFF;color:#7B4DE0}.btn.sm{background:#5A1827;color:#fff}
.eyebrow.dark{color:#7B4DE0}.sec-head a{color:#D63A79}
.promo{background:#5A1827;color:#fff;background-image:radial-gradient(circle at 100% 0,#D63A7988 0,transparent 50%),radial-gradient(circle at 0 100%,#7B4DE066 0,transparent 50%)}.tag{color:#FFB3D1}.money{color:#FFD3E5}.count{background:#ffffff1f;border:1.5px solid #ffffff44;color:#fff}
.timer code{background:#D63A79;color:#fff}.invite{background:#fff;color:#5A1827}.link{background:#ffffff14;border:1.5px solid #ffffff33}.link code{color:#fff}.link button{background:#D63A79;color:#fff}
.code{background:#E7FBF1;border-color:#2EC48A55}.field input{border:1.5px solid #5A182722;background:#fff}.field button{background:#2EC48A;color:#fff}
.cta{background:linear-gradient(90deg,#5A1827,#8E2547);color:#fff;box-shadow:0 14px 30px -12px #5A1827aa}nav{background:#fff;border-radius:26px 26px 0 0;box-shadow:0 -10px 30px -20px #5A182755}nav a{color:#5A1827}nav a.on span{background:#FFD3E5;color:#D63A79}`},
// C: dark plum night mode with pink + gold
c:{logo:'#5A1827',css:`:root{--hf:'Fraunces',serif;--bg:#1E070D;--ink:#FFEFF2;--line:#ffffff1c;--facebd:#2A0B13;--logobg:#FFB8C8}
body{background:radial-gradient(ellipse at 50% 0,#5A1827 0,#1E070D 60%)}
.hero:after{content:'';position:absolute;left:50%;top:-80px;width:340px;height:340px;transform:translateX(-50%);border-radius:50%;background:#FF4F8B;opacity:.18;filter:blur(60px)}
.pill{border:1.5px solid #FFC857;color:#FFC857}.eyebrow{color:#FF8FB1}h1 em{color:#FFC857}h1 svg{color:#FF4F8B}.sub{opacity:.8}
.card{background:#ffffff0d;border:1px solid #ffffff1a;backdrop-filter:blur(8px)}.stat{background:linear-gradient(160deg,#5A1827,#3A0E19);border-color:#FF8FB144}
.today{background:#FFC857;color:#3A0E19}.live{color:#FFB8C8}.big{color:#fff;background:linear-gradient(90deg,#fff,#FFB8C8);-webkit-background-clip:text;color:transparent}
.bar{background:#ffffff1a}.fill{background:linear-gradient(90deg,#FFC857,#FF4F8B);box-shadow:0 0 14px #FF4F8B}.ticket{background:#ffffff12;border:1px dashed #FFC85788}.ticket strong{color:#FFC857}
.ring .bg{stroke:#ffffff1a}.ring .fg{stroke:#FFC857}.done .dot{background:#FF4F8B;color:#fff}.todo .dot{background:#ffffff14;color:#FFC857}.btn.sm{background:#FFC857;color:#3A0E19}
.eyebrow.dark{color:#FFC857}.sec-head a{color:#FF8FB1}
.promo{background:linear-gradient(150deg,#FF4F8B,#C21E5C);color:#fff;border:0;box-shadow:0 20px 40px -16px #FF4F8Bb0}.tag{color:#FFE3A3}.count{background:#1E070D;color:#FFC857}
.timer code{background:#1E070D;color:#FFC857}.invite{background:#fff;color:#5A1827}.link{background:#00000033}.link code{color:#fff}.link button{background:#FFC857;color:#3A0E19}
.field input{border:1px solid #ffffff2a;background:#00000033;color:#fff}.field input::placeholder{color:#ffffff77}.field button{background:#FF4F8B;color:#fff}
.cta{background:#FFC857;color:#3A0E19;box-shadow:0 14px 34px -12px #FFC857aa}nav{background:#160509;border-top:1px solid #ffffff14}nav a.on span{background:#FF4F8B;color:#fff}`}};
(async()=>{const b=await chromium.launch();for(const k of Object.keys(V)){const html=`<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${base}${V[k].css}</style></head><body>${body(V[k])}</body></html>`;fs.writeFileSync(`variant-${k}.html`,html);
const p=await b.newPage({viewport:{width:430,height:900},deviceScaleFactor:3});await p.goto('file://'+process.cwd()+`/variant-${k}.html`,{waitUntil:'networkidle'});await p.evaluate(async()=>{await Promise.all(['400','600','700','800'].map(w=>document.fonts.load(w+' 16px "Plus Jakarta Sans"')));await document.fonts.ready});await p.waitForTimeout(500);await p.screenshot({path:`dove-waitlist-${k}.png`,fullPage:true});}await b.close()})();
