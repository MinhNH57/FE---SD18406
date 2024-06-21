window.SuaController = function($scope , $http , $location , $routeParams)
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
    )

    function check ()
    {
        let flag = true;

        if(!$scope.input || !$scope.input.ma_sp)
        {
            flag = false;
        }

        if(!$scope.input || !$scope.input.ten)
        {
            flag = false;
        }

        if(!$scope.input || !$scope.input.gia)
        {
            flag = false;
        }
        return flag;
    }

    $scope.Sua = function()
    {
        if(check())
        {
            let UpQuanAo = {
                ma_sp : $scope.input.ma_sp,
                ten : $scope.input.ten,
                loai : $scope.input.loai,
                gia : $scope.input.gia,
            }
            $http.put(API + "/" + id , UpQuanAo).then(
                function (respon)
                {
                    if(respon.status == 200)
                    {
                        alert("Success");
                        $location.path("/list-sanpham");
                    }
                }
            );
        }else{
            alert("Fail");
        }
    }
}