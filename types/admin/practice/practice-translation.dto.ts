import { PracticeTranslationMainDto } from '~/types/admin'
import { SeoDto } from '~/types/common'

export type PracticeTranslationDto = {
  seo: SeoDto
  main: PracticeTranslationMainDto
}
