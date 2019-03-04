<template>
  <div class="page-content">
    <h1 class="title">분당도서관 미러 사이트</h1>
    <p class="text">
      이 Application은 분당 도서관의 데이터베이스를 바탕으로 한 미러 사이트입니다.
      개인의 포트폴리오용으로 제작된 사이트이기 때문에 비인가된 접근을 금지합니다.
    </p>
    <a href="#" @click="launch()">시작하기</a>
  </div>
</template>
<script>
export default {
  props: {
    launch: Function,
  }
}
</script>
<style scoped>
.page-content {
  z-index: 1;
  width: 100%;
  /* max-width: 800px; */
  text-align: center;
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.page-content h1 {
  color: #ff7979;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 20px;
}
.page-content p {
  width: 600px;
  color: #fff;
  margin-bottom: 20px;
  margin: 0 auto;
}
.page-content a {
  display: inline-block;
  text-decoration: none;
  color: #ff7979;
  border: 2px solid #ff7979;
  text-transform: uppercase;
  margin: 20px 0px;
  padding: 10px 20px;
  transition: 0.4s linear;
}
.page-content a:hover {
  color: #fff;
  background: #ff7979;
}
</style>
