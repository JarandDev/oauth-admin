import {Box, Button, Container, TextField} from "@mui/material";

function Login() {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <Container maxWidth="sm">
            <h3>Login</h3>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{
                '& .MuiTextField-root': {m: 1},
                '& .MuiButton-root': {m: 1},
            }}>
                <div>
                    <TextField id="email" label="Email" variant="outlined" fullWidth/>
                </div>
                <div>
                    <TextField id="password" label="Password" type="password" variant="outlined" fullWidth/>
                </div>
                <div>
                    <Button id="submit" type="submit" variant="contained" size="large" fullWidth>Login</Button>
                </div>
            </Box>
        </Container>
    );
}

export default Login;
