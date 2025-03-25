import ts from 'typescript-eslint';

export default ts.config(
  {ignores: ['dist']},
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
          defaultProject: 'tsconfig.json',
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
