# Responsive Portfolio Website

A personal portfolio site with a working contact form backed by a real
database — frontend, backend, and DB all wired together.

**Live demo:** _add your deployed frontend link here_
**API:** _add your deployed backend link here_

## Tech Stack

| Layer     | Technology                        |
|-----------|------------------------------------|
| Frontend  | HTML5, CSS3, vanilla JavaScript    |
| Backend   | Node.js, Express                  |
| Database  | MongoDB (Mongoose)                |
| Deployment| Vercel/Netlify (frontend), Render/Railway (backend) |

## Project Structure

```
cognevance_portfolio-website/
├── frontend/
│   ├── index.html
│   ├── css/style.css
│   ├── js/script.js
│   └── assets/images/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── config/db.js
│   ├── models/Message.js
│   └── routes/contact.js
├── docs/
│   ├── SCHEMA.md
│   └── screenshots/
└── README.md
```

## Features

- Responsive layout with a mobile nav toggle (no framework required)
- About, Skills, Projects, and Contact sections
- Contact form that POSTs to a real Express API
- Messages persisted in MongoDB with validation and timestamps
- CORS locked to an allow-list of known frontend origins

## Setup — Local Development

### 1. Clone and install backend dependencies
```bash
git clone https://github.com/<your-username>/cognevance_portfolio-website.git
cd cognevance_portfolio-website/backend
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env
# then edit .env with your MongoDB Atlas connection string
```

### 3. Run the backend
```bash
npm run dev
# Server starts on http://localhost:5000
```

### 4. Run the frontend
Open `frontend/index.html` directly in a browser, or serve it with a tool
like the VS Code "Live Server" extension so it runs on a real localhost port
(needed for CORS to work cleanly). Update `API_BASE_URL` in `js/script.js`
if your backend runs on a different port.

## Deployment

- **Frontend:** deploy the `frontend/` folder to Vercel or Netlify.
- **Backend:** deploy the `backend/` folder to Render or Railway. Set the
  same environment variables from `.env.example` in the platform's dashboard.
- After deploying, update:
  - `CLIENT_ORIGIN` in the backend's environment variables to your live
    frontend URL.
  - `API_BASE_URL` in `frontend/js/script.js` to your live backend URL.

## Database Schema

See [`docs/SCHEMA.md`](docs/SCHEMA.md) for the full contact-messages schema
and an equivalent SQL version if you prefer PostgreSQL.

## Screenshots

Add screenshots of the site (desktop + mobile) to `docs/screenshots/` and
reference them here once available.

## Workflow / Notes

- Built section by section: static frontend first, then the Express API,
  then wired the contact form to it last.
- Form validation happens on both ends: HTML `required` attributes on the
  client, Mongoose schema validation on the server — never trust client-side
  validation alone.
- Next steps to extend this project: rate-limit the contact endpoint,
  add a lightweight admin page to read messages, add unit tests for the API.
