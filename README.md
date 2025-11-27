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

src/modules/
src/shared
src/core
src/config
migrations/

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
