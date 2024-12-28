# Training WDS

## Error Handling
 Error Handling là là một kỹ thuật lập trình quan trọng nhằm dự đoán và xử lý các tình huống bất thường có thể xảy ra trong quá trình thực thi chương trình. Thay vì để chương trình bị dừng đột ngột khi gặp lỗi, chúng ta sẽ thiết lập các cơ chế để bắt lỗi, thông báo cho người dùng hoặc hệ thống và thực hiện các hành động khắc phục hoặc ghi lại lỗi để tiện cho việc điều tra sau này.
 
 Các cách xử lý phổ biến
 - Try-catch: Đây là một cấu trúc điều khiển trong nhiều ngôn ngữ lập trình (như JavaScript, C#, Java) cho phép bạn bao bọc một đoạn code có thể gây ra lỗi trong một khối try. Nếu lỗi xảy ra, chương trình sẽ nhảy đến khối catch để xử lý.
 - Exceptions: Các ngoại lệ (exceptions) là các đối tượng đặc biệt được tạo ra để biểu thị một lỗi đã xảy ra. Bạn có thể bắt các ngoại lệ khác nhau và xử lý chúng theo cách phù hợp.

## Cài đặt chương trình 
1. Clone repo này về
2. Run:
```bash
npm install
```
3. Tạo một file .env. Khởi tạo 1 biến MONGO_URI = mongodb+srv://<username>:<password>@cluster0.ycresv7.mongodb.net/Training-WDS?retryWrites=true&w=majority
4. Run:
```bash
npm run dev
```

## Bài tập

Viết api cho phần updateBook trong đó có xử lý lỗi có thể gặp khi thực hiện chức năng này (có thể là NotFound, BadRequest, ...)


