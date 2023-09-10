dc_exec=docker exec -it

start:
	docker-compose up -d --remove-orphans

stop:
	docker-compose down

bash:
	 $(dc_exec) centif-backend sh

mysql:
	 $(dc_exec) centif-strapiDB sh

dump:
	 $(dc_exec) centif-strapiDB mysqldump -u root -pcentif centif > dump.sql

install:
	$(dc_exec) npm install
