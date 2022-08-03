<template>
  <div class="col-md-3 col-12 py-4">
    <div class="card">
      <div class="card-header animated-bg" id="header">
        <h1 class="text-center" style="font-weight: bold">QMASYS TICKET</h1>
      </div>
      <div class="card-content">
        <h3 class="card-title text-center" id="title">QMASYS | TICKET CLIENT</h3>
        <p class="card-excerpt" id="excerpt"></p>
        <div class="author">
          <div class="profile-img animated-bg" id="profile_img">
            <img src="/assets/images/ticket.png" />
          </div>
          <div class="author-info">
            <strong class="" id="name">{{  ticket.order_nber }}</strong>
            <div class="row">
              <div class="col-md-12 mt-2">
                <small class="" id="event-btn">
                    <button @click="call(ticket)" v-if="ticket.status === 'WAITING'" class="btn btn-success" id="btn1">Appeler</button>
                    <!--<button @click="transfer(ticket)" v-if="ticket.status === 'called'" class="btn btn-warning" id="btn2">Transférer</button>-->
                    <button @click="call(ticket)" v-if="ticket.status === 'transferred'" class="btn btn-info" id="btn2">Reprendre</button>
                </small>
              </div>
              <div class="col-md-12 mt-2">
                <small class="animated-bg animated-bg-text" id="date">
                    <button @click="markServed(ticket)" v-if="ticket.status === 'RECEIVE'" class="btn btn-success" id="btn2">Marquer traité</button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  max-width: 100%;
}

.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  padding-bottom: 15px;
}

@media (max-width: 1024px) {
  .card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;
    width: 338px;
  }
}

.card-header img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.card-content {
  background-color: #fff;
  padding: 30px;
}

.card-title {
  height: 20px;
  margin: 0;
}

.card-excerpt {
  color: #777;
  margin: 10px 0 20px;
}

.author {
  display: flex;
}

.profile-img {
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
}

.author-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 160px;
}

.author-info small {
  color: #aaa;
  margin-top: 5px;
}

.animated-bg {
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>

<script>
import Swal from "sweetalert2";
import { io } from "socket.io-client";
import { endpoints } from "~/services/rest-config";
import { uiConstants } from '~/utils/ui-constants';
import { readOutLoud } from '~/utils/functions';


export default {
  name: "Card",
  props: {
    ticket: Object,
    user: Object
  },

  data () {
    return {
      wsConnection: null,
    }
  },

  created() {
    this.wsConnection = io(endpoints.ticketSocketUrl);
  },

  methods: {
    call: async function (ticket) {
      this.$emit("ticketCall", ticket);
      readOutLoud(`Ticket ${ticket.counter_call_nbr}`, "fr-FR")
      readOutLoud(`${this.user.office_name}`, "fr-FR")
      readOutLoud(`Ticket ${ticket.counter_call_nbr}`, "en-US")
      readOutLoud(`${this.user.office_name.replace("Caisse N°", "Counter number")}`, "en-US")
      Swal.fire({
        title: "Ticket appelé",
        icon: "success",
        toast: true,
        timer: 2500,
        position: "bottom-right",
        ...uiConstants.swalAnimation
      })
      let data = {
        id: ticket.id,
        agent_id: this.user.id
      }
      this.wsConnection.emit("receive-one", data)
    },

    markServed: async function (ticket) {
      this.$emit("ticketServed", ticket);
      Swal.fire({
        title: "Ticket servi",
        icon: "success",
        toast: true,
        timer: 2500,
        position: "bottom-right",
        ...uiConstants.swalAnimation
      })
      let data = {
        id: ticket.id,
        agent_id: this.user.id
      }
      this.wsConnection.emit("finish-one", data)
    }
  }
};
</script>
