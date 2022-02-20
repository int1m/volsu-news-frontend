<template>
  <div>
    <div v-for="(news, index) in newsList" :key="index">
      {{ news.author }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { computed, onMounted } from 'vue';
import { NewsList } from '~/services/news/news';

const counterStore = useCounterStore();

const newsList = computed<NewsList>(() => counterStore.newsList);

onMounted(() => {
  counterStore.getNewsList();
});
</script>

<style lang="scss" scoped>

</style>
