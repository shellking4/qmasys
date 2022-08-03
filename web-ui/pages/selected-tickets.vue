<template>
  <SelectedTickets :tickets="tickets" :user="user" />
</template>

<script>
import Vue from "vue";
import SelectedTickets from "~/components/SelectedTickets.vue";
import { ticketService } from "~/services/ticket.service";
import { getOnlyDate } from '../utils/functions';

export default Vue.extend({
    name: "LandingPage",
    layout: "dashboard",
    components: { SelectedTickets },

  middleware: [
    'authenticated',
    'onlyagent'
  ],


  async asyncData() {
    const user = JSON.parse(localStorage.getItem("user")).user
    let tickets = []
    try {
      tickets = (await ticketService.getAllAvailable()).data.filter(
        (ticket) => (
          ticket.status === "RECEIVE" &&
          ticket.agent.id === user.id &&
          getOnlyDate(ticket.created_at) === getOnlyDate(Date.now())
        )
      )
    } catch (e) {
      console.log(e)
    }
    return { tickets, user }
  },
});
</script>
