let q = angular.module("myApp", []);

q.controller("myController", function ($scope) {
    $scope.a = "Vĩnh Lộc - Phùng Xá - Thạch Thất - Hà Nội"

    $scope.lstPX = [{
        hoTen: "Vu Thi Thuy Tien",
        diaChi: "Thong 9 - Phung Xa - Thach That - Ha Noi",
        Sdt: "0981688583",
        gioiTinh: 1,
        ngaySinh: new Date("2004-11-20"),
        Luong: 56000000
    },
    {
        hoTen: "Nguyen Thi Tu Anh",
        diaChi: "Thong 7 - Phung Xa - Thach That - Ha Noi",
        Sdt: "0981688584",
        gioiTinh: 1,
        ngaySinh: new Date("2005-02-5"),
        Luong: 56000000
    },
    {
        hoTen: "Dang Thi Dung",
        diaChi: "Ban Giua - Huu Bang - Thach That - Ha Noi",
        Sdt: "0981688587",
        gioiTinh: 1,
        ngaySinh: new Date("2004-10-16"),
        Luong: 56000000
    },
    {
        hoTen: "Kieu Mai Thanh Thuy",
        diaChi: "Hoa Binh - Can Kiem - Thach That - Ha Noi",
        Sdt: "0981688587",
        gioiTinh: 1,
        ngaySinh: new Date("2004-6-10"),
        Luong: 56000000
    }];

    $scope.orderByField = 'hoTen';
    $scope.reverse = false;
    $scope.recordLimit = $scope.lstPX.length;
});