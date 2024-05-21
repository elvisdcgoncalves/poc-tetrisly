'use client'

import {
  Button,
  tet,
} from '@virtuslab/tetrisly-react';

import { ButtonGroup, Button as MuiButton } from '@mui/material';

import Link from 'next/link';

export default function Test() {

  return (
    <>
      {!false &&
        <>
          <div>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <MuiButton>One</MuiButton>
              <MuiButton>Two</MuiButton>
              <MuiButton>Three</MuiButton>
            </ButtonGroup>
          </div>
          <tet.div
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100vh"
          >
            <tet.div>
              <tet.h1
                textAlign="center"
                mb="$dimension-200"
                text="$typo-header-4xLarge"
                color="$color-content-primary"
              >
                Hello Test!
              </tet.h1>
              <tet.div display="flex" justifyContent="center" alignItems="center">
              <Link href="/">
                <Button label="Go to home page" appearance="primary" />
              </Link>
              </tet.div>
            </tet.div>
          </tet.div>
          
        </>
    }
  </>
  );
}
