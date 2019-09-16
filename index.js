module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-image',
        extendMarkdown: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-imsize'))
            md.use(require('markdown-it-image-lazy-loading'))
        }
    }
}