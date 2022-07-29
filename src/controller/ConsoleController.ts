
import {Controller, Get, Param} from "routing-controllers"
@Controller()
export default class ConsoleController {
    @Get("/")
    public index(@Param('id') id:string): string {
        console.log(id);
        return "hello world";
    }
}