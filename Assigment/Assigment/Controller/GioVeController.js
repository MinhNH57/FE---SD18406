window.GioVeController = function($scope , $http , $location){
    $scope.title = "DANH SÁCH CÁC VÉ ĐÃ ĐẶT"
    const APItikets = "http://localhost:3000/tickets";

    function getAllTickets()
    {
        $http.get(APItikets).then(function(responsive){
            console.log(responsive);
            if(responsive.status == 200)
            {
                $scope.lstTickets = responsive.data;
            }
        });
    }
    getAllTickets();

    $scope.getChuyenBay = function(chuyenbayValue) {
        var chuyens = {
            1: "VietNam -- South Korea",
            2: "VietNam -- ThaiLand",
            3: "VietNam -- China"
        };
        return chuyens[chuyenbayValue] || "Unknown";
    };

    $scope.DeleteTickets = function(id) {
        let confirm =  window.confirm("Do you want to delete this ticket?");
        if(confirm)
        {
            $http.delete(APItikets + "/" + id).then(
                function(responsive){
                    if(responsive.status == 200)
                    {
                        alert("Xóa thành công");
                    }
                }
            );
        }
    }
}