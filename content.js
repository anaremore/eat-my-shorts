let extensionEnabled = true; // default ON

// Initial fetch from storage
try {
  if (chrome?.storage?.sync?.get) {
    chrome.storage.sync.get('enabled', (data) => {
      extensionEnabled = data?.enabled ?? true;
      console.log(`[Eat My Shorts] Extension enabled: ${extensionEnabled}`);
      hideShorts();
    });
  }
} catch (err) {
  console.error("[Eat My Shorts] Error accessing storage:", err);
  hideShorts();
}

function hideShorts() {
    const isBlocking = extensionEnabled;
  
    // Shorts shelf (ytd-rich-shelf-renderer → #title + #dismissible)
    document.querySelectorAll('ytd-rich-shelf-renderer').forEach(shelf => {
      const title = shelf.querySelector('#title');
      const dismissible = shelf.querySelector('#dismissible');
  
      if (title && title.textContent.trim().toLowerCase() === 'shorts') {
        if (dismissible) {
          dismissible.style.display = isBlocking ? 'none' : '';
          console.log(`[Eat My Shorts] ${isBlocking ? 'Hiding' : 'Unhiding'} Shorts shelf`);
        }
      }
    });
  
    // Shorts reels
    document.querySelectorAll('ytd-reel-item-renderer, ytd-reel-shelf-renderer').forEach(el => {
      el.style.display = isBlocking ? 'none' : '';
      console.log(`[Eat My Shorts] ${isBlocking ? 'Hiding' : 'Unhiding'} Shorts reel`);
    });
  
    // Sidebar button (the squarish one)
    document.querySelectorAll('ytd-mini-guide-entry-renderer[aria-label="Shorts"]').forEach(el => {
      el.style.display = isBlocking ? 'none' : '';
      console.log(`[Eat My Shorts] ${isBlocking ? 'Hiding' : 'Unhiding'} Shorts left nav`);
    });

    // Sidebar button (the long one)
    document.querySelectorAll('ytd-guide-entry-renderer a[title="Shorts"]').forEach(el => {
        el.style.display = isBlocking ? 'none' : '';
        console.log(`[Eat My Shorts] ${isBlocking ? 'Hiding' : 'Unhiding'} Shorts full nav button`);
    });
  }

  // Observe for dynamic changes
const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });

// 👂 Listen for toggle updates from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "toggle") {
    extensionEnabled = message.enabled;
    console.log(`[Eat My Shorts] Toggle received: ${extensionEnabled}`);
    hideShorts();
  }
});
