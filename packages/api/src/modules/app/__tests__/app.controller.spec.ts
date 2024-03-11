import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'

import { AppController } from '../app.controller'
import { AppService } from '../app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const configServiceMock = {
      get: jest.fn((key: string) => {
        if (key === 'name') return 'Hello World'
        if (key === 'version') return '1.0.0'
      }),
    }

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: ConfigService,
          useValue: configServiceMock,
        },
      ],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getWelcome()).toBe('Hello World - v1.0.0')
    })
  })
})
