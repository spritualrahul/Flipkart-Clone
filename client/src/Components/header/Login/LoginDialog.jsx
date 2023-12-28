import React from 'react'
import{Dialog,Box,TextField,Button, Typography,styled} from'@mui/material';

//css to MUI components
const Component =styled(Box)`
height:85vh;
width:100 vh;

`;

const Image=styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
height:100%;
width: 40%;
padding: 45px 35px;
   &>p, &> h5{
  color:white;
  font-weight:600;
}
`;

const Wrapper =styled(Box)`
   display:flex;
   flex-direction:column;
   padding:25px 35px;
   flex:1;
   &>div,&>button,&>p{
    margin-top:20px;
   }
`;

const LoginButton = styled(Button)`
   text-transform:none;
   background:#fb641b;
   color: #fff;
   height:48px;
   border-radious:2px;
`;


const RequestOTP = styled(Button)`
   text-transform:none;
   background:#fff;
   color: #2874f0;
   height:48px;
   border-radious:2px;
   box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text=styled(Typography)`
  font-size:12px;
  color:#878787;
`;


const CreateAccount = styled(Typography)`
  font-size:14px;
  text-align:center;
  color:#2874f0;
  font-weight:600;
  cursor:pointer;
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
             <Wrapper>
                <TextField variant='standard' label='enter email/mobile number'/>
                <TextField variant='standard' label='enter Password'/>
                <Text>By continuing you agree to flipkart's Term of use and privacy Policy.</Text>
                <LoginButton>Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount>New to Flipkart? Create an account</CreateAccount>
              </Wrapper>
            </Box>
        </Component>
    </Dialog>
  )
}
