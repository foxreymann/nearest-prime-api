const restify = require('restify');
const server = restify.createServer();
const isPrime = require('is-prime');

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/:number', function (req, res, next) {
  const primeNumber = req.params.number

  const response = {
    next_prime_number: nextPrime(primeNumber)
  }

  res.send(response);
  return next
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

function nextPrime(primeNumber) {
  let testNumber = primeNumber

  while(true) {
    if(isPrime(++testNumber)) {
      return testNumber
    }
  }
}
