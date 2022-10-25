<template>
  <nav>
    <ul>
      <!--<nuxt-link to="/admin">
        <li :class="$nuxt.$route.path === '/admin' ? 'active-link' : ''" role="button">
          <i class="fas fa-home"></i>
          <p :class="$nuxt.$route.path === '/admin' ? 'active-link' : ''">ACCUEIL</p>
        </li>
      </nuxt-link>-->
      <nuxt-link to="/admin">
        <li :class="$nuxt.$route.path === '/admin' ? 'active-link' : ''">
          <i class="fas fa-box"></i>
          <p :class="$nuxt.$route.path === '/admin' ? 'active-link' : ''">
            COMPTES AGENTS
          </p>
        </li>
      </nuxt-link>
      <nuxt-link to="">
        <li role="button" @click="logout()">
          <i role="button" @click="logout()" class="fas fa-sign-out"></i>
          <p role="button" @click="logout()">
            DÉCONNEXION
          </p>
        </li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<style>

.active-link {
  color: #fff;
}

nav {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  margin-top: -5px;
  width: 100%;
}

nav ul {
  background: #281e30;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  box-shadow:  -1px 1px #77aaff,
         -2px 2px #77aaff,
         -3px 3px #77aaff,
         -4px 4px #77aaff,
         -5px 5px #77aaff;
  padding: 0;
  margin: 0;
  height: 60px;
}

nav  li {
  color: #777;
  cursor: pointer;
  flex: 1;
  padding: 10px;
  padding-bottom: 20px;
  text-align: center;
}

nav ul li p {
  font-size: 12px;
  margin: 2px 0;
}

nav ul li:hover,
nav ul li p:hover,
nav ul {
  color: rgb(255, 255, 255);
}
</style>

<script>
import Swal from "sweetalert2";
import { uiConstants } from '~/utils/ui-constants';

export default {

  methods: {
    logout() {
      Swal.fire({
        title: 'Êtes vous sûr ?',
        text: "Voulez-vous vraiment fermer cette session",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Non",
        confirmButtonText: "Oui",
        ...uiConstants.swalAnimation
      }).then(async (result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.$router.push("/login")
        }
      });
    }
  }

}
</script>
