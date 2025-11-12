import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  health(): object {
    return {
      service: 'Blog Backend Api',
      status: 'Online' 
    };
  }
}
