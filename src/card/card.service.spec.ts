import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardService],
    }).compile();

    service = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('test card create', async () => {
    const card = await service.create({ name: 'test', seq: 0, list_id: 0 });
    expect(card.name).toBe('test');
  });
  it('test card update', async () => {
    service.create({ name: 'test', seq: 0, list_id: 0 });
    const card = await service.update(0, { name: 'testUpdate', seq: 0 });
    expect(card.name).toBe('testUpdate');
  });
  it('test card delete', async () => {
    service.create({ name: 'test', seq: 0, list_id: 0 });
    const deletedId = await service.delete(0);
    expect(deletedId).toBe(0);
  });
});
