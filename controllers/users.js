const usersGet = (req, res) => {
    
    const {q,nombre = "No name", apikey, page = 1, limit} = req.query;
    
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usersPut = (req, res) =>{
    
    const {id} = req.param;

    res.json({
        msg: "put API - usersPut",
        id
    });
};

const usersPost = (req,res) =>{

    const {nombre, edad} = req.body;

    res.json({
        msg: "post API - usersPost",
        nombre,
        edad
    });
};

const usersDelete = (req,res) =>{
    res.json({
        msg: "delete Api - usersDelete",
    });
};

module.exports = {
    usersDelete,
    usersGet,
    usersPost,
    usersPut
}