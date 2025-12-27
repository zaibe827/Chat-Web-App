# Chat Web App Frontend

This is the React + Vite frontend for the Chat Web App.

## Features
- Beautiful, modern chat UI
- Authentication
- Integrates with backend API for auth and with Chat Engine
- Responsive and accessible design

## Prerequisites
- Node.js v16+
- npm

## Setup & Running Locally

1. **Install dependencies**

```bash
cd Frontend
npm install
```

2. **Add a `.env` file**

Create `Frontend/.env` from this template:

```
VITE_CHAT_ENGINE_PROJECT_ID=your_project_id_here
```

You get the Project ID from your Chat Engine account.

3. **Start the frontend dev server**

```bash
npm run dev
```

- The app will run at `http://localhost:5173` (default).
- It will connect to the backend at `http://localhost:3001` by default (adjust in code if you change backend port).

## Building for Production

```bash
npm run build
```

## License
MIT
