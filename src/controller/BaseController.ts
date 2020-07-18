import { Repository, getRepository } from "typeorm";
import { Request } from "express";
import { BaseValidation } from "../entity/BaseValidation";


export abstract class BaseController<GENERIC_CLASS> extends BaseValidation {
   private _repository: Repository<GENERIC_CLASS>;

   constructor(entity: any) {
      super();
      this._repository = getRepository<GENERIC_CLASS>(entity);
   }

   async all() {
      return this._repository.find({
         where: {
            isActive: true
         }
      });
   }

   async one(request: Request) {
      return this._repository.findOne(request.params.id);
   }

   async save(model: any) {
      if (model.uid) {
         let _modelRegister = await this._repository.findOne(model.uid);         
         if (_modelRegister) Object.assign(_modelRegister, model);
      }
      if (this.valid()) {
         return this._repository.save(model);
      }
      return {
         status: 400,
         errors: this.allNotifications
      }
   }

   async remove(request: Request) {
      let _modelRegister: any;
      _modelRegister = await this._repository.findOne(request.params.id);
      if (_modelRegister) _modelRegister.isActive = false;
      return await this._repository.save(_modelRegister);
   }
}