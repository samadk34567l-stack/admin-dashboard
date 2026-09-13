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
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'
import './Sidebar.css'

export const drawerWidth = 260

const dashboardItems = [{ text: 'Default', icon: <DashboardCustomizeOutlinedIcon /> }]

export default function Sidebar({ mobileOpen, onClose, desktopOpen = true }) {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const isAuthChildActive = path === '/login' || path === '/signup'

  const [authOpen, setAuthOpen] = useState(isAuthChildActive)

  const content = (
    <Box className="sidebar__content">
      <Box className="sidebar__brand">
        <Box className="sidebar__logo">
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
        <Typography variant="h5" className="sidebar__brand-text">
          BERRY
        </Typography>
      </Box>

      <Box className="sidebar__scroll-area">
        <ListSubheader className="sidebar__subheader">
          Dashboard
        </ListSubheader>
        <List className="sidebar__list">
          {dashboardItems.map((item) => {
            const isActive = path === '/'
            return (
              <ListItemButton
                key={item.text}
                selected={isActive}
                className="sidebar__item"
                onClick={() => {
                  navigate('/')
                  if (onClose) onClose()
                }}
              >
                <ListItemIcon className={`sidebar__icon ${isActive ? 'sidebar__icon--active' : ''}`}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" className={isActive ? 'sidebar__label--active' : 'sidebar__label'}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            )
          })}

          <ListItemButton
            className="sidebar__item"
            selected={path === '/user'}
            onClick={() => {
              navigate('/user')
              if (onClose) onClose()
            }}
          >
            <ListItemIcon className={`sidebar__icon ${path === '/user' ? 'sidebar__icon--active' : ''}`}>
              <PeopleAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" className={path === '/user' ? 'sidebar__label--active' : 'sidebar__label'}>
                  Users
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton
            className="sidebar__item"
            selected={path === '/customer'}
            onClick={() => {
              navigate('/customer')
              if (onClose) onClose()
            }}
          >
            <ListItemIcon className={`sidebar__icon ${path === '/customer' ? 'sidebar__icon--active' : ''}`}>
              <GroupsOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" className={path === '/customer' ? 'sidebar__label--active' : 'sidebar__label'}>
                  Customer
                </Typography>
              }
            />
          </ListItemButton>

          <ListItemButton
            className="sidebar__item"
            selected={path === '/order'}
            onClick={() => {
              navigate('/order')
              if (onClose) onClose()
            }}
          >
            <ListItemIcon className={`sidebar__icon ${path === '/order' ? 'sidebar__icon--active' : ''}`}>
              <ShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" className={path === '/order' ? 'sidebar__label--active' : 'sidebar__label'}>
                  Order
                </Typography>
              }
            />
          </ListItemButton>

          <ListItemButton
            className="sidebar__item"
            selected={isAuthChildActive}
            onClick={() => setAuthOpen((prev) => !prev)}
          >
            <ListItemIcon className={`sidebar__icon ${isAuthChildActive ? 'sidebar__icon--active' : ''}`}>
              <KeyOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" className={isAuthChildActive ? 'sidebar__label--active' : 'sidebar__label'}>
                  Authentication
                </Typography>
              }
            />
            <ExpandMoreIcon
              className={`sidebar__expand-icon ${authOpen ? 'sidebar__expand-icon--open' : ''}`}
            />
          </ListItemButton>
          <Collapse in={authOpen} timeout="auto" unmountOnExit>
            <List className="sidebar__sublist">
              <ListItemButton
                className="sidebar__item-sub"
                selected={path === '/login'}
                onClick={() => {
                  navigate('/login')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" className={path === '/login' ? 'sidebar__label-sub--active' : 'sidebar__label-sub'}>
                      Login
                    </Typography>
                  }
                />
              </ListItemButton>
              <ListItemButton
                className="sidebar__item-sub"
                selected={path === '/signup'}
                onClick={() => {
                  navigate('/signup')
                  if (onClose) onClose()
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" className={path === '/signup' ? 'sidebar__label-sub--active' : 'sidebar__label-sub'}>
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
      className="sidebar__nav"
      style={{ '--sidebar-width': desktopOpen ? `${drawerWidth}px` : '0px' }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        className="sidebar__drawer-mobile"
      >
        {content}
      </Drawer>
      <Drawer
        variant="persistent"
        open={desktopOpen}
        className="sidebar__drawer-desktop"
      >
        {content}
      </Drawer>
    </Box>
  )
}
