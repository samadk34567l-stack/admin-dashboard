import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Typography,
  Collapse,
} from '@mui/material'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'

export const drawerWidth = 260

const dashboardItems = [{ text: 'Default', icon: <DashboardCustomizeOutlinedIcon /> }]

const widgetItems = [
  { text: 'Analytics', icon: <BarChartOutlinedIcon /> },
  { text: 'Invoice', icon: <DescriptionOutlinedIcon /> },
  { text: 'CRM', icon: <GroupsOutlinedIcon /> },
  { text: 'Blog', icon: <ArticleOutlinedIcon /> },
]

const widgetGroup2 = [
  { text: 'Statistics', icon: <EqualizerOutlinedIcon /> },
  { text: 'Data', icon: <StorageOutlinedIcon /> },
  { text: 'Chart', icon: <ShowChartOutlinedIcon /> },
]

export default function Sidebar({ mobileOpen, onClose, desktopOpen = true }) {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const isCustomerChildActive = path.startsWith('/customer')
  const isOrderChildActive = path.startsWith('/order')
  const isContactChildActive = path.startsWith('/contact')
  const isAuthChildActive = path === '/login' || path === '/signup'

  const [customerOpen, setCustomerOpen] = useState(isCustomerChildActive)
  const [orderOpen, setOrderOpen] = useState(isOrderChildActive)
  const [contactOpen, setContactOpen] = useState(isContactChildActive)
  const [authOpen, setAuthOpen] = useState(isAuthChildActive)

  const content = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 72, display: 'flex', alignItems: 'center', px: 2.5, gap: 1 }}>
        <Box
          sx={{
            width: 34,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="berryGrad1" x1="4" y1="4" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#42a5f5" />
                <stop offset="100%" stopColor="#1e88e5" />
              </linearGradient>
              <linearGradient id="berryGrad2" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7e57c2" />
                <stop offset="100%" stopColor="#5e35b1" />
              </linearGradient>
            </defs>
            <circle cx="17" cy="22" r="13" fill="url(#berryGrad1)" />
            <circle cx="25" cy="14" r="9" fill="url(#berryGrad2)" />
            <path
              d="M20 6c1.5-2 4-3 6.5-2.6"
              stroke="#43a047"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="27" cy="4.5" rx="3.2" ry="2" fill="#66bb6a" transform="rotate(-25 27 4.5)" />
          </svg>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1, color: '#1a2027' }}>
          BERRY
        </Typography>
      </Box>

      <Box sx={{ px: 2, flex: 1, overflowY: 'auto' }}>
        <ListSubheader
          sx={{ bgcolor: 'transparent', fontSize: '0.7rem', fontWeight: 700, color: 'grey.500', pl: 1 }}
        >
          Dashboard
        </ListSubheader>
        <List sx={{ pt: 0 }}>
          {dashboardItems.map((item) => {
            const isActive = path === '/'
            return (
              <ListItemButton
                key={item.text}
                selected={isActive}
                sx={{ borderRadius: 2, mb: 0.5 }}
                onClick={() => {
                  navigate('/')
                  if (onClose) onClose()
                }}
              >
                <ListItemIcon sx={{ minWidth: 34, color: isActive ? 'secondary.dark' : 'grey.600' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: isActive ? 600 : 400 }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            )
          })}
        </List>

        <ListSubheader
          sx={{ bgcolor: 'transparent', fontSize: '0.7rem', fontWeight: 700, color: 'grey.500', pl: 1, mt: 1 }}
        >
          Widget
        </ListSubheader>
        <List sx={{ pt: 0 }}>
          {widgetItems.map((item) => {
            const isAnalytics = item.text === 'Analytics'
            const isInvoice = item.text === 'Invoice'
            const isCRM = item.text === 'CRM'
            const isBlog = item.text === 'Blog'
            const isActive =
              (isAnalytics && path === '/analytics') ||
              (isInvoice && path === '/invoice') ||
              (isCRM && path === '/crm') ||
              (isBlog && path === '/blog')
            return (
              <ListItemButton
                key={item.text}
                selected={isActive}
                sx={{ borderRadius: 2, mb: 0.5 }}
                onClick={() => {
                  if (isAnalytics) {
                    navigate('/analytics')
                    if (onClose) onClose()
                  } else if (isInvoice) {
                    navigate('/invoice')
                    if (onClose) onClose()
                  } else if (isCRM) {
                    navigate('/crm')
                    if (onClose) onClose()
                  } else if (isBlog) {
                    navigate('/blog')
                    if (onClose) onClose()
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 34, color: isActive ? 'secondary.dark' : 'grey.600' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: isActive ? 600 : 400 }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            )
          })}
          {widgetGroup2.map((item) => {
            const isChart = item.text === 'Chart'
            const isStatistics = item.text === 'Statistics'
            const isActive = (isChart && path === '/chart') || (isStatistics && path === '/statistics')
            return (
              <ListItemButton
                key={item.text}
                sx={{ borderRadius: 2, mb: 0.5 }}
                selected={isActive}
                onClick={() => {
                  if (isChart) {
                    navigate('/chart')
                    if (onClose) onClose()
                  } else if (isStatistics) {
                    navigate('/statistics')
                    if (onClose) onClose()
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 34, color: isActive ? 'secondary.dark' : 'grey.600' }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: isActive ? 600 : 400 }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            )
          })}
        </List>

        <ListSubheader
          sx={{ bgcolor: 'transparent', fontSize: '0.7rem', fontWeight: 700, color: 'grey.500', pl: 1, mt: 1 }}
        >
          Application
        </ListSubheader>
        <List sx={{ pt: 0, pb: 2 }}>
          <ListItemButton
            sx={{ borderRadius: 2, mb: 0.5 }}
            onClick={() => {
              navigate('/user')
              if (onClose) onClose()
            }}
          >
            <ListItemIcon sx={{ minWidth: 34, color: 'grey.600' }}>
              <PeopleAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body2">Users</Typography>} />
            <ExpandMoreIcon sx={{ fontSize: 18, color: 'grey.500' }} />
          </ListItemButton>
          <ListItemButton
            sx={{ borderRadius: 2, mb: 0.5 }}
            selected={isCustomerChildActive}
            onClick={() => setCustomerOpen((prev) => !prev)}
          >
            <ListItemIcon sx={{ minWidth: 34, color: isCustomerChildActive ? 'secondary.dark' : 'grey.600' }}>
              <GroupsOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: isCustomerChildActive ? 600 : 400 }}>
                  Customer
                </Typography>
              }
            />
            <ExpandMoreIcon
              sx={{
                fontSize: 18,
                color: 'grey.500',
                transform: customerOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </ListItemButton>
          <Collapse in={customerOpen} timeout="auto" unmountOnExit>
            <List sx={{ pl: 4 }}>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/customer'}
                onClick={() => {
                  navigate('/customer')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/customer' ? 'secondary.dark' : 'inherit', fontWeight: path === '/customer' ? 600 : 400 }}>
                      List
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/customer/create'}
                onClick={() => {
                  navigate('/customer/create')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/customer/create' ? 'secondary.dark' : 'inherit', fontWeight: path === '/customer/create' ? 600 : 400 }}>
                      Create
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/customer/edit/1'}
                onClick={() => {
                  navigate('/customer/edit/1')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/customer/edit/1' ? 'secondary.dark' : 'inherit', fontWeight: path === '/customer/edit/1' ? 600 : 400 }}>
                      Edit
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/customer/details/1'}
                onClick={() => {
                  navigate('/customer/details/1')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/customer/details/1' ? 'secondary.dark' : 'inherit', fontWeight: path === '/customer/details/1' ? 600 : 400 }}>
                      Details
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            sx={{ borderRadius: 2, mb: 0.5 }}
            selected={isOrderChildActive}
            onClick={() => setOrderOpen((prev) => !prev)}
          >
            <ListItemIcon sx={{ minWidth: 34, color: isOrderChildActive ? 'secondary.dark' : 'grey.600' }}>
              <ShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: isOrderChildActive ? 600 : 400 }}>
                  Order
                </Typography>
              }
            />
            <ExpandMoreIcon
              sx={{
                fontSize: 18,
                color: 'grey.500',
                transform: orderOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </ListItemButton>
          <Collapse in={orderOpen} timeout="auto" unmountOnExit>
            <List sx={{ pl: 4 }}>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/order'}
                onClick={() => {
                  navigate('/order')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/order' ? 'secondary.dark' : 'inherit', fontWeight: path === '/order' ? 600 : 400 }}>
                      List
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/order/create'}
                onClick={() => {
                  navigate('/order/create')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/order/create' ? 'secondary.dark' : 'inherit', fontWeight: path === '/order/create' ? 600 : 400 }}>
                      Create
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/order/edit/1'}
                onClick={() => {
                  navigate('/order/edit/1')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/order/edit/1' ? 'secondary.dark' : 'inherit', fontWeight: path === '/order/edit/1' ? 600 : 400 }}>
                      Edit
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/order/details/790955'}
                onClick={() => {
                  navigate('/order/details/790955')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/order/details/790955' ? 'secondary.dark' : 'inherit', fontWeight: path === '/order/details/790955' ? 600 : 400 }}>
                      Details
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            sx={{ borderRadius: 2, mb: 0.5 }}
            selected={isContactChildActive}
            onClick={() => setContactOpen((prev) => !prev)}
          >
            <ListItemIcon sx={{ minWidth: 34, color: isContactChildActive ? 'secondary.dark' : 'grey.600' }}>
              <ContactPageOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: isContactChildActive ? 600 : 400 }}>
                  Contact
                </Typography>
              }
            />
            <ExpandMoreIcon
              sx={{
                fontSize: 18,
                color: 'grey.500',
                transform: contactOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </ListItemButton>
          <Collapse in={contactOpen} timeout="auto" unmountOnExit>
            <List sx={{ pl: 4 }}>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/contact/cards'}
                onClick={() => {
                  navigate('/contact/cards')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/contact/cards' ? 'secondary.dark' : 'inherit', fontWeight: path === '/contact/cards' ? 600 : 400 }}>
                      Cards
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/contact/list'}
                onClick={() => {
                  navigate('/contact/list')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/contact/list' ? 'secondary.dark' : 'inherit', fontWeight: path === '/contact/list' ? 600 : 400 }}>
                      List
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <ListSubheader
          sx={{ bgcolor: 'transparent', fontSize: '0.7rem', fontWeight: 700, color: 'grey.500', pl: 1, mt: 1 }}
        >
          Pages
          <Typography component="span" sx={{ display: 'block', fontSize: '0.65rem', fontWeight: 400, color: 'grey.400' }}>
            Prebuild Pages
          </Typography>
        </ListSubheader>
        <List sx={{ pt: 0, pb: 2 }}>
          <ListItemButton
            sx={{ borderRadius: 2, mb: 0.5 }}
            selected={isAuthChildActive}
            onClick={() => setAuthOpen((prev) => !prev)}
          >
            <ListItemIcon sx={{ minWidth: 34, color: isAuthChildActive ? 'secondary.dark' : 'grey.600' }}>
              <KeyOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: isAuthChildActive ? 600 : 400 }}>
                  Authentication
                </Typography>
              }
            />
            <ExpandMoreIcon
              sx={{
                fontSize: 18,
                color: 'grey.500',
                transform: authOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </ListItemButton>
          <Collapse in={authOpen} timeout="auto" unmountOnExit>
            <List sx={{ pl: 4 }}>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/login'}
                onClick={() => {
                  navigate('/login')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/login' ? 'secondary.dark' : 'inherit', fontWeight: path === '/login' ? 600 : 400 }}>
                      Login
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                sx={{ borderRadius: 2, mb: 0.5, py: 0.5 }}
                selected={path === '/signup'}
                onClick={() => {
                  navigate('/signup')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: path === '/signup' ? 'secondary.dark' : 'inherit', fontWeight: path === '/signup' ? 600 : 400 }}>
                      Signup
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: desktopOpen ? drawerWidth : 0 },
        flexShrink: { sm: 0 },
        transition: 'width 225ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth, border: 'none' },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        variant="persistent"
        open={desktopOpen}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: '1px 0 0 rgba(0,0,0,0.06)',
            transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) !important',
          },
        }}
      >
        {content}
      </Drawer>
    </Box>
  )
}
