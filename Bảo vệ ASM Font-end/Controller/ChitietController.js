window.ChitietController = function($scope , $http , $routeParams)
{
    const API = "http://localhost:3000/QuanAos";
    let id = $routeParams.id;

    $http.get(API + "/" + id).then(
        function(respon)
        {
            if(respon.status == 200)
            {
                $scope.input = {
                    ma_sp: respon.data.ma_sp,
                    ten: respon.data.ten,
                    loai: respon.data.loai,
                    gia: respon.data.gia,
                }
            }
        }
    );

    $scope.ma = $routeParams.id;
}