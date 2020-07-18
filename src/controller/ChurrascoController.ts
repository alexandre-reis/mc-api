import { BaseController } from "./BaseController";
import { Request } from "express";
import Churrasco from '../entity/Churrasco'

export class ChurrascoController extends BaseController<Churrasco>{
   constructor() {
      super(Churrasco);
   }

   async save(request: Request) {
      let _Churrasco = <Churrasco>request.body;
      super.isRequired(_Churrasco.descricao, 'Informe a descricao!');
      super.isRequired(_Churrasco.id_usuario, 'Informe o usuário!');
      super.isRequired(_Churrasco.valor_total, 'Informe o valor total!');      
      return super.save(_Churrasco);
   }
}
