const conexion = require('../server/server');
const util = require('util');
const query = util.promisify(conexion.query).bind(conexion);


exports.verificar = (req, res)=>{
   try {
    const {celd, pass} = req.body;
    console.log(celd, pass)

    query('SELECT * FROM admin WHERE cedula = ?', [celd], (err, result)=>{
            if(result.length > 0){
            if(pass == result[0].passw){
                 res.render('index', {ok: true})
            }else{
                console.log(error);
                res.render('index', {ok: false})
            }
            }else{
                console.log(err);
                res.render('index', {ok: false})
            }
    })

   } catch (error) {
    
    console.log(error);

   }
}

exports.verificar = (req, res)=>{
    try {
     const {celd, pass} = req.body;
     console.log(celd, pass);
     if(celd == '' || pass == ''){
        res.sen('vacio')
     }
     query('SELECT * FROM admin WHERE cedula = ?', [celd], (err, result)=>{
             if(result.length > 0){
             if(pass == result[0].passw){
                res.send('OK'); 
             }else{
                res.send('err'); 
             }
             }else{
                res.send('err'); 
             }
     })
    } catch (error) {
     console.log(error);
     res.status(500).send('Error en el servidor'); // enviar una respuesta de error al frontend
    }
 }