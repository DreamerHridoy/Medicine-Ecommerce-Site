💊 Medicine Selling eCommerce Website
This project is a full-stack eCommerce platform for selling medicines online. It includes a user-friendly frontend built with React and a secure backend using Express.js and MongoDB. The platform supports user authentication, role-based access (Admin, Seller, Buyer), cart management, payment processing via Stripe, and category-wise medicine browsing.

🚀 Features
Frontend (Client Side)
User authentication (Login/Sign-up) with JWT
Role-based access for Admins, Sellers, and Buyers
Medicine listing and category filtering
Secure payment integration with Stripe
Cart management and order history
Responsive UI with Tailwind CSS and DaisyUI
Real-time data fetching using React Query
Backend (Server Side)
RESTful API with Express.js
JWT-based authentication and role verification (Admin/Seller)
MongoDB for data storage (medicines, users, carts, payments)
Secure Stripe payment integration
CORS and environment variable management with dotenv
🛠️ Technologies Used
Frontend
React for UI development
Vite for fast build and development
React Router for navigation
Tailwind CSS & DaisyUI for styling
Axios for API requests
React Hook Form for form handling
Recharts for data visualization
SweetAlert2 for beautiful alerts
Backend
Express.js for server-side development
MongoDB for database
JWT for secure authentication
Stripe for payment processing
dotenv for environment variables
CORS for cross-origin requests
📦 Installation
Prerequisites
Node.js and npm installed
MongoDB connection string
Stripe API keys
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/medicine-selling-website.git
cd medicine-selling-website
2. Setup Client Side
bash
Copy
Edit
cd client
npm install
Run the development server
bash
Copy
Edit
npm run dev
3. Setup Server Side
bash
Copy
Edit
cd ../server
npm install
Configure .env file in the server directory:
ini
Copy
Edit
PORT=5000
DB_USER=your_mongo_db_username
DB_PASS=your_mongo_db_password
ACCESS_TOKEN_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
Start the server
bash
Copy
Edit
npm start
🔑 Environment Variables
Ensure you create a .env file in your server directory with the following values:

env
Copy
Edit
PORT=5000
DB_USER=your_db_user
DB_PASS=your_db_password
ACCESS_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
🧑‍💻 Roles & Access
Admin: Manage users, approve sellers, and oversee all orders.
Seller: Add, update, or remove medicines.
Buyer: Browse medicines, add to cart, and purchase.
📊 Dashboard Features
Admin Dashboard: User management, sales analytics (with charts), and order summaries.
Seller Dashboard: Medicine management, sales reports, and income tracking.
Buyer Dashboard: Order history, saved items, and easy reordering.
🔒 Authentication
JWT tokens are used to secure APIs.
Role-based access control ensures that Admins, Sellers, and Buyers have specific permissions.
💳 Payment Integration
Stripe is used for secure payments. Users can complete transactions seamlessly using credit/debit cards.

📚 Acknowledgments
React
Express.js
MongoDB
Stripe
Tailwind CSS
Vite
🤝 Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
📞 Contact
For any inquiries or support, feel free to contact me at [eng.sahidul.hridoy@gmail.com].
