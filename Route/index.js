// IDnh nghia 
let myApp = angular.module("myApp" , ["ngRoute"]);
// ngRoute la mo thanh phan phu thuoc bat buoc co khi muon su dung route

// Dinh nghia ra cac router
myApp.config(function($routeProvider) {
   // $routeProvider la mot tham so mac dinh cua angylar js dung de dinh nghia ra cac router khong duoc thay doi
   $routeProvider
   .when(
        "/Trang-chu/:hoten/:namsinh/:tuoi", // Ten router
        {
            templateUrl: "view/home.html", 
            controller: trangchucontroller // map den controller router su dung
        }
   )
   .when(
        "/baiviet",
        {
            templateUrl: "view/Baiviet.html"
        }
    )

    .otherwise({
        redirectTo: "/Trang-chu"
    })
});
