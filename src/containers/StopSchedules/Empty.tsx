import { Box, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { IoMdTrain } from 'react-icons/io'

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <Stack minH="180px" justifyContent="center" alignItems="center">
      <Text fontSize="60">
        <IoMdTrain />
      </Text>
      <Box>{t('no_schedule')}</Box>
    </Stack>
  )
}
