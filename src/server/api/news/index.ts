import type { IncomingMessage, ServerResponse } from 'http';
import { generateMockData } from '~/helpers/mockHelper';
import { News } from '~/services/news/news';
import { generateNews } from '~/services/news/news.mock';

export default async (req: IncomingMessage, res: ServerResponse) => {
  await generateMockData<News>(req, res, 10, generateNews);
}