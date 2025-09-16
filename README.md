# 🚀 Service-Flamme Website – Client Guide (Step by Step)

Welcome! This short guide shows you **how to change text, images, links and publish the website** without needing any coding knowledge.

---

## 👀 What you received

Inside the project folder you will see:

- `src/` → (main website pages)
- `public/` → (images like logo, banners, etc.)
- `components/` → (ready-made blocks used on pages)
- `dist/` → (only appears after “Publish/Build” – this is the final website)
- Files like `package.json`, `vite.config.ts`, `tailwind.config.ts` (ignore these)

> ❗ Please **do not delete** any folders. You’ll only edit the parts shown below.

---

## ✏️ Where do I edit my content?

Most text and page content is inside **`src/pages/`**:

- `Home.tsx` → Home page  
- `About.tsx` → About page  
- `Services.tsx` → Services page  
- `Projects.tsx` → Our Vision  
- `Contact.tsx` → Contact page (phone, email, address)  
- `Legal.tsx` → Legal / Terms page  
- `Estimate.tsx` → Quote / Estimate page

Images are usually in **`public/`** or **`src/assets/`**.

---

## 🛠️ Option A (Recommended): Edit & Publish Online with Lovable

> This is the easiest way. No software to install.

1. Open your project link: **Lovable → Project → Open**  
2. In the left sidebar, click **`src` → `pages`** and choose the page (for example, `About.tsx`).
3. Find the text between tags like `<h1> ... </h1>` or `<p> ... </p>` and type your new text.
   - Example change:
     ```tsx
     <h1>About Us</h1>
     ```
     Change to:
     ```tsx
     <h1>Welcome to Our Company</h1>
     ```
4. Click **Save** (top/right).
5. Click **Share → Publish** to make the changes live.
6. (Optional) **Connect your domain**: Project → Settings → Domains → Connect Domain and follow the steps.

> ✅ Use this option if you just want to keep content updated.  
> ❗ Remember: **Save** first, then **Publish** to go live.

---

## 💻 Option B: Edit on Your Computer (if you prefer)

> Use this only if you are comfortable installing software.

1. Install **Node.js (LTS)** from: https://nodejs.org  
2. Install **VS Code** from: https://code.visualstudio.com  
3. Open VS Code → **File → Open Folder…** → select your project folder.
4. Open **Terminal** (in VS Code) and run:
   ```bash
   npm install
   npm run dev
