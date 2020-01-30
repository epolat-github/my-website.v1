require("dotenv").config();

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  env: {
    //     DEV_URL=http://localhost:3000/
    // PROD_URL=https://website-erinc-polat.herokuapp.com/
    // PROD_URL=https://my-websitev1.etuna.now.sh/
    // PROD_URL=http://www.erincpolat.com/
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://website-erinc-polat.herokuapp.com/"
  }
};
