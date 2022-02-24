import { defineStore } from 'pinia';
import { useState } from '#imports';
import { NewsService, NewsList, News } from '~/services/news/news';

const newsService = new NewsService();

export const useCounterStore = defineStore('counter', () => {
  // State
  const newsList = useState<NewsList>('newsList', () => []);

  // Actions
  const getNewsList = async () => {
    newsList.value = await newsService.getNewsList();
  };

  const createNews = async (news: News) => {
    await newsService.createNews(news);
  };

  return {
    newsList,
    getNewsList,
    createNews,
  };
});
