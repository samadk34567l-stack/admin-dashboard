import React from 'react'
import { AppBar, Toolbar, IconButton, Box, Paper, InputBase } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import { drawerWidth } from './Sidebar.jsx'
import './Navbar.css'

export default function Navbar({ onMenuClick, onToggleSidebar, desktopOpen }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      className="navbar"
      style={{
        '--navbar-width': desktopOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
        '--navbar-margin-left': desktopOpen ? `${drawerWidth}px` : 0,
      }}
    >
      <Toolbar className="navbar__toolbar">
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          className="navbar__mobile-menu-btn"
        >
          <MenuIcon />
        </IconButton>

        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleSidebar}
          className="navbar__toggle-btn"
        >
          <MenuIcon className="navbar__toggle-icon" />
        </IconButton>

        <Paper
          component="form"
          onSubmit={(e) => e.preventDefault()}
          className="navbar__search"
        >
          <SearchIcon className="navbar__search-icon" />
          <InputBase placeholder="Search" className="navbar__search-input" />
          <IconButton size="small" className="navbar__filter-btn">
            <TuneIcon className="navbar__filter-icon" />
          </IconButton>
        </Paper>

        <IconButton className="navbar__mobile-search-btn">
          <SearchIcon />
        </IconButton>

        <Box className="navbar__spacer" />
      </Toolbar>
    </AppBar>
  )
}
