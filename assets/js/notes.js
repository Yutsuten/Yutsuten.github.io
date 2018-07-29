import Vue from 'vue'


Vue.options.delimiters = ['[[', ']]']

if (location.pathname.indexOf('notes') !== -1) {
  new Vue({
    el: '#app',
    data: {
      activeNote: window.location.href.split('#')[1]
    },
    methods: {
      seeNote: function (note) {
        this.activeNote = note
      }
    }
  })
}
