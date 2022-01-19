/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "bafybeidkgdepbsbdfgwcglkek3aus6fcsvvyhflcf3hxesxmyo2uafhrfe.ipfs.dweb.link",
      "bafybeih4iuchjh3nqpsuirek7vekbznh5fn2ppc7icul4tqc4yampoqbei.ipfs.dweb.link",
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
