<script setup lang="ts">
import { PropType } from 'vue';
import { useAppData, type PuppyData } from '../stores/app-data';

const appData = useAppData();

const props = defineProps({
  pupData: {
    type: Object as PropType<PuppyData>,
    required: true,
  },
});

function removePupppy(pupData: PuppyData) {
  appData.removePuppy(pupData);
}
</script>
<template>
  <div class="card">
    <div class="profile-image">
      <img class="pup-pic" :src="props.pupData.photoUrl" />
    </div>
    <form class="profile-card">
      <ul class="card-info">
        <li class="puppy-card-info">
          <p class="puppy-info">Name</p>
          <input class="puppy-name" :value="props.pupData.name" />
        </li>
        <li class="puppy-card-info">
          <p class="puppy-info">Age</p>
          <input class="puppy-age" :value="props.pupData.age" />
        </li>
        <li class="puppy-card-info">
          <p class="puppy-info">Photo URL</p>
          <input class="puppy-pic" :value="props.pupData.photoUrl" />
        </li>
        <li class="puppy-card-info">
          <p class="puppy-info">Profile</p>
          <input class="puppy-profile" :value="props.pupData.profile" />
        </li>
      </ul>
      <div class="button-container">
        <a class="btn delete" @click="removePupppy(props.pupData)">Delete</a>
        <button class="btn update">Update</button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import '../styles/variables';
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: $gutter;
}

.main-content {
  display: flex;
  width: $max-content-width;
  margin-bottom: 2rem;
  padding: 2rem;
  background: $card-color;
  box-shadow: $brand-shadow;
}

.profile-card {
  width: 35rem;
  line-height: 0.5rem;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: $gutter * 2;
  padding-left: $gutter * 2;
}
</style>
