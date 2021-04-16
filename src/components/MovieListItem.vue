<template>
  <div class="movie-list-item">
    <slot name="poster"></slot>
    <div class="movie-info">
      <div><slot name="movie-name"></slot></div>
      <div><slot name="movie-score"></slot></div>
      <div><slot name="movie-star"></slot></div>
      <div><slot name="movie-info"></slot></div>
    </div>
    <div class="buy-ticket">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movielistitem',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.movie-list-item{
  display flex
  height 1.14rem
  padding-top .1rem
  padding-left .1rem
  .buy-ticket{
    flex 1
    position relative
    button{
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      margin auto
      width .55rem
      height .25rem
      color #fff
      border none
      border-radius .05rem
    }
  }
  .movie-info{
    margin-left .1rem
    width 2rem
    @media screen and (max-width:320px) {//适配iphone5 se
      width 1.5rem
    }
    display flex
    flex-direction column
    div{
      width 100%
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    }
    div:first-child{
      flex 1
      font-size .2rem
      font-weight 800
      color #333
      line-height .41rem
    }
  }
}
</style>
