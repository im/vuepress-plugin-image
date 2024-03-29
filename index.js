module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-image',
        extendMarkdown: md => {
            md.use(require('markdown-it-imsize'))
            md.use(require('markdown-it-image-lazy-loading'))
            if (options.loading === undefined || options.loading) {
                md.use(require('markdown-it-image-loading'), options)
            }
        }
    }
}