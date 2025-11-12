import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
    myFirstGet(): object {
        return {
            service: 'Blog Backend API',
            function: 'basics get',
            message: 'My new Get'
        } 
      }
      mySecondGet(): object {
        return {
            service: 'Blog Backend API',
            function: 'basics get',
            message: 'My Second Get'
        } 
      }

      functionWithParameter(parameter: string): object {
        return {
            service: 'Blog Backend API',
            function: 'basics get with parameter',
            message: 'Funcion con parámetero',
            parameter: parameter
        } 
      }

      functionWithPost(parameter: object): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion post',
            message: 'Funcion con parámetero',
            parameter: parameter
        } 
      }

      updateWithPut(parameter: string,
        body: object
      ): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion put',
            message: 'Funcion con parámetro',
            parameter: parameter,
            body: body
        } 
      }

      updateWithPatch(parameter: string,
        body: object
      ): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion Patch',
            message: 'Funcion con parámetro',
            parameter: parameter,
            body: body
        } 
      }

      delete(parameter: string): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion Delete',
            message: 'Funcion para borrar',
            parameter: parameter,
        } 
      }

}
