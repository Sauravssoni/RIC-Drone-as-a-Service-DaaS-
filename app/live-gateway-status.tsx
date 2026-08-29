'use client';

import { useEffect, useState } from 'react';

export default function LiveGatewayStatus() {
  const [status, setStatus] = useState<'checking' | 'live' | 'fallback'>('checking');

  useEffect(() => {
    let mounted = true;
    fetch('/api/imd', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => { if (mounted) setStatus(data?.live ? 'live' : 'fallback'); })
      .catch(() => { if (mounted) setStatus('fallback'); });
    return () => { mounted = false; };
  }, []);

  return (
    <div className={`gateway-status gateway-${status}`} title="Official IMD public district-nowcast gateway status">
      <span className="gateway-dot" />
      {status === 'checking' ? 'IMD gateway checking' : status === 'live' ? 'IMD public gateway live' : 'IMD graceful fallback'}
    </div>
  );
}
