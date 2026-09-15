import React from 'react'
import {
  Box,
  Card,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Divider,
} from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import FacebookIcon from '@mui/icons-material/Facebook'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

const statCards = [
  { title: 'Total Sales', value: '4000', pct: '42%', color: '#2196f3', light: '#64b5f6' },
  { title: 'Total Comment', value: '2500', pct: '15%', color: '#f44336', light: '#ef9a9a' },
  { title: 'Total Status', value: '2500', pct: '95%', color: '#4caf50', light: '#a5d6a7' },
  { title: 'Total Visitors', value: '12500', pct: '75%', color: '#673ab7', light: '#b39ddb' },
]

const waveData = Array.from({ length: 12 }).map((_, i) => ({
  x: i,
  y: 40 + Math.sin(i / 1.3) * 25 + Math.random() * 5,
}))

const marketShareData = [
  { name: 'Jan', youtube: 60, facebook: 45, twitter: 55 },
  { name: 'Feb', youtube: 75, facebook: 55, twitter: 40 },
  { name: 'Mar', youtube: 65, facebook: 60, twitter: 45 },
  { name: 'Apr', youtube: 55, facebook: 50, twitter: 60 },
  { name: 'May', youtube: 70, facebook: 45, twitter: 50 },
  { name: 'Jun', youtube: 50, facebook: 65, twitter: 70 },
  { name: 'Jul', youtube: 80, facebook: 55, twitter: 45 },
  { name: 'Aug', youtube: 60, facebook: 40, twitter: 55 },
]

const revenueData = [
  { name: 'Youtube', value: 45, color: '#f44336' },
  { name: 'Facebook', value: 35, color: '#2196f3' },
  { name: 'Twitter', value: 20, color: '#673ab7' },
]

const miniStats = [
  { label: 'Users', value: '798', color: '#ff9800' },
  { label: 'Timeout', value: '486', color: '#673ab7' },
  { label: 'Views', value: '9,454', color: '#f44336' },
  { label: 'Session', value: '7.15', color: '#673ab7' },
  { label: 'Avg. Session', value: '04:30', color: '#2196f3' },
  { label: 'Bounce Rate', value: '1.55%', color: '#4caf50' },
]

const salesPerDayData = Array.from({ length: 10 }).map((_, i) => ({
  x: i,
  y: 30 + Math.sin(i / 1.1) * 20 + Math.random() * 5,
}))
const orderPerMonthData = Array.from({ length: 10 }).map((_, i) => ({
  x: i,
  y: 30 + Math.cos(i / 1.1) * 20 + Math.random() * 5,
}))

const deviceData = [
  { label: '66.6%', color: '#2196f3', change: '2%', up: true },
  { label: '29.7%', color: '#4caf50', change: '3%', up: true },
  { label: '32.8%', color: '#f44336', change: '8%', up: false },
  { label: '50.2%', color: '#ff9800', change: '5%', up: true },
]
const deviceBars = [70, 45, 55, 90]
const deviceColors = ['#2196f3', '#4caf50', '#f44336', '#ff9800']

const visitsData = Array.from({ length: 14 }).map((_, i) => ({
  x: i,
  y: 20 + Math.sin(i / 1.5) * 10 + i * 1.2,
}))
const bounceBarData = Array.from({ length: 14 }).map((_, i) => ({
  x: i,
  y: 15 + Math.random() * 25,
}))
const productsData = Array.from({ length: 14 }).map((_, i) => ({
  x: i,
  y: 25 + Math.sin(i / 1.2) * 12,
}))

const stockData = Array.from({ length: 24 }).map((_, i) => ({
  x: i,
  y: 20 + Math.random() * 60,
}))

const satisfactionData = [
  { name: 'Extremely Satisfied', value: 35.5, color: '#8d4e0a' },
  { name: 'Satisfied', value: 26.9, color: '#c8730d' },
  { name: 'Poor', value: 21.5, color: '#e0994a' },
  { name: 'Very Poor', value: 16.1, color: '#f0c896' },
]

export default function ChartPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Chart
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Chart</Typography>
        </Breadcrumbs>
      </Box>

      {/* Top stat cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {statCards.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.title}>
            <Card
              sx={{
                p: 2.5,
                color: '#fff',
                background: `linear-gradient(180deg, ${s.color} 0%, ${s.light} 100%)`,
                position: 'relative',
                overflow: 'hidden',
                height: 150,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {s.value}
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{s.pct}</Typography>
              </Box>
              <Typography sx={{ opacity: 0.9, position: 'relative', zIndex: 1 }}>{s.title}</Typography>
              <Box sx={{ position: 'absolute', bottom: -6, left: 0, right: 0, height: 60, opacity: 0.9 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={waveData}>
                    <defs>
                      <linearGradient id={`grad-${s.title}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fff" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="y"
                      stroke="#fff"
                      strokeWidth={2}
                      fill={`url(#grad-${s.title})`}
                      isAnimationActive
                      animationDuration={1200}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Market Share + Total Revenue */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Market Share
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Department wise monthly sales report
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ArrowDownwardIcon sx={{ fontSize: 16, color: '#f44336' }} />
                <Typography sx={{ fontWeight: 700 }}>27, 695.65</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: '#e8eaf6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 18, color: '#3f51b5' }} />
                </Box>
                <Typography sx={{ color: '#4caf50', fontWeight: 600 }}>+ 45.36%</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: '#e3f2fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: '#2196f3',
                  }}
                >
                  X
                </Box>
                <Typography sx={{ color: '#f44336', fontWeight: 600 }}>- 50.69%</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: '#ffebee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: '#f44336', fontWeight: 700, fontSize: 14 }}>▶</Typography>
                </Box>
                <Typography sx={{ color: '#4caf50', fontWeight: 600 }}>+ 16.85%</Typography>
              </Box>
            </Box>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={marketShareData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#697586' }} />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="youtube"
                  stroke="#f44336"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive
                  animationDuration={1200}
                />
                <Line
                  type="monotone"
                  dataKey="facebook"
                  stroke="#2196f3"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive
                  animationDuration={1200}
                />
                <Line
                  type="monotone"
                  dataKey="twitter"
                  stroke="#673ab7"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive
                  animationDuration={1200}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Total Revenue
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <PieChart width={220} height={220}>
                  <Pie
                    data={revenueData}
                    dataKey="value"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={2}
                    isAnimationActive
                    animationDuration={1000}
                  >
                    {revenueData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
              {revenueData.map((r) => (
                <Box key={r.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: r.color }} />
                  <Typography variant="caption">{r.name}</Typography>
                </Box>
              ))}
            </Box>
            <Grid container>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Youtube
                </Typography>
                <Typography sx={{ color: '#f44336', fontWeight: 700 }}>+ 16.85%</Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Facebook
                </Typography>
                <Typography sx={{ color: '#2196f3', fontWeight: 700 }}>+ 45.36%</Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Twitter
                </Typography>
                <Typography sx={{ color: '#f44336', fontWeight: 700 }}>- 50.69%</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* Mini stat row */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {miniStats.map((s) => (
          <Grid item xs={6} sm={4} md={2} key={s.label}>
            <Card sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {s.label}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {s.value}
              </Typography>
              <ResponsiveContainer width="100%" height={30}>
                <LineChart data={waveData}>
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke={s.color}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Sales per day / Order per month / Page view by device */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 0, overflow: 'hidden', height: '100%' }}>
            <Box sx={{ bgcolor: '#f44336', color: '#fff', p: 2.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>Sales Per Day</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ fontWeight: 600 }}>3%</Typography>
                </Box>
              </Box>
              <ResponsiveContainer width="100%" height={100}>
                <LineChart data={salesPerDayData}>
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#fff"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive
                    animationDuration={1200}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', p: 2.5 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  $4230
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Revenue
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  321
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Today Sales
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 0, overflow: 'hidden', height: '100%' }}>
            <Box sx={{ bgcolor: '#2196f3', color: '#fff', p: 2.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>Order Per Month</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ fontWeight: 600 }}>28%</Typography>
                </Box>
              </Box>
              <ResponsiveContainer width="100%" height={100}>
                <LineChart data={orderPerMonthData}>
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#fff"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive
                    animationDuration={1200}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', p: 2.5 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  1695
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Orders
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  321
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Today Orders
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography sx={{ fontWeight: 700 }}>Page view by device</Typography>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                Weekly
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                {deviceData.map((d) => (
                  <Box key={d.label} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '2px', bgcolor: d.color }} />
                    <Typography variant="body2" sx={{ minWidth: 45 }}>
                      {d.label}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                      {d.up ? (
                        <ArrowUpwardIcon sx={{ fontSize: 12, color: '#4caf50' }} />
                      ) : (
                        <ArrowDownwardIcon sx={{ fontSize: 12, color: '#f44336' }} />
                      )}
                      <Typography variant="caption" sx={{ color: d.up ? '#4caf50' : '#f44336' }}>
                        {d.change}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 1, height: 110 }}>
                {deviceBars.map((h, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      height: `${h}%`,
                      bgcolor: deviceColors[i],
                      borderRadius: 1,
                      transition: 'height 1s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Visits / Bounce Rate / Products */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              $16,756
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visits ▾
            </Typography>
            <ResponsiveContainer width="100%" height={90}>
              <AreaChart data={visitsData}>
                <defs>
                  <linearGradient id="visitsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2196f3" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#2196f3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#2196f3"
                  strokeWidth={2}
                  fill="url(#visitsGrad)"
                  isAnimationActive
                  animationDuration={1200}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              49.54%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bounce Rate ▴
            </Typography>
            <ResponsiveContainer width="100%" height={90}>
              <BarChart data={bounceBarData}>
                <Bar dataKey="y" fill="#4caf50" radius={[2, 2, 0, 0]} isAnimationActive animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              1,62,564
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Products ▾
            </Typography>
            <ResponsiveContainer width="100%" height={90}>
              <LineChart data={productsData}>
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#f44336"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#f44336' }}
                  isAnimationActive
                  animationDuration={1200}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>

      {/* New Stock + Customer Satisfaction */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography sx={{ fontWeight: 700 }}>
                New Stock <Typography component="span" variant="body2" color="text.secondary">(Purchased)</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                0.85%
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, color: '#2196f3' }}>
                <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2">0.50%</Typography>
              </Box>
            </Box>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={stockData}>
                <Bar
                  dataKey="y"
                  fill="#673ab7"
                  radius={[3, 3, 0, 0]}
                  isAnimationActive
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Customer Satisfaction</Typography>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={satisfactionData}
                  dataKey="value"
                  outerRadius={100}
                  label={({ value }) => `${value}%`}
                  isAnimationActive
                  animationDuration={1000}
                >
                  {satisfactionData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 1 }}>
              {satisfactionData.map((s) => (
                <Box key={s.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: s.color }} />
                  <Typography variant="caption">{s.name}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
