/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 600, 768, 992, 1200, 1920],
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/_vars.scss"; @import "~@styles/_mixins.scss";`,
  },
};

export default nextConfig;
