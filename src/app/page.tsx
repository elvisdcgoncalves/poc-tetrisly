'use client'

import {
  Button,
  tet,
} from '@virtuslab/tetrisly-react';

import Link from 'next/link';

export default function Home() {

  return (
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
          Hello NextJS!
        </tet.h1>
        <tet.div display="flex" justifyContent="center" alignItems="center">
        <Link href="/test">
            <Button label="Go to test page" appearance="primary" />
          </Link>
        </tet.div>
      </tet.div>
    </tet.div>
  );
}
