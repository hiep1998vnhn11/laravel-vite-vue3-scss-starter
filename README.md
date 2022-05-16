# Laravel and vite vue3 starter kit


## For Docker:
1. clone this repo
2. Copy .env.example to .env, change your env file
4. Install Docker Desktop or (docker-compose and docker)
5. start docker: 
```bash
docker-compose up -d
```
6. Install composer dependencies:
```bash
docker-compose exec app composer install
```
7. run server at PORT 8008(change this in docker-compose.yml file)
```
http://localhost:8008
```
