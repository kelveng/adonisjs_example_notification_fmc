
export default class FirebaseService {
    constructor(Config) {

        const FirebaseAdmin = require('firebase-admin')
        const {FirebaseConfig} = Config

        FirebaseAdmin.initializeApp({
            credential: FirebaseAdmin.credential.cert(FirebaseConfig)
        })

        return FirebaseAdmin
    }
}