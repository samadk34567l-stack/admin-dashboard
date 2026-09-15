import React from 'react'
import { Card, CardContent, Box, Typography, IconButton, Divider, Chip } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'
import './PopularStocks.css'

const chartData = [
  { v: 15 }, { v: 10 }, { v: 25 }, { v: 55 }, { v: 40 }, { v: 60 }, { v: 45 }, { v: 58 }, { v: 50 },
]

const stocks = [
  { name: 'Nova Tech', price: '$2145.00', change: '12% Profit', up: true },
  { name: 'Orbit Labs', price: '$150.00', change: '8% Loss', up: false },
  { name: 'Pinnacle Corp', price: '$320.00', change: '15% Profit', up: true },
  { name: 'Silverline', price: '$210.00', change: '6% Loss', up: false },
  { name: 'Vertex Group', price: '$275.00', change: '9% Profit', up: true },
]

export default function PopularStocks() {
  return (
    <Card className="popular-stocks">
      <CardContent className="popular-stocks__content">
        <Box className="popular-stocks__header">
          <Typography variant="h5" className="popular-stocks__title">
            Market Movers
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box className="popular-stocks__hero">
          <Box className="popular-stocks__hero-header">
            <Box>
              <Typography variant="subtitle2" className="popular-stocks__hero-name">
                Nova Tech
              </Typography>
              <Typography variant="caption" className="popular-stocks__hero-change">
                12% Profit
              </Typography>
            </Box>
            <Typography variant="h6" className="popular-stocks__hero-price">
              $2145.00
            </Typography>
          </Box>
          <Box className="popular-stocks__hero-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="stockGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#ffffff" strokeWidth={2} fill="url(#stockGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {stocks.map((s, i) => (
          <Box key={s.name + i}>
            <Box className="popular-stocks__row">
              <Box>
                <Typography variant="body2" className="popular-stocks__name">
                  {s.name}
                </Typography>
                <Typography
                  variant="caption"
                  className={`popular-stocks__change ${s.up ? 'popular-stocks__change--up' : 'popular-stocks__change--down'}`}
                >
                  {s.change}
                </Typography>
              </Box>
              <Box className="popular-stocks__right">
                <Typography variant="body2" className="popular-stocks__price">
                  {s.price}
                </Typography>
                <Chip
                  size="small"
                  icon={
                    s.up ? (
                      <KeyboardArrowUpIcon className="popular-stocks__arrow-icon" />
                    ) : (
                      <KeyboardArrowDownIcon className="popular-stocks__arrow-icon" />
                    )
                  }
                  label=""
                  className={`popular-stocks__arrow-chip ${s.up ? 'popular-stocks__arrow-chip--up' : 'popular-stocks__arrow-chip--down'}`}
                />
              </Box>
            </Box>
            {i < stocks.length - 1 && <Divider />}
          </Box>
        ))}

        <Box className="popular-stocks__footer">
          <Box className="popular-stocks__view-all">
            View All
            <ChevronRightIcon className="popular-stocks__view-all-icon" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
