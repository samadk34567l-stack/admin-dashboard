import React, { useState } from 'react'
import {
  Box,
  Card,
  Typography,
  Grid,
  Tabs,
  Tab,
  Select,
  MenuItem,
  IconButton,
  Chip,
  Divider,
} from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import MenuIcon from '@mui/icons-material/Menu'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import StorefrontIcon from '@mui/icons-material/Storefront'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

const leadDataByTab = [
  // Customer
  [
    { name: 'Jan', bar: 300, line: 0 },
    { name: 'Feb', bar: 0, line: 210 },
    { name: 'Mar', bar: 0, line: 65 },
    { name: 'Apr', bar: 175, line: 115 },
    { name: 'May', bar: 155, line: 65 },
    { name: 'Jun', bar: 0, line: 245 },
    { name: 'Jul', bar: 210, line: 60 },
    { name: 'Aug', bar: 0, line: 60 },
    { name: 'Sep', bar: 255, line: 5 },
    { name: 'Oct', bar: 100, line: 90 },
  ],
  // Complete
  [
    { name: 'Jan', bar: 120, line: 40 },
    { name: 'Feb', bar: 160, line: 80 },
    { name: 'Mar', bar: 190, line: 130 },
    { name: 'Apr', bar: 140, line: 170 },
    { name: 'May', bar: 210, line: 150 },
    { name: 'Jun', bar: 230, line: 200 },
    { name: 'Jul', bar: 180, line: 220 },
    { name: 'Aug', bar: 250, line: 190 },
    { name: 'Sep', bar: 270, line: 240 },
    { name: 'Oct', bar: 290, line: 260 },
  ],
  // Loss Lead
  [
    { name: 'Jan', bar: 60, line: 90 },
    { name: 'Feb', bar: 40, line: 70 },
    { name: 'Mar', bar: 80, line: 60 },
    { name: 'Apr', bar: 30, line: 50 },
    { name: 'May', bar: 55, line: 40 },
    { name: 'Jun', bar: 20, line: 35 },
    { name: 'Jul', bar: 45, line: 25 },
    { name: 'Aug', bar: 15, line: 30 },
    { name: 'Sep', bar: 35, line: 20 },
    { name: 'Oct', bar: 10, line: 15 },
  ],
  // New Lead
  [
    { name: 'Jan', bar: 40, line: 20 },
    { name: 'Feb', bar: 70, line: 45 },
    { name: 'Mar', bar: 95, line: 60 },
    { name: 'Apr', bar: 130, line: 90 },
    { name: 'May', bar: 110, line: 130 },
    { name: 'Jun', bar: 160, line: 150 },
    { name: 'Jul', bar: 185, line: 170 },
    { name: 'Aug', bar: 205, line: 190 },
    { name: 'Sep', bar: 230, line: 210 },
    { name: 'Oct', bar: 260, line: 240 },
  ],
]

const tabMeta = [
  { label: 'Customer', total: '$2324.00', color: '#2196f3' },
  { label: 'Complete', total: '$1893.00', color: '#43a047' },
  { label: 'Loss Lead', total: '$412.00', color: '#e53935' },
  { label: 'New Lead', total: '$3106.00', color: '#7e57c2' },
]

const incomeCards = [
  { value: '$203k', label: 'Total Income', icon: <AccountBalanceIcon />, bg: '#2196f3', color: '#fff', active: true },
  { value: '$120k', label: 'Meeting attends', icon: <VideoCameraFrontIcon />, bg: '#fdecea', color: '#f44336' },
  { value: '$234k', label: 'Sales improve', icon: <StorefrontIcon />, bg: '#fff8e1', color: '#ff9800' },
  { value: '$234k', label: 'New users', icon: <GroupAddIcon />, bg: '#fff8e1', color: '#ff9800' },
]

const leadSourceData = [
  { name: 'Social Media', value: 9, color: '#2196f3', display: '9' },
  { name: 'Website', value: 30, color: '#673ab7', display: '100+' },
  { name: 'Phone Call', value: 18, color: '#3f2b96', display: '100+' },
  { name: 'Mail', value: 22, color: '#42a5f5', display: '100+' },
  { name: 'Other', value: 10, color: '#e0e0e0', display: '' },
]

const salesPerfData = [
  { name: 'Mon', a: 60, b: 40, c: 60 },
  { name: 'Tue', a: 105, b: 65, c: 130 },
  { name: 'Wed', a: 55, b: 50, c: 100 },
  { name: 'Thu', a: 65, b: 50, c: 80 },
  { name: 'Fri', a: 65, b: 145, c: 180 },
  { name: 'Sat', a: 60, b: 65, c: 125 },
  { name: 'Sun', a: 55, b: 60, c: 95 },
]

export default function CRM() {
  const [tab, setTab] = useState(0)
  const activeMeta = tabMeta[tab]
  const activeData = leadDataByTab[tab]

  return (
    <Box>
      {/* Lead Summary */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Lead Summary
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ mb: 2, minHeight: 0 }}
          TabIndicatorProps={{ style: { height: 2 } }}
        >
          <Tab
            icon={<PersonOutlineIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Customer"
            sx={{ minHeight: 0, textTransform: 'none', fontWeight: 600 }}
          />
          <Tab
            icon={<CheckCircleOutlineIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Complete"
            sx={{ minHeight: 0, textTransform: 'none', fontWeight: 600 }}
          />
          <Tab
            icon={<TrendingDownIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Loss Lead"
            sx={{ minHeight: 0, textTransform: 'none', fontWeight: 600 }}
          />
          <Tab
            icon={<PersonAddAltIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="New Lead"
            sx={{ minHeight: 0, textTransform: 'none', fontWeight: 600 }}
          />
        </Tabs>
        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Total Growth
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {activeMeta.total}
            </Typography>
          </Box>
          <Select size="small" defaultValue="today" sx={{ minWidth: 110 }}>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="week">This Week</MenuItem>
            <MenuItem value="month">This Month</MenuItem>
          </Select>
        </Box>

        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart key={tab} data={activeData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#697586' }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#697586' }}
              domain={[0, 300]}
              ticks={[0, 50, 100, 150, 200, 250, 300]}
            />
            <Bar dataKey="bar" fill={`${activeMeta.color}22`} radius={[4, 4, 0, 0]} barSize={36} isAnimationActive animationDuration={800} />
            <Line
              type="monotone"
              dataKey="line"
              stroke={activeMeta.color}
              strokeWidth={3}
              dot={{ r: 4, fill: activeMeta.color, strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              isAnimationActive
              animationDuration={900}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>

      {/* Income stat cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
              {incomeCards.map((c) => (
        <Grid item xs={12} sm={6} md={3} key={c.label}>
          <Card
            sx={{
              p: 3,
              position: 'relative',
              overflow: 'hidden',
              bgcolor: c.active ? c.bg : '#fff',
              color: c.active ? '#fff' : 'inherit',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: c.active ? 'rgba(255,255,255,0.2)' : c.bg,
                color: c.active ? '#fff' : c.color,
                mb: 2,
                transition: 'transform 0.25s ease',
                '.MuiCard-root:hover &': { transform: 'rotate(-6deg) scale(1.08)' },
              }}
            >
              {c.icon}
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {c.value}
            </Typography>
            <Typography variant="body2" sx={{ opacity: c.active ? 0.9 : 0.7 }}>
              {c.label}
            </Typography>
          </Card>
        </Grid>
      ))}
      </Grid>

      {/* Lead Source + Sales Performance */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Lead Source
              </Typography>
              <Select size="small" defaultValue="today" sx={{ minWidth: 100 }}>
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="week">This Week</MenuItem>
              </Select>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <PieChart width={260} height={260}>
                <Pie
                  data={leadSourceData}
                  dataKey="value"
                  innerRadius={30}
                  outerRadius={110}
                  paddingAngle={3}
                  isAnimationActive
                  animationDuration={1000}
                >
                  {leadSourceData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </Box>
            <Box>
              {leadSourceData.slice(0, 4).map((s) => (
                <Box
                  key={s.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 1,
                    px: 1,
                    borderRadius: 1.5,
                    transition: 'background-color 0.18s ease, transform 0.18s ease',
                    '&:hover': { backgroundColor: 'rgba(33,150,243,0.06)', transform: 'translateX(2px)' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: s.color }} />
                    <Typography variant="body2">{s.name}</Typography>
                  </Box>
                  <Chip label={s.display} size="small" sx={{ bgcolor: '#f0f2f5', fontWeight: 600 }} />
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Sales Performance
              </Typography>
              <IconButton size="small">
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    bgcolor: '#f4f6f8',
                    borderRadius: 2,
                    p: 2,
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    cursor: 'default',
                    '&:hover': { bgcolor: '#eaf3fd', transform: 'translateY(-2px)' },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    200
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Conversion Rate
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    bgcolor: '#f4f6f8',
                    borderRadius: 2,
                    p: 2,
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    cursor: 'default',
                    '&:hover': { bgcolor: '#eaf3fd', transform: 'translateY(-2px)' },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    120
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average Deal
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    bgcolor: '#f4f6f8',
                    borderRadius: 2,
                    p: 2,
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    cursor: 'default',
                    '&:hover': { bgcolor: '#eaf3fd', transform: 'translateY(-2px)' },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    234
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sales Target
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={salesPerfData} barGap={2} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#697586' }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#697586' }}
                  domain={[0, 400]}
                  ticks={[0, 100, 200, 300, 400]}
                />
                <Bar dataKey="a" stackId="s" fill="#90caf9" isAnimationActive animationDuration={1000} />
                <Bar dataKey="b" stackId="s" fill="#1e88e5" isAnimationActive animationDuration={1000} />
                <Bar
                  dataKey="c"
                  stackId="s"
                  fill="#e1d9f2"
                  radius={[4, 4, 0, 0]}
                  isAnimationActive
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Upcoming Task & Follow-ups */}
      <Card sx={{ p: 3, mt: 3 }}>
        <Typography sx={{ fontWeight: 700, mb: 2 }}>Upcoming Task &amp; Follow-ups</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            200
          </Typography>
          <Chip label="Follow-up" size="small" sx={{ bgcolor: '#e3f2fd', color: '#2196f3', fontWeight: 600 }} />
        </Box>
      </Card>
    </Box>
  )
}
