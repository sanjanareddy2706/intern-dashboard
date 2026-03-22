# Intern Dashboard

A modern web application for managing interns, built with Node.js, Express, and vanilla JavaScript. Features include user authentication, CRUD operations, search, sorting, and a leaderboard.

## Features

- ✅ User login/logout system
- ✅ Add, view, and delete interns
- ✅ Search interns by name
- ✅ Sort by donations (high to low, low to high)
- ✅ Persistent data storage (localStorage)
- ✅ Responsive design
- ✅ Leaderboard page
- ✅ Modern UI with cards and gradients

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Storage**: In-memory with localStorage persistence
- **Styling**: Custom CSS with responsive design

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/intern-dashboard.git
   cd intern-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   node server.js
   ```

4. **Open in browser**:
   - Go to `http://localhost:3000/login.html`
   - Click "Login" to access the dashboard

## Usage

### Login
- Access the login page and click "Login" (dummy authentication)

### Dashboard
- **Add Intern**: Fill the form with name, role, referral code, and donations
- **View Interns**: See all interns in a list with details
- **Search**: Type in the search box to filter by name
- **Sort**: Use the dropdown to sort by donations
- **Delete**: Click the delete button on any intern
- **Leaderboard**: Click the link to view rankings
- **Logout**: Click logout to return to login

### Leaderboard
- View top interns by donations (static for demo)

## Project Structure

```
intern-dashboard/
│── server.js              # Express server
│── package.json           # Dependencies
│── .gitignore             # Git ignore rules
│── public/
│    ├── index.html        # Main dashboard
│    ├── login.html        # Login page
│    ├── leaderboard.html  # Leaderboard page
│    ├── script.js         # Frontend logic
│    └── style.css         # Styling
```

## API Endpoints

- `GET /api/interns` - Get all interns
- `POST /api/interns` - Add new intern
- `DELETE /api/interns/:id` - Delete intern by ID

## Data Model

Each intern has:
- `name`: String (required)
- `role`: String (required)
- `referralCode`: String
- `donations`: Number (default 0)
- `status`: String (default "Active")

## Future Enhancements

- Real database integration (MongoDB, PostgreSQL)
- User registration and authentication
- Role-based access control
- Export data to CSV
- Charts and analytics
- Email notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Screenshots

(Add screenshots here if available)

---

Built with ❤️ for intern management