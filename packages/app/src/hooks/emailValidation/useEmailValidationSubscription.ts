import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { createClient } from 'graphql-ws'
import { getSession } from 'next-auth/react'
import { EmailValidationEvent, EmailValidationEventResponse } from '@/types'
import log from 'loglevel'
import { config } from '@/config/configClient'

export const useEmailValidationSubscription = () => {
  const queryClient = useQueryClient()
  const [subscriptionData, setSubscriptionData] =
    useState<EmailValidationEvent | null>(null)

  useEffect(() => {
    let unsubscribe = () => {}

    const startSubscription = async () => {
      const session = await getSession()
      const token = session?.accessToken

      const client = createClient({
        url: config.api.graphql.wsUrl,
        connectionParams: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      })

      unsubscribe = client.subscribe(
        {
          query: `subscription {
            emailValidationEvent {
              type
              emailValidation {
                id
              }
            }
          }`,
        },
        {
          next: (response: EmailValidationEventResponse) => {
            response?.data?.emailValidationEvent &&
              setSubscriptionData(response.data.emailValidationEvent)
          },
          error: (err) => log.error(err),
          complete: () => log.debug('Subscription completed'),
        },
      )
    }

    startSubscription()

    return () => {
      unsubscribe()
    }
  }, [queryClient])

  return subscriptionData
}
