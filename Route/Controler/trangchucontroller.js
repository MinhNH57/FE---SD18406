window.trangchucontroller = function($scope,$routeParams){
    $scope.name = "Nguyen Hong Minh";
    //routeParams lay tat ca gia tri duoc ytuyen len thanh url
    console.log($routeParams);

    $scope.myFunc= function()
    {
        alert($scope.hoTen);
    }

    $scope.myFunction = function()
    {
        let i = parseFloat($scope.so1) + parseFloat($scope.so2)
        alert(i);
    }

    $scope.check = function() {
        let tk = "PH45057";
        let mk = "12345";
        $scope.loiTaiKhoan = '';
        $scope.loiMatKhau = '';

        if ($scope.TaiKhoan !== tk) {
            $scope.loiTaiKhoan = "Sai tài khoản";
        } else if ($scope.MatKhau !== mk) {
            $scope.loiMatKhau = "Sai mật khẩu";
        } else if ($scope.TaiKhoan === tk && $scope.MatKhau === mk) {
            alert("Xin chào");
        }
    }

    $scope.validateTaiKhoan = function() {
        $scope.loiTaiKhoan = '';
    }

    $scope.validateMatKhau = function() {
        $scope.loiMatKhau = '';
    }
}
