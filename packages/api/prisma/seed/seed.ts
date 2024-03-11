import { Lang, PrismaClient, UserRole, UserStatus } from '@prisma/client'
import { users } from './data/users.data'
import { posts } from './data/posts.data'
import { emailTemplates } from './data/emailTemplates.data'

const prisma = new PrismaClient()

async function seedUsers() {
  for (const userData of users) {
    const lang = Lang[userData.lang as keyof typeof Lang]
    const roles = userData.roles.map(
      (role: string) => UserRole[role as keyof typeof UserRole],
    )

    const userCreated = await prisma.user.create({
      data: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        password: userData.password,
        lang,
        roles,
        status: userData.status as UserStatus,
      },
    })
    console.log('User seeded:', userCreated.id)
  }
}

async function seedPosts() {
  for (const post of posts) {
    const postCreated = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        author: {
          connect: {
            id: post.userId,
          },
        },
      },
    })
    console.log('Post seeded:', postCreated.id)
  }
}

async function seedEmailTemplates() {
  for (const emailTemplate of emailTemplates) {
    const chainCreated = await prisma.emailTemplate.create({
      data: {
        type: emailTemplate.type,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        design: emailTemplate.design,
        lang: Lang[emailTemplate.lang as keyof typeof Lang],
      },
    })
    console.log('Email template seeded:', chainCreated.id)
  }
}

async function main() {
  const userExists = await prisma.user.findFirst()
  if (!userExists) {
    await seedUsers()
  } else {
    console.log('Users already seeded')
  }

  const postExists = await prisma.post.findFirst()
  await seedPosts()
  if (!postExists) {
    await seedPosts()
  } else {
    console.log('Users already seeded')
  }

  const emailTemplateExists = await prisma.emailTemplate.findFirst()
  if (!emailTemplateExists) {
    await seedEmailTemplates()
  } else {
    console.log('Email Templates already seeded')
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
