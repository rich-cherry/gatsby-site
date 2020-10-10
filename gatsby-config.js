module.exports = {
  siteMetadata: {
    title: 'rc',
    author: 'The Big Lebowski'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'bmr8cor'
        }
      }
    }
  ],
}
