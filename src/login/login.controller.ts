import { Controller, Post, Get, Body } from '@nestjs/common';
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController {

	constructor(private loginService: LoginService) {

	}

	@Post()
	async login(@Body() Body) {
		const data = await this.loginService.validateLogin(Body);
		return data;
	}
}
