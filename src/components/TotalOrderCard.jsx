import React, { useState } from 'react'
import { Card, Box, Typography, Avatar, ButtonGroup, Button } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { ResponsiveContainer, LineChart, Line } from 'recharts'
import './TotalOrderCard.css'

const data = [
  { v: 20 }, { v: 35 }, { v: 25 }, { v: 45 }, { v: 30 }, { v: 55 }, { v: 40 }, { v: 60 }, { v: 50 },
]

export default function TotalOrderCard() {
  const [range, setRange] = useState('Year')
  return (
    <Card className="total-order-card">
      <Box className="total-order-card__circle" />
      <Box className="total-order-card__content">
        <Box className="total-order-card__header">
          <Avatar className="total-order-card__avatar">
            <ShoppingBagOutlinedIcon />
          </Avatar>
          <ButtonGroup size="small" className="total-order-card__button-group">
            {['Month', 'Year'].map((r) => (
              <Button
                key={r}
                onClick={() => setRange(r)}
                className={`total-order-card__range-btn ${range === r ? 'total-order-card__range-btn--active' : ''}`}
              >
                {r}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Box className="total-order-card__stats-row">
          <Box>
            <Typography variant="h4" className="total-order-card__count">3,286</Typography>
            <Typography variant="body2" className="total-order-card__label">New Orders</Typography>
          </Box>
          <Box className="total-order-card__chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="v" stroke="#fff" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
