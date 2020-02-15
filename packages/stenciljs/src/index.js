import fs from 'fs';
import Handlebars from 'handlebars';

export function generateStringFromTemplate(options) {
  const { template, data } = options;

  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(data);
}

export function writeContentToFile(options) {
  const { content, filePath } = options;
  const fsToUse = options.fs || fs;
  fsToUse.writeFileSync(filePath, content, 'utf8');
}

export function getContentFromFile(options) {
  const { filePath } = options;
  const fsToUse = options.fs || fs;
  return fsToUse.readFileSync(filePath, 'utf8');
}

export function generateStringFromTemplateFile(options) {
  const { input } = options;

  const template = getContentFromFile(input);

  return generateStringFromTemplate({
    ...options,
    template,
  });
}

export function generateFileFromTemplate(options) {
  const content = generateStringFromTemplate(options);
  const { output } = options;

  return writeContentToFile({ ...output, content });
}

export function generateFileFromTemplateFile(options) {
  const { input } = options;

  const template = getContentFromFile(input);

  return generateFileFromTemplate({
    ...options,
    template,
  });
}
