import { PracticeTranslationDto } from '~/types/admin'

export interface PracticeDto {
  slug: string
  status: boolean
  children: string[]
  uk: PracticeTranslationDto
  ru: PracticeTranslationDto
  createdAt?: number | null
  updatedAt?: number | null
}
