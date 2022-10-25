<template>
  <AgentsAccounts :users="users" />
</template>

<script>
import { userService } from '~/services/user.service';
export default {
  name: "AdminLandingPage",
  layout: "admin-dashboard",

  middleware: [
    'authenticated',
    'onlyadmin'
  ],

  data () {
    return {
      users: []
    }
  },

  async asyncData() {
    let users = []
    try {
      users = (await userService.getAll()).data.filter(
        user => !(user.roles.includes("ADMIN"))
      )
    } catch (e) {
      console.log(e)
    }
    return { users }
  },
};
</script>
