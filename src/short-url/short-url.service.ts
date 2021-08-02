import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  ShortUrl,
  ShortUrlDocument,
} from '../short-url/schemas/short_url.schema';
import { InjectModel } from '@nestjs/mongoose';

import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';

@Injectable()
export class ShortUrlService {
  private saltOrRounds = 1;

  constructor(
    @InjectModel(ShortUrl.name)
    private shortUrlModel: Model<ShortUrlDocument>,
  ) {
    //nda
  }
  async create(createShortUrlDto: CreateShortUrlDto): Promise<ShortUrl> {
    const createShort = this.shortUrlModel.create(createShortUrlDto);

    return createShort;
  }

  async findAll(): Promise<ShortUrl[]> {
    return this.shortUrlModel.find();
  }

  findOne(id: string) {
    return this.shortUrlModel.findById(id);
  }

  async update(id: string, updateShortUrlDto: UpdateShortUrlDto) {
    return await this.shortUrlModel.findByIdAndUpdate(id, updateShortUrlDto);
  }

  async remove(id: string) {
    return await this.shortUrlModel.findByIdAndRemove(id);
  }
}
