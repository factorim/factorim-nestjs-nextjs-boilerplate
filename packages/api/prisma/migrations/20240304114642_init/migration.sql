-- CreateEnum
CREATE TYPE "UserAuth" AS ENUM ('CREDENTIALS', 'GOOGLE');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING');

-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('en', 'fr');

-- CreateEnum
CREATE TYPE "EmailType" AS ENUM ('SIGN_UP', 'RESET_PASSWORD', 'CHANGE_EMAIL', 'DELETE_ACCOUNT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastActiveAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auth" "UserAuth" NOT NULL DEFAULT 'CREDENTIALS',
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "roles" "UserRole"[] DEFAULT ARRAY['USER']::"UserRole"[],
    "status" "UserStatus" NOT NULL DEFAULT 'PENDING',
    "lang" "Lang" NOT NULL DEFAULT 'en',
    "theme" TEXT NOT NULL DEFAULT 'light',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "authorId" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_validations" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "EmailType" NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT,
    "checked" INTEGER NOT NULL DEFAULT 0,
    "claimed" BOOLEAN NOT NULL DEFAULT false,
    "lang" "Lang" NOT NULL DEFAULT 'en',

    CONSTRAINT "email_validations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_templates" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "EmailType" NOT NULL,
    "subject" TEXT NOT NULL,
    "lang" "Lang" NOT NULL DEFAULT 'en',
    "html" TEXT NOT NULL,
    "design" JSONB NOT NULL,

    CONSTRAINT "email_templates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "email_validations_token_key" ON "email_validations"("token");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
