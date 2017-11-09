import markdown from 'markdown-in-js'
import Code from '../Code'
import { components } from 'components/docs'

export default () => markdown(components)`
# Authentication

<div>
${<Code name='site.auth' />}
</div>

The Fridge API uses [OAuth 2.0](http://oauth.net/2/) to facilitate authentication. You provide the public/private key and secret to retrieve an access token that can be used to make requests. You can manage API keys on the settings page for any site you have administrator privileges.

API clients will take care of getting an access token for you. You only need to provide your key and secret when creating the client.

<p className="warning">
  You must replace \`client_id\` and \`client_secret\` with the keys provided in your site settings.
</p>
`
