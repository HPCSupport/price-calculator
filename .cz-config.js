
const types = {
  first: 'First commit of a package',
  feat: 'Adding of features (commit encompasses entire feature)',
  partial: 'Parts of a feature that need to be squashed later',
  refactor: 'Code refactor that is completely backwards compatible',
  docs: 'Adding of comments or documentation',
  wip: 'Work in progress',
  build: 'CI, scripts and other build tasks',
  config: 'Configuration files',
  fix: 'A bug fix',
  lint: 'Code formatting',
  test: 'Updating of test code',
  dependency: 'Update of dependencies',
  security: `A security patch`,
  perf: `Performance tuning refactor`,
}


module.exports = {
  types: Object.entries(types).map(([value, name]) => ({ value, name })),

  // scopes: [
  //   { name: 'root' },

  //   { name: 'modules/check' },
  //   { name: 'modules/counter' },
  //   { name: 'modules/db-audit' },
  //   { name: 'modules/db-interface' },
  //   { name: 'modules/db-path-composer' },
  //   { name: 'modules/document-api' },
  //   { name: 'modules/keep-alive' },
  //   { name: 'modules/realtime-collection-diff' },
  //   { name: 'modules/server-error' },

  //   { name: 'webapp' },
  //   { name: 'vue/cell' },
  //   { name: 'vue/checkbox' },
  //   { name: 'vue/dropdown' },
  //   { name: 'vue/file-drop' },
  //   { name: 'vue/header' },
  //   { name: 'vue/icon' },
  //   { name: 'vue/map-listener' },
  //   { name: 'vue/sort' },
  //   { name: 'vue/sorting-arrow' },
  //   { name: 'vue/table' },
  //   { name: 'vue/text-array' },
  //   { name: 'vue/text-field-async' },
  //   { name: 'vue/text-field-sync' },

  //   { name: 'service/account' },
  //   { name: 'service/authorization' },
  //   { name: 'service/bookkeeping' },
  //   { name: 'service/fileserver' },
  //   { name: 'service/inventory' },
  //   { name: 'service/realtime-status' },
  //   { name: 'service/reverse-proxy' },
  //   { name: 'service/webserver' },

  //   { name: 'config/mongo' },
  //   { name: 'config/routing' },
  // ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  // ticketNumberPrefix: 'Closes-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'What area of the program does this commit affect:',
    // used if allowCustomScopes is true
    customScope: 'What area of the program does this commit affect:',
    subject: 'Description of change',
    body: 'Reason for change. New line with "|" (optional):\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowBreakingChanges: ['feat', 'rewrite', 'fix'],
  // skip any questions you want
  // skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 80,
  subjectSeparator: `: `,
  typePrefix: `[`,
  typeSuffix: `]`,
  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  allowCustomScopes: true,
  // override the messages, defaults are as follows
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
