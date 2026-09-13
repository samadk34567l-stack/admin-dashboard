import React from 'react'
import { Card, Box, Typography, IconButton, Avatar } from '@mui/material'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './EarningCard.css'

export default function EarningCard() {
  return (
    <Card className="earning-card">
      <Box className="earning-card__circle-lg" />
      <Box className="earning-card__circle-sm" />
      <Box className="earning-card__content">
        <Box className="earning-card__header">
          <Avatar className="earning-card__avatar">
            <LocalAtmOutlinedIcon />
          </Avatar>
          <IconButton size="small" className="earning-card__menu-btn">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box className="earning-card__amount-row">
          <Typography variant="h4" className="earning-card__amount">$8,450.00</Typography>
          <Avatar className="earning-card__arrow-avatar">
            <ArrowUpwardIcon className="earning-card__arrow-icon" />
          </Avatar>
        </Box>
        <Typography variant="body2" className="earning-card__label">Monthly Revenue</Typography>
      </Box>
    </Card>
  )
}
