/* 一年级上册教学动画 批量生成器
 * 用法: node gen-build.js
 * 读取 gen-manifest.js 中的课程清单，按已验收的引擎模板产出单文件 HTML。
 */
const fs = require('fs');
const path = require('path');

const OUT = __dirname; // 输出到工作区根目录
const manifest = require('./gen-manifest.js');

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ---------- 引擎基础 CSS（来自已验收的天地人/比大小） ---------- */
const ENGINE_CSS = `
:root{--cream:#FFF6E6;--card:#FFFFFF;--ink:#3A3A4A;--soft:#FFF3DF;--orange:#FF9F45;--green:#6FCF7E;--blue:#5AA9E6;--py:#E8743B;--shadow:0 18px 40px rgba(255,159,69,.20);}
*{margin:0;box-sizing:border-box;}html,body{height:100%;}
body{font-family:'Noto Serif SC',serif;color:var(--ink);overflow:hidden;background:#FFE4BE;}
.viewport{position:fixed;inset:0;overflow:auto;display:flex;align-items:center;justify-content:center;-webkit-overflow-scrolling:touch;}
.stage{width:1920px;height:1080px;position:relative;transform-origin:center center;overflow:hidden;background:linear-gradient(160deg,#FFF9EF,#FFF0D6);border-radius:48px;box-shadow:0 30px 80px rgba(180,120,40,.28);}
.bg{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;}
.float{position:absolute;opacity:.4;animation:drift 9s ease-in-out infinite;}
@keyframes drift{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-30px) rotate(10deg)}}
.slide{position:absolute;inset:0;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .45s ease;z-index:1;}
.slide.active{opacity:1;visibility:visible;pointer-events:auto;}
.r{opacity:0;transform:translateY(46px);}
.slide.active .r{animation:rise .6s cubic-bezier(.2,.8,.3,1.1) both;animation-delay:calc(var(--i,0)*.12s);}
@keyframes rise{to{opacity:1;transform:translateY(0);}}
.tag{position:absolute;top:60px;left:80px;font-family:'Nunito',sans-serif;font-weight:800;font-size:30px;color:#B07A36;background:var(--soft);padding:10px 26px;border-radius:30px;letter-spacing:1px;z-index:2;}
.title{position:absolute;top:150px;left:0;right:0;text-align:center;font-size:120px;font-weight:900;letter-spacing:24px;padding-left:24px;z-index:2;}
.sub{position:absolute;top:330px;left:0;right:0;text-align:center;font-family:'Nunito',sans-serif;font-weight:700;font-size:36px;color:#C79A5E;letter-spacing:2px;z-index:2;}
.hint{position:absolute;bottom:34px;left:0;right:0;text-align:center;font-family:'Nunito',sans-serif;font-weight:700;font-size:24px;color:#B58A55;z-index:2;}
.nav{position:absolute;bottom:30px;right:60px;display:flex;align-items:center;gap:18px;z-index:3;}
.navbtn{width:74px;height:74px;border-radius:50%;border:none;cursor:pointer;font-size:34px;color:#fff;background:var(--orange);box-shadow:0 10px 24px rgba(255,159,69,.45);transition:transform .15s;}
.navbtn:hover{transform:scale(1.07);}.navbtn:active{transform:scale(.93);}
.homebtn{height:74px;padding:0 30px;border-radius:37px;border:none;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:800;font-size:28px;color:#fff;background:#9B7BD4;box-shadow:0 10px 24px rgba(155,123,212,.45);display:flex;align-items:center;gap:8px;transition:transform .15s;}
.homebtn:hover{transform:scale(1.05);}.homebtn:active{transform:scale(.95);}
.dots{position:absolute;bottom:46px;left:0;right:0;display:flex;justify-content:center;gap:16px;z-index:3;}
.dot{width:16px;height:16px;border-radius:50%;background:#E7C79A;cursor:pointer;transition:transform .2s,background .2s;}
.dot.on{background:var(--orange);transform:scale(1.35);}
.counter{position:absolute;bottom:34px;left:60px;font-family:'Nunito',sans-serif;font-weight:800;font-size:26px;color:#B58A55;z-index:3;}
.speaker{width:80px;height:80px;border-radius:50%;border:none;cursor:pointer;background:var(--blue);color:#fff;font-size:38px;box-shadow:0 10px 24px rgba(90,169,230,.5);display:flex;align-items:center;justify-content:center;transition:transform .15s;}
.speaker:hover{transform:scale(1.08);}.speaker:active{transform:scale(.94);}
body.editing .editable{outline:2px dashed var(--blue);outline-offset:4px;cursor:text;}
.voicebar{position:absolute;top:58px;right:60px;z-index:4;display:flex;align-items:center;gap:10px;background:var(--soft);padding:8px 16px;border-radius:22px;font-family:'Nunito',sans-serif;font-weight:800;font-size:22px;color:#B07A36;box-shadow:0 8px 18px rgba(255,159,69,.18);}
.voicebar select{font-family:'Nunito',sans-serif;font-weight:700;font-size:18px;border:none;background:#fff;border-radius:12px;padding:6px 10px;color:var(--ink);cursor:pointer;max-width:240px;}
.voicebar input[type=range]{width:110px;cursor:pointer;}
`;

/* ---------- 各类动画 CSS ---------- */
const KIND_CSS = `
/* 汉字 BC 混搭：活字做动作 + 一闪变身后代表物 + ✨ */
.cards{position:absolute;top:310px;left:0;right:0;bottom:120px;display:grid;grid-template-columns:repeat(4,200px);grid-auto-rows:200px;gap:18px 22px;justify-content:center;align-content:center;z-index:2;padding:0 60px;}
.card{width:200px;height:200px;background:var(--card);border-radius:26px;box-shadow:var(--shadow);border:5px solid #FFE2BC;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;gap:2px;padding:6px;}
.glyphbox{position:relative;width:118px;height:118px;display:flex;align-items:center;justify-content:center;margin-bottom:0;}
.glyphwrap{font-size:90px;font-weight:900;color:var(--ink);line-height:1;position:relative;z-index:2;}
.obj{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:74px;opacity:0;z-index:1;}
.spark{position:absolute;font-size:30px;opacity:0;top:6px;right:8px;z-index:3;}
.slide.active .card .glyphwrap{animation:swapG 4.6s ease-in-out infinite;animation-delay:calc(var(--i,0)*.35s);}
.slide.active .card .obj{animation:swapM 4.6s ease-in-out infinite;animation-delay:calc(var(--i,0)*.35s);}
.slide.active .card .spark{animation:spark 4.6s ease-in-out infinite;animation-delay:calc(var(--i,0)*.35s);}
@keyframes swapG{0%,40%{opacity:1}55%,92%{opacity:0}100%{opacity:1}}
@keyframes swapM{0%,40%{opacity:0;transform:scale(.6)}55%,92%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.6)}}
@keyframes spark{0%,46%{opacity:0;transform:scale(.4)}54%{opacity:1;transform:scale(1.3)}66%,100%{opacity:0;transform:scale(.6)}}
.live-bob{animation:bob 2s ease-in-out infinite;}@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
.live-float{animation:floaty 3s ease-in-out infinite;}@keyframes floaty{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-12px) rotate(4deg)}}
.live-hop{animation:hop 1.6s ease-in-out infinite;}@keyframes hop{0%,100%{transform:translateY(0)}40%{transform:translateY(-24px)}60%{transform:translateY(-24px)}}
.live-spin{animation:spin 3.4s linear infinite;}@keyframes spin{to{transform:rotate(360deg)}}
.live-pulse{animation:pulse 1.8s ease-in-out infinite;}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
.card .cspeak{width:50px;height:50px;font-size:24px;margin-top:6px;box-shadow:0 6px 14px rgba(90,169,230,.45);}
/* 组词卡 */
.words{position:absolute;top:380px;left:0;right:0;display:flex;justify-content:center;gap:54px;flex-wrap:wrap;z-index:2;padding:0 80px;}
.wcard{background:var(--card);border-radius:28px;box-shadow:var(--shadow);border:6px solid #FFE2BC;padding:22px 28px;min-width:210px;text-align:center;}
.wcard .wc{font-size:78px;font-weight:900;color:var(--py);}
.wcard .wl{margin-top:10px;font-size:32px;color:var(--ink);font-family:'Nunito';font-weight:700;}
/* 读一读 / 儿歌 */
.poem{position:absolute;top:400px;left:0;right:0;display:flex;flex-direction:column;align-items:center;gap:22px;z-index:2;}
.pline{font-size:62px;font-weight:700;color:var(--ink);letter-spacing:6px;}
/* 练一练 点揭晓 */
.qrow{position:absolute;top:430px;left:0;right:0;display:flex;justify-content:center;flex-wrap:wrap;gap:60px;z-index:2;}
.qmath{font-family:'Nunito',sans-serif;font-weight:900;font-size:92px;background:var(--card);border-radius:30px;box-shadow:var(--shadow);padding:22px 42px;border:6px solid #FFE2BC;cursor:pointer;display:flex;align-items:center;gap:16px;transition:transform .15s;position:relative;}
.qmath:hover{transform:translateY(-4px);}
.qmath .sign{color:var(--orange);opacity:0;transform:scale(.3);transition:.3s;font-size:64px;}
.qmath.show .sign{opacity:1;transform:scale(1);}
.qmath .fx{position:absolute;top:-28px;right:-18px;font-size:46px;opacity:0;}
.qmath.show .fx{animation:burst .7s ease forwards;}
@keyframes burst{0%{opacity:0;transform:scale(.2) rotate(0)}50%{opacity:1;transform:scale(1.3) rotate(20deg)}100%{opacity:0;transform:scale(1) rotate(0)}}
/* 数一数 / 实物篮 */
.compare{position:absolute;top:380px;left:0;right:0;display:flex;justify-content:center;gap:120px;z-index:2;}
.basket{display:flex;flex-direction:column;align-items:center;gap:14px;background:var(--card);border-radius:34px;box-shadow:var(--shadow);padding:28px 46px;border:6px solid #FFE2BC;}
.basket .cap{font-family:'Nunito',sans-serif;font-weight:900;font-size:42px;color:var(--py);}
.objrow{display:flex;gap:14px;justify-content:center;font-size:58px;flex-wrap:wrap;max-width:520px;}
.apple{display:inline-block;opacity:0;position:relative;}
.apple i{position:absolute;top:-16px;left:-12px;font-family:'Nunito',sans-serif;font-weight:900;font-size:24px;color:#fff;background:var(--orange);width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(255,159,69,.5);}
.slide.active .apple{animation:drop .5s cubic-bezier(.2,.9,.3,1.4) both;animation-delay:calc(.3s + var(--i,0)*.26s);}
@keyframes drop{0%{opacity:0;transform:translateY(-46px) scale(.4)}70%{opacity:1;transform:translateY(8px) scale(1.12)}100%{opacity:1;transform:translateY(0) scale(1)}}
.total{font-family:'Nunito',sans-serif;font-weight:900;font-size:40px;color:var(--py);margin-top:4px;}
.speak-count{margin-top:16px;font-family:'Nunito',sans-serif;font-weight:800;font-size:28px;color:#fff;background:var(--green);border:none;padding:14px 34px;border-radius:34px;cursor:pointer;box-shadow:0 10px 24px rgba(111,207,126,.45);transition:transform .15s;}
.speak-count:hover{transform:translateY(-3px);}.speak-count:active{transform:scale(.96);}
/* 配对演示：先数 → 一一配对 → 看谁多出来 → 写符号 */
.lead{position:absolute;top:150px;left:0;right:0;text-align:center;font-size:40px;font-weight:700;color:#C79A5E;z-index:2;}
.match{position:absolute;top:280px;left:50%;transform:translateX(-50%);width:760px;height:470px;z-index:2;}
.row{position:absolute;left:0;right:0;}
.row.top{top:0;}.row.bot{top:220px;}
.match .apple{position:absolute;width:80px;height:80px;font-size:74px;line-height:80px;text-align:center;}
.match.show-apples .apple{opacity:1;transform:translateY(0);}
.lines{position:absolute;top:0;left:0;width:760px;height:300px;pointer-events:none;overflow:visible;}
.lines line{stroke:var(--orange);stroke-width:7;stroke-linecap:round;stroke-dasharray:320;stroke-dashoffset:320;transition:stroke-dashoffset .5s;}
.match.show-lines .lines line{stroke-dashoffset:0;}
.match.show-lines .lines line:nth-child(2){transition-delay:.35s;}
.match.show-lines .lines line:nth-child(3){transition-delay:.7s;}
.match.show-lines .lines line:nth-child(4){transition-delay:1.05s;}
.apple.extra{transition:opacity .5s,transform .5s,box-shadow .3s;}
.match.show-extra .apple.extra{box-shadow:0 0 0 7px var(--green),0 0 30px rgba(111,207,126,.7);transform:translateY(0) scale(1.14);}
.plus{position:absolute;font-family:'Nunito',sans-serif;font-weight:900;font-size:32px;color:#fff;background:var(--green);padding:8px 18px;border-radius:24px;opacity:0;transition:opacity .4s,transform .4s;transform:translateY(-6px);}
.match.show-extra .plus{opacity:1;transform:translateY(0);}
.psym{position:absolute;top:340px;left:0;right:0;text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:128px;color:var(--orange);opacity:0;transform:scale(.4);transition:opacity .5s,transform .5s;}
.match.show-sym .psym{opacity:1;transform:scale(1);}
.pstep{position:absolute;top:430px;left:0;right:0;text-align:center;font-family:'Nunito',sans-serif;font-weight:700;font-size:28px;color:#B58A55;}
/* 认数字 1~5 */
.nums{position:absolute;top:380px;left:0;right:0;display:flex;justify-content:center;gap:44px;z-index:2;}
.numcol{display:flex;flex-direction:column;align-items:center;gap:12px;background:var(--card);border-radius:28px;box-shadow:var(--shadow);border:6px solid #FFE2BC;padding:22px 24px;min-width:170px;}
.numcol .nd{font-family:'Nunito';font-weight:900;font-size:92px;color:var(--py);}
.numcol .nrow{font-size:44px;display:flex;gap:6px;flex-wrap:wrap;justify-content:center;max-width:200px;}
.numcol .apple{opacity:0;}
.slide.active .numcol .apple{animation:drop .5s cubic-bezier(.2,.9,.3,1.4) both;animation-delay:calc(var(--i,0)*.18s);}
/* 第几：排队看位置 */
.ord{position:absolute;top:330px;left:0;right:0;display:flex;justify-content:center;gap:28px;z-index:2;padding:0 60px;}
.oitem{display:flex;flex-direction:column;align-items:center;gap:10px;opacity:0;transform:translateY(30px);transition:transform .3s,box-shadow .3s;}
.slide.active .oitem{animation:rise .6s cubic-bezier(.2,.8,.3,1.1) both;animation-delay:calc(var(--i,0)*.12s);}
.oemoji{font-size:92px;width:140px;height:140px;display:flex;align-items:center;justify-content:center;background:var(--card);border-radius:30px;box-shadow:var(--shadow);border:6px solid #FFE2BC;}
.olabel{font-family:'Nunito',sans-serif;font-weight:900;font-size:34px;color:var(--py);}
.oitem.hi .oemoji{box-shadow:0 0 0 8px var(--green),0 0 30px rgba(111,207,126,.6);transform:scale(1.08);}
.oitem.hi .olabel{color:var(--green);}
.oq{position:absolute;top:650px;left:0;right:0;text-align:center;font-family:'Nunito',sans-serif;font-weight:800;font-size:40px;color:var(--ink);z-index:2;}
.oans{position:absolute;top:726px;left:0;right:0;text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:44px;color:var(--green);z-index:2;opacity:0;transform:translateY(10px);transition:opacity .3s,transform .3s;pointer-events:none;}
.oans.show{opacity:1;transform:none;pointer-events:auto;}
.ord-go{margin-top:14px;font-family:'Nunito',sans-serif;font-weight:800;font-size:26px;color:#fff;background:var(--blue);border:none;padding:12px 30px;border-radius:30px;cursor:pointer;box-shadow:0 10px 24px rgba(90,169,230,.45);transition:transform .15s;display:inline-flex;align-items:center;gap:8px;position:relative;z-index:3;}
.ord-go:hover{transform:translateY(-3px);}.ord-go:active{transform:scale(.96);}
/* 分与合 */
.split{position:absolute;top:380px;left:0;right:0;display:flex;justify-content:center;gap:64px;flex-wrap:wrap;z-index:2;padding:0 60px;}
.scombo{display:flex;flex-direction:column;align-items:center;gap:4px;background:var(--card);border-radius:28px;box-shadow:var(--shadow);border:6px solid #FFE2BC;padding:18px 26px;}
.stop{font-family:'Nunito',sans-serif;font-weight:900;font-size:92px;color:var(--py);line-height:1;}
.smid{width:0;height:26px;border-left:5px solid var(--orange);}
.sbot{display:flex;gap:30px;}
.spart{font-family:'Nunito',sans-serif;font-weight:900;font-size:72px;color:var(--ink);}
/* 加法 / 减法 */
.opwrap{position:absolute;top:400px;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;z-index:2;padding:0 60px;}
.ogroup{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:520px;font-size:58px;}
.ogroup .apple{position:relative;opacity:0;}
.slide.active .ogroup .apple{animation:drop .5s cubic-bezier(.2,.9,.3,1.4) both;animation-delay:calc(var(--i,0)*.18s);}
.op{font-family:'Nunito',sans-serif;font-weight:900;font-size:78px;color:var(--py);}
.ogroup .apple.gone{opacity:.28;filter:grayscale(1);transform:translateY(-8px);}
.ogroup .apple.keep{box-shadow:0 0 0 7px var(--green),0 0 26px rgba(111,207,126,.6);border-radius:50%;}
/* -- 凑十法 tenplus -- */
.tenplus .tp-wrap{display:flex;align-items:center;justify-content:center;gap:40px;margin-top:40px;}
.tenplus .tp-big,.tenplus .tp-small{text-align:center;}
.tenplus .tp-big span,.tenplus .tp-small span{font-size:60px;display:inline-block;}
.tenplus .tp-op{font-family:'Nunito',sans-serif;font-weight:900;font-size:64px;color:var(--py);}
.tenplus .tp-small .tp-need{display:inline-flex;gap:4px;background:rgba(111,207,126,.25);border-radius:16px;padding:4px 14px;}
.tenplus .tp-small .tp-rest{display:inline-flex;gap:4px;opacity:.45;}
.tenplus .tp-arrow{font-size:36px;color:var(--py);}
.tenplus .tp-step{font-family:'Nunito',sans-serif;font-weight:800;font-size:36px;margin-top:14px;text-align:center;color:var(--ink);}
.tenplus .tp-answer{font-family:'Nunito',sans-serif;font-weight:900;font-size:72px;text-align:center;color:var(--green);margin-top:16px;opacity:0;transform:translateY(12px);transition:opacity .4s,transform .4s;}
.slide.active .tenplus .tp-answer{opacity:1;transform:none;}
/* -- 连加连减 chain -- */
.chain .ch-row{display:flex;align-items:center;justify-content:center;gap:18px;margin:26px 0;}
.chain .ch-group{display:flex;gap:8px;font-size:64px;}
.chain .ch-group span{display:inline-block;}
.chain .ch-op{font-family:'Nunito',sans-serif;font-weight:900;font-size:64px;color:var(--py);margin:0 4px;}
.chain .ch-total{font-family:'Nunito',sans-serif;font-weight:900;font-size:56px;color:var(--ink);margin-top:10px;}
.chain .ch-total span{color:var(--green);}
/* -- 钟表 clock -- */
.clock-face{width:360px;height:360px;margin:10px auto 0;}
.cface{width:100%;height:100%;}
.clock-label{font-family:'Nunito',sans-serif;font-weight:800;font-size:40px;text-align:center;color:var(--ink);margin-top:16px;}
/* -- 拼音 -- */
.pygrid{position:absolute;top:330px;left:0;right:0;display:grid;grid-template-columns:repeat(3,260px);gap:20px 30px;justify-content:center;z-index:2;padding:0 40px;}
.pycard{background:var(--card);border-radius:28px;box-shadow:var(--shadow);border:5px solid #c3dafe;padding:18px 20px;text-align:center;}
.pycard .pylead{font-family:'Nunito',sans-serif;font-weight:900;font-size:56px;color:var(--blue);margin-bottom:6px;}
.pycard .pytones{font-family:'Nunito',sans-serif;font-weight:800;font-size:44px;color:var(--py);margin:6px 0;}
.pycard .pyeg{font-family:'Noto Serif SC',serif;font-weight:900;font-size:52px;color:var(--ink);}
.pycard .pyspk{width:52px;height:52px;font-size:22px;margin-top:8px;}
`;

const REDUCED = `
@media (prefers-reduced-motion:reduce){
.slide{transition:none;}
.slide.active .r{animation:none;opacity:1;transform:none;}
.apple{opacity:1;transform:none;}
.card .glyphwrap{animation:none;opacity:1;}
.card .obj,.card .spark{opacity:0;animation:none;}
.match .lines line{stroke-dashoffset:0;}
.match .apple.extra{box-shadow:0 0 0 7px var(--green),0 0 30px rgba(111,207,126,.7);}
.match .plus{opacity:1;}
.match .psym{opacity:1;transform:none;}
.float{animation:none;}
.qmath .sign{opacity:1;transform:none;}
.oitem{opacity:1;transform:none;}
.ogroup .apple{opacity:1;transform:none;}
.ogroup .apple.gone{opacity:.28;}
.oans{opacity:1;}
.tenplus .tp-answer{opacity:1;transform:none;}
}
`;

/* ---------- 各 slide 构造 ---------- */
function coverSlide(s, L) {
  return `<section class="slide" data-name="封面">
    <div class="tag r" style="--i:0">${esc(L.tag)}</div>
    <div class="title r" style="--i:1">${esc(L.title)}</div>
    <div class="sub r" style="--i:2">${esc(L.sub || '')}</div>
    <div class="hint r" style="--i:3">按 → 或空格翻页</div>
  </section>`;
}

function recognizeSlide(s) {
  const cards = s.cards.map((c, i) => `
    <div class="card">
      <div class="glyphbox">
        <div class="glyphwrap"><div class="glyph ${c.m || 'live-bob'}">${esc(c.c)}</div></div>
        <div class="obj">${esc(c.o || '')}</div>
      </div>
      <div class="spark">✨</div>
      <button class="speaker cspeak" data-han="${esc(c.han || c.c)}">🔊</button>
    </div>`).join('');
  return `<section class="slide" data-name="${esc(s.label || '认一认')}">
    <div class="tag r" style="--i:0">${esc(s.label || '认一认')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '认一认')}</div>
    <div class="cards">${cards}</div>
    <div class="hint">字会变身成对应的东西，点 🔊 听读音</div>
  </section>`;
}

function wordsSlide(s) {
  const items = s.items.map((it, i) => `
    <div class="wcard r" style="--i:${i}">
      <div class="wc">${esc(it.c)}</div>
      <div class="wl">${esc((it.w || []).join(' · '))}</div>
    </div>`).join('');
  return `<section class="slide" data-name="${esc(s.label || '组词')}">
    <div class="tag r" style="--i:0">${esc(s.label || '组词')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '给字找朋友')}</div>
    <div class="words">${items}</div>
    <div class="hint">一个字能组好几个词</div>
  </section>`;
}

function poemSlide(s) {
  const n=(s.lines||[]).length;
  const fs=n<=4?62:n<=6?48:n<=8?38:n<=10?32:26;
  const gap=n<=4?22:n<=6?16:n<=8?10:8;
  const titleFs=n<=6?80:n<=8?64:56;
  const top=n<=4?400:n<=6?340:n<=8?280:n<=10?250:220;
  const lines=s.lines.map(function(t,i){return'<div class="pline r" style="--i:'+i+';font-size:'+fs+'px">'+esc(t)+'</div>';}).join('');
  const seqAttr=s.lines&&s.lines.length?' data-seq=\''+JSON.stringify(s.lines).replace(/'/g,'&#39;')+'\'':'';
  const spkBtn=seqAttr?'<button class="speak-count" style="margin-top:28px"'+seqAttr+'>\u{1F50A} \u8bfb\u4e00\u8bfb</button>':'';
  return'<section class="slide" data-name="'+esc(s.label||'\u8bfb\u4e00\u8bfb')+'"><div class="tag r" style="--i:0">'+esc(s.label||'\u8bfb\u4e00\u8bfb')+'</div><div class="title r" style="--i:1;font-size:'+titleFs+'px">'+esc(s.head||'\u8bfb\u4e00\u8bfb')+'</div><div class="poem" style="top:'+top+'px;gap:'+gap+'px">'+lines+spkBtn+'</div><div class="hint">\u4e00\u53e5\u4e00\u53e5\u8ddf\u7740\u5ff5\uff0c\u70b9 \u{1F50A} \u542c</div></section>';
}

function practiceSlide(s) {
  const items = s.items.map((it, i) => `
    <div class="qmath r" style="--i:${i}" data-ans="${esc(it.a)}">${esc(it.q)}<span class="sign"></span>${it.fx ? '<span class="fx">' + esc(it.fx) + '</span>' : ''}</div>`).join('');
  return `<section class="slide" data-name="${esc(s.label || '练一练')}">
    <div class="tag r" style="--i:0">${esc(s.label || '练一练')}</div>
    <div class="title r" style="--i:1;font-size:80px">${esc(s.head || '点一点揭晓')}</div>
    <div class="qrow">${items}</div>
    <div class="hint">点一下每道题，看答案还撒星星</div>
  </section>`;
}

function summarySlide(s) {
  return `<section class="slide" data-name="小结">
    <div class="tag r" style="--i:0">小结</div>
    <div class="title r" style="--i:1;font-size:96px">${esc(s.head || '记住啦')}</div>
    <div class="sub r" style="--i:2">${esc(s.text || '')}</div>
    <div class="hint r" style="--i:3">按 ← 复习，或回目录选下一课</div>
  </section>`;
}

function applesRow(arr, extraFrom) {
  // arr: emoji 数组；extraFrom: 从第几个开始标记为 extra（从0计），null 表示无
  return arr.map((e, i) => {
    const ex = (extraFrom != null && i >= extraFrom) ? ' extra' : '';
    return `<span class="apple${ex}" style="left:${80 + i * 120}px">${esc(e)}</span>`;
  }).join('');
}

function compareSlide(s) {
  const top = s.top, bot = s.bot;
  const pairs = Math.min(top.length, bot.length);
  const lines = [];
  for (let i = 0; i < pairs; i++) {
    const x = 120 + i * 120;
    lines.push(`<line x1="${x}" y1="40" x2="${x}" y2="260"/>`);
  }
  const plusHtml = s.plus ? `<div class="plus" style="left:${80 + (s.extraFrom != null ? s.extraFrom : pairs) * 120 - 30}px;top:${s.extraSide === 'bot' ? 222 : -6}px" data-speak="${esc(s.plusSpeak || '')}">${esc(s.plus)}</div>` : '';
  const symHtml = `<div class="psym">${esc(s.sym)}</div>`;
  const stepHtml = `<div class="pstep">${esc(s.step || '')}</div>`;
  return `<section class="slide" data-name="${esc(s.label || '比一比')}">
    <div class="tag r" style="--i:0">${esc(s.tag || '比一比')}</div>
    <div class="lead r" style="--i:1">${esc(s.lead || '先数一数，再一一配对，看谁多出来')}</div>
    <div class="match">
      <div class="row top">${applesRow(top, s.extraSide === 'top' ? s.extraFrom : null)}</div>
      <div class="row bot">${applesRow(bot, s.extraSide === 'bot' ? s.extraFrom : null)}</div>
      <svg class="lines" viewBox="0 0 760 300">${lines.join('')}</svg>
      ${plusHtml}
      ${symHtml}
      ${stepHtml}
    </div>
    <button class="speaker" style="position:absolute;top:792px;left:50%;margin-left:-40px" data-han="${esc(s.speak || '')}">🔊</button>
    <div class="hint">${esc(s.hint || '看：多出来的，就是理由')}</div>
  </section>`;
}

function countSlide(s) {
  const baskets = s.baskets.map((b, bi) => {
    const apples = [];
    for (let i = 0; i < b.n; i++) {
      apples.push(`<span class="apple" style="--i:${i}">${esc(b.e)}<i>${i + 1}</i></span>`);
    }
    return `<div class="basket r" style="--i:${bi}">
      <div class="cap">${esc(b.cap || '')}</div>
      <div class="objrow">${apples.join('')}</div>
      <div class="total" data-target="${b.n}">共 0 个</div>
    </div>`;
  }).join('');
  const seqAttr = s.seq ? ` data-seq='${JSON.stringify(s.seq).replace(/'/g, '&#39;')}'` : '';
  return `<section class="slide" data-name="${esc(s.label || '数一数')}">
    <div class="tag r" style="--i:0">${esc(s.label || '数一数')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '一颗一颗数清楚')}</div>
    <div class="compare">${baskets}</div>
    ${s.seq ? `<div style="position:absolute;top:760px;left:0;right:0;display:flex;justify-content:center;z-index:2"><button class="speak-count"${seqAttr}>🔊 数一数</button></div>` : ''}
    <div class="hint">苹果一颗颗蹦出来，数到几就是几个</div>
  </section>`;
}

function numsSlide(s) {
  const cols = s.cols.map((c, i) => {
    let objs = '';
    for (let k = 0; k < c.n; k++) objs += `<span class="apple" style="--i:${k}">${esc(c.e)}</span>`;
    return `<div class="numcol r" style="--i:${i}">
      <div class="nd">${c.n}</div>
      <div class="nrow">${objs}</div>
    </div>`;
  }).join('');
  const seqAttr = s.seq ? ` data-seq='${JSON.stringify(s.seq).replace(/'/g, '&#39;')}'` : '';
  return `<section class="slide" data-name="${esc(s.label || '认数字')}">
    <div class="tag r" style="--i:0">${esc(s.label || '认数字')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '1 到 5')}</div>
    <div class="nums">${cols}</div>
    ${s.seq ? `<div style="position:absolute;top:760px;left:0;right:0;display:flex;justify-content:center;z-index:2"><button class="speak-count"${seqAttr}>🔊 念一念</button></div>` : ''}
    <div class="hint">数字几，就对应几个小图案</div>
  </section>`;
}

function groupEmojis(e, n, start) {
  let h = '';
  for (let i = 0; i < n; i++) h += `<span class="apple" style="--i:${start + i}">${esc(e)}</span>`;
  return h;
}

function ordinalSlide(s) {
  const items = s.objects.map((e, i) =>
    `<div class="oitem" style="--i:${i}"><div class="oemoji">${esc(e)}</div><div class="olabel">第${i + 1}</div></div>`
  ).join('');
  return `<section class="slide" data-name="${esc(s.label || '第几')}">
    <div class="tag r" style="--i:0">${esc(s.tag || '第几')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '第几')}</div>
    <div class="lead r" style="--i:2">${esc(s.lead || '排队时，第几表示位置')}</div>
    <div class="ord">${items}</div>
    <div class="oq">${esc(s.q || '')}</div>
    <div style="position:absolute;top:724px;left:0;right:0;display:flex;justify-content:center;z-index:2">
      <button class="ord-go" data-hi="${s.hi != null ? s.hi : ''}" data-han="${esc(s.ans || '')}">👀 看答案</button>
    </div>
    <div class="oans">${esc(s.ans || '')}</div>
    <div class="hint">点「看答案」，谁排第几就亮起来</div>
  </section>`;
}

function splitSlide(s) {
  const combos = (s.parts || []).map(function (p) {
    return `<div class="scombo"><div class="stop">${s.n}</div><div class="smid"></div><div class="sbot"><span class="spart">${p[0]}</span><span class="spart">${p[1]}</span></div></div>`;
  }).join('');
  const seqAttr = s.seq ? ` data-seq='${JSON.stringify(s.seq).replace(/'/g, '&#39;')}'` : '';
  return `<section class="slide" data-name="${esc(s.label || '分与合')}">
    <div class="tag r" style="--i:0">${esc(s.tag || '分与合')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || (s.n + ' 的分与合'))}</div>
    <div class="split">${combos}</div>
    ${s.seq ? `<div style="position:absolute;top:780px;left:0;right:0;display:flex;justify-content:center;z-index:2"><button class="speak-count"${seqAttr}>🔊 读一读</button></div>` : ''}
    <div class="hint">${esc(s.hint || '一个数分成两个数，合起来还是它')}</div>
  </section>`;
}

function addSlide(s) {
  const g1 = groupEmojis(s.e, s.a, 0);
  const g2 = groupEmojis(s.e, s.b, s.a);
  const g3 = groupEmojis(s.e, s.sum, 0);
  return `<section class="slide" data-name="${esc(s.label || '加法')}">
    <div class="tag r" style="--i:0">${esc(s.tag || '加法')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '加法')}</div>
    <div class="lead r" style="--i:2">${esc(s.lead || '把两部分合起来，用加法')}</div>
    <div class="opwrap"><div class="ogroup">${g1}</div><div class="op">+</div><div class="ogroup">${g2}</div><div class="op">=</div><div class="ogroup">${g3}</div></div>
    <div style="position:absolute;top:706px;left:0;right:0;display:flex;justify-content:center;z-index:2">
      <div class="qmath" data-ans="= ${s.sum}">${s.a} + ${s.b}<span class="sign"></span></div>
    </div>
    <div class="hint">${esc(s.hint || '点一点，看算式')}</div>
  </section>`;
}

function subSlide(s) {
  let apples = '';
  for (let i = 0; i < s.total; i++) {
    const cls = i < s.take ? 'gone' : 'keep';
    apples += `<span class="apple ${cls}" style="--i:${i}">${esc(s.e)}</span>`;
  }
  let goneGrp = '';
  for (let i = 0; i < s.take; i++) goneGrp += `<span class="apple gone" style="--i:${i}">${esc(s.e)}</span>`;
  return `<section class="slide" data-name="${esc(s.label || '减法')}">
    <div class="tag r" style="--i:0">${esc(s.tag || '减法')}</div>
    <div class="title r" style="--i:1;font-size:84px">${esc(s.head || '减法')}</div>
    <div class="lead r" style="--i:2">${esc(s.lead || '从总数里去掉一部分，用减法')}</div>
    <div class="opwrap"><div class="ogroup">${apples}</div><div class="op">−</div><div class="ogroup">${goneGrp}</div><div class="op">=</div><div class="ogroup">${groupEmojis(s.e, s.left, 0)}</div></div>
    <div style="position:absolute;top:706px;left:0;right:0;display:flex;justify-content:center;z-index:2">
      <div class="qmath" data-ans="= ${s.left}">${s.total} − ${s.take}<span class="sign"></span></div>
    </div>
    <div class="hint">${esc(s.hint || '点一点，看算式')}</div>
  </section>`;
}

function tenplusSlide(s){var a=s.big||9,b=s.small||4,c=10-a,d=b-c,em=s.e||'🍎',be='',ne='',re='';for(var i=0;i<a;i++)be+='<span>'+em+'</span>';for(var i=0;i<c;i++)ne+='<span>'+em+'</span>';for(var i=0;i<d;i++)re+='<span>'+em+'</span>';var spk=s.speak?'<button class="speaker" style="position:absolute;bottom:80px;left:50%;margin-left:-35px;z-index:3" data-han="'+a+'+'+b+'\u7b49\u4e8e'+(a+b)+'">\u{1F50A}</button>':'';return'<section class="slide tenplus" data-name="\u51d1\u5341\u6cd5"><div class="tag">'+esc(s.label||'\u51d1\u5341\u6cd5')+'</div><div class="title r" style="--i:1;font-size:68px">'+a+' + '+b+' = \uFF1F</div><div class="lead r" style="--i:2">'+esc(s.lead||'\u5148\u51d1\u6210 10\uFF0C\u518d\u7b97')+'</div><div class="tp-wrap r" style="--i:3"><div class="tp-big">'+be+'<div class="ch-total">'+a+'</div></div><div class="tp-op">+</div><div class="tp-small"><div class="tp-need">'+ne+'</div><div class="tp-rest">'+re+'</div><div class="ch-total"><span>'+c+'</span> + '+d+'</div></div></div><div class="tp-step r" style="--i:4">'+a+' + '+c+' = 10 \u2192 10 + '+d+' = <b style="color:var(--green)">'+(a+b)+'</b></div><div class="tp-answer" style="transition-delay:.6s">= '+(a+b)+'</div>'+spk+'</section>';}
function chainSlide(s){var em=s.e||'🍎',steps=s.steps||[4,2,1],ops=s.ops||['+','+'],g='<div class="ch-group">',r=steps[0];for(var i=0;i<steps[0];i++)g+='<span>'+em+'</span>';g+='</div>';for(var i=1;i<steps.length;i++){r=ops[i-1]==='+'?r+steps[i]:r-steps[i];g+='<div class="ch-op">'+ops[i-1]+'</div><div class="ch-group">';for(var j=0;j<steps[i];j++)g+='<span>'+em+'</span>';g+='</div><div class="ch-op">=</div><div class="ch-total">'+r+'</div>';}var spk=s.speak?'<button class="speaker" style="position:absolute;bottom:80px;left:50%;margin-left:-35px;z-index:3" data-han="'+(s.speakTxt||'')+'">\u{1F50A}</button>':'';return'<section class="slide chain" data-name="\u8fde\u52a0\u8fde\u51cf"><div class="tag">'+esc(s.label||'\u8fde\u52a0\u8fde\u51cf')+'</div><div class="title r" style="--i:1">'+esc(s.head||'\u8fde\u52a0\u8fde\u51cf')+'</div><div class="ch-row r" style="--i:2">'+g+'</div><div class="ch-total r" style="--i:3;text-align:center;margin-top:16px">\u6700\u540e\u8fd8\u5269 <span>'+r+'</span></div>'+spk+'</section>';}
function clockSlide(s){var h=s.hour||8,m=s.min||0,hd=(h%12)*30+m*0.5,md=m*6,ts=s.timeLabel||(h+':'+String(m).padStart(2,'0')),ns='';var nums=[12,1,2,3,4,5,6,7,8,9,10,11];for(var i=0;i<nums.length;i++){var n=nums[i],a=(n-3)*Math.PI/6,x=(200+160*Math.cos(a)).toFixed(1),y=(200+160*Math.sin(a)).toFixed(1);ns+='<text x="'+x+'" y="'+y+'" text-anchor="middle" dominant-baseline="central" font-family="Nunito,sans-serif" font-weight="800" font-size="36" fill="var(--ink)">'+n+'</text>';}var spk=s.speak?'<button class="speaker" style="position:absolute;bottom:66px;left:50%;margin-left:-35px;z-index:3" data-han="'+(s.speakTxt||'')+'">\u{1F50A}</button>':'';return'<section class="slide" data-name="\u949f\u8868"><div class="tag">'+esc(s.label||'\u8ba4\u8bc6\u949f\u8868')+'</div><div class="title r" style="--i:1">'+esc(s.head||'\u8ba4\u4e00\u8ba4')+'</div><div class="lead r" style="--i:2">'+esc(s.lead||'\u770b\u4e00\u770b\uff0c\u8fd9\u662f\u51e0\u70b9\uff1f')+'</div><div class="clock-face r" style="--i:3"><svg class="cface" viewBox="0 0 400 400"><circle cx="200" cy="200" r="190" fill="none" stroke="var(--ink)" stroke-width="8"/>'+ns+'<circle cx="200" cy="200" r="12" fill="var(--ink)"/><line x1="200" y1="200" x2="'+(200+100*Math.cos((hd-90)*Math.PI/180)).toFixed(1)+'" y2="'+(200+100*Math.sin((hd-90)*Math.PI/180)).toFixed(1)+'" stroke="var(--ink)" stroke-width="10" stroke-linecap="round"/><line x1="200" y1="200" x2="'+(200+140*Math.cos((md-90)*Math.PI/180)).toFixed(1)+'" y2="'+(200+140*Math.sin((md-90)*Math.PI/180)).toFixed(1)+'" stroke="var(--py)" stroke-width="6" stroke-linecap="round"/></svg></div><div class="clock-label r" style="--i:4">'+ts+'</div>'+spk+'</section>';}
function pinyinSlide(s){var cards='';s.items.forEach(function(it,i){var tones=it.tones?it.tones.join(' '):'';var py=(it.py||'').replace(/ü/g,'v');var mp3s;if(it.tones){mp3s=it.tones.map(function(t,idx){return py+(idx+1);});}else{mp3s=[py];}var mp3Attr=JSON.stringify(mp3s).replace(/'/g,'&#39;');var spk='<button class="speaker pyspk" data-mp3=\''+mp3Attr+'\'>🔊</button>';cards+='<div class="pycard r" style="--i:'+i+'"><div class="pylead">'+esc(it.py)+'</div>'+(tones?'<div class="pytones">'+esc(tones)+'</div>':'')+(it.spell?'<div class="pyeg">'+esc(it.spell)+'</div>':'')+(it.eg?'<div class="pyeg">'+esc(it.eg)+'</div>':'')+spk+'</div>';});return'<section class="slide" data-name="拼音"><div class="tag">'+esc(s.label||'拼音')+'</div><div class="title r" style="--i:1;font-size:80px">'+esc(s.head||'拼音')+'</div><div class="pygrid">'+cards+'</div><div class="hint">点 🔊 听真人发音，跟着念</div></section>';}

const BUILDERS = {
  cover: (s, L) => coverSlide(s, L),
  recognize: recognizeSlide,
  words: wordsSlide,
  poem: poemSlide,
  practice: practiceSlide,
  summary: summarySlide,
  compare: compareSlide,
  count: countSlide,
  nums: numsSlide,
  ordinal: ordinalSlide,
  split: splitSlide,
  add: addSlide,
  sub: subSlide,
  tenplus: tenplusSlide,
  chain: chainSlide,
  clock: clockSlide,
  pinyin: pinyinSlide,
};

/* ---------- 引擎 JS ---------- */
const ENGINE_JS = `
(function(){
  var UA=navigator.userAgent,SW=screen.width;
  var isMobile=/Mobi|Android/i.test(UA)||(SW<1024&&'ontouchstart' in window);
  if(isMobile){
    var vpEl=document.getElementById('vp');
    if(vpEl)vpEl.setAttribute('content','width=1920,viewport-fit=cover,user-scalable=yes,maximum-scale=3');
    var st=document.getElementById('stage');if(st)st.style.transform='none';
    return;
  }
  function fit(){var vp=document.querySelector('.viewport');var w=vp?vp.clientWidth:innerWidth;var h=vp?vp.clientHeight:innerHeight;var s=Math.min(w/1920,h/1080);var st=document.getElementById('stage');if(st)st.style.transform='scale('+s+')';}
  function fitSoon(){fit();requestAnimationFrame(fit);setTimeout(fit,250);setTimeout(fit,800);}
  if(document.readyState!=='loading')fitSoon();else addEventListener('DOMContentLoaded',fitSoon);
  addEventListener('load',fitSoon);
  addEventListener('resize',fit);
  addEventListener('orientationchange',fit);
})();
var slides=[].slice.call(document.querySelectorAll('.slide'));var cur=0;
function buildDots(){var d=document.getElementById('dots');slides.forEach(function(_,i){var e=document.createElement('div');e.className='dot'+(i===0?' on':'');e.onclick=function(){goto(i);};d.appendChild(e);});}
function animateCounts(s){s.querySelectorAll('.total').forEach(function(t){var target=+t.dataset.target;t.textContent='共 0 个';clearInterval(t._t);if(target<=0)return;var n=0;t._t=setInterval(function(){n++;t.textContent='共 '+n+' 个';if(n>=target)clearInterval(t._t);},430);});}
function runPair(m){if(!m)return;m.classList.remove('show-sym','show-extra','show-lines','show-apples');void m.offsetWidth;setTimeout(function(){m.classList.add('show-apples');},200);setTimeout(function(){m.classList.add('show-lines');},1700);setTimeout(function(){m.classList.add('show-extra');var p=m.querySelector('.plus');if(p&&p.dataset.speak)speak(p.dataset.speak);},3100);setTimeout(function(){m.classList.add('show-sym');},4100);}
function goto(i){i=(i+slides.length)%slides.length;slides.forEach(function(s){s.classList.remove('active');});cur=i;var s=slides[i];s.classList.add('active');s.offsetWidth;animateCounts(s);var m=s.querySelector('.match');if(m)runPair(m);
  document.querySelectorAll('.dot').forEach(function(d,k){d.classList.toggle('on',k===i);});
  document.getElementById('counter').textContent=(i+1)+' / '+slides.length;}
document.getElementById('next').onclick=function(){goto(cur+1);};
document.getElementById('prev').onclick=function(){goto(cur-1);};
document.getElementById('home').onclick=function(){location.href='index.html';};
addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();goto(cur+1);}if(e.key==='ArrowLeft'||e.key==='PageUp'){goto(cur-1);}});
var x0=null;addEventListener('touchstart',function(e){x0=e.touches[0].clientX;});
addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50){dx<0?goto(cur+1):goto(cur-1);}x0=null;});
buildDots();
document.querySelectorAll('.qmath').forEach(function(q){q.addEventListener('click',function(){q.classList.add('show');q.querySelector('.sign').textContent=q.dataset.ans;});});
document.querySelectorAll('.ord-go').forEach(function(b){b.addEventListener('click',function(){var sl=b.closest('.slide');var idx=+b.dataset.hi;sl.querySelectorAll('.oitem').forEach(function(it,k){it.classList.toggle('hi',k===idx);});var ans=sl.querySelector('.oans');if(ans){ans.classList.add('show');}if(b.dataset.han)speak(b.dataset.han);});});
var voices=[];var VOICE_KEY='yt-voice';var currentVoiceName=localStorage.getItem(VOICE_KEY)||'';var RATE_KEY='yt-rate';var currentRate=parseFloat(localStorage.getItem(RATE_KEY))||0.6;
function zhVoices(){return voices.filter(function(v){return /zh/i.test(v.lang);});}
function resolveVoice(){var z=zhVoices();if(!z.length)z=voices;if(!z.length)return null;if(currentVoiceName){var f=z.find(function(v){return v.name===currentVoiceName;});if(f)return f;}var pref=['Neural','Xiaoxiao','Yunxi','Yunyang','Ting-Ting','Google','Premium','Huihui','Yaoyao','Kangkang','XiaoIce','Microsoft'];for(var p=0;p<pref.length;p++){var m=z.find(function(v){return v.name.indexOf(pref[p])>=0;});if(m)return m;}return z[0];}
function pickVoice(){return resolveVoice();}
function fillVoices(){var sel=document.getElementById('voiceSel');if(!sel)return;if(!('speechSynthesis'in window)){sel.innerHTML='<option>浏览器不支持朗读</option>';sel.disabled=true;return;}var all=voices;if(!all.length){sel.innerHTML='<option>本机未安装语音</option>';sel.disabled=true;return;}sel.disabled=false;sel.innerHTML='';all.forEach(function(v){var o=document.createElement('option');o.value=v.name;o.textContent=v.name+' ('+v.lang+')';sel.appendChild(o);});if(currentVoiceName&&all.some(function(v){return v.name===currentVoiceName;}))sel.value=currentVoiceName;else{var d=resolveVoice();if(d)sel.value=d.name;}}
function loadVoices(){voices=speechSynthesis.getVoices();fillVoices();}
if('speechSynthesis' in window){loadVoices();speechSynthesis.onvoiceschanged=loadVoices;setTimeout(loadVoices,800);}
var _vs=document.getElementById('voiceSel');if(_vs)_vs.addEventListener('change',function(){currentVoiceName=_vs.value;localStorage.setItem(VOICE_KEY,currentVoiceName);});
var _rs=document.getElementById('rateRange');if(_rs){_rs.value=currentRate;_rs.addEventListener('input',function(){currentRate=parseFloat(_rs.value);localStorage.setItem(RATE_KEY,currentRate);});}
function speak(t){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='zh-CN';u.rate=currentRate;u.pitch=1.1;var v=pickVoice();if(v)u.voice=v;speechSynthesis.speak(u);}
function speakSeq(arr){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();arr.forEach(function(w,i){var u=new SpeechSynthesisUtterance(w);u.lang='zh-CN';u.rate=currentRate;u.pitch=1.1;var v=pickVoice();if(v)u.voice=v;setTimeout(function(){speechSynthesis.speak(u);},i*(currentRate<0.6?800:650));});}
document.querySelectorAll('[data-seq]').forEach(function(b){b.addEventListener('click',function(){try{speakSeq(JSON.parse(b.dataset.seq));}catch(e){}});});
var _curAudio=null,_curToken=0;function playMp3Seq(names){_curToken++;var my=_curToken;var i=0;function next(){if(my!==_curToken)return;if(i>=names.length)return;if(_curAudio){_curAudio.pause();_curAudio=null;}var a=new Audio('audio/'+names[i]+'.mp3');_curAudio=a;a.play();a.onerror=function(){if(my!==_curToken)return;i++;setTimeout(next,100);};a.onended=function(){if(my!==_curToken)return;i++;setTimeout(next,200);};}next();}
document.querySelectorAll('[data-mp3]').forEach(function(b){b.addEventListener('click',function(){try{playMp3Seq(JSON.parse(b.dataset.mp3));}catch(e){}});});
document.querySelectorAll('.speaker').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();speak(b.dataset.han);});});
addEventListener('keydown',function(e){if(e.key==='e'||e.key==='E'){document.body.classList.toggle('editing');}});
document.body.addEventListener('click',function(){if(document.body.classList.contains('editing')){document.querySelectorAll('[contenteditable]').forEach(function(el){el.contentEditable='true';});}});
`;

/* ---------- 组装单课 HTML ---------- */
function buildLesson(L) {
  const bgEmojis = L.bg && L.bg.length ? L.bg : ['🌟', '🍃', '☀️', '💧'];
  const floats = bgEmojis.map((e, i) => {
    const pos = [['10%', '16%'], ['right:12%', '20%'], ['16%', 'bottom:14%'], ['right:16%', 'bottom:18%']][i % 4];
    const style = (pos[0].startsWith('right') ? pos[0] : 'left:' + pos[0]) + ';' + (pos[1].startsWith('bottom') ? pos[1] : 'top:' + pos[1]);
    const dur = 9 + i * 1.5;
    return `<div class="float" style="${style};font-size:${70 + i * 6}px;animation-duration:${dur}s">${e}</div>`;
  }).join('');

  const slidesHtml = L.slides.map((s) => {
    const fn = BUILDERS[s.kind];
    if (!fn) return '';
    return fn(s, L);
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta id="vp" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(L.title)} · 一年级上册</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
${ENGINE_CSS}
${KIND_CSS}
${REDUCED}
</style>
</head>
<body>
<div class="viewport">
  <div class="stage" id="stage">
    <div class="bg">${floats}</div>
${slidesHtml}
    <div class="dots" id="dots"></div>
    <div class="counter" id="counter"></div>
    <div class="voicebar"><span>🔊 声音</span><select id="voiceSel"></select><span>语速</span><input type="range" id="rateRange" min="0.4" max="1.2" step="0.05" value="0.6"></div>
    <div class="nav"><button class="homebtn" id="home" title="返回目录">🏠 目录</button><button class="navbtn" id="prev">‹</button><button class="navbtn" id="next">›</button></div>
  </div>
</div>
<script>
${ENGINE_JS}
</script>
</body>
</html>`;
}

/* ---------- 执行 ---------- */
function safeWrite(file, html) {
  // 预览面板可能临时占用文件导致 EPERM，重试几次
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      fs.writeFileSync(file, html, 'utf8');
      return true;
    } catch (e) {
      if (e.code === 'EPERM' && attempt < 8) {
        require('child_process').execSync('sleep 1');
        continue;
      }
      throw e;
    }
  }
  return false;
}
let count = 0;
manifest.forEach((L) => {
  const html = buildLesson(L);
  const file = path.join(OUT, L.file);
  safeWrite(file, html);
  count++;
  console.log('生成:', L.file, '(' + L.slides.length + ' 屏)');
});
console.log('完成，共生成', count, '个文件。');
