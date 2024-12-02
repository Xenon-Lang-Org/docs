hljs.registerLanguage('mylang', function (hljs) {
    return {
        keywords: {
            keyword: 'function return var if else while for',
            built_in: 'print input',
            literal: 'true false null'
        },
        contains: [
            hljs.COMMENT('//', '$'),
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            {
                className: 'meta',
                begin: '@[a-zA-Z]+'
            }
        ]
    };
});

console.log('Custom language "mylang" registered.');