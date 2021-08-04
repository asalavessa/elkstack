## **`this.elk.docker` (`v0.6.3`)** 

### **Prerequisites [[git](https://git-scm.com/downloads/), [docker](https://docs.docker.com/engine/install/ubuntu/), [docker-compose](https://docs.docker.com/compose/install/), and [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/linux/)]:**
```sh
lsb_release -r -d
git --version
docker --version
docker-compose --version
firefox --version
```

### **Download `this.elk.docker` repository:** 
```sh
git clone -b development http://192.168.7.5:7983/scm/eflog/this.elk.docker.git 
cd this.elk.docker/src/
```

### **`this.elk.docker` structure:**	
```sh
this.elk.docker
├── src
│   ├── configs
│   │   ├── driver
│   │   │   └── *.jar
│   │   ├── plugin
│   │   │   └── *.gem
│   │   ├── yaml
│   │   │   └── *.yml
│   │   └── logstash.conf
│   ├── input
│   │   ├── database
│   │   │   ├── mongo
│   │   │   │   ├── init
│   │   │   │   │   └── *.js
│   │   │   │   └── temp/mongodb
│   │   │   │       └── *.db
│   │   │   └── mysql
│   │   │       └── *.sql
│   │   ├── files
│   │   │   └── *.*
│   │   └── logs
│   │       ├── apache
│   │       │   ├── sample.log
│   │       │   ├── access
│   │       │   │   └── *.*
│   │       │   └── error
│   │       │       └── *.*
│   │       ├── mongo
│   │       │   ├── general
│   │       │   │   └── *.*
│   │       │   └── mongo-service
│   │       │       └── *.log
│   │       ├── mysql	
│   │       │   ├── error
│   │       │   │   └── *.*
│   │       │   ├── mysql-service
│   │       │   │   └── *.log
│   │       │   └── slowlog
│   │       │       └── *.*
│   │       └── unclassified
│   │           └── *.*
│   ├── output/dashboard
│   │   └── *.ndjson
│   ├── docker-compose.yml
│   ├── LICENSE
│   └── Makefile
└── README.md #You are here!
```

### **Inputs and databases:**
```sh
make inputs #This command runs all the commands below.
```
> *or*
```sh
xdg-open ./input/files #Insert plain text files, here.
xdg-open ./input/logs #Insert new logs, here.
xdg-open ./input/database/mysql/data.sql #Insert mysql databases, here.
xdg-open ./input/database/mongo/init/data.js #Insert mongo databases, here.
xdg-open ./configs/logstash.conf #Insert new database NAME, QUERY, and/or COLLECTION, here.
```

### **`this.elk.docker` deployment:**
```sh
make start #This command runs all the commands below.
```
> *or*
```sh
sudo setfacl -m u:1000:rw /var/run/docker.sock
sudo sysctl -w vm.max_map_count=262144
docker-compose build
docker-compose up -d
```

### **Output visualization:**
```sh
firefox --new-tab 172.16.238.3:5601 #Kibana credentials: elastic elastic
firefox --new-tab 172.16.238.9:8080 #Adminer credentials: MySQL mysql root root users
firefox --new-tab 172.16.238.11:8081 #Mongo-Express credentials: admin admin
```

### **`this.elk.docker` visualization:**
```sh
make show #This command runs all the commands below.
```
> *or*
```sh
docker-compose ps 
docker-compose ps -a
docker-compose images
docker ps
docker ps -a
docker volume ls
docker network ls
docker image ls
```

### **`this.elk.docker` management:**
#### **1. stopping**
```sh
make stop #This command runs all the commands below.
```
> *or*
```sh
docker-compose stop
docker-compose down
docker stop $(docker ps -a -q) 
docker rm $(docker ps -a -q)
docker network prune -f
```
#### **2. cleaning**
```sh
make clean #This command runs all the commands below.
```
> *or*
```sh
docker volume prune -f
echo > ./input/database/mongo/temp/mongodb/temp.db
#docker rmi -f $(docker images -a -q)
```

### **`this.elk.docker` debugging:**
```sh
make atest #This command runs all the commands below.
```
> *or*
```sh
make stop
make show
make start
docker-compose logs -f #Use Ctrl+C to exit.
```

### **Kibana search:**
* **Index creation**, Menu > Management > Stack Management > [Index Patterns](http://172.16.238.3:5601/app/kibana#/management/kibana/index_patterns) > Create index pattern > 'index-name-*'=`logstash-*` > Next step > 'Time Filter field name'=`@timestamp` > Create index pattern
* **Search**, Menu > Kibana > [Discover](http://172.16.238.3:5601/app/kibana#/discover) > 'Commonly used date'=`Today` > Search=`Eureka`

### **`this.elk.docker` dashboards:**
* **Filebeat dashboards**, Menu > Management > Stack Management > [Index Patterns](http://172.16.238.3:5601/app/kibana#/management/kibana/index_patterns) > Select > `filebeat-*` > ✰=`active`
	* **dashboard selection**, Menu > Kibana > [Dashboard](http://172.16.238.3:5601/app/kibana#/dashboards)
		* Search... > `[Filebeat Apache] Access and error logs ECS` > 'Commonly used date'=`Last 90 days` > Refresh
		* Search... > `[Filebeat MySQL] Overview ECS` > 'Commonly used date'=`Last 5 years` > Refresh
		* Search... > `[Filebeat MongoDB] Overview ECS` > 'Commonly used date'=`Last 30 days` > Refresh

* **Metricbeat dashboards**, Menu > Management > Stack Management > [Index Patterns](http://172.16.238.3:5601/app/kibana#/management/kibana/index_patterns) > Select > `metricbeat-*` > ✰=`active`
	* **Dashboard selection**, Menu > Kibana > [Dashboard](http://172.16.238.3:5601/app/kibana#/dashboards)
		* Search > `[Metricbeat Docker] Overview ECS` > 'Commonly used date'=`Last 15 minutes` > Refresh
		* Search > `[Metricbeat System] Host overview ECS` > 'Commonly used date'=`Last 15 minutes` > Refresh

### **Dashboard personalization:**
#### **1. Fields selection**,
* Menu > Kibana > [Discover](http://172.16.238.3:5601/app/kibana#/discover) > Search field names
	* generic-field-0 > `Add`
	* generic-field-1 > `Add`

#### **2. Key Performance Indicators (KPI's) creation**,	
* Menu > Kibana > [Visualize](http://172.16.238.3:5601/app/kibana#/visualize) > Create Visualization > **Pie** > `logstash-*`
	* Data > Buckets > Add=`Split slices` > Aggregation=`Terms` && Field=`generic-field-0` && Size=`7` && 'Group other values in separate bucket'=`active` 
	* Options > Pie settings > Donut=`inactive` && 'Show labels'=`active` > Update > Save=`KPI - Generic Pie`
* Menu > Kibana > [Visualize](http://172.16.238.3:5601/app/kibana#/visualize) > Create Visualization > **Tag Cloud** >  `logstash-*`
	* Buckets > Add > Tags > Aggregation=`Terms` && Field=`generic-field-0` && 'Custom Label'=`Generic Field Zero` > Update > Save=`KPI - Generic Tag Cloud`
* Menu > Kibana > [Visualize](http://172.16.238.3:5601/app/kibana#/visualize) > Create Visualization > **Area** > `logstash-*`,
	* Data > Metrics > Y-AXIS > Aggregation=`Average` && Field=`generic-field-0`
	* Data > Buckets > Add > X-AXIS > Aggregation=`Terms` && Field=`generic-field-1`' && 'Order by'=`Alphabetic` && 'Group other values in separate bucket'=`active`
	* 'Metrics & Axes' > Metrics > 'Chart type'=`Bar` > Update > Save=`KPI - Generic Area`
* Menu > Kibana > [Visualize](http://172.16.238.3:5601/app/kibana#/visualize) > Create Visualization > **Markdown**
	* Data > Markdown=`Generic Title`
	* Options > 'Base font size in points'=`35` > Update > Save=`KPI - Generic Markdown`
	
#### **3. Dashboard creation**, 
* Menu > Kibana > [Dashboard](http://172.16.238.3:5601/app/kibana#/dashboards) > **Create dashboard** > Add
	* 'Add panels' > Search... > `KPI - Generic Pie` && `KPI - Generic Tag Cloud` && `KPI - Generic Area` && `KPI - Generic Markdown`
	* Save > Title=`Generic Dashboard`
* Menu > Kibana > [Dashboard](http://172.16.238.3:5601/app/kibana#/dashboards) > Search... > `Generic Dashboard`=`active`
	* **Share** > Permalinks > **Copy link**

#### **4. Dashboard export and import**, 
* Menu > Management > Stack Management >  [Saved Objects](http://172.16.238.3:5601/app/kibana#/management/kibana/objects)
	* Search... > `Generic Dashboard` > **Export** > Export
	* **Import** > Import > `Generic Dashboard.ndjson` > Import > Done

