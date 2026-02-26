# Mission FAAAH

**Mission FAAAH** is a VS Code extension that adds audio feedback to your terminal commands. When a command succeeds, it plays the iconic “Mission Passed” sound from GTA San Andreas; when it fails, you’ll hear a loud **FAAAAH** – the famous meme. Built with TypeScript and the VS Code API, it provides both automatic and manual sound triggers to make your development sessions more entertaining.

---

## 🏛️ Architecture

Mission FAAAH follows an **Event-Driven Extension Architecture** inside VS Code:  
This architecture keeps concerns separate: event detection, audio playback, and user commands are each handled by dedicated modules.

---

## 🧩 Extension Model

Mission FAAAH is distributed as a **VS Code Extension** via the Marketplace. It runs entirely within the editor, requires no external services, and respects the user’s local environment. All sound files are bundled with the extension, making it a self-contained, offline-friendly tool.
https://marketplace.visualstudio.com/publishers/ashhadullah-dev

---

## ✨ Features

### 🎮 Automatic Sound Feedback
- Listens to every command executed in the integrated terminal.
- **Success** (exit code 0) → `mission-passed.mp3`
- **Failure** (non-zero exit code) → `faaa.mp3`

---


## 🛠️ Tech Stack

- **Extension Runtime:** VS Code API (TypeScript)
- **Language:** TypeScript
- **Package Manager:** npm

---

## 🚀 Getting Started

### 🛒 Marketplace

Install the extension from the official Marketplace:

https://marketplace.visualstudio.com/items?itemName=ashhadullah-dev.ashhaddev-mission-faah

---

### 💻 VS Code (Direct Install)

You can install it directly inside VS Code using:

```
vscode:extension/ashhadullah-dev.ashhaddev-mission-faah
```

Or manually:

1. Open VS Code  
2. Press `Ctrl + Shift + X`  
3. Search for **Mission FAAAH**  
4. Click **Install**

---

### 🎮 Test It

Open a terminal and run any command:

- `echo hello` → Plays **Mission Passed**
- `invalid-command` → Plays **FAAAAH**

---

## 👨‍💻 Creator & Developer

- **Muhammad Ashhadullah Zaheer**
- 🔗 LinkedIn: [Muhammad Ashhadullah Zaheer](https://www.linkedin.com/in/muhammad-ashhadullah-zaheer-41194a340/)
