import React, { forwardRef } from 'react'
import { Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useSnackbar } from 'notistack'
import './SuccessSnackbar.css'

const SuccessSnackbar = forwardRef(function SuccessSnackbar({ id, message }, ref) {
  const { closeSnackbar } = useSnackbar()

  return (
    <Box ref={ref} onClick={() => closeSnackbar(id)} className="success-snackbar">
      <Box className="success-snackbar__icon">
        <CheckIcon className="success-snackbar__check-icon" />
      </Box>
      <Typography variant="body2" className="success-snackbar__message">
        {message}
      </Typography>
    </Box>
  )
})

export default SuccessSnackbar
