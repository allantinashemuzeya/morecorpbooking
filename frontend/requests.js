import axios from "axios";

export function getAuthToken(){
    console.log(import.meta.env.VITE_API_ACCESS_TOKEN_URL)

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
            'Content-Type': 'application/json'
        },
        data : data
    };

   return axios(config)
        .then(function (response) {
            sessionStorage.setItem("token", response.data.access_token);
            return response.data;
        })
        .catch(function (error) {
            return console.log(error);
        });
}

export function getBookings(authToken) {

    let config = {
        method: 'get',
        url:  import.meta.env.VITE_API_BASE_URL+'/bookings',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    };

    return axios(config)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            return console.log(error);
        });
}

