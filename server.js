const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/routes_html")(app);
require("./routes/routes_html")(app);

app.listen(PORT, () => {
    console.log(`APP now on port ${PORT}!`);
  });