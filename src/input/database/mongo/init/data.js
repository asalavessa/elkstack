/**********************************************************************************************/
db = db.getSiblingDB('people');
db.names.insertMany([
	{'firstname': 'Eureka', 'lastname': 'Eurekason', 'country': '0001', 'imported': '114215072020'},
	{'firstname': 'Aaron', 'lastname': 'Aaronson', 'country': '0005', 'imported': '114215072020'},
	{'firstname': 'Paul', 'lastname': 'Paulson', 'country': '0002', 'imported': '114215072020'},
	{'firstname': 'Theodore', 'lastname': 'Theodoreson', 'country': '0003', 'imported': '114215072020'},
	{'firstname': 'Kirk', 'lastname': 'Kirkson', 'country': '0004', 'imported': '114215072020'},
	{'firstname': 'Fleming', 'lastname': 'Flemingson', 'country': '0005', 'imported': '114215072020'},
	{'firstname': 'Lawrence', 'lastname': 'Lawrenceson', 'country': '0004', 'imported': '114215072020'},
	{'firstname': 'Terry', 'lastname': 'Terryson', 'country': '0004', 'imported': '114215072020'},
	{'firstname': 'Rhodes', 'lastname': 'Rhodesson', 'country': '0004', 'imported': '114215072020'},
	{'firstname': 'Sullivan', 'lastname': 'Sullivanson', 'country': '0004', 'imported': '114215072020'},
	{'firstname': 'Henry', 'lastname': 'Henryson', 'country': '0005', 'imported': '114215072020'},
	{'firstname': 'May', 'lastname': 'Mayson', 'country': '0005', 'imported': '114215072020'},
	{'firstname': 'Clark', 'lastname': 'Clarkson', 'country': '0005', 'imported': '114215072020'},
	{'firstname': 'Katrina', 'lastname': 'Katrison', 'country': '0002', 'imported': '114215072020'},
	{'firstname': 'Mayers', 'lastname': 'Mayerson', 'country': '0003', 'imported': '114215072020'} ]);
db.countries.insertMany([
	{ 'code': '0001', 'country': 'Antarctica', 'phone_code': '', 'capital': 'Eureka', 'imported': '114215072020'},
	{ 'code': '0002', 'country': 'Angola', 'phone_code': '244', 'capital': 'Luanda', 'imported': '114215072020'},
	{ 'code': '0003', 'country': 'Argentina', 'phone_code': '54', 'capital': 'Buenos Aires', 'imported': '114215072020'},
	{ 'code': '0004', 'country': 'Solomon Islands', 'phone_code': '677', 'capital': 'Honiara', 'imported': '114215072020'},
	{ 'code': '0005', 'country': 'Swaziland', 'phone_code': '268','capital': 'Mbabane', 'imported': '114215072020'} ]);
db.createUser({ user: 'root', pwd: 'root', roles: [ { role: 'root', db: 'admin'} ]});
db.names.find({}, {'_id': 0, 'firstname': 1, 'lastname': 1, 'country': 1}).forEach(printjson);
db.countries.find({}, {'_id': 0, 'code': 1, 'country': 1, 'capital': 1, 'phone_code': 1}).forEach(printjson);
/**********************************************************************************************/
db = db.getSiblingDB('store');
db.products.insertMany([
	{'productid': 'a01', 'quantityid': 'Eureka', 'imported': '114215072020'},
	{'productid': 'b02', 'quantityid': '0db', 'imported': '114215072020'} ]);
db.createUser({ user: 'root', pwd: 'root', roles: [ { role: 'root', db: 'admin'} ]});
db.products.find({}, {'_id': 0, 'productid': 1, 'quantityid': 1}).forEach(printjson);
/**********************************************************************************************/
db = db.getSiblingDB('PrimeiraLiga');
db.Clubes.insertMany([
	{'Clube': 'Desportivo das Aves', 'Cidade': 'Vila das Aves', 'imported': '114215072020'},
	{'Clube': 'Belenenses SAD', 'Cidade': 'Lisboa', 'imported': '114215072020'},
	{'Clube': 'Benfica', 'Cidade': 'Lisboa', 'imported': '114215072020'},
	{'Clube': 'Boavista', 'Cidade': 'Porto', 'imported': '114215072020'},
	{'Clube': 'SC Braga', 'Cidade': 'Braga', 'imported': '114215072020'},
	{'Clube': 'Gil Vicente', 'Cidade': 'Barcelos', 'imported': '114215072020'},
	{'Clube': 'Famalic??o', 'Cidade': 'Vila Nova de Famalic??o', 'imported': '114215072020'},
	{'Clube': 'Mar??timo', 'Cidade': 'Funchal', 'imported': '114215072020'},
	{'Clube': 'Moreirense', 'Cidade': 'Moreira de C??negos', 'imported': '114215072020'},
	{'Clube': 'Pa??os de Ferreira', 'Cidade': 'Pa??os de Ferreira', 'imported': '114215072020'},
	{'Clube': 'Portimonense', 'Cidade': 'Portim??o', 'imported': '114215072020'},
	{'Clube': 'FC Porto', 'Cidade': 'Porto', 'imported': '114215072020'},
	{'Clube': 'Rio Ave', 'Cidade': 'Vila do Conde', 'imported': '114215072020'},
	{'Clube': 'Santa Clara', 'Cidade': 'Ponta Delgada', 'imported': '114215072020'},
	{'Clube': 'Sporting', 'Cidade': 'Lisboa', 'imported': '114215072020'},
	{'Clube': 'Tondela', 'Cidade': 'Tondela', 'imported': '114215072020'},
	{'Clube': 'Vit??ria de Guimar??es', 'Cidade': 'Guimar??es', 'imported': '114215072020'},
	{'Clube': 'Vit??ria de Set??bal', 'Cidade': 'Set??bal', 'imported': '114215072020'}  ]);
db.Estadios.insertMany([
	{'Clube': 'Desportivo das Aves',  'Estadio': 'Est??dio do Desportivo das Aves', 'Lotacao': '8560', 'imported': '114215072020'},
	{'Clube': 'Belenenses SAD', 'Estadio': 'Est??dio Nacional do Jamor', 'Lotacao': '37500', 'imported': '114215072020'},
	{'Clube': 'Benfica', 'Estadio': 'Est??dio da Luz', 'Lotacao': '65000', 'imported': '114215072020'},
	{'Clube': 'Boavista', 'Estadio': 'Est??dio do Bessa', 'Lotacao': '30000', 'imported': '114215072020'},
	{'Clube': 'SC Braga', 'Estadio': 'Est??dio Municipal de Braga', 'Lotacao': '30000', 'imported': '114215072020'},
	{'Clube': 'Gil Vicente', 'Estadio': 'Est??dio Cidade de Barcelos', 'Lotacao': '12500', 'imported': '114215072020'},
	{'Clube': 'Famalic??o', 'Estadio': 'Est??dio Municipal 22 de Junho', 'Lotacao': '5300', 'imported': '114215072020'},
	{'Clube': 'Mar??timo', 'Estadio': 'Est??dio do Mar??timo (Barreiros)', 'Lotacao': '10600', 'imported': '114215072020'},
	{'Clube': 'Moreirense', 'Estadio': 'Est??dio Comendador Joaquim de Almeida Freitas', 'Lotacao': '6153', 'imported': '114215072020'},
	{'Clube': 'Pa??os de Ferreira', 'Estadio': 'Est??dio da Mata Real', 'Lotacao': '9000', 'imported': '114215072020'},
	{'Clube': 'Portimonense', 'Estadio': 'Est??dio Municipal de Portim??o', 'Lotacao': '9544', 'imported': '114215072020'},
	{'Clube': 'FC Porto', 'Estadio': 'Est??dio do Drag??o', 'Lotacao': '50000', 'imported': '114215072020'},
	{'Clube': 'Rio Ave', 'Estadio': 'Est??dio dos Arcos', 'Lotacao': '9065', 'imported': '114215072020'},
	{'Clube': 'Santa Clara', 'Estadio': 'Est??dio de S??o Miguel', 'Lotacao': '12500', 'imported': '114215072020'},
	{'Clube': 'Sporting', 'Estadio': 'Est??dio Jos?? Alvalade', 'Lotacao': '50000', 'imported': '114215072020'},
	{'Clube': 'Tondela', 'Estadio': 'Est??dio Jo??o Cardoso', 'Lotacao': '5000', 'imported': '114215072020'},
	{'Clube': 'Vit??ria de Guimar??es', 'Estadio': 'Est??dio D. Afonso Henriques', 'Lotacao': '30000', 'imported': '114215072020'},
	{'Clube': 'Vit??ria de Set??bal', 'Estadio': 'Est??dio do Bonfim', 'Lotacao': '17000', 'imported': '114215072020'}  ]);
db.Vencedores.insertMany([	
	{'Ano': '2000', 'Campeao': 'Sporting', 'imported': '114215072020'},
	{'Ano': '2001', 'Campeao': 'Boavista', 'imported': '114215072020'},
	{'Ano': '2002', 'Campeao': 'Sporting', 'imported': '114215072020'},
	{'Ano': '2003', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2004', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2005', 'Campeao': 'Benfica', 'imported': '114215072020'},
	{'Ano': '2006', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2007', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2008', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2009', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2010', 'Campeao': 'Benfica', 'imported': '114215072020'},
	{'Ano': '2011', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2012', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2013', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2014', 'Campeao': 'Benfica', 'imported': '114215072020'},
	{'Ano': '2015', 'Campeao': 'Benfica', 'imported': '114215072020'},
	{'Ano': '2016', 'Campeao': 'Benfica', 'imported': '114215072020'},
	{'Ano': '2017', 'Campeao': 'Benfica', 'imported': '114215072020'},
	{'Ano': '2018', 'Campeao': 'FC Porto', 'imported': '114215072020'},
	{'Ano': '2019', 'Campeao': 'Benfica', 'imported': '114215072020'} ]);
db.createUser({ user: 'root', pwd: 'root', roles: [ { role: 'root', db: 'admin'} ]});
db.Clubes.find({}, {'_id': 0, 'Clube': 1, 'Cidade': 1}).forEach(printjson);
db.Estadios.find({}, {'_id': 0, 'Clube': 1, 'Estadio': 1, 'Lotacao': 1}).forEach(printjson);
db.Vencedores.find({}, {'_id': 0, 'Ano': 1, 'Campeao': 1}).forEach(printjson);
/**********************************************************************************************/
/* Insert a new database code, here! */

/**********************************************************************************************/

