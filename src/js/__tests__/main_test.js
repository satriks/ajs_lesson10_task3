import GameSavingLoader from '../GameSavingLoader';

beforeEach(() => {
  jest.resetModules();
});

test('test error', async () => {
  jest.doMock('../reader.js', () => jest.fn(() => Promise.reject(new Error('error'))));
  const GameSavingLoader2 = require('../GameSavingLoader').default; // eslint-disable-line global-require
  expect(await GameSavingLoader2.load()).toEqual(Error('error'));
});

test('test', async () => {
  const res = await GameSavingLoader.load();
  expect(res)
    .toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
});
