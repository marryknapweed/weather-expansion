// // // background.ts
// // console.log('Background script running.');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'showPopup') {
      chrome.action.openPopup();
    }
  });
  
// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Weather Extension installed.");
//   });
  