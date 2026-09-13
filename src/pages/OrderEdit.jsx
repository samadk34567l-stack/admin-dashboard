import React, { useState } from 'react'
import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Breadcrumbs,
  Link,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Divider,
  Autocomplete,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { useNavigate, useParams } from 'react-router-dom'
import { sampleProducts, initialOrders } from '../data/orders.js'
import './OrderEdit.css'

const countries = ['United States', 'Canada', 'United Kingdom', 'India', 'Australia', 'Pakistan', 'Germany']
const cities = ['New York', 'Toronto', 'London', 'Mumbai', 'Sydney', 'Karachi', 'Berlin']
const paymentMethods = ['Card', 'UPI', 'COD', 'PayPal']

export default function OrderEdit() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [productSearch, setProductSearch] = useState('')
  const [selectedProducts, setSelectedProducts] = useState([
    { id: '098256BH', name: 'Apple iPhone 14 Pro', price: 999.0, quantity: 4 },
    { id: '098336NT', name: 'Samsung Galaxy S23 Ultra', price: 1199.0, quantity: 2 },
  ])

  const [firstName, setFirstName] = useState('Joseph William')
  const [userName, setUserName] = useState('joseph_william')
  const [email, setEmail] = useState('john.doe@example.com')
  const [phone, setPhone] = useState('5623598742')
  const [address, setAddress] = useState('123 Main Street')
  const [pinCode, setPinCode] = useState('100011')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('United States')
  const [payment, setPayment] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('12/29')
  const [cvv, setCvv] = useState('')

  const [errors, setErrors] = useState({})
  const [productError, setProductError] = useState('')

  const isCard = payment === 'Card'

  const validators = {
    firstName: (v) => (!v.trim() ? 'First name is required' : /^[A-Za-z\s]{2,}$/.test(v.trim()) ? '' : 'Enter a valid name (letters only, min 2 chars)'),
    userName: (v) => (!v.trim() ? 'User name is required' : v.trim().length < 3 ? 'User name must be at least 3 characters' : ''),
    email: (v) => (!v.trim() ? 'Email is required' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email address'),
    phone: (v) => (!v.trim() ? 'Phone number is required' : /^\d{7,15}$/.test(v.trim().replace(/\D/g, '')) ? '' : 'Enter a valid phone number (7-15 digits)'),
    address: (v) => (!v.trim() ? 'Address is required' : v.trim().length < 5 ? 'Address must be at least 5 characters' : ''),
    pinCode: (v) => (!v.trim() ? 'Pin code is required' : /^\d{4,10}$/.test(v.trim()) ? '' : 'Enter a valid pin code (numbers only)'),
    city: (v) => (!v ? 'City is required' : ''),
    country: (v) => (!v ? 'Country is required' : ''),
    payment: (v) => (!v ? 'Payment method is required' : ''),
    cardNumber: (v) => (!isCard ? '' : !v.trim() ? 'Card number is required' : /^\d{12,19}$/.test(v.trim().replace(/\s/g, '')) ? '' : 'Enter a valid card number'),
    expiration: (v) => (!isCard ? '' : !v.trim() ? 'Expiration date is required' : /^(0[1-9]|1[0-2])\/\d{2}$/.test(v.trim()) ? '' : 'Use MM/YY format'),
    cvv: (v) => (!isCard ? '' : !v.trim() ? 'CVV is required' : /^\d{3,4}$/.test(v.trim()) ? '' : 'Enter a valid CVV'),
  }

  const fieldValues = {
    firstName,
    userName,
    email,
    phone,
    address,
    pinCode,
    city,
    country,
    payment,
    cardNumber,
    expiration,
    cvv,
  }

  const validateField = (name, value) => {
    const message = validators[name](value)
    setErrors((prev) => ({ ...prev, [name]: message }))
    return message
  }

  const handleBlur = (name) => () => validateField(name, fieldValues[name])

  const validateAll = () => {
    const newErrors = {}
    Object.keys(validators).forEach((name) => {
      const message = validators[name](fieldValues[name])
      if (message) newErrors[name] = message
    })
    setErrors(newErrors)

    const productMsg = selectedProducts.length === 0 ? 'Please select at least one product' : ''
    setProductError(productMsg)

    return Object.keys(newErrors).length === 0 && !productMsg
  }

  const filteredProducts = sampleProducts.filter(
    (p) =>
      !selectedProducts.some((sp) => sp.id === p.id) &&
      p.name.toLowerCase().includes(productSearch.toLowerCase())
  )

  const addProduct = (product) => {
    setSelectedProducts((prev) => [...prev, { ...product, quantity: 1 }])
    setProductSearch('')
    setProductError('')
  }

  const removeProduct = (id) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const updateQuantity = (id, qty) => {
    setSelectedProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, qty) } : p))
    )
  }

  const total = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)

  const handleUpdate = () => {
    if (!validateAll()) return
    const orderId = Number(id)
    const idx = initialOrders.findIndex((o) => o.id === orderId)
    const updated = {
      id: orderId,
      customerName: firstName,
      branch: country,
      paymentType: payment,
      quantity: selectedProducts.reduce((sum, p) => sum + p.quantity, 0),
      orderDate:
        idx !== -1
          ? initialOrders[idx].orderDate
          : new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: idx !== -1 ? initialOrders[idx].status : 'Pending',
    }
    if (idx !== -1) {
      initialOrders[idx] = updated
    } else {
      initialOrders.unshift(updated)
    }
    navigate('/order')
  }

  return (
    <Box>
      <Box className="order-edit__header">
        <Typography variant="h5" className="order-edit__title">
          Edit
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="/" className="order-edit__breadcrumb-home">
            <HomeIcon fontSize="small" />
          </Link>
          <Typography color="text.secondary">Order</Typography>
          <Typography color="text.primary" className="order-edit__breadcrumb-current">
            Edit
          </Typography>
        </Breadcrumbs>
      </Box>

      <Card className="order-edit__card">
        <Box className="order-edit__section-header">
          <Typography variant="h6" className="order-edit__section-title">
            Select Product
          </Typography>
        </Box>

        <Box className="order-edit__product-search-row">
          <Autocomplete
            freeSolo
            options={filteredProducts}
            getOptionLabel={(o) => (typeof o === 'string' ? o : o.name)}
            inputValue={productSearch}
            onInputChange={(e, val) => setProductSearch(val)}
            onChange={(e, val) => {
              if (val && typeof val !== 'string') addProduct(val)
            }}
            className="order-edit__autocomplete"
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder="Search Product"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            disabled={filteredProducts.length === 0}
            onClick={() => filteredProducts[0] && addProduct(filteredProducts[0])}
          >
            Add Product
          </Button>
        </Box>
        {productError && (
          <Typography variant="caption" color="error" className="order-edit__product-error">
            {productError}
          </Typography>
        )}

        <TableContainer className="order-edit__table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="order-edit__head-cell">Product</TableCell>
                <TableCell className="order-edit__head-cell">ID</TableCell>
                <TableCell className="order-edit__head-cell">Price</TableCell>
                <TableCell className="order-edit__head-cell">Quantity</TableCell>
                <TableCell className="order-edit__head-cell" align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedProducts.map((p) => (
                <TableRow key={p.id} hover>
                  <TableCell>
                    <Box className="order-edit__product-name-cell">
                      <Box className="order-edit__product-thumb" />
                      {p.name}
                    </Box>
                  </TableCell>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>${p.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Box className="order-edit__qty-controls">
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(p.id, p.quantity - 1)}
                        className="order-edit__qty-btn"
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <TextField
                        size="small"
                        value={p.quantity}
                        onChange={(e) => updateQuantity(p.id, Number(e.target.value) || 1)}
                        className="order-edit__qty-field"
                        inputProps={{ min: 1 }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(p.id, p.quantity + 1)}
                        className="order-edit__qty-btn"
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" color="error" onClick={() => removeProduct(p.id)}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {selectedProducts.length === 0 && (
          <Box className="order-edit__empty-state">
            <Typography className="order-edit__empty-title">No products selected!</Typography>
            <Typography variant="body2" color="text.secondary">
              No products selected. Use the search bar to find and add items, then continue.
            </Typography>
          </Box>
        )}

        <Divider className="order-edit__divider" />
        <Box className="order-edit__total-row">
          <Typography variant="h6" className="order-edit__total-text">
            Total : ${total.toFixed(2)}
          </Typography>
        </Box>
      </Card>

      <Card className="order-edit__card">
        <Typography variant="h6" className="order-edit__form-title">
          Customer Details
        </Typography>
        <Box className="order-edit__form-grid-2">
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              First Name <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                if (errors.firstName) validateField('firstName', e.target.value)
              }}
              onBlur={handleBlur('firstName')}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
          </Box>
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              User Name <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter user name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value)
                if (errors.userName) validateField('userName', e.target.value)
              }}
              onBlur={handleBlur('userName')}
              error={Boolean(errors.userName)}
              helperText={errors.userName}
            />
          </Box>
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              Email <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) validateField('email', e.target.value)
              }}
              onBlur={handleBlur('email')}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Box>
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              Phone Number <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="1231x xxxxx"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                if (errors.phone) validateField('phone', e.target.value)
              }}
              onBlur={handleBlur('phone')}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              InputProps={{
                startAdornment: <InputAdornment position="start">US</InputAdornment>,
              }}
            />
          </Box>
        </Box>

        <Typography variant="h6" className="order-edit__form-title">
          Address Information
        </Typography>
        <Box className="order-edit__field-group">
          <Typography variant="body2" className="order-edit__field-label">
            Address <Box component="span" className="order-edit__required-mark">*</Box>
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
              if (errors.address) validateField('address', e.target.value)
            }}
            onBlur={handleBlur('address')}
            error={Boolean(errors.address)}
            helperText={errors.address}
          />
        </Box>
        <Box className="order-edit__form-grid-3">
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              Pin Code <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="123456"
              value={pinCode}
              onChange={(e) => {
                setPinCode(e.target.value)
                if (errors.pinCode) validateField('pinCode', e.target.value)
              }}
              onBlur={handleBlur('pinCode')}
              error={Boolean(errors.pinCode)}
              helperText={errors.pinCode}
            />
          </Box>
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              City <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <FormControl fullWidth size="small" error={Boolean(errors.city)}>
              <Select
                displayEmpty
                value={city}
                onChange={(e) => {
                  setCity(e.target.value)
                  validateField('city', e.target.value)
                }}
                onBlur={handleBlur('city')}
                renderValue={(val) => val || <Box component="span" className="order-edit__placeholder-text">Select City</Box>}
              >
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              {errors.city && (
                <Typography variant="caption" color="error" className="order-edit__field-error">
                  {errors.city}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" className="order-edit__field-label">
              Country <Box component="span" className="order-edit__required-mark">*</Box>
            </Typography>
            <FormControl fullWidth size="small" error={Boolean(errors.country)}>
              <Select
                displayEmpty
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value)
                  validateField('country', e.target.value)
                }}
                onBlur={handleBlur('country')}
                renderValue={(val) => val || <Box component="span" className="order-edit__placeholder-text">Select Country</Box>}
              >
                {countries.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              {errors.country && (
                <Typography variant="caption" color="error" className="order-edit__field-error">
                  {errors.country}
                </Typography>
              )}
            </FormControl>
          </Box>
        </Box>

        <Typography variant="h6" className="order-edit__form-title">
          Payment
        </Typography>
        <FormControl fullWidth size="small" className="order-edit__payment-field" error={Boolean(errors.payment)}>
          <Select
            displayEmpty
            value={payment}
            onChange={(e) => {
              setPayment(e.target.value)
              validateField('payment', e.target.value)
            }}
            onBlur={handleBlur('payment')}
            startAdornment={
              <InputAdornment position="start">
                <CreditCardIcon fontSize="small" />
              </InputAdornment>
            }
            renderValue={(val) => val || <Box component="span" className="order-edit__placeholder-text">Select Payment Method</Box>}
          >
            {paymentMethods.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
          {errors.payment && (
            <Typography variant="caption" color="error" className="order-edit__field-error">
              {errors.payment}
            </Typography>
          )}
        </FormControl>

        {isCard && (
          <>
            <Box className="order-edit__field-group">
              <Typography variant="body2" className="order-edit__field-label">
                Credit Card Number <Box component="span" className="order-edit__required-mark">*</Box>
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="password"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value)
                  if (errors.cardNumber) validateField('cardNumber', e.target.value)
                }}
                onBlur={handleBlur('cardNumber')}
                error={Boolean(errors.cardNumber)}
                helperText={errors.cardNumber}
              />
            </Box>
            <Box className="order-edit__form-grid-2">
              <Box>
                <Typography variant="body2" className="order-edit__field-label">
                  Expiration Date <Box component="span" className="order-edit__required-mark">*</Box>
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="MM/YY"
                  value={expiration}
                  onChange={(e) => {
                    setExpiration(e.target.value)
                    if (errors.expiration) validateField('expiration', e.target.value)
                  }}
                  onBlur={handleBlur('expiration')}
                  error={Boolean(errors.expiration)}
                  helperText={errors.expiration}
                />
              </Box>
              <Box>
                <Typography variant="body2" className="order-edit__field-label">
                  CVV <Box component="span" className="order-edit__required-mark">*</Box>
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  type="password"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => {
                    setCvv(e.target.value)
                    if (errors.cvv) validateField('cvv', e.target.value)
                  }}
                  onBlur={handleBlur('cvv')}
                  error={Boolean(errors.cvv)}
                  helperText={errors.cvv}
                />
              </Box>
            </Box>
          </>
        )}

        <Box className="order-edit__footer-actions">
          <Button color="error" onClick={() => navigate('/order')}>
            Discard
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Card>
    </Box>
  )
}
