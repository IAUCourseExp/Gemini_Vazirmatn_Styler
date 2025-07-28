const STYLESHEET_ID = 'vazirmatn-gemini-stylesheet';

const VAZIRMATN_CSS = `

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


const CLAUDE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');


  body, body *:not([data-icon]):not(.icon):not(i):not(svg) {
    font-family: 'Vazirmatn', sans-serif !important;
    font-size: 16px !important;
  }


  [data-icon],
  .icon,
  i,
  svg {
    font-family: 'Lucide', 'Material Symbols Rounded' !important;
    font-weight: normal !important;
    font-style: normal !important;
    -webkit-font-smoothing: antialiased !important;
  }

 
  pre, code, pre code {
    font-family: 'Vazirmatn', monospace !important;
    direction: ltr !important; 
  }


  [dir="rtl"], 
  [dir="rtl"] *, 
  .claude-message, 
  .claude-response {
    text-align: right !important;
    direction: rtl !important;
  }


  [dir="ltr"] {
    text-align: left !important;
    direction: ltr !important;
  }

  /* Bold */
  b, strong {
    font-weight: 700 !important;
  }
`;

const DEEPSEEK_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

  /* DeepSeek */
body, body *:not(.icon):not([class*="material-symbols"]):not(svg) {
  font-family: 'Vazirmatn', sans-serif !important;
  font-size: 16px !important;
}

.icon,
[class*="material-symbols"],
svg {
  font-family: 'Material Symbols Rounded', 'Material Icons' !important;
  font-weight: normal !important;
  font-style: normal !important;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

[dir="rtl"], 
[dir="rtl"] p, 
[dir="rtl"] span, 
[dir="rtl"] li {
  text-align: right !important;
  direction: rtl !important;
}
`;

const QWEN_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

/* Qwen */
body, body *:not(.icon):not([class*="material-symbols"]):not(svg) {
  font-family: 'Vazirmatn', sans-serif !important;
  font-size: 16px !important;
}

.icon,
[class*="material-symbols"],
svg {
  font-family: 'Material Symbols Rounded', 'Material Icons' !important;
  font-weight: normal !important;
  font-style: normal !important;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

[dir="rtl"], 
[dir="rtl"] p, 
[dir="rtl"] span, 
[dir="rtl"] li {
  text-align: right !important;
  direction: rtl !important;
}
`;

const CHATGPT_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

/* ChatGPT */
body, body *:not(.icon):not([class*="material-symbols"]):not(svg) {
  font-family: 'Vazirmatn', sans-serif !important;
  font-size: 16px !important;
}

.icon,
[class*="material-symbols"],
svg {
  font-family: 'Material Symbols Rounded', 'Material Icons' !important;
  font-weight: normal !important;
  font-style: normal !important;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

[dir="rtl"], 
[dir="rtl"] p, 
[dir="rtl"] span, 
[dir="rtl"] li {
  text-align: right !important;
  direction: rtl !important;
}
`;

const KIMI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

/* Kimi.com */
body, body *:not(.icon):not([class*="material-symbols"]):not(svg) {
  font-family: 'Vazirmatn', sans-serif !important;
  font-size: 16px !important;
}

.icon,
[class*="material-symbols"],
svg {
  font-family: 'Material Symbols Rounded', 'Material Icons' !important;
  font-weight: normal !important;
  font-style: normal !important;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

[dir="rtl"], 
[dir="rtl"] p, 
[dir="rtl"] span, 
[dir="rtl"] li {
  text-align: right !important;
  direction: rtl !important;
}
`;

const MISTRAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

/* mistral.com */
body, body *:not(.icon):not([class*="material-symbols"]):not(svg) {
  font-family: 'Vazirmatn', sans-serif !important;
  font-size: 16px !important;
}

.icon,
[class*="material-symbols"],
svg {
  font-family: 'Material Symbols Rounded', 'Material Icons' !important;
  font-weight: normal !important;
  font-style: normal !important;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

[dir="rtl"], 
[dir="rtl"] p, 
[dir="rtl"] span, 
[dir="rtl"] li {
  text-align: right !important;
  direction: rtl !important;
}
`;


function injectFont(tabId, url) {
  let css = '';

  if (url.startsWith('https://gemini.google.com/')) {
    css = GEMINI_CSS;
  } else if (url.startsWith('https://claude.ai/')) {
    css = CLAUDE_CSS;
  } else if (url.startsWith('https://chat.deepseek.com/')) {
    css = DEEPSEEK_CSS;
  } else if (url.startsWith('https://chat.qwen.ai/')) {
    css = QWEN_CSS;
  } else if (url.startsWith('https://chatgpt.com/')) {
    css = CHATGPT_CSS;
  } else if (url.startsWith('https://kimi.com/')) {
    css = KIMI_CSS;
  } else if (url.startsWith('https://chat.mistral.ai/')) {
    css = MISTRAL_CSS;
  } else {
    return; 
  }

  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (cssContent, id) => {
      const old = document.getElementById(id);
      if (old) old.remove();

      const style = document.createElement('style');
      style.id = id;
      style.textContent = cssContent;
      document.head.appendChild(style);
    },
    args: [css, STYLESHEET_ID]
  }).catch(err => {
    if (!err.message.includes("No tab with id")) {
      console.error("Vazirmatn Styler: خطای اجرای اسکریپت:", err);
    }
  });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    injectFont(tabId, tab.url);
  }
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    injectFont(tab.id, tab.url);
  }
});
