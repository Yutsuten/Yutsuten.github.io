new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
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
  },
  mounted: function () {
    window.addEventListener('keydown', function(e) {
      var ctrl = e.ctrlKey
      var backspace = e.keyCode === 8
      var slash = e.keyCode === 191
      var letter = e.keyCode >= 65 && e.keyCode <= 90
      if (!ctrl && (backspace || slash || letter)) {
        document.getElementById('search').focus()
      }
    })
  }
})
