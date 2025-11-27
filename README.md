# NestJS Boilerplate (By eemr3)

Boilerplate profissional para iniciar projetos com NestJS + TypeORM.

## 🚀 Tecnologias inclusas

- NestJS 10
- TypeORM 0.3
- PostgreSQL
- JWT Auth
- Layers organizadas (modules, shared, core)
- CLI para migrations

## 📁 Estrutura organizada

src/modules/\*
src/shared
src/core
src/config
migrations/

## ▶ Rodando o projeto

```bash
cp .env.example .env
npm install
npm run start:dev

npm run migration:generate --name=init
npm run migration:run
```
