<template>
  <div class="container">
    <div class="row" style="padding-bottom: 40px; margin-top: 20px">
      <Ticket
        :user="user"
        @ticketCall="reactToClick(ticket)"
        v-for="ticket in tickets_list()"
        :key="ticket.id"
        :ticket="ticket"
      />
    </div>
    <div
      v-if="tickets.length !== 0"
      class="pagination-container"
      style="padding-bottom: 70px; margin-top: 10px"
    >
      <ul class="pagination">
        <li class="pageItem">
          <a
            class="page-link"
            @click="changePage(selectedPage - 1)"
            aria-label="Previous"
          >
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          v-for="page in pageNumbers()"
          :key="page"
          :class="page === selectedPage ? 'active' : 'page-item'"
        >
          <a class="page-link" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="pageItem">
          <a
            class="page-link"
            @click="changePage(selectedPage + 1)"
            aria-label="Next"
          >
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.pagination {
  display: flex;
  padding: 0;
  border-radius: 6px;
  margin: 20px auto 0;
}

.pagination > li > a,
.pagination > li > span {
  position: relative;
  /* float: left; */
  padding: 0;
  margin: 5px;
  line-height: 1.42857143;
  color: #5a6f7c;
  text-decoration: none;
  background-color: #fff;
  border-radius: 50px;
  width: 37px;
  height: 37px;
  text-align: center;
  line-height: 37px;
  border: 1px solid #eaeff5;
  -webkit-box-shadow: 0 2px 10px 0 #d8dde6;
  box-shadow: 0 2px 10px 0 #d8dde6;
}

.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus,
.pagination > li > a:hover,
.pagination > li > a:focus {
  z-index: 2;
  color: #fff;
  cursor: pointer;
  background-color: #281e30;
  border-color: #281e30;
}

.pagination li:first-child a {
  background: #281e30;
  border: 1px solid #281e30;
  border-radius: 50px;
  color: #ffffff;
}
.pagination li:last-child a {
  background: #281e30;
  border: 1px solid #281e30;
  border-radius: 60px;
  color: #ffffff;
}

.pagination-container {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.pageItem:first-child .page-link {
  border-bottom-left-radius: 0.25rem !important;
}

.pageItem:last-child .page-link {
  border-bottom-right-radius: 0.25rem !important;
}
</style>

<script>
export default {
  props: {
    tickets: [],
    user: Object,
  },

  data() {
    return {
      selectedPage: 1,
    };
  },

  methods: {
    pageNumbers() {
      return Array(Math.ceil(this.tickets.length / 8))
        .fill(0)
        .map((x, i) => i + 1);
    },

    changePage(newPage) {
      if (this.pageNumbers().includes(newPage)) {
        this.selectedPage = newPage;
      }
    },

    reactToClick(ticket) {
      this.tickets.splice(this.tickets.indexOf(ticket), 1);
    },

    tickets_list() {
      let pageIndex = (this.selectedPage - 1) * 8;
      return this.tickets ? this.tickets.slice(pageIndex, pageIndex + 8) : [];
    },
  },
};
</script>
