/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/_vars.scss"; `,
  },
};

export default nextConfig;
