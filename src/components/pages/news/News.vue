<template>
  <div class="news">
    <div class="news-header">
      <img
        class="news-img"
        src="@/assets/icons/news-img-empty.svg"
        alt="news-img-empty"
      >
      <div class="news-info">
        <div class="news-author">
          {{ newsValue.author }}
        </div>
      </div>
    </div>
    <div class="news-content">
      <div class="news-title">
        {{ newsValue.title }}
      </div>
    </div>
    <div class="news-footer">
      <div class="news-feedback-container">
        <div class="news-feedback">
          <img src="@/assets/icons/like.svg" alt="like">
          <span>{{ cropNumber(newsValue.interaction.feedback.likes) }}</span>
        </div>
        <div class="news-feedback">
          <img src="@/assets/icons/comment.svg" alt="comment">
          <span>{{ cropNumber(newsValue.interaction.feedback.comments.text.length) }}</span>
        </div>
      </div>
      <div class="news-feedback">
        <img src="@/assets/icons/view.svg" alt="view">
        <span>{{ cropNumber(newsValue.interaction.feedback.views) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { News } from '@/services/news/news';
import { cropNumber } from '@/helpers/utilities';

const props = defineProps({
  news: {
    type: Object as PropType<News>,
    required: true,
  },
});

const newsValue = computed<News>(() => props.news);
</script>

<style lang="scss" scoped>
.news {
  padding: 10px;
}
</style>