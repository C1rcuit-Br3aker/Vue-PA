<script setup lang="ts"></script>
<template>
  <div class="top-nav">
    <div class="top-nav-content">
      <h1 class="form-title">Puppies</h1>
      <button class="dropdown-button fa fa-plus-circle"></button>
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
