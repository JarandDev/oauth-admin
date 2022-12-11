import {Box, Button, Container, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

function NewApplication() {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        navigate("/dashboard");
    }

    return (
        <Container maxWidth="sm">
            <h3>New application</h3>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{
                '& .MuiTextField-root': {m: 1},
                '& .MuiButton-root': {m: 1},
            }}>
                <div>
                    <TextField id="name" label="Name" variant="outlined" fullWidth/>
                </div>
                <div>
                    <TextField id="description" label="Description" variant="outlined" fullWidth/>
                </div>
                <div>
                    <TextField id="homePageUrl" label="Homepage URL" variant="outlined" fullWidth/>
                </div>
                <div>
                    <TextField id="privacyPolicyUrl" label="Privacy policy URL" variant="outlined" fullWidth/>
                </div>
                <div>
                    <TextField id="ownerAccountId" label="Owner Account ID" variant="outlined" fullWidth/>
                </div>
                <div>
                    <Button id="submit" type="submit" variant="contained" size="large" fullWidth>Create application</Button>
                </div>
            </Box>
        </Container>
    );
}

export default NewApplication;
