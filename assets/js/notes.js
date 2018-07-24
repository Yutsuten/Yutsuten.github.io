if (location.pathname.indexOf('notes') !== -1) {
  global.app = new global.Vue({
    el: '#app',
    data: {
      activeNote: window.location.href.split('#')[1]
    },
    methods: {
      seeNote: function (note) {
        this.activeNote = note;
      }
    }
  });
}
