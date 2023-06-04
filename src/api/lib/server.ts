import app from './Config/app';
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server Connected Successfully.');
  console.log('Server listening on port:' + PORT);
});
