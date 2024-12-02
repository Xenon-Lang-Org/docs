hljs.registerLanguage('myLanguage', function(hljs) {
    console.log("Registered myLanguage");
    return {
        keywords: { keyword: 'if else for while' },
        contains: [
            hljs.COMMENT('//', '$'),
            hljs.NUMBER_MODE
        ]
    };
});

