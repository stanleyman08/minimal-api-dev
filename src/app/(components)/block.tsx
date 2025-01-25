'use client';

import type { BoxProps } from '@mui/system';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type BlockProps = BoxProps & {
  method: string;
  description?: string;
  path: React.ReactNode;
};

export function Block({ method, path, description, sx, ...other }: BlockProps) {
  const renderMethod = (
    <Box
      component="span"
      sx={{
        px: 0.75,
        py: 0.25,
        borderRadius: 1,
        typography: 'caption',
        color: 'common.white',
        fontWeight: 'fontWeightBold',
        ...(method === 'GET' && { bgcolor: 'success.light' }),
        ...(method === 'POST' && { bgcolor: 'info.light' }),
        ...(method === 'PUT' && { bgcolor: 'warning.light' }),
        ...(method === 'PATCH' && { bgcolor: 'error.light' }),
      }}
    >
      {method}
    </Box>
  );

  return (
    <Box
      sx={[
        () => ({
          p: 1.5,
          gap: 1.5,
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          '& strong': { color: 'error.main' },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {description && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {description}
        </Typography>
      )}

      <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
        {renderMethod}
        <Box component="span" sx={{ flexGrow: 1 }}>
          {path}
        </Box>
      </Box>
    </Box>
  );
}
