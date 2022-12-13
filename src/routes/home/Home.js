import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    const navigateToRegister = () => {
        navigate("/register");
    };

    return (
        <Container maxWidth="sm">
            <h3>Welcome to OAuth Administration</h3>
            <Box sx={{"& .MuiButton-root": {m: 1}}}>
                <div>
                    <Button id="login" type="button" variant="contained" size="large" fullWidth onClick={navigateToLogin}>Login</Button>
                </div>
                <div>
                    <Button id="register" type="button" variant="contained" size="large" fullWidth onClick={navigateToRegister}>Register</Button>
                </div>
            </Box>
        </Container>
    );
}

export default Home;
