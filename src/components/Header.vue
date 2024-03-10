<script setup lang="ts">
import { useAppData } from '../stores/app-data';

const appData = useAppData();

function dropDownSelected() {
  appData.active = !appData.active;
}
</script>
<template>
  <div class="top-nav">
    <div class="top-nav-content">
      <h1 class="form-title">Puppies</h1>
      <button
        class="dropdown-button fa fa-plus-circle"
        @click="dropDownSelected"
      ></button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../styles/variables';
.top-nav {
  background: $brand-orange;
}

.top-nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $max-content-width;
  margin: auto;
  color: $brand-white;
}

.form-title {
  flex-grow: 1;
  margin: 0.5rem 0;
  padding-left: 0.5rem;
  font-weight: 500;
}

.dropdown-button {
  height: 1.5rem;
}
</style>
