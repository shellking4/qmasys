<template>
  <TicketIssuer :tickets="tickets" />
</template>

<script>
//import { endpoints, httpClient } from "../services/rest-config";
import { io } from "socket.io-client";

export default {
    name: "TiketIssuerPage",
    layout: "default",

    data () {
      return {
        tickets: []
      }
    },
    //middleware: 'authenticated',

    async asyncData() {
      try {
        //httpClient.get("http://localhost:8000/api/v1/parking/parkings/issue-ticket")
      } catch (error) {
        console.log(error)
      }
    },

    created() {
      this.wsConnection = io("ws://localhost:8001/parking");
      this.wsConnection.on('message', this.onMessage)
      //this.wssConnection = new WebSocket("ws://localhost:8001/api/v1/parking")
      //this.wssConnection.onMessage
    },

    beforeDestroy() {
      clearInterval(this.timer)
      this.wsConnection = null
      this.wssConnection = null
    },

    methods: {
      onMessage: function (data) {
        const receivedData = data
        console.log(receivedData)
      }
    }
};
</script>
