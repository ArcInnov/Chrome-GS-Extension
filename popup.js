let changeColor = document.getElementById("changeColor");
// gets element by id changeColor (gets current button color) and stores it in changeColor

// gets the color value saved from storage
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color; // changes the background colo
});

// when button is clicked it gets the active tab 
// And it executes a script to change page background color
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // below is the function to set background color
  // it gets color from storage and changes background color of page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }