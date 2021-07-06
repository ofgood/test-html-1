const markded = require('marked')
module.exports = source => {
    const html = markded(source)
    return  `module.exports=${JSON.stringify(html)}`
}
