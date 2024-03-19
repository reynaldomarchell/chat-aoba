# Chat Aoba💌

Aoba is a 2D AI assistant powered by the powerful large language model Gemini. You can send messages to Aoba, and she will send back a reply.

### Tools that used in this app

- React JS
- Vite
- Express JS
- Tailwind CSS
- daisyUI
- Live2D
- Gemini AI

## Installation

**NOTES**: Make sure you have installed TypeScript on your machine. If you haven't, run this command on your terminal

```bash
  npm install -g typescript
  npm install -g ts-node
```

1. Clone this repository

```bash
  git clone https://github.com/reynaldomarchell/chat-aoba.git
```

2.  Go to the project directory and open VS Code

```bash
  cd chat-aoba
  code .
```

3. On server directory, change `.env.example` to `.env`, then fill in your API key

```bash
  # Input your Google Gemini API key here
  GEMINI_API_KEY =
```

4. Open new terminal on server directory, install the dependencies and run the server

```bash
  npm i
  npm run server
```

5. Open new terminal on client directory, install the dependencies and run the app

```bash
  npm i
  npm run dev
```

6. App will run on http://localhost:5173/
