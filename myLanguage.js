hljs.registerLanguage('myLanguage', function(hljs) {
    return {
        keywords: { keyword: 'if else for while' },
        contains: [
            hljs.COMMENT('//', '$'),
            hljs.NUMBER_MODE
        ]
    };
});
