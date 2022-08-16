import axios  from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return config;
})

export const createBooking = (data) => axiosClient.post('/booking/create', data);

export const getAuthToken = () => {

    let data = JSON.stringify({
        "client_id": import.meta.env.VITE_CLIENT_ID,
        "client_secret":  import.meta.env.VITE_CLIENT_SECRET,
        "username":  import.meta.env.VITE_USERNAME,
        "password":  import.meta.env.VITE_PASSWORD,
        "grant_type":  import.meta.env.VITE_GRANT_TYPE,
        "scope":  import.meta.env.VITE_SCOPE
    });

    let config = {
        method: 'post',
        url:  import.meta.env.VITE_API_ACCESS_TOKEN_URL,
        headers: {
            'Content-Type': 'application/json',
        },
        data : data
    };

    return axios(config)
}

export const getBookings = (data) => axiosClient.get('/bookings?search='+data);