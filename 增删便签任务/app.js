//存取localStorage
var store = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

}
var list = store.fetch('miaov');
console.log(list)
var filter = {
        all(list) {
            return list;

        },
        unfinish(list) {
            return list.filter(item => !item.checked)
        },
        finish(list) {
            return list.filter(item => item.checked)
        }
    }
    // let list = [ //{
    //     //     title: "吃饭打豆豆",
    //     //     checked: true,
    //     // },
    //     // {
    //     //     title: "吃饭打豆豆",
    //     //     checked: false,

//     // }
// ];

let vm = new Vue({
    el: '.main',
    data: {
        list,
        toDo: '',
        edtorTodos: '', //记录正在编辑的数据
        beforeTotle: '', //记录编辑前的内容
        visibility: "all", //同过这个属性值的变化对数据进行改变
    },
    watch: { //监控list这个属性，当属性对应的值发生变化就会执行函数
        // list: function() {
        //     store.save('miaov', this.list)
        // }浅监控
        list: {
            handler: function() {
                store.save('miaov', this.list)
            }, //深监控
            deep: true,
        }
    },
    computed: {
        noCheckeLength() {
            return this.list.filter(item => !item.checked).length
        },
        filteredList() {

            debugger
            return filter[this.visibility] ? filter[this.visibility](this.list) : this.list
        },
    },
    methods: {
        addToDo() { //添加任务
            //向list中添加一项任务{title:}
            this.list.push({ title: this.toDo, checked: false });
            this.toDo = '';
        },
        deleteDo(todo) { //删除任务

            let index = this.list.indexOf(todo);
            this.list.splice(index, 1);
        },
        edtorTodo(todo) { //编辑时候
            this.edtorTodos = todo;
            this.beforeTotle = todo.title
        },
        edtorTodoed(todo) { //编辑任务成功，编辑记录，方便在取消的时候给之前的数据

            this.edtorTodos = '';

        },
        cancelTodo(todo) { //取消编辑任务
            todo.title = this.beforeTotle;
            this.beforeTotle = '';
            this.edtorTodos = '';
        }
    },
    directives: {
        "foucs": {
            update(el, binding) {
                if (binding.value) {
                    el.focus()
                }
            }
        }
    }
})
window.addEventListener('hashchange', watchHashChang);

function watchHashChang() {

    let hash = window.location.hash.slice(1);
    vm.visibility = hash;
}
watchHashChang();