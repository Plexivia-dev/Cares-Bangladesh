'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '480px', width: '90%', textAlign: 'center', background: '#ffffff', padding: '32px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid #fed7aa' }}>
          <h2 style={{ color: '#004460', fontSize: '28px', marginBottom: '12px' }}>An Error Occurred</h2>
          <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
            We are sorry, an unexpected error occurred. Please refresh the page to continue.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => reset()}
              style={{ background: '#f59e0b', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '9999px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{ background: '#004460', color: '#ffffff', textDecoration: 'none', padding: '12px 24px', borderRadius: '9999px', fontWeight: 'bold', fontSize: '14px' }}
            >
              Go to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
