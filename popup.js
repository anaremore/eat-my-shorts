const toggle = document.getElementById('toggle');

// Load saved setting on popup open
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('enabled', (data) => {
    toggle.checked = data?.enabled ?? true; // default to true if undefined
  });
});

// Save + send toggle update
toggle.addEventListener('change', () => {
  const newState = toggle.checked;
  chrome.storage.sync.set({ enabled: newState });

  // Send message to content script on current tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "toggle",
        enabled: newState
      });
    }
  });
});
