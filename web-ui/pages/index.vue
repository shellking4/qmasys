<template>
  <Landing :tickets="tickets" :user="user" />
</template>

<script>
import { ticketService } from '../services/ticket.service';
import { endpoints } from "../services/rest-config";
import { io } from "socket.io-client";
import { getOnlyDate } from '../utils/functions';

export default {
  name: "LandingPage",
  layout: "dashboard",

  middleware: [
    'authenticated',
    'onlyagent'
  ],

  data () {
    return {
      tickets: [],
      user: null,
      wsConnection: null,
      wssConnection: null,
      timer: null
    }
  },


  async asyncData() {
    const user = JSON.parse(localStorage.getItem("user")).user
    let tickets = []
    try {
      tickets = ((await ticketService.getAllAvailable()).data)
      .filter((ticket) => (ticket.status === "WAITING" && getOnlyDate(ticket.created_at) === getOnlyDate(Date.now())))
      .map((ticket) => {
        if (String(ticket.order_nber).length === 1) {
          ticket.watcher_nbr = `00${ticket.order_nber}`
          ticket.counter_call_nbr = `00 ${ticket.order_nber}`
        }
        if (String(ticket.order_nber).length === 2) {
          ticket.watcher_nbr = `0${ticket.order_nber}`
          ticket.counter_call_nbr = `0 ${ticket.order_nber}`
        }
        if (String(ticket.order_nber).length >= 3) {
          ticket.watcher_nbr = ticket.order_nber
          ticket.counter_call_nbr = ticket.order_nber
        }
        return ticket
      })
    } catch (e) {
      console.log(e)
    }
    return { tickets, user }
  },

  created() {
    this.wsConnection = io(endpoints.ticketSocketUrl);
    this.wsConnection.on('waiter-list', this.onMessage)
  },

  beforeDestroy() {
    clearInterval(this.timer)
    this.wsConnection = null
  },

  methods: {
    getAllAvailableTickets: async function () {
      let tickets = []
      try {
        tickets = ((await ticketService.getAllAvailable()).data)
          .filter((ticket) => (ticket.status === "WAITING" && getOnlyDate(ticket.created_at) === getOnlyDate(Date.now())))
          .map((ticket) => {
            if (String(ticket.order_nber).length === 1) {
              ticket.watcher_nbr = `00${ticket.order_nber}`
              ticket.counter_call_nbr = `00 ${ticket.order_nber}`
            }
            if (String(ticket.order_nber).length === 2) {
              ticket.watcher_nbr = `0${ticket.order_nber}`
              ticket.counter_call_nbr = `0 ${ticket.order_nber}`
            }
            if (String(ticket.order_nber).length >= 3) {
              ticket.watcher_nbr = ticket.order_nber
              ticket.counter_call_nbr = ticket.order_nber
            }
            return ticket
          })
        console.log(tickets)
      } catch (error) {
        console.log(error)
      }
      return tickets
    },
    mutateTicket: function (ticket) {
      if (String(ticket.order_nber).length === 1) {
        ticket.watcher_nbr = `00${ticket.order_nber}`
        ticket.counter_call_nbr = `00 ${ticket.order_nber}`
      }
      if (String(ticket.order_nber).length === 2) {
        ticket.watcher_nbr = `0${ticket.order_nber}`
        ticket.counter_call_nbr = `0 ${ticket.order_nber}`
      }
      if (String(ticket.order_nber).length >= 3) {
        ticket.watcher_nbr = ticket.order_nber
        ticket.counter_call_nbr = ticket.order_nber
      }
      return ticket
    },
    onMessage: function (data) {
      const receivedData = data
      console.log(receivedData)
      this.tickets = receivedData
      .filter(
        (ticket) => ticket.status === "WAITING" &&
        getOnlyDate(ticket.created_at) === getOnlyDate(Date.now()))
      .map((ticket) => {
        return this.mutateTicket(ticket)
      })
    }
  }
};
</script>
