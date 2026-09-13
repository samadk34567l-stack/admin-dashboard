import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import {
  Box,
  Card,
  Typography,
  TextField,
  Breadcrumbs,
  Link,
  Button,
  Avatar,
  Divider,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import UploadIcon from '@mui/icons-material/Upload'
import { initialCustomers } from '../data/customers.js'
import './CustomerCreate.css'

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Pakistan', 'India']
const cities = ['New York', 'Toronto', 'London', 'Sydney', 'Karachi', 'Delhi']

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[0-9]{7,15}$/
const pinRegex = /^[0-9]{4,10}$/

export default function CustomerCreate() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    countryCode: 'US',
    contact: '',
    address: '',
    pinCode: '',
    city: '',
    country: '',
    notes: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
    if (submitted) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
    }
  }

  const validateField = (field, value) => {
    switch (field) {
      case 'firstName':
        return value.trim().length === 0 ? 'First name is required' : ''
      case 'lastName':
        return value.trim().length === 0 ? 'Last name is required' : ''
      case 'userName':
        return value.trim().length === 0
          ? 'User name is required'
          : value.trim().length < 3
          ? 'User name must be at least 3 characters'
          : ''
      case 'email':
        if (value.trim().length === 0) return 'Email is required'
        if (!emailRegex.test(value)) return 'Enter a valid email address'
        return ''
      case 'contact':
        if (value.trim().length === 0) return 'Contact number is required'
        if (!phoneRegex.test(value)) return 'Enter a valid phone number (digits only)'
        return ''
      case 'address':
        return value.trim().length === 0 ? 'Address is required' : ''
      case 'pinCode':
        if (value.trim().length === 0) return 'Pin code is required'
        if (!pinRegex.test(value)) return 'Enter a valid pin code'
        return ''
      case 'city':
        return value.trim().length === 0 ? 'Please select a city' : ''
      case 'country':
        return value.trim().length === 0 ? 'Please select a country' : ''
      default:
        return ''
    }
  }

  const validateAll = () => {
    const requiredFields = [
      'firstName',
      'lastName',
      'userName',
      'email',
      'contact',
      'address',
      'pinCode',
      'city',
      'country',
    ]
    const newErrors = {}
    requiredFields.forEach((field) => {
      const err = validateField(field, form[field])
      if (err) newErrors[field] = err
    })
    return newErrors
  }

  const handleAdd = () => {
    setSubmitted(true)
    const newErrors = validateAll()
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector('[data-error="true"]')
      if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    const newCustomer = {
      id: initialCustomers.length + Math.floor(Math.random() * 1000) + 100,
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.contact,
      country: form.country,
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=68',
    }
    initialCustomers.push(newCustomer)
    enqueueSnackbar('Customer created successfully!', { variant: 'success' })
    navigate('/customer')
  }

  const handleDiscard = () => {
    navigate('/customer')
  }

  return (
    <Box>
      <Box className="customer-form__header">
        <Typography variant="h5" className="customer-form__title">
          Create
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.secondary">Customer</Typography>
          <Typography color="text.primary">Create</Typography>
        </Breadcrumbs>
      </Box>

      <Card className="customer-form__card">
        <Typography variant="h6" className="customer-form__section-title">
          New Customer
        </Typography>
        <Divider className="customer-form__divider" />

        <Box className="customer-form__profile-row">
          <Box className="customer-form__profile-left">
            <Avatar className="customer-form__avatar">
              <PhotoCameraIcon className="customer-form__avatar-icon" />
            </Avatar>
            <Box>
              <Typography className="customer-form__profile-label">Personal Information</Typography>
              <Typography variant="body2" color="text.secondary">
                Add a profile picture (optional)
              </Typography>
            </Box>
          </Box>
          <Button variant="outlined" startIcon={<UploadIcon />}>
            Upload Picture
          </Button>
        </Box>

        <Typography className="customer-form__subsection-title">Personal Information</Typography>
        <Grid container spacing={3} className="customer-form__grid">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="customer-form__field-label">
              First Name <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter first name"
              value={form.firstName}
              onChange={handleChange('firstName')}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              data-error={Boolean(errors.firstName)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="customer-form__field-label">
              Last Name <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange('lastName')}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              data-error={Boolean(errors.lastName)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="customer-form__field-label">
              User Name <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter user name"
              value={form.userName}
              onChange={handleChange('userName')}
              error={Boolean(errors.userName)}
              helperText={errors.userName}
              data-error={Boolean(errors.userName)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="customer-form__field-label">
              Email <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your mail"
              value={form.email}
              onChange={handleChange('email')}
              error={Boolean(errors.email)}
              helperText={errors.email}
              data-error={Boolean(errors.email)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="customer-form__field-label">
              Contact <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <Box className="customer-form__contact-row">
              <FormControl className="customer-form__code-select">
                <Select
                  value={form.countryCode}
                  onChange={handleChange('countryCode')}
                >
                  <MenuItem value="US">US</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="CA">CA</MenuItem>
                  <MenuItem value="PK">PK</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                placeholder="12365xx xxxxx"
                value={form.contact}
                onChange={handleChange('contact')}
                error={Boolean(errors.contact)}
                helperText={errors.contact}
                data-error={Boolean(errors.contact)}
              />
            </Box>
          </Grid>
        </Grid>

        <Divider className="customer-form__divider" />

        <Typography className="customer-form__subsection-title">Address Information</Typography>
        <Grid container spacing={3} className="customer-form__grid">
          <Grid item xs={12}>
            <Typography variant="body2" className="customer-form__field-label">
              Address <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange('address')}
              error={Boolean(errors.address)}
              helperText={errors.address}
              data-error={Boolean(errors.address)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" className="customer-form__field-label">
              Pin Code <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <TextField
              fullWidth
              placeholder="123456"
              value={form.pinCode}
              onChange={handleChange('pinCode')}
              error={Boolean(errors.pinCode)}
              helperText={errors.pinCode}
              data-error={Boolean(errors.pinCode)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" className="customer-form__field-label">
              City <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <FormControl fullWidth error={Boolean(errors.city)}>
              <Select
                displayEmpty
                value={form.city}
                onChange={handleChange('city')}
                data-error={Boolean(errors.city)}
              >
                <MenuItem value="">
                  <em className="customer-form__placeholder">Select City</em>
                </MenuItem>
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              {errors.city && (
                <Typography variant="caption" color="error" className="customer-form__select-error-text">
                  {errors.city}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" className="customer-form__field-label">
              Country <Box component="span" className="customer-form__required">*</Box>
            </Typography>
            <FormControl fullWidth error={Boolean(errors.country)}>
              <Select
                displayEmpty
                value={form.country}
                onChange={handleChange('country')}
                data-error={Boolean(errors.country)}
              >
                <MenuItem value="">
                  <em className="customer-form__placeholder">Select Country</em>
                </MenuItem>
                {countries.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              {errors.country && (
                <Typography variant="caption" color="error" className="customer-form__select-error-text">
                  {errors.country}
                </Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <Divider className="customer-form__divider" />

        <Typography className="customer-form__subsection-title">Additional Notes</Typography>
        <Box className="customer-form__notes">
          <Typography variant="body2" className="customer-form__field-label">
            Notes
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Add any additional information about this customer..."
            value={form.notes}
            onChange={handleChange('notes')}
          />
        </Box>

        <Box className="customer-form__actions">
          <Button color="error" onClick={handleDiscard}>
            Discard
          </Button>
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </Box>
      </Card>
    </Box>
  )
}
