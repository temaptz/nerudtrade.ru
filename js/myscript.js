//$.material.init();

function openNewsContent(id){
  //$('.news').addClass('min');
  //$('#' + id).removeClass('min');
  $('#' + id + ' .news-content').removeClass('min');
  $('#' + id + ' .close').removeClass('min');
  $('#' + id + ' .news-content').addClass('max');
}

function closeNewsContent(id){
  $('#' + id).removeClass('max');
  //$('.news').removeClass('min');
  $('#' + id + ' .news-content').addClass('min');
  $('#' + id + ' .close').addClass('min');
}

var height = 400; // высота шапки
var margin = 0;    // отступ когда шапка уже не видна
$(function(){
  $(window).scroll(function(){
    var top = $(this).scrollTop();
    var elem = $('#navbar');
    if (top > height) {
      elem.addClass('fixed-top');
    }
    if(top < height){
      $('#navbar').removeClass('fixed-top');
    }
  });

  $('.right-header').hover(function(){
    $('.right-header').removeClass('col-md-3');
    $('.right-header').addClass('col-md-7');

    $('.left-header').removeClass('col-md-9');
    $('.left-header').addClass('col-md-5');

    $('.intro-body').addClass('right-moved');
  }, function(){
    $('.right-header').removeClass('col-md-7');
    $('.right-header').addClass('col-md-3');

    $('.left-header').removeClass('col-md-5');
    $('.left-header').addClass('col-md-9');

    $('.intro-body').removeClass('right-moved');
  });
});

$(document).ready(function(){
  $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      var top = $(scroll_el).offset().top - 70;
      $('html, body').animate({ scrollTop: top}, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});

'use strict';
/* Controllers */
var app = angular.module('myApp', []);

app.controller('MyCtrl1', ['$scope', '$timeout', 'myService', function($scope, $timeout, myService) {
  $scope.formInfo = {};
  $scope.sending = false;

  $scope.sendEmail = function() {
    $scope.nameRequired = '';
    $scope.emailRequired = '';
    $scope.telRequired = '';

    if (!$scope.formInfo.name) {
      $scope.nameRequired = 'Пожалуйста, введите имя';
    }

    if (!$scope.formInfo.email) {
      $scope.emailRequired = 'Пожалуйста, введите Email';
    }

    if (!$scope.formInfo.phone) {
      $scope.emailRequired = 'Пожалуйста, введите номер телефона';
    }

    if (!$scope.formInfo.text) {
      $scope.telRequired = 'Пожалуйста, введите номер телефона';
    }

    $scope.sending = true;
    myService.sendEmailService($scope.formInfo.name, $scope.formInfo.email, $scope.formInfo.phone, $scope.formInfo.text)
      .then(function(resp){
        if(resp){
          $scope.sended = true;
          $timeout(function(){
            $scope.sended = false;
            $scope.sending = false;
          }, 2000);
          $scope.formInfo = {
            name: '',
            email: '',
            phone: '',
            text: ''
          }
        }
      })
  };
}]);

app.service('myService', function($http){
  var service = {
    sendEmailService: sendEmailService
  };
  return service;

  //Указать причину пропуска
  function sendEmailService(name, email, phone, text){
    return $http.post('/feedback/sendMail.php',{
      name: name,
      email: email,
      phone: phone,
      text: text
    }).then(function () {
      return true;
    }, function(){
      return false;
    });
  }
});

var appProduction = angular.module('appProduction', ['jkuri.gallery']);

appProduction.controller('Photo', function($scope, $document) {
    var self = this;
    self.images = [
      {thumb: '/img/thumbs/1.jpg', img: '/img/lg/1.jpg'},
      {thumb: '/img/thumbs/4.jpg', img: '/img/lg/4.jpg'},
      {thumb: '/img/thumbs/11.jpg', img: '/img/lg/11.jpg'},
      {thumb: '/img/thumbs/15.jpg', img: '/img/lg/15.jpg'},
      {thumb: '/img/thumbs/19.jpg', img: '/img/lg/19.jpg'},
      {thumb: '/img/thumbs/23.jpg', img: '/img/lg/23.jpg'},
      {thumb: '/img/thumbs/28.jpg', img: '/img/lg/28.jpg'},
      {thumb: '/img/thumbs/31.jpg', img: '/img/lg/31.jpg'},
      {thumb: '/img/thumbs/34.jpg', img: '/img/lg/34.jpg'},
      {thumb: '/img/thumbs/37.jpg', img: '/img/lg/37.jpg'},
      {thumb: '/img/thumbs/40.jpg', img: '/img/lg/40.jpg'},
      {thumb: '/img/thumbs/43.jpg', img: '/img/lg/43.jpg'},
      {thumb: '/img/thumbs/48.jpg', img: '/img/lg/48.jpg'},
      {thumb: '/img/thumbs/51.jpg', img: '/img/lg/51.jpg'},
      {thumb: '/img/thumbs/54.jpg', img: '/img/lg/54.jpg'},
      {thumb: '/img/thumbs/55.jpg', img: '/img/lg/55.jpg'},
      {thumb: '/img/thumbs/60.jpg', img: '/img/lg/60.jpg'},
      {thumb: '/img/thumbs/61.jpg', img: '/img/lg/61.jpg'},
      {thumb: '/img/thumbs/62.jpg', img: '/img/lg/62.jpg'},
      {thumb: '/img/thumbs/63.jpg', img: '/img/lg/63.jpg'},
      {thumb: '/img/thumbs/64.jpg', img: '/img/lg/64.jpg'},
      {thumb: '/img/thumbs/65.jpg', img: '/img/lg/65.jpg'},
      {thumb: '/img/thumbs/66.jpg', img: '/img/lg/66.jpg'},
      {thumb: '/img/thumbs/67.jpg', img: '/img/lg/67.jpg'},
      {thumb: '/img/thumbs/68.jpg', img: '/img/lg/68.jpg'},
      {thumb: '/img/thumbs/69.jpg', img: '/img/lg/69.jpg'},
      {thumb: '/img/thumbs/70.jpg', img: '/img/lg/70.jpg'},
      {thumb: '/img/thumbs/71.jpg', img: '/img/lg/71.jpg'},
      {thumb: '/img/thumbs/72.jpg', img: '/img/lg/72.jpg'},
      {thumb: '/img/thumbs/73.jpg', img: '/img/lg/73.jpg'},
      {thumb: '/img/thumbs/74.jpg', img: '/img/lg/74.jpg'},
      {thumb: '/img/thumbs/75.jpg', img: '/img/lg/75.jpg'},
      {thumb: '/img/thumbs/76.jpg', img: '/img/lg/76.jpg'},
      {thumb: '/img/thumbs/77.jpg', img: '/img/lg/77.jpg'},
      {thumb: '/img/thumbs/78.jpg', img: '/img/lg/78.jpg'},
      {thumb: '/img/thumbs/79.jpg', img: '/img/lg/79.jpg'},
      {thumb: '/img/thumbs/80.jpg', img: '/img/lg/80.jpg'},
      {thumb: '/img/thumbs/81.jpg', img: '/img/lg/81.jpg'},
      {thumb: '/img/thumbs/82.jpg', img: '/img/lg/82.jpg'},
      {thumb: '/img/thumbs/83.jpg', img: '/img/lg/83.jpg'},
      {thumb: '/img/thumbs/84.jpg', img: '/img/lg/84.jpg'},
      {thumb: '/img/thumbs/85.jpg', img: '/img/lg/85.jpg'},
      {thumb: '/img/thumbs/86.jpg', img: '/img/lg/86.jpg'},
      {thumb: '/img/thumbs/87.jpg', img: '/img/lg/87.jpg'},
      {thumb: '/img/thumbs/88.jpg', img: '/img/lg/88.jpg'},
      {thumb: '/img/thumbs/89.jpg', img: '/img/lg/89.jpg'},
      {thumb: '/img/thumbs/90.jpg', img: '/img/lg/90.jpg'},
      {thumb: '/img/thumbs/91.jpg', img: '/img/lg/91.jpg'},
      {thumb: '/img/thumbs/92.jpg', img: '/img/lg/92.jpg'},
      {thumb: '/img/thumbs/93.jpg', img: '/img/lg/93.jpg'},
      {thumb: '/img/thumbs/94.jpg', img: '/img/lg/94.jpg'},
      {thumb: '/img/thumbs/95.jpg', img: '/img/lg/95.jpg'},
      {thumb: '/img/thumbs/96.jpg', img: '/img/lg/96.jpg'},
      {thumb: '/img/thumbs/97.jpg', img: '/img/lg/97.jpg'}
    ];
  }
);

// Создание обработчика для события window.onLoad

ymaps.ready(init);
var map;

function init(){
// Создание экземпляра карты и его привязка к созданному контейнеру
  map = new ymaps.Map("YMapsID", {
    center: [62.387129, 32.987769],
    zoom: 6
  });
// Создание объекта геокодера

  var placemark1 = new ymaps.Placemark([62.488805, 34.350988],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Новый поселок'
  });
  map.geoObjects.add(placemark1);

  var placemark2 = new ymaps.Placemark([62.222306, 34.329684],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Нигозеро'
  });
  map.geoObjects.add(placemark2);

  var placemark3 = new ymaps.Placemark([62.673558, 34.270474],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Кяппесельга'
  });
  map.geoObjects.add(placemark3);

  var placemark4 = new ymaps.Placemark([62.802729, 34.45896],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Пергуба'
  });
  map.geoObjects.add(placemark4);

  var placemark5 = new ymaps.Placemark([64.414956, 34.465868],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Сосновец'
  });
  map.geoObjects.add(placemark5);

  var placemark6 = new ymaps.Placemark([61.745176, 30.666428],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Хелюля'
  });
  map.geoObjects.add(placemark6);

  var placemark7 = new ymaps.Placemark([61.705129, 30.715107],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Кааламо'
  });
  map.geoObjects.add(placemark7);

  var placemark8 = new ymaps.Placemark([61.575201, 31.460794],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Питкяранта'
  });
  map.geoObjects.add(placemark8);

  var placemark9= new ymaps.Placemark([61.680274, 31.259122],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Леппясилта'
  });
  map.geoObjects.add(placemark9);

  var placemark10= new ymaps.Placemark([61.865453, 33.914453],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Падозеро'
  });
  map.geoObjects.add(placemark10);

  var placemark11= new ymaps.Placemark([61.888773, 33.718337],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Виллагора'
  });
  map.geoObjects.add(placemark11);

  var placemark12= new ymaps.Placemark([62.087933, 32.329511],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Суоярви'
  });
  map.geoObjects.add(placemark12);

  var placemark13= new ymaps.Placemark([62.031033, 32.09976],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Пийтсиеки'
  });
  map.geoObjects.add(placemark13);

  var placemark14= new ymaps.Placemark([61.921939, 31.545139],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Райконкоски'
  });
  map.geoObjects.add(placemark14);

  var placemark15= new ymaps.Placemark([61.870716, 31.333319],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Леппясюрья'
  });
  map.geoObjects.add(placemark15);

  var placemark16= new ymaps.Placemark([62.434039, 32.64677],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Лахколамен'
  });
  map.geoObjects.add(placemark16);

  var placemark17= new ymaps.Placemark([63.185374, 32.316752],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Суккозеро'
  });
  map.geoObjects.add(placemark17);

  var placemark18= new ymaps.Placemark([61.487159, 34.487841],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Пяжиева Сельга'
  });
  map.geoObjects.add(placemark18);

  var placemark19= new ymaps.Placemark([61.583274, 34.506706],{
    hintContent: 'Щебень Карелии',
    balloonContent: 'Станция - Деревянка'
  });
  map.geoObjects.add(placemark19);

}

