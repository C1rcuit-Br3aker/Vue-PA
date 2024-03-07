<script setup lang="ts"></script>
<template>
  <form class="form --active">
    <ul class="form-info">
      <p class="form-info-title">Add a new Puppy</p>
      <li class="puppy-form-info">
        <p>Puppy Name</p>
        <input type="text" class="new-puppy-name form-input" />
      </li>
      <li class="puppy-form-info">
        <p>Age</p>
        <input type="text" class="new-puppy-age form-input" />
      </li>
      <li class="puppy-form-info">
        <p>Profile URL</p>
        <input type="text" class="new-puppy-pic form-input" />
      </li>
      <li class="puppy-form-info">
        <p>Profile</p>
        <input type="text" class="new-puppy-info form-input" />
      </li>
      <button class="save">Save</button>
    </ul>
  </form>
</template>
<style lang="scss" scoped>
@import '../styles/variables';
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $brand-grey;
  color: $brand-white;
}

.form-info {
  width: $max-content-width;
  margin: 0;
  padding: 0;
}

.form-info-title {
  margin-top: 0;
  padding-top: 1rem;
  font-size: 1.5rem;
}

.form-input {
  color: $brand-white;
}

.save {
  margin: 1rem 0;
}

.--active {
  display: none;
}
</style>
