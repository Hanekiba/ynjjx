/* 全课审查：结构、内容、潜在 bug */
const fs = require('fs');
const path = require('path');
const manifest = require('./gen-manifest.js');
const OUT = __dirname;

let errors = 0, warns = 0;
const allFiles = [];

// 1) 文件存在 + 清单条目数
console.log('=== 1. 文件存在 ===');
manifest.forEach(L => {
  const f = path.join(OUT, L.file);
  if (!fs.existsSync(f)) { console.log('❌ 缺失:', L.file); errors++; }
  else allFiles.push(f);
});
console.log('  清单条目:', manifest.length, '  文件存在:', allFiles.length);

// 2) 每个文件的结构完整性
console.log('\n=== 2. 结构完整性 ===');
allFiles.forEach(f => {
  const name = path.basename(f);
  const html = fs.readFileSync(f, 'utf8');
  const issues = [];

  // 必备元素
  if (!html.includes('id="home"')) issues.push('缺返回目录按钮');
  if (!html.includes('id="stage"')) issues.push('缺stage');
  if (!html.includes('id="dots"')) issues.push('缺dots');
  if (!html.includes('id="counter"')) issues.push('缺counter');
  if (!html.includes('speechSynthesis')) issues.push('缺TTS引擎');
  if (!html.includes('prefers-reduced-motion')) issues.push('缺reduce-motion');
  if (!html.includes('id="voiceSel"')) issues.push('缺语音选择器');

  // Section 计数
  const sections = (html.match(/<section class="slide[^"]*"/g) || []).length;
  const manifestEntry = manifest.find(m => m.file === name);
  const expected = manifestEntry ? manifestEntry.slides.length : '?';
  if (sections !== expected) issues.push(`屏数 ${sections} ≠ 预期 ${expected}`);

  // data-name 无重复
  const names = (html.match(/data-name="([^"]*)"/g) || []).map(s => s.replace(/data-name="|"/g, ''));
  const dupes = names.filter((n, i) => names.indexOf(n) !== i);
  if (dupes.length) issues.push('重复data-name: ' + [...new Set(dupes)].join(', '));

  // 每屏 contenteditable 在 editing 模式正确
  if (!html.includes('class="editable"') && html.includes('[contenteditable]')) {
    // 旧版 editing 模式检查
  }

  // 空屏检查
  const emptyMatches = html.match(/<section[^>]*><\/section>/g);
  if (emptyMatches) { issues.push('有'+emptyMatches.length+'个空屏'); }

  if (issues.length) {
    issues.forEach(x => console.log('  ⚠️', name, x));
    warns += issues.length;
  }
});

// 3) 按 kind 分项检查
console.log('\n=== 3. 按幻灯片类型的专项检查 ===');
manifest.forEach(L => {
  const html = fs.readFileSync(path.join(OUT, L.file), 'utf8');
  L.slides.forEach((s, i) => {
    const name = L.file + '#' + i + '(' + s.kind + ')';

    if (s.kind === 'recognize') {
      if (!html.includes('class="glyphbox"')) { console.log('  ⚠️', name, '缺glyphbox(活字动画)'); warns++; }
    }
    if (s.kind === 'poem') {
      const lines = s.lines || [];
      // 检查是否有空行或过长��
      lines.forEach((l, li) => {
        if (!l.trim()) { console.log('  ⚠️', name, `第${li+1}行为空`); warns++; }
        if (l.length > 40) { console.log('  💡', name, `第${li+1}行过长(${l.length}字)`); }
      });
    }
    if (s.kind === 'compare') {
      if (!s.top || !s.bot) { console.log('  ❌', name, '缺top/bot数组'); errors++; }
      if (s.extraSide && !s.plus) { console.log('  ⚠️', name, '有extraSide但缺plus标签'); warns++; }
    }
    if (s.kind === 'ordinal') {
      if (s.hi == null) { console.log('  ⚠️', name, '缺hi(高亮索引)'); warns++; }
    }
    if (s.kind === 'tenplus') {
      const big = s.big || 9, small = s.small || 4;
      if (big + small > 20) { console.log('  ⚠️', name, `结果${big+small}>20(超出进位法范围)`); warns++; }
    }
    if (s.kind === 'clock') {
      if (s.hour == null || s.min == null) { console.log('  ⚠️', name, '缺hour或min'); warns++; }
    }
    if (s.kind === 'pinyin') {
      (s.items || []).forEach((it, pi) => {
        if (!it.py) { console.log('  ⚠️', name, `第${pi+1}个拼音缺py`); warns++; }
      });
    }
  });
});

// 4) 链接完整性
console.log('\n=== 4. 目录页链接检查 ===');
const indexHtml = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
const links = indexHtml.match(/href="([^"]+)"/g) || [];
links.forEach(l => {
  const href = l.replace(/href="|"/g, '');
  if (href.startsWith('http')) return;
  const target = path.join(OUT, href);
  if (!fs.existsSync(target)) { console.log('  ❌ 死链:', href); errors++; }
});
console.log('  内部链接:', links.filter(l => !l.includes('http')).length, '个');

// 5) 检查 hand-written 文件不被覆盖
console.log('\n=== 5. 手写文件完整性 ===');
['yuwen-tiandi-ren.html', 'shuxue-bi-da-xiao.html'].forEach(f => {
  const p = path.join(OUT, f);
  if (!fs.existsSync(p)) { console.log('  ❌ 手写文件缺失:', f); errors++; }
  else {
    const h = fs.readFileSync(p, 'utf8');
    if (h.length < 5000) { console.log('  ⚠️', f, '文件过小(' + h.length + '字节)可能被覆盖'); warns++; }
  }
});

// 6) 潜在 JS 问题
console.log('\n=== 6. JS 引擎检查 ===');
const sample = fs.readFileSync(path.join(OUT, manifest[0].file), 'utf8');
if (!sample.includes('function goto(')) { console.log('  ❌ 缺goto函数'); errors++; }
if (!sample.includes('function speak(')) { console.log('  ❌ 缺speak函数'); errors++; }
if (!sample.includes('isMobile')) { console.log('  ❌ 缺mobile检测'); errors++; }
if (!sample.includes("location.href='index.html'")) { console.log('  ❌ 缺首页跳转'); errors++; }

// 7) 课本覆盖度
console.log('\n=== 7. 内容覆盖 ===');
const categories = {};
manifest.forEach(L => {
  const tag = L.tag || '其他';
  categories[tag] = (categories[tag] || 0) + 1;
});
Object.entries(categories).sort().forEach(([k, v]) => {
  console.log('  ' + k + ': ' + v + ' 课');
});

console.log('\n========================================');
console.log('审查完成：错误 ' + errors + '  警告 ' + warns);
console.log(errors === 0 && warns === 0 ? '✅ 全通过' : '⚠️ 有需要关注的项目');
