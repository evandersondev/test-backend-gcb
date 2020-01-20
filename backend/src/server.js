const server = require("./app");

const PORT = process.env.PORT || 8888;

server.listen(PORT, err => {
  if (err) console.log(err);

  console.log(`server running on http://localhost:${PORT}`);
});
