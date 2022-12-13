export const postRegister = async credentials => {
    try {
        const response = await fetch("http://localhost:8080/account",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });
        if (response.status !== 200) {
            return {error: `Registration failed. HTTP code: ${response.status}`};
        }
        return {account: await response.json()};
    } catch (ex) {
        console.error(ex);
        return {error: "Something when wrong while registering account."};
    }
};
