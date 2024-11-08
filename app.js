const express = require('express'); //importar express
const path = require('path'); 
const color= require('colors'); // importar colors
const app = express();
let ejs = require('ejs');   //importar ejs
const mysql = require('mysql2'); // Importar el paquete mysql2
const port = 3050;


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'uziel',
    database: 'userdb'
});

app.get('/', (req, res) => {
    res.render("ingresar");
    console.log("Estas en el Inicio de sesion".blue)
});


app.post('/login', (req, res) => {
    const { usuario, clave } = req.body;

    // Consultar la base de datos para verificar las credenciales
    const query = 'SELECT * FROM usuarios WHERE nombre1 = ? AND clave = ?';
    db.query(query, [usuario, clave], (err, results) => {
        if (err) {
            console.error("Error al consultar la base de datos:".red, err.message);
            return res.status(500).send("Error del servidor");
        }

        if (results.length > 0) {
            console.log("Inicio de sesión exitoso".green);
            res.render("bienvenido", { usuario: results[0].nombre1 });
        } else {
            console.log("Usuario o contraseña incorrectos".red);
            res.send("Usuario o contraseña incorrectos");
        }
    });
});
// en
app.post('/datos', (req, res) => {
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(query, ['uzieljose10@gmail.com'], (err, results) => {
        if (err) {
            console.error("Error al consultar la base de datos:".red, err.message);
            return res.status(500).send("Error del servidor");
        }
        
        if (results.length > 0) {
            res.render("datos", { datosUsuario: results[0] });
        } else {
            res.send("Datos no encontrados");
        }
    });
    console.log("estas viendo los datos personales".brightRed)
});
// por si no existe una ruta
app.get('*', (req, res) => {
    res.status(404).send("Página no encontrada");
});

app.listen(port, function() {
    console.log(`Listening on http://localhost:${port}`.magenta);
});
