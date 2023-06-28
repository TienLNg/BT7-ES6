
function DanhSachNhanVien() {
    this.mangNV = [];
     
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.timIndex = function(id){
        var indexFind = -1;
        this.mangNV.map(function(nv,index){
            if (nv.idNV === id) {
                
                indexFind = index;
            }
        });
        console.log(indexFind);
        return indexFind;
    };
    this.xoaNV = function(id){
        var index = this.timIndex(id);
        console.log(index);
        if (index > -1) {

            this.mangNV.splice(index,1)
        }
    };
    this.capNhat = function(nv){
        // tìm sv cần cập nhật 
        var indexFind = this.timIndex(nv.idNV);
        if (indexFind > -1 ) {
            
            dsnv.mangNV[indexFind] = nv;
            return true;
        } else {
            return false;
        }
    }
}

// tìm kiếm theo tên
DanhSachNhanVien.prototype.timKiemTheoLoai = function (tuTim) {
    var mangTK = [];
    // chuyển các chuỗi sang chữ thường
    var tuTimThuong = tuTim.toLowerCase();
    // xoá khoảng trắng, tab \t ,
    var tuTimReplace = tuTimThuong.replace(/\s/g,"");
    this.mangNV.map(function(nv,index){
        var tenThuong = nv.tenNV.toLowerCase();
      
        var tenReplace = tenThuong.replace(/\s/g,"")

        // kiểm tra tên sv có chưa từ cần tìm không
        var result = tenReplace.indexOf(tuTimReplace);
        if (result > -1) {
            // tìm thấy
            mangTK.push(nv);
        }
    })
    return mangTK;
}