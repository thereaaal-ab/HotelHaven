# Database Integration Guide

This guide will help you integrate your database with the authentication system.

## Current Status

The authentication system is set up with placeholder logic. You need to connect it to your actual database.

## Files to Update

### 1. `src/services/authService.js`
This file contains the authentication API calls. Update the `loginUser` function with your database connection.

### 2. `src/contexts/AuthContext.jsx`
Update the `login` function to use your `authService` instead of the placeholder fetch call.

## Database Integration Steps

### Step 1: Choose Your Database

The system supports any database. Common options:
- MySQL/MariaDB
- PostgreSQL
- MongoDB
- SQLite
- Firebase
- Supabase

### Step 2: Set Up Backend API

You'll need to create a backend API endpoint for authentication. The endpoint should:

1. Accept POST requests to `/api/auth/login`
2. Receive `{ email, password }` in the request body
3. Query your database to verify credentials
4. Return `{ user: {...}, token: "..." }` on success
5. Return error message on failure

### Step 3: Update authService.js

Replace the placeholder in `src/services/authService.js`:

```javascript
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    return {
      success: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'An error occurred during login',
    };
  }
};
```

### Step 4: Update AuthContext.jsx

Import and use your authService:

```javascript
import { loginUser } from '../services/authService';

const login = async (email, password) => {
  try {
    setLoading(true);
    const result = await loginUser(email, password);
    
    if (result.success) {
      localStorage.setItem('adminUser', JSON.stringify(result.user));
      localStorage.setItem('adminToken', result.token);
      setUser(result.user);
      setIsAuthenticated(true);
      setLoading(false);
      return { success: true };
    } else {
      setLoading(false);
      return { success: false, error: result.error };
    }
  } catch (error) {
    setLoading(false);
    return { success: false, error: error.message };
  }
};
```

## Database Schema Example

### Admin Users Table

```sql
CREATE TABLE admin_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Example Backend Implementation (Node.js/Express)

```javascript
// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database'); // Your database connection

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Query database
    const [users] = await db.query(
      'SELECT * FROM admin_users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];

    // Verify password (if using bcrypt)
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return user data (without password)
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
```

## Environment Variables

Create a `.env` file in your project root:

```env
VITE_API_BASE_URL=http://localhost:3001/api
# Or your production API URL
# VITE_API_BASE_URL=https://your-api-domain.com/api
```

## Security Best Practices

1. **Hash Passwords**: Never store plain text passwords. Use bcrypt or similar.
2. **Use HTTPS**: Always use HTTPS in production.
3. **JWT Tokens**: Use JWT tokens for authentication with expiration.
4. **Validate Input**: Validate and sanitize all user inputs.
5. **Rate Limiting**: Implement rate limiting on login endpoints.
6. **SQL Injection**: Use parameterized queries, never concatenate SQL.

## Testing

After integration, test the following:

1. ✅ Valid credentials should log in successfully
2. ✅ Invalid credentials should show error message
3. ✅ Empty fields should show validation error
4. ✅ Protected routes should redirect to login when not authenticated
5. ✅ Logout should clear session and redirect to login

## Need Help?

When you provide your database information, I can help you:
- Set up the database connection
- Create the authentication API endpoints
- Configure the frontend to use your database
- Implement password hashing and JWT tokens

Just share:
- Database type (MySQL, PostgreSQL, MongoDB, etc.)
- Connection details (host, port, database name, credentials)
- Preferred authentication method (JWT, sessions, etc.)

