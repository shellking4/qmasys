<template>
    <div>
    <div class="limiter">
      <div class="container-login100 image-bg">
        <div class="wrap-login100 p-l-45 p-r-45 p-t-62 p-b-33">
          <form
            @submit.prevent="handleSubmit"
            class="login100-form validate-form flex-sb flex-w"
          >
            <span class="login100-form-title p-b-53"> QMASYS | ENREGISTREMENT AGENT </span>
            <div class="p-t-31 p-b-9">
              <span class="txt1"> Appelation Poste</span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Ofiice name is required"
            >
              <input
                class="input100"
                type="text"
                required
                v-model="data.office_name"
                name="officeName"
              />
              <span class="focus-input100"></span>
            </div>
            <div class="p-t-31 p-b-9">
              <span class="txt1"> Nom d'utilisateur</span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                class="input100"
                type="text"
                required
                v-model="data.email"
                name="email"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <span class="txt1"> Mot de passe </span>
              <!--<a href="#" class="txt2 bo1 m-l-5"> Oublié ? </a>-->
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                required
                v-model="data.password"
                name="password"
              />
              <span class="focus-input100"></span>
            </div>
            <div class="text-center mt-3 text-danger" style="margin: auto; font-weight: bold">
              <span> {{ authError }} </span>
            </div>
            <div class="container-login100-form-btn m-t-60">
              <button class="login100-form-btn">
                ENREGISTRER
                <span id="spinner" class="mx-2" role="status"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="dropDownSelect1"></div>
  </div>
</template>

<style scoped>
@import url("../static/assets/formassets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css");
@import url("../static/assets/formassets/vendor/animate/animate.css");
@import url("../static/assets/formassets/vendor/css-hamburgers/hamburgers.min.css");
@import url("../static/assets/formassets/vendor/animsition/css/animsition.min.css");
@import url("../static/assets/formassets/vendor/select2/select2.min.css");
@import url("../static/assets/formassets/vendor/daterangepicker/daterangepicker.css");
@import url("../static/assets/formassets/vendor/daterangepicker/daterangepicker.css");
@import url("../static/assets/formassets/css/util.css");
@import url("../static/assets/formassets/css/main.css");
</style>

<script>
import { userService } from '~/services/user.service';

export default {
  data() {
    return {
      data: {
        office_name: "",
        email: "",
        password: "",
      },
      submitted: false,
      authError: ""
    };
  },

  methods: {
    async handleSubmit(e) {
      this.submitted = true;
      console.log(this.data)
      let loader = document.getElementById("spinner");
      try {
        let payload = {
          ...this.data
        }
        loader.className = "spinner-border spinner-border-sm me-2";
        let authResponse = (await userService.create(payload))
        console.log(authResponse)
        this.$router.push({path: "/"})
      } catch (error) {
        loader.className = "";
        this.authError = "erreur lors de l'enregistrement"
        console.log(error)
      }
    },
  },
};
</script>
