#:::::::::::::::::::::::::::::::::::::::::: this.elk.docker v0.6.3 :::::::::::::::::::::::::::::::::::#

inputs:
	@xdg-open ./input/files
	@xdg-open ./input/logs
	@xdg-open ./input/database/mysql/data.sql
	@xdg-open ./input/database/mongo/init/data.js
	@xdg-open ./configs/logstash.conf

#----------------------------------------------------------------------------------------------#

start:
	@clear
	@sudo setfacl -m u:1000:rw /var/run/docker.sock
	@sudo sysctl -w vm.max_map_count=262144
	@docker-compose build
	@docker-compose up -d
#----------------------------------------------------------------------------------------------#

show:
	@clear
	@echo   "#-------------------------------------- docker-compose ps -----------------------------------------#"
	@docker-compose ps
	@echo "\n#-------------------------------------- docker-compose ps -a --------------------------------------#"
	@docker-compose ps -a
	@echo "\n#-------------------------------------- docker-compose images -------------------------------------#"
	@docker-compose images
	@echo "\n#-------------------------------------- docker ps -------------------------------------------------#"
	@docker ps
	@echo "\n#-------------------------------------- docker ps -a ----------------------------------------------#"
	@docker ps -a
	@echo "\n#-------------------------------------- docker volume ls ------------------------------------------#"
	@docker volume ls
	@echo "\n#-------------------------------------- docker network ls -----------------------------------------#"
	@docker network ls
	@echo "\n#-------------------------------------- docker image ls -------------------------------------------#"
	@docker image ls
	@echo   "#--------------------------------------------------------------------------------------------------#\n"
	@sleep 2
#----------------------------------------------------------------------------------------------#

stop:
	@clear
	@docker-compose stop
	@docker-compose down
	@$(docker stop )$(docker ps -a -q)
	@$(docker rm )$(docker ps -a -q)
	@docker network prune -f
#----------------------------------------------------------------------------------------------#

clean: stop
	@docker volume prune -f
	@echo > ./input/database/mongo/temp/mongodb/temp.db
	@#$(docker rmi -f )$(docker images -a -q)
#----------------------------------------------------------------------------------------------#

atest:  clean clean show start
	@docker-compose logs -f
#----------------------------------------------------------------------------------------------#

backup:
	@clear
	@git add ../. -f
	@git commit -m "this.elk.docker, automatic backup."
	@git push -f
	@sleep 3
	@clear
#----------------------------------------------------------------------------------------------#

mework:	
	@xdg-open ../README.md
	@xdg-open ./Makefile
	@xdg-open ./docker-compose.yml
	@xdg-open ./configs/yaml/kibana.yml
	@xdg-open ./configs/yaml/filebeat.yml
	@xdg-open ./configs/yaml/metricbeat.yml
	@xdg-open ./configs/logstash.conf
	@xdg-open ./input/database/mysql/data.sql
	@xdg-open ./input/database/mongo/init/data.js

#----------------------------------------------------------------------------------------------#
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::#

