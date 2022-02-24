<template>
  <div class="news-module">
    <div class="news-create-button-container">
      <img
        class="news-img"
        src="@/assets/icons/news-img-empty-two.svg"
        alt="news-img-empty"
      >
      <NuxtLink to="/news/create" class="news-create-link">
        <a-button class="news-create-button" size="large">
          Напишите что-нибудь...
        </a-button>
      </NuxtLink>
    </div>
    <h5 class="news-header">
      Новости
    </h5>
    <div class="news-list">
      <div v-for="(news, index) in newsList" :key="index">
        <News :news="news" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from '#imports';
import { useCounterStore } from '@/stores/news';
import { NewsList } from '@/services/news/news';
import News from '@/components/pages/news/News';

const counterStore = useCounterStore();

const newsList = computed<NewsList>(() => counterStore.newsList);

onMounted(async () => {
  await counterStore.getNewsList();
});
</script>

<style lang="scss" scoped>
.news-module {
  display: flex;
  flex-direction: column;
  padding: 20px 14px;
  background-color: #EBF0F4;
  min-height: 100%;

  .news-create-button-container {
    width: 100%;
    display: flex;
    gap: 10px;

    .news-create-link {
      width: 100%;
    }
  }

  .news-header {
    margin: 10px 0 !important;
  }

  .news-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.news-create-button {
  width: 100%;
  text-align: left;
  border-radius: 12px;
  color: #818c99;
  background-color: #ffffff;
}
</style>
