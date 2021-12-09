import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ListDto } from './dto/list';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}
  @Get()
  async getAll() {
    return await this.listService.findAll();
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.listService.findById(id);
  }
  @Post()
  async create(@Body() list: ListDto) {
    return await this.listService.create(list);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() list: Partial<ListDto>,
  ) {
    return await this.listService.update(id, list);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.listService.delete(id);
  }
}
