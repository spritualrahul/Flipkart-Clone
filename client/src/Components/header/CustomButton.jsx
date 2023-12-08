import {Box, Button, Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';


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
  return (
    <Wrapper>
      <LoginButton variant='Contained'>Login</LoginButton>

      <Typography style={{marginTop : 3, width:135 }}>Become a seller</Typography>
      <Typography style={{marginTop : 3}}>More</Typography>

      <Container>
        <ShoppingCart/>
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  )
}
