# Backend Typescript + Prisma + Docker + PostgreSQL

## Projeto de estudo para criação de um backend utilizando Node, Typescript, Prisma, Docker e PostgreSQL.
## Feito utilizando padrão MVC, com a utilização de middlewares para autenticação.

# Como começar
    Programas necessários: Docker, Node, Typescript, VSCode ou editor equivalente.
## Passo 1: Instalar o Docker Desktop
    Sub-Passo 1: Baixar o Terminal no Microsoft Store
    Sub-Passo 2: Abrir o Terminal como administrador e digitar o comando: wsl --install -d Ubuntu-22.04
    Sub-Passo 3: Criar uma senha e um usuario para o Ubuntu
    Sub-Passo 4: Baixar o Docker Desktop <https://docs.docker.com/get-docker>
    Sub-Passo 5: Instalar o Docker Desktop
    Sub-Passo 6: Reiniciar o PC
    Sub-Passo 7: Abrir o Terminal e digitar o comando: docker ps
    Sub-Passo 8: Se aparecer a mensagem dos containeres ativos, o Docker está funcionando corretamente
Documentações úteis
[https://docs.docker.com/docker-for-windows/wsl](https://docs.docker.com/docker-for-windows/wsl)
[https://docs.docker.com/engine/install/ubuntu](https://docs.docker.com/engine/install/ubuntu)
[https://docs.docker.com/compose/install](https://docs.docker.com/compose/install)
[https://learn.microsoft.com/en-us/windows/wsl/install](https://learn.microsoft.com/en-us/windows/wsl/install)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 2: Alterar o nome do arquivo .env.example para .env
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 3: Alterar o nome do arquivo docker-compose.yml.example para docker-compose.yml
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 4: Inserir seus dados no arquivo .env (senha, usuario, porta, nome do banco e sua KEY de autenticação via jwt token) e no docker-compose.yml (usuario, senha, nome do banco de dados)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 5: Abrir o terminal na pasta e digitar `yarn` ou `npm install`
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 6: Abrir o terminal na pasta e digitar `docker-compose up -d`
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 7: Instalar a extensão do Prisma 
    Sub-Passo 1: Abrir o VSCode
    Sub-Passo 2: Clicar no botão de extensões
    Sub-Passo 3: Digitar Prisma
    Sub-Passo 4: Instalar a extensão Prisma
Documentações úteis
[https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres)
[https://www.prisma.io/docs](https://www.prisma.io/docs)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 8: Abrir o terminal na pasta e digitar `yarn prisma migrate dev`
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Passo 9: Digitar `yarn dev` ou `npm run dev`
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Finalizado!


Para testes no insomnia, na pasta docs há o arquivo com os endpoints feitos, basta importar no insomnia e testar.
