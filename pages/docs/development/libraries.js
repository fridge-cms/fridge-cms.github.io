import docs from 'components/docs'
import markdown from 'markdown-in-js'

export default docs({
  title: 'API Libraries'
}, markdown`
## Javascript

Install using \`npm\`

\`\`\`shell
$ npm install fridge
\`\`\`

Can be used in both node.js projects and browser projects. Browser builds use commonjs, but there is also a compiled version available: \`<script src="https://unpkg.com/fridge/dist/fridge.min.js"></script>\`

View the source on [Github](https://github.com/fridge-cms/fridge_api.js)

---

## Ruby

Available as a gem:

\`\`\`Gemfile
gem 'fridge_api'
\`\`\`

View the source on [Github](https://github.com/fridge-cms/fridge_api.rb)

---

## PHP

Install using Composer:

\`\`\`shell
$ composer require fridge/api@stable
\`\`\`

View the source on [Github](https://github.com/fridge-cms/fridge_api.php)
`)
