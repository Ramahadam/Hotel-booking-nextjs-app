/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hhxudiqgrzciafxyhyat.supabase.co', 'lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dclaevazetcjjkrzczpc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
  // output: "export",
};

export default nextConfig;