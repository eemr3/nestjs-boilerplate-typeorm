import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Versionamento de API (padrão absoluto em 2025)
  app.enableVersioning({
    type: VersioningType.URI, // → /api/v1/users
    defaultVersion: '1',
  });

  // Prefixo global (todas as rotas ficam em /api)
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors();

  setupSwagger(app);

  // Health check obrigatório em produção
  app.getHttpAdapter().get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  await app.listen(process.env.APP_PORT || 3001);
}
bootstrap();
