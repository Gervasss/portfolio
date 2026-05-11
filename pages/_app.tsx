
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// carrega o efeito só no client (evita mismatch no SSR)
const GradualBlur = dynamic(() => import('@/src/components/ui/GradualBlur'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {

  
  return (
    <>
      <Component {...pageProps} />

      {/* Smoke leve no BOTTOM */}
      <GradualBlur
        preset="page-footer"
        target="page"
        position="bottom"
        zIndex={0}
        height="160px"
        desktopHeight="190px"
        tabletHeight="170px"
        responsive
        strength={1.6}
        divCount={1}
        curve="bezier"
        opacity={1}
        animated={false}
      />
    </>
  );
}
