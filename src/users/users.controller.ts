import { Controller, Get, Post, Patch, Put, Delete } from '@nestjs/common'

@Controller('users')
export class UsersController {

  @Get()
  public getUsers() {
    return 'You sent a get request to users endpoint'
  }
}
