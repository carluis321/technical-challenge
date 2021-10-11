const { getAverage } = require('./pair');

describe('Pair Service', () => {
  test('Should successfully get Average from symbol data', async () => {
    const data = [
      {
        id: 8,
        pair_id: '1',
        mins: 5,
        price: 57566.98026493,
        created_at: {},
      },
      {
        id: 7,
        pair_id: '1',
        mins: 5,
        price: 57550.09519257,
        created_at: {},
      },
      {
        id: 6,
        pair_id: '1',
        mins: 5,
        price: 57532.86600807,
        created_at: {},
      },
      {
        id: 5,
        pair_id: '1',
        mins: 5,
        price: 57429.62537021,
        created_at: {},
      },
      {
        id: 4,
        pair_id: '1',
        mins: 5,
        price: 57403.05564936,
        created_at: {},
      },
      {
        id: 3,
        pair_id: '1',
        mins: 5,
        price: 57345.30600606,
        created_at: {},
      },
      {
        id: 2,
        pair_id: '1',
        mins: 5,
        price: 57296.35115846,
        created_at: {},
      },
      {
        id: 1,
        pair_id: '1',
        mins: 5,
        price: 57160.60009905,
        created_at: {},
      },
    ];

    const lectures = 10;

    const average = getAverage(data, lectures);

    expect(average).toEqual(45928.487974870994);
  });
});
