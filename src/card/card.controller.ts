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
import { CardService } from './card.service';
import { CardDto } from './dto/card';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async getAll() {
    return await this.cardService.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.cardService.findById(id);
  }

  @Post()
  async create(@Body() card: CardDto) {
    return await this.cardService.create(card);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() card: Partial<CardDto>,
  ) {
    return await this.cardService.update(id, card);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.cardService.delete(id);
  }
}
