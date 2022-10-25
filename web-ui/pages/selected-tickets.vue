<template>
  <SelectedTickets :tickets="tickets" :user="user" />
</template>

<script>
import SelectedTickets from "~/components/SelectedTickets.vue";
import { ticketService } from "~/services/ticket.service";
import { getOnlyDate } from '../utils/functions';
import { endpoints } from "../services/rest-config";
import { io } from "socket.io-client";

export default {
  name: "SelectedTicketsPage",
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

  created() {
    this.wsConnection = io(endpoints.ticketSocketUrl);
    this.wsConnection.on('receive-list', this.onMessage)
  },

  async asyncData() {
    const user = JSON.parse(localStorage.getItem("user")).user
    let tickets = []
    try {
      tickets = (await ticketService.getAllAvailable()).data
        .filter(function(ticket) {
          var tzoffset = (new Date()).getTimezoneOffset() * 60000;
          var localISOTime = (new Date(new Date(ticket.created_at).getTime() - tzoffset)).toISOString().slice(0, -1);
          let ticketCreatedDate = getOnlyDate(localISOTime);
          if (ticket.status === "RECEIVE" && ticket.agent.id === user.id && ticketCreatedDate === getOnlyDate(Date.now())) {
            return ticket
          }
        })
        .map((ticket, index) => {
          if (index == 0) {
            ticket.can_be_marked_served = true;
          }
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
        });
    } catch (e) {
      console.log(e)
    }
    return { tickets, user }
  },

  beforeDestroy() {
    clearInterval(this.timer)
    this.wsConnection = null
  },

  methods: {
    mutateTicket: function (ticket, index) {
      if (index == 0) {
        ticket.can_be_marked_served = true;
      }
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
      const user = JSON.parse(localStorage.getItem("user")).user
      const receivedData = data
      this.tickets = receivedData
        .filter(function(ticket) {
          var tzoffset = (new Date()).getTimezoneOffset() * 60000;
          var localISOTime = (new Date(new Date(ticket.created_at).getTime() - tzoffset)).toISOString().slice(0, -1);
          let ticketCreatedDate = getOnlyDate(localISOTime);
          if (ticket.status === "RECEIVE" && ticket.agent.id === user.id && ticketCreatedDate === getOnlyDate(Date.now())) {
            return ticket
          }
        })
        .map((ticket, index) => {
          return this.mutateTicket(ticket, index)
        });
    }
  }

};
</script>
