
const QRCode = require('qrcode');

const generateQR = async text => {
	try {
		console.log(await QRCode.toDataURL(text));

	} catch(err){
		console.log(err);
	}
}

generateQR("http://yahoo.com/");