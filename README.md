# ByteSpace - Online Learning & Skill Development Platform

ByteSpace is a modern, responsive web platform designed to explore online courses, learning paths, and digital technology skills. Built with React and Tailwind CSS, the platform offers an intuitive UI/UX with smooth navigation and interactive component structures.

 
## 🚀 Live Demo & Repository

- **Live Site**: [https://bytespace-new-blond.vercel.app/](https://bytespace-new-blond.vercel.app/)




## ✨ Features

- **Hero Section**: Visually appealing layout with dynamic call-to-action elements.
- **Course Catalog**: Filterable and reusable course grid featuring rating systems, instructor details, and price badges.
- **Learning Paths**: Structured categorization for domain-specific learning (Web Development, Data Science, Cyber Security, etc.).
- **Authentication Pages**: Clean Login and Sign-Up screens with complete route integration.
- **Responsive Design**: Mobile-first responsive views optimized across devices.
- **SPA Routing Support**: Configured rewrites (`vercel.json`) to support seamless direct URL reloads on single-page application routes.



## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Vercel



## 💻 Local Setup Instructions

Follow these steps to run the project locally on your machine:

1. Clone the repository
2. Install dependencies:

   ```Bash
   npm install
   ```
3. Start the development server:

   ```Bash
   npm run dev
   ```
4. Build for production:

   ```Bash
   npm run build
   ```
 
 📁 Project Structure
```Plaintext
bytespace-new/
├── public/
├── src/
│   ├── assets/          # Static images and lowercased assets
│   ├── components/      # Reusable UI components (Hero, CourseCard, Navbar, etc.)
│   ├── pages/           # Page (HomePage, LoginPage, SignUpPage)
│   ├── App.jsx
│   └── main.jsx
├── vercel.json          # Vercel single-page application routing configuration
├── package.json
└── vite.config.js
```