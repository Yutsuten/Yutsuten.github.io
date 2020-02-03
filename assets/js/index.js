new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    search: '',
    activeNote: window.location.href.split('#')[1],
    menuShown: true
  },
  methods: {
    seeNote: function (note) {
      this.activeNote = note
      if (window.innerWidth < 768) {
        this.$root.$emit('bv::toggle::collapse', 'index')
      }
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
    var self = this
    window.addEventListener('keydown', function (e) {
      var ctrl = e.ctrlKey
      var backspace = e.keyCode === 8
      var slash = e.keyCode === 191
      var letter = e.keyCode >= 65 && e.keyCode <= 90
      if (!ctrl && (backspace || slash || letter)) {
        document.getElementById('search').focus()
      }
    })
    document.getElementById('search').addEventListener('focus', function () {
      if (!self.menuShown) {
        self.$root.$emit('bv::toggle::collapse', 'index')
      }
    })
    self.$root.$on('bv::collapse::state', function (collapseId, isJustShown) {
      self.menuShown = isJustShown
    })
  }
})
