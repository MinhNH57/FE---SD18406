// Tao mot route co ten la /list-user
// Tao mot file view co ten la listuser.html
// Khi an vao route thi hien thi giao dien cua trang listuser
// IDnh nghia 
let myApp = angular.module("myApp" , ["ngRoute"]);
myApp.config(function($routeProvider) {
   $routeProvider
   .when(
        "/list-user", // Ten router
        {
            templateUrl: "./View/listuser.html", 
            controller :  UserCOntroller
        }
   )
   .when(
    "/add-user",
    {
        templateUrl: "./View/Adduser.html",
        controller: AdduserCOntroller
    }
   )

   .when(
    "/detail-user/:id",
    {
        templateUrl: "./View/detailUser.html",
        controller :DetailUserController
    }
   )

   .when(
    "/edit-user/:id",
    {
        templateUrl: "./View/edituser.html",
        controller: edituserCPntroller
    }
   )
});
