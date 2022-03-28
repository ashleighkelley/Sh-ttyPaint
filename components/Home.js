
import Navbar from './Navbar'
import About from './About'
import Mint from './Mint'
import paint from '../site-images/other/paint.png'
import {Box} from '@mui/material'
import {MinterProvider} from '../context/context'


function Home(props) {

  return (
    <MinterProvider>
      <Navbar></Navbar>
      <Box 
        sx={{mt: 10}}
        display='flex'
        alignItems='center'
        justifyContent="center"
      >
        <img src={paint} alt='paint'/>
      </Box>
      <About></About>
      <Mint></Mint>
    </MinterProvider>
  )
}

export default Home;