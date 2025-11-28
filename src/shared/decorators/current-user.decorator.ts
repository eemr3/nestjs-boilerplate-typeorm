import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from '../../modules/auth/domain/interfaces/jwt-payload.interface';

export interface RequestWithUser extends Request {
  user: JwtPayload;
}

/**
 * Decorator para extrair o usuário atual da requisição
 *
 * @example
 * // Obter o usuário completo
 * @Get('profile')
 * @UseGuards(JwtGuard)
 * async getProfile(@CurrentUser() user: JwtPayload) {
 *   return user;
 * }
 *
 * @example
 * // Obter apenas o ID do usuário
 * @Get('my-orders')
 * @UseGuards(JwtGuard)
 * async getMyOrders(@CurrentUser('sub') userId: string) {
 *   return this.ordersService.findByUserId(userId);
 * }
 *
 * @example
 * // Obter apenas o email do usuário
 * @Post('update-profile')
 * @UseGuards(JwtGuard)
 * async updateProfile(@CurrentUser('email') email: string, @Body() data: any) {
 *   return this.userService.updateByEmail(email, data);
 * }
 */
export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    // Se não foi especificada uma propriedade, retorna o usuário completo
    if (!data) {
      return user;
    }

    // Se foi especificada uma propriedade, retorna apenas ela
    return user?.[data];
  },
);
