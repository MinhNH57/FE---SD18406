window.Update_staffController = function ($scope , $http , $routeParams , $location)
{
    $scope.title = "Chỉnh sửa thông tin nhân viên";
    let id = $routeParams.id;
    const API_Staff = "http://localhost:3000/Staff";

    $http.get(API_Staff +"/" + id).then(
        function(responsive)
        {
            if(responsive.status == 200)
            {
                $scope.input = {
                    Name:responsive.data.hovaten,
                    NgaySinh:new Date(responsive.data.NgaySinh),
                    DiaChi:responsive.data.Diachi,
                    Sodienthoai:responsive.data.SDT
                }
            }
        }
    );

    $scope.update = function(){
        let i = window.confirm("Bạn muốn chỉnh sửa thông tin của nhân viên này ?");
        if(i)
        {
            if(check())
            {
                let Up_Staff = {
                    hovaten:$scope.input.Name,
                    NgaySinh:$scope.input.NgaySinh,
                    Diachi : $scope.input.DiaChi,
                    SDT : $scope.input.Sodienthoai
                }
                $http.put(API_Staff + "/" + id , Up_Staff).then(
                    function(responsive){
                        if(responsive.status == 200)
                        {
                            alert("Success");
                            $location.path("/Danh-sach-nhan-vien");
                        }
                    }
                );
            }
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