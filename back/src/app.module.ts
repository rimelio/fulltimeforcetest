import { Module } from '@nestjs/common';
import { GitModule } from './git/git.module';
import { OctokitModule } from 'nestjs-octokit';
@Module({
  imports: [
    GitModule,
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: process.env.TOKEN,
      },
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
