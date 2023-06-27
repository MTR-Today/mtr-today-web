import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from '@chakra-ui/react'
import { Outlet, useNavigate, useParams } from '@tanstack/router'
import { StopCode, stopMap } from 'mtr-kit'
import { useTranslation } from 'react-i18next'

import { Language } from '../../constants/language'
import { Empty } from '../StopSchedules/Empty'

export const StopDetail: React.FC = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const { stop: stopCode } = useParams()
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  const stop = stopCode ? stopMap[stopCode as StopCode] : undefined

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => {
        navigate({ to: '/' })
      }}
      closeOnOverlayClick={false}
      size={{ md: 'md' }}
      variant="alwaysOpen"
    >
      <DrawerContent
        marginTop="80px"
        borderRadius={{ md: 'lg' }}
        borderTopRadius="lg"
        marginBottom={{ md: '16px' }}
        marginLeft={{ md: '16px' }}
        marginRight={{ md: '16px' }}
      >
        <DrawerCloseButton color={stop?.textColor} />
        {stop ? (
          <>
            <DrawerHeader
              textAlign="center"
              bg={stop?.color}
              color={stop?.textColor}
              borderTopRadius="lg"
              py="2"
              transition="background-color 0.5s, color 0.5s"
            >
              {i18n.language === Language['ZH-HK'] ? stop.nameZh : stop.nameEn}
              <Box fontSize="xs">{stop.nameEn}</Box>
            </DrawerHeader>
            <DrawerBody p="0">
              <Outlet />
            </DrawerBody>
          </>
        ) : (
          <Empty />
        )}
      </DrawerContent>
    </Drawer>
  )
}
