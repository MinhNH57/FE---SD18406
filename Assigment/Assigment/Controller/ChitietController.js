window.ChitietController = function($scope , $location , $http , $routeParams){
    $scope.title = "CHI TIẾT VÉ ĐÃ ĐẶT";

    $scope.isEditable = false;
    let id = $routeParams.id;
    const APItikets = "http://localhost:3000/tickets";
    $http.get(APItikets + "/" + id).then(function (responsive){
        console.log(responsive);
        if (responsive.status == 200) {
            $scope.input = {
                HoTen: responsive.data.hovaten,
                CCCD:responsive.data.CCCD,
                Email:responsive.data.email,
                SDT:responsive.data.sodienthoai,
                NgaySinh: new Date(responsive.data.NgaySinh),
                HanhLy:responsive.data.Hanhly,
                GioiTinh:responsive.data.gioiTinh
            };

            $scope.selectedValue = responsive.data.Chuyenbay;
            $scope.selectedValue1 = responsive.data.Hinhthucthanhtoan;
        }
    });

    $scope.Enable = function(){
        let i = window.confirm("Do you want to edit it ?");
        if(i)
        {
            $scope.isEditable = true;
        }
    }

    $scope.UpdateTickets = function(){
        if($scope.isEditable)
        {
            let i = window.confirm("Bạn có muốn thay đổi thôngtin ?");
            if(i){
                if(check())
                {
                    let UpTickets = {
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
                    $http.put(APItikets + "/" + id , UpTickets).then(
                        function (responsive){
                            if(responsive.status == 200)
                            {
                                alert("Chỉnh sửa thành công");
                                $location.path("/GioVe");
                            }
                        }
                    );
                }
            }
        }

    }


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
        if (!$scope.input || !$scope.input.HoTen) {
            flag = false;
            $scope.kiemTra.hovaten = true;
        }

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
}