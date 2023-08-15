let logo = document.querySelector('.lnXdpd');
let logo2 = document.querySelector('img.jfN4p');

if (logo2) {
  console.log('Found logo2 element');
  logo2.srcset = chrome.runtime.getURL('images/logo.png');
} else {
  console.log('logo2 element not found');
}

if (logo) {
  logo.srcset = chrome.runtime.getURL('images/logo.png');
} else {
  console.log('logo element not found');
}
