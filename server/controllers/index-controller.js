module.exports = {
    //controllers purpose is to controll data flow from DB
        createPosts:(req, res, next) => {
            const dbInstsance = req.app.get('db');
            let {post_user, post_date, title, main_content, graphic} = req.body
    
            dbInstsance.create_post([post_user, post_date, title, main_content, graphic])
            .then(post => res.status(200).send(post))
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
    
        getPosts:(req, res) => {
            const dbInstsance = req.app.get('db');
    
            dbInstsance.get_posts()
            .then(posts => res.status(200).send(posts)).catch((err) => console.log('err', err));
        },
    
        update:(req, res, next) => {
            const dbInstance = req.app.get('db');
            const {params, query} = req;
    
            dbInstance.update_products([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
        },
        delete_post:(req, res, next) => {
            const dbInstance = req.app.get('db')
            const {params} = req;
            
    
            dbInstance.delete_post([params.id])
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