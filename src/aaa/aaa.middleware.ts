import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AaaMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('before', req.url);
    next();
    console.log('after');
  }
}
