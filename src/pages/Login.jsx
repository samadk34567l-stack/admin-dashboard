import React, { useState } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Divider,
} from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { useSnackbar } from 'notistack'
import './Login.css'

const BerryLogo = () => (
  <Box className="auth-logo">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="berryGradL1" x1="4" y1="4" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#26c6da" />
          <stop offset="100%" stopColor="#00897b" />
        </linearGradient>
        <linearGradient id="berryGradL2" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00acc1" />
          <stop offset="100%" stopColor="#00695c" />
        </linearGradient>
      </defs>
      <circle cx="17" cy="22" r="13" fill="url(#berryGradL1)" />
      <circle cx="25" cy="14" r="9" fill="url(#berryGradL2)" />
      <path d="M20 6c1.5-2 4-3 6.5-2.6" stroke="#43a047" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <ellipse cx="27" cy="4.5" rx="3.2" ry="2" fill="#66bb6a" transform="rotate(-25 27 4.5)" />
    </svg>
    <Typography variant="h5" className="auth-logo__text">
      BERRY
    </Typography>
  </Box>
)

export default function Login() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('info@codedthemes.com')
  const [password, setPassword] = useState('123456')
  const [keepLoggedIn, setKeepLoggedIn] = useState(true)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!email.trim()) {
      newErrors.email = 'Email / Username is required'
    } else if (email.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const users = JSON.parse(localStorage.getItem('berry_users') || '[]')
    const matchedUser = users.find(
      (u) => (u.email === email || u.username === email) && u.password === password,
    )

    if (!matchedUser && users.length > 0) {
      setErrors({ password: 'Invalid email/username or password' })
      enqueueSnackbar('Invalid credentials!', { variant: 'error' })
      return
    }

    const sessionUser = matchedUser || { email, firstName: '', lastName: '' }
    localStorage.setItem('berry_current_user', JSON.stringify(sessionUser))
    localStorage.setItem('berry_is_logged_in', 'true')
    localStorage.setItem('berry_keep_logged_in', keepLoggedIn ? 'true' : 'false')

    enqueueSnackbar('Signed in successfully!', { variant: 'success' })
    navigate('/')
  }

  return (
    <Box className="auth-page">
      <Paper elevation={0} className="auth-card">
        <BerryLogo />

        <Typography variant="h4" className="auth-title">
          Hi, Welcome Back
        </Typography>
        <Typography variant="body2" className="auth-subtitle">
          Enter your credentials to continue
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Email Address / Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            className="auth-field"
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((s) => !s)} edge="end" size="small">
                    {showPassword ? <VisibilityOffOutlinedIcon fontSize="small" /> : <VisibilityOutlinedIcon fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="auth-field--tight"
          />

          <Box className="auth-row">
            <FormControlLabel
              control={
                <Checkbox
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  size="small"
                />
              }
              label={<Typography variant="body2">Keep me logged in</Typography>}
            />
            <Link href="#" underline="hover" variant="body2" className="auth-link">
              Forgot Password?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            className="auth-submit-btn"
          >
            Sign In
          </Button>

          <Divider className="auth-divider" />

          <Typography variant="body2" className="auth-footer-text">
            Don&apos;t have an account?{' '}
            <Link component={RouterLink} to="/signup" underline="hover" className="auth-link">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
