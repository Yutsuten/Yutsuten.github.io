class IndexTree {
  constructor () {
    this.root = {children: []}
  }

  addNode (path) {
    let currentNode, text, isLeaf, childNode, href
    currentNode = this.root
    path.split('/').forEach(function (subPath, index, pathArray) {
      text = subPath.charAt(0).toUpperCase() + subPath.slice(1).replace(/_/g, ' ')
      isLeaf = index === pathArray.length - 1
      if (isLeaf) {
        childNode = null
      } else {
        childNode = currentNode.children.find(node => node.text === text)
      }
      if (!childNode) {
        href = isLeaf ? `#${path.replace(/\//g, '-')}` : null
        childNode = {text: text, href: href, children: []}
        currentNode.children.push(childNode)
      }
      currentNode = childNode
    })
  }
}


new Vue({
  el: '#notes',
  delimiters: ['[[', ']]'],
  data: {
    search: '',
    activeNote: window.location.href.split('#')[1],
    notesIndexList: [],
    indexTree: [],
    menuShown: true
  },
  methods: {
    seeNote: function (click) {
      let targetHash = click.target.hash
      if (targetHash) {
        this.activeNote = targetHash.substr(1)
      }
      if (window.innerWidth < 768) {
        this.$root.$emit('bv::toggle::collapse', 'index')
      }
    },
    showMenu: function () {
      if (!this.menuShown) {
        this.$root.$emit('bv::toggle::collapse', 'index')
      }
    },
    keydown: function (e) {
      let ctrl = e.ctrlKey
      let backspace = e.keyCode === 8
      let slash = e.keyCode === 191
      let space = e.keyCode === 32
      let letter = e.keyCode >= 65 && e.keyCode <= 90
      if (!ctrl && (backspace || slash || space || letter)) {
        document.getElementById('search').focus()
      }
    },
    searchUpdated: function () {
      // Update URL with the new search text
      let url = new URL(window.location.href)
      let search = this.search.trim().replace(/\s+/g, ' ')
      if (search) {
        url.searchParams.set('search', search)
      } else {
        url.searchParams.delete('search')
      }
      window.history.replaceState({}, null, url.href)

      this.updateIndexTree()
    },
    collapseStateChanged: function (collapseId, isJustShown) {
      this.menuShown = isJustShown
    },
    updateIndexTree: function () {
      let filteredIndexList
      let search = this.search.trim().replace(/\s+/g, ' ')
      if (this.search) {
        let keywords = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(' ')
        let filter = keywords.map(keyword => `(?=.*${keyword})`).join('')
        let filterRegex = new RegExp(`^${filter}.*$`, 'i')
        filteredIndexList = this.notesIndexList.filter(index => filterRegex.test(index))
      } else {
        filteredIndexList = this.notesIndexList
      }

      let indexTree = new IndexTree()
      filteredIndexList.forEach(path => indexTree.addNode(path))
      this.indexTree = indexTree.root.children
    }
  },
  mounted: function () {
    let rawIndexDataElement = document.getElementById('raw-index-data')
    this.notesIndexList = JSON.parse(rawIndexDataElement.textContent)
    rawIndexDataElement.remove()

    window.addEventListener('keydown', this.keydown)
    this.$root.$on('bv::collapse::state', this.collapseStateChanged)

    let search = new URL(window.location.href).searchParams.get('search')
    this.search = search ? search : ''

    this.updateIndexTree()
  }
})
