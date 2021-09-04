export const connectors = [
  {
    type: 'github',
    title: 'Github',
    description: 'Connection to Github database',
    searchTerms: ['github'],
    backendImport: 'connector_github',
    frontendImport: 'connectors/github/frontend',
    iconPath: 'github-icon.png',
    optionsSchema: {
      description: 'Github connection options',
      type: 'object',
      properties: {
        host: {
          title: 'Hostname',
          description: 'Hostname of Github database',
          type: 'string',
        },
        port: {
          title: 'Port',
          description: 'Port of Github database',
          type: 'number',
          default: 3306,
        },
        user: {
          title: 'Username',
          description: 'Username',
          type: 'string',
        },
        password: {
          title: 'Password',
          description: 'Password',
          type: 'string',
        },
        database: {
          title: 'Database name',
          description: 'Name of database',
          type: 'string',
        },
      },
      required: ['host', 'user', 'password', 'database'],
      order: ['host', 'port', 'user', 'password', 'database'],
    },
  },
  {
    type: 'mysql',
    title: 'MySQL',
    description: 'Connection to MySQL database',
    searchTerms: ['mysql'],
    backendImport: 'connector_mysql',
    frontendImport: 'connectors/mysql/frontend',
    iconPath: 'mysql-icon.png',
    optionsSchema: {
      description: 'MySQL connection options',
      type: 'object',
      properties: {
        host: {
          title: 'Hostname',
          description: 'Hostname of MySQL database',
          type: 'string',
        },
        port: {
          title: 'Port',
          description: 'Port of MySQL database',
          type: 'number',
          default: 3306,
        },
        user: {
          title: 'Username',
          description: 'Username',
          type: 'string',
        },
        password: {
          title: 'Password',
          description: 'Password',
          type: 'string',
        },
        database: {
          title: 'Database name',
          description: 'Name of database',
          type: 'string',
        },
      },
      required: ['host', 'user', 'password', 'database'],
      order: ['host', 'port', 'user', 'password', 'database'],
    },
  },
  {
    type: 'postgres',
    title: 'PostgreSQL',
    description: 'Connection to PostgreSQL database',
    searchTerms: ['postgreSQL', 'postgres'],
    backendImport: 'connector_postgres',
    frontendImport: 'connectors/postgresql/frontend',
    iconPath: 'postgresql-icon.png',
    optionsSchema: {
      description: 'PostgreSQL connection options',
      type: 'object',
      properties: {
        host: {
          title: 'Hostname',
          description: 'Hostname of PostgreSQL database',
          type: 'string',
        },
        port: {
          title: 'Port',
          description: 'Port of PostgreSQL database',
          type: 'number',
          default: 5432,
        },
        user: {
          title: 'Username',
          description: 'Username',
          type: 'string',
        },
        password: {
          title: 'Password',
          description: 'Password',
          type: 'string',
        },
        database: {
          title: 'Database name',
          description: 'Name of database',
          type: 'string',
        },
      },
      required: ['host', 'user', 'password', 'database'],
      order: ['host', 'port', 'user', 'password', 'database'],
    },
  },
  {
    type: 'snowflake',
    title: 'Snowflake',
    description: 'Connection to Snowflake datawarehouse',
    searchTerms: ['snowflake'],
    backendImport: 'connector_snowflake',
    frontendImport: 'connectors/snowflake/frontend',
    iconPath: 'snowflake-icon.png',
    optionsSchema: {
      description: 'Snowflake connection options',
      type: 'object',
      properties: {
        host: {
          title: 'Hostname',
          description: 'Hostname of Snowflake instance',
          type: 'string',
        },
        port: {
          title: 'Port',
          description: 'Port of Snowflake instance',
          type: 'number',
          default: 3306,
        },
        user: {
          title: 'Username',
          description: 'Username',
          type: 'string',
        },
        password: {
          title: 'Password',
          description: 'Password',
          type: 'string',
        },
        warehouse: {
          title: 'Warehouse',
          description: 'Name of warehouse',
          type: 'string',
        },
        database: {
          title: 'database',
          description: 'Name of database',
          type: 'string',
        },
      },
      required: ['host', 'user', 'password', 'warehouse', 'database'],
      order: ['host', 'port', 'user', 'password', 'warehouse', 'database'],
    },
  },
];
