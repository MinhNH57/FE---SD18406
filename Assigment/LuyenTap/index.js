let myApp = angular.module("myApp",["ngRoute"])

myApp.config(function($routeProvider){
    $routeProvider
    .when(
        "/Danh-sach-nhan-vien",
        {
            templateUrl: "./View/List_NV.html",
            controller : ListStaffController
        }
    )
    .when(
        "/Insert_Staff",
        {
            templateUrl: "./View/Insert_Staff.html",
            controller : Insert_stafffController
        }
    )

    .when(
        "/Update_Staff/:id",
        {
            templateUrl: "./View/Update_staff.html",
            controller : Update_staffController
        }
    )
})