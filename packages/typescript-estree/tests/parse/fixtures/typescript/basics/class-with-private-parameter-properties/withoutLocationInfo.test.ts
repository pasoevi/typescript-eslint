import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/class-with-private-parameter-properties.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);