# 🚀 Como rodar o backend

```bash
1️⃣ Clonar o repositório

git clone https://github.com/Juniando/Projetos.git
cd Projetos

2️⃣ Instalar dependências

npm install

3️⃣ Executar as migrations do Prisma ja com seed configurada

npx prisma migrate dev

4️⃣ Iniciar o servidor

npm run dev

5️⃣ Testar as rotas

Agora é só testar as rotas públicas e privadas

rotas privadas precisam ser autenticadas via JWT e token brcypt (login) !

-> authRoutes

POST /api/auth/login

-> userRoutes 

-rotas públicas

POST /api/users → criar usuário normal

-rotas privadas

GET /api/users/me

-apenas admin

POST /api/users/admin
GET /api/users
DELETE /api/users/:id

-> postRoutes

-rotas públicas

GET /api/posts
GET /api/posts/:id

-rotas privadas 

POST /api/posts
GET /api/posts/me/mine
DELETE /api/posts/:id
