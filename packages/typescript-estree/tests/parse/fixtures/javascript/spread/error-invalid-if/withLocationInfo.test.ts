import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/spread/error-invalid-if.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);