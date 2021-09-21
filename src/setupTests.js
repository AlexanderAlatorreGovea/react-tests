import { rest } from 'msw';
import { setupServer } from 'msw/node';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const server = setupServer(
  rest.get('https://randomuser.me/api/', (_, response, ctx) => {
    return response.once(ctx.json({
      results: [
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
      ],
      info: {
        seed: 'abc123',
        results: 5,
        page: 1,
        version: '1.3',
      },
    }));
  }),

  rest.get('https://randomuser.me/api/', (_, response, ctx) => {
    return response.once(ctx.json({
      results: [
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
          },
          email: 'johndoe@example.com',
          phone: '555-555-5555',
        },
      ],
      info: {
        seed: 'def456',
        results: 5,
        page: 1,
        version: '1.3',
      },
    }));
  }),

  rest.get('https://randomuser.me/api/', (_, response, ctx) => {
    return response.once(ctx.json({
      results: [
        {
          name: {
            first: 'Jane',
            last: 'Doe',
          },
          email: 'janedoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'Jane',
            last: 'Doe',
          },
          email: 'janedoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'Jane',
            last: 'Doe',
          },
          email: 'janedoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'Jane',
            last: 'Doe',
          },
          email: 'janedoe@example.com',
          phone: '555-555-5555',
        },
        {
          name: {
            first: 'Jane',
            last: 'Doe',
          },
          email: 'janedoe@example.com',
          phone: '555-555-5555',
        },
      ],
      info: {
        seed: 'ghi789',
        results: 5,
        page: 1,
        version: '1.3',
      },
    }));
  }),
);
