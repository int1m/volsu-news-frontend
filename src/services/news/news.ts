import { useFetch } from '#app';

type NewsStatus = 'draft' | 'pendingVerification' | 'pendingPublicate' | 'publicated' | 'deleted';

interface Comment {
  text: string,
  likes: number,
}

export interface News {
  author: string,
  title: string,
  text: string,
  publicationDate?: string,
  eventDates?: Array<string>,
  filterTags?: Array<string>,
  auditoryTags?: Array<string>,
  techInfo?: {
    createDate: string,
    type: string,
    status: NewsStatus,
  },
  interaction?: {
    button?: {
      type: string,
      title: string,
      text: string,
      clicksNumber: number,
      clickAction: 'checkIn' | 'goTolink',
    },
    survey: {
      title: string,
      variants: Array<string>,
    },
    feedback: {
      likes: number,
      views: number,
      comments: Comment,
    },
  }
}

export type NewsList = Array<News>;

type NewsListGet = {
  news: NewsList,
  count: number,
};

export class NewsService {
  getNewsList = async (): Promise<NewsList> => {
    const { data } = await useFetch<NewsListGet>('http://localhost:3001/api/news/get');
    return data.value.news.reverse();
  };

  createNews = async (news: News): Promise<News> => {
    const { data } = await useFetch<News>('http://localhost:3001/api/news/create', {
      method: 'POST',
      body: news,
    });
    return data.value;
  };
}
