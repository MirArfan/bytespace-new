# ByteSpace - Online Learning & Course Platform

ByteSpace is a modern, responsive, and visually appealing web application built for online learning. It features a clean UI with custom 3D design elements, course grids, and intuitive authentication pages.

<!-- ## 🚀 Live Demo & Preview
*(Add your live Vercel/Netlify link here)*

--- -->

## ✨ Features

- **Hero Section:** Dynamic hero section with 3D decorative shapes, student showcase, and search bar layout.
- **Reusable Components:** Modular `CourseCard` component supporting both `compact` (Hero/Auth) and full-size (Course Grid) layouts.
- **Authentication Pages:** Custom Sign In (`/signin`) and Sign Up (`/signup`) UI based on Figma design.
- **Fully Responsive:** Optimized for all screen sizes from mobile devices to desktop displays using Tailwind CSS.
- **Clean Routing:** Seamless navigation using React Router DOM.



## 🛠️ Tech Stack

- **Frontend Library:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM


## 💻 Getting Started Locally

Follow these steps to set up the project on your local machine:

1. Clone the repository:
2. Navigate to the project directory:

    ```Bash
    cd bytespace
    ```
3. Install dependencies:

    ```Bash
    npm install
    ```
3. Run the development server:

    ```Bash
    npm run dev
    ```
## 📁 Project Structure

```text
src/
├── assets/          # Images, 3D shapes, course thumbnails, and student avatars
├── components/      # Reusable UI components (Navbar, Hero, CourseCard, CourseGrid)
├── pages/           # Application pages (SignIn, SignUp, Home)
├── App.jsx          # Main App component with routing setup
└── main.jsx         # Entry point for Vite/React
```
