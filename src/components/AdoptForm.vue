<script setup lang="ts">
import { PropType, onMounted, ref } from 'vue';
import { useAppData, type PuppyData } from '../stores/app-data';
import { c } from 'vite/dist/node/types.d-AKzkD8vd';

const appData = useAppData();
const pupName = ref('');
const pupAge = ref('');
const pupPic = ref('');
const pupProfile = ref('');
const inputsValid = ref(false);

function onSave(event: SubmitEvent) {
  event.preventDefault();
  validateInputs();

  console.log(inputsValid.value);

  if (inputsValid.value) {
    savePuppy();
  }
}

function validateInputs() {
  inputsValid.value = true;
  if (!pupName.value || !pupAge.value || !pupPic.value || !pupProfile.value) {
    inputsValid.value = false;
    alert('Please fill out all fields');
    return;
  }

  const validAge = validateAge();
  const validImage = validateImage();

  if (!validAge || !validImage) {
    inputsValid.value = false;
  }
}

function validateAge(): boolean {
  if (isNaN(parseInt(pupAge.value))) {
    alert('Age must be a number');
    return false;
  }
  return true;
}

async function validateImage(): Promise<boolean> {
  let isValid = false;
  const image = new Image();
  image.src = pupPic.value;
  await new Promise(() => {
    image.onload = () => {
      if (image.width > 0) {
        isValid = true;
      }
    };

    image.onerror = () => {
      isValid = false;
      console.log('error');
      alert('Please enter a valid image URL');
    };
  });

  return isValid;
}

function savePuppy() {
  const newPupData: PuppyData = {
    name: pupName.value,
    age: parseInt(pupAge.value),
    photoUrl: pupPic.value,
    profile: pupProfile.value,
  };

  appData.addPuppy(newPupData);
  appData.active = false;
  clearForm();
}

function clearForm() {
  pupName.value = '';
  pupAge.value = '';
  pupPic.value = '';
  pupProfile.value = '';
}
</script>
<template>
  <form class="form" v-on:submit.prevent="onSave">
    <ul class="form-info">
      <p class="form-info-title">Add a new Puppy</p>
      <li class="puppy-form-info">
        <p>Puppy Name</p>
        <input
          v-model="pupName"
          type="text"
          class="new-puppy-name form-input"
        />
      </li>
      <li class="puppy-form-info">
        <p>Age</p>
        <input v-model="pupAge" type="text" class="new-puppy-age form-input" />
      </li>
      <li class="puppy-form-info">
        <p>Profile URL</p>
        <input v-model="pupPic" type="text" class="new-puppy-pic form-input" />
      </li>
      <li class="puppy-form-info">
        <p>Profile</p>
        <input
          v-model="pupProfile"
          type="text"
          class="new-puppy-info form-input"
        />
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
