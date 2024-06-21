window.ThemController = function($scope , $http , $location)
{

    const API = "http://localhost:3000/QuanAos";

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

        if(!$scope.input || !$scope.input.gia || $scope.input.gia < 10000)
        {
            flag = false;
        }
        return flag;
    }

    $scope.Them = function()
    {
        if(check())
        {
            let NewQuanAo = {
                ma_sp : $scope.input.ma_sp,
                ten : $scope.input.ten,
                loai : $scope.input.loai,
                gia : $scope.input.gia,
            }
            $http.post(API , NewQuanAo).then(
                function (respon)
                {
                    if(respon.status == 201)
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