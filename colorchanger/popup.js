document.getElementById("changeBtn").addEventListener("click", async () => {
    const color = document.getElementById("colorPicker").value;
  
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
      args: [color]
    });
  });
  
  function setPageBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  