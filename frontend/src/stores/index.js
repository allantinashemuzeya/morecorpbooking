import { defineStore } from 'pinia'
import  * as services from '../services'

export const useStore =  defineStore('main',{
  state: () => ({
    bookings: [],
    statusMsg: ""
  }),

  actions: {

    createBooking({commit},data) {
        return services.createBooking(data)
    },

    getAuthToken() {
        return services.getAuthToken()
            .then(function (response) {
              sessionStorage.setItem("token", response.data.access_token);
        })
    },

    fetchBookings(query) {
         services.getBookings(query).then((response) => {
             this.bookings = response.data
        })
    },

    saveStatusMsg(msg) {
        this.statusMsg = msg
    }

  },

})
