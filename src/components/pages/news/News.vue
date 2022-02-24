<template>
  <div class="news">
    <div class="news-header">
      <div class="news-header-left">
        <img
          class="news-img"
          src="@/assets/icons/news-img-empty.svg"
          alt="news-img-empty"
        >
        <div class="news-info">
          <div class="news-author">
            {{ newsValue.author }}
          </div>
          <div class="news-date-publication">
            {{ dateNewsFormatting(new Date(newsValue.publicationDate)) }}
          </div>
        </div>
      </div>
      <div class="news-header-right">
        <a-popover
          class="news-header-more-action"
          trigger="click"
          placement="bottomLeft"
        >
          <template #title />
          <template #content>
            <div class="more-buttons-container">
              <div>Редактировать</div>
              <div>Удалить</div>
            </div>
          </template>
          <img src="@/assets/icons/more.svg" alt="more">
        </a-popover>
      </div>
    </div>
    <div class="news-content">
      <div class="news-title">
        {{ newsValue.title }}
      </div>
      <div>
        {{ newsValue.text }}
      </div>
    </div>
    <div class="news-footer">
      <div class="news-feedback-container">
        <div class="news-feedback news-feedback-background">
          <img src="@/assets/icons/like.svg" alt="like">
          <span>{{ cropNumber(newsValue.interaction.feedback.likes) }}</span>
        </div>
        <div class="news-feedback news-feedback-background">
          <img src="@/assets/icons/comment.svg" alt="comment">
          <span>{{ cropNumber(newsValue.interaction.feedback.comments.length) }}</span>
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
import { PropType } from 'nuxt3/dist/app/compat/capi';
import { computed } from '#imports';
import { News } from '@/services/news/news';
import { cropNumber } from '@/helpers/utilities';
import { dateNewsFormatting } from '@/helpers/dateHelper';

const props = defineProps({
  news: {
    type: Object as PropType<News>,
    required: true,
  },
});

const newsValue = computed<News>(() => props.news);
</script>

<style lang="scss">
.ant-popover {
  margin-bottom: -10px;
}

.ant-popover-content {
  margin-top: -10px;
}

.ant-popover-inner {
  border-radius: 10px;
}

.ant-popover-arrow {
  display: none;
}

.ant-popover-title {
  display: none;
}

.more-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>

<style lang="scss" scoped>
.news {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 280px;

  .news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .news-header-left {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }

  .news-content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .news-title {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .news-footer {
    display: flex;
    gap: 8px;
    justify-content: space-between;

    .news-feedback-container {
      display: flex;
      gap: 8px;

      .news-feedback-background {
        background-color: #f2f3f5;
        border-radius: 14px;
        padding: 0 12px;
      }
    }

    .news-feedback {
      display: flex;
      align-items: center;
      color: #99a2ad;
      font-weight: 500;
      gap: 6px;
      height: 28px;
    }
  }
}
</style>
