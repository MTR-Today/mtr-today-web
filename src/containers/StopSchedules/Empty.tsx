import { Box, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { IoMdTrain } from 'react-icons/io'

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <Stack alignItems="center" justifyContent="center" minH="180px">
      <Text fontSize="60">
        <IoMdTrain />
      </Text>
      <Box>{t('no_schedule')}</Box>
    </Stack>
  )
}
