<template>
  <div class="create-news-module">
    <div class="create-news-header">
      <NuxtLink to="/news">
        <img
          class="left-arrow"
          src="@/assets/icons/left-arrow.svg"
          alt="back"
        >
      </NuxtLink>
      <h6>Новая новость</h6>
    </div>
    <div class="create-news-content">
      <a-input
        v-model:value="newsTitle"
        class="crete-news-input-title"
        placeholder="Введите заголовок новости..."
      />
      <a-divider class="create-news-line" />
      <a-textarea
        v-model:value="newsText"
        class="create-news-textarea-text"
        placeholder="Введите текст новости..."
        :auto-size="true"
      />
    </div>
    <a-divider class="create-news-line" />
    <div class="create-news-footer">
      <img src="@/assets/icons/image.svg" alt="image">
      <a-button
        class="news-send-button"
        type="primary"
        size="large"
        @click="sendNewsButtonHandler"
      >
        Опубликовать
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useRouter } from '#imports';
import { News } from '~/services/news/news';
import { useCounterStore } from '@/stores/news';

const counterStore = useCounterStore();
const router = useRouter();

const newsTitle = ref<string>('');
const newsText = ref<string>('');

const sendNewsButtonHandler = async () => {
  if (newsTitle.value && newsText.value) {
    const news: News = {
      author: 'Maxim Mostovoy',
      title: newsTitle.value,
      text: newsText.value,
    };
    await counterStore.createNews(news);
    await router.push({ path: '/news' });
  }
};
</script>

<style lang="scss" scoped>
.create-news-module {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 14px;

  .create-news-header {
    display: flex;
    align-items: center;
    padding: 20px 0;
    gap: 20px;

    .left-arrow {
      max-width: 30px;
      max-height: 30px;
    }
  }

  .create-news-line {
    margin: 0;
  }

  .create-news-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .crete-news-input-title {
      border: none;
      font-size: 18px;
      font-weight: 500;
    }

    .create-news-textarea-text {
      margin-top: 10px;
      max-width: 100%;
      max-height: 100% !important;
      height: 100% !important;
      border: none;
      flex-grow: 1;
      font-size: 15px;
    }
  }

  .create-news-footer {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .news-send-button {
      border-radius: 10px;
      font-weight: 500;
    }
  }
}
</style>
