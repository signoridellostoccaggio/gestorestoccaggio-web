import { NestFactory }            from '@nestjs/core';
import { AppModule }              from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join }                   from 'path';
import * as session               from 'express-session';
import * as config                from './config/config.json';
import * as passport              from 'passport';
import { AuthExceptionFilter }    from './common/filters/auth-exception.filter';
import { useRequestLogging }      from './middleware/request-logging';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const flash = require('connect-flash');

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.use(
    session({
      name: 'gestorestoccaggio_sid',
      resave: true,
      saveUninitialized: true,
      secret: config.session.secret,
      cookie: isProduction ? config.session.cookie.prod : config.session.cookie.dev
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  app.useGlobalFilters(new AuthExceptionFilter());
  useRequestLogging(app);

  await app.listen(3000);
}

bootstrap();
