<template>
  <div>
    <div class="container-fluid" style="margin-top: 80px">
      <marquee-text :duration="20">
        <b style="color: black; font-size: 27px">
          Bienvenue à Banque Atlantique ! Veuillez vous relaxer et patienter en attendant votre tour à la caisse.
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          Welcome to Atlantic Bank ! Please have a good seat and wait for your turn at the counter.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span> </span>
        </b>
      </marquee-text>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div 
            class="card videocontainer" 
            style="margin-top: 50px; height: calc(100vh - 150px); width: 495px">
            <iframe
              src="https://www.youtube.com/embed/HgrJ3wFH15E">
            </iframe>
          </div>
        </div>
        <div style="margin-top: 50px;" class="col-md-8">
          <div class="row" 
            style="margin-bottom: 21px;"
            v-for="(user, index) in users"
            :key="user.id"
            :user="user">
            <div class="col-md-4">
              <div class="card">
                <div style="background-color: #20140e;" class="card-header text-light">
                  <h1 class="text-center h4 fw-bold">NUMERO</h1>
                </div>
                <div class="card-content text-center">
                  <h4 class="blinking-text">
                    <p class="display-5 fw-bold number-decor">
                      {{ getCalledInOffice(user.office_name) ?? "&nbsp" }}
                    </p>
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div style="background-color: #20140e;" class="card-header text-light">
                  <h4 class="text-center h4 fw-bold">GUICHET</h4>
                </div>
                <div class="card-content text-center display-5 fw-bold">
                  <h4 class="display-5 fw-bold number-decor">{{ index + 1 }}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style="height: 196px">
                <div  class="card-header text-light" style="background-color: #20140e;">
                  <h4 class="text-center" >
                    <p class="h4 fw-bold" style="visibility: hidden">LOGO</p>
                  </h4>
                </div>
                <div class="card-content text-center bank-logo">
                  <h4 style="visibility: hidden">LOGO HERE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-shape-divider-top-1658788204">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="custom-shape-divider-bottom-1658788311">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>

.custom-shape-divider-bottom-1658788311 {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1658788311 svg {
  position: relative;
  display: block;
  width: calc(118% + 1.3px);
  height: 90px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1658788311 .shape-fill {
  fill: #20140e;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-bottom-1658788311 svg {
    width: calc(109% + 1.3px);
    height: 5px;
  }
}

.custom-shape-divider-top-1658788204 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1658788204 svg {
  position: relative;
  display: block;
  width: calc(118% + 1.3px);
  height: 77px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1658788204 .shape-fill {
  fill: #20140e;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-top-1658788204 svg {
    width: calc(109% + 1.3px);
    height: 5px;
  }
}

.bank-logo {
  background: url("../static/assets/images/babLogo.png") no-repeat;
}

.blinking-text {
  animation: blinker 4s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.videocontainer video {
  width: 100%;
  height: 100%;
}

.videocontainer iframe {
  width: 100%;
  height: 100%;
}

.number-decor {
  font-size: 50.5px; 
  border: 4px solid #20140e;
  width: 110px;
  color: #e67900;
  border-radius: 8px;
  margin-left: 68px; 
}

</style>

<script>
import MarqueeText from 'vue-marquee-text-component'
import { readOutLoud } from '~/utils/functions';

export default {
  props: {
    tickets: [],
    calledTicket: {},
    users: []
  },

  components: {
    MarqueeText
  },

  // Beware !!! 😂️ 
  // Don't use arrow functions for the functions defined in the methods part of the component. 
  // Otherwise, you'll regret it 😂️😂️😂️😂️. 
  methods: {
    getCalledInOffice: function(office_name) {
      let calledInOffice1 = this.tickets
        .filter((ticket) => ticket.agent.office_name === office_name)
        .sort(function(a,b){ return new Date(a.created_at) - new Date(b.created_at);})
      let topAwaiter = calledInOffice1[0]
      if (!topAwaiter) {
        return 
      }
      return topAwaiter.watcher_nbr
    }
  },
};
</script>
