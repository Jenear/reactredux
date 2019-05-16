// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('hello world');
// });
// app.get('/websocket', (req, res) => {
//   console.log('websocket 请求');
//   res.send('hello websocket');
// });

// app.listen(8080, (err) => {
//   if (err) {
//     console.log('err', err);
//   } else {
//     console.log('server is running at http://localhost:8080');
//   }
// });

// var net = require('ws');
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 9000 });
// wss.on('connection', function(ws) {
//   console.log('client connected');
//   ws.on('message', function(message) {
//     console.log(message);
//   });
// });
wss.on('connection', function(ws) {
  // console.log('ws', ws);
  var sendStockUpdates = function(ws) {
    if (ws.readyState == 1) {
      var stocksObj = {};
      for (var i = 0; i < clientStocks.length; i++) {
        var symbol = clientStocks[i];
        stocksObj[i] = symbol;
      }
      if (stocksObj.length !== 0) {
        ws.send(JSON.stringify(stocksObj)); //需要将对象转成字符串。WebSocket只支持文本和二进制数据
        console.log('更新', JSON.stringify(stocksObj));
      }
    }
  };
  var clientStockUpdater = setInterval(function() {
    sendStockUpdates(ws);
  }, 1000);
  ws.on('message', function(message) {
    var stockRequest = JSON.parse(message); //根据请求过来的数据来更新。
    console.log('收到消息', stockRequest);
    // clientStocks = stockRequest['stocks'];
    clientStocks = stockRequest;
    // console.log('收到消息2', clientStocks);

    sendStockUpdates(ws);
  });
});
