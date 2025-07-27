const STYLESHEET_ID = 'vazirmatn-gemini-stylesheet';

const VAZIRMATN_CSS = `
  /* دریافت فونت Vazirmatn از Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

body, body *,
[class*="gds-"],
[class*="mdc-"],
[class*="mat-"],
p, span, div, a, li, h1, h2, h3, h4, h5, h6,
button, input, textarea, select {
    font-family: 'Vazirmatn', sans-serif !important;
    font-size: 16px !important; 
    

.mat-icon,
[class*="icon"],
[class*="material-symbols"],
i,
svg {
    font-family: 'Material Symbols Rounded', 'Material Symbols Outlined', 'Material Icons' !important;
    font-weight: normal !important;
    font-style: normal !important;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
}

  pre, code, pre code, .response-content code {
    font-family: 'Vazirmatn', monospace !important;
  }

  [dir="rtl"], 
  [dir="rtl"] p, 
  [dir="rtl"] span, 
  [dir="rtl"] li,
  .query-text[dir="rtl"],
  .response-content[dir="rtl"] {
    text-align: right !important;
    direction: rtl !important;
  }

  [dir="ltr"] {
    text-align: left !important;
    direction: ltr !important;
  }

  b, strong,
  .response-content b, .response-content strong,
  .query-text b, .query-text strong {
    font-weight: 700 !important;
  }
`;


function injectVazirmatn(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (css, id) => {
      const old = document.getElementById(id);
      if (old) old.remove();

      const style = document.createElement('style');
      style.id = id;
      style.textContent = css;
      document.head.appendChild(style);
    },
    args: [VAZIRMATN_CSS, STYLESHEET_ID]
  }).catch(err => {
    if (!err.message.includes("No tab with id")) {
      console.error("Vazirmatn Styler: خطای اجرای اسکریپت:", err);
    }
  });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.startsWith('https://gemini.google.com/')) {
    injectVazirmatn(tabId);
  }
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url?.startsWith('https://gemini.google.com/')) {
    injectVazirmatn(tab.id);
  }
});