import { defineStore } from 'pinia';
import { useState } from '#imports';
import { NewsService, NewsList } from '~/services/news/news';

const newsService = new NewsService();

export const useCounterStore = defineStore('counter', () => {
  // State
  const newsList = useState<NewsList>('newsList', () => []);

  // Actions
  const getNewsList = async () => {
    newsList.value = await newsService.getNewsList();
  };

  return {
    getNewsList,
    newsList,
  };
});
