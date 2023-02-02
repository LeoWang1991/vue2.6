function MyVue(options) {
  this._init(options)
}

let uid = 0
function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this
    vm._uid = uid++
    vm.isVue = true
    vm._self = vm
    vm._data = options.data || {}
  }
}

initMixin(MyVue)

const vm = new MyVue({
  data: {
    name: 'xiaofei',
    age: 20
  }
})


console.log(vm);