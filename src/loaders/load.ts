import Database from './db-connection';
import Server from './server'

export const load = () => {
    Database.connect().then(connection => {
        Server.init(connection.getConnection)
    },
    error => {
        console.log(error)
    })
}
