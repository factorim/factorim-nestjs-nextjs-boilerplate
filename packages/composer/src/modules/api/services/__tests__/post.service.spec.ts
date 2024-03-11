import { Test, TestingModule } from '@nestjs/testing'

import { CreatePostMutation } from '../../inputs/post.input'
import { ApiPostService } from '../post.service'
import { ApiService } from '../../api.service'

const mockedPost = { id: '123' }
const mockedPostConnection: CreatePostMutation = {
  data: {
    title: 'news title',
    content: 'news content',
  },
  relation: {
    userId: 'clszfelsa000114gnc7w4ibkx',
  },
}

describe('ApiPostService', () => {
  let apiPostService: ApiPostService
  let apiService: ApiService

  beforeEach(async () => {
    const apiServiceMock = {
      execute: jest.fn(() => {
        return Promise.resolve(mockedPost)
      }),
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiPostService,
        {
          provide: ApiService,
          useValue: apiServiceMock,
        },
      ],
    }).compile()

    apiPostService = module.get<ApiPostService>(ApiPostService)
    apiService = module.get<ApiService>(ApiService)
  })

  it('should create a post and return its id', async () => {
    const createdPost = await apiPostService.create(
      mockedPostConnection.data,
      mockedPostConnection.relation,
    )

    expect(apiService.execute).toHaveBeenCalledWith(
      expect.anything(),
      mockedPostConnection,
    )

    expect(createdPost).toEqual(mockedPost)
  })
})
