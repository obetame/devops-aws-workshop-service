import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Author, BaseEntity, Book, BookTag, Publisher } from './entities';

const logger = new Logger('MikroORM');
const config = {
  entities: [Author, Book, BookTag, Publisher, BaseEntity],
  dbName: 'mikro-orm-nest-ts',
  type: 'mysql',
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  clientUrl: process.env.ENV === 'dev' ? 'mysql://root:root@localhost:3306' : 'mysql://root:root@localhost:3306',
} as Options;

export default config;
