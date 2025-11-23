# SMIT UI/UX Designer Portfolio

A modern, responsive portfolio website for a Health Systems Designer & Medical Student, built with React, Vite, and Tailwind CSS.

## 🚀 Project Overview

This project showcases a professional portfolio with a focus on human-centered design and digital health experiences. It features smooth animations using Motion (formerly Framer Motion) and a clean, premium aesthetic.

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### 🏃‍♂️ Development

To start the local development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` (or `build`) directory, ready for deployment.

## 📦 Deployment

This project is a static site and can be deployed to any static hosting service like:

- **Vercel:** Connect your Git repository and it will auto-detect Vite.
- **Netlify:** Drag and drop the build folder or connect Git.
- **GitHub Pages:** Configure a workflow to build and deploy.

## 📂 Project Structure

- `src/` - Source code
  - `components/` - Reusable UI components
  - `pages/` - Page components
  - `assets/` - Static assets (images, fonts)
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point