import { User } from "../entity/User";
import { BaseController } from './BaseController';
import { Request } from 'express';

export class UserController extends BaseController<User>{

   constructor() {
      super(User);
   }

   async save(request: Request) {
      let _user = <User>request.body;
      super.isRequired(_user.nome, 'informe nome');
      super.isRequired(_user.nick, 'informe o nick');
      super.isRequired(_user.email, 'informe o email');
      super.isRequired(_user.password, 'informe a senha');
      super.isRequired(_user.cidade, 'informe a cidade');
      super.isRequired(_user.bairro, 'informe o bairro');
      super.isRequired(_user.uf, 'informe o estado');
      super.isRequired(_user.rua, 'informe a rua');
      super.isRequired(_user.numero, 'informe o numero');
      return super.save(_user);
   }

}