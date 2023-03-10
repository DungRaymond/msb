let balance = "882,326,114";

chrome.storage.sync.set({ balance });

let bankInterval = 300;


const d = document.getElementsByClassName("msb-money-format");

setInterval(() => {
  const dd = document.getElementsByClassName("blance-money");
  const b = document.getElementsByTagName('em')[0]
  const s = document.getElementsByTagName('span')[15];

  if(d.length > 0) {
    d[0].innerHTML = balance;
    d[1].innerHTML = balance;
    d[2].innerHTML = balance;
    d[3].innerHTML = balance;
    d[4].innerHTML = balance;
    dd[3].innerHTML = 'Hoạt động';
    b.style.display = 'none';
    s.style.display = 'none';

  }
  let textcenter = document.getElementsByClassName('text-center')[0];
  if(textcenter) {
    textcenter.style.display = 'none';
  }
  let boxthanhtoan = document.getElementsByClassName('msb-widget')[1];
  if(boxthanhtoan) {
    boxthanhtoan.style.display = 'none';
  }
}, bankInterval);

setInterval(() => {
  let boxdetail = document.getElementsByClassName('ca-detail')[1];
  if(boxdetail) {
    boxthanhtoan.style.display = 'none';
  }
  // if(document.getElementsByTagName('li').length < 75) {
  //   let boxinvoice = document.getElementsByClassName('view-invoice-list')[0];
  
  //   const node = document.createElement("li");
    
  //   const timenode = document.createElement("div");
  //   timenode.setAttribute('class', 'time-action');
  //   const timetextnode = document.createTextNode("2023-02-01");
  //   timenode.appendChild(timetextnode);
    
  //   const titlenode = document.createElement("div");
  //   titlenode.setAttribute('class', 'title-invoice');
  //   const titletextnode = document.createTextNode("Monthly income");
  //   titlenode.appendChild(titletextnode);
    
  //   node.appendChild(timenode);
  //   node.appendChild(titlenode);
  //   boxinvoice.appendChild(node);
  //   boxinvoice.appendChild(node);
  //   boxinvoice.appendChild(node);
  // }
},250)

// new code to merge down here, copy this to other version on pc
// english pharma co name viramal




// add fake invoices


