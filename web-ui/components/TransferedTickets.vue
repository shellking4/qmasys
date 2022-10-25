<template>
  <div class="container">
    <div class="row" style="padding-bottom: 40px; margin-top: 20px">
      <Ticket v-for="ticket in tickets" :key="ticket.code" :ticket="ticket" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tickets: [],
    },
  };
</script>

