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

