<template>
  <div>
    <div class="container">
      <div id="slide-left-container">
        <div class="slide-left"></div>
      </div>
      <div id="cards-container">
        <div class="cards">
          <div class="card">
            <div
              class="container"
              style="background: #05468 !important; margin-top: 100px"
            >
              <h5 class="h3" style="margin: auto; font-weight: bold">
                CAISSE N°1
              </h5>
            </div>
            <div class="container">
              <h3 class="h4">
                <ul>
                  <li style="margin-top: 5px; color: green; font-weight: bold;" v-for="ticket in getCalledInOffice1()" :key="ticket.id">TICKET &emsp; {{ ticket.watcher_nbr }}</li>
                </ul>
              </h3>
            </div>
          </div>
          <div class="card">
            <div
              class="container"
              style="background: #05468 !important; margin-top: 100px"
            >
              <h5 class="h3" style="margin: auto; font-weight: bold">
                CAISSE N°2
              </h5>
            </div>
            <div class="container">
              <h3 class="h4">
                <ul>
                  <li style="margin-top: 5px; color: green; font-weight: bold;" v-for="ticket in getCalledInOffice2()" :key="ticket.id" :ticket="ticket">TICKET &emsp; {{ ticket.watcher_nbr }}</li>
                </ul>
              </h3>
            </div>
          </div>
          <div class="card">
            <div
              class="container"
              style="background: #05468 !important; margin-top: 100px"
            >
              <h5 class="h3" style="margin: auto; font-weight: bold">
                CAISSE N°3
              </h5>
            </div>
            <div class="container">
              <h3 class="h4">
                <ul>
                  <li style="margin-top: 5px; color: green; font-weight: bold;" v-for="ticket in getCalledInOffice3()" :key="ticket.id" :ticket="ticket"><span class="ticket-span">TICKET &emsp; 00{{ ticket.watcher_nbr }}</span></li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!--<marquee scrollamount="10">
        <b style="color: black; font-size: 27px">
          Bienvenue à Banque Atlantique! Veuillez patienter en attendant votre tour à la caisse.
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          Welcome to Atlantic Bank ! Please have a good seat and wait for your turn at the counter.
          <span> </span>
        </b>
      </marquee>-->
      <marquee-text :duration="20">
        <b style="color: black; font-size: 27px">
          Bienvenue à Banque Atlantique ! Veuillez vous relaxer et patienter en attendant votre tour à la caisse.
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          Welcome to Atlantic Bank ! Please have a good seat and wait for your turn at the counter.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span> </span>
        </b>
      </marquee-text>
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

.ticket-span {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

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
  fill: #1b358f;
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
  fill: #1b358f;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-top-1658788204 svg {
    width: calc(109% + 1.3px);
    height: 5px;
  }
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 60px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-around;
  padding: 4px 16px;
}

#cards-container {
  overflow: hidden;
  margin: 20px;
}

.cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 99999px;
  height: 500px;
}

.card {
  /* Add shadows to create the "card" effect */
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: url("../static/assets/images/babLogo.png") no-repeat;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  width: 350px;
  margin: 5px 19px;
}

.card:hover {
  -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card .img {
  max-width: 220px;
  height: 220px;
  display: inline-block;
}

#slide-left-container,
#slide-right-container {
  display: none;
}

#slide-left-container.active,
#slide-right-container.active {
  display: block;
  cursor: pointer;
}

.slide-left,
.slide-right {
  border-color: #fff;
  border-style: solid;
  height: 20px;
  width: 20px;
  margin-top: 30%;
}

.slide-left {
  border-width: 4px 0 0 4px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin-left: 40%;
}

.slide-right {
  border-width: 4px 4px 0 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-left: 22%;
}

marquee span {
	margin-right: 100%;
	}
marquee p {
	white-space:nowrap;
	margin-right: 60px;
}
</style>

<script>
import MarqueeText from 'vue-marquee-text-component'

export default {
  props: {
    tickets: [],
  },

  components: {
    MarqueeText
  },

  methods: {
    getCalledInOffice1() {
      let calledInOffice1 = this.tickets
        .filter((ticket) => ticket.agent.office_name === "Caisse N°1")
        .sort(function(a,b){ return new Date(a.created_at) - new Date(b.created_at);})
      return calledInOffice1
    },
    getCalledInOffice2() {
      let calledInOffice2 = this.tickets
        .filter((ticket) => ticket.agent.office_name === "Caisse N°2")
        .sort(function(a,b){ return new Date(a.created_at) - new Date(b.created_at);})
      return calledInOffice2;
    },
    getCalledInOffice3() {
      let calledInOffice3 = this.tickets
        .filter((ticket) => ticket.agent.office_name === "Caisse N°3")
        .sort(function(a,b){ return new Date(a.created_at) - new Date(b.created_at);})
      return calledInOffice3;
    },
  },
};
</script>
