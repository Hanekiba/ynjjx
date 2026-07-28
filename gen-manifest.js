/* 一年级上册 第一批课程清单（识字一 + 数学准备课/1~5）
 * 每课: file 文件名, title 标题, tag 角标, sub 副标题, bg 漂浮装饰
 * slides: 各屏, kind ∈ cover/recognize/words/poem/practice/summary/compare/count/nums
 */
module.exports = [
  /* ===== 语文 识字（一）===== */
  {
    file: 'jin-mu-shui-huo-tu.html',
    title: '金木水火土',
    tag: '一年级上册 · 语文 · 识字（一）',
    sub: '金木水火土，五行要记牢',
    bg: ['🌟', '🍃', '☀️', '💧'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '一 二 三 四 五 上 下',
        cards: [
          { c: '一', m: 'live-bob', o: '1️⃣', han: '一' },
          { c: '二', m: 'live-float', o: '2️⃣', han: '二' },
          { c: '三', m: 'live-pulse', o: '3️⃣', han: '三' },
          { c: '四', m: 'live-hop', o: '4️⃣', han: '四' },
          { c: '五', m: 'live-spin', o: '5️⃣', han: '五' },
          { c: '上', m: 'live-bob', o: '⬆️', han: '上' },
          { c: '下', m: 'live-float', o: '⬇️', han: '下' }
        ] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '一', w: ['一个', '一天'] },
          { c: '二', w: ['二月', '二两'] },
          { c: '三', w: ['三个', '三天'] },
          { c: '四', w: ['四月', '四个'] },
          { c: '五', w: ['五月', '五个'] },
          { c: '上', w: ['上学', '上面'] },
          { c: '下', w: ['下雨', '下面'] }
        ] },
      { kind: 'poem', label: '读一读', head: '读一读',
        lines: ['一二三四五，', '金木水火土。', '天地分上下，', '日月照今古。'] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '一', a: 'yī', fx: '✨' },
          { q: '二', a: 'èr', fx: '🌟' },
          { q: '三', a: 'sān', fx: '💧' },
          { q: '四', a: 'sì', fx: '🔥' },
          { q: '五', a: 'wǔ', fx: '⭐' },
          { q: '上', a: 'shàng', fx: '⬆️' },
          { q: '下', a: 'xià', fx: '⬇️' }
        ] },
      { kind: 'summary', text: '一二三四五，金木水火土；天地分上下。' }
    ]
  },
  {
    file: 'kou-er-mu-zu.html',
    title: '口耳目手足',
    tag: '一年级上册 · 语文 · 识字（一）',
    sub: '口耳目手足，身体好朋友',
    bg: ['👂', '👀', '✋', '🌟'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '口耳目手足站坐',
        cards: [
          { c: '口', m: 'live-bob', o: '👄', han: '口' },
          { c: '耳', m: 'live-float', o: '👂', han: '耳' },
          { c: '目', m: 'live-pulse', o: '👁️', han: '目' },
          { c: '手', m: 'live-hop', o: '✋', han: '手' },
          { c: '足', m: 'live-spin', o: '🦶', han: '足' },
          { c: '站', m: 'live-bob', o: '🧍', han: '站' },
          { c: '坐', m: 'live-float', o: '🪑', han: '坐' }
        ] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '口', w: ['门口', '开口'] },
          { c: '耳', w: ['耳朵', '耳机'] },
          { c: '目', w: ['目光', '眼目'] },
          { c: '手', w: ['小手', '手心'] },
          { c: '足', w: ['足球', '手足'] }
        ] },
      { kind: 'poem', label: '读一读', head: '读一读',
        lines: ['站如松，', '坐如钟。', '行如风，', '卧如弓。'] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '口', a: 'kǒu', fx: '✨' },
          { q: '耳', a: 'ěr', fx: '🌟' },
          { q: '目', a: 'mù', fx: '👁️' },
          { q: '手', a: 'shǒu', fx: '✋' },
          { q: '足', a: 'zú', fx: '⭐' }
        ] },
      { kind: 'summary', text: '口说耳听，目看手做，足行全身，用处真多。' }
    ]
  },
  {
    file: 'ri-yue-shui-huo.html',
    title: '日月水火',
    tag: '一年级上册 · 语文 · 识字（一）',
    sub: '日月水火山石田禾',
    bg: ['☀️', '🌙', '💧', '🔥'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '日月水火山石田禾',
        cards: [
          { c: '日', m: 'live-spin', o: '☀️', han: '日' },
          { c: '月', m: 'live-float', o: '🌙', han: '月' },
          { c: '水', m: 'live-float', o: '💧', han: '水' },
          { c: '火', m: 'live-pulse', o: '🔥', han: '火' },
          { c: '山', m: 'live-hop', o: '⛰️', han: '山' },
          { c: '石', m: 'live-bob', o: '🪨', han: '石' },
          { c: '田', m: 'live-bob', o: '🌾', han: '田' },
          { c: '禾', m: 'live-bob', o: '🌱', han: '禾' }
        ] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '日', w: ['日子', '日月'] },
          { c: '月', w: ['月亮', '月儿'] },
          { c: '水', w: ['口水', '河水'] },
          { c: '火', w: ['火苗', '火山'] },
          { c: '山', w: ['高山', '山上'] },
          { c: '石', w: ['石头', '石子'] },
          { c: '田', w: ['田地', '水田'] },
          { c: '禾', w: ['禾苗', '禾谷'] }
        ] },
      { kind: 'poem', label: '读一读', head: '读一读',
        lines: ['红日圆圆，', '月牙弯弯。', '河水清清，', '火苗闪闪。'] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '日', a: 'rì', fx: '☀️' },
          { q: '月', a: 'yuè', fx: '🌙' },
          { q: '水', a: 'shuǐ', fx: '💧' },
          { q: '火', a: 'huǒ', fx: '🔥' },
          { q: '山', a: 'shān', fx: '⛰️' },
          { q: '石', a: 'shí', fx: '🪨' },
          { q: '田', a: 'tián', fx: '🌾' },
          { q: '禾', a: 'hé', fx: '🌱' }
        ] },
      { kind: 'summary', text: '日月水火山石田禾，都是身边的好朋友。' }
    ]
  },
  {
    file: 'dui-yun-ge.html',
    title: '对韵歌',
    tag: '一年级上册 · 语文 · 识字（一）',
    sub: '云对雨，雪对风',
    bg: ['☁️', '🌧️', '❄️', '🌸'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '对云雨风花鸟虫',
        cards: [
          { c: '对', m: 'live-bob', o: '↔️', han: '对' },
          { c: '云', m: 'live-float', o: '☁️', han: '云' },
          { c: '雨', m: 'live-bob', o: '🌧️', han: '雨' },
          { c: '风', m: 'live-pulse', o: '🌬️', han: '风' },
          { c: '花', m: 'live-bob', o: '🌸', han: '花' },
          { c: '鸟', m: 'live-spin', o: '🐦', han: '鸟' },
          { c: '虫', m: 'live-bob', o: '🐛', han: '虫' }
        ] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '云', w: ['白云', '云朵'] },
          { c: '雨', w: ['下雨', '雨水'] },
          { c: '雪', w: ['雪花', '下雪'] },
          { c: '风', w: ['大风', '风车'] },
          { c: '花', w: ['花朵', '红花'] },
          { c: '树', w: ['大树', '树叶'] },
          { c: '鸟', w: ['小鸟', '飞鸟'] },
          { c: '虫', w: ['虫子', '小虫'] }
        ] },
      { kind: 'poem', label: '读一读', head: '读一读',
        lines: ['云对雨，', '雪对风。', '花对树，', '鸟对虫。'] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '云', a: 'yún', fx: '☁️' },
          { q: '雨', a: 'yǔ', fx: '🌧️' },
          { q: '雪', a: 'xuě', fx: '❄️' },
          { q: '风', a: 'fēng', fx: '🌬️' },
          { q: '花', a: 'huā', fx: '🌸' },
          { q: '树', a: 'shù', fx: '🌳' },
          { q: '鸟', a: 'niǎo', fx: '🐦' },
          { q: '虫', a: 'chóng', fx: '🐛' }
        ] },
      { kind: 'summary', text: '云对雨，雪对风，对对子真好玩。' }
    ]
  },

  /* ===== 数学 准备课 / 1~5 ===== */
  {
    file: 'shu-yi-shu.html',
    title: '数一数',
    tag: '一年级上册 · 数学 · 准备课',
    sub: '数一数，几个就是几',
    bg: ['🍎', '🔢', '✨', '🌟'],
    slides: [
      { kind: 'cover' },
      { kind: 'count', label: '数一数', head: '一颗一颗数清楚',
        baskets: [{ cap: '一共有', e: '🍎', n: 10 }],
        seq: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十个'] },
      { kind: 'summary', text: '数物体个数时，数到几就是几个。' }
    ]
  },
  {
    file: 'bi-duo-shao.html',
    title: '比多少',
    tag: '一年级上册 · 数学 · 准备课',
    sub: '一个对一个，看谁多谁少',
    bg: ['🐰', '🐱', '✨', '🌟'],
    slides: [
      { kind: 'cover' },
      { kind: 'compare', label: '比多少', tag: '比多少',
        lead: '一个对一个，看谁多谁少',
        top: ['🐰', '🐰', '🐰', '🐰'],
        bot: ['🐱', '🐱', '🐱'],
        extraSide: 'top', extraFrom: 3,
        plus: '多 1 只', plusSpeak: '多一只',
        sym: '4 > 3', step: '4 只 比 3 只 多 → 4 大于 3',
        speak: '四大于三',
        hint: '一个对一个，小兔多出 1 只，就是「大于」' },
      { kind: 'summary', text: '一个对一个，谁有多出来的，谁就多。' }
    ]
  },
  {
    file: 'ren-shi-1-5.html',
    title: '1~5 的认识',
    tag: '一年级上册 · 数学 · 1~5的认识和加减法',
    sub: '数字几，就对应几个',
    bg: ['1️⃣', '2️⃣', '3️⃣', '🔢'],
    slides: [
      { kind: 'cover' },
      { kind: 'nums', label: '认一认', head: '1 到 5',
        cols: [
          { n: 1, e: '🍎' },
          { n: 2, e: '🌟' },
          { n: 3, e: '🌼' },
          { n: 4, e: '🍇' },
          { n: 5, e: '⭐' }
        ],
        seq: ['一', '二', '三', '四', '五'] },
      { kind: 'summary', text: '数字 1、2、3、4、5，分别表示对应个数的物体。' }
    ]
  },

  /* ===== 数学 1~5 的认识和加减法（续）===== */
  {
    file: 'di-ji.html',
    title: '第几',
    tag: '一年级上册 · 数学 · 1~5的认识和加减法',
    sub: '排第几，看位置',
    bg: ['🧒', '👧', '🚶', '🌟', '🔢'],
    slides: [
      { kind: 'cover' },
      { kind: 'ordinal', label: '第几', head: '第几', tag: '第几',
        lead: '排队买票，第几表示排第几个',
        objects: ['🧒', '👦', '👧', '🧑', '👶'],
        q: '从前面数，第 3 个是谁？',
        hi: 2, ans: '第 3 个是👧' },
      { kind: 'ordinal', label: '第几', head: '换个方向数', tag: '第几',
        lead: '从后往前数，排第几就变了',
        objects: ['🧒', '👦', '👧', '🧑', '👶'],
        q: '从后面数，第 2 个是谁？',
        hi: 3, ans: '从后面数第 2 个是🧑' },
      { kind: 'summary', text: '第几表示位置（排第几）；几个表示数量（一共有几个）。' }
    ]
  },
  {
    file: 'fen-yu-he.html',
    title: '分与合',
    tag: '一年级上册 · 数学 · 1~5的认识和加减法',
    sub: '一个数分成两个数',
    bg: ['✋', '🔀', '🌟', '➗'],
    slides: [
      { kind: 'cover' },
      { kind: 'split', label: '分与合', head: '4 的分与合', tag: '分与合', n: 4,
        parts: [[1, 3], [2, 2], [3, 1]],
        seq: ['4可以分成1和3', '4可以分成2和2', '4可以分成3和1'] },
      { kind: 'split', label: '分与合', head: '5 的分与合', tag: '分与合', n: 5,
        parts: [[1, 4], [2, 3], [3, 2], [4, 1]],
        seq: ['5分成1和4', '5分成2和3', '5分成3和2', '5分成4和1'] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓',
        items: [
          { q: '4 分成 1 和', a: '3', fx: '✨' },
          { q: '5 分成 2 和', a: '3', fx: '🌟' },
          { q: '5 分成 4 和', a: '1', fx: '⭐' },
          { q: '4 分成 2 和', a: '2', fx: '🔆' }
        ] },
      { kind: 'summary', text: '一个数能分成两个数，这两个数合起来还是它。' }
    ]
  },
  {
    file: 'jia-fa.html',
    title: '加法',
    tag: '一年级上册 · 数学 · 1~5的认识和加减法',
    sub: '合起来，用加法',
    bg: ['➕', '🐿️', '🌟', '✨'],
    slides: [
      { kind: 'cover' },
      { kind: 'add', label: '加法', head: '3 + 1 = 4', tag: '加法',
        lead: '3只松鼠，又跑来1只，一共4只', a: 3, b: 1, sum: 4, e: '🐿️' },
      { kind: 'add', label: '加法', head: '1 + 2 = 3', tag: '加法',
        lead: '1只小鸡，又跑来2只，一共3只', a: 1, b: 2, sum: 3, e: '🐤' },
      { kind: 'practice', label: '练一练', head: '点一点揭晓',
        items: [
          { q: '2 + 1', a: '= 3', fx: '✨' },
          { q: '3 + 2', a: '= 5', fx: '🌟' },
          { q: '1 + 4', a: '= 5', fx: '⭐' },
          { q: '4 + 1', a: '= 5', fx: '🔆' }
        ] },
      { kind: 'summary', text: '把两部分合起来，求一共是多少，用加法（＋）。' }
    ]
  },
  {
    file: 'jian-fa.html',
    title: '减法',
    tag: '一年级上册 · 数学 · 1~5的认识和加减法',
    sub: '去掉一部分，用减法',
    bg: ['➖', '🎈', '🌟', '✨'],
    slides: [
      { kind: 'cover' },
      { kind: 'sub', label: '减法', head: '5 − 1 = 4', tag: '减法',
        lead: '5个气球，飞走1个，还剩4个', total: 5, take: 1, left: 4, e: '🎈' },
      { kind: 'sub', label: '减法', head: '4 − 2 = 2', tag: '减法',
        lead: '4块饼干，吃了2块，还剩2块', total: 4, take: 2, left: 2, e: '🍪' },
      { kind: 'practice', label: '练一练', head: '点一点揭晓',
        items: [
          { q: '5 − 1', a: '= 4', fx: '✨' },
          { q: '4 − 2', a: '= 2', fx: '🌟' },
          { q: '3 − 1', a: '= 2', fx: '⭐' },
          { q: '5 − 3', a: '= 2', fx: '🔆' }
        ] },
      { kind: 'summary', text: '从总数里去掉一部分，求剩下多少，用减法（−）。' }
    ]
  },
  {
    file: 'ren-shi-0.html',
    title: '0 的认识',
    tag: '一年级上册 · 数学 · 1~5的认识和加减法',
    sub: '没有，就用 0 表示',
    bg: ['0️⃣', '🍽️', '📏', '🌟'],
    slides: [
      { kind: 'cover' },
      { kind: 'count', label: '数一数', head: '一个也没有，是 0',
        baskets: [{ cap: '盘子里', e: '🍎', n: 0 }],
        seq: ['盘子里一个也没有'] },
      { kind: 'poem', label: '读一读', head: '认识 0',
        lines: ['盘子里一个也没有，', '用 0 表示。', '尺子从 0 开始，', '0 也是起点。'] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓',
        items: [
          { q: '3 + 0', a: '= 3', fx: '✨' },
          { q: '5 − 0', a: '= 5', fx: '🌟' },
          { q: '4 − 4', a: '= 0', fx: '⭐' },
          { q: '0 + 0', a: '= 0', fx: '🔆' }
        ] },
      { kind: 'summary', text: '没有用 0 表示；尺子从 0 开始量。相同的数相减得 0。' }
    ]
  },

  /* ===== 语文 识字（二）===== */
  {
    file: 'hua.html',
    title: '画',
    tag: '一年级上册 · 语文 · 识字（二）',
    sub: '远看山有色，近听水无声',
    bg: ['🏞️', '🖼️', '🌸', '🐦'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '画',
        cards: [
          { c: '画', m: 'live-bob', o: '🖼️', han: '画' },
          { c: '远', m: 'live-float', o: '🚶', han: '远' },
          { c: '有', m: 'live-pulse', o: '✊', han: '有' },
          { c: '色', m: 'live-bob', o: '🎨', han: '色' },
          { c: '近', m: 'live-hop', o: '👣', han: '近' },
          { c: '听', m: 'live-spin', o: '👂', han: '听' },
          { c: '无', m: 'live-float', o: '🚫', han: '无' },
          { c: '声', m: 'live-pulse', o: '🔊', han: '声' },
          { c: '去', m: 'live-bob', o: '🚪', han: '去' },
          { c: '还', m: 'live-hop', o: '🔙', han: '还' },
          { c: '来', m: 'live-spin', o: '⬅️', han: '来' }
        ] },
      { kind: 'poem', label: '读一读', head: '古诗《画》',
        lines: ['远看山有色，', '近听水无声。', '春去花还在，', '人来鸟不惊。'] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '远', w: ['远处', '远方'] },
          { c: '色', w: ['颜色', '红色'] },
          { c: '听', w: ['听讲', '好听'] },
          { c: '声', w: ['声音', '回声'] },
          { c: '来', w: ['来去', '回来'] },
          { c: '惊', w: ['吃惊', '惊吓'] }
        ] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '远', a: 'yuǎn', fx: '✨' },
          { q: '色', a: 'sè', fx: '🌟' },
          { q: '近', a: 'jìn', fx: '👣' },
          { q: '听', a: 'tīng', fx: '👂' },
          { q: '无', a: 'wú', fx: '🚫' },
          { q: '声', a: 'shēng', fx: '🔊' },
          { q: '来', a: 'lái', fx: '🚪' },
          { q: '惊', a: 'jīng', fx: '😲' }
        ] },
      { kind: 'summary', text: '一首谜语诗，画上的山、水、花、鸟都不会变。' }
    ]
  },
  {
    file: 'da-xiao-duo-shao.html',
    title: '大小多少',
    tag: '一年级上册 · 语文 · 识字（二）',
    sub: '大小多少，反着看',
    bg: ['🐂', '🐱', '🦆', '🍎'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '大小多少',
        cards: [
          { c: '多', o: '🌟', han: '多' },
          { c: '少', o: '🔹', han: '少' },
          { c: '黄', o: '🟡', han: '黄' },
          { c: '牛', o: '🐂', han: '牛' },
          { c: '只', o: '🔢', han: '只' },
          { c: '猫', o: '🐱', han: '猫' },
          { c: '边', o: '➡️', han: '边' },
          { c: '鸭', o: '🦆', han: '鸭' },
          { c: '苹', o: '🍎', han: '苹' },
          { c: '果', o: '🍒', han: '果' },
          { c: '杏', o: '🟠', han: '杏' },
          { c: '桃', o: '🍑', han: '桃' }
        ] },
      { kind: 'poem', label: '读一读', head: '大小多少',
        lines: ['一个大，一个小，', '一头黄牛一只猫。', '一边多，一边少，', '一群鸭子一只鸟。'] },
      { kind: 'compare', label: '比一比', tag: '比多少',
        lead: '一个对一个，看谁多谁少',
        top: ['🍎', '🍎', '🍎', '🍎'], bot: ['🍎'],
        extraSide: 'top', extraFrom: 1,
        plus: '多 3 个', plusSpeak: '多三个',
        sym: '4 > 1', step: '4 个 比 1 个 多', speak: '四大于一',
        hint: '一一配对，苹果多出 3 个，就是「多」' },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '多', a: 'duō', fx: '🌟' },
          { q: '少', a: 'shǎo', fx: '🔹' },
          { q: '黄', a: 'huáng', fx: '🟡' },
          { q: '牛', a: 'niú', fx: '🐂' },
          { q: '猫', a: 'māo', fx: '🐱' },
          { q: '鸭', a: 'yā', fx: '🦆' },
          { q: '苹', a: 'píng', fx: '🍎' },
          { q: '桃', a: 'táo', fx: '🍑' }
        ] },
      { kind: 'summary', text: '大对小，多对少，反义词真奇妙。' }
    ]
  },
  {
    file: 'xiao-shu-bao.html',
    title: '小书包',
    tag: '一年级上册 · 语文 · 识字（二）',
    sub: '天天起得早，陪我去学校',
    bg: ['🎒', '📚', '✏️', '🌟'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '小书包',
        cards: [
          { c: '书', o: '📖', han: '书' },
          { c: '包', o: '🎒', han: '包' },
          { c: '尺', o: '📏', han: '尺' },
          { c: '作', o: '✍️', han: '作' },
          { c: '业', o: '📝', han: '业' },
          { c: '本', o: '📒', han: '本' },
          { c: '笔', o: '✏️', han: '笔' },
          { c: '刀', o: '🔪', han: '刀' },
          { c: '课', o: '📚', han: '课' },
          { c: '早', o: '🌅', han: '早' },
          { c: '校', o: '🏫', han: '校' }
        ] },
      { kind: 'poem', label: '读一读', head: '小书包（一）',
        lines: ['小书包，真不少。', '课本作业本，', '铅笔转笔刀。'] },
      { kind: 'poem', label: '读一读', head: '小书包（二）',
        lines: ['天天起得早，', '陪我去学校。'] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '书', w: ['书包', '书本'] },
          { c: '包', w: ['书包', '包子'] },
          { c: '笔', w: ['铅笔', '毛笔'] },
          { c: '本', w: ['本子', '作业本'] },
          { c: '刀', w: ['小刀', '转笔刀'] },
          { c: '业', w: ['作业'] }
        ] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '书', a: 'shū', fx: '📖' },
          { q: '包', a: 'bāo', fx: '🎒' },
          { q: '尺', a: 'chǐ', fx: '📏' },
          { q: '作', a: 'zuò', fx: '✍️' },
          { q: '业', a: 'yè', fx: '📝' },
          { q: '本', a: 'běn', fx: '📒' },
          { q: '笔', a: 'bǐ', fx: '✏️' },
          { q: '刀', a: 'dāo', fx: '🔪' }
        ] },
      { kind: 'summary', text: '小书包里宝贝多，天天陪我去学校。' }
    ]
  },
  {
    file: 'ri-yue-ming.html',
    title: '日月明',
    tag: '一年级上册 · 语文 · 识字（二）',
    sub: '会意字，真有趣',
    bg: ['☀️', '🌙', '🌳', '✨'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '日月明',
        cards: [
          { c: '明', m: 'live-spin', o: '☀️🌙', han: '明' },
          { c: '力', m: 'live-pulse', o: '💪', han: '力' },
          { c: '尘', m: 'live-float', o: '💧⛰️', han: '尘' },
          { c: '从', m: 'live-bob', o: '🧍🧍', han: '从' },
          { c: '众', m: 'live-hop', o: '🧍🧍🧍', han: '众' },
          { c: '双', m: 'live-bob', o: '✌️', han: '双' },
          { c: '木', m: 'live-float', o: '🌳', han: '木' },
          { c: '林', m: 'live-spin', o: '🌳🌳', han: '林' },
          { c: '森', m: 'live-bob', o: '🌲🌲🌲', han: '森' },
          { c: '条', m: 'live-pulse', o: '🪵', han: '条' },
          { c: '心', m: 'live-float', o: '❤️', han: '心' }
        ] },
      { kind: 'poem', label: '读一读', head: '会意字（一）',
        lines: ['日月明，', '田力男。', '小大尖，', '小土尘。'] },
      { kind: 'poem', label: '读一读', head: '会意字（二）',
        lines: ['二人从，', '三人众。', '双木林，', '三木森。'] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '明', w: ['明天', '明月'] },
          { c: '男', w: ['男生', '男孩'] },
          { c: '林', w: ['树林', '山林'] },
          { c: '森', w: ['森林', '森森'] },
          { c: '从', w: ['跟从', '从前'] },
          { c: '众', w: ['众人', '大众'] }
        ] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '明', a: 'míng', fx: '☀️' },
          { q: '力', a: 'lì', fx: '💪' },
          { q: '尘', a: 'chén', fx: '💧' },
          { q: '从', a: 'cóng', fx: '🧍' },
          { q: '众', a: 'zhòng', fx: '👥' },
          { q: '木', a: 'mù', fx: '🌳' },
          { q: '林', a: 'lín', fx: '🌲' },
          { q: '森', a: 'sēn', fx: '🌳' }
        ] },
      { kind: 'summary', text: '两个或以上的字合起来，意思变新，这叫会意字。' }
    ]
  },
  {
    file: 'sheng-guo-qi.html',
    title: '升国旗',
    tag: '一年级上册 · 语文 · 识字（二）',
    sub: '向着国旗，我们立正',
    bg: ['🇨🇳', '🚩', '⭐', '🌟'],
    slides: [
      { kind: 'cover' },
      { kind: 'recognize', label: '认一认', head: '升国旗',
        cards: [
          { c: '升', m: 'live-bob', o: '🚩', han: '升' },
          { c: '国', m: 'live-float', o: '🏛️', han: '国' },
          { c: '旗', m: 'live-pulse', o: '🚩', han: '旗' },
          { c: '中', m: 'live-spin', o: '🇨🇳', han: '中' },
          { c: '们', m: 'live-bob', o: '👥', han: '们' },
          { c: '声', m: 'live-float', o: '🔊', han: '声' },
          { c: '起', m: 'live-hop', o: '⬆️', han: '起' },
          { c: '么', m: 'live-pulse', o: '❓', han: '么' },
          { c: '美', m: 'live-bob', o: '🌸', han: '美' },
          { c: '丽', m: 'live-float', o: '🌺', han: '丽' },
          { c: '立', m: 'live-spin', o: '🧍', han: '立' }
        ] },
      { kind: 'poem', label: '读一读', head: '升国旗（一）',
        lines: ['五星红旗，', '我们的国旗。', '国歌声中，', '徐徐升起。'] },
      { kind: 'poem', label: '读一读', head: '升国旗（二）',
        lines: ['向着国旗，', '我们立正。', '望着国旗，', '我们敬礼。'] },
      { kind: 'words', label: '组词', head: '给字找朋友',
        items: [
          { c: '升', w: ['升起', '上升'] },
          { c: '国', w: ['中国', '国家'] },
          { c: '旗', w: ['国旗', '旗帜'] },
          { c: '中', w: ['中国', '中间'] },
          { c: '们', w: ['我们', '你们'] },
          { c: '声', w: ['声音', '歌声'] },
          { c: '起', w: ['起立', '升起'] },
          { c: '美', w: ['美丽', '美好'] },
          { c: '丽', w: ['美丽', '秀丽'] },
          { c: '立', w: ['立正', '起立'] }
        ] },
      { kind: 'practice', label: '练一练', head: '点一点揭晓读音',
        items: [
          { q: '升', a: 'shēng', fx: '🚩' },
          { q: '国', a: 'guó', fx: '🏛️' },
          { q: '旗', a: 'qí', fx: '🚩' },
          { q: '中', a: 'zhōng', fx: '🇨🇳' },
          { q: '们', a: 'men', fx: '👥' },
          { q: '声', a: 'shēng', fx: '🔊' },
          { q: '起', a: 'qǐ', fx: '⬆️' },
          { q: '么', a: 'me', fx: '❓' },
          { q: '美', a: 'měi', fx: '🌸' },
          { q: '丽', a: 'lì', fx: '🌺' },
          { q: '立', a: 'lì', fx: '🧍' }
        ] },
      { kind: 'summary', text: '向着国旗立正、敬礼，我们爱祖国。' }
    ]
  },

  // ====== 数学 6~10 单元 ======
  { file:'ren-shi-6-7.html', title:'6和7的认识', tag:'数学·6~10', sub:'数一数，认一认', bg:['🍎','🐟','🌟','💧'], slides:[
    { kind:'cover', title:'6和7的认识', lead:'数一数，比一比'},
    { kind:'nums', label:'认识 6', head:'6', cols:[{n:6,e:'🍎'}]},
    { kind:'nums', label:'认识 7', head:'7', cols:[{n:7,e:'🐟'}]},
    { kind:'compare', label:'比一比', top:Array(6).fill('🍎'), bot:Array(5).fill('🍎'), extraSide:'top', extraFrom:5, plus:'多 1 个', plusSpeak:'6 比 5 多 1 个', sym:'>', speak:'6大于5'},
    { kind:'compare', label:'比一比', top:Array(6).fill('🐟'), bot:Array(7).fill('🐟'), extraSide:'bot', extraFrom:6, plus:'少 1 个', plusSpeak:'6 比 7 少 1 个', sym:'<', speak:'6小于7'},
    { kind:'ordinal', tag:'第几', head:'小动物排队', lead:'从左边数，第 6 个是？', objects:['🐱','🐶','🐰','🐻','🐸','🐵','🐯'], hi:5, ans:'第 6 是小猴子 🐵'},
    { kind:'split', tag:'分与合', head:'6 的分与合', n:6, parts:[[1,5],[2,4],[3,3]], seq:['6可以分成1和5','6可以分成2和4','6可以分成3和3']},
    { kind:'split', tag:'分与合', head:'7 的分与合', n:7, parts:[[1,6],[2,5],[3,4]], seq:['7可以分成1和6','7可以分成2和5','7可以分成3和4']},
    { kind:'practice', head:'练一练', items:[{q:'5+1',a:'= 6',fx:'✏️'},{q:'6+1',a:'= 7',fx:'✏️'},{q:'7>6',a:'√',fx:'✅'},{q:'6<7',a:'√',fx:'✅'}]},
    { kind:'summary', text:'6 添上 1 是 7，7 去掉 1 是 6。6<7, 7>6。'}
  ]},
  { file:'6-7-jia-jian.html', title:'6和7的加减法', tag:'数学·6~10', sub:'加一加，减一减', bg:['🍎','➕','➖','⭐'], slides:[
    { kind:'cover', title:'6和7的加减法', lead:'用加法把两部分合起来'},
    { kind:'add', tag:'加法', head:'4 + 2', lead:'4 个加 2 个，合起来是几个？', e:'🍎', a:4, b:2, sum:6, speak:'4加2等于6'},
    { kind:'add', tag:'加法', head:'5 + 2', lead:'5 个加 2 个，合起来是几个？', e:'🐟', a:5, b:2, sum:7, speak:'5加2等于7'},
    { kind:'sub', tag:'减法', head:'7 − 2', lead:'7 个去掉 2 个，还剩几个？', e:'🍎', total:7, take:2, left:5, speak:'7减2等于5'},
    { kind:'sub', tag:'减法', head:'6 − 1', lead:'6 个去掉 1 个，还剩几个？', e:'🐟', total:6, take:1, left:5, speak:'6减1等于5'},
    { kind:'practice', head:'练一练', items:[{q:'6−2',a:'= 4',fx:'✅'},{q:'7−3',a:'= 4',fx:'✅'},{q:'3+3',a:'= 6',fx:'🌟'},{q:'3+4',a:'= 7',fx:'🌟'}]},
    { kind:'summary', text:'加法和减法都是好朋友，会算加法就能算减法。'}
  ]},
  { file:'ren-shi-8-9.html', title:'8和9的认识', tag:'数学·6~10', sub:'数一数，认一认', bg:['🎈','🍬','🌟','💧'], slides:[
    { kind:'cover', title:'8和9的认识', lead:'更大的数来了'},
    { kind:'nums', label:'认识 8', head:'8', cols:[{n:8,e:'🎈'}]},
    { kind:'nums', label:'认识 9', head:'9', cols:[{n:9,e:'🍬'}]},
    { kind:'compare', label:'比一比', top:Array(8).fill('🎈'), bot:Array(7).fill('🎈'), extraSide:'top', extraFrom:7, plus:'多 1 个', plusSpeak:'8比7多1个', sym:'>', speak:'8大于7'},
    { kind:'compare', label:'比一比', top:Array(8).fill('🍬'), bot:Array(9).fill('🍬'), extraSide:'bot', extraFrom:8, plus:'少 1 个', plusSpeak:'8比9少1个', sym:'<', speak:'8小于9'},
    { kind:'split', tag:'分与合', head:'8 的分与合', n:8, parts:[[4,4],[3,5],[2,6]]},
    { kind:'split', tag:'分与合', head:'9 的分与合', n:9, parts:[[4,5],[3,6],[2,7]]},
    { kind:'practice', head:'练一练', items:[{q:'7+1',a:'= 8',fx:'✏️'},{q:'8+1',a:'= 9',fx:'✏️'},{q:'9>8',a:'√',fx:'✅'}]},
    { kind:'summary', text:'8 添上 1 是 9，9 去掉 1 是 8。8<9, 9>8。'}
  ]},
  { file:'8-9-jia-jian.html', title:'8和9的加减法', tag:'数学·6~10', sub:'加一加，减一减', bg:['🎈','➕','➖','⭐'], slides:[
    { kind:'cover', title:'8和9的加减法', lead:'用加法和减法算一算'},
    { kind:'add', tag:'加法', head:'5 + 3', lead:'5 个加 3 个是几个？', e:'🎈', a:5, b:3, sum:8, speak:'5加3等于8'},
    { kind:'add', tag:'加法', head:'6 + 3', lead:'6 个加 3 个是几个？', e:'🍬', a:6, b:3, sum:9, speak:'6加3等于9'},
    { kind:'sub', tag:'减法', head:'9 − 3', lead:'9 个去掉 3 个还剩几个？', e:'🎈', total:9, take:3, left:6, speak:'9减3等于6'},
    { kind:'sub', tag:'减法', head:'8 − 4', lead:'8 个去掉 4 个还剩几个？', e:'🍬', total:8, take:4, left:4, speak:'8减4等于4'},
    { kind:'practice', head:'练一练', items:[{q:'8−2',a:'= 6',fx:'✅'},{q:'9−4',a:'= 5',fx:'✅'},{q:'4+4',a:'= 8',fx:'🌟'},{q:'4+5',a:'= 9',fx:'🌟'}]},
    { kind:'summary', text:'8 和 9 的加减法，方法和前面一样。'}
  ]},
  { file:'ren-shi-10.html', title:'10的认识', tag:'数学·6~10', sub:'满十了！', bg:['🍎','🔟','🌟','💧'], slides:[
    { kind:'cover', title:'10的认识', lead:'10 是第一个两位数'},
    { kind:'nums', label:'认识 10', head:'10', cols:[{n:10,e:'🍎'}]},
    { kind:'compare', label:'比一比', top:Array(10).fill('🍎'), bot:Array(9).fill('🍎'), extraSide:'top', extraFrom:9, plus:'多 1 个', plusSpeak:'10比9多1个', sym:'>', speak:'10大于9'},
    { kind:'split', tag:'分与合', head:'10 的分与合', n:10, parts:[[5,5],[4,6],[3,7],[2,8],[1,9]], seq:['10可以分成5和5','10可以分成4和6','10可以分成3和7','10可以分成2和8','10可以分成1和9']},
    { kind:'practice', head:'练一练', items:[{q:'9+1',a:'= 10',fx:'🌟'},{q:'10−1',a:'= 9',fx:'✅'},{q:'10>9',a:'√',fx:'✅'}]},
    { kind:'summary', text:'10 是两位数，前面写 1，后面写 0。'}
  ]},
  { file:'10-jia-jian.html', title:'10的加减法', tag:'数学·6~10', sub:'加一加，减一减', bg:['🍎','➕','➖','⭐'], slides:[
    { kind:'cover', title:'10的加减法', lead:'满十的加减法'},
    { kind:'add', tag:'加法', head:'6 + 4', lead:'6 个加 4 个是几个？', e:'🍎', a:6, b:4, sum:10, speak:'6加4等于10'},
    { kind:'sub', tag:'减法', head:'10 − 3', lead:'10 个去掉 3 个还剩几个？', e:'🍎', total:10, take:3, left:7, speak:'10减3等于7'},
    { kind:'sub', tag:'减法', head:'10 − 6', lead:'10 个去掉 6 个还剩几个？', e:'🍎', total:10, take:6, left:4, speak:'10减6等于4'},
    { kind:'practice', head:'练一练', items:[{q:'10−2',a:'= 8',fx:'✅'},{q:'10−7',a:'= 3',fx:'✅'},{q:'5+5',a:'= 10',fx:'🌟'},{q:'2+8',a:'= 10',fx:'🌟'}]},
    { kind:'summary', text:'10 的加减法和前面的道理一样，多加练习就熟练了。'}
  ]},
  { file:'lian-jia-lian-jian.html', title:'连加连减', tag:'数学·6~10', sub:'连着算', bg:['🍎','🔗','🌟','💧'], slides:[
    { kind:'cover', title:'连加连减', lead:'连着加，连着减'},
    { kind:'chain', label:'连加', head:'4 + 2 + 1', lead:'先把前两个合起来，再加第三个', e:'🍎', steps:[4,2,1], ops:['+','+'], speak:true, speakTxt:'4加2等于6，6再加1等于7'},
    { kind:'chain', label:'连减', head:'8 − 3 − 2', lead:'先去掉前两个，再去掉第三个', e:'🐟', steps:[8,3,2], ops:['-','-'], speak:true, speakTxt:'8减3等于5，5再减2等于3'},
    { kind:'practice', head:'练一练', items:[{q:'3+2+4',a:'= 9',fx:'🌟'},{q:'9−3−1',a:'= 5',fx:'✅'}]},
    { kind:'summary', text:'连加连减按顺序算，从左到右一步步来。'}
  ]},
  { file:'jia-jian-hun-he.html', title:'加减混合', tag:'数学·6~10', sub:'有加有减', bg:['🍎','➕','➖','⭐'], slides:[
    { kind:'cover', title:'加减混合', lead:'有加有减一起算'},
    { kind:'chain', label:'加减混合', head:'4 + 3 − 2', lead:'先加后减，从左到右', e:'🍎', steps:[4,3,2], ops:['+','-'], speak:true, speakTxt:'4加3等于7，7减2等于5'},
    { kind:'chain', label:'加减混合', head:'7 − 2 + 1', lead:'先减后加，从左到右', e:'🐟', steps:[7,2,1], ops:['-','+'], speak:true, speakTxt:'7减2等于5，5加1等于6'},
    { kind:'practice', head:'练一练', items:[{q:'5+2−3',a:'= 4',fx:'✅'},{q:'8−3+1',a:'= 6',fx:'✅'},{q:'6+1−4',a:'= 3',fx:'🌟'}]},
    { kind:'summary', text:'有加有减从左往右算，不要急慢慢来。'}
  ]},
  { file:'ren-shi-11-20.html', title:'11~20的认识', tag:'数学·6~10', sub:'更大的数', bg:['🔢','🧮','🌟','💧'], slides:[
    { kind:'cover', title:'11~20的认识', lead:'数字变大了'},
    { kind:'nums', label:'11~15', head:'11~15', cols:[{n:11,e:'🍎'},{n:12,e:'🍎'},{n:13,e:'🍎'},{n:14,e:'🍎'},{n:15,e:'🍎'}]},
    { kind:'nums', label:'16~20', head:'16~20', cols:[{n:16,e:'🐟'},{n:17,e:'🐟'},{n:18,e:'🐟'},{n:19,e:'🐟'},{n:20,e:'🐟'}]},
    { kind:'ordinal', tag:'第几', head:'数到第几', lead:'从第 1 数到第 20', objects:['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','1️⃣1️⃣','1️⃣2️⃣','1️⃣3️⃣','1️⃣4️⃣','1️⃣5️⃣','1️⃣6️⃣','1️⃣7️⃣','1️⃣8️⃣','1️⃣9️⃣','2️⃣0️⃣'], hi:19, ans:'第 20 是 2️⃣0️⃣'},
    { kind:'practice', head:'练一练', items:[{q:'11+1',a:'= 12',fx:'✏️'},{q:'15+1',a:'= 16',fx:'✏️'},{q:'19+1',a:'= 20',fx:'🌟'},{q:'20−1',a:'= 19',fx:'✅'}]},
    { kind:'summary', text:'10 加几就是十几，如 10+1=11, 10+5=15。'}
  ]},
  { file:'ren-shi-zhong-biao.html', title:'认识钟表', tag:'数学·6~10', sub:'认时间', bg:['🕐','⏰','🌟','💧'], slides:[
    { kind:'cover', title:'认识钟表', lead:'看一看，认时间'},
    { kind:'clock', label:'整点', head:'8 点', lead:'分针指着 12，时针指着 8，就是 8 点', hour:8, min:0, timeLabel:'8:00 八点', speak:true, speakTxt:'8点'},
    { kind:'clock', label:'整点', head:'3 点', lead:'分针指着 12，时针指着 3，就是 3 点', hour:3, min:0, timeLabel:'3:00 三点', speak:true, speakTxt:'3点'},
    { kind:'clock', label:'整点', head:'6 点', lead:'分针指着 12，时针指着 6，就是 6 点', hour:6, min:0, timeLabel:'6:00 六点', speak:true, speakTxt:'6点'},
    { kind:'practice', head:'练一练', items:[{q:'分针指 12、时针指 1',a:'1 点',fx:'🕐'},{q:'分针指 12、时针指 12',a:'12 点',fx:'🕛'}]},
    { kind:'summary', text:'分针指 12，时针指几就是几点。'}
  ]},
  { file:'jin-wei-jia-fa.html', title:'20以内进位加法', tag:'数学·6~10', sub:'凑十法', bg:['🍎','🔟','🌟','💧'], slides:[
    { kind:'cover', title:'20以内进位加法', lead:'用凑十法来算'},
    { kind:'tenplus', label:'凑十法', big:9, small:4, e:'🍎', lead:'9 差 1 就到 10，把 4 分成 1 和 3', speak:true},
    { kind:'tenplus', label:'凑十法', big:8, small:5, e:'🐟', lead:'8 差 2 就到 10，把 5 分成 2 和 3', speak:true},
    { kind:'tenplus', label:'凑十法', big:7, small:6, e:'🍎', lead:'7 差 3 就到 10，把 6 分成 3 和 3', speak:true},
    { kind:'practice', head:'练一练', items:[{q:'9+2',a:'= 11',fx:'🌟'},{q:'8+3',a:'= 11',fx:'🌟'},{q:'6+5',a:'= 11',fx:'✅'},{q:'9+8',a:'= 17',fx:'✅'}]},
    { kind:'summary', text:'凑十法：先把大数凑成 10，再加剩下的。'}
  ]},
  { file:'zong-fu-xi-shu.html', title:'数学总复习', tag:'数学·6~10', sub:'都来练一练', bg:['🧮','🌟','✅','💧'], slides:[
    { kind:'cover', title:'数学总复习', lead:'这学期学过的都来练一练'},
    { kind:'practice', head:'综合练习', items:[{q:'6+3',a:'= 9',fx:'✅'},{q:'9−4',a:'= 5',fx:'✅'},{q:'8+7',a:'= 15',fx:'🌟'},{q:'4+2+3',a:'= 9',fx:'🌟'},{q:'10−3−2',a:'= 5',fx:'✏️'},{q:'7>5',a:'√',fx:'✅'}]},
    { kind:'summary', text:'这学期学了数数、比大小、加减法、连加连减和凑十法，继续练习会更棒！'}
  ]},

  // ====== 认识图形 ======
  { file:'ren-shi-tu-xing.html', title:'认识图形(一)', tag:'数学', sub:'认一认', bg:['🔲','🔺','⚪','🌟'], slides:[
    { kind:'cover', title:'认识图形(一)', lead:'看一看，摸一摸'},
    { kind:'recognize', label:'认一认', head:'立体图形', cards:[
      {c:'长方体', m:'live-bob', o:'📦', han:'长方体'},
      {c:'正方体', m:'live-pulse', o:'🎲', han:'正方体'},
      {c:'圆柱', m:'live-spin', o:'🥫', han:'圆柱'},
      {c:'球', m:'live-float', o:'⚽', han:'球'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'📦',a:'长方体',fx:'✅'},{q:'🎲',a:'正方体',fx:'✅'},{q:'🥫',a:'圆柱',fx:'✅'},{q:'⚽',a:'球',fx:'🌟'}]},
    { kind:'summary', text:'长方体、正方体、圆柱和球，四种立体图形。摸一摸，滚一滚！'}
  ]},

  // ====== 汉语拼音 13 课 ======
  { file:'py-aoe.html', title:'a o e', tag:'拼音', sub:'单韵母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'a o e', lead:'张大嘴巴 a a a'},
    { kind:'pinyin', label:'单韵母', head:'a o e', items:[
      {py:'a', tones:['ā','á','ǎ','à'], eg:'啊', spell:'a', han:'阿姨'},
      {py:'o', tones:['ō','ó','ǒ','ò'], eg:'喔', spell:'o', han:'公鸡喔喔叫'},
      {py:'e', tones:['ē','é','ě','è'], eg:'鹅', spell:'e', han:'白鹅'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'张大嘴巴',a:'a',fx:'🔤'},{q:'公鸡叫',a:'o',fx:'🐓'},{q:'白鹅',a:'e',fx:'🦢'}]},
    { kind:'summary', text:'a o e 是单韵母，声音响亮又圆润。'}
  ]},
  { file:'py-iuv.html', title:'i u ü y w', tag:'拼音', sub:'单韵母+声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'i u ü y w', lead:'牙齿对齐 i i i'},
    { kind:'pinyin', label:'单韵母', head:'i u ü', items:[
      {py:'i', tones:['ī','í','ǐ','ì'], eg:'衣', spell:'i', han:'衣服'},
      {py:'u', tones:['ū','ú','ǔ','ù'], eg:'乌', spell:'u', han:'乌龟'},
      {py:'ü', tones:['ǖ','ǘ','ǚ','ǜ'], eg:'鱼', spell:'ü', han:'鱼儿在水里游'}
    ]},
    { kind:'pinyin', label:'声母', head:'y w', items:[
      {py:'y', eg:'衣', spell:'yi', han:'衣服'},
      {py:'w', eg:'乌', spell:'wu', han:'乌龟'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'i u ü 是？',a:'单韵母',fx:'✅'},{q:'y w 是？',a:'声母',fx:'✅'}]},
    { kind:'summary', text:'i u ü 是单韵母，y w 是声母。'}
  ]},
  { file:'py-bpmf.html', title:'b p m f', tag:'拼音', sub:'声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'b p m f', lead:'右下半圆 b b b'},
    { kind:'pinyin', label:'声母', head:'b p m f', items:[
      {py:'b', eg:'爸', spell:'bà', han:'爸爸'},
      {py:'p', eg:'爬', spell:'pá', han:'爬山'},
      {py:'m', eg:'妈', spell:'mā', han:'妈妈'},
      {py:'f', eg:'佛', spell:'fó', han:'飞机'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'b-à',a:'bà',fx:'✅'},{q:'m-ā',a:'mā',fx:'✅'},{q:'p-á',a:'pá',fx:'🌟'}]},
    { kind:'summary', text:'b p m f 是声母，读得又轻又短。'}
  ]},
  { file:'py-dtnl.html', title:'d t n l', tag:'拼音', sub:'声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'d t n l', lead:'左下半圆 d d d'},
    { kind:'pinyin', label:'声母', head:'d t n l', items:[
      {py:'d', eg:'得', spell:'dé', han:'得到'},
      {py:'t', eg:'特', spell:'tè', han:'特别'},
      {py:'n', eg:'讷', spell:'nè', han:'哪吒'},
      {py:'l', eg:'勒', spell:'lè', han:'快乐'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'d-é',a:'dé',fx:'✅'},{q:'n-è',a:'nè',fx:'✅'},{q:'l-è',a:'lè',fx:'🌟'}]},
    { kind:'summary', text:'d t n l 舌尖抵住上牙床来发音。'}
  ]},
  { file:'py-gkh.html', title:'g k h', tag:'拼音', sub:'声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'g k h', lead:'像个 9 字 g g g'},
    { kind:'pinyin', label:'声母', head:'g k h', items:[
      {py:'g', eg:'歌', spell:'gē', han:'唱歌'},
      {py:'k', eg:'科', spell:'kē', han:'科学'},
      {py:'h', eg:'喝', spell:'hē', han:'喝水'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'g-ē',a:'gē',fx:'✅'},{q:'k-ē',a:'kē',fx:'✅'},{q:'h-ē',a:'hē',fx:'🌟'}]},
    { kind:'summary', text:'g k h 发音时舌根抬高。'}
  ]},
  { file:'py-jqx.html', title:'j q x', tag:'拼音', sub:'声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'j q x', lead:'小 i 遇见 j q x'},
    { kind:'pinyin', label:'声母', head:'j q x', items:[
      {py:'j', eg:'基', spell:'jī', han:'鸡叫'},
      {py:'q', eg:'欺', spell:'qī', han:'七天'},
      {py:'x', eg:'希', spell:'xī', han:'西瓜'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'j-ī',a:'jī',fx:'✅'},{q:'q-ī',a:'qī',fx:'✅'},{q:'x-ī',a:'xī',fx:'🌟'},{q:'j q x 见 ü 去',a:'两点',fx:'✅'}]},
    { kind:'summary', text:'j q x 不和 u 拼，ü 见了 j q x 去掉两点还读 ü。'}
  ]},
  { file:'py-zcs.html', title:'z c s', tag:'拼音', sub:'声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'z c s', lead:'像个 2 字 z z z'},
    { kind:'pinyin', label:'声母', head:'z c s', items:[
      {py:'z', eg:'资', spell:'zī', han:'中国'},
      {py:'c', eg:'雌', spell:'cī', han:'擦黑板'},
      {py:'s', eg:'思', spell:'sī', han:'思考'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'z-ī',a:'zī',fx:'✅'},{q:'c-ī',a:'cī',fx:'✅'},{q:'s-ī',a:'sī',fx:'🌟'}]},
    { kind:'summary', text:'z c s 是平舌音，舌尖顶住牙齿发音。'}
  ]},
  { file:'py-zhchshr.html', title:'zh ch sh r', tag:'拼音', sub:'声母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'zh ch sh r', lead:'zh ch sh r 翘舌音'},
    { kind:'pinyin', label:'声母', head:'zh ch sh r', items:[
      {py:'zh', eg:'知', spell:'zhī', han:'知道'},
      {py:'ch', eg:'蚩', spell:'chī', han:'吃饭'},
      {py:'sh', eg:'思', spell:'shī', han:'老师'},
      {py:'r', eg:'日', spell:'rì', han:'日子'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'zh 是',a:'翘舌音',fx:'✅'},{q:'z 是',a:'平舌音',fx:'✅'},{q:'sh-ī',a:'shī',fx:'🌟'}]},
    { kind:'summary', text:'zh ch sh r 舌尖翘起发音，和平舌音 z c s 对比着记。'}
  ]},
  { file:'py-aieiui.html', title:'ai ei ui', tag:'拼音', sub:'复韵母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'ai ei ui', lead:'复韵母要连贯读'},
    { kind:'pinyin', label:'复韵母', head:'ai ei ui', items:[
      {py:'ai', tones:['āi','ái','ǎi','ài'], eg:'哀', spell:'ai', han:'爱心'},
      {py:'ei', tones:['ēi','éi','ěi','èi'], eg:'诶', spell:'ei', han:'诶'},
      {py:'ui', tones:['uī','uí','uǐ','uì'], eg:'威', spell:'ui', han:'威风'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'b-ái',a:'bái',fx:'✅'},{q:'m-ěi',a:'měi',fx:'✅'},{q:'g-uī',a:'guī',fx:'🌟'}]},
    { kind:'summary', text:'复韵母由两个音连起来念，前面重后面轻。'}
  ]},
  { file:'py-aoouiu.html', title:'ao ou iu', tag:'拼音', sub:'复韵母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'ao ou iu', lead:'复韵母 ao ou iu'},
    { kind:'pinyin', label:'复韵母', head:'ao ou iu', items:[
      {py:'ao', tones:['āo','áo','ǎo','ào'], eg:'熬', spell:'ao', han:'熬汤'},
      {py:'ou', tones:['ōu','óu','ǒu','òu'], eg:'欧', spell:'ou', han:'欧洲'},
      {py:'iu', tones:['iū','iú','iǔ','iù'], eg:'优', spell:'iu', han:'优秀'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'m-āo',a:'māo',fx:'🐱'},{q:'t-óu',a:'tóu',fx:'✅'},{q:'n-iú',a:'niú',fx:'🐂'}]},
    { kind:'summary', text:'ao ou iu 也是复韵母，连起来快速念。'}
  ]},
  { file:'py-ieueer.html', title:'ie üe er', tag:'拼音', sub:'复韵母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'ie üe er', lead:'ie üe er 记一记'},
    { kind:'pinyin', label:'复韵母', head:'ie üe er', items:[
      {py:'ie', tones:['iē','ié','iě','iè'], eg:'耶', spell:'ie', han:'爷爷'},
      {py:'üe', tones:['üē','üé','üě','üè'], eg:'约', spell:'üe', han:'约定'},
      {py:'er', tones:['ēr','ér','ěr','èr'], eg:'耳', spell:'er', han:'耳朵'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'x-iě',a:'xiě',fx:'✍️'},{q:'q-üè',a:'què',fx:'✅'},{q:'ér',a:'儿',fx:'👶'}]},
    { kind:'summary', text:'er 是特殊韵母，不和声母拼。ie üe 中 e 读 ê 的音。'}
  ]},
  { file:'py-anenin.html', title:'an en in un ün', tag:'拼音', sub:'前鼻韵母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'an en in un ün', lead:'前鼻韵母，尾音带 n'},
    { kind:'pinyin', label:'前鼻韵母', head:'an en in un ün', items:[
      {py:'an', tones:['ān','án','ǎn','àn'], eg:'安', spell:'an', han:'安静'},
      {py:'en', tones:['ēn','én','ěn','èn'], eg:'恩', spell:'en', han:'恩人'},
      {py:'in', tones:['īn','ín','ǐn','ìn'], eg:'因', spell:'in', han:'因为'},
      {py:'un', tones:['ūn','ún','ǔn','ùn'], eg:'温', spell:'un', han:'温暖'},
      {py:'ün', tones:['ǖn','ǘn','ǚn','ǜn'], eg:'晕', spell:'ün', han:'云朵'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'b-ān',a:'bān',fx:'✅'},{q:'p-ín',a:'pín',fx:'✅'},{q:'j-ūn',a:'jūn',fx:'🌟'}]},
    { kind:'summary', text:'an en in un ün 尾音舌头抵住上牙床，气流从鼻子出来。'}
  ]},
  { file:'py-angengingong.html', title:'ang eng ing ong', tag:'拼音', sub:'后鼻韵母', bg:['🔤','🎵','🌟','💧'], slides:[
    { kind:'cover', title:'ang eng ing ong', lead:'后鼻韵母，尾音带 ng'},
    { kind:'pinyin', label:'后鼻韵母', head:'ang eng ing ong', items:[
      {py:'ang', tones:['āng','áng','ǎng','àng'], eg:'昂', spell:'ang', han:'昂首'},
      {py:'eng', tones:['ēng','éng','ěng','èng'], eg:'灯', spell:'eng', han:'灯笼'},
      {py:'ing', tones:['īng','íng','ǐng','ìng'], eg:'英', spell:'ing', han:'英雄'},
      {py:'ong', tones:['ōng','óng','ǒng','òng'], eg:'翁', spell:'ong', han:'老翁'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'t-áng',a:'táng',fx:'✅'},{q:'l-óng',a:'lóng',fx:'🐉'},{q:'p-íng',a:'píng',fx:'🍎'}]},
    { kind:'summary', text:'后鼻韵母尾音舌头后缩，和前鼻音对比着念。拼音全部学完啦！'}
  ]},

  // ====== 课文 14 课 ======
  { file:'ke-qiu-tian.html', title:'秋天', tag:'课文', sub:'秋天来了', bg:['🍂','🌾','🍁','💧'], slides:[
    { kind:'cover', title:'秋天', lead:'天气凉了，树叶黄了'},
    { kind:'poem', label:'读一读', head:'秋天', lines:['天气凉了，', '树叶黄了，', '一片片叶子从树上落下来。', '天空那么蓝，那么高。', '一群大雁往南飞，', '一会儿排成"人"字，', '一会儿排成"一"字。', '啊！秋天来了！']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'秋', m:'live-float', o:'🍂', han:'秋'},{c:'气', m:'live-bob', o:'💨', han:'气'},
      {c:'了', m:'live-pulse', o:'✅', han:'了'},{c:'树', m:'live-hop', o:'🌳', han:'树'},
      {c:'叶', m:'live-spin', o:'🍃', han:'叶'},{c:'片', m:'live-bob', o:'📄', han:'片'},
      {c:'大', m:'live-pulse', o:'👍', han:'大'},{c:'飞', m:'live-float', o:'🕊️', han:'飞'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'一( )叶子',a:'片',fx:'🍃'},{q:'大雁往( )飞',a:'南',fx:'🕊️'}]},
    { kind:'summary', text:'秋天天气凉了，树叶黄了，大雁往南飞。'}
  ]},
  { file:'ke-xiao-chuan.html', title:'小小的船', tag:'课文', sub:'弯弯的月儿', bg:['🌙','⭐','🚤','💧'], slides:[
    { kind:'cover', title:'小小的船', lead:'弯弯的月儿小小的船'},
    { kind:'poem', label:'读一读', head:'小小的船', lines:['弯弯的月儿小小的船，', '小小的船儿两头尖。', '我在小小的船里坐，', '只看见闪闪的星星蓝蓝的天。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'船', m:'live-bob', o:'⛵', han:'船'},{c:'弯', m:'live-spin', o:'🌙', han:'弯'},
      {c:'两', m:'live-pulse', o:'✌️', han:'两'},{c:'头', m:'live-hop', o:'🔝', han:'头'},
      {c:'尖', m:'live-bob', o:'🔺', han:'尖'},{c:'星', m:'live-float', o:'⭐', han:'星'},
      {c:'闪', m:'live-pulse', o:'✨', han:'闪'},{c:'蓝', m:'live-hop', o:'💙', han:'蓝'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'弯弯的( )',a:'月儿',fx:'🌙'},{q:'闪闪的( )',a:'星星',fx:'⭐'}]},
    { kind:'summary', text:'把月儿比作小船，弯弯的两头尖尖。'}
  ]},
  { file:'ke-jiang-nan.html', title:'江南', tag:'课文', sub:'江南可采莲', bg:['🌸','🐟','🌿','💧'], slides:[
    { kind:'cover', title:'江南', lead:'江南可采莲'},
    { kind:'poem', label:'读一读', head:'江南', lines:['江南可采莲，', '莲叶何田田。', '鱼戏莲叶间。', '鱼戏莲叶东，', '鱼戏莲叶西，', '鱼戏莲叶南，', '鱼戏莲叶北。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'江', m:'live-float', o:'🌊', han:'江'},{c:'南', m:'live-bob', o:'🧭', han:'南'},
      {c:'可', m:'live-pulse', o:'👍', han:'可'},{c:'采', m:'live-hop', o:'✋', han:'采'},
      {c:'莲', m:'live-spin', o:'🌸', han:'莲'},{c:'鱼', m:'live-bob', o:'🐟', han:'鱼'},
      {c:'东', m:'live-pulse', o:'➡️', han:'东'},{c:'西', m:'live-hop', o:'⬅️', han:'西'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'鱼戏莲叶',a:'间',fx:'🐟'},{q:'( )南可采莲',a:'江',fx:'🌸'}]},
    { kind:'summary', text:'汉乐府古诗，鱼儿在莲叶间游来游去。'}
  ]},
  { file:'ke-si-ji.html', title:'四季', tag:'课文', sub:'春夏秋冬', bg:['🌸','☀️','🍂','❄️'], slides:[
    { kind:'cover', title:'四季', lead:'草芽尖尖，他对小鸟说'},
    { kind:'poem', label:'读一读', head:'四季', lines:['草芽尖尖，他对小鸟说："我是春天。"', '荷叶圆圆，他对青蛙说："我是夏天。"', '谷穗弯弯，他鞠着躬说："我是秋天。"', '雪人大肚子一挺，他顽皮地说："我就是冬天。"']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'四', m:'live-pulse', o:'4️⃣', han:'四'},{c:'季', m:'live-bob', o:'🌿', han:'季'},
      {c:'尖', m:'live-hop', o:'🔺', han:'尖'},{c:'说', m:'live-float', o:'💬', han:'说'},
      {c:'春', m:'live-spin', o:'🌸', han:'春'},{c:'夏', m:'live-bob', o:'☀️', han:'夏'},
      {c:'秋', m:'live-pulse', o:'🍂', han:'秋'},{c:'冬', m:'live-hop', o:'❄️', han:'冬'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'( )芽尖尖',a:'草',fx:'🌱'},{q:'( )叶圆圆',a:'荷',fx:'🍃'}]},
    { kind:'summary', text:'四季分别用不同的景物代表，春天草芽、夏天荷叶、秋天谷穗、冬天雪人。'}
  ]},
  { file:'ke-ying-zi.html', title:'影子', tag:'课文', sub:'影子在前', bg:['👤','☀️','🌟','💧'], slides:[
    { kind:'cover', title:'影子', lead:'影子在前，影子在后'},
    { kind:'poem', label:'读一读', head:'影子', lines:['影子在前，', '影子在后，', '影子常常跟着我，', '就像一条小黑狗。', '影子在左，', '影子在右，', '影子常常陪着我，', '它是我的好朋友。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'影', m:'live-float', o:'👤', han:'影'},{c:'前', m:'live-bob', o:'👈', han:'前'},
      {c:'后', m:'live-pulse', o:'👉', han:'后'},{c:'黑', m:'live-hop', o:'⬛', han:'黑'},
      {c:'狗', m:'live-spin', o:'🐕', han:'狗'},{c:'左', m:'live-bob', o:'👈', han:'左'},
      {c:'右', m:'live-pulse', o:'👉', han:'右'},{c:'朋', m:'live-float', o:'🧑', han:'朋'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'影子像一条',a:'小黑狗',fx:'🐕'},{q:'影子是我的',a:'好朋友',fx:'💕'}]},
    { kind:'summary', text:'影子一直跟着我们，就像好朋友一样。'}
  ]},
  { file:'ke-bi-wei-ba.html', title:'比尾巴', tag:'课文', sub:'谁的尾巴长', bg:['🐒','🐰','🦚','💧'], slides:[
    { kind:'cover', title:'比尾巴', lead:'谁的尾巴长？'},
    { kind:'poem', label:'读一读', head:'比尾巴', lines:['谁的尾巴长？', '谁的尾巴短？', '谁的尾巴好像一把伞？', '猴子的尾巴长。', '兔子的尾巴短。', '松鼠的尾巴好像一把伞。', '谁的尾巴弯？', '谁的尾巴扁？', '谁的尾巴最好看？', '公鸡的尾巴弯。', '鸭子的尾巴扁。', '孔雀的尾巴最好看。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'比', m:'live-pulse', o:'⚖️', han:'比'},{c:'尾', m:'live-float', o:'🦊', han:'尾'},
      {c:'巴', m:'live-bob', o:'🤏', han:'巴'},{c:'长', m:'live-hop', o:'📏', han:'长'},
      {c:'短', m:'live-spin', o:'📏', han:'短'},{c:'伞', m:'live-pulse', o:'☂️', han:'伞'},
      {c:'公', m:'live-bob', o:'🐓', han:'公'},{c:'鸭', m:'live-float', o:'🦆', han:'鸭'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'谁的尾巴长？',a:'猴子',fx:'🐒'},{q:'谁的尾巴最好看？',a:'孔雀',fx:'🦚'}]},
    { kind:'summary', text:'一问一答的方式写尾巴，猴子的长、兔子的短、孔雀的最好看。'}
  ]},
  { file:'ke-qingwa.html', title:'青蛙写诗', tag:'课文', sub:'下雨了', bg:['🐸','🌧️','📝','💧'], slides:[
    { kind:'cover', title:'青蛙写诗', lead:'下雨了，雨点儿淅沥沥'},
    { kind:'poem', label:'读一读', head:'青蛙写诗', lines:['下雨了，', '雨点儿淅沥沥，沙啦啦。', '青蛙说："我要写诗啦！"', '小蝌蚪游过来说：', '"我要给你当个小逗号。"', '池塘里的水泡泡说：', '"我能给你当个小句号。"', '荷叶上的一串水珠说：', '"我们可以当省略号。"']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'诗', m:'live-float', o:'📜', han:'诗'},{c:'雨', m:'live-bob', o:'🌧️', han:'雨'},
      {c:'点', m:'live-pulse', o:'💧', han:'点'},{c:'要', m:'live-hop', o:'🙋', han:'要'},
      {c:'过', m:'live-spin', o:'➡️', han:'过'},{c:'给', m:'live-bob', o:'🤲', han:'给'},
      {c:'当', m:'live-pulse', o:'🎯', han:'当'},{c:'串', m:'live-float', o:'📿', han:'串'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'小蝌蚪当',a:'逗号',fx:'🐸'},{q:'水泡泡当',a:'句号',fx:'🫧'}]},
    { kind:'summary', text:'用标点符号做比喻，小蝌蚪是逗号、水泡泡是句号。'}
  ]},
  { file:'ke-yu-dianr.html', title:'雨点儿', tag:'课文', sub:'数不清的雨点儿', bg:['🌧️','💧','🌱','🌟'], slides:[
    { kind:'cover', title:'雨点儿', lead:'数不清的雨点儿'},
    { kind:'poem', label:'读一读', head:'雨点儿', lines:['数不清的雨点儿，', '从云彩里飘落下来。', '半空中，大雨点儿问小雨点儿：', '"你要到哪里去？"', '小雨点儿回答：', '"我要去有花有草的地方。', '你呢？"', '大雨点儿说：', '"我要去没有花没有草的地方。"']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'数', m:'live-pulse', o:'🔢', han:'数'},{c:'清', m:'live-float', o:'🔍', han:'清'},
      {c:'云', m:'live-bob', o:'☁️', han:'云'},{c:'彩', m:'live-hop', o:'🌈', han:'彩'},
      {c:'飘', m:'live-float', o:'🍃', han:'飘'},{c:'问', m:'live-spin', o:'❓', han:'问'},
      {c:'回', m:'live-pulse', o:'🔄', han:'回'},{c:'方', m:'live-bob', o:'🟫', han:'方'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'( )不清的雨点儿',a:'数',fx:'💧'},{q:'从( )里飘落',a:'云彩',fx:'☁️'}]},
    { kind:'summary', text:'雨点儿虽然小，却能让花草生长。'}
  ]},
  { file:'ke-yuan-zu.html', title:'明天要远足', tag:'课文', sub:'翻过来翻过去', bg:['🎒','🌄','👣','💧'], slides:[
    { kind:'cover', title:'明天要远足', lead:'翻过来，翻过去'},
    { kind:'poem', label:'读一读', head:'明天要远足', lines:['翻过来，', '翻过去，', '唉——', '睡不着。', '那地方的海，', '真的像老师说的那么多种颜色吗？', '翻过来，', '翻过去，', '唉——', '到底什么时候才天亮呢？']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'明', m:'live-float', o:'🌅', han:'明'},{c:'远', m:'live-bob', o:'🚶', han:'远'},
      {c:'睡', m:'live-pulse', o:'😴', han:'睡'},{c:'那', m:'live-hop', o:'👉', han:'那'},
      {c:'海', m:'live-spin', o:'🌊', han:'海'},{c:'真', m:'live-bob', o:'✅', han:'真'},
      {c:'老', m:'live-pulse', o:'👴', han:'老'},{c:'师', m:'live-float', o:'👩‍🏫', han:'师'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'( )过来翻过去',a:'翻',fx:'😴'},{q:'( )时候天亮',a:'什么',fx:'🌅'}]},
    { kind:'summary', text:'小朋友因为期待明天远足，兴奋得睡不着觉。'}
  ]},
  { file:'ke-da-hai-shi-xiao.html', title:'大还是小', tag:'课文', sub:'有时候，我觉得自己很大', bg:['👤','👶','🧑','💧'], slides:[
    { kind:'cover', title:'大还是小', lead:'有时候，我觉得自己很大'},
    { kind:'poem', label:'读一读', head:'大还是小', lines:['有时候，我觉得自己很大。', '我自己穿衣服的时候，', '我自己系鞋带的时候，', '我觉得自己很大。', '有时候，我觉得自己很小。', '我够不到门铃的时候，', '我害怕打雷的时候，', '我觉得自己很小。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'时', m:'live-float', o:'⏰', han:'时'},{c:'候', m:'live-bob', o:'⌛', han:'候'},
      {c:'觉', m:'live-pulse', o:'💭', han:'觉'},{c:'得', m:'live-hop', o:'👌', han:'得'},
      {c:'自', m:'live-spin', o:'🙋', han:'自'},{c:'己', m:'live-bob', o:'👤', han:'己'},
      {c:'衣', m:'live-pulse', o:'👕', han:'衣'},{c:'服', m:'live-float', o:'👔', han:'服'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'自己穿( )',a:'衣服',fx:'👕'},{q:'自己( )鞋带',a:'系',fx:'👟'}]},
    { kind:'summary', text:'自己能做事的时候觉得自己很大，需要帮助的时候又觉得自己很小。'}
  ]},
  { file:'ke-xiang-lian.html', title:'项链', tag:'课文', sub:'大海蓝蓝的', bg:['🌊','🐚','🏖️','💧'], slides:[
    { kind:'cover', title:'项链', lead:'大海蓝蓝的，又宽又远'},
    { kind:'poem', label:'读一读', head:'项链', lines:['大海，蓝蓝的，又宽又远。', '沙滩，黄黄的，又长又软。', '雪白雪白的浪花，', '哗哗地笑着，', '涌向沙滩，', '悄悄撒下小小的海螺和贝壳。', '小娃娃嘻嘻地笑着，', '迎上去，', '捡起小小的海螺和贝壳，', '串成彩色的项链，', '挂在自己的胸前。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'蓝', m:'live-float', o:'💙', han:'蓝'},{c:'宽', m:'live-bob', o:'↔️', han:'宽'},
      {c:'沙', m:'live-pulse', o:'🏖️', han:'沙'},{c:'浪', m:'live-hop', o:'🌊', han:'浪'},
      {c:'笑', m:'live-spin', o:'😄', han:'笑'},{c:'洒', m:'live-bob', o:'💧', han:'洒'},
      {c:'捡', m:'live-pulse', o:'🤲', han:'捡'},{c:'挂', m:'live-float', o:'📿', han:'挂'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'大海( )的',a:'蓝蓝',fx:'🌊'},{q:'沙滩( )的',a:'黄黄',fx:'🏖️'}]},
    { kind:'summary', text:'用贝壳海螺串成的"项链"，是大海送给小娃娃的礼物。'}
  ]},
  { file:'ke-xue-di.html', title:'雪地里的小画家', tag:'课文', sub:'下雪啦', bg:['❄️','☃️','🎨','💧'], slides:[
    { kind:'cover', title:'雪地里的小画家', lead:'下雪啦，下雪啦！'},
    { kind:'poem', label:'读一读', head:'雪地里的小画家', lines:['下雪啦，下雪啦！', '雪地里来了一群小画家。', '小鸡画竹叶，', '小狗画梅花，', '小鸭画枫叶，', '小马画月牙。', '不用颜料不用笔，', '几步就成一幅画。', '青蛙为什么没参加？', '它在洞里睡着啦。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'雪', m:'live-float', o:'❄️', han:'雪'},{c:'群', m:'live-bob', o:'👥', han:'群'},
      {c:'竹', m:'live-pulse', o:'🎋', han:'竹'},{c:'画', m:'live-hop', o:'🎨', han:'画'},
      {c:'梅', m:'live-spin', o:'🌸', han:'梅'},{c:'枫', m:'live-bob', o:'🍁', han:'枫'},
      {c:'笔', m:'live-pulse', o:'✏️', han:'笔'},{c:'睡', m:'live-float', o:'😴', han:'睡'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'小鸡画',a:'竹叶',fx:'🐤'},{q:'小狗画',a:'梅花',fx:'🐕'}]},
    { kind:'summary', text:'小动物们的脚印就是最美的画，青蛙在冬眠所以没参加。'}
  ]},
  { file:'ke-wuya.html', title:'乌鸦喝水', tag:'课文', sub:'一只乌鸦口渴了', bg:['🐦‍⬛','🪨','💧','🌟'], slides:[
    { kind:'cover', title:'乌鸦喝水', lead:'一只乌鸦口渴了'},
    { kind:'poem', label:'读一读', head:'乌鸦喝水', lines:['一只乌鸦口渴了，', '到处找水喝。', '乌鸦看见一个瓶子，', '瓶子里有水。', '但是，瓶子里水不多，', '瓶口又小，', '乌鸦喝不着水。', '怎么办呢？', '乌鸦看见旁边有许多小石子，', '想出办法来了。', '乌鸦把小石子一颗一颗地放进瓶子里。', '瓶子里的水渐渐升高，', '乌鸦就喝着水了。']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'乌', m:'live-float', o:'🐦‍⬛', han:'乌'},{c:'鸦', m:'live-bob', o:'🐦', han:'鸦'},
      {c:'渴', m:'live-pulse', o:'💧', han:'渴'},{c:'瓶', m:'live-hop', o:'🍶', han:'瓶'},
      {c:'办', m:'live-spin', o:'💡', han:'办'},{c:'旁', m:'live-bob', o:'👈', han:'旁'},
      {c:'放', m:'live-pulse', o:'👇', han:'放'},{c:'进', m:'live-float', o:'⬇️', han:'进'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'乌鸦( )石子',a:'放',fx:'🪨'},{q:'水渐渐( )',a:'升高',fx:'⬆️'}]},
    { kind:'summary', text:'乌鸦用小石子让水面升高，真聪明！遇到问题要想办法。'}
  ]},
  { file:'ke-xiao-wo-niu.html', title:'小蜗牛', tag:'课文', sub:'蜗牛一家', bg:['🐌','🌿','🌸','💧'], slides:[
    { kind:'cover', title:'小蜗牛', lead:'蜗牛一家住在小树林的旁边'},
    { kind:'poem', label:'读一读', head:'小蜗牛', lines:['蜗牛一家住在小树林的旁边。', '春天来了，蜗牛妈妈对小蜗牛说：', '"孩子，到小树林里去玩吧！"', '小蜗牛爬呀，爬呀，', '好久才爬回来。', '它说："妈妈，小树长满了叶子，碧绿碧绿的。"', '夏天，小蜗牛又去玩，', '回来说："草莓没有了，地上长着蘑菇。"', '秋天，小蜗牛回来说：', '"蘑菇没有了，地上盖着雪。"', '原来它爬得太慢了！']},
    { kind:'recognize', label:'认一认', head:'会认字', cards:[
      {c:'蜗', m:'live-float', o:'🐌', han:'蜗'},{c:'家', m:'live-bob', o:'🏠', han:'家'},
      {c:'林', m:'live-pulse', o:'🌲', han:'林'},{c:'孩', m:'live-hop', o:'👶', han:'孩'},
      {c:'爬', m:'live-spin', o:'🐛', han:'爬'},{c:'久', m:'live-bob', o:'⏳', han:'久'},
      {c:'盖', m:'live-pulse', o:'🎁', han:'盖'},{c:'慢', m:'live-float', o:'🐢', han:'慢'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'小蜗牛爬得',a:'太慢了',fx:'🐌'},{q:'春天( )了',a:'来',fx:'🌸'}]},
    { kind:'summary', text:'小蜗牛爬得太慢，等它回来季节都变了！真有趣。'}
  ]},

  // ====== 位置 3 课 ======
  { file:'wei-shang-xia.html', title:'上 下', tag:'数学·位置', sub:'谁在上面？', bg:['⬆️','⬇️','📦','🌟'], slides:[
    { kind:'cover', title:'上 下', lead:'看一看，谁在上面，谁在下面？'},
    { kind:'recognize', label:'认一认', head:'上 下', cards:[
      {c:'上', m:'live-float', o:'⬆️', han:'上'},
      {c:'下', m:'live-bob', o:'⬇️', han:'下'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'小鸟在树的( )面',a:'上',fx:'🐦'},{q:'小草在地的( )面',a:'上',fx:'🌱'},{q:'石头在水的( )面',a:'下',fx:'🪨'}]},
    { kind:'summary', text:'在高处的叫"上"，在低处的叫"下"。'}
  ]},
  { file:'wei-qian-hou.html', title:'前 后', tag:'数学·位置', sub:'谁在前面？', bg:['👈','👉','🚶','🌟'], slides:[
    { kind:'cover', title:'前 后', lead:'看一看，谁在前面，谁在后面？'},
    { kind:'recognize', label:'认一认', head:'前 后', cards:[
      {c:'前', m:'live-pulse', o:'👈', han:'前'},
      {c:'后', m:'live-hop', o:'👉', han:'后'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'排队时最( )面的人先走',a:'前',fx:'🚶'},{q:'教室( )面有黑板',a:'前',fx:'📝'}]},
    { kind:'summary', text:'面对的方向叫"前"，背对的方向叫"后"。'}
  ]},
  { file:'wei-zuo-you.html', title:'左 右', tag:'数学·位置', sub:'左手和右手', bg:['👈','👉','✋','🌟'], slides:[
    { kind:'cover', title:'左 右', lead:'举起你的左手和右手'},
    { kind:'recognize', label:'认一认', head:'左 右', cards:[
      {c:'左', m:'live-bob', o:'👈', han:'左'},
      {c:'右', m:'live-spin', o:'👉', han:'右'}
    ]},
    { kind:'practice', head:'练一练', items:[{q:'写字用( )手',a:'右',fx:'✍️'},{q:'举手用( )手',a:'右',fx:'🙋'},{q:'心脏在身体( )边',a:'左',fx:'❤️'}]},
    { kind:'summary', text:'写字的手是右手，另一边是左手。分清左右！'}
  ]},

  // ====== 语文园地 8 课 ======
  { file:'yuwen-yuandi-1.html', title:'语文园地一', tag:'语文园地', sub:'识字加油站', bg:['📚','🌟','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地一', lead:'复习识字一'},
    { kind:'recognize', label:'识字加油站', head:'一片两片三四片', cards:[
      {c:'六', m:'live-pulse', o:'6️⃣', han:'六'},{c:'七', m:'live-bob', o:'7️⃣', han:'七'},
      {c:'八', m:'live-hop', o:'8️⃣', han:'八'},{c:'九', m:'live-spin', o:'9️⃣', han:'九'},
      {c:'十', m:'live-float', o:'🔟', han:'十'}
    ]},
    { kind:'poem', label:'日积月累', head:'咏鹅', lines:['鹅，鹅，鹅，', '曲项向天歌。', '白毛浮绿水，', '红掌拨清波。']},
    { kind:'summary', text:'骆宾王的《咏鹅》，数数看看，一首诗里有几只鹅？'}
  ]},
  { file:'yuwen-yuandi-2.html', title:'语文园地二', tag:'语文园地', sub:'用拼音', bg:['📚','🔤','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地二', lead:'复习拼音'},
    { kind:'pinyin', label:'用拼音', head:'按顺序读', items:[
      {py:'b p m f', eg:'声母', han:'bpmf'},{py:'d t n l', eg:'声母', han:'dtnl'},
      {py:'g k h', eg:'声母', han:'gkh'},{py:'j q x', eg:'声母', han:'jqx'},
      {py:'z c s', eg:'平舌音', han:'zcs'},{py:'zh ch sh r', eg:'翘舌音', han:'zhchshr'}
    ]},
    { kind:'practice', head:'比一比', items:[{q:'z-zh',a:'平舌vs翘舌',fx:'👅'},{q:'c-ch',a:'平舌vs翘舌',fx:'👅'},{q:'s-sh',a:'平舌vs翘舌',fx:'👅'}]},
    { kind:'summary', text:'平舌音舌尖抵牙齿，翘舌音舌尖卷起来。'}
  ]},
  { file:'yuwen-yuandi-3.html', title:'语文园地三', tag:'语文园地', sub:'字词句运用', bg:['📚','✏️','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地三', lead:'字词句运用'},
    { kind:'words', label:'读一读', head:'比一比，读一读', items:[
      {c:'车', w:['火车','汽车']},{c:'门', w:['大门','门口']},
      {c:'水', w:['河水','开水']},{c:'火', w:['大火','火苗']}
    ]},
    { kind:'poem', label:'日积月累', head:'画', lines:['远看山有色，', '近听水无声。', '春去花还在，', '人来鸟不惊。']},
    { kind:'summary', text:'王维的《画》，诗中藏着谜语——你猜出画的是什么了吗？'}
  ]},
  { file:'yuwen-yuandi-4.html', title:'语文园地四', tag:'语文园地', sub:'字词句运用', bg:['📚','✏️','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地四', lead:'复习拼音和字词'},
    { kind:'recognize', label:'识字加油站', head:'大小多少', cards:[
      {c:'大', m:'live-pulse', o:'🦣', han:'大'},{c:'小', m:'live-bob', o:'🐭', han:'小'},
      {c:'多', m:'live-hop', o:'🌟', han:'多'},{c:'少', m:'live-spin', o:'🔹', han:'少'}
    ]},
    { kind:'poem', label:'日积月累', head:'悯农(其二)', lines:['锄禾日当午，', '汗滴禾下土。', '谁知盘中餐，', '粒粒皆辛苦。']},
    { kind:'summary', text:'李绅的《悯农》，要珍惜粮食，每一粒都来之不易。'}
  ]},
  { file:'yuwen-yuandi-5.html', title:'语文园地五', tag:'语文园地', sub:'我的发现', bg:['📚','🔍','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地五', lead:'我的发现'},
    { kind:'recognize', label:'识字加油站', head:'读一读', cards:[
      {c:'花', m:'live-float', o:'🌸', han:'花'},{c:'草', m:'live-bob', o:'🌿', han:'草'},
      {c:'树', m:'live-hop', o:'🌳', han:'树'},{c:'林', m:'live-spin', o:'🌲', han:'林'},
      {c:'明', m:'live-pulse', o:'☀️', han:'明'},{c:'尖', m:'live-bob', o:'🔺', han:'尖'},
      {c:'尘', m:'live-float', o:'💨', han:'尘'},{c:'从', m:'live-hop', o:'👥', han:'从'}
    ]},
    { kind:'poem', label:'日积月累', head:'风', lines:['解落三秋叶，', '能开二月花。', '过江千尺浪，', '入竹万竿斜。']},
    { kind:'summary', text:'李峤的《风》，风看不见摸不着，但诗里写得真生动。'}
  ]},
  { file:'yuwen-yuandi-6.html', title:'语文园地六', tag:'语文园地', sub:'字词句运用', bg:['📚','✏️','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地六', lead:'字词句运用'},
    { kind:'recognize', label:'识字加油站', head:'前后左右', cards:[
      {c:'前', m:'live-pulse', o:'👈', han:'前'},{c:'后', m:'live-bob', o:'👉', han:'后'},
      {c:'左', m:'live-hop', o:'👈', han:'左'},{c:'右', m:'live-spin', o:'👉', han:'右'},
      {c:'东', m:'live-float', o:'🌅', han:'东'},{c:'西', m:'live-bob', o:'🌇', han:'西'}
    ]},
    { kind:'poem', label:'日积月累', head:'古朗月行(节选)', lines:['小时不识月，', '呼作白玉盘。', '又疑瑶台镜，', '飞在青云端。']},
    { kind:'summary', text:'李白的诗，把月亮比作白玉盘，想象真奇妙。'}
  ]},
  { file:'yuwen-yuandi-7.html', title:'语文园地七', tag:'语文园地', sub:'我的发现', bg:['📚','🔍','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地七', lead:'我的发现'},
    { kind:'words', label:'识字加油站', head:'读一读', items:[
      {c:'哥', w:['哥哥','大哥']},{c:'姐', w:['姐姐','大姐']},
      {c:'弟', w:['弟弟','小弟']},{c:'叔', w:['叔叔','大叔']},
      {c:'爷', w:['爷爷','老爷']}
    ]},
    { kind:'poem', label:'日积月累', head:'种瓜得瓜', lines:['种瓜得瓜，', '种豆得豆。', '前人栽树，', '后人乘凉。', '千里之行，', '始于足下。']},
    { kind:'summary', text:'这些谚语告诉我们：付出什么收获什么，做事要从第一步开始。'}
  ]},
  { file:'yuwen-yuandi-8.html', title:'语文园地八', tag:'语文园地', sub:'识字加油站', bg:['📚','🌟','💧','🍃'], slides:[
    { kind:'cover', title:'语文园地八', lead:'期末复习'},
    { kind:'recognize', label:'识字加油站', head:'学校', cards:[
      {c:'学', m:'live-pulse', o:'🏫', han:'学'},{c:'校', m:'live-bob', o:'🎒', han:'校'},
      {c:'老', m:'live-hop', o:'👴', han:'老'},{c:'师', m:'live-spin', o:'👩‍🏫', han:'师'},
      {c:'工', m:'live-float', o:'🔧', han:'工'},{c:'厂', m:'live-bob', o:'🏭', han:'厂'},
      {c:'医', m:'live-pulse', o:'🏥', han:'医'},{c:'院', m:'live-hop', o:'🚑', han:'院'}
    ]},
    { kind:'poem', label:'日积月累', head:'春节童谣', lines:['小孩小孩你别馋，', '过了腊八就是年。', '腊八粥，喝几天，', '哩哩啦啦二十三。']},
    { kind:'summary', text:'春节童谣，过年的习俗从腊八就开始了。这学期学了好多字，真棒！'}
  ]},

  // ====== 口语交际 4 课 + 快乐读书吧 ======
  { file:'ky-wo-shuo-ni-zuo.html', title:'我说你做', tag:'口语交际', sub:'你说我做', bg:['💬','🤝','🌟','💧'], slides:[
    { kind:'cover', title:'我说你做', lead:'一个人说，一个人做'},
    { kind:'poem', label:'玩一玩', head:'游戏规则', lines:['一个人发出指令，', '比如"请你站起来"。', '另一个人听到后，', '马上照做。', '会听、会做，', '才是聪明的孩子！']},
    { kind:'practice', head:'练一练', items:[{q:'请你拍拍手',a:'👏',fx:'✅'},{q:'请你摸摸头',a:'👋',fx:'✅'},{q:'请你转一圈',a:'🔄',fx:'🌟'}]},
    { kind:'summary', text:'认真听，马上做，做个会听话的好孩子。'}
  ]},
  { file:'ky-zuo-peng-you.html', title:'我们做朋友', tag:'口语交际', sub:'交朋友', bg:['🧑','🤝','🌟','💧'], slides:[
    { kind:'cover', title:'我们做朋友', lead:'你好，我们做朋友吧！'},
    { kind:'poem', label:'学一学', head:'自我介绍', lines:['大家好！', '我叫 _____ 。', '我喜欢 _____ 。', '我们一起做朋友吧！']},
    { kind:'practice', head:'练一练', items:[{q:'你叫什么名字？',a:'说说看',fx:'💬'},{q:'你喜欢什么？',a:'说说看',fx:'🎨'},{q:'我们一起玩吧！',a:'好呀！',fx:'🤝'}]},
    { kind:'summary', text:'勇敢地说出你的名字和喜欢的事，就能交到好朋友。'}
  ]},
  { file:'ky-yong-sheng-yin.html', title:'用多大的声音', tag:'口语交际', sub:'声音大小', bg:['🔊','🤫','📢','💧'], slides:[
    { kind:'cover', title:'用多大的声音', lead:'什么时候大声，什么时候小声？'},
    { kind:'poem', label:'想一想', head:'不同场合', lines:['在教室发言——声音响亮。', '在图书馆看书——声音轻轻。', '在操场上喊人——大声一点。', '跟老师说悄悄话——小声一点。']},
    { kind:'practice', head:'练一练', items:[{q:'在教室回答',a:'声音响亮',fx:'📢'},{q:'在图书馆',a:'轻轻说话',fx:'🤫'},{q:'喊远处朋友',a:'大声喊',fx:'🔊'}]},
    { kind:'summary', text:'不同场合用不同的声音，做个有礼貌的小朋友。'}
  ]},
  { file:'ky-xiao-tu-yun-nan-gua.html', title:'小兔运南瓜', tag:'口语交际', sub:'想办法', bg:['🐰','🎃','💡','🌟'], slides:[
    { kind:'cover', title:'小兔运南瓜', lead:'小兔怎么把南瓜运回家？'},
    { kind:'poem', label:'想一想', head:'动脑筋', lines:['小兔在菜园里，', '摘了一个大南瓜。', '南瓜太重了，', '小兔搬不动。', '你有什么好办法，', '帮小兔把南瓜运回家？']},
    { kind:'practice', head:'你的办法', items:[{q:'用小车推',a:'好办法',fx:'🛒'},{q:'请朋友帮忙',a:'好办法',fx:'🤝'},{q:'把南瓜滚回去',a:'太棒了',fx:'🌟'}]},
    { kind:'summary', text:'遇到困难动脑筋想办法，也可以请别人帮忙。'}
  ]},
  { file:'yuwen-kuai-le-du-shu.html', title:'读书真快乐', tag:'快乐读书吧', sub:'我爱读书', bg:['📖','🌟','📚','💧'], slides:[
    { kind:'cover', title:'读书真快乐', lead:'和大人一起读'},
    { kind:'poem', label:'读一读', head:'小松鼠找花生', lines:['大树旁边的地里种了许多花生。', '小松鼠想：等花生结了果，我就去摘下来，留着冬天吃。', '可是，等啊等啊，等到花都落了，也没看见一个花生。', '小松鼠感到很奇怪：花生被谁摘走了呢？']},
    { kind:'practice', head:'想一想', items:[{q:'花生长在哪里？',a:'地下',fx:'🥜'},{q:'喜欢读书吗？',a:'喜欢！',fx:'📖'}]},
    { kind:'summary', text:'读书可以知道很多有趣的事，和爸爸妈妈一起读吧！'}
  ]}
];
