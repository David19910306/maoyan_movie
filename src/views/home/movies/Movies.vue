<template>
  <main>
    <nav class="movie-nav">
      <ul>
        <li>
          <span>北京</span>
          <b class="iconfont icon-xiala"></b>
        </li>
        <li>
          <span class="active">热映</span>
          <span>影院</span>
          <span>待映</span>
          <span>经典电影</span>
        </li>
        <li>
          <b class="iconfont icon-search"></b>
        </li>
      </ul>
    </nav>
    <content ref="movieContent" class="movie-content" @touchend="handleTouchEnd">
      <top-rated-movie></top-rated-movie>
      <movie-list :movies="movieList"></movie-list>
    </content>
  </main>
</template>

<script>
import MovieList from '../../../components/MovieList'
import TopRatedMovie from '../../../components/TopRatedMovie'
import request from '../../../js/utils/request'
export default {
  name: 'Intheaters',
  components: {
    MovieList, TopRatedMovie
  },
  data () {
    return {
      movieList: [],
      movieIds: [],
      pullUpState: 0, // 1:上拉加载更多, 2:加载中……, 3:我是有底线的
      isLoading: false, // 是否正在加载
      loadingCount: 0// 上拉的次数
    }
  },
  mounted () {
    this.getMovieList()
  },
  methods: {
    async getMovieList () {
      const result = await request('api/ajax/movieOnInfoList', {
        token: '',
        optimus_uuid: 'AA3462509DC511EB857D2B97AE64CDE00AB9A20E27BD43219AA9B1A2A693B052',
        optimus_risk_level: 71,
        optimus_code: 10
      })
      const { movieList, movieIds } = result.data
      this.movieIds = movieIds
      this.movieList = movieList.map(movie => {
        movie.img = movie.img.replace('w.h/', '')
        return movie
      })
    },
    /**
     * 触摸结束，手指离开屏幕时
     * @param {object} e Touch 对象包含的属性
     */
    handleTouchEnd (e) {
      this.scrollToTheEnd()
    },
    /**
     * 判断滚动条是否到底
     */
    scrollToTheEnd () {
      this.isLoading = false
      const innerHeight = this.$refs.movieContent.scrollHeight
      // console.log(this.$refs) // 535
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop = this.$refs.movieContent.scrollTop
      // console.log(scrollTop) // 0
      // 变量scrollHeight是滚动条的总高度
      const scrollHeight = document.documentElement.clientHeight || document.body.scrollHeight
      // console.log(scrollHeight) // 667
      // 滚动条到底部的条件
      if (scrollTop + scrollHeight >= innerHeight) {
        if (this.pullUpState !== 3 && !this.isLoading) {
          this.infiniteLoad()
          // console.log('加载数据完成')
        }
        // console.log('距顶部' + scrollTop + '滚动条总高度' + scrollHeight + '内容高度' + innerHeight)
      }
    },
    /**
     * 上拉加载数据
     */
    async infiniteLoad () {
      this.loadingCount++
      // console.log(this.movieIds.slice(12, this.movieIds.length + 1))
      let movieIds = this.movieIds.slice(12, this.movieIds.length + 1)
      // console.log(movieIds.length - this.loadingCount * 10)
      if (movieIds.length - this.loadingCount * 10 < 0) {
        movieIds = movieIds.slice((this.loadingCount - 1) * 10, this.loadingCount.length)
      } else {
        movieIds = movieIds.slice((this.loadingCount - 1) * 10, this.loadingCount * 10)
      }

      // console.log(movieIds)

      const result = await request('api/ajax/moreComingList', {
        movieIds: movieIds.toString(),
        token: '',
        optimus_uuid: '05CBA5709C4911EBAC6F31842370702AA29A62033E1B44B3BE317EB89E9BF200',
        optimus_risk_level: 71,
        optimus_code: 10
      })

      const moreList = result.data.coming.map(movie => {
        movie.img = movie.img.replace('w.h/', '')
        return movie
      })
      this.movieList.push(...moreList)
    }
  }
}
</script>

<style lang="stylus" scoped>
  main
    flex 1
    display flex
    flex-direction column
    .movie-nav > ul
      border-bottom 1px solid #ccc
      display flex
      height .44rem
      li:first-child
        flex 1.1
        display flex
        justify-content center
        align-items center
        color: #555
      li:nth-child(2)
        flex 3.1
        display flex
        justify-content center
        span
          display inline-block
          @media screen and (max-width:320px) {
            font-size .1rem
          }
          font-size .15rem
          height .44rem
          text-align center
          padding 0 .1rem
          line-height .44rem
          color #666
          font-weight bold
          &.active
            color #cd4c42
            border-bottom .02rem solid #cd4c42
      li:last-child
        width .44rem
        border-left .01rem solid #ccc
        font-size .2rem
        font-weight normal
        text-align center
        line-height .44rem
        color #cd4c42
    .movie-content
      flex 1
      display flex
      flex-direction column
      overflow-y auto
</style>
