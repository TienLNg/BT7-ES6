function Validation() {
 
    this.checkEmpty = function (value,spanID, message) {
        if (value === "") {
            //? chưa hợp lệ
            // thông báo lỗi 
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
           
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        
        return true;
    }
    this.checkID = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv, index) {
            // return biểu thức so sánh 
            return nv.idNV === value;
        });
        if (isExist) {
            //? chưa hợp lệ 
            // đã tồn tại mã 
            // thông báo lỗi 
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            // trả kết quả false
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        // trả kết quả true
        return true;
        
    }

    this.checkName = function (value, spanID,message) {
        // biểu thức chính quy (RegExp)
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
        
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
        
    }

    this.checkEmail = function(value,spanID,message){
        pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPassword = function(value,spanID,message){
        pattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkDate = function(value,spanID,message){
        pattern =  /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;
        if(value.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            // chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkLuong = function(value,spanID,message){
        pattern =  /^[0-9]+$/;
        if(value.match(pattern) && value >= 1000000 && value <= 20000000 ) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            // chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkTime = function(value,spanID,message){
        pattern =  /^[0-9]+$/;
        if(value.match(pattern) && value >= 80 && value <=200 ) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            // chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }
}