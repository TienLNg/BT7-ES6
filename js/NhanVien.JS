function nhanVien(id, ten, email, password, ngaylam, luong, chuc, giolam) {
  (this.idNV = id),
    (this.tenNV = ten),
    (this.email = email),
    (this.pass = password),
    (this.ngaylam = ngaylam),
    (this.luong = luong),
    (this.chucvu = chuc),
    (this.giolam = giolam);

  //tính tổng lương
  this.tinhTL = function () {
    this.tongluong = "";
    if (chuc == "Sếp") {
      return (this.tongluong = this.luong * 3);
    } else if (chuc == "Trưởng phòng") {
      return (this.tongluong = this.luong * 2);
    } else if (chuc == "Nhân viên") {
      console.log(this.tongluong);
      return (this.tongluong = this.luong);
    }
  };

  //xét giờ làm
    this.xetGioLam = function() {
        this.xeploai = "";
    if (giolam >= 192) {
      return   this.xeploai = "NV Xuất sắc";
    } else if (176 <= giolam && giolam < 192) {
      return   this.xeploai =  "NV Giỏi";
    } else if (160 <= giolam && giolam < 176) {
      return   this.xeploai = "NV Khá";
    } else {
      return   this.xeploai = "NV Trung Bình";
    }
  }
}
