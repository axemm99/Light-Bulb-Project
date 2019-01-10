<template>
    <div id="newQuestion">
        <Navbar/>

        <div class="container-fluid pl-0">
            <Sidebar/>
            <AddQuestion/>
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
import AddQuestion from "@/components/AddQuestion.vue";

export default {
  components: {
    Navbar,
    Foot,
    Sidebar,
    AddQuestion
  }
};
</script>
