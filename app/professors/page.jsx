'use cleint'

import { Box } from "@mui/material"
import Appbar from "../components/Appbar"


const page = () => {
  return (
    <Box>
        <Appbar />
        <Box height={"40vh"} backgroundColor="rgba(0,0,0)">
            Hello
        </Box>

    </Box>
  )
}

export default page