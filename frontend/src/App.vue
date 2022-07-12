<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
header{
  height: 40px;
  padding: 10px;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper nav{
  display: flex;
  justify-content: space-between;
}
.wrapper nav a{
  padding: 5px;
  margin: 0 20px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  color:gold
}
.wrapper nav a:active {
  color: var(--color-text);
  text-decoration: underline;
}

.wrapper nav a:hover {
  background-color: transparent;
  font-size: 21px;
  transition-duration: 0.2s;
}

</style>
