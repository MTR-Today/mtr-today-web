import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from '@tanstack/router'
import { useTranslation } from 'react-i18next'
import { IoLogoGithub } from 'react-icons/io'

import packageJson from '../../../package.json'
import logo from '../../assets/logo.svg'

export const AboutUs: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => {
        navigate({ to: '/' })
      }}
      isCentered
      size="xs"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('about_us')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={2} alignItems="center" mb="4">
            <Box borderWidth="4px" borderRadius="lg" overflow="hidden">
              <Img src={logo} w="128px" />
            </Box>
            <Heading as="h1" fontSize="lg">
              MTR Today
            </Heading>
            <Box color="GrayText">v{packageJson.version}</Box>
            <Link href="https://github.com/mtr-today">
              <Button size="sm" leftIcon={<IoLogoGithub />}>
                {t('source_code')}
              </Button>
            </Link>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
