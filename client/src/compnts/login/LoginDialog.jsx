
import { Dialog , Box, TextField, Typography, Button, styled} from '@mui/material';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat;
    height: 100%;
    width: 40%;
    padding: 160px 35px;

`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`

const LoginDialog = ({ open , setOpen }) => {
    
    const handleClose = () => {
        setOpen(false);
    }
    return(
        <Dialog open = {open} onClose={handleClose}>
            <Component>
                <Box style={{ display:'flex',height : '100%'}}>
                    <Image>
                        <Typography variant="h5">Login</Typography>
                        <Typography style={{marginTop: 20}}>Get access to your orders, wishlist and recommendations</Typography>
                    </Image>
                    <Wrapper>
                        <TextField variant="standard" label="Enter Email/Mobile number"/>
                        <TextField variant="standard" label="Enter Password"/>
                        <Text>By continuing you agree to flipkart terms and conditions</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography>OR</Typography>
                        <Button>Request OTP</Button>
                        <Typography>New to Flipkart? create an account</Typography>
                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;

