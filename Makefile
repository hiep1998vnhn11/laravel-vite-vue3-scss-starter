ifndef u
u:=sudo
endif

ifndef env
env:=dev
endif

OS:=$(shell uname)

init-app:
	cp .env.example .env
	composer install
	php artisan key:generate
	php artisan jwt:secret
	php artisan migrate
	php artisan db:seed
	php artisan storage:link
	npm install && npm run dev

build:
	npm run prod

watch:
	npm run watch

hot:
	npm run hot

autoload:
	composer dump-autoload

route:
	php artisan route:list

swagger:
	php artisan l5-swagger:generate

deploy:
	sudo git checkout .
	sudo git pull
	sudo yarn
	sudo yarn prod 

cache:
	php artisan route:cache
	php artisan config:cache

cache-clear:
	php artisan cache:clear
	php artisan config:clear
	php artisan route:clear

optimize:
	php artisan optimize