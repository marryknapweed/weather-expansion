(()=>{"use strict";const e=()=>{console.log("addIconsToHeadlines function called");const e=document.querySelectorAll("h3.title");console.log("Found headlines:",e.length),e.forEach((e=>{const n=function(){console.log("Creating icon element");const e=document.createElement("img");return e.src=chrome.runtime.getURL("icon.png"),console.log("Icon URL:",e.src),e.style.width="20px",e.style.height="20px",e.style.marginLeft="5px",e.style.verticalAlign="middle",e.onload=()=>console.log("Icon loaded successfully"),e.onerror=()=>console.error("Error loading icon:",e.src),e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),console.log("Icon clicked"),o()})),e}();console.log("Appending icon to headline:",e),e.appendChild(n),n.addEventListener("click",(()=>{console.log("Icon clicked"),o()}))}))},o=()=>{var e;console.log("showPopup function called");const o=document.createElement("div");o.style.position="fixed",o.style.top="50%",o.style.left="50%",o.style.transform="translate(-50%, -50%)",o.style.backgroundColor="white",o.style.border="1px solid black",o.style.padding="10px",o.style.zIndex="1000",o.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.1)",o.innerHTML='\n      <h2>Weather Information</h2>\n      <p>Weather details for selected city.</p>\n      <button id="close-popup">Close</button>\n    ',document.body.appendChild(o),null===(e=document.getElementById("close-popup"))||void 0===e||e.addEventListener("click",(()=>{document.body.removeChild(o),console.log("Popup closed")}))};document.addEventListener("DOMContentLoaded",(()=>{e()})),e()})();