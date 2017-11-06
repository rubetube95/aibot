const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => console.log('Webhook server is listening, port 5000'));

const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');

app.get('/', verificationController);
app.post('/', messageWebhookController);


//tutorial on - https://botcube.co/blog/2017/02/23/tutorial-create-smart-facebook-messenger-chatbot-with-node-js-and-api-ai-nlp.html
//url for this launch - https://fc6632e4.ngrok.io
//if you need to change it. Open up https://developers.facebook.com/apps/1931996557120488/messenger/
//create a new app
// messenger > page > select a page (grab the generated token) > 
// 1. paste it into processMessage.js --> FACEBOOK_ACCESS_TOKEN ='PASTE ME HERE'
//2. open a new cmd window --> run this --> ngrok http 5000 (this will spin up the ngrok server)
//3. navigate to folder --> cd aibot --> node index.js (this will spin up the local dev server)
//test - add 'testers' too - otherwise you have to get auth from facebook