module.exports = {
  siteMetadata: {
    title: `호주 한인 개발자 모임`,
    description: "호주에 거주하는 한인 개발자들의 모임입니다",
    author: `Jay Hyojung Kwon`,
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
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/content`,
        },
    },
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
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [{
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{sh: "bash", js:"javascript"},
              showLineNumbers: false,
            }
          }],
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `호주 한인 개발자 모임`,
        short_name: `호한개모`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/favicon/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ]
      },
    },
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: [`.mdx`, `.md`],
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        aliases:{sh: "bash", js:"javascript"},
                        showLineNumbers: false,
                    }
                },
            ],
        },
      },
  ],
}
