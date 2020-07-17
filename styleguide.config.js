const fs = require('fs');
const path = require('path');
const package = require('./package.json');

const pathes = {
  src: path.resolve(__dirname, 'src'),
  components: path.resolve(__dirname, 'src/components'),
  hookDocs: path.resolve(__dirname, 'src/hooks/docs'),
}

module.exports = {
  title: package.name,
  pagePerSection: true,
  exampleMode: 'collapse',
  usageMode: 'collapse',
  skipComponentsWithoutExample: true,
  moduleAliases: {
    [package.name]: pathes.src,
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(path.dirname(componentPath));
    return `import { ${name} } from '${package.name}';`;
  },
  propsParser: require('react-docgen-typescript')
    .withCustomConfig('./tsconfig.json', {
      propFilter: (prop) => {
        if (prop.description.length === 0) {
          return false;
        }

        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        
        return true;
      },
  }).parse,
  sections: [
    {
      name: 'Components',
      components: path.join(pathes.components, '**/*.tsx'),
    },
    {
      name: 'Hooks',
      sections: fs.readdirSync(pathes.hookDocs)
        .filter((file) => path.extname(file) === '.md')
        .map((file) => ({
          name: path.basename(file, '.md'),
          content: path.join(pathes.hookDocs, file),
        })),
    },
  ],
  webpackConfig: require('./webpack.config.js'),
};