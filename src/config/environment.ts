import envalid from 'envalid';
import { DB_TYPE } from '../types/db_type'
const { str, port, makeValidator } = envalid;

interface IEnvironment {
    PORT: number;
    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    TOKEN_TYPE: string;
}
const db_type_enum = makeValidator(value => {
    return (<any>Object).values(DB_TYPE).includes(value)
})
export default envalid.cleanEnv<IEnvironment> (
    process.env,
    {
        PORT: port({default: 8123}),
        DB_TYPE: str(),
        DB_HOST: str({default: 'localhost'}),
        DB_PORT: port({default: 27017}),
        DB_USERNAME: str({default: ''}),
        DB_PASSWORD: str({default: ''}),
        DB_DATABASE: str(),
        TOKEN_TYPE: str({default: "Bearer"})
    }
)
