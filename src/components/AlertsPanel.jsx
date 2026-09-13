import React from 'react'
import { Card, CardContent, Box, Typography, IconButton, Chip, Divider } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import './AlertsPanel.css'

const severityStyles = {
  high: { bg: '#ffebee', color: '#c62828', label: 'Urgent' },
  medium: { bg: '#fff8e1', color: '#f9a825', label: 'Pending' },
  low: { bg: '#e0f2f1', color: '#00897b', label: 'Info' },
}

const alerts = [
  {
    icon: <Inventory2OutlinedIcon />,
    iconBg: '#ffebee',
    iconColor: '#e53935',
    title: 'Low stock warning',
    detail: '"Vertex Wireless Mouse" has only 4 units left',
    severity: 'high',
    time: '10 min ago',
  },
  {
    icon: <FactCheckOutlinedIcon />,
    iconBg: '#fff8e1',
    iconColor: '#f9a825',
    title: 'Approval pending',
    detail: '3 vendor invoices are awaiting your approval',
    severity: 'medium',
    time: '32 min ago',
  },
  {
    icon: <PaymentsOutlinedIcon />,
    iconBg: '#ffebee',
    iconColor: '#e53935',
    title: 'Payment overdue',
    detail: 'Invoice #IN-2049 is 5 days past due',
    severity: 'high',
    time: '1 hr ago',
  },
  {
    icon: <PersonAddAltOutlinedIcon />,
    iconBg: '#e0f2f1',
    iconColor: '#00897b',
    title: 'New customer request',
    detail: 'Sana Malik requested a new account approval',
    severity: 'low',
    time: '2 hr ago',
  },
  {
    icon: <ErrorOutlineOutlinedIcon />,
    iconBg: '#fff8e1',
    iconColor: '#f9a825',
    title: 'Order needs review',
    detail: 'Order #790961 flagged for address mismatch',
    severity: 'medium',
    time: '3 hr ago',
  },
]

export default function AlertsPanel() {
  return (
    <Card className="alerts-panel">
      <CardContent className="alerts-panel__content">
        <Box className="alerts-panel__header">
          <Box className="alerts-panel__header-left">
            <Typography variant="h5" className="alerts-panel__title">
              Alerts &amp; Notifications
            </Typography>
            <Chip
              label={`${alerts.length} New`}
              size="small"
              className="alerts-panel__badge"
            />
          </Box>
          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        {alerts.map((a, i) => (
          <Box key={a.title + i}>
            <Box className="alerts-panel__row">
              <Box
                className="alerts-panel__icon"
                style={{ '--icon-bg': a.iconBg, '--icon-color': a.iconColor }}
              >
                {React.cloneElement(a.icon, { fontSize: 'small' })}
              </Box>
              <Box className="alerts-panel__body">
                <Box className="alerts-panel__body-header">
                  <Typography variant="body2" className="alerts-panel__item-title">
                    {a.title}
                  </Typography>
                  <Chip
                    label={severityStyles[a.severity].label}
                    size="small"
                    className="alerts-panel__severity-chip"
                    style={{
                      '--severity-bg': severityStyles[a.severity].bg,
                      '--severity-color': severityStyles[a.severity].color,
                    }}
                  />
                </Box>
                <Typography variant="caption" color="text.secondary" className="alerts-panel__detail">
                  {a.detail}
                </Typography>
                <Typography variant="caption" className="alerts-panel__time">
                  {a.time}
                </Typography>
              </Box>
            </Box>
            {i < alerts.length - 1 && <Divider />}
          </Box>
        ))}

        <Box className="alerts-panel__footer">
          <Box className="alerts-panel__view-all">
            View All Alerts
            <ChevronRightIcon className="alerts-panel__view-all-icon" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
