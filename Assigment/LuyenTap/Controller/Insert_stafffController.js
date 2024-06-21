window.Insert_stafffController = function($scope , $http , $location){
    $scope.title = "Insert Staff";

    const API_Staff = "http://localhost:3000/Staff";

    $scope.insert = function(){
        if(check())
        {
            let newStaff ={
                hovaten:$scope.input.Name,
                NgaySinh:$scope.input.NgaySinh,
                Diachi : $scope.input.DiaChi,
                SDT : $scope.input.Sodienthoai
            };

            $http.post(API_Staff , newStaff).then(
                function (responsive){
                    if(responsive.status == 201)
                    {
                        alert("Success");
                        $location.path("/Danh-sach-nhan-vien");
                    }
                }
            );
        }
    }

    function check(){
        let flag = true;
        $scope.kiemTra = {
            hovaten : false,
            ngaysinh : false,
            diachi :false,
            sodienthoai : false
        };

        if (!$scope.input || !$scope.input.Name) {
            flag = false;
            $scope.kiemTra.hovaten = true;
        }

        if(!$scope.input || !$scope.input.NgaySinh)
        {
            flag=false;
            $scope.kiemTra.ngaysinh = true;
        }

        if(!$scope.input || !$scope.input.DiaChi)
        {
            flag= false;
            $scope.kiemTra.diachi = true;
        }

        if(!$scope.input || !$scope.input.Sodienthoai)
        {
            flag = false;
            $scope.kiemTra.sodienthoai = true;
        }
        return flag;
    }
}