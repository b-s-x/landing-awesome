<template>
  <div class="container">
    <div class="content" @mouseover="startAnimation">
      <h1>Testing this out</h1>
    </div>
    <div class="img"></div>
  </div>

  <div class="container2">
    <div class="content">
      <h1>Testing this out</h1>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
import gsap, { Elastic } from "gsap";
import { useAnimation } from "./hooks/useAnimation";

export default {
  name: "animation",
  setup() {
    const startAnimation = () => useAnimation('.container', 'h1', '.container2');

    return { startAnimation };
  },
};
</script>

<style lang="scss">
@import "./styles/common";

body {
  font-family: "Playfair Display", serif;
  height: 100vh;
}

.container,
.container2 {
  height: 100vh;
  position: absolute;
  clip-path: polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%);
  transition: clip-path 1s;
  width: 100%;

  .img {
    background: url("../src/assets/1.jpg");
    background-size: cover;
    height: 100vh;
  }

  .content {
    position: absolute;
    z-index: 1;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;

    h1 {
      font-size: 4rem;
      position: absolute;
    }
  }
}

.container2 {
  z-index: -1;

  .img {
    background: url("../src/assets/2.jpg");
    background-size: cover;
  }
}
</style>
