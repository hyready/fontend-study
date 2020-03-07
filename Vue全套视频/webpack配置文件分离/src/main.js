//使用commomjs规范
const { sum } = require('./js/math.js')
console.log(sum(10, 20))
    //ES6
import { age, name, height } from './js/info'
console.log(age, name, height)
    //依赖css文件
require('./css/normal.css')
require('./css/special.less')
document.writeln('<h2>你好<h2>')


//使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App,
    }

})