import React from 'react'
import { Card, CardContent, Box, Typography, IconButton, Divider, Chip } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'

const chartData = [
  { v: 15 }, { v: 10 }, { v: 25 }, { v: 55 }, { v: 40 }, { v: 60 }, { v: 45 }, { v: 58 }, { v: 50 },
]

const stocks = [
  { name: 'Bajaj Finserv', price: '$1839.00', change: '10% Profit', up: true },
  { name: 'TTML', price: '$100.00', change: '10% Loss', up: false },
  { name: 'Reliance', price: '$200.00', change: '10% Profit', up: true },
  { name: 'TTML', price: '$189.00', change: '10% Loss', up: false },
  { name: 'Stolon', price: '$189.00', change: '10% Loss', up: false },
]

export default function PopularStocks() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Popular Stocks
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          sx={{
            bgcolor: 'secondary.light',
            borderRadius: 3,
            p: 2,
            mb: 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.dark' }}>
                Bajaj Finery
              </Typography>
              <Typography variant="caption" color="text.secondary">
                10% Profit
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              $1839.00
            </Typography>
          </Box>
          <Box sx={{ height: 80, mt: 1, mx: -2, mb: -2 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="stockGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#673ab7" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#673ab7" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#673ab7" strokeWidth={2} fill="url(#stockGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {stocks.map((s, i) => (
          <Box key={s.name + i}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.3 }}>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {s.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: s.up ? 'success.dark' : 'error.main', fontWeight: 500 }}
                >
                  {s.change}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {s.price}
                </Typography>
                <Chip
                  size="small"
                  icon={
                    s.up ? (
                      <KeyboardArrowUpIcon sx={{ fontSize: 16 }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
                    )
                  }
                  label=""
                  sx={{
                    bgcolor: s.up ? 'success.light' : 'error.light',
                    color: s.up ? 'success.dark' : 'error.dark',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    '& .MuiChip-icon': { m: 0, color: 'inherit' },
                    '& .MuiChip-label': { display: 'none' },
                  }}
                />
              </Box>
            </Box>
            {i < stocks.length - 1 && <Divider />}
          </Box>
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            View All
            <ChevronRightIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
