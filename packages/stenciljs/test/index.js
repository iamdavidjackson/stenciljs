/* global describe it */
import assert from 'assert';
import path from 'path';
import MemoryFileSystem from 'memory-fs';
import {
  generateStringFromTemplate,
  generateStringFromTemplateFile,
  generateFileFromTemplate,
  generateFileFromTemplateFile,
} from '../lib/index';

const fs = new MemoryFileSystem();

describe('Stencil', () => {
  describe('generateStringFromTemplate', () => {
    it('should return hello world', () => {
      const template = '{{text}}';
      const data = {
        text: 'hello world',
      };
      const output = generateStringFromTemplate({
        template,
        data,
      });
      assert.equal(output, 'hello world');
    });
  });

  describe('generateStringFromTemplateFile', () => {
    it('should return hello world', () => {
      const options = {
        input: {
          filePath: path.join(__dirname, 'template.hbs'),
        },
      };
      const data = {
        text: 'hello world',
      };
      const output = generateStringFromTemplateFile({
        ...options,
        data,
      });
      assert.equal(output, 'hello world');
    });
  });
});

describe('generateFileFromTemplate', () => {
  it('should write a file containing hello world', () => {
    const options = {
      template: '{{text}}',
      data: {
        text: 'hello world',
      },
      output: {
        filePath: '/contents.txt',
        fs,
      },
    };
    generateFileFromTemplate(options);

    assert.equal(fs.existsSync(options.output.filePath), true);

    const contents = fs.readFileSync(options.output.filePath, 'utf8');
    assert.equal(contents, options.data.text);
  });
});

describe('generateFileFromTemplateFile', () => {
  it('should write a file containing hello world from a template file', () => {
    const options = {
      data: {
        text: 'hello world',
      },
      input: {
        filePath: path.join(__dirname, 'template.hbs'),
      },
      output: {
        filePath: '/contents.txt',
        fs,
      },
    };
    generateFileFromTemplateFile(options);

    assert.equal(fs.existsSync(options.output.filePath), true);

    const contents = fs.readFileSync(options.output.filePath, 'utf8');
    assert.equal(contents, options.data.text);
  });
});
