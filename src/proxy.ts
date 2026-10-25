import { NextResponse, type NextRequest } from 'next/server';

const isDevelopment = process.env.NODE_ENV === 'development';

const buildNonce = (): string => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
};

/**
 * Per-request nonce CSP. 'strict-dynamic' lets Next's nonced bootstrap load
 * its own chunks without whitelisting paths. Inline styles stay allowed:
 * Next and our own style attributes both rely on them.
 */
const buildPolicy = (nonce: string): string =>
  [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDevelopment ? "'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    `connect-src 'self'${isDevelopment ? ' ws: wss:' : ''}`,
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ]
    .filter(Boolean)
    .join('; ')
    .replace(/\s{2,}/g, ' ');

const proxy = (request: NextRequest) => {
  const nonce = buildNonce();
  const policy = buildPolicy(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', policy);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', policy);
  return response;
};

export default proxy;

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|webp|avif|woff2)$).*)'],
};
