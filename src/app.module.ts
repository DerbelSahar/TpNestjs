import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { HelmetMiddleware } from '@nest-middlewares/helmet';

@Module({
  imports: [
    TestModule,
    TodoModule,
    MorganModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(HelmetMiddleware).forRoutes('')
        .apply(LoggerMiddleware).forRoutes('');
  }
}
