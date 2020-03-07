<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {
  name:'App',
   data() {
        return {
            message: 'hello webpack',
            name: 'huyann'
        }
    },
    methods: {
        btnClick() {}
    }
}
</script>
<style scoped>
.title{
  color:yellow;
}
</style>