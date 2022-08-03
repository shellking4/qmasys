<template>
  <TransferedTickets :tickets="tickets" />
</template>

<script lang="ts">
import { ticketService } from "~/services/ticket.service";
import { Ticket } from "~/models/ticket.model";

export default {
  name: "LandingPage",
  layout: "dashboard",

  middleware: [
    'authenticated',
    'onlyagent'
  ],

  async asyncData() {
    const tickets: Ticket[] = (
      (await ticketService.getAllAvailable()).data as any[]
    ).filter((ticket: Ticket) => ticket.status === "transferred");
    return { tickets };
  },
};
</script>
