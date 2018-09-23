import Vue from './Vue'


if (location.pathname.indexOf('notes') !== -1) {
  new Vue({
    el: '#app',
    data: {
      activeNote: window.location.href.split('#')[1],
      firstLevel: null,
      secondLevel: null,
      thirdLevel: null
    },
    methods: {
      seeNote: function (note) {
        this.activeNote = note
      },
      fetchInitialData: function () {
        this.firstLevel = this.$refs.firstLevel.value
        this.secondLevel = this.$refs.secondLevel.value
        this.thirdLevel = this.$refs.thirdLevel.value
      }
    },
    mounted: function () {
      this.fetchInitialData()
    }
  })
}
