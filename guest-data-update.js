// 2026-08-11 最新座位資訊更新層。
// 以 guest-data.js 為基礎，只覆蓋本次變動項目，降低大量名單重寫造成的錯誤風險。
(function () {
  const guests = Array.isArray(window.GUESTS) ? window.GUESTS : [];

  const removeNames = new Set([
    '劉順正-1','許昭毓-1','劉青青','陳朝洋女朋友','武廷女朋友','司立偉太太',
    '蔡依璇','廖致淵太太','廖致淵小孩 嬰兒椅','廖恩宇太太'
  ]);

  const rename = new Map([
    ['宋餅餅（狗）','宋餅餅'],
    ['史奎謙','史奎謙 叔叔'],
    ['徐世安','徐世安 姑丈'],
    ['王瓊雪','王瓊雪 姑姑'],
    ['徐慧敏','徐慧敏 阿姨'],
    ['徐育老婆','Sylvie']
  ]);

  const updates = new Map([
    ['劉順正',{seat:'兩位'}],
    ['許昭毓',{seat:'兩位'}],
    ['李珣廷',{note:'天中10003'}],
    ['呂嘉祥(葉皓云)',{note:'天中10003'}],
    ['吳宗儒',{note:'天中10003'}],
    ['洪喬渝',{note:'天中10003'}],
    ['蔣珮珊老師',{seat:'兩位',note:'天中10003'}],
    ['朱丞恩',{note:'天中10003'}],
    ['陳奕同',{seat:'兩位'}],
    ['陳朝洋',{seat:'兩位'}],
    ['武廷',{seat:'兩位'}],
    ['司立偉',{seat:'兩位'}],
    ['周昀辰',{seat:'4大1小'}],
    ['黃柏堅',{seat:'兩位'}],
    ['周惠美 姨婆',{seat:'兩位'}],
    ['林亦飛',{seat:'兩位'}],
    ['廖致淵',{seat:'兩位大人 一位小孩'}],
    ['Gray Chen',{note:'碩軟'}],
    ['林子琦 Vivien Lin',{note:'碩軟'}],
    ['Angela Liaw',{note:'碩軟'}],
    ['陳韋丞 Jackie Chen',{note:'碩軟'}],
    ['黃祺雯',{note:'上海培訓夥伴'}],
    ['張紜慈 (Xenia Chang)',{note:'上海培訓夥伴'}],
    ['廖恩宇',{seat:'兩位'}]
  ]);

  window.GUESTS = guests
    .filter(g => !removeNames.has(g.name))
    .map(g => {
      const next = {...g};
      if (rename.has(next.name)) next.name = rename.get(next.name);
      const patch = updates.get(next.name);
      if (patch) Object.assign(next, patch);
      return next;
    });
})();
