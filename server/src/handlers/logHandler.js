
const loginHandler = (req, res)=>{
    try {
        const {username, password} = req.body
        if(username !== 'prueba.pass@gmail.com' || password !== "pruebaSeleccion"){
            return res.status(404).json({msg:"Corrige los datos"})
        }
        res.status(200).json({msg:"Welcome"})
    } catch (error) {
        req.status(404).json({error:error.message})
    }
}

module.exports = loginHandler