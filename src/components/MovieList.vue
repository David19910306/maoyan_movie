<template>
  <div class="movie-list">
    <movie-list-slot>
      <movie-list-item v-for="movie in preSaleComputed" :key="movie.id">
        <template v-slot:poster><img :src="movie.img"></template>
        <template v-slot:movie-name><span>{{movie.nm}}</span></template>
        <template v-slot:movie-score><span>{{movie.sc === 0?'暂无评分': '观众评 '+ movie.sc}}</span></template>
        <template v-slot:movie-star><span>主演 {{movie.star}}</span></template>
        <template v-slot:movie-info><span>{{movie.showInfo}}</span></template>
        <template v-slot:button><button :style="{background: movie.preSale}">{{movie.saleType}}</button></template>
      </movie-list-item>
    </movie-list-slot>
  </div>
</template>

<script>
import MovieListSlot from './MovieListSlot'
import MovieListItem from './MovieListItem'
export default {
  name: 'Movielist',
  components: { MovieListSlot, MovieListItem },
  data () {
    return {
      preSaleComputed: []
    }
  },
  props: ['movies'],
  watch: {
    movies (newValue) {
      const today = new Date()
      if (newValue) {
        const preSaleComputed = newValue.map(movie => {
          const { rt } = movie
          const date = new Date(rt)
          return today.getTime() > date.getTime() ? { ...movie, saleType: '购票', preSale: '#cd4c42' } : { ...movie, saleType: '预售', preSale: '#3c9fe6' }
        })
        this.preSaleComputed = preSaleComputed
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.movie-list{
  @media screen and (min-width:414px) {//适配6，7，8 plus
    height 4.1rem
  }
  @media screen and (max-width:375px) {//适配iphonex
    height 4.9rem
  }
  @media screen and (max-height:667px) {//适配iphone6，7，8
    height 3.42rem
  }
  @media screen and (max-width:320px) {//适配iphone5 se
    height 2.44rem
  }
  // overflow-y auto
}
</style>
