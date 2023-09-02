import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

// const AuthenticateBodySchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// })

// type AuthenticateBodySchema = z.infer<typeof AuthenticateBodySchema>

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  // @HttpCode(201)
  // @UsePipes(new ZodValidationPipe(AuthenticateBodySchema))
  async handle() {
    const token = this.jwt.sign({
      sub: 'user-id',
    })

    return token
  }
}
