import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Age Calculator Bangladesh - বয়স ক্যালকুলেটর'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/webp'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F4C75 0%, #3282B8 50%, #BBE1FA 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Age Calculator Bangladesh
          </h1>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '600',
              margin: '0 0 30px 0',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            বয়স ক্যালকুলেটর
          </h2>
          <p
            style={{
              fontSize: '24px',
              margin: '0 0 40px 0',
              opacity: 0.9,
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Calculate age in Bengali & English with Islamic calendar, zodiac signs, and Bangladesh-specific features
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {['Age Calculator', 'বয়স ক্যালকুলেটর', 'Islamic Calendar', 'Bengali Calendar', 'Zodiac Signs'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '18px',
            opacity: 0.8,
          }}
        >
          Powered by YEC
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
