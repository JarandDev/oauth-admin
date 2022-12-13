import {Alert, AlertTitle, Box, Button, Container, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {postRegister} from "../../services/registerService";

function Register() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirmedPassword: ""
    });
    const [account, setAccount] = useState();
    const [error, setError] = useState(false);

    const handleChange = event => {
        setCredentials({...credentials, [event.target.id]: event.target.value});
    };

    const handleSubmit = async event => {
        event.preventDefault();

        setError(false);

        const {account, error} = await postRegister(credentials);
        if (error) {
            setError(true);
            return;
        }
        setAccount(account);
    };

    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
        <Container maxWidth="sm">
            {!account && <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{
                "& .MuiTextField-root": {m: 1},
                "& .MuiButton-root": {m: 1},
                "& .MuiAlert-root": {m: 1}
            }}>
                <h3>Register</h3>
                <div>
                    <TextField id="email" label="Email" variant="outlined" fullWidth
                               value={credentials.email} onChange={handleChange}/>
                </div>
                <div>
                    <TextField id="password" label="Password" type="password" variant="outlined" fullWidth
                               value={credentials.password} onChange={handleChange}/>
                </div>
                <div>
                    <TextField id="confirmedPassword" label="Confirm password" type="password" variant="outlined" fullWidth
                               value={credentials.confirmedPassword} onChange={handleChange}/>
                </div>
                <div>
                    <Button id="submit" type="submit" variant="contained" size="large" fullWidth>Register</Button>
                </div>
                {error && <Alert sx={{textAlign: "left", width: "94%"}} severity="error">
                    <AlertTitle><b>Registration failed</b></AlertTitle>
                    Something went wrong when registering account. Make sure you enter a valid email and that the passwords match.
                </Alert>}
            </Box>}
            {account && <>
                <Typography variant="h4" style={{color: "green"}}>Successfully registered account!</Typography>
                <p>
                    <b>Email: </b>{account.email}
                </p>
                <p>
                    <b>ID: </b>{account.id}
                </p>
                <Button type="submit" variant="contained" size="large" fullWidth onClick={navigateToLogin}>Login</Button>
            </>}
        </Container>
    );
}

export default Register;
