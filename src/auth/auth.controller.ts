import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() authcredentiialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authcredentiialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authcredentiialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authcredentiialsDto);
  }
}
