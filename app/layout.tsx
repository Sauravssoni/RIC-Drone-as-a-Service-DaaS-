import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import 'leaflet/dist/leaflet.css';
import './globals.css';
import './corrections.css';
import LiveGatewayStatus from './live-gateway-status';

export const metadata: Metadata = {
  title: 'RAJ-KRISHI DRONE GRID · MVP Prototype | Rajasthan Agriculture',
  description: 'MVP prototype for a Universal Drone-as-a-Service and Agri-Extension Operating System for Rajasthan. Submission demonstrator; not an official production Government system.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <LiveGatewayStatus />
      </body>
    </html>
  );
}
