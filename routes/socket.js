var express = require('express');
var router = express.Router();

const DEFAULT_KEY = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
/* socket */
router.get('/', function(req, res) {
	const SEC_WEBSOCKET_KEY = req.headers['sec-websocket-key']
	const key = crypto.createHash("sha1").update(SEC_WEBSOCKET_KEY + DEFAULT_KEY).digest("base64")
	req.headers['Sec-WebSocket-Accept'] = key
	/* res.send({
		code: "0",
		data: {
			socket: 123
		}
	}) */
});




module.exports = router;
