import React from 'react'
import{Dialog,Box,TextField,Button, Typography,styled} from'@mui/material';

//css to MUI components
const Component =styled(Box)`
height:70vh;
width:90 vh;

`;

const Image=styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
height:100%;
width: 40%;
padding: 45px 35px;
`


export default function LoginDialog({open,setOpen}) {

    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <Dialog open={open}onClose={handleClose}>
        <Component>
            <Box style={{display:"flex",height:"100%"}}>
            <Image>
                <Typography variant='h5'>Login</Typography>
                <Typography style={{marginTop:20}}>Get access to your orders, Wishlist and Recommendations</Typography>
            </Image>
             <Box>
                <TextField variant='standard' label='enter email/mobile number'/>
                <TextField variant='standard' label='enter Password'/>
                <TextField>By continuing you agree to flipkart's Term of use and privacy Policy.</TextField>
                <Button>Login</Button>
                <Typography>OR</Typography>
                <Button>Request OTP</Button>
                <Typography>New to Flipkart? Create an account</Typography>
              </Box>
            </Box>
        </Component>
    </Dialog>
  )
}
