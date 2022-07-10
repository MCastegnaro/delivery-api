# Delivery - API

Uma api Nodejs desenvolvida na trilha de aprendizado em backend da Rocketseat, utilizando o Prisma IO, para realizar entregas. Nesta aplicação, teremos de um lado o cliente - que irá se cadastrar e cadastrar itens para serem entregues em determinada localização - e, do outro, o entregador - que poderá pegar ou não determinada entrega para ser realizada. Iremos utilizar Typescript, JWT e Express.

## Configurações

Para que o projeto seja executado corretamente, deve ser criar um arquivo `.env` na raiz do projeto contendo as seguintes informações:

```
DATABASE_URL="postgresql://userdb:userpassword@localhost:5432/nome_do_banco?schema=public"
CLIENT_KEY=hash_aleatório_para_chave_do_cliente
DELIVERYMAN_KEY=hash_aleatório_para_chave_do_entregador

```

Sugestão para as chaves: Gere um hash md5 aleatório.

## Comandos

- `yarn`: Para instalar as dependências do projeto.
- `yarn dev`: Para rodar a api localmente.
- `yarn prisma migrate`: Para rodar as migrações no banco.
- `yarn prisma studio`: Para iniciar o prisma studio.
- `yarn prisma generate`: Para refletir as alterações realizadas no schema.prisma.

# REST API - Recursos

## Autenticar cliente

### Request

`POST /client/authenticate`

    http://localhost:3000/client/authenticate

    body: { "username": "foo", "password": "foo" }

### Response:

    JWT TOKEN

## Autenticar entregador

### Request

`POST /deliveryman/authenticate`

    http://localhost:3000/deliveryman/authenticate

    body: { "username": "foo", "password": "foo" }

### Response:

    JWT TOKEN

## Cadastro de cliente

### Request

`POST "/client/`

    http://localhost:3000/client

    body: { "username": "foo", "password": "foo" }

## Buscar entregas por cliente

### Request

`GET /client/deliveries`

    http://localhost:3000/client/deliveries

    client barear token: xxxxx

## Cadastro de entregador

### Request

`POST "/deliveryman/`

    http://localhost:3000/deliveryman

    body: { "username": "foo", "password": "foo" }

## Buscar entregas por entregador

### Request

`GET /deliveryman/deliveries`

    http://localhost:3000/deliveryman/deliveries

    deliveryman barear token: xxxxx

## Atualizar data final da entrega

### Request

`PUT /delivery/updateEndDate/:id`

    http://localhost:3000/delivery/updateEndDate/:id

    deliveryman barear token: xxxxx

## Cadastrar item para entrega

### Request

`POST /delivery`

    http://localhost:3000/delivery

    client barear token: xxxxx

## Buscar itens disponíveis para entrega

### Request

`GET /delivery/available`

    http://localhost:3000/delivery/available

    deliveryman barear token: xxxxx

## Aceitar uma entrega de item

### Request

`PUT /delivery/available/:id`

    http://localhost:3000/delivery/updateDeliveryman

    deliveryman barear token: xxxxx
