<template>
  <TicketQueue :tickets="tickets" :calledTicket="calledTicket" :users="users" />
</template>

<script>
import { ticketService } from "~/services/ticket.service";
import { userService } from '~/services/user.service';
import { endpoints } from "../services/rest-config";
import { authService } from '~/services/auth.service';
import { io } from "socket.io-client";
import { callTicket, getArraysDifference, getOnlyDate } from '../utils/functions';

export default {
  name: "TicketsQueuePage",
  layout: "default",

  data() {
    return {
      tickets: [],
      calledTicket: {},
      users: [],
      timer: null,
      wsConnection: null,
    };
  },

  //middleware: 'authenticated',

  created() {
    this.wsConnection = io(endpoints.ticketSocketUrl);
    this.wsConnection.on('receive-list', this.onMessage)
  },

  async asyncData() {
    const user = JSON.parse(localStorage.getItem("user"));
    let tickets = [];
    let users = [];
    try {
      tickets = (await ticketService.getAllAvailable()).data
        .filter(function(ticket) {
          var tzoffset = (new Date()).getTimezoneOffset() * 60000;
          var localISOTime = (new Date(new Date(ticket.created_at).getTime() - tzoffset)).toISOString().slice(0, -1);
          let ticketCreatedDate = getOnlyDate(localISOTime);
          if (ticket.status === "RECEIVE" && ticketCreatedDate === getOnlyDate(Date.now())) {
            return ticket
          }
        })
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
    let token = "";
    token = localStorage.getItem("user") ? `Bearer ${JSON.parse(localStorage.getItem("user")).token}` : ""
    if (token == "") {
      let authResponse = (await authService.authenticate(null, { username: "atlantic@bank.com", password: "Atlantic@1234" }, null))
      localStorage.setItem("user", JSON.stringify(authResponse.data))
      token = localStorage.getItem("user") ? `Bearer ${JSON.parse(localStorage.getItem("user")).token}` : ""
    }
    try {
      users = (await userService.getAll()).data.filter(
        user => !(user.roles.includes("ADMIN"))
      )
      console.log(users)
    } catch (e) {
      console.log(e)
    }

    return { tickets, users };
  },

  beforeDestroy() {
    clearInterval(this.timer)
    this.wsConnection = null
  },

  methods: {
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
      const oldTicketsSet = this.tickets;
      let calledTicket = getArraysDifference(receivedData, oldTicketsSet)[0];
      if (calledTicket) {
        this.mutateTicket(calledTicket);
        callTicket(calledTicket);
      }
      this.tickets = receivedData
        .filter(function(ticket) {
          var tzoffset = (new Date()).getTimezoneOffset() * 60000;
          var localISOTime = (new Date(new Date(ticket.created_at).getTime() - tzoffset)).toISOString().slice(0, -1);
          let ticketCreatedDate = getOnlyDate(localISOTime);
          if (ticket.status === "RECEIVE" && ticketCreatedDate === getOnlyDate(Date.now())) {
            return ticket
          }
        })
        .map((ticket) => {
          return this.mutateTicket(ticket)
        })
    },
  }
};
</script>
