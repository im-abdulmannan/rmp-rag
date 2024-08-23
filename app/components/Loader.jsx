'use client'
import { Box, CircularProgress } from '@mui/material'
import theme from '../theme'

const Loader = () => {
  return (
    <Box sx={{
        height: "100vh", display: "flex", alignItems : "center", justifyContent: "center",
    }}>
        <CircularProgress size="4rem" sx={{
            color: theme.palette.emerald[900]
        }} />
    </Box>
  )
}

export default Loader