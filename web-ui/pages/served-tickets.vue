<template>
  <ServedTickets :user="user" :tickets="tickets" />
</template>

<script>
import { ticketService } from "~/services/ticket.service";
import { getOnlyDate } from '../utils/functions';

export default {
  name: "ServedTicketsPage",
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
          .filter(function(ticket) {
            var tzoffset = (new Date()).getTimezoneOffset() * 60000;
            var localISOTime = (new Date(new Date(ticket.created_at).getTime() - tzoffset)).toISOString().slice(0, -1);
            let ticketCreatedDate = getOnlyDate(localISOTime);
            if (ticket.status === "FINISH" && ticket.agent.id === user.id && ticketCreatedDate === getOnlyDate(Date.now())) {
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
          });
    } catch (e) {
      console.log(e)
    }
    return { tickets, user };
  },
};
</script>
