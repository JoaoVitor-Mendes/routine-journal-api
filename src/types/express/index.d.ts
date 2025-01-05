import { UserRequest } from '../../middleware/authMiddleware';

declare global {
  namespace Express {
    export interface Request {
      user?: {
        userId: number;
        username: string;
      };
    }
  }
}
