import "reflect-metadata";
import { config } from "dotenv";
import { load } from "./loaders/load";
config();
load();
