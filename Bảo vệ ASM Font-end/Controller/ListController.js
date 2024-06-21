window.ListController=function($scope , $http , $routeParams)
{
    const API = "http://localhost:3000/QuanAos";

    function getAll()
    {
        $http.get(API).then(
            function(respon)
            {
                if(respon.status == 200)
                {
                    $scope.lstSP = respon.data;
                }
            }
        );
    }
    getAll();

    $scope.change = function (value)
    {
        Loais = {
            1: "Đồ nam",
            2: "Đồ nữ",
            3: "Trẻ em"
        }
        return Loais[value];
    }

    $scope.Delete = function (id)
    {
        let confirm = window.confirm("Do you want to dalete ?");
        if(confirm)
        {
            $http.delete(API + "/" + id).then(function(respon)
            {
                if(respon.status == 200)
                {
                    alert("Success");
                }
            });
        }
    }
}