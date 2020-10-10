module.exports = {
  siteMetadata: {
    title: 'rc',
    author: 'The Big Lebowski'
  },
  plugins: [
    'gatsby-plugin-sass',
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
