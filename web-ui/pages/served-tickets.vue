<template>
  <ServedTickets :user="user" :tickets="tickets" />
</template>

<script>
import { ticketService } from "~/services/ticket.service";
import { getOnlyDate } from '../utils/functions';

export default {
  name: "LandingPage",
  layout: "dashboard",

  middleware: [
    'authenticated',
    'onlyagent'
  ],

  async asyncData() {
    const user = JSON.parse(localStorage.getItem("user")).user
    let tickets = []
    try {
      tickets = (
        (await ticketService.getAllAvailable()).data)
        .filter((ticket) => (ticket.status === "FINISH" &&
          ticket.agent.id === user.id &&
          getOnlyDate(ticket.created_at) === getOnlyDate(Date.now()))
        );
    } catch (e) {
      console.log(e)
    }
    return { tickets, user };
  },
};
</script>
