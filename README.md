🚀 Scroll App

A simple React application that demonstrates smooth scrolling to specific sections of a webpage using the useRef hook and the window.scrollTo() method.

📋 Features

Scroll smoothly to a target section by clicking a button.

Uses React refs (useRef) to reference DOM elements.

Demonstrates getBoundingClientRect() for element position detection.

Includes a Scroll to Top button with smooth animation.

Clean, minimal UI.

🧠 Technologies Used

React.js (Vite setup)

JavaScript (ES6)

CSS3

🏗️ Project Structure
scroll-app/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
│
├── package.json
├── vite.config.js
└── README.md

💻 Code Overview
🧩 App.jsx

Contains an array of sections (data) with color blocks.

Each section is rendered dynamically.

A ref is assigned to a specific section (e.g., “Item 4”) for scrolling.

The button triggers smooth scroll to that section.

import { useRef } from 'react';
import './App.css';

const data = [
  { label: 'Item 1', style: { width: '100%', height: '300px', backgroundColor: 'red' } },
  { label: 'Item 2', style: { width: '100%', height: '300px', backgroundColor: 'green' } },
  { label: 'Item 3', style: { width: '100%', height: '300px', backgroundColor: 'orange' } },
  { label: 'Item 4', style: { width: '100%', height: '300px', backgroundColor: 'pink' } },
];

function App() {
  const scrollref = useRef(null);

  function ScrollerHandler() {
    if (!scrollref.current) return;
    const pos = scrollref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }

  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <h1>Welcome To Scroll App</h1>
      <button onClick={ScrollerHandler}>Scroll To Item 4</button>
      <button onClick={ScrollToTop}>Scroll To Top</button>

      {data.map((val, index) => (
        <div ref={index === 3 ? scrollref : null} key={index} style={val.style}>
          <p>{val.label}</p>
        </div>
      ))}
    </>
  );
}

export default App;

🏃‍♂️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/scroll-app.git
cd scroll-app

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev


Then open the local URL shown in your terminal — usually
👉 http://localhost:5173/

🧭 How It Works

useRef() creates a reference to a specific <div> (e.g., “Item 4”).

On button click, the ScrollerHandler() calculates that element’s top offset using:

scrollref.current.getBoundingClientRect().top + window.scrollY


The browser smoothly scrolls to that position.

Another button calls ScrollToTop() to return to the top of the page.

🧩 Example Output

🟥 Item 1
🟩 Item 2
🟧 Item 3
🩷 Item 4

Click “Scroll To Item 4” → Smooth scrolls to pink section
Click “Scroll To Top” → Returns to header
