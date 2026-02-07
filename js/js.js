let getBrowser = navigator.userAgent;
console.log(getBrowser);
 
if (getBrowser.match(/Edg/i)) {
  let browser = document.querySelector(`.edge`);
  browser.style = "opacity:1";
} else if (getBrowser.match(/firefox/i)) {
  let browser = document.querySelector(`.firefox`);
  browser.style = "opacity:1";
} else if (getBrowser.match(/opera/i)) {
  let browser = document.querySelector(`.opera`);
  browser.style = "opacity:1";
} else if (getBrowser.match(/chrome/i)) {
  let browser = document.querySelector(`.chrome`);
  browser.style = "opacity:1";
} else if (getBrowser.match(/safari/i)) {
  let browser = document.querySelector(`.safari`);
  browser.style = "opacity:1";
}
