//require the module qrcode
const QRCode = require('qrcode');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.query.text) { 
        let code;
        try {
            // code = await QRCode.toDataURL(req.query.text);
            code = await QRCode.toDataURL(req.query.text);
            console.log(code);
        } catch (err) {
            context.log.error('ERROR', err);
            throw err;
        }
        if (code) {
            context.res = {
                body: code
            }
        } else {
            context.res = {
                body: "Error: QR Code rendering error",
                status: 400
            }
        }
    } else {
        context.res = {
            body: "Error: Missing query string text",
            status: 400
        }
    }
}