AI Interview System 🚀

An advanced AI-powered mock interview platform that helps users practice interviews, improve communication skills, and prepare for real-world job opportunities using AI-generated questions and interactive interview sessions.

🌐 Live Demo: https://ai-interview-systems-1.onrender.com/

📌 Features
🔐 Google Authentication Login
🤖 AI Generated Interview Questions
🎤 Real-time Mock Interview Experience
🧠 AI-Based Question Generation
📊 Interview Feedback System
📱 Responsive UI Design
⚡ Fast and Smooth Performance
☁️ Cloud Deployment with Render
🔥 Firebase Authentication Integration
🌙 Modern UI with Animations
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
React Router DOM
Axios
Motion / Framer Motion
React Icons
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Authentication
Firebase Google Authentication
Deployment
Render
📂 Project Structure
AI-Interview-System/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── README.md
└── package.json
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/ai-interview-system.git
2️⃣ Move to Project Directory
cd ai-interview-system
🔥 Frontend Setup
cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🚀 Backend Setup
cd server
npm install
npm start

Backend runs on:

http://localhost:5000
🔑 Environment Variables

Create a .env file inside the server folder.

PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

Create a .env file inside the client folder.

VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
🔥 Firebase Setup
Go to Firebase Console
Create a new project
Enable Google Authentication
Copy Firebase Config
Add config to .env
🧠 AI Interview Workflow
User Login
   ↓
Create Interview
   ↓
AI Generates Questions
   ↓
User Gives Answers
   ↓
System Evaluates Responses
   ↓
Feedback & Score Generated
📸 Screenshots
Home Page
Modern landing page
AI interview dashboard
Login functionality
Interview Page
Dynamic AI-generated questions
Real-time interaction
Feedback Section
Performance analysis
AI-based feedback
🔒 Authentication Flow
Google Login
   ↓
Firebase Authentication
   ↓
Backend Verification
   ↓
JWT Token Generation
   ↓
Secure User Session
📡 API Routes
Auth Routes
POST /api/auth/google
Interview Routes
POST /api/interview/generate-questions
GET /api/interview/get-interview
POST /api/interview/submit
🎯 Main Functionalities
AI-based interview generation
User authentication
Interview history
Feedback generation
Responsive dashboard
Protected routes
API integration
Secure authentication
🚀 Deployment
Frontend Deployment

Deploy frontend on:

Vercel
Netlify
Backend Deployment

Deploy backend on:

Render
Railway
🧪 Future Improvements
🎥 Video Interview Support
🗣️ Voice Recognition
📈 Advanced Analytics
🌐 Multi-language Support
🧠 Better AI Evaluation
📄 Resume Upload Feature
🏆 Leaderboard System
🐛 Common Issues & Fixes
White Screen After Login
Possible Reason

Authentication state not updating properly after login.

Fix

Use:

navigate("/")

after successful login and update user state correctly.

400 Bad Request Error
Possible Reason

Missing required request body data.

Fix

Check:

req.body

and validate all required fields before API call.

🤝 Contributing

Contributions are welcome!

Fork the repository
Create a new branch
Commit your changes
Push your branch
Create a Pull Request
⭐ Support

If you like this project:

⭐ Star this repository
🍴 Fork the project
🛠️ Contribute improvements
👨‍💻 Author

Developed by Anjani Kumar

📜 License

This project is licensed under the MIT License.
