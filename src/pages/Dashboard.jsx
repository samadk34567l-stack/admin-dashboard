import React from 'react'
import { Grid } from '@mui/material'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import EarningCard from '../components/EarningCard.jsx'
import TotalOrderCard from '../components/TotalOrderCard.jsx'
import IncomeCard from '../components/IncomeCard.jsx'
import VisitorsCard from '../components/VisitorsCard.jsx'
import TotalGrowthBarChart from '../components/TotalGrowthBarChart.jsx'
import PopularStocks from '../components/PopularStocks.jsx'
import AlertsPanel from '../components/AlertsPanel.jsx'

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <EarningCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <TotalOrderCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <VisitorsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2.4}>
        <IncomeCard dark icon={<ReceiptLongOutlinedIcon fontSize="small" />} value="$45.2k" label="Total Income" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2.4}>
        <IncomeCard dark={false} value="1,024" label="Pending Invoices" />
      </Grid>

      <Grid item xs={12} md={8}>
        <TotalGrowthBarChart />
      </Grid>
      <Grid item xs={12} md={4}>
        <PopularStocks />
      </Grid>

      <Grid item xs={12}>
        <AlertsPanel />
      </Grid>
    </Grid>
  )
}
