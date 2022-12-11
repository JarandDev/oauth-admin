import {Box, Button, Container, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        navigate("/login");
    }

    return (
        <Container maxWidth="sm">
            <h3>Register</h3>
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
                    <TextField id="confirmedPassword" label="Confirm password" type="password" variant="outlined" fullWidth/>
                </div>
                <div>
                    <Button id="submit" type="submit" variant="contained" size="large" fullWidth>Register</Button>
                </div>
            </Box>
        </Container>
    );
}

export default Register;
