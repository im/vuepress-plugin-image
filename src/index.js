module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-image',
        extendMarkdown: md => {
            md.set({ breaks: true })
            console.log(options)
            md.use(require('markdown-it-imsize'))
            md.use(require('markdown-it-image-lazy-loading'))
        }
    }
}