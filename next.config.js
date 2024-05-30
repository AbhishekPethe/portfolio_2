// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// next.config.js
// next.config.js
module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp3|wav|mpe?g)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/media/",
          publicPath: "/_next/static/media/",
        },
      },
    });

    return config;
  },
};
