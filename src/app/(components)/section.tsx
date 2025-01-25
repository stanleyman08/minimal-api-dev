'use client';

import type { BoxProps } from '@mui/system';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type SectionProps = BoxProps & { title: React.ReactNode };

export function Section({ title, children, sx, ...other }: SectionProps) {
  return (
    <Box
      sx={[
        () => ({
          p: 2,
          gap: 1.5,
          display: 'flex',
          borderRadius: 2,
          bgcolor: '#F4F6F8',
          flexDirection: 'column',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        {title}
      </Typography>

      {children}
    </Box>
  );
}
