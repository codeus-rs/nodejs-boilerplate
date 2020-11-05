import Database from './db-connection';
import Server from './server'

export const load = () => {
    Database.connect().then(() => {
        Server.init()
    },
    error => {
        console.log(error)
    })
}
