module.exports = {
  // There's a stray lockfile in the parent folder; build from this repo only.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
        port: "",
      },
    ],
  },
};
