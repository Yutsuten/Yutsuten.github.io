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
    const self = this
    window.addEventListener('keydown', function(e) {
      if (document.activeElement.id !== 'search') {
        document.getElementById('search').focus()
      }
    })
  }
})
