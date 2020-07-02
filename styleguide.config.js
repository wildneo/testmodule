const fs = require('fs');
const path = require('path');
const package = require('./package.json');

module.exports = {
  title: package.name,
  pagePerSection: true,
  exampleMode: 'collapse',
  usageMode: 'collapse',
  components: './src/components/**/*.tsx',
  moduleAliases: {
    [package.name]: path.resolve(__dirname, 'src'),
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
      components: 'src/components/**/*.tsx',
    },
    {
      name: 'Hooks',
      sections: fs.readdirSync('src/hooks/')
        .filter((file) => path.extname(file) === '.md')
        .map((file) => ({
          name: path.basename(file, '.md'),
          content: `src/hooks/${file}`,
        })),
    },
  ],
  webpackConfig: require('./webpack.config.js'),
};