<template>
  <div class="news-module">
    <h5 class="news-header">
      Список новостей
    </h5>
    <div class="news-list">
      <div v-for="(news, index) in newsList" :key="index">
        <News :news="news" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/news';
import { computed, onMounted } from 'vue';
import { NewsList } from '@/services/news/news';
import News from '@/components/pages/news/News';

const counterStore = useCounterStore();

const newsList = computed<NewsList>(() => counterStore.newsList);

onMounted(() => {
  counterStore.getNewsList();
});
</script>

<style lang="scss" scoped>
.news-module {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .news-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
}
</style>
