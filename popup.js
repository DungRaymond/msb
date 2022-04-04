

window.addEventListener("load", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setBalance,
  });
});


// current page
function setBalance() {
  chrome.storage.sync.get("balance", ({ balance }) => {
    const d = document.getElementsByClassName("msb-money-format");
    d[0].innerHTML = balance;
    d[2].innerHTML = balance;
  });
}

// const b = document.getElementsByTagName("font")[3]; b.innerHTML = "190,682,344";