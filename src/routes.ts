import { ChurrascoController } from './controller/ChurrascoController';
import { UserController } from "./controller/UserController";

export const Routes = [
   { method: "get", route: "/users", controller: UserController, action: "all" },
   { method: "get", route: "/users/:id", controller: UserController, action: "one" },
   { method: "post", route: "/users", controller: UserController, action: "save" },
   { method: "delete", route: "/users/:id", controller: UserController, action: "remove" },

   { method: "get", route: "/churrascos", controller: ChurrascoController, action: "all" },
   { method: "get", route: "/churrascos/:id", controller: ChurrascoController, action: "one" },
   { method: "post", route: "/churrascos", controller: ChurrascoController, action: "save" },
   { method: "delete", route: "/churrascos/:id", controller: ChurrascoController, action: "remove" }

];