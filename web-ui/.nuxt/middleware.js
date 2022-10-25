const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.ts')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['guest'] = require('../middleware/guest.ts')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['onlyadmin'] = require('../middleware/onlyadmin.ts')
middleware['onlyadmin'] = middleware['onlyadmin'].default || middleware['onlyadmin']

middleware['onlyagent'] = require('../middleware/onlyagent.ts')
middleware['onlyagent'] = middleware['onlyagent'].default || middleware['onlyagent']

export default middleware
