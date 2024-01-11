import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Req, Res } from "@nestjs/common";
import { response } from "express";
import { request } from "http";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client-dto";
import { ClientService } from "./client.service";


@Controller('clients')
export class ClientsController {
    constructor(private clientService: ClientService) {}

    @Get('clients')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    index(@Res() response) {
        response.json(this.clientService.findAll())
    }


    @Get('detail/:id')
    @HttpCode(200)
    findOne(@Param('id') id: number) {
        const client = this.clientService.findAll().filter((client) => {
            return client.id == id;
        })
        
        return client;
    }


    @Post('store')
    store(
        @Req() request, 
        // @Body('name') name: string, //specific or all field
        @Body() CreateClientDto: CreateClientDto,
        @Res({ passthrough: true }) response ) {
        try {
            this.clientService.create(CreateClientDto)

            return this.clientService.findAll()
        } catch (error) {
            response.status(500).json({success: false})
        }
    }


    @Put('update/:id')
    update(@Param('id') id:number, @Body() updateClientDto: UpdateClientDto) {
        this.clientService.findAll().filter((client) => {
            if (client.id == id) {
                client.name = updateClientDto.name,
                client.age = updateClientDto.age
            }
        })

        return this.clientService.findAll();
    }


    @Delete('destroy/:id')
    destroy(@Param('id') id:number) {
        const client = this.clientService.findAll().filter((client) => {
            if (client.id == id) {
                return client.name;
            }
        })

        return client;
    }


    // @Get('oneclients')
    // @HttpCode(200)
    // findOne(@Res() response) {
    //     return response.json({
    //         success: true
    //     })
    // }


    // // option: passthrough
    // @Get('oneclients')
    // @HttpCode(200)
    // findOne(@Res({ passthrough: true }) response): string {
    //     response.cookie('name', 'testing')
    //     return 'passthrough';
    // }


    // @Post('store')
    // store(@Req() request, @Res({ passthrough: true }) response ) {
    //     return {
    //         data: request.body
    //     }
    // }


    // @Post('store')
    // store(@Req() request, @Res() response ) {
    //     response.status(201).json(request.body)
    // }
}