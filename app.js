const input=document.getElementById('guestName');
const button=document.getElementById('searchButton');
const status=document.getElementById('status');
const resultPanel=document.getElementById('resultPanel');
const multiplePanel=document.getElementById('multiplePanel');
const multipleResults=document.getElementById('multipleResults');

function normalizeName(value){return String(value||'').trim().replace(/\s+/g,'').toLocaleLowerCase('zh-Hant');}
function clearPanels(){resultPanel.classList.add('hidden');multiplePanel.classList.add('hidden');multipleResults.innerHTML='';}
function showGuest(guest){
  document.getElementById('resultName').textContent=guest.name;
  document.getElementById('resultTable').textContent=guest.table||'請洽招待';
  document.getElementById('resultSeat').textContent=guest.seat||'自由入座';
  document.getElementById('resultZone').textContent=guest.zone||'請依現場指示';
  document.getElementById('resultNote').textContent=guest.note||'歡迎蒞臨';
  multiplePanel.classList.add('hidden');resultPanel.classList.remove('hidden');status.textContent='';
  resultPanel.scrollIntoView({behavior:'smooth',block:'start'});
}
function searchGuest(){
  clearPanels();status.className='status';
  const query=normalizeName(input.value);
  if(!query){status.textContent='請先輸入姓名。';status.classList.add('error');input.focus();return;}
  const guests=Array.isArray(window.GUESTS)?window.GUESTS:[];
  const exact=guests.filter(g=>normalizeName(g.name)===query);
  const partial=guests.filter(g=>normalizeName(g.name).includes(query)||query.includes(normalizeName(g.name)));
  const matches=exact.length?exact:partial;
  if(matches.length===0){status.textContent='找不到相符資料，請確認姓名，或洽現場招待協助。';status.classList.add('error');return;}
  if(matches.length===1){showGuest(matches[0]);return;}
  status.textContent=`找到 ${matches.length} 筆相符資料。`;
  matches.forEach(guest=>{const option=document.createElement('button');option.type='button';option.textContent=`${guest.name}｜${guest.note||guest.zone||guest.table}`;option.addEventListener('click',()=>showGuest(guest));multipleResults.appendChild(option);});
  multiplePanel.classList.remove('hidden');multiplePanel.scrollIntoView({behavior:'smooth',block:'start'});
}
button.addEventListener('click',searchGuest);
input.addEventListener('keydown',event=>{if(event.key==='Enter')searchGuest();});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}
