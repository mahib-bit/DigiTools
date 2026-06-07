#🛍️ Digital Tools Buying Website

A modern and responsive React-based e-commerce UI project where users can browse premium digital tools, add them to cart, and manage purchases with smooth UI interactions and toast notifications.

Built as part of the A-6 assignment project, focusing on component design, state management, and real-world cart functionality.

🚀 Live Demo

https://ph-digi-tools.netlify.app/

#🧰 Technologies Used
⚛️ React.js (with Hooks)
🎨 Tailwind CSS
🌼 DaisyUI
🔔 React-Toastify
📦 JSON (mock product data)
⚡ JavaScript ES6+
✨ Features
🧭 Navigation System
Responsive navbar
Live cart counter
Toggle between Products & Cart view

#🛒 Product System
Dynamic product listing from JSON
Beautiful product cards (3-column layout)
Product details:
Name, description, price
Period (monthly/yearly/one-time)
Tags (popular/new/best seller)
Feature list
Icon support

#🛍️ Cart Functionality
Add products to cart
Remove individual items
Cart count updates in real time
Proceed to checkout button clears cart
Empty cart state handling

#🔔 Notifications
React-Toastify for alerts:
Added to cart
Removed from cart
Checkout success

#📱 Responsive Design
Fully responsive for mobile, tablet, and desktop
Clean UI following modern design patterns

#⚙️ Core Functionalities
Toggle between Products & Cart view
Prevent duplicate or invalid cart actions
Limit cart items (max 4 products)
State management using React Hooks
Component-based architecture

#📦 Installation & Setup
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev

#📁 Project Structure
src/
│── Components/
│   ├── Navbar/
│   ├── Banner/
│   ├── Products/
│   ├── ProCard/
│   ├── Cart/
│   ├── Footer/
│
│── App.jsx
│── main.jsx
│── product.json
