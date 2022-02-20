<template>
  <div class="news">
    <h2 class="news-header">
      Список новостей
    </h2>
    <div v-for="(news, index) in newsList" :key="index">
      <News :news="news" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { computed, onMounted } from 'vue';
import { NewsList } from '~/services/news/news';
import News from '@/components/pages/news/News';

const counterStore = useCounterStore();

const newsList = computed<NewsList>(() => counterStore.newsList);

onMounted(() => {
  counterStore.getNewsList();
});
</script>

<style lang="scss" scoped></style>
