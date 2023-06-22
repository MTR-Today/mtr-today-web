import { Box, IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ImEnlarge } from 'react-icons/im'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

type Props = {
  onFitScreenClick: () => void
  onZoomInClick: () => void
  onZoomOutClick: () => void
}

export const Toolbox: React.FC<Props> = ({
  onFitScreenClick,
  onZoomInClick,
  onZoomOutClick,
}) => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      borderWidth="2px"
      boxShadow="sm"
      borderRadius="md"
    >
      <Tooltip label={t('fit_screen')}>
        <IconButton
          variant="outline"
          aria-label="dit-screen"
          icon={<ImEnlarge />}
          onClick={onFitScreenClick}
          borderWidth="0"
          borderRightWidth="1px"
          borderRadius="0"
        />
      </Tooltip>
      <Tooltip label={t('zoom_in')}>
        <IconButton
          variant="outline"
          aria-label="dit-screen"
          icon={<IoMdAdd />}
          onClick={onZoomInClick}
          borderWidth="0"
          borderRadius="0"
        />
      </Tooltip>
      <Tooltip label={t('zoom_out')}>
        <IconButton
          variant="outline"
          aria-label="dit-screen"
          icon={<IoMdRemove />}
          onClick={onZoomOutClick}
          borderWidth="0"
          borderRadius="0"
        />
      </Tooltip>
    </Box>
  )
}
