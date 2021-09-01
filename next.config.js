module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/2Fs4pkpCcG",
        permanent: true,
      },
    ];
  },
};
