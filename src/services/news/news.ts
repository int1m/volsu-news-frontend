type NewsStatus = 'draft' | 'pendingVerification' | 'pendingPublicate' | 'publicated' | 'deleted';

interface Comment {
  text: string,
  likes: number,
}

export interface News {
  author: string,
  title: string,
  text: string,
  publicationDate: Date,
  eventDates?: Array<Date>,
  filterTags: Array<string>,
  auditoryTags: Array<string>,
  techInfo: {
    createDate: Date,
    type: string,
    status: NewsStatus,
  },
  interaction: {
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

export class NewsService {
  getNewsList = async (): Promise<NewsList> => {
    const response = await fetch('/api/news/');
    return await response.json();
  };
}