var express = require('express'); 
var app  = express();
var pg = require('pg');
var port     = process.env.PORT || 8090;


//Configurate
app.use(express.static(__dirname+'/public'));
app.listen(port);
var infoDB; 

//postrgesql

var client = new pg.Client(); 

var config = {
	user: 'docker', 
	database: 'docker',
	password: 'docker',
	host: '172.17.0.1', 
	port: 5432,
	max: 20, 
	idleTimeoutMillis: 90000
};

var pool = new pg.Pool(config);

pool.connect(function (err, client, done){
	if(err){
		return console.error('error fetching client from pool', err);
	}
	client.query('CREATE TABLE devices(id integer NOT NULL PRIMARY KEY, device_name  varchar(10) NOT NULL UNIQUE);', function (err, result){
		done(); 
		if(err){
			return console.error('error running query create', err);
		}
		//console.log(result.rows[0]);
		//infoDB = result.rows[0];
	});
	client.query('INSERT INTO devices (id, device_name) VALUES (15 , '+"'express'"+');', function (err, result){
		done(); 
		if(err){
			return console.error('error running query insert', err);
		}
		//console.log(result.rows[0]);
		//infoDB = result.rows[0];
	});
	client.query('SELECT * FROM devices', function (err, result){
		done(); 
		if(err){
			return console.error('error running query select', err);
		}
		console.log(result.rows[0]);
		infoDB = result.rows[0];
	});
});

app.get('/db', function(req, res) {
  console.log("entra")
  var message = infoDB.id + " " + infoDB.device_name;
  res.send(message);
});

console.log('The App runs on port ' + port);
