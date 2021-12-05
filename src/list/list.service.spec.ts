import { Test, TestingModule } from '@nestjs/testing';
import List, { CreateListDto } from './dto/list';
import { ListService } from './list.service';

describe('ListService', () => {
  let service: ListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListService],
    }).compile();

    service = module.get<ListService>(ListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('test list create', async () => {
    const list = await service.create({ name: 'test', seq: 0 });
    expect(list.name).toBe('test');
  });
  it('test list update', async () => {
    service.create({ name: 'test', seq: 0 });
    const list = await service.update(0, { name: 'testUpdate', seq: 0 });
    expect(list.name).toBe('testUpdate');
  });
  it('test list delete', async () => {
    service.create({ name: 'test', seq: 0 });
    const deletedId = await service.delete(0);
    expect(deletedId).toBe(0);
  });
});
