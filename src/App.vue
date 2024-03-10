<script setup lang="ts">
import { ref } from 'vue';
import { useAppData, type PuppyData } from './stores/app-data';
import Header from './components/Header.vue';
import AdoptForm from './components/AdoptForm.vue';
import PuppyCard from './components/PuppyCard.vue';
import './styles/main.scss';

const appData = useAppData();
const puppies = ref<PuppyData[]>();

puppies.value = appData.puppies;
</script>

<template>
  <div id="content">
    <Header></Header>
    <AdoptForm v-if="appData.active"></AdoptForm>
    <PuppyCard
      v-for="(puppy, index) in appData.puppies"
      :key="index"
      :pupData="puppy"
    ></PuppyCard>
  </div>
</template>

<style lang="scss" scoped></style>
