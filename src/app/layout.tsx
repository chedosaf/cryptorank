import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import NavBar from '@/components/NavBar/NavBar';
import { SWRProvider } from '@/providers/swr-provider';

import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from './styles';

const inter = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cryptorank',
  description: 'Cryptorank Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SWRProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <NavBar />
            {children}
          </StyledComponentsRegistry>
        </SWRProvider>
      </body>
    </html>
  );
}
