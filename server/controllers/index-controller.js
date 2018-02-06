module.exports = {
    //controllers purpose is to controll data flow from DB
        create:(req, res, next) => {
            const dbInstsance = req.app.get('db');
    
            dbInstsance.create_products()
            .then(res(200).send(products))
            .catch(res(500).send());
        },
    
        getOne:(req, res, next) => {
            const dbInstsance = req.app.get('db');
            const {params} = req;
    
            dbInstsance.read_product([params.id])
            .then( product => res(200).send(product))
            .catch(()=> res.status(500).send());
        },
    
        getAll:(req, res, next) => {
            const dbInstsance = req.app.get('db');
    
            dbInstsance.read_products()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send());
        },
    
        update:(req, res, next) => {
            const dbInstance = req.app.get('db');
            const {params, query} = req;
    
            dbInstance.update_product([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
        },
        delete:(req, res, next) => {
            const dbInstance = req.app.get('db')
            const {params} = req;
            
    
            dbInstance.delete_product([params.id])
            .then(() => res.status(200).send() )
            .catch(() => res.status(200).send() );
        },
        get_test: (req, res, next) => {
            const dbInstsance = req.app.get('db');
            
            dbInstsance.get_test()
            .then(products => res.status(200).send(products))
            .catch((err) => console.log('err', err));
        }
    
    };