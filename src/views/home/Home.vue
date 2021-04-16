<template>
  <div>
    <header>猫眼电影</header>
    <movies></movies>
    <nav class="tabbar">
      <ul>
        <li class="active">
          <b class="iconfont icon-dianying"></b>
          <span>电影/影院</span>
        </li>
        <li>
          <b class="iconfont icon-shipin"></b>
          <span>视频</span>
        </li>
        <li>
          <b class="iconfont icon-xiaoshipinyingshi48"></b>
          <span>小视频</span>
        </li>
        <li>
          <b class="iconfont icon-yanchu"></b>
          <span>演出</span>
        </li>
        <li>
          <b class="iconfont icon-wode"></b>
          <span>我的</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Movies from './movies/Movies.vue'
export default {
  components: { Movies }
}
</script>

<style lang="stylus" scoped>
div
  display flex
  flex-direction column
  height 100%
  header
    height .44rem
    line-height .44rem
    text-align center
    font-size .16rem
    font-weight 900
    color #fff
    background #cd4c42

  .tabbar
    height .44rem
    border-top 1px solid #ccc
    ul
      display flex
      li
        flex 1
        justify-content center
        align-items center
        display flex
        flex-direction column
        padding-top .05rem
        color #888
        &.active
          color #cd4c42
        b
          font-size .2rem
          font-weight normal
          line-height .2rem
        span
          font-size .12rem
          transform scale(0.9)
</style>
