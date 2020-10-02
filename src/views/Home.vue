<template>
  <div class="home">
    <Navbar v-bind:style="aboutMe"/>
    <p> {{tils[0].til}} </p>
    <p>{{customers[0].id}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar  from "@/components/NavBar.vue";
import {mapState} from 'vuex';

export default {  
  name: "Home",
  components: {
    Navbar,
  },
  data: function(){
    return {
      aboutMe: {
        backgroundColor: "#000aaa"
      } 
    }
  },
  computed: {
    ...mapState(['tils', 'customers'])
  }
};
</script>

<style scoped>
</style>