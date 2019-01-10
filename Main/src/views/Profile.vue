<template>
    <div id="home">
        <Navbar/>

        <div class="container-fluid pl-0">
            <Sidebar/>
        </div>

        <!-- FOOTER -->
        <Foot/>
    </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Foot,
    Sidebar
  }
};
</script>
