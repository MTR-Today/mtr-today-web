import { TFunction } from 'i18next'

export const menuMap = (t: TFunction) => [
  {
    name: t('menu.arrival'),
    path: '/' as const,
  },
  {
    name: t('menu.fares'),
    path: '/fares' as const,
  },
]
