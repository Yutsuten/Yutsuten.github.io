new Vue({
  el: '#app',
  data: {
    search: '',
    activeNote: window.location.href.split('#')[1]
  },
  methods: {
    seeNote: function (note) {
      this.activeNote = note
    }
  },
  updated: function () {
    var ulElem

    for (var refName in this.$refs) {
      ulElem = this.$refs[refName]
      if (ulElem.getElementsByTagName('a').length === 0) {
        ulElem.style.display = 'none'
        ulElem.previousElementSibling.style.display = 'none'
      } else {
        ulElem.style.display = ''
        ulElem.previousElementSibling.style.display = ''
      }
    }
  }
})
