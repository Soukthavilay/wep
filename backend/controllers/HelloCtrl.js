

const helloctrl = {
    getHello : (res,req)=>{
        try {
            console.log('Hello World!');
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = helloctrl;