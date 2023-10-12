import { Module } from '@nestjs/common';
import { GitModule } from './git/git.module';

@Module({
  imports: [GitModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
