import React from 'react'
import { Box, Card, Typography, IconButton, Button, Tabs, Tab, Divider, TextField } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AddIcon from '@mui/icons-material/Add'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ReorderIcon from '@mui/icons-material/Reorder'
import DescriptionIcon from '@mui/icons-material/Description'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import BarChartIcon from '@mui/icons-material/BarChart'
import BugReportIcon from '@mui/icons-material/BugReport'
import {
  ComposedChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const quickAdd = [
  { label: 'Client', value: 85 },
  { label: 'Items', value: 965 },
  { label: 'Invoices', value: 70 },
  { label: 'Quotes', value: 140 },
  { label: 'Purchase Order', value: 450 },
  { label: 'Bill', value: 1256 },
]

const summaryCards = [
  { label: 'New', value: 180, color: '#9e9e9e' },
  { label: 'Paid', value: '25,890', color: '#00c853' },
  { label: 'Pending', value: 3400, color: '#673ab7' },
  { label: 'Overdue', value: '55,865', color: '#ff9800' },
]

const sparkData = [
  { x: 1, v: 4 },
  { x: 2, v: 6 },
  { x: 3, v: 3 },
  { x: 4, v: 7 },
  { x: 5, v: 5 },
  { x: 6, v: 8 },
  { x: 7, v: 4 },
]

const revenueData = [
  { name: 'Mon', solid: 2.0, light: 1.8 },
  { name: 'Tue', solid: 2.3, light: 2.3 },
  { name: 'Wed', solid: 2.5, light: 1.7 },
  { name: 'Thu', solid: 2.3, light: 2.5 },
  { name: 'Fri', solid: 2.0, light: 2.2 },
  { name: 'Sat', solid: 2.3, light: 1.8 },
  { name: 'Sun', solid: 2.7, light: 2.5 },
]

const REVENUE_COLORS = {
  solid: '#2196f3',
  light: '#d6eafd',
}

const clientInsights = [
  { name: 'Agiluf Fuxg', amount: '£5678.09', status: '10% Loss', loss: true },
  { name: 'Adaline Bergfalks', amount: '£5678.09', status: '10% Profit', loss: false },
  { name: 'Hazle', amount: '£5678.09', status: '10% Loss', loss: true },
  { name: 'Herman Essertg', amount: '£5678.09', status: '10% Loss', loss: true },
  { name: 'Adaline Bergfalks', amount: '£5678.09', status: '10% Profit', loss: false },
  { name: 'Wilhelmine Durrg', amount: '£5678.09', status: '10% Profit', loss: false },
]

const recentActivity = [
  { id: '#0697', date: '09/05/2023', name: 'Adaline Bergfalks', amount: '£5678.09', positive: true },
  { id: '#0697', date: '09/05/2023', name: 'Agiluf Fuxg', amount: '£5678.09', positive: true },
  { id: '#0697', date: '09/05/2023', name: 'Peahen', amount: '- £5678.09', positive: false },
  { id: '#0697', date: '09/05/2023', name: 'Wilhelmine Durrg', amount: '£5678.09', positive: true },
  { id: '#0697', date: '09/05/2023', name: 'Herman Essertg', amount: '- £5678.09', positive: false },
  { id: '#0697', date: '09/05/2023', name: 'Eadwulf Beckete', amount: '- £5678.09', positive: false },
]

const supportTips = [
  { icon: <DescriptionIcon fontSize="small" />, bg: '#e6f4ea', color: '#2e7d32', label: 'Invoice detail' },
  { icon: <PersonAddAlt1Icon fontSize="small" />, bg: '#e3f2fd', color: '#1565c0', label: 'How to add client' },
  { icon: <ReceiptLongIcon fontSize="small" />, bg: '#ede7f6', color: '#5e35b1', label: 'How to add bill' },
  { icon: <BarChartIcon fontSize="small" />, bg: '#fff8e1', color: '#f9a825', label: 'Create invoice' },
  { icon: <BugReportIcon fontSize="small" />, bg: '#fdeaea', color: '#c62828', label: 'Generate Error' },
]

export default function Invoice() {
  const [tab, setTab] = React.useState(0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Quick Add
          </Typography>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3,1fr)', md: 'repeat(6,1fr)' },
            gap: 2,
          }}
        >
          {quickAdd.map((q) => (
            <Card key={q.label} variant="outlined" sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                {q.label}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {q.value}
                </Typography>
                <IconButton
                  size="small"
                  sx={{ border: '1px solid', borderColor: 'divider', width: 28, height: 28 }}
                >
                  <AddIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            </Card>
          ))}
        </Box>
      </Card>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' },
          gap: 3,
        }}
      >
        {summaryCards.map((s) => (
          <Card key={s.label} sx={{ p: 2.5 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {s.label}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              {s.value}
            </Typography>
            <Box sx={{ height: 36 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={sparkData}>
                  <Bar dataKey="v" fill={s.color} radius={[2, 2, 2, 2]} barSize={4} />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2.4fr 1fr' }, gap: 3 }}>
        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <Box>
              <Typography color="text.secondary" sx={{ mb: 0.5 }}>
                Total Revenue Trends
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                $999.00
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              <Button
                variant="outlined"
                size="small"
                endIcon={<ExpandMoreIcon fontSize="small" />}
                sx={{ color: 'text.primary', borderColor: 'divider' }}
              >
                This Month
              </Button>
              <Button
                variant="outlined"
                size="small"
                endIcon={<OpenInNewIcon fontSize="small" />}
                sx={{ color: 'text.primary', borderColor: 'divider' }}
              >
                Export
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <ReorderIcon fontSize="small" sx={{ color: 'grey.400' }} />
          </Box>

          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barGap={2} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#697586' }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#697586' }}
                  domain={[0, 6]}
                  ticks={[0, 1, 2, 3, 4, 5, 6]}
                  tickFormatter={(v) => v.toFixed(1)}
                />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar
                  dataKey="solid"
                  stackId="s"
                  fill={REVENUE_COLORS.solid}
                  isAnimationActive
                  animationDuration={1200}
                  animationEasing="ease-out"
                />
                <Bar
                  dataKey="light"
                  stackId="s"
                  fill={REVENUE_COLORS.light}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive
                  animationDuration={1200}
                  animationEasing="ease-out"
                  animationBegin={150}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Client Insights
          </Typography>
          {clientInsights.map((c, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.4,
                borderBottom: idx !== clientInsights.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {c.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {c.status}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {c.amount}
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  variant="caption"
                  sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600 }}
                >
                  History
                </Typography>
              </Box>
            </Box>
          ))}
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              View All <Box component="span">›</Box>
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2.4fr 1fr' }, gap: 3 }}>
        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Recent Activity
            </Typography>
            <Button variant="outlined" size="small" startIcon={<AddIcon fontSize="small" />} sx={{ borderRadius: 5 }}>
              Add New
            </Button>
          </Box>
          {recentActivity.map((r, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                borderBottom: idx !== recentActivity.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <Box>
                <Typography variant="caption" color="text.secondary">
                  {r.id}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  {r.date}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
                {r.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: r.positive ? 'success.dark' : 'error.main' }}
              >
                {r.amount}
              </Typography>
            </Box>
          ))}
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              View All <Box component="span">›</Box>
            </Typography>
          </Box>
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
            Support &amp; Help
          </Typography>
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            variant="scrollable"
            scrollButtons={false}
            sx={{ mb: 2, minHeight: 32 }}
          >
            <Tab label="Quick Tips" sx={{ minHeight: 32, textTransform: 'none', fontWeight: 600 }} />
            <Tab label="Request For Demo" sx={{ minHeight: 32, textTransform: 'none', fontWeight: 600 }} />
            <Tab label="How To Make Invoice?" sx={{ minHeight: 32, textTransform: 'none', fontWeight: 600 }} />
          </Tabs>
          <Divider sx={{ mb: 2, mt: -1.5 }} />

          {tab === 0 && supportTips.map((tip, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 1.3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1.5,
                    bgcolor: tip.bg,
                    color: tip.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {tip.icon}
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {tip.label}
                </Typography>
              </Box>
              <Typography
                component="a"
                href="#"
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}
              >
                View
              </Typography>
            </Box>
          ))}

          {tab === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                defaultValue="Robin"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Phone number"
                defaultValue="000 000 0000"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Email ID"
                defaultValue="codedthemes@gmail.com"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Description"
                defaultValue="Silver Business Point, nr. VIP Circle, Uttran, Surat, Gujarat 394105"
                fullWidth
                size="small"
                multiline
                rows={3}
                InputLabelProps={{ shrink: true }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" sx={{ textTransform: 'none', fontWeight: 600, borderRadius: 2 }}>
                  Request A Demo
                </Button>
              </Box>
            </Box>
          )}

          {tab === 2 && (
            <Box
              component="a"
              href="https://www.youtube.com/watch?v=lqjK3st1ivs"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'block',
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="https://img.youtube.com/vi/lqjK3st1ivs/hqdefault.jpg"
                alt="Berry - Free React Admin Template"
                sx={{ width: '100%', display: 'block' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    bgcolor: '#ff0000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      ml: '4px',
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '16px solid white',
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 1,
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Berry - Free React Admin Template
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Watch on YouTube
                </Typography>
              </Box>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  )
}
