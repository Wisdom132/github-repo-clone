<template>
  <span class="dropdown">
    <button>Language: <span class="selected">All</span></button>
    <label>
      <input type="checkbox" />
      <ul>
        <div v-for="(item, i) in languages" :key="i">
          <li>{{ item }}</li>
          <li class="divider"></li>
        </div>
      </ul>
    </label>
  </span>
</template>

<script>
export default {
  data() {
    return {
      languages: ['Vue', 'Typescript', 'SCSS', 'Javascript', 'Java', 'CSS'],
    }
  },
}
</script>
<style scoped>
.selected {
  padding: 0 5px;
}
.dropdown {
  margin-right: 14px;
  position: relative;
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.dropdown:hover {
  cursor: pointer;
}
.dropdown > a,
.dropdown > button {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 6px 20px 6px 10px;
  border-radius: 4px;
  display: inline-block;
  color: black;
  text-decoration: none;
}

.dropdown > a:before,
.dropdown > button:before {
  position: absolute;
  right: 7px;
  top: 12px;
  content: ' ';
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.dropdown input[type='checkbox'] {
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 0;
}

.dropdown input[type='checkbox']:checked {
  position: fixed;
  z-index: +0;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.dropdown ul {
  position: absolute;
  top: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  left: 0px;
  list-style: none;
  padding: 4px 0px;
  display: none;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.175);
  z-index: 99999;
  width: 250px;
  margin-top: 25px;
}

.dropdown input[type='checkbox']:checked + ul {
  display: block;
}

.dropdown ul li {
  display: block;
  padding: 6px 20px;
  /* background-color: #e5e5e5; */
  white-space: nowrap;
  min-width: 100px;
  text-transform: capitalize;
}

.dropdown ul li:hover {
  background-color: #edeff2;
  cursor: pointer;
}

.dropdown ul li a {
  text-decoration: none;
  display: block;
  color: black;
}

.dropdown .divider {
  height: 1px;
  margin: 2px 0;
  overflow: hidden;
  background-color: #e5e5e5;
  font-size: 1px;
  padding: 0;
}
</style>