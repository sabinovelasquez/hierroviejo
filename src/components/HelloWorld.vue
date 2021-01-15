<template lang="pug">
  section
    h1(v-if='info') {{info.title}}
    .container
      button.btn.btn-primary(type="button") more
</template>

<script>
import { db } from '@/firebase'
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: true,
      info: null
    }
  },
  mounted () {
    this.$bind('info', db.collection('info').doc('es'))
      .then(() => {
        this.loading = false
      })
      .catch((error) => {
        this.error = error
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
