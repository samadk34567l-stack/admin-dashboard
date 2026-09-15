import React, { useRef, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Sidebar, { drawerWidth } from './Sidebar.jsx'
import Navbar from './Navbar.jsx'
import './MainLayout.css'

export default function MainLayout({ children, mobileOpen, setMobileOpen }) {
  const location = useLocation()
  const nodeRef = useRef(null)
  const [desktopOpen, setDesktopOpen] = useState(true)

  return (
    <Box className="main-layout">
      <Navbar
        onMenuClick={() => setMobileOpen(true)}
        onToggleSidebar={() => setDesktopOpen((prev) => !prev)}
        desktopOpen={desktopOpen}
      />
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} desktopOpen={desktopOpen} />
      <Box
        component="main"
        className="main-layout__content"
        style={{ '--content-width': desktopOpen ? `calc(100% - ${drawerWidth}px)` : '100%' }}
      >
        <Toolbar />
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="page-fade" timeout={280} nodeRef={nodeRef}>
            <Box ref={nodeRef}>{children}</Box>
          </CSSTransition>
        </TransitionGroup>
      </Box>
    </Box>
  )
}
