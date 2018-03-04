/**
  http://elemefe.github.io/mint-ui/#/cell
  https://github.com/ElemeFE/mint-ui/blob/master/packages/cell/src/cell.vue
  <cell title="标题文字"></cell>
    <cell title="标题文字" value="说明文字"></cell>
    <cell title="标题文字" icon="more" value="带 icon"></cell>
    <cell title="标题文字" icon="more">
      <span>icon 是图片</span>
      <img slot="icon" src="../assets/100x100.png" width="24" height="24">
    </cell>
    <cell title="标题文字" is-link value="带链接"></cell>
    <cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </cell>
    <cell title="标题文字">
      <mt-button size="small" type="primary" icon="back">按钮</mt-button>
    </cell>

    <cell title="标题" label="描述信息" is-link></cell>

    <cell title="原生跳转" label="跳转到 https://mint-ui.github.io" is-link to="https://mint-ui.github.io"></cell>
    <cell title="路由跳转" label="跳转到 /#/toast" is-link :to="{ name: 'Toast' }"></cell>
 */

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    Link: {type: Boolean, value: true}, 
    label: {type: String, value: ''}, 
    to: {type: String, value: ''},
    icon: {type: String, value: ''},
    title: {type: String, value: ''},
    value: {type: String, value: ''}
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  },
  ready: function () {
    console.log(this)
  }
})
