# StencilJS

This package uses Handlebars templates to generate consistent string outputs.  There are functions available to either use a passed in string template or to read a template from a file path AND to return the output as a string or save it to a file path.  This package is meant to be used along side the CLI package to enable project file generation AND programatic string generation using the same templates and dependencies.

## Installation

```
npm install --save-dev @iamdavidjackson/stenciljs
```

## Usage

### generateStringFromTemplate

This will return a string from a passed in template string.

```
import { generateStringFromTemplate } from '@iamdavidjackson/stenciljs';

const content = generateStringFromTemplate({
  template: 'my name is {{name}}',
  data: {
    name: 'David'
  }
});
console.log(content);
// expected output: my name is David
```

### generateStringFromTemplateFile

This will return a string from a passed in file path.

```
import { generateStringFromTemplateFile } from '@iamdavidjackson/stenciljs';

const content = generateStringFromTemplateFile({
  input: {
    filePath: 'path/to/my/template'
  },
  data: {
    name: 'David'
  }
});
console.log(content);
// expected output: my name is David
```

### generateFileFromTemplate

This will create a file from a passed in template string.

```
import { generateFileFromTemplate } from '@iamdavidjackson/stenciljs';

generateFileFromTemplate({
  template: 'my name is {{name}}',
  data: {
    name: 'David'
  },
  output: {
    filePath: 'path/to/my/output
  }
});
```

### generateFileFromTemplateFile

This will create a file from a passed in file path.

```
import { generateFileFromTemplateFile } from '@iamdavidjackson/stenciljs';

generateFileFromTemplateFile({
  data: {
    name: 'David'
  },
  input: {
    filePath: 'path/to/my/template'
  },
  output: {
    filePath: 'path/to/my/output
  }
});
```
