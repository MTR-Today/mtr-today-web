import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, type BoxProps } from '@chakra-ui/react';
import { memo } from 'react';

export const ArrowRight: React.FC<BoxProps> = memo((props) => (
  <Box pos="absolute" {...props}>
    <Box pos="absolute" transform="translateY(-50%) translateX(-50%)">
      <ArrowRightIcon fontSize="8px" opacity=".3" />
    </Box>
  </Box>
));
