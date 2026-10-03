const {I,grain,reset,fonts,faces}=require('./common');
module.exports=`<!doctype html><html><head><meta charset="utf-8">${fonts}<style>${reset}${grain}
:root{--plum:#5A1827;--pink:#FF3D7F;--blush:#FFE4EC;--bg:#FCF1F4;--lilac:#E9DDFF;--butter:#FFE070;--mint:#C9F3DF;--ink:#2B0A13;--grain:.05}
body{background:radial-gradient(70% 30% at 100% 0,#FFD0DF 0,transparent 70%),radial-gradient(60% 25% at 0 30%,#EDE1FF 0,transparent 70%),var(--bg);color:var(--ink)}
.d{font-family:'Bricolage Grotesque',sans-serif}
.wrap{padding:18px 16px 0}
.bar{display:flex;justify-content:space-between;align-items:center;padding:0 4px}
.logo{display:flex;align-items:center;gap:9px;font-family:'Bricolage Grotesque';font-weight:800;font-size:22px;color:var(--plum)}
.logo i{width:38px;height:38px;border-radius:12px;background:var(--plum);display:grid;place-items:center;transform:rotate(-6deg)}
.chip{font-size:11px;font-weight:800;letter-spacing:.06em;padding:9px 14px;border-radius:99px;background:var(--ink);color:#fff;display:flex;gap:7px;align-items:center}.chip i{width:7px;height:7px;border-radius:50%;background:var(--pink);box-shadow:0 0 0 3px #FF3D7F44}
.hero{margin-top:16px;position:relative;height:330px;border-radius:34px;overflow:hidden;background:var(--plum);box-shadow:0 30px 50px -30px #5A1827}
.hero img{position:absolute;right:-30px;top:0;height:100%;width:76%;object-fit:cover;object-position:50% 40%;filter:saturate(1.2)}
.hero:before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#5A1827 32%,#5A1827cc 48%,transparent 75%),linear-gradient(0deg,#5A1827 0,transparent 45%)}
.hero .in{position:absolute;z-index:2;left:22px;bottom:22px;right:22px;color:#fff}
.tag{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;background:var(--pink);padding:6px 10px;border-radius:8px;transform:rotate(-3deg)}
h1{font-family:'Bricolage Grotesque';font-weight:800;font-size:50px;line-height:.92;letter-spacing:-.04em;margin-top:14px}
h1 span{color:var(--pink);font-style:italic}
.hero p{font-size:14px;line-height:1.5;color:#FFDCE6;margin-top:10px;max-width:220px}
.stk{position:absolute;z-index:3;right:16px;top:16px;background:var(--butter);color:var(--plum);font-weight:800;font-size:12px;padding:9px 13px;border-radius:14px;transform:rotate(6deg);box-shadow:0 10px 20px -8px #0006;display:flex;gap:6px;align-items:center}.stk svg{width:13px;color:var(--pink)}
.bento{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
.t{border-radius:28px;padding:18px;position:relative;overflow:hidden}
.wide{grid-column:span 2}
.stat{background:var(--pink);color:#fff;box-shadow:0 24px 40px -24px #FF3D7F}
.stat:after{content:'';position:absolute;right:-40px;bottom:-60px;width:200px;height:200px;border-radius:50%;background:radial-gradient(#ffffff40,transparent 70%)}
.lbl{font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;display:flex;align-items:center;gap:7px}
.lbl i{width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 0 3px #ffffff55}
.num{font-family:'Bricolage Grotesque';font-weight:800;font-size:84px;line-height:.9;letter-spacing:-.05em;margin-top:12px}
.stat p{font-size:14px;font-weight:600;opacity:.9}
.track{height:12px;border-radius:9px;background:#ffffff40;margin-top:42px;position:relative}
.fill{position:absolute;left:0;top:0;bottom:0;width:22.7%;border-radius:9px;background:#fff}
.tip{position:absolute;left:22.7%;top:-30px;transform:translateX(-50%);background:var(--ink);font-size:11px;font-weight:800;padding:4px 9px;border-radius:8px}
.ticks{display:flex;justify-content:space-between;font-size:10.5px;font-weight:700;opacity:.8;margin-top:8px}
.today{background:var(--butter)}.rank{background:var(--lilac)}
.t .k{font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#5A1827aa}
.t .v{font-family:'Bricolage Grotesque';font-weight:800;font-size:38px;letter-spacing:-.03em;color:var(--plum);margin-top:10px;line-height:1}
.t .s{font-size:12px;font-weight:600;color:#5A1827aa;margin-top:4px}
.today .ic{position:absolute;right:14px;top:14px;width:34px;height:34px;border-radius:50%;background:var(--plum);color:var(--butter);display:grid;place-items:center}
.av{display:flex;margin-top:12px}.av span{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-size:10px;font-weight:800;color:#fff;margin-right:-8px;border:2px solid var(--lilac)}
.check{background:#fff;box-shadow:0 20px 40px -30px #5A1827;border:1px solid #5A182712}
.ch{display:flex;justify-content:space-between;align-items:center}
.ch h2{font-family:'Bricolage Grotesque';font-weight:800;font-size:24px;letter-spacing:-.03em;color:var(--plum)}
.ring{position:relative;width:52px;height:52px}.ring svg{width:52px;height:52px;transform:rotate(-90deg)}.ring circle{fill:none;stroke-width:5}.ring .bg{stroke:#FFE4EC}.ring .fg{stroke:var(--pink);stroke-dasharray:100.5;stroke-dashoffset:33.5;stroke-linecap:round}.ring b{position:absolute;inset:0;display:grid;place-items:center;font-size:13px;font-weight:800;color:var(--plum)}
.steps{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}
.st{border-radius:18px;padding:12px;background:#F7F1F3;display:flex;gap:10px;align-items:center;font-weight:700;font-size:13px;color:var(--plum)}
.st i{width:26px;height:26px;border-radius:50%;background:var(--plum);color:#fff;display:grid;place-items:center;flex:none}
.st.now{grid-column:span 2;background:linear-gradient(100deg,#FFE4EC,#F0E6FF);padding:14px}
.st.now i{background:#fff;color:var(--pink);width:38px;height:38px;border-radius:14px}
.st.now div{flex:1}.st.now small{display:block;font-weight:500;font-size:12px;color:#5A1827aa;margin-top:2px}
.st.now button{background:var(--plum);color:#fff;font-weight:800;font-size:13px;padding:11px 16px;border-radius:99px}
.shead{display:flex;justify-content:space-between;align-items:flex-end;margin:30px 4px 12px}
.shead small{font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--pink)}
.shead h2{font-family:'Bricolage Grotesque';font-weight:800;font-size:23px;letter-spacing:-.03em;color:var(--plum);margin-top:4px}
.shead a{white-space:nowrap;font-size:13px;font-weight:800;color:var(--plum);background:#fff;padding:8px 12px;border-radius:99px}
.rw{background:var(--plum);color:#fff;border-radius:32px;padding:22px;position:relative;overflow:hidden;box-shadow:0 30px 50px -26px #5A1827}
.rw:before{content:'';position:absolute;right:-80px;top:-80px;width:260px;height:260px;border-radius:50%;background:radial-gradient(#FF3D7F 0,transparent 65%);opacity:.7}
.rw>*{position:relative}
.rw .top{display:flex;justify-content:space-between;align-items:center}
.pill{font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;background:#ffffff1a;padding:7px 11px;border-radius:99px}
.pill.y{background:var(--butter);color:var(--plum);letter-spacing:.04em;font-size:12px}
.money{font-family:'Bricolage Grotesque';font-weight:800;font-size:132px;letter-spacing:-.06em;line-height:.85;margin-top:16px;background:linear-gradient(180deg,#fff 30%,#FFB3CC);-webkit-background-clip:text;color:transparent}
.rw h3{font-family:'Bricolage Grotesque';font-weight:800;font-size:24px;letter-spacing:-.02em;margin-top:8px}
.rw .ds{font-size:14px;color:#FFD3E0}
.slots{display:grid;grid-template-columns:repeat(10,1fr);gap:5px;margin-top:18px}
.slots i{aspect-ratio:1;border-radius:50%;border:1.5px dashed #ffffff55;display:grid;place-items:center;font-size:10px;font-style:normal;color:#ffffff66;font-weight:700}
.slots i:first-child{border:0;background:var(--pink);color:#fff}
.timer{display:flex;gap:10px;align-items:center;margin:16px 0;font-size:12px;color:#FFD3E0}
.timer code{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;background:#00000040;padding:6px 10px;border-radius:10px;color:var(--butter)}
.invite{width:100%;display:flex;gap:10px;align-items:center;justify-content:center;background:var(--pink);color:#fff;font-weight:800;font-size:16px;padding:17px;border-radius:20px;box-shadow:0 14px 30px -10px #FF3D7Fcc,inset 0 -3px 0 #0002}
.link{margin-top:10px;display:flex;justify-content:space-between;align-items:center;background:#ffffff12;border-radius:16px;padding:7px 7px 7px 14px}.link code{font-family:'JetBrains Mono',monospace;font-size:12.5px}
.link button{display:flex;gap:6px;align-items:center;background:#fff;color:var(--plum);font-weight:800;font-size:12.5px;padding:9px 13px;border-radius:11px}
.fine{font-size:11px;color:#FFD3E0aa;margin-top:12px;line-height:1.45}
.code{margin-top:12px;background:var(--mint);border-radius:28px;padding:22px}
.code h2{font-family:'Bricolage Grotesque';font-weight:800;font-size:24px;letter-spacing:-.03em;color:#0B4A33}
.code p{font-size:13.5px;line-height:1.5;color:#0B4A33bb;margin:6px 0 16px}
.field{display:flex;gap:8px}.field span{flex:1;background:#fff;border-radius:16px;padding:15px 16px;font-family:'JetBrains Mono',monospace;font-size:13px;color:#0B4A3366;letter-spacing:.08em}
.field button{background:#0B4A33;color:#fff;font-weight:800;padding:0 22px;border-radius:16px}
.cta{margin-top:18px;width:100%;display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(90deg,#5A1827,#A3234F,#FF3D7F);color:#fff;font-weight:800;font-size:17px;padding:20px;border-radius:24px;box-shadow:0 20px 40px -16px #A3234F}
.skip{display:block;text-align:center;margin:16px 0 20px;font-size:13.5px;font-weight:700;color:#5A1827aa;text-decoration:underline;text-underline-offset:3px}
nav{display:flex;justify-content:space-around;background:#fff;margin:0 -16px;padding:12px 10px 26px;border-radius:30px 30px 0 0;box-shadow:0 -10px 30px -20px #5A1827}
nav a{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:700;color:#5A182788}
nav a span{width:56px;height:34px;border-radius:99px;display:grid;place-items:center}
nav a.on{color:var(--plum)}nav a.on span{background:var(--blush);color:var(--pink)}
</style></head><body><div class="wrap">
<div class="bar"><div class="logo"><i>${I.dove('#FFE4EC')}</i>Dove</div><div class="chip"><i></i>Early access</div></div>
<section class="hero"><img src="couple.jpg"><div class="stk">${I.heart} Spot saved</div>
 <div class="in"><span class="tag">You're in</span><h1>You're on<br>the <span>list</span> ✦</h1><p>Your spot is saved. Help bring Dove to your city.</p></div></section>
<div class="bento">
 <div class="t stat wide"><div class="lbl"><i></i>Live waitlist</div><div class="num">113,581</div><p>people waiting for Dove</p>
  <div class="track"><div class="fill"></div><span class="tip">You</span></div><div class="ticks"><span>0</span><span>125K</span><span>250K</span><span>375K</span><span>500K goal</span></div></div>
 <div class="t today"><div class="ic">${I.up}</div><div class="k">Today</div><div class="v">+124</div><div class="s">new this morning</div></div>
 <div class="t rank"><div class="k">Your spot</div><div class="v">#113K</div><div class="av">${faces([['M','#FF3D7F'],['D','#5A1827'],['L','#9B6BFF'],['S','#E0A200']])}</div></div>
 <div class="t check wide"><div class="ch"><h2>Launch checklist</h2><div class="ring"><svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="16"/><circle class="fg" cx="20" cy="20" r="16"/></svg><b>2/3</b></div></div>
  <div class="steps"><div class="st"><i>${I.check}</i>Account created</div><div class="st"><i>${I.check}</i>Profile finished</div>
  <div class="st now"><i>${I.shield}</i><div>Get verified<small>Unlock all features</small></div><button>Verify now</button></div></div></div>
</div>
<div class="shead"><div><small>Waitlist reward · before launch</small><h2>Earn before Dove launches</h2></div><a>View all</a></div>
<section class="rw"><div class="top"><span class="pill">Featured challenge</span><span class="pill y">0 / 10 invited</span></div>
 <div class="money">$100</div><h3>Referral Challenge</h3><p class="ds">Invite 10 friends in 24 hours</p>
 <div class="slots"><i>+</i>${'<i></i>'.repeat(9)}</div>
 <div class="timer"><code>24:00:00</code>starts on your first referral</div>
 <button class="invite">${I.share} Invite your people</button>
 <div class="link"><code>fly.dove-app.com/r/KBCQZSD</code><button>${I.copy} Copy</button></div>
 <p class="fine">Referral rewards are available during early access and end when Dove launches.</p></section>
<section class="code"><h2>Have an invite code?</h2><p>Enter a friend's code so they get credit when you get verified.</p><div class="field"><span>ENTER CODE</span><button>Apply</button></div></section>
<button class="cta">Open the app ${I.arrow}</button><a class="skip">Skip for now</a>
<nav><a class="on"><span>${I.hour}</span>Waitlist</a><a><span>${I.gift}</span>Earn</a><a><span>${I.user}</span>Profile</a></nav>
</div></body></html>`;
