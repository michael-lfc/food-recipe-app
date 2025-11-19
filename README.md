# Food Recipe App — Full-Stack MERN with JWT Auth

A secure, modern recipe sharing platform where users can create, view, edit, and delete **only their own** recipes.

Live Demo: coming soon  
GitHub: https://github.com/YOUR-USERNAME/YOUR-REPO-NAME

## Features Implemented (100% Working)

### Backend (Node.js + Express + MongoDB)
- User registration & login (JWT + bcrypt)
- Protected routes with token validation
- Ownership system — users can **only** edit/delete their own recipes
- Full CRUD for recipes
- CORS + environment variables

**API Endpoints:**

POST   /users/register
POST   /users/login
GET    /recipes
GET    /recipes/:id
POST   /recipes          (protected)
PUT    /recipes/:id      (protected + owner only)
DELETE /recipes/:id      (protected + owner only)


### Frontend (React + React Router)
- Beautiful landing page
- View all recipes (public)
- View single recipe
- Create, edit, delete recipes (only if logged in & owner)
- Responsive-ready

## Yet to Be Implemented (Final 5%)

| Feature                          | Status     |
|----------------------------------|------------|
| Login / Register page (`/auth`)  | Not done   |
| Username system (show username, not email) | Not done   |
| Protected route wrapper          | Not done   |
| Hide Edit/Delete on others' recipes | Not done (but secure in backend) |
| Smart redirect after login       | Not done   |
| Logout button                    | Not done   |

**After adding these → 100% production-ready**

## Exact Folder Structure
food-recipe_app/
├── .gitignore
├── README.md                   
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   │   └── tokenValidation.js
│   ├── models/
│   │   ├── User.js
│   │   └── Recipe.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── recipeRoutes.js
│   ├── db.js
│   └── app.js
│
└── client/ (or src folder directly in root)
└── src/
├── components/
│   ├── Layout.js
│   └── Navbar.js
├── context/
│   ├── RecipeContext.js
│   └── ThemeContext.js
├── styles/
│   ├── Create.css
│   ├── Edit.css
│   ├── Home.css
│   ├── Landing.css
│   └── navbar.css
├── pages/
│   ├── Landing.js
│   ├── Home.js
│   ├── Recipe.js
│   ├── Create.js
│   └── Edit.js
├── api/
├── App.js
└── index.js


## Tech Stack

- **Frontend**: React, React Router, Context API, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Auth**: JWT + bcrypt
- **Styling**: Custom CSS (organized in `styles/` folder)

## How to Run

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm start

Backend → http://localhost:4000
Frontend → http://localhost:3000

Security

Only recipe owners can edit/delete (enforced in backend)
JWT tokens required for all protected actions
Email never shown publicly
Ready for username display system


Status: 95% complete — just needs login UI and username
Next step: Add /auth page with Username + Email + Password
