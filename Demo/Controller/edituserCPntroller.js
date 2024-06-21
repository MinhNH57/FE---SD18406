window.edituserCPntroller = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Chỉnh sửa thông tin người dùng";

    $scope.title = "Chi tiet nguoi dung"

    let id = $routeParams.id;
    const APIuser = "http://localhost:3000/users";
    // lay ra thong tin
    $http.get(
        APIuser + "/" + id
    ).then(function (reponsive) {
        console.log(reponsive);
        if (reponsive.status == 200) {
            $scope.userInput = {
                id: reponsive.id,
                name: reponsive.data.name,
                phone: reponsive.data.phone,
                email: reponsive.data.email,
                NgaySinh: new Date(reponsive.data.NgaySinh)
            }
        }
    });

    // Chinh sua 
    $scope.UpdateUSer() = function () {

        if (check()) {
            let newUser = {
                name: $scope.userInput.name,
                phone: $scope.userInput.phone,
                email: $scope.userInput.email,
                NgaySinh: $scope.userInput.NgaySinh,
            }
            $http.push(APIuser + "/" + id, newUser).then(function (repon) {
                if (repon.status == 200) {
                    alert("Chỉnh sửa thông tin thành công");
                    $location.path("/list-user");
                }
            });
        }
    }

    function check() {
        let flag = true;
        $scope.kiemTra = {
            name: false,
            phone: false,
            email: false,
            NgaySinh: false,
        };

        // Kiem tra loi
        if (!$scope.userInput || !$scope.userInput.name) {
            flag = false;
            $scope.kiemTra.name = true;
        }

        if (!$scope.userInput || !$scope.userInput.phone) {
            flag = false;
            $scope.kiemTra.phone = true;
        }

        if (!$scope.userInput || !$scope.userInput.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }

        if (!$scope.userInput || !$scope.userInput.NgaySinh) {
            flag = false;
            $scope.kiemTra.NgaySinh = true;
        }

        if ($scope.userInput && $scope.userInput.email) {
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let checkEmail = emailPattern.test($scope.userInput.email);
            if (!checkEmail) {
                flag = false;
                $scope.kiemTra.email = true;
            }
        }

        if ($scope.userInput && $scope.userInput.phone) {
            let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            let checkSDT = phonePattern.test($scope.userInput.phone);
            if (!checkSDT) {
                flag = false;
                $scope.kiemTra.phone = true;
            }
        }
        return flag;
    }
}