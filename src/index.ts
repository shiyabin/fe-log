import config from "@/config";
import "reflect-metadata";
import {createKoaServer} from "routing-controllers";
import ConsoleController from "./controller/ConsoleController";
const app=createKoaServer({
	controllers:[ConsoleController]
})

app.listen(config.server.port);

