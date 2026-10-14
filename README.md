# 🏡 Airbnb Clone

A full-stack property rental web application inspired by Airbnb, built using the MERN stack. Users can explore properties, search listings, view property details, and book accommodations through a responsive and user-friendly interface.

## 🌐 Live Demo

- **Live Website:** [View Live Demo](YOUR_FRONTEND_LIVE_LINK)

## 📖 About The Project

This project provides a platform for users to discover and book properties online. It includes user authentication, property listing management, image uploads, booking functionality, and rent calculation. The application demonstrates full-stack development using React.js, Node.js, Express.js, and MongoDB.

## ✨ Features

- 🔐 User Registration and Login
- 🏠 Create, Update, and Delete Listings
- 🔍 Search and Explore Properties
- 🖼️ Property Image Upload
- 📍 Property Details and Location
- 📅 Booking with Check-in and Check-out Dates
- 💰 Automatic Rent Calculation
- 👤 User Profile Management
- 📋 My Listings and My Bookings
- 🔒 Protected Routes
- 📱 Responsive Design
- 🔔 Success and Error Notifications

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript, Tailwind CSS
- **Routing & State:** React Router DOM, Context API
- **Backend:** Node.js, Express.js, REST APIs
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs
- **Image Storage:** Cloudinary
- **Deployment:** Vercel, Render

## 📂 Project Structure

```text
Full-Stack-airbnb-clone/
├── client/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
cd Full-Stack-airbnb-clone
```

### 2. Install Dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend, open a separate terminal:

```bash
cd server
npm install
```

### 3. Environment Variables

Create `.env` files according to your application configuration.

Example backend `.env`:

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Configure the frontend API URL and any additional required variables.

### 4. Run the Application

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the local URL displayed in your terminal.

## 🔒 Security

- Password hashing using bcryptjs.
- JWT-based authentication.
- Protected routes and authenticated API requests.
- Environment variables for sensitive credentials.

## 🚀 Future Improvements

- Online Payment Integration
- Property Reviews and Ratings
- Wishlist Functionality
- Advanced Search and Filters
- Email Notifications

## 🎯 Key Learnings

- Full-stack MERN development.
- REST API integration and CRUD operations.
- Authentication and authorization.
- MongoDB database management.
- Image upload and cloud storage.
- Booking workflows and deployment.

## 👨‍💻 Author

Developed as a full-stack web development project using the MERN stack.

---

⭐ If you find this project useful, consider giving the repository a star.

**Built with ❤️ using the MERN Stack.**
