import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export abstract class CreateAuthorRequest {
  @IsUUID('4', { message: 'ID deve ser um UUID' })
  @IsString({ message: 'ID deve ser uma string' })
  @IsNotEmpty({ message: 'ID é obrigatório' })
  id: string;

  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsString({ message: 'Usuário deve ser uma string' })
  @IsNotEmpty({ message: 'Usuário é obrigatório' })
  username: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @IsString({ message: 'E-mail deve ser uma string' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;
}
