import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Card,
  Typography,
  TextField,
  Breadcrumbs,
  Link,
  Avatar,
  Divider,
  Grid,
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Badge,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { initialCustomers } from '../data/customers.js'
import './CustomerDetails.css'

export default function CustomerDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const customer =
    initialCustomers.find((c) => String(c.id) === String(id)) || initialCustomers[0]

  const [firstName, lastName] = customer.name.split(' ')
  const shippingAddress = 'Florida Square, Wouruno, New York, United States - 393010'
  const billingAddress = 'Florida Square, Wouruno, New York, United States - 393010'

  return (
    <Box>
      <Box className="customer-details__header">
        <Typography variant="h5" className="customer-details__title">
          Details
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.secondary">Customer</Typography>
          <Typography color="text.primary">Details</Typography>
        </Breadcrumbs>
      </Box>

      <Card className="customer-details__card">
        <Grid container spacing={4}>
          {/* Left column */}
          <Grid item xs={12} md={4}>
            <Box className="customer-details__profile">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<Box className="customer-details__status-dot" />}
              >
                <Avatar src={customer.avatar} alt={customer.name} className="customer-details__avatar" />
              </Badge>
              <Typography variant="h6" className="customer-details__name">
                {customer.name}
              </Typography>
            </Box>

            <Box className="customer-details__stats">
              <Box className="customer-details__stat">
                <Typography variant="body2" color="text.secondary">
                  Total Order
                </Typography>
                <Typography className="customer-details__stat-value">185</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box className="customer-details__stat">
                <Typography variant="body2" color="text.secondary">
                  Order Values
                </Typography>
                <Typography className="customer-details__stat-value">7421</Typography>
              </Box>
            </Box>

            <Divider className="customer-details__divider" />

            <Box className="customer-details__contact-row">
              <Box className="customer-details__icon-box customer-details__icon-box--phone">
                <PhoneIcon className="customer-details__icon--phone" />
              </Box>
              <Typography variant="body2">{customer.phone}</Typography>
            </Box>
            <Box className="customer-details__contact-row">
              <Box className="customer-details__icon-box customer-details__icon-box--email">
                <EmailIcon className="customer-details__icon--email" />
              </Box>
              <Typography variant="body2">{customer.email}</Typography>
            </Box>
            <Box className="customer-details__contact-row--last">
              <Box className="customer-details__icon-box customer-details__icon-box--calendar">
                <CalendarTodayIcon className="customer-details__icon--calendar" />
              </Box>
              <Typography variant="body2">Joined 4 Sep 2026</Typography>
            </Box>

            <Divider className="customer-details__divider-lg" />

            <Box className="customer-details__address-box">
              <Box className="customer-details__address-header">
                <Typography className="customer-details__address-title">Shipping Address</Typography>
                <IconButton size="small" className="customer-details__edit-btn">
                  <EditIcon className="customer-details__edit-icon" color="primary" />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {shippingAddress}
              </Typography>
            </Box>

            <Box className="customer-details__address-box">
              <Box className="customer-details__address-header">
                <Typography className="customer-details__address-title">Billing Address</Typography>
                <IconButton size="small" className="customer-details__edit-btn">
                  <EditIcon className="customer-details__edit-icon" color="primary" />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {billingAddress}
              </Typography>
            </Box>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} md={8}>
            <Typography className="customer-details__section-title">Basic Information</Typography>
            <Grid container spacing={3} className="customer-details__grid">
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" className="customer-details__field-label">
                  First Name
                </Typography>
                <TextField fullWidth value={firstName} disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" className="customer-details__field-label">
                  Last Name
                </Typography>
                <TextField fullWidth value={lastName || ''} disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" className="customer-details__field-label">
                  User Name
                </Typography>
                <TextField
                  fullWidth
                  value={customer.name.toLowerCase().replace(' ', '_')}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" className="customer-details__field-label">
                  Email
                </Typography>
                <TextField fullWidth value={customer.email} disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" className="customer-details__field-label">
                  Contact <Box component="span" className="customer-details__required">*</Box>
                </Typography>
                <Box className="customer-details__contact-field-row">
                  <FormControl className="customer-details__code-select">
                    <Select value="US" disabled>
                      <MenuItem value="US">US</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField fullWidth value={customer.phone} disabled />
                </Box>
              </Grid>
            </Grid>

            <Divider className="customer-details__divider-lg" />

            <Typography className="customer-details__section-title">Address Information</Typography>
            <Grid container spacing={3} className="customer-details__grid">
              <Grid item xs={12}>
                <Typography variant="body2" className="customer-details__field-label">
                  Address
                </Typography>
                <TextField fullWidth value="Florida Square, Wouruno" disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className="customer-details__field-label">
                  Pin Code
                </Typography>
                <TextField fullWidth value="393010" disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className="customer-details__field-label">
                  City
                </Typography>
                <FormControl fullWidth>
                  <Select value="New York" disabled>
                    <MenuItem value="New York">New York</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2" className="customer-details__field-label">
                  Country
                </Typography>
                <FormControl fullWidth>
                  <Select value={customer.country} disabled>
                    <MenuItem value={customer.country}>{customer.country}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Divider className="customer-details__divider-lg" />

            <Typography className="customer-details__section-title">Additional Notes</Typography>
            <Typography variant="body2" className="customer-details__field-label">
              Note
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value="Sample description text for user profile."
              disabled
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}
