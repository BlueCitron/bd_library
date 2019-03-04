<template>
  <div class="search-page">
    <div class="search-page-header">
      <h1>분당도서관 미러 사이트</h1>
      <input type="text" placeholder="찾고 싶은 책을 입력해보세요." v-model="keyword" @keyup.enter="search()"/>
    </div>

    <div class="search-page-result">

      <div class="search-item" v-for="book in itemWithPaging">
        <img :src="book.thumbnail" height="110px"/>
        <div class="info">
          <div class="title">
            <h3>{{ book.title }}</h3>
          </div>

          <div class="author">
            <span>저자: {{ book.author.name }}</span> |
            <span>출판사: {{ book.publisher.name }}</span> |
            <span>발행년도: {{ book.publication }}</span>
          </div>

          <div class="data">
            <span>등록번호: {{ book.regNumber }}</span> |
            <span>ISBN: {{ book.isbn }}</span> |
            <span>청구기호: {{ book.callNumber }}</span>
          </div>

          <div class="site">
            <span>도서관: {{ book.library.name }}</span> |
            <span>자료실: {{ book.reference.name }}</span> |
            <span>부록: {{ book.appendix }}</span>
          </div>
        </div>
      </div>


      <div class="pagination" v-if="!($store.state.list.length <= 10)">
        <input type="button" value="이전페이지" @click="$store.dispatch('PREV_PAGE')"/>
        <input type="button" value="다음페이지" @click="$store.dispatch('NEXT_PAGE')"/>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    items: Array,
  },
  data () {
    return {
      keyword: '',
    }
  },
  computed: {
    itemWithPaging () {
      const { list, page, perPage } = this.$store.state
      return list.slice(perPage * (page - 1), perPage * page)
    }
  },
  methods: {
    async search () {
      if (process.client) {
        try {
          await this.$store.dispatch('SEARCH', this.keyword)
          this.keyword = ''
        } catch (error) { console.log('Error from Search', error) }
      }
    },
    prevPage () {
      if (this.page > 1) this.page--
    },
    nextPage () {
      if (this.page < Math.ceil(this.list.length / this.perPage)) this.page++
    },
  },
}
</script>
<style scoped>
.search-page {
  z-index: 1;
  position: relative;
}
.search-page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: url('/library.jpg') no-repeat;
  background-size: cover;
}
.search-page h1 {
  width: 100%;
  color: #ff7979;
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  padding-top: 150px;
}
.search-page input[type="text"] {
  width: 800px;
  height: 40px;
  margin: 30px 0;
  padding: 8px 20px;
}
.search-page-result {
  min-height: 700px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
  background: white;
  padding-top: 30px;
}
.search-item {
  width: 800px;
  margin: 10px 0;
  padding: 10px 30px;
  display: flex;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.info {
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.7);
}
.info div {
  margin-bottom: 10px;
  font-size: 14px;
}
.info div span {
  padding: 0 6px;
}
.pagination {
  padding: 40px 0px;
}
.pagination input[type="button"] {
  background: none;
  border: 2px solid #ff7979;
  color: #ff7979;
  font-size: 20px;
  margin: 0 20px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
