
const QRCode = require('qrcode');

const generateQR = async text => {
	try {
		
		console.log(await QRCode.toString(text, {type: 'terminal'}));

	} catch(err){
		console.log(err);
	}
}

generateQR("http://yahoo.com/");