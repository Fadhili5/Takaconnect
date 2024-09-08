const IntaSend = require('intasend-node');

let intasend = new IntaSend(
    'ISPubKey_live_94d15eb5-3777-40e8-b2b7-433e5d3c8e6d',
    'ISSecretKey_live_b8617d2e-2488-4b0e-a349-bdfd67f32572',
    true, // Test ? Set true for test environment
);

let collection = intasend.collection();
collection
   .mpesaStkPush({
  		first_name: 'Joe',
    	last_name: 'Doe',
    	email: 'joe@doe.com',
    	host: 'https://yourwebsite.com',
  		amount: 10,
    	phone_number: '254708419386',
    	api_ref: 'test',
  })
  .then((resp) => {
  	// Redirect user to URL to complete payment
  	 console.log(`STK Push Resp:`,resp);
	})
  .catch((err) => {
     console.error(`STK Push Resp error:`,err);
  });