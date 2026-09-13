import React, { useState } from 'react'
import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
  Link,
  Checkbox,
  Button,
  Menu,
  MenuItem,
  Select,
  Toolbar,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import SearchIcon from '@mui/icons-material/Search'
import DownloadIcon from '@mui/icons-material/Download'
import AddIcon from '@mui/icons-material/Add'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import { initialOrders } from '../data/orders.js'
import './OrderList.css'

const statusColor = {
  Pending: { bg: '#fff5df', color: '#b98900' },
  Complete: { bg: '#e6f4ea', color: '#1e7e34' },
  Cancel: { bg: '#fdeaea', color: '#c62828' },
  Hold: { bg: '#e8f1fd', color: '#1565c0' },
}

export default function OrderList() {
  const navigate = useNavigate()
  const [orders, setOrders] = useState(initialOrders)
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [menuAnchor, setMenuAnchor] = useState(null)
  const [menuRowId, setMenuRowId] = useState(null)
  const rowsPerPage = 7

  const filtered = orders.filter(
    (o) =>
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      String(o.id).includes(search) ||
      o.branch.toLowerCase().includes(search.toLowerCase())
  )
  const pageRows = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  const toggleOne = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    const pageIds = pageRows.map((r) => r.id)
    const allSelected = pageIds.every((id) => selected.includes(id))
    if (allSelected) {
      setSelected((prev) => prev.filter((id) => !pageIds.includes(id)))
    } else {
      setSelected((prev) => Array.from(new Set([...prev, ...pageIds])))
    }
  }

  const deleteSelected = () => {
    setOrders((prev) => prev.filter((o) => !selected.includes(o.id)))
    setSelected([])
  }

  const deleteOne = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id))
    setSelected((prev) => prev.filter((x) => x !== id))
    setMenuAnchor(null)
  }

  const allOnPageSelected = pageRows.length > 0 && pageRows.every((r) => selected.includes(r.id))

  return (
    <Box>
      <Box className="order-list__header">
        <Typography variant="h5" className="order-list__title">
          List
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="/" className="order-list__breadcrumb-home">
            <HomeIcon fontSize="small" />
          </Link>
          <Typography color="text.secondary">Order</Typography>
          <Typography color="text.primary" className="order-list__breadcrumb-current">
            List
          </Typography>
        </Breadcrumbs>
      </Box>

      <Card className="order-list__card">
        {selected.length > 0 ? (
          <Toolbar disableGutters className="order-list__selection-toolbar">
            <Typography className="order-list__selection-text">{selected.length} selected</Typography>
            <Button variant="outlined" color="error" startIcon={<DeleteOutlineIcon />} onClick={deleteSelected}>
              Delete
            </Button>
          </Toolbar>
        ) : (
          <Box className="order-list__toolbar">
            <TextField
              size="small"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              className="order-list__search"
            />
            <Box className="order-list__actions">
              <Button variant="outlined" startIcon={<DownloadIcon />}>
                Download
              </Button>
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate('/order/create')}>
                Add New
              </Button>
            </Box>
          </Box>
        )}

        <TableContainer className="order-list__table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={allOnPageSelected}
                    indeterminate={pageRows.some((r) => selected.includes(r.id)) && !allOnPageSelected}
                    onChange={toggleAll}
                  />
                </TableCell>
                <TableCell className="order-list__head-cell">ID</TableCell>
                <TableCell className="order-list__head-cell">Customer Name</TableCell>
                <TableCell className="order-list__head-cell">Branch</TableCell>
                <TableCell className="order-list__head-cell">Payment Type</TableCell>
                <TableCell className="order-list__head-cell" align="right">
                  Quantity
                </TableCell>
                <TableCell className="order-list__head-cell">Order Date</TableCell>
                <TableCell className="order-list__head-cell">Status</TableCell>
                <TableCell className="order-list__head-cell" align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pageRows.map((o) => (
                <TableRow key={o.id} hover selected={selected.includes(o.id)}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={selected.includes(o.id)} onChange={() => toggleOne(o.id)} />
                  </TableCell>
                  <TableCell className="order-list__id-cell">#{o.id}</TableCell>
                  <TableCell>{o.customerName}</TableCell>
                  <TableCell>{o.branch}</TableCell>
                  <TableCell>{o.paymentType}</TableCell>
                  <TableCell align="right">{o.quantity}</TableCell>
                  <TableCell>{o.orderDate}</TableCell>
                  <TableCell>
                    <Chip
                      label={o.status}
                      size="small"
                      className="order-list__status-chip"
                      style={{
                        backgroundColor: statusColor[o.status]?.bg,
                        color: statusColor[o.status]?.color,
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        setMenuAnchor(e.currentTarget)
                        setMenuRowId(o.id)
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {pageRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} align="center" className="order-list__empty-cell">
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
          <MenuItem
            onClick={() => {
              navigate(`/order/edit/${menuRowId}`)
              setMenuAnchor(null)
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate(`/order/details/${menuRowId}`)
              setMenuAnchor(null)
            }}
          >
            Details
          </MenuItem>
          <MenuItem className="order-list__menu-delete" onClick={() => deleteOne(menuRowId)}>
            Delete
          </MenuItem>
        </Menu>

        <Box className="order-list__pagination">
          <Typography variant="body2" color="text.secondary">
            Rows per page:
          </Typography>
          <Select size="small" defaultValue={7} className="order-list__rows-select">
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
          <Typography variant="body2" color="text.secondary">
            {filtered.length === 0
              ? '0 of 0'
              : `${(page - 1) * rowsPerPage + 1}-${Math.min(page * rowsPerPage, filtered.length)} of ${filtered.length}`}
          </Typography>
          <IconButton size="small" disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
            {'<'}
          </IconButton>
          <IconButton
            size="small"
            disabled={page * rowsPerPage >= filtered.length}
            onClick={() => setPage((p) => p + 1)}
          >
            {'>'}
          </IconButton>
        </Box>
      </Card>
    </Box>
  )
}
