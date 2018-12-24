const loaderUtils = require('loader-utils');

function setPrefix(source, options){
    const env = process.env.NODE_ENV || 'local';
    const from = options.from;
    const escapedFromURL = from.replace(/\//g, '\\/');

    let prefix = '';

    switch(env.toUpperCase()){
        case 'DEV':
            prefix = options.dev;
            break;

        case 'LIVE':
            prefix = options.live
    }

    source = source.replace(new RegExp(`url\\(\\s*${escapedFromURL}`, 'g'), `url(${prefix}${from}`)
                   .replace(new RegExp(`url\\(\\s*'${escapedFromURL}`, 'g'), `url('${prefix}${from}`)
                   .replace(new RegExp(`url\\(\\s*"${escapedFromURL}`, 'g'), `url("${prefix}${from}`);

    return source;
};

module.exports = function(source, map){
    this.cacheable();

    const options = loaderUtils.getOptions(this);
    source = setPrefix(source, options);

    this.callback(null, source, map);
};