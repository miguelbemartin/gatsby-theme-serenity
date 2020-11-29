const config = require("./config.js")

module.exports = {
    siteMetadata: {
        title: config.title,
        description: config.description,
        language: config.language,
        author: config.author,
        links: config.links
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "content",
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `static/media`,
                name: 'media'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: `static`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    'Fira Sans\:300,400,400i',
                    'Merriweather'
                ],
                display: 'swap'
            }
        },
        `gatsby-plugin-twitter`
    ],
}