module.exports = {
    //controllers purpose is to controll data flow from DB
        create:(req, res, next) => {
            const dbInstsance = req.app.get('db');
            let {prod_name, prod_price} = req.body
    
            dbInstsance.create_product([prod_name, prod_price])
            .then(test_datanew => res.status(200).send(test_datanew))
            .catch((err) => {
                console.log('err', err)
            });
        },
    
        getOne:(req, res) => {
            const dbInstsance = req.app.get('db');
            const {params} = req;
    
            dbInstsance.read_product([params.id])
            .then( product => res(200).send(product))
            .catch(()=> res.status(500).send());
        },
    
        getBins:(req, res) => {
            const dbInstsance = req.app.get('db');
    
            dbInstsance.get_bins()
            .then(bins => res.status(200).send(bins))

            .catch((err) => console.log('err', err));
        },
    
        update:(req, res, next) => {
            const dbInstance = req.app.get('db');
            const {params, query} = req;
    
            dbInstance.update_products([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
        },
        delete:(req, res, next) => {
            const dbInstance = req.app.get('db')
            const {params} = req;
            
    
            dbInstance.delete_products([params.id])
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