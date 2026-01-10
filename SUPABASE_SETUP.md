# Supabase Authentication Setup

Your hotel website is now integrated with Supabase for authentication!

## ✅ What's Already Configured

- ✅ Supabase client initialized
- ✅ Authentication context with Supabase integration
- ✅ Login page connected to Supabase
- ✅ Protected admin routes
- ✅ Session management

## 🔧 Current Configuration

**Project ID:** `prsbwhvqugthmqlbpovs`  
**Supabase URL:** `https://prsbwhvqugthmqlbpovs.supabase.co`

The credentials are configured in:
- `.env` file (for local development)
- `src/lib/supabase.js` (fallback values)

## 👤 Creating Admin Users

To create admin users for the login system:

### Option 1: Via Supabase Dashboard (Recommended)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `prsbwhvqugthmqlbpovs`
3. Navigate to **Authentication** > **Users**
4. Click **"Add user"** or **"Invite user"**
5. Enter the admin email and password
6. Click **"Create user"**

### Option 2: Via Supabase SQL Editor

1. Go to **SQL Editor** in Supabase Dashboard
2. Run this SQL to create an admin user:

```sql
-- Create admin user
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@luxuryhaven.com',  -- Change this email
  crypt('your-secure-password', gen_salt('bf')),  -- Change this password
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"name": "Admin User", "role": "admin"}'  -- Optional: Add user metadata
);
```

### Option 3: Via Supabase Auth API (Programmatic)

You can also create users programmatically using the Supabase Admin API (requires service role key).

## 🔐 Login Credentials

After creating a user, you can log in at:
- **URL:** `http://localhost:3000/login` (development)
- **Email:** The email you used when creating the user
- **Password:** The password you set

## 🛡️ Security Features

Supabase automatically provides:
- ✅ Password hashing (bcrypt)
- ✅ JWT token generation
- ✅ Session management
- ✅ Secure authentication flow
- ✅ Email verification (optional)

## 📝 User Metadata

You can add custom metadata to users for additional information:

```javascript
// In Supabase Dashboard > Authentication > Users > Edit User
// Add to user_metadata:
{
  "name": "Admin User",
  "role": "admin"
}
```

This metadata will be available in the admin dashboard.

## 🔄 Testing the Integration

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to login page:**
   - Go to `http://localhost:3000/login`
   - Or try accessing `/admin` (will redirect to login)

3. **Test login:**
   - Use the email and password of a user you created in Supabase
   - Should redirect to `/admin` on success

4. **Test logout:**
   - Click the logout button in the admin dashboard
   - Should redirect to login page

## 🚨 Troubleshooting

### "Invalid login credentials"
- Verify the user exists in Supabase Dashboard > Authentication > Users
- Check that email and password are correct
- Ensure the user's email is confirmed (if email confirmation is enabled)

### "Network error" or connection issues
- Check that `VITE_SUPABASE_URL` in `.env` is correct
- Verify your internet connection
- Check Supabase project status in dashboard

### Session not persisting
- Supabase handles sessions automatically
- Check browser localStorage (should contain Supabase session)
- Clear browser cache and try again

## 📚 Additional Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Dashboard](https://supabase.com/dashboard)

## 🔒 Next Steps

1. Create your first admin user in Supabase Dashboard
2. Test the login functionality
3. (Optional) Set up email verification in Supabase settings
4. (Optional) Configure password reset functionality
5. (Optional) Add role-based access control if needed

Your authentication system is ready to use! 🎉

