const express = require('express');
const bodyParser = require('body-parser');
const IntaSend = require('intasend-node');

const app = express();
const port = 3000;

// Initialize IntaSend with your API keys
const intasend = new IntaSend(
  'ISPubKey_live_94d15eb5-3777-40e8-b2b7-433e5d3c8e6d',
  'ISSecretKey_live_b8617d2e-2488-4b0e-a349-bdfd67f32572',
  true // Set true for test environment
);

// Middleware
app.use(bodyParser.json());

// Route for handling payment
app.post('/api/pay', async (req, res) => {
  const { first_name, last_name, email, amount, phone_number, api_ref } = req.body;

  // Validate request data
  if (!first_name || !last_name || !email || !amount || !phone_number || !api_ref) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Make the payment request
    const response = await intasend.collection().mpesaStkPush({
      first_name,
      last_name,
      email,
      amount,
      phone_number,
      api_ref,
    });

    // Send response to client
    res.status(200).json(response);
  } catch (error) {
    console.error('Payment Request Error:', error);
    res.status(500).json({ error: 'Payment request failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
