import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Grid,
  Breadcrumbs,
  Link,
  Divider,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import VerifiedIcon from '@mui/icons-material/Verified'
import EmailIcon from '@mui/icons-material/Email'
import PublicIcon from '@mui/icons-material/Public'
import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import { users } from '../data/users.js'
import './UserProfile.css'

const statusColor = {
  Active: { bg: '#e6f4ea', color: '#1e7e34' },
  Pending: { bg: '#fff4e0', color: '#b26a00' },
  Rejected: { bg: '#fdeaea', color: '#c62828' },
}

export default function UserProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = users.find((u) => String(u.id) === id)

  if (!user) {
    return (
      <Box>
        <Typography variant="h6">User not found</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/user')} className="user-profile__back-btn">
          Back to list
        </Button>
      </Box>
    )
  }

  return (
    <Box>
      <Box className="user-profile__header">
        <Typography variant="h5" className="user-profile__title">
          User Profile
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" onClick={() => navigate('/user')} className="user-profile__breadcrumb-link">
            List
          </Link>
          <Typography color="text.primary">{user.name}</Typography>
        </Breadcrumbs>
      </Box>

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/user')}
        className="user-profile__back-to-list"
      >
        Back to list
      </Button>

      <Card className="user-profile__card">
        <Box className="user-profile__top">
          <Avatar src={user.avatar} alt={user.name} className="user-profile__avatar" />
          <Box>
            <Box className="user-profile__name-row">
              <Typography variant="h5" className="user-profile__name">
                {user.name}
              </Typography>
              {user.verified && <VerifiedIcon className="user-profile__verified-icon" />}
            </Box>
            <Typography color="text.secondary">{user.email}</Typography>
            <Chip
              label={user.status}
              size="small"
              className="user-profile__status-chip"
              style={{
                backgroundColor: statusColor[user.status].bg,
                color: statusColor[user.status].color,
              }}
            />
          </Box>
        </Box>

        <Divider className="user-profile__divider" />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box className="user-profile__info-item">
              <PublicIcon color="action" />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Country
                </Typography>
                <Typography className="user-profile__info-value">{user.country}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="user-profile__info-item">
              <PeopleIcon color="action" />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Friends
                </Typography>
                <Typography className="user-profile__info-value">{user.friends}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="user-profile__info-item">
              <GroupsIcon color="action" />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Followers
                </Typography>
                <Typography className="user-profile__info-value">{user.followers}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="user-profile__info-item">
              <EmailIcon color="action" />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
                <Typography className="user-profile__info-value">{user.email}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}
