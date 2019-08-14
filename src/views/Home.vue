<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'test',
      value: '22'
    }
  },
  mounted() {
    //this.http.post('channel/common/getMarketInfoLists',{a:1}).then(res => {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
