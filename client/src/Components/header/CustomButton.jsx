
import {Box, Button, Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

import LoginDialog from './Login/LoginDialog';
import { useState } from 'react';


const Wrapper = styled(Box)`
display: flex;
margin 0 3% 0 auto;
&>button , &>p, &>div {
    margin-right:40px;
    font-size : 16px;
    aling-items:center;
}`

const Container =styled(Box)`
display: flex;`;

const LoginButton =styled(Button)`
color: #2874f0;
background: #FFFFFF;
text-transform : none;
padding :5px 40px;
border-radius:2px;
box-shadow:none;
font=weight:600;
height :32px`;

export default function CustomButton() {

  const [open,setOpen]=useState(false);

  const openDialog=()=>{
    setOpen(true);
  }
  return (
    <Wrapper>
      <LoginButton variant='Contained' onClick={()=>openDialog()}>Login</LoginButton>

      <Typography style={{marginTop : 3, width:135 }}>Become a seller</Typography>
      <Typography style={{marginTop : 3}}>More</Typography>

      <Container>
        <ShoppingCart/>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}
