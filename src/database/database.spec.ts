import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from './database.providers';

describe('Database', () => {
  let provider: Database;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders],
    }).compile();

    provider = module.get<Database>(Database);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
