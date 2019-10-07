module.exports = {
  siteMetadata: {
    title: 'Helium Developers',
    description: 'This is the portal for Helium developers'
  },
  plugins: [
    'gatsby-theme-documentation',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Notable']
        },
        typekit: {
          id: 'qfu3tzp'
        },
        custom: {
          families: ['Antaro'],
          url: ['src/fonts.css']
        }
      }
    }
  ],
}