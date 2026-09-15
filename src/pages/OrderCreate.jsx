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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Avatar,
  Pagination,
  PaginationItem,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import CheckIcon from '@mui/icons-material/Check'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { sampleProducts, initialOrders } from '../data/orders.js'
import './OrderCreate.css'

const countries = ['United States', 'Canada', 'United Kingdom', 'India', 'Australia', 'Pakistan', 'Germany']
const cities = ['New York', 'Toronto', 'London', 'Mumbai', 'Sydney', 'Karachi', 'Berlin']
const paymentMethods = ['Card', 'UPI', 'COD', 'PayPal']

export default function OrderCreate() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [productSearch, setProductSearch] = useState('')
  const [selectedProducts, setSelectedProducts] = useState([])
  const [productDialogOpen, setProductDialogOpen] = useState(false)
  const [dialogSearch, setDialogSearch] = useState('')
  const [dialogPage, setDialogPage] = useState(1)
  const productsPerPage = 6

  const [firstName, setFirstName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [payment, setPayment] = useState('')
  const [errors, setErrors] = useState({})
  const [productError, setProductError] = useState('')

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
  }

  const fieldValues = { firstName, userName, email, phone, address, pinCode, city, country, payment }

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

  const toggleProductInDialog = (product) => {
    setSelectedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setProductError('')
  }

  const dialogFilteredProducts = sampleProducts.filter((p) =>
    p.name.toLowerCase().includes(dialogSearch.toLowerCase())
  )
  const dialogPageCount = Math.max(1, Math.ceil(dialogFilteredProducts.length / productsPerPage))
  const dialogPagedProducts = dialogFilteredProducts.slice(
    (dialogPage - 1) * productsPerPage,
    dialogPage * productsPerPage
  )

  const openProductDialog = () => {
    setDialogSearch('')
    setDialogPage(1)
    setProductDialogOpen(true)
  }

  const updateQuantity = (id, qty) => {
    setSelectedProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, qty) } : p))
    )
  }

  const total = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)

  const handleAdd = () => {
    if (!validateAll()) return
    const maxId = initialOrders.reduce((max, o) => Math.max(max, o.id), 790960)
    initialOrders.unshift({
      id: maxId + 1,
      customerName: `${firstName}`,
      branch: country,
      paymentType: payment,
      quantity: selectedProducts.reduce((sum, p) => sum + p.quantity, 0),
      orderDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Pending',
    })
    enqueueSnackbar('Order created successfully!', { variant: 'success' })
    navigate('/order')
  }

  return (
    <Box>
      <Box className="order-create__header">
        <Typography variant="h5" className="order-create__title">
          Create
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="/" className="order-create__breadcrumb-home">
            <HomeIcon fontSize="small" />
          </Link>
          <Typography color="text.secondary">Order</Typography>
          <Typography color="text.primary" className="order-create__breadcrumb-current">
            Create
          </Typography>
        </Breadcrumbs>
      </Box>

      <Card className="order-create__card">
        <Box className="order-create__section-header">
          <Typography variant="h6" className="order-create__section-title">
            Select Product
          </Typography>
        </Box>

        <Box className="order-create__product-search-row">
          <Autocomplete
            freeSolo
            options={filteredProducts}
            getOptionLabel={(o) => (typeof o === 'string' ? o : o.name)}
            inputValue={productSearch}
            onInputChange={(e, val) => setProductSearch(val)}
            onChange={(e, val) => {
              if (val && typeof val !== 'string') addProduct(val)
            }}
            className="order-create__autocomplete"
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
            onClick={openProductDialog}
          >
            Add Product
          </Button>
        </Box>
        {productError && (
          <Typography variant="caption" color="error" className="order-create__product-error">
            {productError}
          </Typography>
        )}

        <TableContainer className="order-create__table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="order-create__head-cell">Product</TableCell>
                <TableCell className="order-create__head-cell">ID</TableCell>
                <TableCell className="order-create__head-cell">Price</TableCell>
                <TableCell className="order-create__head-cell">Quantity</TableCell>
                <TableCell className="order-create__head-cell" align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedProducts.map((p) => (
                <TableRow key={p.id} hover>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>${p.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      value={p.quantity}
                      onChange={(e) => updateQuantity(p.id, Number(e.target.value))}
                      className="order-create__qty-field"
                      inputProps={{ min: 1 }}
                    />
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
          <Box className="order-create__empty-state">
            <Box
              component="img"
              src="https://raw.githubusercontent.com/codedthemes/berry-free-react-admin-template/master/src/assets/images/e-commerce/empty.svg"
              alt="No products selected"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
              className="order-create__empty-image"
            />
            <Typography className="order-create__empty-title">No products selected!</Typography>
            <Typography variant="body2" color="text.secondary">
              No products selected. Use the search bar to find and add items, then continue.
            </Typography>
          </Box>
        )}

        <Divider className="order-create__divider" />
        <Box className="order-create__total-row">
          <Typography variant="h6" className="order-create__total-text">
            Total : ${total.toFixed(2)}
          </Typography>
        </Box>
      </Card>

      <Card className="order-create__card">
        <Typography variant="h6" className="order-create__form-title">
          Customer Details
        </Typography>
        <Box className="order-create__form-grid-2">
          <Box>
            <Typography variant="body2" className="order-create__field-label">
              First Name <Box component="span" className="order-create__required-mark">*</Box>
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
            <Typography variant="body2" className="order-create__field-label">
              User Name <Box component="span" className="order-create__required-mark">*</Box>
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
            <Typography variant="body2" className="order-create__field-label">
              Email <Box component="span" className="order-create__required-mark">*</Box>
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
            <Typography variant="body2" className="order-create__field-label">
              Phone Number <Box component="span" className="order-create__required-mark">*</Box>
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
                startAdornment: (
                  <InputAdornment position="start">US</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Typography variant="h6" className="order-create__form-title">
          Address Information
        </Typography>
        <Box className="order-create__field-group">
          <Typography variant="body2" className="order-create__field-label">
            Address <Box component="span" className="order-create__required-mark">*</Box>
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
        <Box className="order-create__form-grid-3">
          <Box>
            <Typography variant="body2" className="order-create__field-label">
              Pin Code <Box component="span" className="order-create__required-mark">*</Box>
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
            <Typography variant="body2" className="order-create__field-label">
              City <Box component="span" className="order-create__required-mark">*</Box>
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
                renderValue={(val) => val || <Box component="span" className="order-create__placeholder-text">Select City</Box>}
              >
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              {errors.city && (
                <Typography variant="caption" color="error" className="order-create__field-error">
                  {errors.city}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" className="order-create__field-label">
              Country <Box component="span" className="order-create__required-mark">*</Box>
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
                renderValue={(val) => val || <Box component="span" className="order-create__placeholder-text">Select Country</Box>}
              >
                {countries.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
              {errors.country && (
                <Typography variant="caption" color="error" className="order-create__field-error">
                  {errors.country}
                </Typography>
              )}
            </FormControl>
          </Box>
        </Box>

        <Typography variant="h6" className="order-create__form-title">
          Payment
        </Typography>
        <FormControl fullWidth size="small" className="order-create__payment-field" error={Boolean(errors.payment)}>
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
            renderValue={(val) => val || <Box component="span" className="order-create__placeholder-text">Select Payment Method</Box>}
          >
            {paymentMethods.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
          {errors.payment && (
            <Typography variant="caption" color="error" className="order-create__field-error">
              {errors.payment}
            </Typography>
          )}
        </FormControl>

        <Box className="order-create__footer-actions">
          <Button color="error" onClick={() => navigate('/order')}>
            Discard
          </Button>
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </Box>
      </Card>

      <Dialog
        open={productDialogOpen}
        onClose={() => setProductDialogOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ className: 'order-create__dialog-paper' }}
      >
        <DialogTitle className="order-create__dialog-title">
          <Box className="order-create__dialog-title-row">
            <Box>
              <Typography variant="h6" className="order-create__dialog-heading">
                All Products
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add products to this order.
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<CheckIcon />}
              onClick={() => setProductDialogOpen(false)}
              className="order-create__dialog-done-btn"
            >
              Done
            </Button>
          </Box>
        </DialogTitle>

        <DialogContent dividers className="order-create__dialog-content">
          <TextField
            fullWidth
            size="small"
            placeholder="Search product"
            value={dialogSearch}
            onChange={(e) => {
              setDialogSearch(e.target.value)
              setDialogPage(1)
            }}
            className="order-create__dialog-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" className="order-create__dialog-search-icon" />
                </InputAdornment>
              ),
            }}
          />

          {dialogPagedProducts.map((product) => {
            const checked = selectedProducts.some((p) => p.id === product.id)
            return (
              <Box
                key={product.id}
                onClick={() => toggleProductInDialog(product)}
                className="order-create__dialog-product-row"
              >
                <Checkbox checked={checked} onClick={(e) => e.stopPropagation()} onChange={() => toggleProductInDialog(product)} />
                <Avatar src={product.image} variant="rounded" className="order-create__dialog-product-avatar" />
                <Typography variant="body2" className="order-create__dialog-product-name">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.code}
                </Typography>
              </Box>
            )
          })}

          {dialogPagedProducts.length === 0 && (
            <Box className="order-create__dialog-empty">
              <Typography variant="body2" color="text.secondary">
                No products found.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions className="order-create__dialog-actions">
          <Button
            startIcon={<ArrowBackIcon fontSize="small" />}
            disabled={dialogPage === 1}
            onClick={() => setDialogPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <Pagination
            count={dialogPageCount}
            page={dialogPage}
            onChange={(e, value) => setDialogPage(value)}
            shape="rounded"
            siblingCount={1}
            boundaryCount={1}
          />
          <Button
            endIcon={<ArrowForwardIcon fontSize="small" />}
            disabled={dialogPage === dialogPageCount}
            onClick={() => setDialogPage((p) => Math.min(dialogPageCount, p + 1))}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
