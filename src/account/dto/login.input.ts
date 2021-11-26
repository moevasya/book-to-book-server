import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => String)
  emailOrPhone: string;

  @Field(() => String)
  password: string;
}
