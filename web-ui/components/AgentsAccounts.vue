<template>
  <div class="container" style="padding-bottom: 120px">
    <div class="row" style="margin-top: 50px">
      <div class="col-md-12">
        <table class="table">
          <thead style="background-color: #281e30; color: white">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Caisse</th>
              <th scope="col">Nom d'utilisateur</th>
              <th scope="col" style="text-align: center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id" :user="user">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ user.office_name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <div class="row">
                  <div class="col-md-5 offset-md-3">
                    <button @click="deleteAgent(user)" class="btn btn-danger">
                      <span class="fas fa-trash"></span>&nbsp; Supprimer
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-12 mt-4">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button
              type="button"
              @click="onRegisterBtnClick()"
              class="btn btn-success"
            >
              Enregistrer un agent de réception
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { uiConstants } from "~/utils/ui-constants";
import { userService } from '~/services/user.service';

export default {
  props: {
    users: [],
  },

  methods: {
    onRegisterBtnClick: async function () {
      this.$router.push({ path: "/admin/register-agent" });
    },
    deleteAgent: async function (agent) {
      Swal.fire({
        title: "Êtes vous sûr ?",
        text: "Voulez-vous vraiment procéder à la suppression de cette donnée",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Non",
        confirmButtonText: "Oui",
        ...uiConstants.swalAnimation,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await userService.delete(agent)
            this.users.splice(this.users.indexOf(agent), 1)
            Swal.fire({
              title: "Suppression effectuée",
              icon: "success",
              toast: true,
              timer: 2500,
              position: "bottom-right",
              ...uiConstants.swalAnimation
            })
          } catch (error) {
            Swal.fire({
              title: "Erreur pendant l'opération",
              icon: "error",
              toast: true,
              timer: 2500,
              position: "bottom-right",
              ...uiConstants.swalAnimation
            })
            console.log(error)
          }
        }
      });
    },
  },
};
</script>
