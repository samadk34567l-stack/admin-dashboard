import React from 'react'
import { Box, Card, Typography, LinearProgress } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'
import EventNoteIcon from '@mui/icons-material/EventNote'
import DescriptionIcon from '@mui/icons-material/Description'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ReceiptIcon from '@mui/icons-material/Receipt'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import Groups2Icon from '@mui/icons-material/Groups2'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined'
import ShareIcon from '@mui/icons-material/Share'
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import PersonIcon from '@mui/icons-material/Person'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const cardHoverSx = {
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
  },
}

const iconHoverSx = {
  transition: 'transform 0.3s ease',
  '.hover-parent:hover &': {
    transform: 'scale(1.12) rotate(6deg)',
  },
}

function StatCard({ label, value, icon, color }) {
  return (
    <Card
      className="hover-parent"
      sx={{
        p: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...cardHoverSx,
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
      </Box>
      <Box sx={{ color, fontSize: 28, display: 'flex', ...iconHoverSx }}>{icon}</Box>
    </Card>
  )
}

function BigColorCard({ title, value, subtitle, icon, bg }) {
  return (
    <Card
      className="hover-parent"
      sx={{
        p: 3,
        bgcolor: bg,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...cardHoverSx,
        '&:hover': {
          ...cardHoverSx['&:hover'],
          filter: 'brightness(1.05)',
        },
      }}
    >
      <Typography variant="body1" sx={{ opacity: 0.9, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.85 }}>
        {subtitle}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          right: -10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 90,
          height: 90,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 44,
          color: 'rgba(255,255,255,0.85)',
          ...iconHoverSx,
        }}
      >
        {icon}
      </Box>
    </Card>
  )
}

function IconValueCard({ icon, bg, value, label }) {
  return (
    <Card
      className="hover-parent"
      sx={{
        p: 2.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...cardHoverSx,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: 1.5,
            bgcolor: bg,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            ...iconHoverSx,
          }}
        >
          {icon}
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Card>
  )
}

function ColorStatCard({ icon, bg, value, label, sub }) {
  return (
    <Card
      className="hover-parent"
      sx={{
        p: 2.2,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        bgcolor: bg,
        color: '#fff',
        ...cardHoverSx,
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: 1.5,
          bgcolor: 'rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          flexShrink: 0,
          ...iconHoverSx,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
          {value}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.9 }}>
          {sub} <Box component="span" sx={{ fontWeight: 700 }}>{label}</Box>
        </Typography>
      </Box>
    </Card>
  )
}

function TrendCard({ label, value, trend, pct, sub }) {
  const up = trend === 'up'
  return (
    <Card
      className="hover-parent"
      sx={{ p: 2.2, ...cardHoverSx }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
        {label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
        <Box
          sx={{
            color: up ? 'success.main' : 'error.main',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 700,
            fontSize: 18,
            transition: 'transform 0.25s ease',
            '.hover-parent:hover &': { transform: 'translateY(-2px)' },
          }}
        >
          {up ? '↑' : '↓'}
        </Box>
      </Box>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {pct}
      </Typography>
    </Card>
  )
}

function BrandCard({ icon, bg, value, label }) {
  return (
    <Card
      className="hover-parent"
      sx={{
        p: 2.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: bg,
        color: '#fff',
        ...cardHoverSx,
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {label}
        </Typography>
      </Box>
      <Box sx={{ fontSize: 26, opacity: 0.9, ...iconHoverSx }}>{icon}</Box>
    </Card>
  )
}

function MiniStatCard({ label, value, date, icon, iconBg, iconColor }) {
  return (
    <Card
      className="hover-parent"
      sx={{
        p: 2.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...cardHoverSx,
      }}
    >
      <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.3 }}>
          {label}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {date}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          bgcolor: iconBg,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          ...iconHoverSx,
        }}
      >
        {icon}
      </Box>
    </Card>
  )
}

function ProgressStatCard({ label, value, color }) {
  return (
    <Card className="hover-parent" sx={{ p: 2.2, ...cardHoverSx }}>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
        {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {value}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={70}
        sx={{
          height: 5,
          borderRadius: 5,
          bgcolor: 'grey.100',
          '& .MuiLinearProgress-bar': { bgcolor: color, borderRadius: 5 },
        }}
      />
    </Card>
  )
}

export default function Statistics() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Card sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Statistics
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          🏠 &nbsp;›&nbsp; Statistics
        </Typography>
      </Card>

      {/* Row 1 */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
        <StatCard label="All Earnings" value="$30200" icon={<BarChartIcon fontSize="inherit" />} color="#7c4dff" />
        <StatCard label="Task" value="145" icon={<EventNoteIcon fontSize="inherit" />} color="#ff7043" />
        <StatCard label="Page Views" value="290+" icon={<DescriptionIcon fontSize="inherit" />} color="#2e7d32" />
        <StatCard label="Downloads" value="500" icon={<ThumbDownAltIcon fontSize="inherit" />} color="#42a5f5" />
      </Box>

      {/* Row 2 - big color cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
        <BigColorCard
          title="Revenue"
          value="$42,562"
          subtitle="$50,032 Last Month"
          icon={<AttachMoneyIcon fontSize="inherit" />}
          bg="#673ab7"
        />
        <BigColorCard
          title="Orders Received"
          value="486"
          subtitle="20% Increase"
          icon={<PersonOutlineIcon fontSize="inherit" />}
          bg="#2196f3"
        />
        <BigColorCard
          title="Total Sales"
          value="1641"
          subtitle="$1,055 Revenue Generated"
          icon={<ShoppingBagIcon fontSize="inherit" />}
          bg="#ff9800"
        />
      </Box>

      {/* Row 3 */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
        <IconValueCard icon={<PersonOutlineOutlinedIcon fontSize="inherit" />} bg="#2196f3" value="6035" label="Visitors" />
        <IconValueCard icon={<ReceiptIcon fontSize="inherit" />} bg="#e53935" value="19" label="Invoices" />
        <IconValueCard icon={<WbSunnyOutlinedIcon fontSize="inherit" />} bg="#fbc02d" value="63" label="Issues" />
        <IconValueCard icon={<Groups2Icon fontSize="inherit" />} bg="#43a047" value="95%" label="Projects" />
      </Box>

      {/* Row 4 - colored icon stat cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
        <ColorStatCard icon={<PersonIcon fontSize="inherit" />} bg="#673ab7" value="2,672" sub="Last week" label="users" />
        <ColorStatCard icon={<AccountBalanceWalletOutlinedIcon fontSize="inherit" />} bg="#2196f3" value="$6391" sub="Total" label="earning" />
        <ColorStatCard icon={<EmojiEmotionsIcon fontSize="inherit" />} bg="#43a047" value="9,276" sub="Today" label="visitors" />
        <ColorStatCard icon={<ShoppingCartIcon fontSize="inherit" />} bg="#e53935" value="3,619" sub="New" label="order" />
      </Box>

      {/* Row 5 - trend cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
        <TrendCard label="Total Paid Users" value="7652" trend="down" pct="8% less Last 3 Months" />
        <TrendCard label="Order Status" value="625" trend="up" pct="6% From Last 3 Months" />
        <TrendCard label="Unique Visitors" value="6522" trend="down" pct="10% From Last 6 Months" />
        <TrendCard label="Monthly Earnings" value="5963" trend="up" pct="36% From Last 6 Months" />
      </Box>

      {/* Row 6 - brand cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
        <BrandCard icon={<FacebookIcon fontSize="inherit" />} bg="#673ab7" value="1165 +" label="Facebook Users" />
        <BrandCard icon={<XIcon />} bg="#26c6da" value="780 +" label="Twitter Users" />
        <BrandCard icon={<LinkedInIcon fontSize="inherit" />} bg="#607d8b" value="998 +" label="Linked In Users" />
        <BrandCard icon={<YouTubeIcon fontSize="inherit" />} bg="#e53935" value="650 +" label="Youtube Videos" />
      </Box>

      {/* Row 7 - mini stat cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
        <MiniStatCard
          label="Impressions"
          value="1,563"
          date="May 23 - June 01 (2018)"
          icon={<VisibilityOutlinedIcon fontSize="inherit" />}
          iconBg="#e3f2fd"
          iconColor="#1565c0"
        />
        <MiniStatCard
          label="Goal"
          value="30,564"
          date="May 28 - June 01 (2018)"
          icon={<GpsFixedIcon fontSize="inherit" />}
          iconBg="#e6f4ea"
          iconColor="#2e7d32"
        />
        <MiniStatCard
          label="Impact"
          value="42.6%"
          date="May 30 - June 01 (2018)"
          icon={<PanToolOutlinedIcon fontSize="inherit" />}
          iconBg="#fff8e1"
          iconColor="#f9a825"
        />
      </Box>

      {/* Row 8 - progress cards */}
      <Card sx={{ p: 2.5 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          <ProgressStatCard label="Published Project" value="532" color="#673ab7" />
          <ProgressStatCard label="Completed Task" value="4,569" color="#43a047" />
          <ProgressStatCard label="Pending Task" value="1,005" color="#ff9800" />
          <ProgressStatCard label="Issues" value="365" color="#e53935" />
        </Box>
      </Card>

      {/* Row 9 - big color cards 2 */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
        <BigColorCard title="Daily user" value="1,658" subtitle="" icon={<PersonIcon fontSize="inherit" />} bg="#673ab7" />
        <BigColorCard title="Daily page view" value="1K" subtitle="" icon={<DescriptionIcon fontSize="inherit" />} bg="#2196f3" />
        <BigColorCard title="Last month visitor" value="5,678" subtitle="" icon={<Groups2Icon fontSize="inherit" />} bg="#43a047" />
      </Box>

      {/* Row 10 - customer satisfaction + shares/network + weather */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2.5 }}>
        <Card className="hover-parent" sx={{ p: 2.5, ...cardHoverSx }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
            Customer satisfaction
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 1 }}>
            89.73%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={89.73}
            sx={{
              height: 5,
              borderRadius: 5,
              bgcolor: 'grey.100',
              mb: 1.5,
              '& .MuiLinearProgress-bar': { bgcolor: '#2196f3', borderRadius: 5 },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                previous
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                56.75
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Change
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                +12.60
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Trend
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                23.78
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card sx={{ p: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', overflow: 'hidden' }}>
          {[
            { icon: <ShareIcon fontSize="inherit" />, value: '1000', label: 'SHARES' },
            { icon: <RouterOutlinedIcon fontSize="inherit" />, value: '600', label: 'NETWORK' },
            { icon: <KeyboardReturnIcon fontSize="inherit" />, value: '3550', label: 'RETURNS' },
            { icon: <ShoppingBagOutlinedIcon fontSize="inherit" />, value: '100%', label: 'ORDER' },
          ].map((item, i) => (
            <Box
              key={i}
              className="hover-parent"
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                borderRight: i % 2 === 0 ? '1px solid' : 'none',
                borderBottom: i < 2 ? '1px solid' : 'none',
                borderColor: 'grey.100',
                transition: 'background 0.2s ease',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'grey.50' },
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1,
                  bgcolor: '#e3f2fd',
                  color: '#1565c0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  flexShrink: 0,
                  ...iconHoverSx,
                }}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {item.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {item.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Card>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 2, overflow: 'hidden' }}>
          <Card
            sx={{
              p: 2.5,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'grey.100',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              19°
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Sunny
            </Typography>
          </Card>
          <Card
            className="hover-parent"
            sx={{
              p: 2.5,
              bgcolor: '#2196f3',
              color: '#fff',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              ...cardHoverSx,
            }}
          >
            <Box sx={{ fontSize: 26, ...iconHoverSx }}>
              <WbSunnyOutlinedIcon fontSize="inherit" />
            </Box>
            <Typography variant="body2">New York, NY</Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
