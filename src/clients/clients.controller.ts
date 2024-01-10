import { Body, Controller, Get, Header, HttpCode, Param, Post, Req, Res } from "@nestjs/common";
import { response } from "express";
import { request } from "http";
import { CreateClientDto } from "./dto/create-client.dto";

let clientsDB = [
    {
        id: 1,
        name: 'Telkomsel',
        age: 25
    },
    {
        id: 2,
        name: 'Indosat',
        age: 30
    }
]

@Controller('clients')
export class ClientsController {
    @Get('clients')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    index(@Res() response) {
        response.json(clientsDB)
    }

    @Post('store')
    store(
        @Req() request, 
        // @Body('name') name: string, //specific or all field
        @Body() CreateClientDto: CreateClientDto,
        @Res({ passthrough: true }) response ) {
        try {
            // const {id, name} = request.body;

            // clientsDB.push({
            //     id,
            //     name
            // });
            
            // return clientsDB;

            // return name;
            return CreateClientDto
        } catch (error) {
            response.status(500).json({success: false})
        }
    }


    @Get('detail/:id')
    @HttpCode(200)
    findOne(@Param('id') id: string) {
        const name = clientsDB[0].id;
        return 'Clients: ' + name;
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