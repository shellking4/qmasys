<template>
  <div class="card-header" style="background: #281e30;" id="header">
    <h3 class="text-center text-light h4 mt-2" style="font-weight: bold;">{{ $route.path.includes('admin') ? 'QMASYS&nbsp;&nbsp;ADMIN&nbsp;&nbsp;' : 'QMASYS&nbsp;&nbsp;' }}>>&nbsp;&nbsp;{{ getHeaderTitle() }}</h3>
  </div>
</template>

<style scoped>

.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
}

.card-header img {
  object-fit: cover;
  position: fixed;
  top: 0;
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
  width: 100px;
}

.author-info small {
  color: #aaa;
  margin-top: 5px;
}

.animated-bg {
  background-image: linear-gradient(
    to right,
    #32383d 0%,
    #424652 10%,
    #2a2e33 20%,
    #131314 100%
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
  export default {
    name: "Header",
    methods: {
      getHeaderTitle() {
        let title = "";
        if (this.$route.path === "/")   {
          title = "TICKETS EN ATTENTE"
        } else if (this.$route.path === "/selected-tickets") {
          title = "TICKETS APPELÉS"
        } else if (this.$route.path === "/served-tickets") {
          title = "TICKETS TRAITÉS"
        } else if (this.$route.path === "/admin") {
          title = "DASHBOARD"
        } else if (this.$route.path === "/admin/agents-accounts") {
          title = "AGENTS ACCOUNTS"
        }
        return title
      }
    }
  }
</script>
