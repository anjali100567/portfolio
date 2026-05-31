# Cyberpunk CSE Portfolio Website

A futuristic, high-performance, single-page developer portfolio designed for Computer Science and Engineering students. Built using React, Tailwind CSS, and Framer Motion, with dynamic integrations.

## 🎨 Tech Stack & Features
- **React (Vite):** Fast, modern frontend setup.
- **Tailwind CSS:** Fully customized theme with cyberpunk styling.
- **Framer Motion:** Smooth scroll reveals, hover glows, and micro-interactions.
- **Dynamic GitHub API Integration:** Fetches your latest repositories live and dynamically increases your language proficiency percentages (e.g., C, Java, Python, Web Dev) based on your real GitHub activity.
- **Responsive Navigation:** Monogram logo with hamburger menu support for mobile.
- **Hero Area:** Typewriter effect cycling through CSE roles, custom interactive CTA buttons, and a rotating cybernetic profile ring.
- **Projects Showcase:** Interactive filtering tabs (`All`, `Django`, `C`, `Java`, `WebDev`) with dynamic repo rendering.

---

## 🛠️ Setup & Local Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Build the production package:
   ```bash
   npm run build
   ```

---

## ⚙️ Customization

### 1. Linking your GitHub Profile & Repo Data
To fetch your own projects and dynamically scale your skill bars, open `src/context/PortfolioContext.jsx` and change the username:
```javascript
// Change "anli-cse" to your actual GitHub username!
const GITHUB_USERNAME = "anjali100567";
```

### 2. Updating Profile Photo
Swap the image file located at `src/assets/profile.png` with your own profile photo.

### 3. Modifying Info Details
Modify `src/components/About.jsx` to change your bio and update the student information object:
```javascript
const studentInfo = {
  degree: "B.Tech CSE",
  year: "2nd Year",
  focus: "AI & ML",
  goal: "GATE → PSU"
};
```
