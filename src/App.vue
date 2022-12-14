<template>
  <Menu />
  <div class="container mt-3">
    <RouterView />
  </div>
</template>

<!-- <script>
// api Options
  import Menu from "./components/Menu.vue"
  import { RouterView } from "vue-router" ;
  export default {
    components : {
      "Menu" : Menu ,
      "RouterView" : RouterView
    }
  }
</script> -->
<script setup>
// api composition
import Menu from "./components/Menu.vue"
import { RouterView } from "vue-router" ;
</script>