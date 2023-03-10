let balance = "632,526,114";

chrome.storage.sync.set({ balance });

let bankInterval = 900;
let messInterval = 500;


const d = document.getElementsByClassName("msb-money-format");

setInterval(() => {
  if(d.length > 0) {
      d[0].innerHTML = balance;
      d[2].innerHTML = balance;
  }
}, bankInterval);

//const m = document.getElementsByClassName("kuivcneq");
//const n = document.getElementsByClassName("o36gj0jk");
//
//setInterval(() => {
//      m[0].style.flexBasis = '70%'
//      m[0].style.maxWidth = '800px'
//      m[0].style.width = '800px'
//      n[0].style.width = '82px'
//}, messInterval)


// new code to merge down here, copy this to other version on pc
// english pharma co name viramal

let boxthanhtoan = document.getElementsByClassName('msb-widget')[1];
boxthanhtoan.style.display = 'none';


