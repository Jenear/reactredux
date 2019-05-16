const  WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 9090 });

// wss.on('connection', function (ws) {
//     console.log('client connected');
//     ws.on('message', function (message) {
//         console.log('message',message);
//     });
// });

let stockRequest='';

wss.on('connection', function (ws) {
    console.log(1111)
    const sendStockUpdates = function (ws) {
        if (ws.readyState == 1) {
            let newData=[]
            const data = stockRequest.data;
            console.log('data',data)
            newData = data.map(item=>{
                item.price +=1;
                return item;
            })
        //    console.log('newData',newData,stockRequest)

            const  socketObj={...stockRequest,data:newData};
           console.log('socketObj',socketObj)
         
            if (socketObj.length !== 0) {
                ws.send(JSON.stringify(socketObj));//需要将对象转成字符串。WebSocket只支持文本和二进制数据
            }
           
        }
    }
    setInterval(function () {
        sendStockUpdates(ws);
    }, 2000);
    ws.on('message', function (message) {
        console.log("收到消息1message", message);
         stockRequest = JSON.parse(message);//根据请求过来的数据来更新。
        console.log("收到消息2", stockRequest);
        sendStockUpdates(ws);
    });
})