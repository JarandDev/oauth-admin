import {Box, Button, Container} from "@mui/material";

function Home() {

    return (
        <Container maxWidth="sm">
            <h3>Welcome to OAuth Administration</h3>
            <Box sx={{'& .MuiButton-root': {m: 1}}}>
                <div>
                    <Button id="login" type="button" variant="contained" size="large" fullWidth href="/login">Login</Button>
                </div>
                <div>
                    <Button id="register" type="button" variant="contained" size="large" fullWidth href="/register">Register</Button>
                </div>
            </Box>
        </Container>
    );
}

export default Home;
