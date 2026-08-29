import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import 'leaflet/dist/leaflet.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'RAJ-KRISHI DRONE GRID | Rajasthan Agriculture',
  description: 'Universal Drone-as-a-Service and Agri-Extension Operating System for Rajasthan'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
