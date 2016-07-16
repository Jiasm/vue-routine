var style = require('./style.css');
console.log(style.pane);
module.exports = {
  template: require('./template.html'),
  replace: true,
  props: ['side', 'name'],
  data () {
    return {
      style
    }
  }
}
