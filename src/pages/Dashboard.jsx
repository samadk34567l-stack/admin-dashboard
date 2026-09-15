import React from 'react'
import { Grid } from '@mui/material'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import EarningCard from '../components/EarningCard.jsx'
import TotalOrderCard from '../components/TotalOrderCard.jsx'
import IncomeCard from '../components/IncomeCard.jsx'
import TotalGrowthBarChart from '../components/TotalGrowthBarChart.jsx'
import PopularStocks from '../components/PopularStocks.jsx'

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <EarningCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalOrderCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <IncomeCard dark icon={<ReceiptLongOutlinedIcon fontSize="small" />} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <IncomeCard dark={false} />
      </Grid>

      <Grid item xs={12} md={8}>
        <TotalGrowthBarChart />
      </Grid>
      <Grid item xs={12} md={4}>
        <PopularStocks />
      </Grid>
    </Grid>
  )
}
