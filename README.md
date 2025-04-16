# Eat My Shorts! 🛑👖

A Chrome extension that kicks YouTube Shorts off your screen — Bart Simpson style.

No more vertical videos cluttering your homepage, search results, or sidebars. This extension lets you **toggle Shorts visibility on and off**, and even **redirects Shorts URLs** to their standard video format.

> "Don’t have a cow, man — just eat my Shorts!" – You, probably

---

## ✨ Features

- 🧹 Hides all Shorts rows from the YouTube homepage
- 🔍 Removes Shorts from search results
- 📺 Blocks Shorts shelf content (`#dismissible`)
- 📚 Hides both sidebar buttons:
  - `ytd-mini-guide-entry-renderer[aria-label="Shorts"]`
  - `ytd-guide-entry-renderer a[title="Shorts"]`
- 🔁 Redirects `youtube.com/shorts/*` to `youtube.com/watch?v=*`
- 🎛️ Toggle on/off via the extension popup (live without reload!)
- 🧼 Logs everything it hides for easy debugging

---

## 🔧 How to Install

1. Clone this repo or [download the ZIP](https://github.com/your-repo-name/archive/refs/heads/main.zip)
2. Go to `chrome://extensions`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked** and select the project folder
5. Enjoy a Shorts-free YouTube experience

---

## 📸 Screenshots

![Screenshot](screenshot.png)

---

## 👨‍🏫 Inspired By

- Bart Simpson, who once said "Eat my shorts!"
- Chrome's `declarativeNetRequest` API
- Everyone who's ever said, "Please stop recommending me Shorts"

---

## 🙌 Contributions

Pull requests are welcome! If YouTube changes their layout, feel free to submit a fix or report a bug in [Issues](https://github.com/your-repo-name/issues).

---

## 📜 License

MIT — free as a Squishee on a hot day in Springfield.