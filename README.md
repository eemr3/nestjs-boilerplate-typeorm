# NestJS Boilerplate (By eemr3)

Boilerplate profissional para iniciar projetos com NestJS + TypeORM.

## 🚀 Tecnologias inclusas

- NestJS 11x
- TypeORM 0.3
- PostgreSQL
- JWT Auth
- Layers organizadas (modules, shared, core)
- CLI para migrations

## 📁 Estrutura organizada

```
src/
├── config/              # Configurações da aplicação
│   ├── configuration.ts
│   ├── database.config.ts
│   ├── swagger.config.ts
│   └── index.ts
├── database/            # Configuração do banco de dados
│   ├── data-source.ts
│   └── migrations/      # Migrations do TypeORM
├── modules/             # Módulos da aplicação
│   ├── auth/           # Módulo de autenticação
│   │   ├── application/ # Casos de uso e serviços
│   │   ├── domain/      # Entidades e interfaces
│   │   ├── presentation/ # Controllers e DTOs
│   │   └── auth.module.ts
│   ├── user/           # Módulo de usuário
│   │   ├── application/ # Casos de uso e serviços
│   │   ├── infrastructure/ # Implementações (repositórios, etc)
│   │   ├── presentation/   # Controllers e DTOs
│   │   └── user.module.ts
│   └── index.ts
├── shared/             # Recursos compartilhados
│   ├── constants/
│   ├── decorators/
│   ├── dto/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── pipes/
├── app.module.ts
└── main.ts
```

## ▶ Utilizando este boilerplate

```bash
npx degit eemr3/nestjs-boilerplate meu-novo-projeto
cd meu-novo-projeto

cp .env.example .env
npm install
npm run start:dev
```

## ▶ Para rodar as migrations

```bash
npm run migration:generate --name=init
npm run migration:run
```
