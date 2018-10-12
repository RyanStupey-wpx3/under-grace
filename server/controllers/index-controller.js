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

        //////////////////////////
        // still figuring out state auto update after blog post
        // figured undo previous changed to posttodb and use that function to force a rerender 
    
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
            const {post_id, post_user, date, title, mainContent} = req.body;
            console.log('req.body', req.body)
            dbInstance.update_post([post_user, date, title, mainContent, post_id])
            .then((prods) =>  {
                console.log('prods', prods)
                res.status(200).send(prods)
        })
            .catch((err) => res.status(500).send(err));
        },
        delete_post:(req, res, next) => {
            const dbInstance = req.app.get('db')
            const {params} = req;
            
    
            dbInstance.delete_post([params.id])
            .then((blogs) => res.status(200).send(blogs) )
            .catch((err) => res.status(500).send(err) );
        },
        get_test: (req, res, next) => {
            const dbInstsance = req.app.get('db');
            
            dbInstsance.get_test()
            .then(products => res.status(200).send(products))
            .catch((err) => console.log('err', err));
        }
    
    };