import envalid from "envalid";
const { str, port } = envalid;

interface IEnvironment {
    PORT: number;
    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    TOKEN_TYPE: string;
    JWT_SECRET_KEY: string;
}

export default envalid.cleanEnv<IEnvironment>(process.env, {
    PORT: port({ default: 8123 }),
    DB_TYPE: str({ default: "mongodb" }),
    DB_HOST: str({ default: "localhost" }),
    DB_PORT: port({ default: 27017 }),
    DB_USERNAME: str({ default: "root" }),
    DB_PASSWORD: str({ default: "password" }),
    DB_DATABASE: str({ default: "test" }),
    TOKEN_TYPE: str({ default: "Bearer" }),
    JWT_SECRET_KEY: str({ default: "asdftamm" }),
});
