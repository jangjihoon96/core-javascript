





// 브라우저상에 윈도우와 노드상에 글로벌이 비슷한 역할
// console.log(window)
// console.log(global)

// Node에 있는 라이브 서버 구동
// 터미널 : node server/index.js 입력
const liveServer = require('live-server');

const params = {
  host : 'localhost',
  port : 3000,
  open : false,
  root : './client'
};

liveServer.start(params);




