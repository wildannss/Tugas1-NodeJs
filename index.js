let express = require('express');
let app = express();
let DataSiswa = require('./DataSiswa');
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));
app.use('/DataSiswa', DataSiswa);
app.listen(port);