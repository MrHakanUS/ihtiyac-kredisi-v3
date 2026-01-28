import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Protected routes
    const isProtectedRoute = pathname.startsWith('/hesabim') || pathname.startsWith('/admin') || pathname.startsWith('/ana-sayfa');
    const isAuthPage = pathname.startsWith('/giris-yap') || pathname.startsWith('/uye-ol') || pathname.startsWith('/sifremi-unuttum');

    // If no token and accessing protected route, redirect to login
    if (!token && isProtectedRoute) {
      return NextResponse.redirect(new URL('/giris-yap', req.url));
    }

    // If authenticated and trying to access auth pages, redirect appropriately
    if (token && isAuthPage) {
      // Check if there's a callbackUrl parameter
      const callbackUrl = req.nextUrl.searchParams.get('callbackUrl');
      
      if (callbackUrl) {
        // Try to parse and validate the callback URL
        try {
          const url = new URL(callbackUrl, req.url);
          // Only redirect to same origin URLs
          if (url.origin === new URL(req.url).origin) {
            return NextResponse.redirect(url);
          }
        } catch (e) {
          // Invalid URL, fall through to default redirect
        }
      }
      
      // Default redirect to ana-sayfa if no valid callbackUrl
      return NextResponse.redirect(new URL('/ana-sayfa', req.url));
    }

    // Admin routes protection
    if (pathname.startsWith('/admin')) {
      if (!token) {
        return NextResponse.redirect(new URL('/giris-yap', req.url));
      }

      const role = token.role;
      if (role !== 'admin' && role !== 'moderator') {
        return NextResponse.redirect(new URL('/ana-sayfa', req.url));
      }

      // Only admin can access settings
      if (pathname.startsWith('/admin/ayarlar') && role !== 'admin') {
        return NextResponse.redirect(new URL('/admin/kullanicilar', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;

        // Allow access to auth pages without token
        if (pathname.startsWith('/giris-yap') ||
          pathname.startsWith('/uye-ol') ||
          pathname.startsWith('/sifremi-unuttum')) {
          return true;
        }

        // Require token for protected pages
        if (pathname.startsWith('/hesabim') || pathname.startsWith('/admin') || pathname.startsWith('/ana-sayfa')) {
          return !!token;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/hesabim/:path*',
    '/admin/:path*',
    '/ana-sayfa/:path*',
    '/giris-yap',
    '/uye-ol',
    '/sifremi-unuttum',
  ],
};

