import React, { useState } from 'react'
import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
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
import SearchIcon from '@mui/icons-material/Search'
import DownloadIcon from '@mui/icons-material/Download'
import AddIcon from '@mui/icons-material/Add'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import { initialCustomers } from '../data/customers.js'
import './CustomerList.css'

const statusColor = {
  Active: { bg: '#e6f4ea', color: '#1e7e34' },
  Inactive: { bg: '#fdeaea', color: '#c62828' },
}

export default function CustomerList() {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState(initialCustomers)
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [menuAnchor, setMenuAnchor] = useState(null)
  const [menuRowId, setMenuRowId] = useState(null)
  const rowsPerPage = 7

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase())
  )
  const pageRows = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  const toggleOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
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
    setCustomers((prev) => prev.filter((c) => !selected.includes(c.id)))
    setSelected([])
  }

  const deleteOne = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id))
    setSelected((prev) => prev.filter((x) => x !== id))
    setMenuAnchor(null)
  }

  const allOnPageSelected =
    pageRows.length > 0 && pageRows.every((r) => selected.includes(r.id))

  return (
    <Box>
      <Box className="customer-list__header">
        <Typography variant="h5" className="customer-list__title">
          List
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.secondary">Customer</Typography>
          <Typography color="text.primary">List</Typography>
        </Breadcrumbs>
      </Box>

      <Card className="customer-list__card">
        {selected.length > 0 ? (
          <Toolbar disableGutters className="customer-list__toolbar">
            <Typography className="customer-list__toolbar-text">{selected.length} selected</Typography>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteOutlineIcon />}
              onClick={deleteSelected}
            >
              Delete
            </Button>
          </Toolbar>
        ) : (
          <Box className="customer-list__filters">
            <TextField
              size="small"
              placeholder="Search..."
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
              className="customer-list__search"
            />
            <Box className="customer-list__actions">
              <Button variant="outlined" startIcon={<DownloadIcon />}>
                Download
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => navigate('/customer/create')}
              >
                Add New
              </Button>
            </Box>
          </Box>
        )}

        <TableContainer className="customer-list__table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={allOnPageSelected}
                    indeterminate={
                      pageRows.some((r) => selected.includes(r.id)) && !allOnPageSelected
                    }
                    onChange={toggleAll}
                  />
                </TableCell>
                <TableCell className="customer-list__head-cell">Customer Name</TableCell>
                <TableCell className="customer-list__head-cell">Email</TableCell>
                <TableCell className="customer-list__head-cell">Phone</TableCell>
                <TableCell className="customer-list__head-cell">Country</TableCell>
                <TableCell className="customer-list__head-cell">Status</TableCell>
                <TableCell className="customer-list__head-cell" align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pageRows.map((c) => (
                <TableRow key={c.id} hover selected={selected.includes(c.id)}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(c.id)}
                      onChange={() => toggleOne(c.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      className="customer-list__name-cell"
                      onClick={() => navigate(`/customer/details/${c.id}`)}
                    >
                      <Avatar src={c.avatar} alt={c.name} />
                      <Box>
                        <Typography className="customer-list__name">
                          {c.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {c.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.phone}</TableCell>
                  <TableCell>{c.country}</TableCell>
                  <TableCell>
                    <Chip
                      label={c.status}
                      size="small"
                      className="customer-list__status-chip"
                      style={{
                        backgroundColor: statusColor[c.status].bg,
                        color: statusColor[c.status].color,
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        setMenuAnchor(e.currentTarget)
                        setMenuRowId(c.id)
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {pageRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center" className="customer-list__empty-cell">
                    No customers found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
          <MenuItem
            onClick={() => {
              navigate(`/customer/edit/${menuRowId}`)
              setMenuAnchor(null)
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate(`/customer/details/${menuRowId}`)
              setMenuAnchor(null)
            }}
          >
            Details
          </MenuItem>
          <MenuItem className="customer-list__menu-delete" onClick={() => deleteOne(menuRowId)}>
            Delete
          </MenuItem>
        </Menu>

        <Box className="customer-list__footer">
          <Typography variant="body2" color="text.secondary">
            Rows per page:
          </Typography>
          <Select size="small" defaultValue={7} className="customer-list__rows-select">
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
          <Typography variant="body2" color="text.secondary">
            {filtered.length === 0
              ? '0 of 0'
              : `${(page - 1) * rowsPerPage + 1}-${Math.min(page * rowsPerPage, filtered.length)} of ${filtered.length}`}
          </Typography>
          <IconButton
            size="small"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
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
