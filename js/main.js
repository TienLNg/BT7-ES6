const dsnv = new DanhSachNhanVien();

const validation = new Validation();

//! khởi tạo
function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalstorage() {
  var dataLocal = JSON.parse(localStorage.getItem("DSNV"));

  if (dataLocal !== null) {
    hienThiTable(dataLocal);
    dsnv.mangNV = dataLocal;
  }
}

// gọi khi load web
getLocalstorage();

function themNhanVien() {
  var id = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var ngaylam = document.getElementById("datepicker").value;
  var luong = document.getElementById("luongCB").value;
  var chuc = document.getElementById("chucvu").value;
  var giolam = document.getElementById("gioLam").value;

  // console.log(id,ten,email,password,ngaylam,luong,chuc,giolam);

  var isValid = true;

  // ID
  isValid &=
    validation.checkEmpty(
      id,
      "tbTKNV",
      "Mã nhân viên không được để trống!!!"
    ) &&
    validation.checkID(
      id,
      "tbTKNV",
      "Tài khoản tối đa 4-6 số & không được trùng",
      dsnv.mangNV
    );

  // tên
  isValid &=
    validation.checkEmpty(ten, "tbTen", "Tên không được để trống") &&
    validation.checkName(ten, "tbTen", "Tên chỉ được chứa ký tự chữ");

  // email
  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

  // password
  isValid &=
    validation.checkEmpty(
      password,
      "tbMatKhau",
      "Mật khẩu không được để trống"
    ) &&
    validation.checkPassword(
      password,
      "tbMatKhau",
      "Mật khẩu phải chứa 6 - 8 ký tự (ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
    );

  // Ngày làm
  isValid &=
    validation.checkEmpty(ngaylam, "tbNgay", "Ngày không được để trống") &&
    validation.checkDate(ngaylam, "tbNgay", "Ngày chưa đúng định dạng");

  // lương cb
  isValid &=
    validation.checkEmpty(luong, "tbLuongCB", "Vui lòng điền lương vào") &&
    validation.checkLuong(
      luong,
      "tbLuongCB",
      "Lương CB từ 1.000.000 - 20.000.000"
    );

  // chức vụ
  isValid &= validation.checkEmpty(
    chuc,
    "tbChucVu",
    "Chức vụ không được để trống"
  );

  //số giờ
  isValid &=
    validation.checkEmpty(
      giolam,
      "tbGiolam",
      "Số giờ làm của bạn là bao nhiêu?"
    ) &&
    validation.checkTime(
      giolam,
      "tbGiolam",
      "Số giờ làm trong tháng từ 80 - 200 giờ"
    );

  if (isValid) {
    var nv = new nhanVien(
      id,
      ten,
      email,
      password,
      ngaylam,
      Number(luong),
      chuc,
      Number(giolam)
    );

    nv.tinhTL();
    console.log(nv);
    dsnv.themNV(nv);

    nv.xetGioLam();
    resetForm();

    setLocalStorage();
    hienThiTable(dsnv.mangNV);
  }
}
// nv.tinhTL();

function hienThiTable(mang) {
  var content = "";

  mang.map(function (nv) {
    var trNV = ` <tr>
        <td>${nv.idNV} </td>
        <td>${nv.tenNV} </td>
        <td>${nv.email} </td>
        <td>${nv.ngaylam} </td>
        <td>${nv.chucvu} </td>
        <td>${nv.tongluong} </td>
        <td>${nv.xeploai} </td>


        <td>
            <button class="btn btn-danger" onclick="xoaSinhVien('${nv.idNV}')" >Xoá</button>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemThongTin('${nv.idNV}')">Xem</button>

        </td>
        
        </tr> `;

    content += trNV;
  });

  // console.log(content);

  document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaSinhVien(id) {
  dsnv.xoaNV(id);
  hienThiTable(dsnv.mangNV);
  setLocalStorage();
}

function xemThongTin(id) {
  var indexFind = dsnv.timIndex(id);
  if (indexFind > -1) {
    console.log(dsnv.mangNV[indexFind]);
    var nvFind = dsnv.mangNV[indexFind];

    document.getElementById("tknv").value = nvFind.idNV;
    document.getElementById("tknv").disabled = true;

    document.getElementById("name").value = nvFind.tenNV;
    document.getElementById("email").value = nvFind.email;
    document.getElementById("password").value = nvFind.pass;
    document.getElementById("datepicker").value = nvFind.ngaylam;
    document.getElementById("luongCB").value = nvFind.luong;
    document.getElementById("chucvu").value = nvFind.chucvu;
    document.getElementById("gioLam").value = nvFind.giolam;
  }
}

function capNhatNV() {
  var id = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var ngaylam = document.getElementById("datepicker").value;
  var luong = document.getElementById("luongCB").value;
  var chuc = document.getElementById("chucvu").value;
  var giolam = document.getElementById("gioLam").value;

  // console.log(id,ten,email,password,ngaylam,luong,chuc,giolam);

  var nv = new nhanVien(
    id,
    ten,
    email,
    password,
    ngaylam,
    Number(luong),
    chuc,
    Number(giolam)
  );

  console.log(nv);
  nv.tinhTL();
  nv.xetGioLam();

  var result = dsnv.capNhat(nv);
  if (result) {
    setLocalStorage();
    hienThiTable(dsnv.mangNV);
    resetForm();
  } else {
    alert("Cập nhật thất bại!!!");
  }
}

function resetForm() {
  document.getElementById("tknv").disabled = false;
  document.getElementById("formQLNV").reset();
}

document.getElementById("btnSearch").onkeyup = function () {
  var tuTim = document.getElementById("btnSearch").value;
  var mangTK = dsnv.timKiemTheoTen(tuTim);
  hienThiTable(mangTK);
};
