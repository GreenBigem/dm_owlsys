Как запустить MongoDB в контейнере Docker — CloudSavvy IT
https://cpab.ru/kak-zapustit-mongodb-v-kontejnere-docker-cloudsavvy-it/

docker run -d -p 27017:27017 --name example-mongo mongo:latest

docker run -d -p 27017:27017 --name owlsys-mongo -v mongo-data:/data/db mongo:latest


3:41