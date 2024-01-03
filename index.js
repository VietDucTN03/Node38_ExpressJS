// B1: npm init <--> yarn init --- khỏi tạo source BE
// B2: cài lib express: npm i express
// npm i express <--> yarn add express
// B3: thêm type module bên trong file package.json --> ES6

// Lưu ý: 3 bước đầu chỉ dùng 1 lần duy nhất, dùng lần 2 sẽ bị lỗi

// B4: import thư viện express
import express from 'express';
// B5: tạo biến app để start BE
const app = express();
// add middleware để express hiểu body nhận về là object (JSon)
app.use(express.json())

// B6: setup port cho BE -> 8080
app.listen("8080", () => {
    console.log("BE is starting");
});

// Viết API
// Tạo API GET
app.get("/get-video", (req, res) => {
    res.send("Get video Duc");
});

app.post("/create-video", (req, res) => {
    res.send("Create video");
});

// GET video có ID là 5/ userId là 10 và dùng params
app.get("/get-video/:videoId/:userId", (req, res) => {
    let {videoId, userId} = req.params;
    console.log(req.params);
    res.send(`get video with id ${videoId}, ${userId}`);
})

// GET video có ID là 5/ userId là 10 và dùng query
app.get("/get-video-detail", (req, res) => {
    let {id, userId} = req.query;
    res.send(`get video with id ${id}, ${userId}`);
})

// sử dụng headers
app.get("/get-video-detail/:id/:userId", (req, res) => {
    let {id, userId} = req.params;
    let {token} = req.headers;
    res.send(`get video with id ${id}, ${userId}, ${token}`);
});

// lưu ý là method GET, DELETE không có body
// POST, PUT có body
// get Data từ body
app.post("/get-body", (req, res) => {
    let {hoTen, email} = req.body;
    res.send(`Get body: ${hoTen}, ${email}`);
});



