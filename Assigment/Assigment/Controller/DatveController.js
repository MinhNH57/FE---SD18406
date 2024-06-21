window.DatveController = function ($scope, $http , $location) {
    const APItikets = "http://localhost:3000/tickets";

    function check() {
        let flag = true;
        $scope.kiemTra = {
            hovaten: false,
            CCCD: false,
            email:false,
            GioiTinh: false,
            sodienthoai: false,
            Chuyenbay : false,
            NgaySinh : false,
            Hanhly : false,
            Hinhthucthanhtoan: false
        };

        // Kiem tra loi
        // if (!$scope.input || !$scope.input.Name) {
        //     flag = false;
        //     $scope.kiemTra.hovaten = true;
        // }

        if(!$scope.input || !$scope.input.CCCD || !/^\d{12}$/.test($scope.input.CCCD))
        {
            flag=false;
            $scope.kiemTra.CCCD = true;
        }

        if(!$scope.input || !$scope.input.Email)
        {
            flag= false;
            $scope.kiemTra.email = true;
        }

        if(!$scope.input || !$scope.input.SDT)
        {
            flag = false;
            $scope.kiemTra.sodienthoai = true;
        }

        if (!$scope.input || !$scope.selectedValue) {
            flag = false;
            $scope.kiemTra.Chuyenbay = true;
        }

        if(!$scope.input || !$scope.input.NgaySinh){
            flag = false;
            $scope.kiemTra.NgaySinh = true;
        }

        if ($scope.input && $scope.input.Email) {
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let checkEmail = emailPattern.test($scope.input.Email);
            if (!checkEmail) {
                flag = false;
                $scope.kiemTra.email = true;
            }
        }

        // if(!$scope.input || !$scope.input.Hanhly)
        // {
        //     flag = false;
        //     $scope.kiemTra.Hanhly = true;
        // }

        if(!$scope.input || !$scope.selectedValue1)
        {
            flag = false;
            $scope.kiemTra.Hinhthucthanhtoan = true;
        }

        if ($scope.input && $scope.input.SDT) {
            let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            let checkSDT = phonePattern.test($scope.input.SDT);
            if (!checkSDT) {
                flag = false;
                $scope.kiemTra.sodienthoai = true;
            }
        }
        return flag;
    }

    $scope.checkForm = function () {
        if (check()) {
            let newTicket = {
                hovaten: $scope.input.HoTen,
                CCCD:$scope.input.CCCD,
                email:$scope.input.Email,
                sodienthoai: $scope.input.SDT,
                gioiTinh : $scope.input.GioiTinh,
                Chuyenbay: $scope.selectedValue,
                NgaySinh : $scope.input.NgaySinh,
                Hanhly : $scope.input.HanhLy,
                Hinhthucthanhtoan : $scope.selectedValue1
            }
            let confirm = window.confirm("Bạn chắc chắn muốn đặt vé");
            if(confirm)
            {
                $http.post(APItikets, newTicket).then(function (repon) {
                    if (repon.status == 201) {
                        alert("Thêm thành công");
                        $location.path("/GioVe");
                    }
                });
            }
        }
    }
}