import React from 'react'
import { Card, Box, Typography, Avatar } from '@mui/material'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import './IncomeCard.css'

export default function IncomeCard({ dark = true, icon, value = '$45.2k', label = 'Total Income' }) {
  return (
    <Card className={`income-card ${dark ? 'income-card--dark' : 'income-card--light'}`}>
      {!dark && <Box className="income-card__circle" />}
      <Box className="income-card__content">
        <Avatar className={dark ? 'income-card__avatar--dark' : 'income-card__avatar--light'}>
          {icon || <CalendarViewMonthIcon fontSize="small" />}
        </Avatar>
        <Box>
          <Typography variant="h5" className="income-card__value">{value}</Typography>
          <Typography variant="body2" className={dark ? 'income-card__label--dark' : 'income-card__label--light'}>
            {label}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
