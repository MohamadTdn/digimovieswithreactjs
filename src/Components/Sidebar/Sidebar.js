import React from 'react'
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <Stack direction="row" spacing={2}>
        <Button color='secondary' style={{margin: '0 10px', fontSize: '20px'}} variant="contained" startIcon={<InstagramIcon />}>
          اینستاگرام
        </Button>
        <Button style={{padding: '10px', fontSize: '20px'}} variant="contained" startIcon={<TelegramIcon />}>
          تلگرام
        </Button>
      </Stack>
    </div>
  )
}
