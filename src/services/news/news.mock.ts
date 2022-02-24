import faker from '@faker-js/faker/locale/ru';
import { News } from '@/services/news/news';

export const generateNews = (): News => ({
  author: faker.name.findName(),
  title: faker.random.words(5),
  text: faker.random.words(60),
  publicationDate: faker.date.between('2021-12-29T00:00:00.000Z', '2022-02-21T17:00:00.000Z').toISOString(),
  eventDates: faker.random.arrayElements(
    [
      faker.date.between('2021-12-29T00:00:00.000Z', '2022-02-21T17:00:00.000Z').toISOString(),
      faker.date.between('2021-12-29T00:00:00.000Z', '2022-02-21T17:00:00.000Z').toISOString(),
      faker.date.between('2021-12-29T00:00:00.000Z', '2022-02-21T17:00:00.000Z').toISOString()],
    1,
  ),
  filterTags: faker.random.arrayElements(['dev', 'imit', 'volsu'], 1),
  auditoryTags: faker.random.arrayElements(['All', 'imit'], 1),
  techInfo: {
    createDate: faker.date.between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z').toISOString(),
    type: 'type',
    status: 'publicated',
  },
  interaction: {
    survey: {
      title: faker.random.words(14),
      variants: faker.random.arrayElements(['1', '2', '3', '4'], 2),
    },
    feedback: {
      likes: faker.datatype.number({ min: 100, max: 4000 }),
      views: faker.datatype.number({ min: 200, max: 10000 }),
      comments: faker.random.arrayElements(['123', '13345', '4155', '1155', '1415', '1414'], 5),
    },
  },
});
