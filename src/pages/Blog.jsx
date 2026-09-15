import React, { useState, useMemo } from 'react'
import {
  Box,
  Card,
  Typography,
  IconButton,
  Avatar,
  Chip,
  Button,
  Divider,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'

// three datasets for the three summary boxes
const dataSets = {
  week: {
    label: 'Blog views',
    color: '#2196f3',
    values: [20, 6, 15, 4, 5, 10, 8, 15, 3, 10, 12, 14, 17, 20, 22, 15, 11, 8, 14, 18, 25, 5, 10, 17, 8, 6, 15, 10, 20, 3],
  },
  month: {
    label: 'Monthly views',
    color: '#ff9800',
    values: [8, 18, 5, 22, 10, 6, 20, 14, 9, 25, 4, 12, 17, 7, 23, 10, 15, 20, 6, 12, 9, 18, 22, 4, 14, 8, 25, 11, 6, 19],
  },
  all: {
    label: 'All time views',
    color: '#43a047',
    values: [12, 22, 8, 16, 25, 10, 5, 19, 14, 7, 20, 9, 24, 13, 6, 18, 11, 23, 4, 15, 21, 8, 17, 10, 25, 6, 14, 20, 9, 16],
  },
}

const recentBlogs = [
  {
    title: 'Year Wrap-up 2023 - December Edition',
    likes: '45k',
    comments: '65k',
    views: 132,
    time: '5 min ago',
    author: 'Brendan Smith',
    site: 'dasboard.io/',
    avatarColor: '#42a5f5',
  },
  {
    title: 'Tech Trends 2024 - January Edition',
    likes: '40k',
    comments: '35k',
    views: 120,
    time: '2 hrs ago',
    author: 'Brian Sanders',
    site: 'analytics.io/',
    avatarColor: '#ef5350',
  },
  {
    title: 'Quarterly Review 2024 - March Recap',
    likes: '55k',
    comments: '50k',
    views: 142,
    time: '10 min ago',
    author: 'Brittany Shaw',
    site: 'statistics.io/',
    avatarColor: '#ab47bc',
  },
]

const drafts = [
  {
    tag: 'React',
    tagColor: '#7b61ff',
    title: 'Responsive UI Design With Material-UI & React',
    sub: 'Responsive UI Design With Material-UI & React',
    date: 'Last update March 23, 2024',
  },
  {
    tag: 'React',
    tagColor: '#7b61ff',
    title: 'Data Visualization in React Using ApexCharts',
    sub: 'Data Visualization in React Using ApexCharts',
    date: 'Last update April 13, 2024',
  },
  {
    tag: 'Technology',
    tagColor: '#29b6f6',
    title: 'Building Scalable APIs With Node.js',
    sub: 'Building Scalable APIs With Node.js and Express',
    date: 'Last update June 20, 2024',
  },
]

const challenges = [
  {
    tag: '#Code&Passion',
    tagColor: 'success',
    time: '5 min ago',
    desc: 'Dive into coding insights, experiences & idea.',
    challengers: 104,
    action: 'Accept',
    actionColor: 'primary',
  },
  {
    tag: '#DesignInspire',
    tagColor: 'error',
    time: '2 hrs ago',
    desc: 'Explore creative design ideas, innovations and experience.',
    challengers: 121,
    action: 'Accept',
    actionColor: 'primary',
  },
  {
    tag: '#ShareYourVoice',
    tagColor: 'success',
    time: '10 min ago',
    desc: 'Discover unique perspectives and personal stories.',
    challengers: 162,
    action: 'Accept',
    actionColor: 'primary',
  },
]

const cardHoverSx = {
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
  },
}

function SummaryBox({ active, onClick, value, label, activeColor }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        flex: 1,
        p: 2.5,
        borderRadius: 2,
        cursor: 'pointer',
        bgcolor: active ? activeColor : 'grey.50',
        color: active ? '#fff' : 'text.primary',
        border: active ? 'none' : '1px solid',
        borderColor: 'grey.100',
        transition: 'background-color 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: active ? '0 10px 20px rgba(33,150,243,0.35)' : '0 8px 18px rgba(0,0,0,0.08)',
        },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ opacity: active ? 0.9 : 0.7 }}>
        {label}
      </Typography>
    </Box>
  )
}

export default function Blog() {
  const [activeRange, setActiveRange] = useState('week')

  const chartData = useMemo(() => {
    const ds = dataSets[activeRange]
    return ds.values.map((v, i) => ({ day: i + 1, value: v }))
  }, [activeRange])

  const activeColor = dataSets[activeRange].color

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Analytics Summary */}
      <Card sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Analytics Summary
          </Typography>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <SummaryBox
            active={activeRange === 'week'}
            onClick={() => setActiveRange('week')}
            value="50"
            label="Views (7 Days)"
            activeColor="#2196f3"
          />
          <SummaryBox
            active={activeRange === 'month'}
            onClick={() => setActiveRange('month')}
            value="1230"
            label="Views (30 Days)"
            activeColor="#ff9800"
          />
          <SummaryBox
            active={activeRange === 'all'}
            onClick={() => setActiveRange('all')}
            value="20,987"
            label="Views (All Time)"
            activeColor="#43a047"
          />
        </Box>

        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap="35%">
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: '#8492a6' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: '#8492a6' }}
                domain={[0, 25]}
                ticks={[0, 5, 10, 15, 20, 25]}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={600}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.value >= 15 ? activeColor : '#e6e9ec'}
                    style={{ transition: 'fill 0.3s ease' }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: activeColor }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {dataSets[activeRange].label}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e6e9ec' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              None
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Bottom grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.3fr 1.3fr 1fr' }, gap: 2.5, alignItems: 'start' }}>
        {/* Recent Blog List */}
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Recent Blog List
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recentBlogs.map((blog, i) => (
              <Card
                key={i}
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  cursor: 'pointer',
                  ...cardHoverSx,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, pr: 1 }}>
                    {blog.title}
                  </Typography>
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', gap: 2.5, mt: 1, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <FavoriteBorderIcon sx={{ fontSize: 16 }} />
                    <Typography variant="caption">{blog.likes} likes</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
                    <Typography variant="caption">{blog.comments} comments</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <VisibilityOutlinedIcon sx={{ fontSize: 16 }} />
                    <Typography variant="caption">{blog.views}</Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <AccessTimeIcon sx={{ fontSize: 14 }} />
                    <Typography variant="caption">{blog.time}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" sx={{ display: 'block', fontWeight: 600 }}>
                        {blog.author}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {blog.site}
                      </Typography>
                    </Box>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: blog.avatarColor, fontSize: 13 }}>
                      {blog.author.charAt(0)}
                    </Avatar>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Card>

        {/* Drafts */}
        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Drafts
              </Typography>
              <Chip label={drafts.length} color="error" size="small" sx={{ height: 22, fontWeight: 700 }} />
            </Box>
            <IconButton size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {drafts.map((d, i) => (
              <Box key={i}>
                <Box
                  sx={{
                    py: 1.6,
                    px: 1,
                    mx: -1,
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    '&:hover': { bgcolor: 'grey.50' },
                  }}
                >
                  <Box sx={{ pr: 1 }}>
                    <Chip
                      label={d.tag}
                      size="small"
                      sx={{
                        bgcolor: `${d.tagColor}1a`,
                        color: d.tagColor,
                        fontWeight: 600,
                        mb: 0.7,
                        height: 22,
                      }}
                    />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.3 }}>
                      {d.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.3 }}>
                      {d.sub}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      🕐 {d.date}
                    </Typography>
                  </Box>
                  <IconButton size="small" sx={{ flexShrink: 0 }}>
                    <EditIcon sx={{ fontSize: 17 }} />
                  </IconButton>
                </Box>
                {i < drafts.length - 1 && <Divider />}
              </Box>
            ))}
          </Box>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}
            >
              View All ›
            </Typography>
          </Box>
        </Card>

        {/* Right column: Create New Blog + Writing Challenges */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Card
            sx={{
              p: 3,
              bgcolor: '#673ab7',
              color: '#fff',
              backgroundImage: 'linear-gradient(135deg, #7c4dff 0%, #5e35b1 100%)',
              ...cardHoverSx,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Create New Blog
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2.5 }}>
              Unleash your creativity by writing a new blog post. Share your unique insights, stories, and expertise
              with the world.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.5)',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Create new blog
            </Button>
          </Card>

          <Card sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Writing Challenges
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box>
              {challenges.map((c, i) => (
                <Box key={i}>
                  <Box
                    sx={{
                      py: 1.6,
                      px: 1,
                      mx: -1,
                      borderRadius: 2,
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      '&:hover': { bgcolor: 'grey.50' },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.7 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {c.tag}
                        </Typography>
                        <Chip
                          label={c.tagColor === 'success' ? 'New' : 'Closed'}
                          color={c.tagColor}
                          size="small"
                          sx={{ height: 20, fontSize: 11, fontWeight: 700 }}
                        />
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {c.time}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {c.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        🕐 {c.challengers} challengers
                      </Typography>
                      <Button
                        size="small"
                        variant="outlined"
                        sx={{
                          textTransform: 'none',
                          fontWeight: 600,
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'scale(1.05)' },
                        }}
                      >
                        {c.action}
                      </Button>
                    </Box>
                  </Box>
                  {i < challenges.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
