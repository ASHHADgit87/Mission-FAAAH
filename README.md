# Mission FAAAH

**Mission FAAAH** is a VS Code extension that adds entertaining audio feedback to terminal commands. Built with **TypeScript** and the **VS Code Extension API**, it automatically plays the iconic **"Mission Passed"** sound from GTA: San Andreas when a command succeeds, and the famous **"FAAAAH"** meme sound when a command fails.

The extension runs entirely inside Visual Studio Code, providing instant audio feedback without requiring any external services.

---

# Architecture

Mission FAAAH follows an **Event-Driven Extension Architecture**, separating terminal event detection, audio playback, and command handling into independent modules.

| Component | Responsibility |
|---|---|
| Extension Runtime | Integrates with the VS Code Extension API |
| Event Listener | Monitors terminal command execution |
| Audio Engine | Plays success and failure sound effects |
| Command System | Handles extension commands and activation |

---

# Extension Model

Mission FAAAH is distributed as a **Visual Studio Code Extension** through the VS Code Marketplace. It operates entirely within the editor, requires no external services, and works offline since all audio assets are bundled with the extension.

Publisher:

https://marketplace.visualstudio.com/publishers/ashhadullah-dev

---

# Features

## Automatic Audio Feedback

| Feature | Description |
|---|---|
| Terminal Monitoring | Detects commands executed in the integrated terminal |
| Success Sound | Plays **Mission Passed** when a command exits successfully |
| Failure Sound | Plays **FAAAAH** when a command exits with an error |
| Offline Support | Audio files are bundled with the extension |

---

# Tech Stack

| Layer | Technology |
|---|---|
| Extension Runtime | VS Code Extension API |
| Language | TypeScript |
| Package Manager | npm |

---

# Installation

## VS Code Marketplace

Install the extension from the official Marketplace:

https://marketplace.visualstudio.com/items?itemName=ashhadullah-dev.ashhaddev-mission-faah

---

## Direct Installation

Install directly inside Visual Studio Code using:

```text
vscode:extension/ashhadullah-dev.ashhaddev-mission-faah
```

Or install manually:

1. Open Visual Studio Code.
2. Open the **Extensions** panel (`Ctrl + Shift + X`).
3. Search for **Mission FAAAH**.
4. Click **Install**.

---

# Usage

Run any command inside the integrated terminal.

| Command | Result |
|---|---|
| `echo hello` | Plays the **Mission Passed** sound |
| `invalid-command` | Plays the **FAAAAH** sound |

---

# Creator & Developer

**Muhammad Ashhadullah Zaheer**

LinkedIn: https://www.linkedin.com/in/muhammad-ashhadullah-zaheer/
