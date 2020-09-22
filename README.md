# QR Code Generator using Azure Functions
Using [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/), you can generate QR code with text passed into the query string of this functions. 

This is developed as for a use case using PowerApps as the application layer to generate QR Code programmatically for users within an organziation without the use of a public available QR Code generators for various reasons. 

![](https://media.giphy.com/media/ltABm7cRTJz5pqqvsb/giphy.gif)

Please refer to this repo [QR Code Generator Canvas app with PowerApps](https://github.com/jenzushsu/qrcode-generator-powerapps) for the PowerApp developed for this use case.

You can refer to this medium article [Generate QR Code programmatically using Azure Functions + Power Apps](https://medium.com/@jenzushsu/generate-qr-code-programmatically-using-azure-functions-power-apps-d0e545c0a5d3) for the details on this Azure Function.

## Installation
Require the use of npm package [node-qrcode](https://www.npmjs.com/package/qrcode)

```npm install --save qrcode```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Disclaimer
*This app is a sample and may be used with Microsoft Power Apps. You bear the sole risk and responsibility for any use of this app. The innovation and views expressed here are those of my own and do not necessarily state or reflect those of Microsoft Singapore or Microsoft Corporation.
