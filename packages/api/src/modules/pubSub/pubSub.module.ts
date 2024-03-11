import { Global, Module } from '@nestjs/common'
import { PubSub } from 'graphql-subscriptions'

@Global()
@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(), // Directly providing the instance
    },
  ],
  exports: ['PUB_SUB'],
})
export class PubSubModule {}
