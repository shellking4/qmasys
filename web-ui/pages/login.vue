<template>
  <LoginForm />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginPage",
  layout: "default",
  middleware: "guest"
});
</script>
