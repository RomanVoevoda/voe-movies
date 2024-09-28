/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/_vars.scss"; @import "~@styles/_mixins.scss";`,
  },
};

export default nextConfig;
