import React from 'react'
import {
  Box,
  Card,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Button,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import PersonIcon from '@mui/icons-material/Person'
import { groupedContacts } from '../data/contacts.js'

export default function ContactCards() {
  const groups = groupedContacts()

  return (
    <Box>
      {groups.map((group) => (
        <Box key={group.letter} sx={{ mb: 4 }}>
          <Typography sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>{group.letter}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {group.items.map((c) => (
              <Card
                key={c.id}
                sx={{
                  p: 3.5,
                  bgcolor: 'grey.100',
                  position: 'relative',
                  borderRadius: 0,
                  '&:hover': { bgcolor: 'grey.200', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' },
                }}
              >
                <IconButton size="small" sx={{ position: 'absolute', top: 8, right: 8 }}>
                  <MoreVertIcon fontSize="small" />
                </IconButton>

                {c.avatar ? (
                  <Avatar src={c.avatar} alt={c.name} sx={{ width: 72, height: 72, mb: 2 }} />
                ) : (
                  <Avatar sx={{ width: 72, height: 72, mb: 2, bgcolor: 'primary.main' }}>
                    <PersonIcon />
                  </Avatar>
                )}

                <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                {c.role && (
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                    {c.role}
                  </Typography>
                )}

                {c.role ? (
                  <>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1.5 }}>
                      {c.email}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Email
                    </Typography>
                    <Box sx={{ mb: 1.5, height: 20 }} />
                  </>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {c.role ? c.phone : ''}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {c.location}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="small"
                    startIcon={<ChatBubbleOutlineIcon fontSize="small" />}
                  >
                    Message
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<PhoneIcon fontSize="small" />}
                  >
                    Call
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
