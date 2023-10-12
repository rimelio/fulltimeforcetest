import { Controller, Get, Header, Req, Res } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { Request, Response } from 'express';
const https = require('https')

@Controller('git')
export class GitController {
    constructor(private readonly octokitService: OctokitService) {}
    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:4200')
    async etCommits(
        @Req() req: Request,
        @Res() res: Response,
    ){
        try{
            const response = await this.octokitService.request('GET /repos/{owner}/{repo}/commits', {
                owner: process.env.OWNER,
                repo: process.env.REPO
              })
            const commits = []
            response.data.forEach(i =>{
                commits.push({
                    author: i.author.login,
                    date: i.commit.author.date,
                    message: i.commit.message,
                    commit: i.sha.slice(0,7),
                    link: i.html_url,
                    bio: i.author.html_url
                  })
            })
            res.json(commits)
        }catch(err){
            console.log(err)
        }
    }
}
