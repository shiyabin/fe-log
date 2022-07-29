import {configure,getLogger} from "log4js";
configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" },console:{type:'file',filename:""} },
  categories: { default: { appenders: ["cheese"], level: "error" } },
})
export const consoleLogger = getLogger("console");
export default getLogger()