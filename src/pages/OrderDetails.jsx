import React from 'react'
import {
  Box,
  Card,
  Typography,
  Breadcrumbs,
  Link,
  Avatar,
  Divider,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { useParams } from 'react-router-dom'
import './OrderDetails.css'

const activity = [
  {
    date: 'Saturday, 10 January',
    events: [
      { time: '01:43 PM', title: 'Parcel has been delivered', subtitle: 'Recipient: Steve Sutton', link: true },
      { time: '09:02 AM', title: 'Parcel is out for delivery' },
      { time: '06:45 AM', title: 'Parcel has arrived at delivery station' },
    ],
  },
  {
    date: 'Friday, 09 January',
    events: [
      { time: '12:16 PM', title: 'Parcel has been picked up by courier' },
      { time: '09:32 AM', title: 'Seller is preparing to ship your parcel' },
    ],
  },
]

export default function OrderDetails() {
  const { id } = useParams()

  const subtotal = 0.0
  const shipping = 20.0
  const tax = 105.0
  const total = subtotal + shipping + tax

  return (
    <Box>
      <Box className="order-details__header">
        <Typography variant="h5" className="order-details__title">
          Details
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="/" className="order-details__breadcrumb-home">
            <HomeIcon fontSize="small" />
          </Link>
          <Typography color="text.secondary">Order</Typography>
          <Typography color="text.primary" className="order-details__breadcrumb-current">
            Details
          </Typography>
        </Breadcrumbs>
      </Box>

      <Card className="order-details__card">
        <Typography variant="h6" className="order-details__order-id">
          Order: #{id || '790955'}
        </Typography>

        <Box className="order-details__grid">
          <Box>
            <Typography className="order-details__section-title">Products Ordered</Typography>
            <Box className="order-details__summary-box">
              <Box className="order-details__summary-row">
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box className="order-details__summary-row">
                <Typography color="text.secondary">Shipping</Typography>
                <Typography>${shipping.toFixed(2)}</Typography>
              </Box>
              <Box className="order-details__summary-row--last">
                <Typography color="text.secondary">Tax</Typography>
                <Typography>${tax.toFixed(2)}</Typography>
              </Box>
              <Divider className="order-details__divider" />
              <Box className="order-details__summary-row--last">
                <Typography variant="h6" className="order-details__total-label">
                  Total
                </Typography>
                <Typography variant="h6" className="order-details__total-value">
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <Typography className="order-details__section-title">Activity</Typography>
            {activity.map((group) => (
              <Box key={group.date} className="order-details__activity-group">
                <Typography className="order-details__activity-date">{group.date}</Typography>
                <Box>
                  {group.events.map((ev, idx) => (
                    <Box key={idx} className="order-details__event-row">
                      <Box className="order-details__event-time-col">
                        <Typography variant="caption" color="text.secondary" className="order-details__event-time">
                          {ev.time}
                        </Typography>
                      </Box>
                      <Box className="order-details__event-dot-col">
                        <Box className="order-details__event-dot" />
                        {idx !== group.events.length - 1 && (
                          <Box className="order-details__event-connector" />
                        )}
                      </Box>
                      <Box className="order-details__event-body">
                        {ev.link ? (
                          <Link underline="hover" className="order-details__event-link">
                            {ev.title}
                          </Link>
                        ) : (
                          <Typography className="order-details__event-title">{ev.title}</Typography>
                        )}
                        {ev.subtitle && (
                          <Typography variant="body2" color="text.secondary">
                            {ev.subtitle}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography className="order-details__section-title">Customer Details</Typography>
            <Box className="order-details__customer-card">
              <Avatar src="https://i.pravatar.cc/150?img=12" alt="Joseph William" />
              <Box>
                <Typography className="order-details__customer-name">Joseph William</Typography>
                <Typography variant="body2" color="text.secondary">
                  @joseph_william
                </Typography>
              </Box>
            </Box>

            <Box className="order-details__contact-row">
              <Box className="order-details__contact-icon--phone">
                <PhoneIcon fontSize="small" color="primary" />
              </Box>
              <Typography variant="body2">+1 5623598742</Typography>
            </Box>
            <Box className="order-details__contact-row--last">
              <Box className="order-details__contact-icon--email">
                <EmailIcon fontSize="small" color="secondary" />
              </Box>
              <Typography variant="body2">john.doe@example.com</Typography>
            </Box>

            <Divider className="order-details__address-divider" />

            <Typography className="order-details__address-title">Shipping Address</Typography>
            <Typography variant="body2" color="text.secondary" className="order-details__address-text">
              123 Main Street
              <br />
              New York
              <br />
              100011
              <br />
              us
            </Typography>

            <Typography className="order-details__address-title">Billing Address</Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street
              <br />
              New York
              <br />
              100011
              <br />
              us
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}
