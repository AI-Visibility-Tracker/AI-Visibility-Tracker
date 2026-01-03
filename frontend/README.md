# 🎨 AI Visibility Tracker — Frontend (MVP)

This directory contains the **frontend application** for the **AI Visibility Tracker MVP**.  
It collects user input, calls the backend API, and presents **AI visibility insights** through a clean, interactive dashboard.

---

## 📌 Overview

The frontend is a **React + Tailwind CSS** application that visualizes how often a brand appears in AI-generated recommendations.

It provides:
- A modern dashboard UI  
- Real-time feedback during AI analysis  
- Clear visibility metrics  
- Prompt-wise result breakdown  

The frontend was developed **independently** of the backend using a clean API contract and later integrated seamlessly.

---

## ✨ Key Features

### 🔤 Brand Input Form
- Allows users to enter a brand name.  
- Initiates analysis via backend API call.

### ⚡ Real-Time Analysis Trigger
- Interactive button to start visibility analysis.  
- Displays loading states and disables inputs during live AI evaluation.

### 📊 AI Visibility Metrics
- Displays citation share, brand mentions, and total prompts analyzed.

### 📋 Prompt-wise Result Table
- Lists which prompts mention the brand.  
- Displays ranking or position in responses.

### ⏳ Loading Skeletons
- Provides visual feedback during analysis.  
- Improves perceived UX during slower AI calls.

### 🎨 Responsive UI
- Built with Tailwind CSS for a clean and consistent visual design.  
- Responsive layout supports multiple screen sizes.

---

## 🧰 Tech Stack

- **React (Vite)** — modern frontend framework for speed and modularity  
- **Tailwind CSS** — utility-first styling for a consistent design system  
- **Axios** — API communication and error handling  
- **Component-based architecture** — easy to extend and maintain  

---

## 📂 Folder Structure

```
frontend/
│
├── src/
│   ├── components/
│   │   ├── BrandForm.jsx      # Brand input & analyze action
│   │   ├── Charts.jsx         # Visibility metrics display
│   │   └── ResultsTable.jsx   # Prompt-wise analysis table
│   │
│   ├── App.jsx                # Main dashboard layout
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind CSS entry
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

**Frontend will run at:**  
[http://localhost:5173](http://localhost:5173)

---

## 🔗 Backend Integration

The frontend communicates with the backend via:

**Endpoint:**  
`POST /analyze`

**Example request:**
```json
{
  "brand": "Writesonic"
}
```

**Expected response structure:**
```json
{
  "brand": "Writesonic",
  "total_prompts": 11,
  "citation_share": 63.64,
  "results": [...]
}
```

The frontend dynamically renders:
- **Citation share**
- **Prompt count**
- **Prompt-wise visibility results**

---

## 🎯 UX & Performance Design

Since AI analysis can take several seconds:
- Loading spinners and skeletons appear immediately.  
- Buttons are disabled during processing.  
- UI remains responsive throughout.

This improves **perceived performance** and ensures a smooth user experience.

---

## 🧠 Development Approach

- Built initially using **mock data**.  
- Backend integration added later with no UI refactor required.  
- Maintains a **clean separation of concerns**.  
- Uses a **scalable component structure** to support new features easily.

This mirrors **real-world frontend engineering workflows** and ensures long-term maintainability.

---

## 🛣️ Future Enhancements

- Competitor comparison view  
- Expandable AI response details  
- Export reports (CSV / PDF)  
- Dark mode toggle  
- Deployment to **Vercel**

---

## 👨‍💻 Contribution

The **frontend** of this MVP was designed and developed by **Gorav**.

**Responsibilities included:**
- Building the React dashboard architecture  
- Implementing Tailwind CSS for clean, responsive UI  
- Designing user-friendly input and results views  
- Integrating with backend APIs using Axios  
- Improving perceived performance with loading states/skeletons  
- Maintaining production-ready structure and Git hygiene  

The frontend was **developed independently** and later integrated with the backend using a clean API contract — reflecting **real-world collaborative development practices.**

---

## 📄 Notes

- This frontend depends on the **backend service** being active.  
- `.env` files and `node_modules` are intentionally excluded from version control.  
- Built for **clarity**, **performance**, and **future scalability** 🚀
