import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/forIn/for-in-with-var.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);