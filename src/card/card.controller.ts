import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto, UpdateCardDto } from './dto/card';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async getAll() {
    return await this.cardService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.cardService.findById(id);
  }

  @Post()
  async create(@Body() card: CreateCardDto) {
    return await this.cardService.create(card);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() card: UpdateCardDto) {
    return await this.cardService.update(id, card);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.cardService.delete(id);
  }
}
