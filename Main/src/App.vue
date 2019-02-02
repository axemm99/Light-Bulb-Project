<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*---------------------------------------------------------------------------------------*/
/* CLASSES */

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: black;
}

.container-fluid {
  background-color: black;
  margin: 0px;
  min-height: 100vh;
}

.subrow {
  margin: 0px;
}

.middle {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0px;
}

.middle h2 {
  margin-top: 20px;
  /*color: white;*/
}

.btn {
  color: white;
  text-align: center;
  border: none;
  background-color: #ffd150;
  margin-top: 20px;
}

.btn :active {
  background-color: #fdd25ab9;
}

.form {
  width: 100%;
  text-align: left;
}

.form-control {
  display: block;
  background-color: white;
  border: none;
}

.grey {
  background-color: rgb(192, 192, 192);
  height: 5px;
}

.yellow {
  background-color: #ffd150;
}


.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.pink {
  background-color: rgb(247, 136, 154);
}
.orange {
  background-color: orange;
}
</style>
