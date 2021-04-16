<template>
  <div class="movie-list-slot">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Movielistslot',
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
.movie-list-slot{
  slot {
    display flex
    flex-direction column
  }
}
</style>
