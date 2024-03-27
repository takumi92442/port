import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Header = () => {
  return (
    

    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ backgroundColor:'white'  }} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:'black'}}>
            佐藤 匠
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
