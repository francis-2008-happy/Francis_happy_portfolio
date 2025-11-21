# Alex Sterling - AI Engineer Portfolio

A modern, responsive, and interactive portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. This project features a Gemini-powered AI Chatbot that answers questions about your experience and skills.

## 🚀 Tech Stack

*   **Framework:** [React](https://react.dev/) (v18+)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN for simplicity) & Custom CSS
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **AI Integration:** [Google Gemini API](https://ai.google.dev/)

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

*   **Node.js** (v16 or higher) - [Download Here](https://nodejs.org/)
*   **Git** - [Download Here](https://git-scm.com/)
*   **VS Code** - [Download Here](https://code.visualstudio.com/)

## 📦 Installation (Local Development)

1.  **Clone the Repository**
    Open your terminal (Command Prompt, PowerShell, or Terminal) and run:
    ```bash
    git clone https://github.com/YOUR_USERNAME/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install Dependencies**
    Run the following command to install the required libraries (React, Google GenAI, etc.):
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    *   Create a file named `.env` in the root directory.
    *   Add your Google Gemini API Key (required for the Chatbot):
    ```env
    VITE_API_KEY=your_google_api_key_here
    ```
    *   *Note:* You can get a key from [Google AI Studio](https://aistudiocdn.google.com/).

4.  **Start the Development Server**
    ```bash
    npm run dev
    ```
    *   Open your browser and navigate to `http://localhost:5173`.

## 📝 How to Customize (Personalize)

All personal data is separated into specific files to make editing easy. You do not need to dig into complex component logic.

### 1. Update Personal Info & Images
Go to: **`src/constants.ts`**

*   **`PROFILE_IMAGE_URL`**: Replace with a link to your photo.
*   **`NAV_ITEMS`**: Change menu links if needed.
*   **`SKILLS_DATA`**: Edit your specific skills (Languages, Tools).
*   **`PROJECTS_DATA`**: Update the array with your real projects, GitHub links, and images.
*   **`EXPERIENCE_DATA`**: Update your work history.
*   **`CERTIFICATES_DATA`**: Add your certifications.

### 2. Update Chatbot Personality
Go to: **`src/components/ChatWidget.tsx`**

*   Look for `const portfolioContext`.
*   Edit the text inside the backticks to change how the AI describes you.

### 3. Update Social Links & Email
Go to: **`src/components/Contact.tsx`**

*   Search for `alex@example.com` and replace it with your email.
*   Update the links in the `Connect Socially` section.

## 🚢 Deployment

### GitHub Pages / Vercel / Netlify
This project is a static site (SPA) and can be deployed easily.

**Build for production:**
```bash
npm run build
```
This creates a `dist` folder containing your website files.

## 📁 Project Structure

```
/
├── src/
│   ├── components/    # Reusable UI components (Navbar, Hero, etc.)
│   ├── App.tsx        # Main application layout
│   ├── constants.ts   # YOUR DATA GOES HERE (Edit this)
│   ├── types.ts       # TypeScript interfaces
│   └── index.tsx      # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite build config
```
