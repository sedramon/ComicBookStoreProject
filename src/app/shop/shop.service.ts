export interface Comic {
  id: number;
  name: string;
  genre: string;
  pages: number;
  author: string;
  dateOfRelease: Date;
  price: number;
  amount: number;
  status?: string;
}

export class ShopService {
  private dummyShopList: Array<Comic> = [
    {
      id: 1,
      name: 'X-Men No. 1',
      genre: 'Action',
      pages: 120,
      author: 'Stan Lee',
      dateOfRelease: new Date('2023-01-03 21:00'),
      amount: 1,
      price: 49.99,
    },
    {
      id: 2,
      name: 'Fantastic Four No. 1',
      genre: 'Action',
      pages: 66,
      author: 'Stan Lee',
      dateOfRelease: new Date('2023-01-02 20:00'),
      amount: 1,
      price: 24.99,
    },
    {
      id: 3,
      name: 'All Star Comics No. 8',
      genre: 'Manga',
      pages: 200,
      author: 'Roy Thomas',
      dateOfRelease: new Date('2023-01-01 11:00'),
      amount: 1,
      price: 64.99,
    },
    {
      id: 4,
      name: 'Detective Comics No. 27',
      genre: 'Horror',
      pages: 205,
      author: 'Roy Thomas',
      dateOfRelease: new Date('2022-11-22 13:00'),
      amount: 1,
      price: 49.99,
    },
    {
      id: 5,
      name: 'Batman No. 1',
      genre: 'Comedy',
      pages: 178,
      author: 'Jack Kirby',
      dateOfRelease: new Date('2021-01-01 00:00'),
      amount: 1,
      price: 29.99,
    },
    {
      id: 6,
      name: 'Marvel Comics No. 1',
      genre: 'Drama',
      pages: 75,
      author: 'Stan Lee',
      dateOfRelease: new Date('2020-08-03 16:00'),
      amount: 1,
      price: 79.99,
    },
    {
      id: 7,
      name: 'Superman No. 1',
      genre: 'Action',
      pages: 222,
      author: 'Jack Kirby',
      dateOfRelease: new Date('2020-08-03 16:00'),
      amount: 1,
      price: 19.99,
    },
    {
      id: 8,
      name: 'Captain America Comics No. 1 ',
      genre: 'Fantasy',
      pages: 98,
      author: 'Steve Ditco',
      dateOfRelease: new Date('2022-11-23 16:00'),
      amount: 1,
      price: 99.99,
    },
    {
      id: 9,
      name: 'Action Comics No. 1',
      genre: 'Horror',
      pages: 112,
      author: 'Douglas Volk',
      dateOfRelease: new Date('2019-01-01 00:00'),
      amount: 1,
      price: 39.99,
    },
    {
      id: 10,
      name: 'Amazing Fantasy No. 15',
      genre: 'Fantasy',
      pages: 256,
      author: 'Stan Lee',
      dateOfRelease: new Date('2010-11-22 15:00'),
      amount: 1,
      price: 59.99,
    },
  ];

  getShopList() {
      return this.dummyShopList;
  }
}
