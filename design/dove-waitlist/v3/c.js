const {I,grain,reset,fonts,faces}=require('./common');
module.exports=`<!doctype html><html><head><meta charset="utf-8">${fonts}<style>${reset}${grain}
:root{--plum:#5A1827;--night:#1C060C;--deep:#2C0A14;--gold:#F2C46D;--gold2:#FFE3A3;--rose:#FF5C8A;--txt:#FBEFF1;--mut:#E9C9D1aa;--grain:.09}
body{background:var(--night);color:var(--txt)}body:after{mix-blend-mode:overlay}
.f{font-family:'Fraunces',serif}
.hero{position:relative;height:500px;overflow:hidden}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 35%;filter:saturate(1.1) contrast(1.05)}
.hero:before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,#1C060C99 0,transparent 22%,transparent 35%,#5A1827cc 68%,#1C060C 100%),radial-gradient(80% 50% at 50% 100%,#FF5C8A44,transparent)}
.bar{position:absolute;z-index:3;left:20px;right:20px;top:18px;display:flex;justify-content:space-between;align-items:center}
.logo{display:flex;align-items:center;gap:9px;font-family:'Fraunces';font-weight:700;font-size:22px;font-style:italic}
.logo i{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--gold2),var(--gold));display:grid;place-items:center}
.chip{font-size:10px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;padding:9px 14px;border-radius:99px;border:1px solid #F2C46D88;color:var(--gold2);background:#1C060C66;backdrop-filter:blur(10px)}
.hin{position:absolute;z-index:2;left:22px;right:22px;bottom:30px;text-align:center}
.ey{display:inline-flex;gap:10px;align-items:center;font-size:10.5px;font-weight:800;letter-spacing:.26em;text-transform:uppercase;color:var(--gold)}.ey:before,.ey:after{content:'';width:22px;height:1px;background:currentColor}
h1{font-family:'Fraunces';font-weight:500;font-size:58px;line-height:.95;letter-spacing:-.03em;margin-top:12px}
h1 em{font-style:italic;font-weight:700;background:linear-gradient(90deg,var(--gold2),var(--gold),#FF9DB8);-webkit-background-clip:text;color:transparent}
.hin p{font-size:14.5px;color:var(--mut);margin-top:12px;line-height:1.5}
.sp{position:absolute;z-index:2;color:var(--gold)}.sp svg{width:100%}
main{padding:0 16px;position:relative;z-index:3;margin-top:-6px}
.glass{background:linear-gradient(160deg,#ffffff12,#ffffff05);border:1px solid #ffffff1c;border-radius:28px;padding:22px;box-shadow:inset 0 1px 0 #ffffff22,0 30px 50px -30px #000}
.stat{text-align:center;background:linear-gradient(180deg,#5A1827,#3A0E19);border-color:#F2C46D44;position:relative;overflow:hidden}
.stat:before{content:'';position:absolute;left:50%;top:-120px;width:300px;height:200px;transform:translateX(-50%);background:radial-gradient(#F2C46D33,transparent 70%)}
.row{display:flex;justify-content:space-between;align-items:center;position:relative}
.live{display:flex;gap:8px;align-items:center;font-size:10.5px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#FFC2D2}.live i{width:8px;height:8px;border-radius:50%;background:#3EE08F;box-shadow:0 0 10px #3EE08F}
.up{display:flex;gap:5px;align-items:center;font-size:12px;font-weight:800;color:var(--night);background:var(--gold);padding:6px 10px;border-radius:99px}
.num{font-family:'Fraunces';font-weight:900;font-size:86px;letter-spacing:-.04em;line-height:1;margin-top:18px;background:linear-gradient(180deg,#FFF3D6,var(--gold) 70%,#C98F2E);-webkit-background-clip:text;color:transparent;position:relative}
.stat .lab{font-size:14px;color:var(--mut);position:relative}
.goal{display:flex;justify-content:space-between;font-size:11px;margin-top:24px;color:var(--mut);font-weight:600}.goal b{color:var(--txt);letter-spacing:.14em;font-size:10px;text-transform:uppercase}
.track{height:10px;border-radius:9px;background:#00000055;margin-top:12px;position:relative;box-shadow:inset 0 1px 2px #000}
.fill{position:absolute;left:0;top:0;bottom:0;width:22.7%;border-radius:9px;background:linear-gradient(90deg,var(--rose),var(--gold));box-shadow:0 0 16px #FF5C8Aaa}
.ticks{display:flex;justify-content:space-between;font-size:10px;font-weight:700;color:#E9C9D177;margin-top:8px}
.foot{display:flex;align-items:center;gap:12px;margin-top:20px;padding-top:18px;border-top:1px dashed #F2C46D44;text-align:left}
.av{display:flex}.av span{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:10px;font-weight:800;color:#fff;margin-right:-8px;border:2px solid #4A1220}
.foot p{flex:1;font-size:12px;color:var(--mut);line-height:1.4;padding-left:6px}.foot p b{color:var(--txt)}
.foot strong{font-family:'Fraunces';font-style:italic;font-size:20px;color:var(--gold2)}
.sec{margin-top:14px}
h2{font-family:'Fraunces';font-weight:500;font-size:28px;letter-spacing:-.02em;line-height:1.05}h2 em{font-style:italic;color:var(--gold)}
.tl{margin-top:18px;position:relative}
.tl:before{content:'';position:absolute;left:17px;top:18px;bottom:30px;width:2px;background:linear-gradient(var(--rose),var(--rose) 60%,#ffffff22 60%)}
.it{display:flex;gap:14px;align-items:center;padding:10px 0;position:relative}
.it .d{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;flex:none;background:var(--rose);color:#fff;box-shadow:0 0 0 5px #FF5C8A22}
.it b{font-size:15px;font-weight:700}.it small{display:block;font-size:12px;color:var(--mut);margin-top:2px}.it div{flex:1}
.it.now .d{background:var(--night);border:1.5px solid var(--gold);color:var(--gold);box-shadow:0 0 18px #F2C46D55}
.it .done{font-size:11px;font-weight:700;color:#3EE08F}
.vb{background:var(--gold);color:var(--night);font-weight:800;font-size:13px;padding:11px 16px;border-radius:99px;box-shadow:0 8px 20px -6px #F2C46Daa}
.pct{font-family:'Fraunces';font-style:italic;font-size:22px;color:var(--gold)}
.sh{margin:34px 4px 14px;display:flex;justify-content:space-between;align-items:flex-end}
.sh small{font-size:10.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--rose);display:block;margin-bottom:6px}
.sh a{font-size:13px;font-weight:700;color:var(--gold2);white-space:nowrap}
.cardx{position:relative;border-radius:26px;padding:22px;overflow:hidden;color:#3A1A06;
 background:radial-gradient(120% 80% at 0 0,#FFF3CF 0,transparent 50%),linear-gradient(125deg,#E9B65A 0,#FFE6A6 35%,#D99E3F 60%,#FFE1A0 85%,#C88B2E 100%);box-shadow:0 30px 60px -24px #F2C46D88,inset 0 1px 0 #fff}
.cardx:before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,#ffffff10 0 1px,transparent 1px 4px)}
.cardx>*{position:relative}
.cx-top{display:flex;justify-content:space-between;align-items:center}
.cx-top span{font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase}
.chipx{width:44px;height:34px;border-radius:8px;background:linear-gradient(135deg,#B9873A,#F7D58B,#A9762C);box-shadow:inset 0 0 0 1px #7A5218;position:relative}
.chipx:before{content:'';position:absolute;inset:8px 0;border-top:1px solid #7A521888;border-bottom:1px solid #7A521888}
.amt{font-family:'Fraunces';font-weight:900;font-size:110px;letter-spacing:-.05em;line-height:.9;margin-top:14px;color:var(--plum);text-shadow:0 1px 0 #fff8}
.cardx h3{font-family:'Fraunces';font-style:italic;font-weight:700;font-size:24px;color:var(--plum)}
.cardx .ds{font-size:13.5px;font-weight:600;color:#5A1827bb}
.cx-b{display:flex;justify-content:space-between;align-items:flex-end;margin-top:18px;font-family:'JetBrains Mono',monospace}
.cx-b small{display:block;font-size:8.5px;letter-spacing:.2em;opacity:.6;margin-bottom:3px;font-family:'Plus Jakarta Sans';font-weight:800}
.cx-b b{font-size:14px;letter-spacing:.06em;color:var(--plum)}
.prog{display:flex;gap:4px;margin-top:16px}.prog i{flex:1;height:5px;border-radius:9px;background:#5A182733}
.act{margin-top:12px}
.inv{width:100%;display:flex;justify-content:center;align-items:center;gap:10px;font-weight:800;font-size:16px;padding:18px;border-radius:99px;background:linear-gradient(90deg,var(--rose),#E23A6E);color:#fff;box-shadow:0 18px 30px -14px #FF5C8A}
.link{display:flex;justify-content:space-between;align-items:center;margin-top:10px;border:1px solid #ffffff1f;border-radius:99px;padding:6px 6px 6px 18px;background:#ffffff08}.link code{font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--mut)}
.link button{display:flex;gap:6px;align-items:center;background:#ffffff14;color:var(--gold2);font-weight:800;font-size:12.5px;padding:10px 14px;border-radius:99px}
.fine{font-size:11px;color:#E9C9D188;margin:12px 6px 0;line-height:1.45;text-align:center}
.timer{display:flex;justify-content:center;gap:8px;align-items:center;font-size:12px;color:var(--mut);margin-top:14px}.timer code{font-family:'JetBrains Mono',monospace;color:var(--gold);font-weight:700;border:1px solid #F2C46D55;padding:5px 10px;border-radius:9px}
.code p{font-size:13.5px;color:var(--mut);margin:8px 0 16px;line-height:1.5}
.field{display:flex;gap:8px}.field span{flex:1;padding:15px 18px;border-radius:99px;background:#00000040;border:1px solid #ffffff1c;font-family:'JetBrains Mono',monospace;font-size:13px;color:#ffffff55;letter-spacing:.1em}
.field button{border:1px solid var(--gold);color:var(--gold2);font-weight:800;padding:0 22px;border-radius:99px}
.cta{margin-top:20px;width:100%;display:flex;justify-content:center;align-items:center;gap:10px;padding:20px;border-radius:99px;font-weight:800;font-size:17px;color:var(--night);background:linear-gradient(180deg,var(--gold2),var(--gold));box-shadow:0 0 0 6px #F2C46D1a,0 24px 40px -14px #F2C46D99}
.skip{display:block;text-align:center;margin:18px 0 22px;font-size:13.5px;font-weight:700;color:var(--mut);text-decoration:underline;text-underline-offset:3px}
nav{margin:0 16px 26px;display:flex;justify-content:space-around;padding:8px;border-radius:26px;background:#ffffff0d;border:1px solid #ffffff1a}
nav a{display:flex;flex-direction:column;align-items:center;gap:3px;font-size:10.5px;font-weight:700;color:#E9C9D188;padding:8px 18px;border-radius:18px}
nav a.on{background:var(--plum);color:var(--gold2);box-shadow:inset 0 1px 0 #ffffff22}
</style></head><body>
<header class="hero"><img src="couple.jpg">
 <div class="bar"><div class="logo"><i>${I.dove('#5A1827')}</i>Dove</div><span class="chip">Early access</span></div>
 <span class="sp" style="width:18px;left:40px;top:300px">${I.spark}</span><span class="sp" style="width:12px;right:50px;top:340px">${I.spark}</span><span class="sp" style="width:9px;right:90px;top:290px;opacity:.7">${I.spark}</span>
 <div class="hin"><span class="ey">Spot confirmed</span><h1>You're on<br>the <em>list.</em></h1><p>Your spot is saved. Help bring Dove to your city.</p></div>
</header>
<main>
 <section class="glass stat">
  <div class="row"><span class="live"><i></i>Live waitlist</span><span class="up">${I.up}+124 today</span></div>
  <div class="num">113,581</div><div class="lab">people waiting for Dove</div>
  <div class="goal"><b>Community goal</b><span>Growing toward 500K</span></div>
  <div class="track"><div class="fill"></div></div><div class="ticks"><span>0</span><span>125K</span><span>250K</span><span>375K</span><span>500K</span></div>
  <div class="foot"><div class="av">${faces([['M','#FF5C8A'],['D','#B5476A'],['L','#C98F2E'],['S','#7A3B8F']])}</div><p>Join <b>386,419</b> more to reach the 500K goal</p><strong>№113,581</strong></div>
 </section>
 <section class="glass sec">
  <div class="row"><h2>Launch <em>checklist</em></h2><span class="pct">2/3</span></div>
  <div class="tl">
   <div class="it"><span class="d">${I.check}</span><div><b>Account created</b></div><span class="done">Done</span></div>
   <div class="it"><span class="d">${I.check}</span><div><b>Profile finished</b></div><span class="done">Done</span></div>
   <div class="it now"><span class="d">${I.shield}</span><div><b>Get verified</b><small>Unlock all features</small></div><button class="vb">Verify now</button></div>
  </div>
 </section>
 <div class="sh"><div><small>Waitlist reward · before launch</small><h2>Earn before <em>Dove</em> launches</h2></div><a>View all →</a></div>
 <section class="cardx">
  <div class="cx-top"><span>Featured challenge</span><div class="chipx"></div></div>
  <div class="amt">$100</div><h3>Referral Challenge</h3><p class="ds">Invite 10 friends in 24 hours</p>
  <div class="prog">${'<i></i>'.repeat(10)}</div>
  <div class="cx-b"><div><small>INVITED</small><b>00 / 10</b></div><div><small>WINDOW</small><b>24:00:00</b></div><div style="text-align:right"><small>MEMBER</small><b>EARLY·2026</b></div></div>
 </section>
 <div class="timer"><code>24:00:00</code>starts on your first referral</div>
 <div class="act"><button class="inv">${I.share} Invite your people</button>
 <div class="link"><code>fly.dove-app.com/r/KBCQZSD</code><button>${I.copy} Copy</button></div>
 <p class="fine">Referral rewards are available during early access and end when Dove launches.</p></div>
 <section class="glass sec code"><h2>Have an <em>invite code?</em></h2><p>Enter a friend's code so they get credit when you get verified.</p><div class="field"><span>ENTER CODE</span><button>Apply</button></div></section>
 <button class="cta">Open the app ${I.arrow}</button><a class="skip">Skip for now</a>
</main>
<nav><a class="on">${I.hour}Waitlist</a><a>${I.gift}Earn</a><a>${I.user}Profile</a></nav>
</body></html>`;
