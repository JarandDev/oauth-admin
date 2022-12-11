import {Box, Button, Container} from "@mui/material";

function Dashboard() {

    return (
        <Container maxWidth="sm">
            <h3>Dashboard</h3>
            <Box sx={{'& .MuiButton-root': {m: 1}}}>
                <div>
                    <Button id="new-application" type="button" variant="contained" size="large" fullWidth href="/new/application">New application</Button>
                </div>
            </Box>
        </Container>
    );
}

export default Dashboard;
