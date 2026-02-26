
# Mission FAAAH

**Mission FAAAH** is a VS Code extension that adds audio feedback to your terminal commands. When a command succeeds, it plays the iconic “Mission Passed” sound from GTA San Andreas; when it fails, you’ll hear a loud **FAAAAH** – the famous meme. Built with TypeScript and the VS Code API, it provides both automatic and manual sound triggers to make your development sessions more entertaining.

---

## 🏛️ Architecture

Mission FAAAH follows an **Event-Driven Extension Architecture** inside VS Code:
This architecture keeps concerns separate: event detection, audio playback, and user commands are each handled by dedicated modules.

---

## 🧩 Extension Model

Mission FAAAH is distributed as a **VS Code Extension** via the Marketplace. It runs entirely within the editor, requires no external services, and respects the user’s local environment. All sound files are bundled with the extension, making it a self-contained, offline‑friendly tool.

---

## ✨ Features

### 🎮 Automatic Sound Feedback
- Listens to every command executed in the integrated terminal.
- **Success** (exit code 0) → `mission-passed.mp3`
- **Failure** (non‑zero exit code) → `faaa.mp3`

---

## 🔑 Key Functionality

- **Zero Configuration** – install the extension, open a terminal, and enjoy audio cues.
- **Works with any shell** (PowerShell, bash, zsh, fish) as long as VS Code’s shell integration is enabled.
- **Fallback Manual Mode** – if shell integration isn’t available, you can still trigger sounds via the command palette.
- **Cross‑platform** – tested on Windows, macOS, and Linux (audio playback depends on system‑available players).

---

## 🛠️ Tech Stack

- **Extension Runtime:** VS Code API (TypeScript)
- **Language:** TypeScript
- **Package Manager:** npm

---

## 🚀 Getting Started

1. **Install** the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ashhaddev-mission-faah) (search for “Mission FAAAH”).
2. **Enable shell integration** in VS Code (if not already):
   - Open settings (`Ctrl+,`) and set `terminal.integrated.shellIntegration.enabled` to `true`.
   - Restart VS Code.
3. **Open a terminal** and run any command:
   - A successful command (like `echo hello`) will play **Mission Passed**.
   - A failing command (like `invalid-command`) will play **FAAAAH**.

---

## 👨‍💻 Creator & Developer

- **Muhammad Ashhadullah Zaheer**  
- 🔗 LinkedIn: [Muhammad Ashhadullah Zaheer](https://www.linkedin.com/in/muhammad-ashhadullah-zaheer-41194a340/)

