require('dotenv').config()


module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  env: {
    baseUrl: process.env.NODE_ENV === "development" ? process.env.DEV_URL: process.env.PROD_URL,
  },
};
