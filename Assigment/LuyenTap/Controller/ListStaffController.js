window.ListStaffController = function($scope , $http , $location) {
    $scope.title = "Danh sách nhân viên FPT 2024";
    const API_Staff = "http://localhost:3000/Staff";

    function getAllStaff(){
        $http.get(API_Staff).then(function(responsive)
        {
            console.log(responsive);
            if(responsive.status == 200)
            {
                $scope.lst_Staff = responsive.data;
            }
        });
    }
    getAllStaff();


    $scope.handleAction = function(id){
        let confirm = window.confirm("Bạn chắc chắn muốn xa thải nhân viên này?");
        if(confirm)
        {
            $http.delete(API_Staff + "/" + id).then(
                function(responsive)
                {
                    console.log(responsive);
                    if(responsive.status == 200)
                    {
                        alert("Success");
                    }
                }
            );
        }
    }
}