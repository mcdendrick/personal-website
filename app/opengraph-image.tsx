import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Taylor McKendrick - Full Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(45deg, #1a365d 0%, #2563eb 50%, #93c5fd 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              color: 'white',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Taylor McKendrick
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: 'white',
              opacity: 0.9,
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Full Stack Developer | Cancer Survivor | Problem Solver
          </p>
          <p
            style={{
              fontSize: '24px',
              color: 'white',
              opacity: 0.8,
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Multilingual developer fluent in English, Dutch, and Flemish
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}