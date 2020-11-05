import Database from './db-connection';
import Server from './server'

export const load = async () => {
try {
    await Database.connect()
    Server.init()
} catch (e){
    console.log(e)
}
}
