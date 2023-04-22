/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'hv6qne5gho28',
        accessToken: 'CFPAT-MydKQEAEp2WiiyySe0Y31UaG0h7cGwHquPv6y5lZsVk',
      },
    },
  ]
};