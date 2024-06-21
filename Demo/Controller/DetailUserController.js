window.DetailUserController = function($scope , $http , $location , $routeParams)
{
    $scope.title = "Chi tiet nguoi dung"

    let id = $routeParams.id;
    const APIuser = "http://localhost:3000/users";

    // lay ra thong tin
    $http.get(
        APIuser + "/" + id
    ).then(function (reponsive){
        console.log(reponsive);
        if(reponsive.status == 200)
        {
            $scope.userInput = {
                id:reponsive.id,
                name:reponsive.data.name,
                phone: reponsive.data.phone,
                email: reponsive.data.email,
                NgaySinh :new Date(reponsive.data.NgaySinh)
            }
        }
    });
}