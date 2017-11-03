import docs from 'components/docs'
import markdown from 'markdown-in-js'

export default docs({
  title: 'Integrations'
}, markdown`
Easily hook Fridge into an existing tool using these integrations and plugins.

## Jekyll

A [Jekyll](http://jekyllrb.com/) plugin that allows you to use liquid tags inside your templates to easily pull down and manipulate Fridge data.

There is a gem available for installation:

\`\`\`Gemfile
group :jekyll_plugins do
  gem "jekyll-fridge"
end
\`\`\`

Add an API key into \`_config.yml\` and you are ready to go. Fridge recommends using the public API key, but because the configuration is not a part of the site output, you could alternatively use a secret key.

\`\`\`yml
fridge:
  client_id: pk_xxxxxxxxxxx
\`\`\`

View the README and source on [Github](https://github.com/fridge-cms/jekyll-fridge)
`)
