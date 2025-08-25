# Flowpense Backend

This is a Node.js backend project using **Prisma ORM** with **PostgreSQL**.  
It includes models for `User`, `Blog`, `Post`, and `Card`. You can **seed data** and **fetch data** via Express routes.

---

## **Setup**

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/backend_journey.git
cd backend_journey
```

### npm install
 ### DATABASE_URL="postgresql://username:password@localhost:5432/newDb"
### //Replace username, password, and newDb with your PostgreSQL credentials.

 ### 1. Define your schema

 ### Check prisma/schema.prisma:

 datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

generator client {
provider = "prisma-client-js"
}

model User { ... }
model Blog { ... }
model Post { ... }

2. Run migrations
   npx prisma migrate dev --name init

Creates tables in your PostgreSQL database.

Generates Prisma Client.

3. Seed the database

Create prisma/seed.js:

```const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
await prisma.user.create({ ... });
await prisma.blog.create({ ... });
await prisma.post.create({ ... });
await prisma.card.create({ ... });
}

main()
.catch(console.error)
.finally(() => prisma.$disconnect());

Configure package.json:

"prisma": {
"seed": "node prisma/seed.js"
}
```
Run the seed script:

npx prisma db seed
