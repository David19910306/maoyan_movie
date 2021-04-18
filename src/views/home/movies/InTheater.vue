<template>
  <div>
    <content ref="movieContent" class="movie-content" @touchend="handleTouchEnd">
      <top-rated-movie></top-rated-movie>
      <movie-list :movies="movieList"></movie-list>
    </content>
  </div>
</template>

<script>
import MovieList from '../../../components/MovieList'
import TopRatedMovie from '../../../components/TopRatedMovie'
import request from '../../../js/utils/request'
export default {
  name: 'InTheater',
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

  }
}
</script>

<style scoped>

</style>
