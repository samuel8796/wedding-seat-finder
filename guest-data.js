// 2026-11-22 林亦飛與蔡依璇婚禮賓客座位資料
// 依照原 Excel 每桌座位表順序匯入，重複姓名合併但保留編號及人數。
// 兒童椅列另行處理；不對外公開原表的工作人員、餐食及酒水註記。
const TABLE_ROWS = String.raw`
主桌|林亦飛,林照川,徐慧君,郭秀真,林照雄,徐周晴美,蔡依璇,蔡政哲,陳俐臻,蔡明勳,蔡明晃
A1|吳尚修,吳尚修,吳尚修,施東陞,施東陞,林朝成,林朝成,林朝焜,劉福田,陳政雄,陳政雄
A2|吳孟勲,吳孟禧,王良泰,鹿台順,陳金福,陳忠源,陳忠源,李永騰,許東益,林立文,林立文太太
A3|廖斌伸,廖斌伸,陳建甫,陳建甫,子毓,承夢,黃承章,邱顯順,邱顯順,吳炫東,吳炫東
A5|陳俊隆,陳俊隆,蔡裕成,蔡裕成,張裕傑,張裕傑,李姿瑩,林智茵,劉帥東,劉帥東,魯非凡
A6|劉尊賢,劉尊賢,徐善治,徐善治,鄭文賢,鄭文賢,江秉璁,江秉璁,許俊宏,許俊宏
B1|蔡岳廷,蔡岳廷,蔡宜珍,蔡宜珍,陳恒民,陳恒民,陳恒民
B2|王志偉,王志偉,曾祺成,楊木全,郭順,林立武,甘明村,甘明村,蔡育志,蔡育志,施富乾
B3|王逸修,王逸修,王逸修,李志忠,柯嘉琳,李芷褕,吳志孝,吳志孝,江仲偉,江仲偉
B5|李嘉錠,趙仁偉,趙仁偉,李俊雄,李俊雄,李俊雄,戴宇明,林子軒,雷國順,雷國順
B6|葉元韶,葉元韶,張定華,董倫民,陳宏翼,陳宏翼,張海濱,張海濱,劉穎傑,劉穎傑
C1|陳家火,陳家火,江秀琴,李月華,陳椿樺,陳椿樺,陳素貞,陳麗君,陳麗君,陳麗秋,邱宥庭
C2|黃詠昕,黃詠昀,黃家佳,黃家佳,陳沛辰,陳沛辰,吳愷哲,吳愷哲,曾珈琳,曾珈琳
C3|鄭閔,葉于瑄,葉于瑄,李苡寧,吳承燁,吳承燁,黃博仁,黃博仁,簡憶婷
C5|吳采轅,林俐君,王純真,王純真,洪肅翎,林巧倫,謝立新,張彥儒,吳亭萱,吳亭萱
C6|鄭勝彰,湯嘉祐,湯嘉祐,游永泰,游永泰,梁崴翔,王以叡,李文禮,陳逸安,陳逸安
D1|張哲平,熊厚基,董培倫,董培倫,李允堅,李允堅,鄒其德,鄒其德,許嘉康,許嘉康
D2|林光清,林基煌,林澂河,林澂河,林信宏,林信宏,吳杏先,吳杏先,吳杏先,劉守國
D3|蔡岸鐘,徐慧芬,王俊仁,顏義峰,顏義峰,徐世安,徐世安,徐慧貞,徐慧娟,史百誠
D5|李冠逸,李冠逸,傅子軒,許庭瑄,許庭瑄,高從軒,高筱薇,高從智,林宥利,徐侑岑,傅子軒
D6|黃乙禾,阿方,阿方,楊士潁,黃怡靜,黃怡靜,史長語,史長杰,徐育,徐育
E1|黃海彬,黃海彬,胡栢墩,胡栢墩,王裕煒,王裕煒,謝坤成,莊雯苑,張榮州,張榮州
E2|二哥,二嫂,昀暄,宇彣,曾國雄,曾國雄,郭麗美,郭麗美,郭麗雪,郭麗雪
E3|胡木源,絲漢德,絲漢德,王森稔,王森稔,陳逸鴻,陳逸鴻,陳忠玄,查理,趙英豪
E5|蔡子儀,蔡博宇,史長焱,恩然,王文劭,王磊,王品文,王品蓉,子暘
E6|羅道培,蔡明城,蔡明城,蔡明城,施德祥,涂台慶,涂台慶,程法遠,程法遠,李忠仁,譚亞全
F1|周惠美,黃彥憲,周麗美,周昀辰,周詮浤,周聰美,林佑哲,徐慧敏,瑞納,黃淞郁
F2|馬自勇,馬自勇,楊兆偉,楊兆偉,孟德榮,涂德松,涂德松,李士錚,高立川,高立川
F3|李洮俊,李洮俊,方淑音,楊芳仁,張家蓉,李佩儒,馮淑燕,邱采彤,李仁慈
F5|謝欣蓉,黃建彰,鄭淑貞,林貞岑,朱美燕,陳麗美,李文歆,徐仁宗,劉沛瑋,林建志,劉采儀
`;
const CHILD_CHAIRS = {
  B1: '蔡岳廷', B5: '李子牧', C2: '曾珈琳', C3: '黃博仁',
  C6: '游永泰', D6: '徐育', E5: '王允安', E6: '涂台慶'
};
function tableZone(table) {
  if (table === '主桌') return '主桌';
  if (['A1', 'A2', 'B2'].includes(table)) return '女方爸爸好友';
  if (table === 'B1') return '女方家人';
  if (table === 'C1') return '女方媽媽家人';
  if (['C2', 'C3'].includes(table)) return '新娘好友';
  return '男方親友';
}
const byGuest = new Map();
for (const line of TABLE_ROWS.trim().split(/\r?\n/)) {
  const separator = line.indexOf('|');
  const table = line.slice(0, separator).trim();
  const names = line.slice(separator + 1).split(',').map(s => s.trim());
  names.forEach((name, index) => {
    if (!name) return;
    const key = table + '|' + name;
    if (!byGuest.has(key)) {
      byGuest.set(key, {name, table, zone: tableZone(table), seats: []});
    }
    byGuest.get(key).seats.push(index + 1);
  });
}
for (const [table, name] of Object.entries(CHILD_CHAIRS)) {
  const key = table + '|' + name;
  if (!byGuest.has(key)) {
    byGuest.set(key, {name, table, zone: tableZone(table), seats: []});
  }
  byGuest.get(key).childChair = 1;
}
window.GUESTS = [...byGuest.values()].map(g => {
  const count = g.seats.length;
  const seat = count
    ? count + ' 位（表列序號 ' + g.seats.join('、') + '）'
    : '兒童椅';
  const notes = [];
  if (g.name === '林亦飛') notes.push('新郎');
  if (g.name === '蔡依璇') notes.push('新娘');
  if (g.childChair) notes.push('兒童椅 1 張');
  return {
    name: g.name,
    table: g.table === '主桌' ? '主桌' : g.table + ' 桌',
    seat,
    zone: g.zone,
    note: notes.join('；')
  };
});
