import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Nome da API')
    .setDescription('Descrição da API')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Digite seu token JWT',
        in: 'header',
      },
      'JWT-auth', // esse nome será usado no @ApiBearerAuth('JWT-auth')
    )
    .addTag('auth', 'Autenticação e registro')
    .addTag('user', 'Operações do usuário logado')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // não desloga do Swagger ao recarregar
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
    customSiteTitle: 'Nome da API - Swagger',
  });
}
