import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Req,
  Res,
  UseGuards
}                             from '@nestjs/common';
import { WarehousesService }  from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { AuthenticatedGuard } from '../common/guards/authenticated.guard';

@Controller('magazzini')
@UseGuards(AuthenticatedGuard)
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
  async create(
    @Body() createWarehouseDto: CreateWarehouseDto,
    @Req() req,
    @Res() res
  ) {
    await this.warehousesService.create(createWarehouseDto);

    req.flash('success', 'Magazzino creato correttamente');
    res.redirect('/magazzini');
  }

  @Get()
  @Render('warehouses')
  async mainPage() {
    return {
      warehouses: await this.warehousesService.findAll()
    };
  }

  @Get('nuovo')
  @Render('new-warehouse')
  newPage() {
    return;
  }

  @Get(':id')
  @Render('warehouse-detail')
  async updatePage(@Param('id') id: string) {
    return {
      wh: await this.warehousesService.findById(id)
    };
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
    @Res() res
  ) {
    await this.warehousesService.update(id, updateWarehouseDto);
    res.redirect('/magazzini');
  }

  @Post(':id/elimina')
  async remove(@Param('id') id: string, @Res() res) {
    await this.warehousesService.remove(id);
    res.redirect('/magazzini');
  }
}
