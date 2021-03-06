module.exports = {
  description: 'Generates a new react page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the Component?",
      validate: function (value) {
        let message = true;
        if (!/.+/.test(value)) {
          return 'You must define a component name';
        } else if (value.length < 3) {
          return `"${value}" is not descriptive enough`;
        }
        return message;
      },
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './generate/page/templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './generate/page/templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.styles.scss',
        templateFile: './generate/page/templates/styles.hbs',
      },
    ];
  },
};
