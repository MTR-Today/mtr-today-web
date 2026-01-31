import { Box, Slide, useColorMode } from '@chakra-ui/react';
import { useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { Toolbox } from './ToolBox';

export const Fares = () => {
  const { colorMode } = useColorMode();
  const { stop: selectedStop } = useParams({ strict: false });
  const { t } = useTranslation();

  return (
    <>
      <Box
        pos='fixed'
        zIndex='overlay'
        top='72px'
        left='50%'
        maxW='calc(100% - 32px)'
        transform='translateX(-50%)'
      >
        <Toolbox />
      </Box>
      <Slide direction='bottom' in={!selectedStop}>
        <Box
          py='3'
          textAlign='center'
          bg={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}
        >
          {t('please_select_start_stop')}
        </Box>
      </Slide>
    </>
  );
};
