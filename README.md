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

1. Clone this repo or [download the ZIP](https://github.com/anaremore/eat-my-shorts/archive/refs/heads/main.zip)
2. Go to `chrome://extensions`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked** and select the project folder
5. Enjoy a Shorts-free YouTube experience

---

## 📸 Screenshots

![Screenshot](images/screenshot.png)

---

## 👨‍🏫 Inspired By

- Bart Simpson, who once said "Eat my shorts!"
- Chrome's `declarativeNetRequest` API
- Everyone who's ever said, "Please stop recommending me Shorts"

---

## 📜 License

MIT License - Free as a Squishee on a hot day in Springfield.

Copyright (c) 2025 Austin Naremore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 🙌 Contributions

Pull requests are welcome! If YouTube changes their layout, feel free to submit a fix or report a bug in [Issues](https://github.com/anaremore/eat-my-shorts/issues).