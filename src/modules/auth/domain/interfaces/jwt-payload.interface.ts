export interface JwtPayload {
  /** ID do usuário */
  sub: string;
  /** Email do usuário */
  email: string;
  /** Role/papel do usuário */
  role: string;
  /** Flag para verificar se o usuário é head */
  isHead: boolean;
  /** Flag para verificar se vendedor externo tem líder interno */
  hasInternalLeader?: boolean;
  /** Timestamp de quando o token foi emitido (opcional) */
  iat?: number;
  /** Timestamp de quando o token expira (opcional) */
  exp?: number;
}
