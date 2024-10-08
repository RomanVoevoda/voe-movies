/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 600, 768, 992, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kinopoiskapiunofficial.tech",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        port: "",
        pathname: "/get-kinopoisk-image/**",
      },
    ],
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/_vars.scss"; @import "~@styles/_mixins.scss";`,
  },
};

export default nextConfig;
