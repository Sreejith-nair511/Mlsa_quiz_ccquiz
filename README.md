# MLSA Quiz Web App

A sleek, responsive quiz platform built using **Next.js 13+**, **TypeScript**, and **Tailwind CSS**. This project supports registration, quiz submission, result viewing, and leaderboard tracking — ideal for educational events, hackathons, or student organizations.

---

## 🚀 Features

- 📝 User registration with form validation
- 📤 Quiz submission via API
- 📈 Results page with performance overview
- 🏅 Leaderboard with live updates
- 🧠 Clean, mobile-friendly UI
- ⚙️ Fully typed using TypeScript
- 💨 Styled with Tailwind CSS
- 🔌 Serverless API routes (Next.js App Router)

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [Vercel](https://vercel.com/) (for deployment)

---

## 📁 Folder Structure

mlsa-quiz/
├── app/
│ ├── api/submit-quiz/route.ts # Handles quiz submission
│ ├── leaderboard/page.tsx # Leaderboard display
│ ├── register/page.tsx # User registration
│ ├── results/page.tsx # Results viewer
│ ├── layout.tsx # Root layout
│ └── page.tsx # Landing page
├── public/ # Static assets (if any)
├── styles/
│ └── globals.css # Global styles
├── tailwind.config.ts # Tailwind CSS config
├── postcss.config.mjs # PostCSS config
├── next.config.mjs # Next.js config
├── tsconfig.json # TypeScript configuration
├── package.json # Project metadata and scripts
├── pnpm-lock.yaml # Lockfile for dependencies
└── .gitignore

yaml
Copy
Edit

---

## 💻 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mlsa-quiz.git
cd mlsa-quiz
2. Install Dependencies
bash
Copy
Edit
pnpm install
3. Run the Dev Server
bash
Copy
Edit
pnpm dev
Visit http://localhost:3000 to view the app.

🚀 Deploying to Vercel
Step-by-step:
Push your code to GitHub (or GitLab/Bitbucket)

Go to vercel.com and sign in

Click "New Project", then import your repository

Set the following settings:

Framework: Next.js

Root Directory: /

Install Command: pnpm install

Build Command: pnpm build

Output Directory: .next

Click Deploy 🎉

Vercel will build and host your app automatically, with CI/CD built-in.

📝 License
This project is licensed under the MIT License.
