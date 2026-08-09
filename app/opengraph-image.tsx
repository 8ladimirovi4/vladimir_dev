import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { siteConfig } from '@/shared/config/site';

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1080, height: 1440 };
export const contentType = 'image/png';

const portraitData = await readFile(
  join(process.cwd(), 'app/opengraph-portrait.png')
);
const portraitSrc = `data:image/png;base64,${portraitData.toString('base64')}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: '#1a1a1a',
        color: '#f5f0e8',
        fontFamily: 'Georgia, Times New Roman, serif',
      }}
    >
      {/* ImageResponse/Satori doesn't support next/image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={portraitSrc}
        alt=""
        width={1180}
        height={1540}
        style={{
          position: 'absolute',
          // Лёгкий zoom + сдвиг вверх: меньше фона над головой, чуть больше торса
          top: -90,
          left: -50,
          width: 1180,
          height: 1540,
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '28px 40px 32px',
          background:
            'linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(26,26,26,0.82) 28%, rgba(45,37,32,0.95) 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            letterSpacing: 4,
            textTransform: 'uppercase',
            opacity: 0.8,
            marginBottom: 8,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 6,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            lineHeight: 1.2,
            opacity: 0.95,
            marginBottom: 10,
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 25,
            opacity: 0.75,
          }}
        >
          React · NextJS · TypeScript · NestJS · RAG · MCP · AI Agents pipeline
        </div>
      </div>
    </div>,
    { ...size }
  );
}
