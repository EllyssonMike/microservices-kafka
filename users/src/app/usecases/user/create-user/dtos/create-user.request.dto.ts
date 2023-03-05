import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export abstract class CreateUserRequest {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  last_name: string;

  @IsNotEmpty({ message: 'O nome de usuário é obrigatório.' })
  username: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  password: string;

  @IsNotEmpty({ message: 'A confirmação de senha é obrigatória.' })
  @Match('password', { message: 'As senhas não conferem.' })
  confirm_password: string;

  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;

  @IsNotEmptyObject(
    { nullable: false },
    { message: 'O perfil do usuário é obrigatório.' },
  )
  profile: {
    bio: string;
  };
}
