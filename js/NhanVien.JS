function nhanVien(id, ten, email, address, ngaylam, luong) {
  (this.idNV = id),
    (this.tenNV = ten),
    (this.email = email),
    (this.address = address),
    (this.ngaylam = ngaylam),
    (this.luong = luong);

  //tính tổng lương
  this.tinhTL = function () {
    this.tongluong = "";
    // console.log(this.tongluong);
    return this.tongluong = this.luong * this.ngaylam ;
  };

  //xét giờ làm
  //   this.xetGioLam = function() {
  //       this.xeploai = "";
  //   if (giolam >= 192) {
  //     return   this.xeploai = "NV Xuất sắc";
  //   } else if (176 <= giolam && giolam < 192) {
  //     return   this.xeploai =  "NV Giỏi";
  //   } else if (160 <= giolam && giolam < 176) {
  //     return   this.xeploai = "NV Khá";
  //   } else {
  //     return   this.xeploai = "NV Trung Bình";
  //   }
  // }
}
