module.exports = {
  siteMetadata: {
    title: `INGENIERÍA Y DESARROLLO ENERGÉTICO APLICADO SAS `,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#273e48`,
        theme_color: `#273e48`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
      
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://lit-peak-56471.herokuapp.com",
        contentTypes: [
          "proyectos",
          "categories",
        ],
        queryLimit: 1000,
      },
    },
  ],
  pathPrefix : "/ideaWeb",
  
}
