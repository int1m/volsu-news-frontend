import { News } from '@/services/news/news';
import faker from '@faker-js/faker/locale/ru';

export const generateNews = (): News => {
  return {
    author: faker.name.findName(),
    title: faker.random.words(5),
    text: faker.random.words(100),
    publicationDate: faker.date.between('2020-01-01T00:00:00.000Z', '2021-01-01T00:00:00.000Z'),
    filterTags: faker.random.arrayElements(['dev', 'imit', 'volsu'], 1),
    auditoryTags: faker.random.arrayElements(['All', 'imit'], 1),
    techInfo: {
      createDate: faker.date.between('2020-01-01T00:00:00.000Z', '2021-01-01T00:00:00.000Z'),
      type: 'type',
      status: 'publicated',
    },
    interaction: {
      survey: {
        title: faker.random.words(14),
        variants: faker.random.arrayElements(['1', '2', '3', '4'], 2),
      },
      feedback: {
        likes: faker.datatype.number({ min: 10, max: 40 }),
        views: faker.datatype.number({ min: 100, max: 200 }),
        comments: {
          text: faker.random.words(20),
          likes: faker.datatype.number({ min: 10, max: 40 }),
        },
      },
    },
  };
};