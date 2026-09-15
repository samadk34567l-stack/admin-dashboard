import React from 'react'
import { Box, Card, Typography, Chip, Divider } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from 'recharts'

const marketData = [
  { name: 'Jan', a: 65, b: 40, c: 45 },
  { name: 'Feb', a: 78, b: 48, c: 38 },
  { name: 'Mar', a: 90, b: 52, c: 55 },
  { name: 'Apr', a: 81, b: 45, c: 62 },
  { name: 'May', a: 72, b: 58, c: 70 },
  { name: 'Jun', a: 85, b: 62, c: 58 },
  { name: 'Jul', a: 95, b: 50, c: 48 },
  { name: 'Aug', a: 88, b: 44, c: 52 },
  { name: 'Sep', a: 80, b: 60, c: 66 },
  { name: 'Oct', a: 92, b: 55, c: 45 },
  { name: 'Nov', a: 84, b: 47, c: 40 },
  { name: 'Dec', a: 90, b: 42, c: 50 },
]

const stats = [
  { icon: <ShareOutlinedIcon fontSize="small" />, value: '1000', label: 'SHARES' },
  { icon: <PodcastsOutlinedIcon fontSize="small" />, value: '600', label: 'NETWORK' },
  { icon: <HubOutlinedIcon fontSize="small" />, value: '3550', label: 'RETURNS' },
  { icon: <CreditCardOutlinedIcon fontSize="small" />, value: '100%', label: 'ORDER' },
]

const revenue = [
  { name: 'Bitcoin', value: '+ $145.85', up: true },
  { name: 'Ethereum', value: '- $6.368', up: false },
  { name: 'Ripple', value: '+ $458.63', up: true },
  { name: 'Neo', value: '- $5.631', up: false },
  { name: 'Ethereum', value: '- $6.368', up: false },
  { name: 'Ripple', value: '+ $458.63', up: true },
  { name: 'Neo', value: '- $5.631', up: false },
]

const customers = [
  { flag: 'https://flagcdn.com/w40/de.png', country: 'Germany', name: 'Angelina Jolly', average: '56.23%' },
  { flag: 'https://flagcdn.com/w40/us.png', country: 'USA', name: 'John Deo', average: '25.23%' },
  { flag: 'https://flagcdn.com/w40/au.png', country: 'Australia', name: 'Jenifer Vintage', average: '12.45%' },
  { flag: 'https://flagcdn.com/w40/gb.png', country: 'United Kingdom', name: 'Lori Moore', average: '8.65%' },
  { flag: 'https://flagcdn.com/w40/br.png', country: 'Brazil', name: 'Allianz Dacron', average: '3.56%' },
  { flag: 'https://flagcdn.com/w40/au.png', country: 'Australia', name: 'Jenifer Vintage', average: '12.45%' },
]

export default function Analytics() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Market Share
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department wise monthly sales report
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'error.main' }}>
              <ArrowDropDownIcon />
              <Typography sx={{ fontWeight: 700 }}>27, 695.65</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
            <Chip
              icon={<FacebookIcon sx={{ fontSize: 18, color: 'secondary.dark !important' }} />}
              label="+ 45.36%"
              sx={{ bgcolor: 'secondary.light', color: 'secondary.dark', fontWeight: 600 }}
            />
            <Chip
              icon={<TwitterIcon sx={{ fontSize: 18, color: 'primary.dark !important' }} />}
              label="- 50.69%"
              sx={{ bgcolor: 'primary.light', color: 'primary.dark', fontWeight: 600 }}
            />
            <Chip
              icon={<InstagramIcon sx={{ fontSize: 18, color: 'error.dark !important' }} />}
              label="+ 16.85%"
              sx={{ bgcolor: 'error.light', color: 'error.dark', fontWeight: 600 }}
            />
          </Box>

          <Box sx={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#673ab7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#673ab7" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2196f3" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#2196f3" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f44336" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#f44336" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Area type="monotone" dataKey="a" stroke="#673ab7" strokeWidth={2} fill="url(#colorA)" />
                <Area type="monotone" dataKey="b" stroke="#2196f3" strokeWidth={2} fill="url(#colorB)" />
                <Area type="monotone" dataKey="c" stroke="#f44336" strokeWidth={2} fill="url(#colorC)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Card>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
          <Card
            sx={{
              p: 3,
              bgcolor: 'secondary.main',
              color: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography sx={{ opacity: 0.85, mb: 0.5 }}>Revenue</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                $42,562
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.85 }}>
                $50,032 Last Month
              </Typography>
            </Box>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ fontSize: 28, fontWeight: 700 }}>$</Typography>
            </Box>
          </Card>

          <Card
            sx={{
              p: 3,
              bgcolor: 'primary.main',
              color: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography sx={{ opacity: 0.85, mb: 0.5 }}>Orders Received</Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                486
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.85 }}>
                20% Increase
              </Typography>
            </Box>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: 32 }} />
            </Box>
          </Card>
        </Box>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Latest Customers
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '40px 2fr 2fr 1fr', gap: 2, mb: 1.5 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
              #
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
              Country
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
              Name
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }} align="right">
              Average
            </Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          {customers.map((c, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'grid',
                gridTemplateColumns: '40px 2fr 2fr 1fr',
                gap: 2,
                py: 1.5,
                borderBottom: idx !== customers.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={c.flag}
                alt={c.country}
                sx={{ width: 24, height: 18, objectFit: 'cover', borderRadius: 0.5 }}
              />
              <Typography variant="body2">{c.country}</Typography>
              <Typography variant="body2">{c.name}</Typography>
              <Typography variant="body2" align="right">
                {c.average}
              </Typography>
            </Box>
          ))}
          <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}
            >
              View All Latest Customers
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Card sx={{ p: 2.5 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {stats.map((s, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, lineHeight: 1.2 }}>{s.value}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Total Revenue
          </Typography>
          {revenue.map((r, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 1.2,
                borderBottom: idx !== revenue.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {r.up ? (
                  <ArrowUpwardIcon sx={{ fontSize: 16, color: 'success.dark' }} />
                ) : (
                  <ArrowDownwardIcon sx={{ fontSize: 16, color: 'error.main' }} />
                )}
                <Typography variant="body2">{r.name}</Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: r.up ? 'success.dark' : 'error.main' }}
              >
                {r.value}
              </Typography>
            </Box>
          ))}
        </Card>

        <Card
          sx={{
            p: 3,
            bgcolor: 'secondary.main',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <PieChartOutlineIcon sx={{ position: 'absolute', fontSize: 90, opacity: 0.15, left: 16, top: 8 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            1,658
          </Typography>
          <Typography sx={{ opacity: 0.85 }}>Daily user</Typography>
        </Card>

        <Card
          sx={{
            p: 3,
            bgcolor: 'primary.main',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <DescriptionOutlinedIcon sx={{ position: 'absolute', fontSize: 90, opacity: 0.15, left: 16, top: 8 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            1K
          </Typography>
          <Typography sx={{ opacity: 0.85 }}>Daily page view</Typography>
        </Card>
      </Box>
    </Box>
  )
}
