<template>
  <AgentCreateForm />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "AgentRegisterPage",
    layout: "default",

    middleware: [
      'authenticated',
      'onlyadmin'
    ],
});
</script>
