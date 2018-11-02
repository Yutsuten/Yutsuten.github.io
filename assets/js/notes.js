import Vue from './Vue'


if (location.pathname.indexOf('notes') !== -1) {
  new Vue({
    el: '#app',
    data: {
      search: '',
      activeNote: window.location.href.split('#')[1]
    },
    methods: {
      seeNote: function (note) {
        this.activeNote = note
      },
      searchChange: function () {
      }
    },
  })
}
