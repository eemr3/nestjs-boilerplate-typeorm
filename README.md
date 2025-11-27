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
├── database/            # Configuração do banco de dados
│   ├── data-source.ts
│   └── migrations/      # Migrations do TypeORM
├── modules/             # Módulos da aplicação
│   └── user/           # Exemplo de módulo (Clean Architecture)
│       ├── application/ # Casos de uso e serviços
│       ├── domain/      # Entidades, value objects e exceções
│       ├── infrastructure/ # Implementações (repositórios, etc)
│       ├── presentation/   # Controllers e DTOs
│       └── user.module.ts
└── shared/             # Recursos compartilhados
    ├── decorators/
    ├── dto/
    ├── filters/
    ├── guards/
    ├── interceptors/
    └── pipes/
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
