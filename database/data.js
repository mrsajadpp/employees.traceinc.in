const db = require('./config')
const COLLECTIONS = require('./collection');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    findEmployee: (uid) => {
        try {
            return new Promise(async (resolve, reject) => {
                if (db) {
                    /*await db.get().collection(COLLECTIONS.EMPLOYEES).insertOne({
                        "uid": "TRIC100",
                        "name": "Sajad pp",
                        "dob": "21/5/2007",
                        "position": ["FOUNDER", "CEO"]
                    }).then((data) => {
                        console.log(data)
                    })*/
                    resolve(await db.get().collection(COLLECTIONS.EMPLOYEES).findOne({ uid: uid.toUpperCase() }));
                }
            })
        } catch (err) {
            console.error(err)
        }
    }
}
