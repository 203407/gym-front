import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import '../../assets/css/loader.css'

function Loader() {
    return ( 
        <div className='container__loader' >
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
     );
}

export default Loader;