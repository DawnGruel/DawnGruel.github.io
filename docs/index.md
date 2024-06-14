---
layout: home
---
<div class="home">
  <div class="avatar"><img src="./favicon.ico" alt="avatar" /></div>
  <div class="tagLine">DawnGruel</div>
  <div class="imgBox">
    <img src="./src/img/indexBg.webp" alt="home" />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 200px;
  overflow: hidden;
  margin-bottom:10px;
  border: 5px solid #fff;
}
.tagLine {
  font-family: 'Luckiest Guy';
  line-height:normal;
  /* margin:0 auto; */
  margin-left:10px;
  max-width:900px;
  text-align: center;
  /* height:200px; */
  font-size:9vh;
  font-weight:900;
  letter-spacing: -5px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}
.imgBox {
  overflow: hidden;
  width: 100%;
  object-fit: contain; /* 保持图片比例，不拉伸 */
  /* background: url("./src/img/indexBg.webp") center center / cover no-repeat rgb(34, 34, 34);; */
}
</style>
