# Chat Web App Backend

This is the backend API server for the Chat Web App, built with Node.js and Express.

## Features
- User authentication and registration endpoint for the chat engine
- Graceful mock fallback for demo/dev

## Prerequisites
- Node.js v16+
- npm (comes with Node)

## Setup

1. **Clone the repository**

2. **Install dependencies**

```bash
cd backend
npm install
```

3. **Add a `.env` file**

Create `backend/.env` from this template:

```
CHAT_ENGINE_PRIVATE_KEY=your_private_key_here
PORT=3001
```

Ask your instructor/service provider for the correct private key.

4. **Start the server**

```bash
npm start
```

You can now access the backend on `http://localhost:3001`.

## License
MIT

