export const getUser = async token => {
    try {
        const res = await fetch(`${import.meta.env.VITE_APP_DR_TIME}/auth/me`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!res.ok) {
            const {
                error
            } = await res.json();
            throw new Error(error);
        }
        const data = await res.json();
        return {
            data
        };
    } catch (error) {
        return {
            error
        };
    }
};
export const registerUser = async credentials => {
    try {
        const res = await fetch(`${import.meta.env.VITE_APP_DR_TIME}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!res.ok) {
            const {
                error
            } = await res.json();
            throw new Error(error);
        }
        const data = await res.json();
        return {
            data
        };
    } catch (error) {
        return {
            error
        };
    }
};

export const loginUser = async credentials => {
    try {
        const res = await fetch(`${import.meta.env.VITE_APP_DR_TIME}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!res.ok) {
            const {
                error
            } = await res.json();
            throw new Error(error);
        }
        const data = await res.json();
        return {
            data
        };
    } catch (error) {
        return {
            error
        };
    }
};
export const setToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};