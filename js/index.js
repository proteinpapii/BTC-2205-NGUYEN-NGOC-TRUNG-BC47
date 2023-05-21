/* Bài quản lý tuyển sinh */
 // Input: Điểm chuẩn, điểm 3 môn, khu vực, loại đối tượng
/* Progress :
    - Lấy value từ UI
    - Tính tổng điểm: 
        + Tính điểm ưu tiên theo khu vực (if else)
        + Tính điểm ưu tiên theo đối tượng (if else)
        + Tổng điểm = điểm 3 môn + điểm khu vực + điểm đối tượng
    - Kết quản: tổng điểm >= điểm chuẩn và k có môn nào ) điểm => đậu
    - In kq ra màn hình
*/
// Output: kết quả đậu hay rớt, tổng điểm 

document.getElementById('btnTinhDiem').onclick = tinhDiem;

function tinhDiem() {
    var benchmark = Number(document.getElementById('benchmarkInput').value);
    var subject1 = Number(document.getElementById('subject1Input').value);
    var subject2 = Number(document.getElementById('subject2Input').value);
    var subject3 = Number(document.getElementById('subject3Input').value);
    var areaValue = document.getElementById('areaSelect').value;
    var typeValue = document.getElementById('typeSelect').value;

    var diemKhuVuc = khuVuc(areaValue);
    var diemDoiTuong = doiTuong(typeValue);
    // Tổng điểm:
    var total = subject1 + subject2 + subject3 + diemKhuVuc + diemDoiTuong;
    document.getElementById('spanTongDiem').innerHTML = total;
    // So sánh show kết quả:
    if (
        total >= benchmark &&
        subject1 !== 0 &&
        subject2 !== 0 &&
        subject3 !== 0
    ){
        document.getElementById('spanKetQua').innerHTML = "ĐẬU";
    } else {
        document.getElementById('spanKetQua').innerHTML = "RỚT";
    }
}
// Tìm điểm ưu tiên khu vực:
function khuVuc(area) {
    if(area === "A") return 2;
    if(area === "B") return 1;
    if(area === "C") return 0.5;
    return 0;
}
// Tìm điểm ưu tiên đối tượng:
function doiTuong(type) {
    if(type === "1") return 2.5;
    if(type === "2") return 1.5;
    if(type === "3") return 1;
    return 0;
}


// Bài tập: Tính tiền điện

// Input: Nhập họ tên user, nhập số tiêu thụ điện
/*
* Process:
* DOM tới input thông tin tiêu thụ điện lấy value là số
* Tính số tiền điện:
*    số Kw <= 50kw ==> Tiền điện = số Kw đầu tiên * 500 
*    50kw < số Kw <= 100kw  Tiền điện = số Kw đầu tiên + (số Kw - 50) * 650    
*    100kw < số Kw <= 200kw  Tiền điện = số Kw đầu tiên + (50kw * 650) + (số Kw - 100) * 850
*     200kw < số Kw <= 350kw  Tiền điện = số Kw đầu tiên + (50kw * 650) + (100kw * 850) + (số kw - 200) * 1100
*    số Kw > 350kw  Tiền điện = số Kw đầu tiên + (50kw * 650) + (100kw * 850) + (150kw * 1100) + (số Kw - 350) * 1300
*
*    Gán kết quả
*
*/ 
// Output: Show số tiền điện cho user

document.getElementById('btnTienDien').onclick = tienDien;

function tienDien () {

    var hoTen = document.getElementById('hoTen').value;
    var soKw = Number(document.getElementById('dienTieuThu').value);
    var total;

    if (soKw <= 50) {
        total = soKw * 500;
    } else if (soKw <= 100) {
        total = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        total = 50 * 500 + 50 * 650 + (200 - soKw) * 850;
    } else if (soKw <= 350) {
        total = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    document.getElementById('spanTienDien').innerHTML = new Intl.NumberFormat('vn-VN').format(total);
    document.getElementById('spanHoTen').innerHTML = hoTen;
}



// Bài tập: Tính thuế thu nhập cá nhân

/* - Input:
*       + Nhập họ tên
*       + Nhập tổng thu nhập năm: lương tháng * 12
*       + Nhập số người phụ thuộc
*
* - Process:
*       Tạo sự kiện click cho button
*       DOM tới các thẻ input lấy value
*       Tính tiền thuế:
*           tiền thuế =  Tổng thu nhập năm - 4.000.000 - số người phụ thuộc * 1.600.000
            tiền thuế <= 60tr  ==> tiền thuế * 5%
            tiền thuế <= 120tr  ==> tiền thuế * 10%
            tiền thuế <= 210tr  ==> tiền thuế * 15%
            tiền thuế <= 384tr  ==> tiền thuế * 20%
            tiền thuế <= 624tr  ==> tiền thuế * 25%
            tiền thuế <= 960tr  ==> tiền thuế * 30%
            tiền thuế > 960tr  ==> tiền thuế * 35%
*
*
*
*
*
* - Output: xuất ra màn hình thuế thu nhập cá nhân
*/ 

document.getElementById('btnTinhThue').onclick = tinhThue;

function tinhThue() {
    var Name = document.getElementById('Name').value;
    var thuNhap = +document.getElementById('thuNhapNam').value;
    var soNguoi = +document.getElementById('nguoiPhuThuoc').value;

    var total;
    var tax;

    total = thuNhap - 4e+6 - soNguoi * 1600000;

    if (total <= 6e+6) {
        tax = total * 5 / 100;
    } else if (total <= 120e+6) {
        tax = total * 10 / 100;
    } else if (total <= 210e+6) {
        tax = total * 15 / 100;
    } else if (total <= 384e+6) {
        tax = total * 20 / 100;
    } else if (total <= 624e+6) {
        tax = total * 25 / 100;
    } else if (total <= 960e+6) {
        tax = total * 30 / 100;
    } else {
        tax = total * 35 / 100;
    }
     
    document.getElementById('spanName').innerHTML = Name;
    document.getElementById('spanThue').innerHTML = new Intl.NumberFormat('vn-VN').format(tax);
};



// Bài tập: Tính tiền cáp 

// Ẩn/hiện input số kết nối:
document.getElementById('loaiKH').onchange = function () {
    var select = document.getElementById('loaiKH').value;
    var input = document.getElementById('ketNoi');
    var label = document.getElementById('labelKetNoi');

    if (select === 'DN') {
        label.style.visibility = 'visible';
        input.style.visibility = 'visible';
    } else {
        label.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
    }
}

// Tính tiền cáp:
document.getElementById('btnTienCap').onclick = tienCap;
function tienCap () {
    var maKH = document.getElementById('maKH').value;
    var loaiKH = document.getElementById('loaiKH').value;
    var soKenh = +document.getElementById('soKenh').value;
    var ketNoi = +document.getElementById('ketNoi').value;
    
    // Bảng giá:
    var billfee;
    var servicefee;
    var rentchannel;

    if (loaiKH === 'ND') {
        billfee = 4.5;
        servicefee = 20.5;
        rentchannel = 7.5;
    } else {
        billfee = 15;
        rentchannel = 50;
        if (ketNoi <= 10) {
            servicefee = 75;
        } else {
            servicefee = 75 + (ketNoi - 10) * 5;
        }
    }

    // Tính tiền:

    var total;
    total = billfee + servicefee + rentchannel * soKenh;

    // Show kết quả:

    document.getElementById('spanMaKh').innerHTML = maKH;
    document.getElementById('spanTienCap').innerHTML = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(total);
  
};