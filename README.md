# Food Recipe App — Full-Stack MERN with JWT Auth

A secure, modern recipe sharing platform where users can **create, view, edit, and delete only their own recipes**.

**LIVE DEMO:** https://michaels-recipe-app.netlify.app  
**Backend API:** https://michael-recipe-api-1578959ef501.herokuapp.com  
**GitHub:** https://github.com/michael-lfc/food-recipe-app

**Deployed & Fully Functional — November 2025**

---

### Features Implemented (100% Working)

#### Backend (Node.js + Express + MongoDB Atlas)
- User registration & login (JWT + bcrypt)
- Protected routes with token validation middleware
- Ownership system — users can **only** edit/delete their own recipes
- Full CRUD for recipes
- CORS enabled + environment variables
- Live on Heroku (free tier)

#### Frontend (React + React Router + Axios)
- Beautiful landing page
- View all recipes (public)
- View single recipe
- Create, edit, delete recipes (only if logged in & owner)
- Responsive design ready
- Live on Netlify

---

### API Endpoints (All Live & Working)

| Method | Endpoint                | Description                          | Auth Required?     |
|--------|-------------------------|--------------------------------------|--------------------|
| POST   | `/users/register`       | Register new user                    | No                 |
| POST   | `/users/login`          | Login → returns JWT token            | No                 |
| GET    | `/recipes`              | Get all recipes                      | No                 |
| GET    | `/recipes/:id`          | Get single recipe                    | No                 |
| POST   | `/recipes`              | Create new recipe                    | Yes (JWT)          |
| PUT    | `/recipes/:id`          | Update recipe (owner only)           | Yes + Owner only   |
| DELETE | `/recipes/:id`          | Delete recipe (owner only)           | Yes + Owner only   |
| GET    | `/users/all`            | Get all users (for testing/admin)    | Yes (JWT)          |

**Test API live:** https://michael-recipe-api-1578959ef501.herokuapp.com/recipes

---

### Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| Frontend    | React, React Router, Axios, Custom CSS           |
| Backend     | Node.js, Express, Mongoose                       |
| Database    | MongoDB Atlas                                    |
| Auth        | JWT + bcrypt                                     |
| Deployment  | Frontend → Netlify<br>Backend → Heroku           |

---

### How to Run Locally

```bash
# Backend
cd server
npm install
npm run dev

# Frontend (in another terminal)

Backend → http://localhost:4000
Frontend → http://localhost:3000


Security Highlights

Only recipe owners can edit/delete (enforced in backend)
JWT tokens required for all protected actions
Passwords hashed with bcrypt
Email never shown publicly
Ready for username display & beautiful auth UI


Folder Structure
textfood-recipe-app/
├── server/
│   ├── controllers/
│   ├── middleware/tokenValidation.js
│   ├── models/User.js & Recipe.js
│   ├── routes/userRoutes.js & recipeRoutes.js
│   ├── db.js
│   └── app.js
└── client/
    └── src/
        ├── components/
        ├── pages/
        ├── api/api.js
        ├── styles/
        ├── App.js
        └── index.js

Status: 95% Complete → Final 5% Coming Soon

Feature to be added later:
Beautiful /auth page
Username system
Protected route wrapper
Smart redirect after login
Logout button
Hide Edit/Delete for others
After adding these → 100% production-ready portfolio masterpiece

Made with passion by Michael Agwogie
Full-Stack Developer | Nigeria | 2025
cd client
npm install
npm start
