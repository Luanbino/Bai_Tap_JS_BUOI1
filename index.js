// bài tập 1 tính tiền lương nhân viên
// input: soNgaylam: number, luong1Ngay: number
var luongNgay = 100;
var ngayLam = 28;
// output: soLuong: number
var tienLuong = 0;
// process: xử lý
tienLuong = ngayLam * luongNgay;
// in gí trị output ra MH
console.log('tiền lương:', tienLuong);

//  bài 2: Tính giá trị trung bình 
// input: diemToan: number, diemLy: number, diemHoa: number, diemSinh: number, diemVan: number
var trungBinh = 0;
var a = 5;
var b = 6;
var c = 7;
var d = 8;
var e = 9;
// output: soLuong: number
var trungBinh = 0;
  // process: xử lý
var trungBinh = (a + b + c + d + e) / 5;
  // in gí trị output ra MH
console.log('giá trị trung bình:', trungBinh);

// bai 3: số tiền sau quy đổi 
// input: giaUSD: number, soTienUSD: number
var giaVnd = 23.500;
var doCanDoi = 2;
// output: soTienVND: number
var thanhTien = 0;
// process: xử lý
thanhTien = doCanDoi * giaVnd;
 // in giá trị output ra MH
console.log('số tiền sau quy đổi:', thanhTien);

//bai 4: tinh diện tích, chu vi hình chữ nhật
var chieuDai = 7;
var chieuRong = 10;
// output:
var chuVi = 0;
var dienTich = 0;
// process: xử lý
var ChuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;
// in giá trị output ra MH
console.log('chu vi:', ChuVi);
console.log('diện tích:', dienTich);

//  bài 5: tính tổng 2 ký số
// input: so: number
var so = 34;
// output:
var tongKySo = 0;
// process: xử lý
var soDuHangTruc = Math.floor(so / 10);
var soDuHangdv = Math.floor(so % 10);

var tong2KySo = soDuHangTruc + soDuHangdv;
// in giá trị output ra MH
console.log('tổng 2 ký số:', tong2KySo); 