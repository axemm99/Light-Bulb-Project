<template>
  <nav id="sidebar">
    <ul class="list-unstyled components">
      <li>
        <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">Home</router-link>
      </li>
      <li>
        <router-link :to="{}" :class="{ 'nav-link': true }">Disciplinas</router-link>
      </li>
    </ul>
  </nav>
</template>


<style>
#sidebar {
  height: 700px;
  overflow: hidden;
  padding-right: 20px;
  border-right: 2px solid #ffd150;
}

#sidebar ul {
  padding-top: 50px;
}

#sidebar li {
  border-bottom: 0.5px solid #ffd050ad;
}

#sidebar a {
  text-align: left;
  text-decoration: none;
  color: white;
}
</style>
