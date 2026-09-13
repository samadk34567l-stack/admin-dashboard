import React from 'react'
import { Card, Box, Typography, Avatar, IconButton } from '@mui/material'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './VisitorsCard.css'

export default function VisitorsCard() {
  return (
    <Card className="visitors-card">
      <Box className="visitors-card__circle-lg" />
      <Box className="visitors-card__circle-sm" />
      <Box className="visitors-card__content">
        <Box className="visitors-card__header">
          <Avatar className="visitors-card__avatar">
            <GroupsOutlinedIcon />
          </Avatar>
          <IconButton size="small" className="visitors-card__menu-btn">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box className="visitors-card__count-row">
          <Typography variant="h4" className="visitors-card__count">18.9k</Typography>
          <Avatar className="visitors-card__arrow-avatar">
            <ArrowUpwardIcon className="visitors-card__arrow-icon" />
          </Avatar>
        </Box>
        <Typography variant="body2" className="visitors-card__label">Website Visitors</Typography>
      </Box>
    </Card>
  )
}
