const ctrl = require('./index-controller');
const massive = require('massive');


require('dotenv').config();

let db;


function scrubDb(){
    return db.delete_post()
}

beforeAll(() => {
    return massive(process.env.TEST_CONNECTION_STRING)
    .then((database) => {db = database})
})

test('gets posts', done => {
    return db.create_post(['ryan.stupey@gmail.com', '12/13/18', 'bild your own house', 'siju soi j v oi j jsfj ofi ij jij ij jioj oijo ji ijji oijdf; jpofjiosifj ok oi joifj', 'vckjvdfj.com'])
    .then(() => {
        return get_posts()
        .then((posts) => {
            expect(posts[0]).toBeGreaterThan(0)
        })
    })


let testDidPass = false 

const req = {
    app: {
        get: () => db
    }
}

const res = {
    status = () => {
        testDidPass = true;
        expect(testDidPass).toBe(true)
        done()
        return {
            json: () => {}
        }
    }
}

ctrl.getPosts(req, res)

})