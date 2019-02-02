<template>
  <div class="">
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Sidebar/>
        </b-col>
        <b-col sm="8">
          <Catalog/>
        </b-col>
        <b-col sm="2">
          <SidebarRight/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Catalog from "@/components/Catalog.vue";
import SidebarRight from "@/components/SidebarRight.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Catalog,
    SidebarRight
  }
};
</script>

<style>
</style>
