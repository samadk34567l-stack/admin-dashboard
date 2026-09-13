import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  Select,
  MenuItem,
  Pagination,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import BlockIcon from '@mui/icons-material/Block'
import { users } from '../data/users.js'
import './UserList.css'

const statusColor = {
  Active: { bg: '#e6f4ea', color: '#1e7e34' },
  Pending: { bg: '#fff4e0', color: '#b26a00' },
  Rejected: { bg: '#fdeaea', color: '#c62828' },
}

export default function UserList() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const rowsPerPage = 10

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box>
      <Box className="user-list__header">
        <Typography variant="h5" className="user-list__title">
          Style 01
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/user">
            List
          </Link>
          <Typography color="text.primary">Style 01</Typography>
        </Breadcrumbs>
      </Box>

      <Card className="user-list__card">
        <Box className="user-list__toolbar">
          <Typography variant="h6" className="user-list__toolbar-title">
            List
          </Typography>
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
            className="user-list__search"
          />
        </Box>

        <TableContainer className="user-list__table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="user-list__head-cell">#</TableCell>
                <TableCell className="user-list__head-cell">User Profile</TableCell>
                <TableCell className="user-list__head-cell">Country</TableCell>
                <TableCell className="user-list__head-cell">Friends</TableCell>
                <TableCell className="user-list__head-cell">Followers</TableCell>
                <TableCell className="user-list__head-cell">Status</TableCell>
                <TableCell className="user-list__head-cell" align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((u, idx) => (
                  <TableRow key={u.id} hover>
                    <TableCell>{String((page - 1) * rowsPerPage + idx + 1).padStart(2, '0')}</TableCell>
                    <TableCell>
                      <Box
                        className="user-list__profile-cell"
                        onClick={() => navigate(`/user/${u.id}`)}
                      >
                        <Avatar src={u.avatar} alt={u.name} />
                        <Box>
                          <Box className="user-list__name-row">
                            <Typography className="user-list__name">
                              {u.name}
                            </Typography>
                            {u.verified && (
                              <VerifiedIcon className="user-list__verified-icon" />
                            )}
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {u.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{u.country}</TableCell>
                    <TableCell>{u.friends}</TableCell>
                    <TableCell>{u.followers}</TableCell>
                    <TableCell>
                      <Chip
                        label={u.status}
                        size="small"
                        className="user-list__status-chip"
                        style={{
                          backgroundColor: statusColor[u.status].bg,
                          color: statusColor[u.status].color,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" className="user-list__action-btn--message">
                        <ChatBubbleOutlineIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" className="user-list__action-btn--block">
                        <BlockIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box className="user-list__footer">
          <Pagination
            count={Math.max(1, Math.ceil(filtered.length / rowsPerPage))}
            page={page}
            onChange={(_, val) => setPage(val)}
            color="primary"
            shape="rounded"
          />
          <Select size="small" defaultValue={10} className="user-list__rows-select">
            <MenuItem value={10}>10 Rows</MenuItem>
            <MenuItem value={25}>25 Rows</MenuItem>
            <MenuItem value={50}>50 Rows</MenuItem>
          </Select>
        </Box>
      </Card>
    </Box>
  )
}
