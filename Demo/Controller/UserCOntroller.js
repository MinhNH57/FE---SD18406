window.UserCOntroller = function ($scope, $http, $location) {
    $scope.listTitle = "Danh sách người dùng";

    //Link API 
    const APIuser = "http://localhost:3000/users";

    // Muon ket noi duwoc API chung ta  bắt buộc phải có thằng $http
    //$http dùng để sưtr dụng các phương thức http:
    // Get , Push , Post , delete
    // Tao mot ham hien thị danh sach 
    function getAll() {
        $http.get(APIuser).then(function (responsive) {
            console.log(responsive.data);;

            if (responsive.status == 200) {
                $scope.listUser = responsive.data
            } else {
                alert("Error")
            }
        });
    }
    getAll();

    $scope.DeleteUser = function (id) {
        let confirm = window.confirm("Bạn có muốn xóa không ?");
        if (confirm) {
            //nếu người dùng ấn oke thì sẽ chạy vào đây
            $http.delete(
                //"http://localhost:3000/users/"+id
                //apiUsers + "/" + id
                `${APIuser}/${id}`

            ).then(
                function (response) {
                    if (response.status == 200) {
                        alert("Bạn đã xóa thành công");
                        getAll();
                    }
                }
            );

        }
    }

}