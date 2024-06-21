let myApp = angular.module("myApp" , ["ngRoute"])

myApp.config(function ($routeProvider){
    $routeProvider
    .when (
        "/TramgChu",
        {
            templateUrl : "./view/TrangChu.html",
        }
    )
    .when (
        "/GioiThieu",
        {
            templateUrl : "./view/gioithieu.html",
        }
    )
    .when (
        "/LienHe",
        {
            templateUrl : "./view/lienHe.html",
        }
    )
    .when(
        "/Datvemaybay",
        {
            templateUrl : "./view/Datve.html",
            controller: DatveController
        }
    )

    .when(
        "/GioVe",
        {
            templateUrl : "./view/gioVe.html",
            controller : GioVeController
        }
    )

    .when(
        "/Chitiet/:id",
        {
            templateUrl :"./view/Chitiet.html",
            controller : ChitietController
        }
    )
    .otherwise({
        redirectTo:"/TramgChu"
    })
});