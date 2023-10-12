import { Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
const https = require('https')

@Controller('git')
export class GitController {

    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:4200')
    getCommits(
        @Req() req: Request,
        @Res() res: Response,
    ){
        console.log('llego')
        const options ={
            hostname: 'api.github.com',
            path: '/repos/rimelio/Intro/commits',
            OAUth: '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',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
            },
        }
        https.get(options, apiResponse => {
            apiResponse.pipe(res)
        }).on('error', error =>{
            console.log(error);
            res.status(500).send('Something went wrong!');
        })
    }
}
