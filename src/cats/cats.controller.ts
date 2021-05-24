import {Controller, Get, Post, Param, Query } from '@nestjs/common';
import {ApiTags, ApiParam, ApiQuery, ApiHeader} from "@nestjs/swagger";

@ApiTags('cats')
@Controller('cats')
export class CatsController {
    @Get()
    @ApiParam({
        name: 'id',
        description: 'user Id'
    })
    @ApiQuery({
        name: 'role',
        description: '这是需要传递的参数'
    })
    @ApiHeader({
        name: 'cats',
        required: true,
        description: '...'
    })
    public index(@Param('id') id: string, @Query('role') role: string): string {
        return 'The is cats index page.'
    }

    @Post()
    findAll(): string[] {
        return ['abc', 'def'];
    }
}
