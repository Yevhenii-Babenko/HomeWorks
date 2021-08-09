module.exports = {
    extends: "@mate-academy/eslint-config-react",
    rules: {
        "linebreak-style": 0,
        'max-len': ["error", { "code": 200 }]
    },
};

/* module.exports = {
    quotes: [2, 'single'],
    extends: 'google',
    globals: {
        SwaggerEditor: false
    },
    env: {
        browser: true
    },
    rules: {
        "linebreak-style": 0
    }
}; */