import { PrismaClient } from '@prisma/client'

export type EventoEvent = {
  id: number
  name: string
  slug: string
  city: string
  location: string
  date: Date
  organizerName: string
  imageUrl: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export const prisma = new PrismaClient() 