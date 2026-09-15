import React, { useState, useRef } from 'react'
import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
  Button,
  Divider,
  Chip,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import PersonIcon from '@mui/icons-material/Person'
import UploadIcon from '@mui/icons-material/Upload'
import CloseIcon from '@mui/icons-material/Close'
import BusinessIcon from '@mui/icons-material/Business'
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { contacts as initialContacts } from '../data/contacts.js'

const phoneCategories = ['Work', 'Personal', 'Mobile', 'Other']

function groupByFirstLetter(list) {
  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name))
  const groups = {}
  sorted.forEach((c) => {
    const letter = (c.name || '').charAt(0).toUpperCase() || '#'
    if (!groups[letter]) groups[letter] = []
    groups[letter].push(c)
  })
  return Object.keys(groups)
    .sort()
    .map((letter) => ({ letter, items: groups[letter] }))
}

export default function ContactList() {
  const [contacts, setContacts] = useState(initialContacts)
  const [search, setSearch] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const fileInputRef = useRef(null)

  const [avatarPreview, setAvatarPreview] = useState(null)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phoneEntries, setPhoneEntries] = useState([
    { id: 1, category: 'Work', value: '' },
    { id: 2, category: 'Personal', value: '' },
  ])
  const [birthday, setBirthday] = useState('')
  const [bio, setBio] = useState('')

  const filtered = contacts.filter(
    (c) =>
      (c.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (c.email || '').toLowerCase().includes(search.toLowerCase()) ||
      (c.location || '').toLowerCase().includes(search.toLowerCase())
  )

  const groups = groupByFirstLetter(filtered)

  const resetForm = () => {
    setAvatarPreview(null)
    setName('')
    setCompany('')
    setJobTitle('')
    setEmail('')
    setPhoneEntries([
      { id: 1, category: 'Work', value: '' },
      { id: 2, category: 'Personal', value: '' },
    ])
    setBirthday('')
    setBio('')
  }

  const handleOpenPanel = () => {
    resetForm()
    setPanelOpen(true)
  }

  const handleClosePanel = () => {
    setPanelOpen(false)
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setAvatarPreview(reader.result)
    reader.readAsDataURL(file)
  }

  const updatePhoneEntry = (id, value) => {
    setPhoneEntries((prev) => prev.map((p) => (p.id === id ? { ...p, value } : p)))
  }

  const updatePhoneCategory = (id, category) => {
    setPhoneEntries((prev) => prev.map((p) => (p.id === id ? { ...p, category } : p)))
  }

  const removePhoneEntry = (id) => {
    setPhoneEntries((prev) => prev.filter((p) => p.id !== id))
  }

  const addPhoneEntry = () => {
    setPhoneEntries((prev) => [...prev, { id: Date.now(), category: 'Other', value: '' }])
  }

  const handleSave = () => {
    const finalName = name.trim() || 'undefined'
    const primaryPhone = phoneEntries.find((p) => p.value.trim())?.value.trim() || ''

    const newContact = {
      id: Date.now(),
      firstName: finalName,
      lastName: '',
      name: finalName,
      role: jobTitle.trim(),
      email: email.trim(),
      phone: primaryPhone,
      location: company.trim(),
      avatar: avatarPreview,
    }

    setContacts((prev) => [...prev, newContact])
    setPanelOpen(false)
    resetForm()
  }

  return (
    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
      <Card sx={{ p: 3, flex: 1, minWidth: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Contact List
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search Contact"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1, maxWidth: 420 }}
          />
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenPanel}>
            Add
          </Button>
        </Box>

        {groups.map((group) => (
          <Box key={group.letter} sx={{ mb: 3 }}>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>{group.letter}</Typography>
            <Divider sx={{ mb: 1.5 }} />
            {group.items.map((c) => (
              <Box
                key={c.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  py: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {c.avatar ? (
                    <Avatar src={c.avatar} alt={c.name} sx={{ width: 44, height: 44 }} />
                  ) : (
                    <Avatar sx={{ width: 44, height: 44, bgcolor: 'primary.main' }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {c.role}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider', color: 'primary.main' }}>
                    <ChatBubbleOutlineIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider', color: 'secondary.main' }}>
                    <PhoneIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        ))}

        {groups.length === 0 && (
          <Typography color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
            No contacts found
          </Typography>
        )}
      </Card>

      {panelOpen && (
        <Card sx={{ p: 3, width: 340, flexShrink: 0, maxHeight: '85vh', overflowY: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar src={avatarPreview} sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>
                {!avatarPreview && <PersonIcon />}
              </Avatar>
              <IconButton
                size="small"
                onClick={handleClosePanel}
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  bgcolor: 'grey.200',
                  '&:hover': { bgcolor: 'grey.300' },
                  width: 20,
                  height: 20,
                }}
              >
                <CloseIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
            <Box>
              <Button
                size="small"
                variant="outlined"
                startIcon={<UploadIcon fontSize="small" />}
                onClick={() => fileInputRef.current?.click()}
              >
                Upload
              </Button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                Image size should be 125kb Max.
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Name
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Company
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Job Title
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WorkIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Email
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {phoneEntries.map((entry) => (
            <Box key={entry.id} sx={{ mb: 2 }}>
              <FormControl size="small" sx={{ mb: 0.5 }}>
                <Select
                  value={entry.category}
                  onChange={(e) => updatePhoneCategory(entry.id, e.target.value)}
                  renderValue={(val) => (
                    <Chip
                      label={val}
                      size="small"
                      onDelete={() => removePhoneEntry(entry.id)}
                      onMouseDown={(e) => e.stopPropagation()}
                      color="primary"
                      variant="outlined"
                    />
                  )}
                  sx={{
                    '.MuiSelect-select': { py: 0.3, display: 'flex', alignItems: 'center' },
                    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                  }}
                >
                  {phoneCategories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={entry.value}
                onChange={(e) => updatePhoneEntry(entry.id, e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon fontSize="small" color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          ))}

          <Button size="small" startIcon={<AddIcon fontSize="small" />} onClick={addPhoneEntry} sx={{ mb: 2 }}>
            Add New Phone
          </Button>

          <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Birthday
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            multiline
            minRows={3}
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button fullWidth variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button fullWidth variant="outlined" onClick={handleClosePanel}>
              Cancel
            </Button>
          </Box>
        </Card>
      )}
    </Box>
  )
}
