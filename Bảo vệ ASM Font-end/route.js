let myapp = angular.module("myApp" , ["ngRoute"]);

myapp.config(function($routeProvider)
{
    $routeProvider
    .when(
        "/list-sanpham",
        {
            templateUrl : "./View/List_pro.html",
            controller : ListController
        }
    )

    .when(
        "/sanpham/add",
        {
            templateUrl : "./View/Them.html",
            controller : ThemController
        }
    )

    .when(
        "/sanpham/chitiet/:id",
        {
            templateUrl : "./View/Chitiet.html",
            controller : ChitietController
        }
    )

    .when(
        "/sanpham/chinhsua/:id",
        {
            templateUrl : "./View/ChinhSua.html",
            controller : SuaController
        }
    )
})