module.exports = {
  extends: [
    'standard',
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    // Enforce functional patterns
    'no-class-assign': 'error',
    'no-new': 'error',
    'no-return-assign': 'error',
    
    // Enforce descriptive naming
    'camelcase': ['error', { 
      properties: 'never',
      allow: ['^is[A-Z]', '^has[A-Z]', '^should[A-Z]']
    }],
    
    // Enforce TypeScript best practices
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    
    // Enforce code organization
    'import/order': ['error', {
      'groups': [
        ['builtin', 'external'],
        'internal',
        ['parent', 'sibling', 'index']
      ],
      'newlines-between': 'always'
    }]
  }
} 