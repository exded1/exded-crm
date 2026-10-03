const fs=require('fs');let s=fs.readFileSync('common.js','utf8');
const fams=['Plus+Jakarta+Sans:wght@400;500;600;700;800','Instrument+Serif:ital@0;1','Bricolage+Grotesque:wght@500;700;800','Fraunces:ital,wght@0,500;0,700;0,900;1,500;1,700','JetBrains+Mono:wght@500;700'];
s=s.replace(/exports\.fonts=`[^`]*`/,'exports.fonts=`'+fams.map(f=>`<link href="https://fonts.googleapis.com/css2?family=${f}&display=swap" rel="stylesheet">`).join('')+'`');fs.writeFileSync('common.js',s);
