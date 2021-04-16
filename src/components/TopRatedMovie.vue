<template>
  <div class="top-movie" ref="topRated"></div>
</template>

<script>
import request from '../js/utils/request'
export default {
  name: 'Topratedmovie',
  props: ['topmovie'],
  data () {
    return {

    }
  },
  mounted () {
    this.getTopRatedMovie()
  },
  methods: {
    async getTopRatedMovie () {
      const result = await request('api/ajax/topRatedMovies', {
        token: '',
        optimus_uuid: '05CBA5709C4911EBAC6F31842370702AA29A62033E1B44B3BE317EB89E9BF200',
        optimus_risk_level: 71,
        optimus_code: 10
      })
      this.$refs.topRated.innerHTML = result.data
      // console.log(this.$refs.topRated)
    }
  }
}
</script>

<style lang="stylus">
.top-movie{
  height 1.9rem
  .top-rated{
    height 100%
    padding .12rem 0 .12rem .15rem
    background #fff
    margin-bottom .1rem
    .title{
      margin: 0;
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
    }
    .top-rated-list{
      overflow: scroll;
      white-space: nowrap;
      .top-rated-item{
        display: inline-block;
        width: .85rem;
        overflow: hidden;
        margin-right: .1rem;
        .poster{
          width: .85rem;
          height: 1.15rem
          position: relative;
          margin-bottom: .06rem
          img {
            height 100%
            width 100%
          }
          .wish-bg{
            display: inline-block;
            width: 100%;
            height: .35rem
            position: absolute;
            bottom: 0;
            background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000);
            background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
          }
          .score, .wish{
            position: absolute;
            left: .04rem;
            bottom: .02rem;
            color: #faaf00;
            font-size: .11rem;
            font-weight: 600;
          }
        }
        .name{
          margin: 0;
          font-size: .13rem;
          color: #222;
          margin-bottom: .03rem;
        }
        .line-ellipsis{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
