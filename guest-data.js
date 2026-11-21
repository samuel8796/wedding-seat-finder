// 2026-11-22 婚禮賓客座位名單（待提供）
// 格式：姓名 | 桌次 | 座位 | 區域 | 備註
// 名單尚未匯入；保留這支檔案供日後直接更新。
// 請勿在網站中保留其他婚禮的賓客資訊。

const GUEST_ROWS = String.raw`
`;

window.GUESTS = GUEST_ROWS.trim()
  ? GUEST_ROWS.trim().split(/\r?\n/).map(line => {
      const [name = '', table = '', seat = '', zone = '', note = ''] =
        line.split('|').map(value => value.trim());
      return { name, table, seat, zone, note };
    }).filter(guest => guest.name)
  : [];
