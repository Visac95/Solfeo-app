# Solfeo App

A desktop application designed to help users practice music theory and sight-reading through interactive note recognition exercises.

Built with **Electron**, this app provides a simple and focused environment to improve musical notation skills directly from the desktop.

---

## 🚀 Features

- 🎵 Random generation of musical notes on a staff
- 🎼 Support for different clefs (e.g., Treble and Bass)
- 🎧 Audio feedback for note interaction
- 🧠 Interactive music theory training
- 🖥 Desktop application powered by Electron

---

## 🛠 Technologies

- Electron
- JavaScript
- HTML
- CSS
- Node.js

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Visac95/Solfeo-app.git
cd Solfeo-app
npm install
npm start
```

## 🧩 Project Structure
Solfeo-app/
│
├── main.js          # Electron main process
├── preload.js       # Secure bridge between main and renderer
├── renderer.js      # UI logic and DOM interaction
├── gameLogic.js     # Core note generation and validation logic
├── audio.js         # Audio handling utilities
├── index.html       # Application interface
├── style.css        # UI styling
└── package.json     # Project configuration

## 🧠 Overview

The application dynamically generates musical notes positioned on a staff.
Users must correctly identify each note, reinforcing sight-reading skills through repetition and immediate feedback.

The architecture separates the Electron main process from the renderer process, maintaining a structured desktop application setup.

## 📫 Author
Created by Samuel Ararat
