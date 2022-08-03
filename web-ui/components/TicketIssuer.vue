<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <img
            width="100%"
            height="900px"
            src="../static/assets/images/queue.gif"
          />
        </div>
        <div class="col-md-5" style="margin-top: 150px">
          <div class="card" style="background: #5248; padding-bottom: 0">
            <div
              class="card-header h4 text-center text-dark"
              style="font-weight: bold; color: #221fac">
              Tirer un ticket
            </div>
            <div class="card-body" style="padding-bottom: 260px">

            </div>
            <div class="card-footer mt-3 bg-light">
              <div class="row">
                <div class="col-md-8 offset-md-5">
                  <button class="btn btn-light py-4 mt-3">
                    <i class="fas fa-print fa-3x"></i>
                  </button>
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
  height: 70px;
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

img {
  max-width: 100%;
}

.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
  padding-bottom: 15px;
}

@media (max-width: 1024px) {
  .card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;
    width: 450px;
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
import { ticketService } from '~/services/ticket.service';
import Swal from "sweetalert2";
import { uiConstants } from '~/utils/ui-constants';

export default {
  props: {
    tickets: [],
  },

  methods: {
    async issueTicket(ticket) {
      this.tickets.shift();
      Swal.fire({
        title: "Ticket issued",
        icon: "success",
        toast: true,
        timer: 2500,
        position: "bottom-right",
        ...uiConstants.swalAnimation,
      });
      let data = {
        status: "awaiting"
      };
      try {
        let responseData = (await ticketService.update(data, ticket.id)).data;
        this.$router.push({
          path: "/ticket-issuer",
          force: true
        })
      } catch (error) {
        console.log();
      }
    },
  },
};
</script>
