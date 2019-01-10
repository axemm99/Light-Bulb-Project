<template>
  <div class="home">
    <Navbar/>
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <Sidebar/>
        </div>
        <div class="col-md-8">
          <Catalog/>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Foot from "@/components/Foot.vue";
import Catalog from "@/components/Catalog.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Foot,
    Catalog
  }
};
</script>

<style>
.container-fluid {
  background-color: black;
}
</style>
