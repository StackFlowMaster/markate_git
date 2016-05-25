// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var app = angular.module('markate', ['ionic', , 'ionic-ratings', 'loading.controllers', 'appctrl.controllers', 'start.controllers',
'login.controllers', 'signup.controllers', 'loginex.controllers', 'signupex.controllers', 'forgot.controllers',
'home.controllers', 'emergency.controllers', 'tab_account.controllers', 'tab_notification.controllers', 
'tab_profile.controllers', 'req_myhome.controllers', 'req_commercial.controllers', 'req_car_step_1.controllers', 'req_car_step_2.controllers',
'req_car_step_3.controllers', 'req_car_step_4.controllers', 'req_car_step_5.controllers', 'req_car_step_6_tab_camera.controllers',  
'req_car_step_6_tab_file.controllers', 'req_car_step_7.controllers', 'req_car_step_8.controllers', 'req_car_step_9.controllers', 
'req_car_step_10.controllers', 'search_proc.controllers', 'search_detail.controllers', 'search_invite.controllers', 'deal_list.controllers', 
'deal_detail.controllers', 'deal_hide.controllers', 'track_request.controllers', 'track_estimate.controllers', 'track_job.controllers', 
'track_payment.controllers', 'track_request_detail.controllers', 'track_job_detail.controllers', 'track_estimate_detail.controllers', 
'track_estimate_sign.controllers', ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusbar.styleColor('white');
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
}])

.config(function($stateProvider, $urlRouterProvider) {
  document.body.classList.remove("platform-ios");
  document.body.classList.remove("platform-android");
  document.body.classList.add("platform-ios");
  document.body.classList.add("platform-android");
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('loading', {
    url: '/loading',
    templateUrl: 'templates/loading.html',
    controller: 'loadingCtrl'
  })

  .state('start', {
    url: '/start',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('loginex', {
    url: '/loginex',
    templateUrl: 'templates/loginex.html',
    controller: 'loginExCtrl'
  })

  .state('signupex', {
    url: '/signupex',
    templateUrl: 'templates/signupex.html',
    controller: 'signupExCtrl'
  })

  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('emergency', {
    url: '/emergency',
    templateUrl: 'templates/emergency.html',
    controller: 'emergencyCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'tabAccountCtrl'
      }
    }
  })

  .state('tab.notification', {
    url: '/notification',
    views: {
      'tab-notification': {
        templateUrl: 'templates/tab-notification.html',
        controller: 'tabNotificationCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'tabProfileCtrl'
      }
    }
  })

  .state('req-tab', {
    url: '/req-tab',
    abstract: true,
    templateUrl: 'templates/req-tabs.html'
  })

  .state('req-tab.myhome', {
    url: '/myhome',
    views: {
      'req-tab-myhome': {
        templateUrl: 'templates/req-myhome.html',
        controller: 'reqMyHomeCtrl'
      }
    }
  })

  .state('req-tab.commercial', {
    url: '/commercial',
    views: {
      'req-tab-commercial': {
        templateUrl: 'templates/req-commercial.html',
        controller: 'reqCommercialCtrl'
      }
    }
  })

  .state('req-car-step-1', {
    url: '/req-car-step-1',
    templateUrl: 'templates/req-car-step-1.html',
    controller: 'reqCarStep_1_Ctrl'
  })

  .state('req-car-step-2', {
    url: '/req-car-step-2',
    templateUrl: 'templates/req-car-step-2.html',
    controller: 'reqCarStep_2_Ctrl'
  })

  .state('req-car-step-3', {
    url: '/req-car-step-3',
    templateUrl: 'templates/req-car-step-3.html',
    controller: 'reqCarStep_3_Ctrl'
  })

  .state('req-car-step-4', {
    url: '/req-car-step-4',
    templateUrl: 'templates/req-car-step-4.html',
    controller: 'reqCarStep_4_Ctrl'
  })

  .state('req-car-step-5', {
    url: '/req-car-step-5',
    templateUrl: 'templates/req-car-step-5.html',
    controller: 'reqCarStep_5_Ctrl'
  })

  .state('req-6-tab', {
    url: '/req-6-tab',
    abstract: true,
    templateUrl: 'templates/req-car-step-6-tabs.html'
  })

  .state('req-6-tab.camera', {
    url: '/camera',
    views: {
      'req-6-tab-camera': {
        templateUrl: 'templates/req-car-step-6-tab-camera.html',
        controller: 'reqCarStep_6_camera_Ctrl'
      }
    }
  })

  .state('req-6-tab.file', {
    url: '/file',
    views: {
      'req-6-tab-file': {
        templateUrl: 'templates/req-car-step-6-tab-file.html',
        controller: 'reqCarStep_6_file_Ctrl'
      }
    }
  })

  .state('req-car-step-7', {
    url: '/req-car-step-7',
    templateUrl: 'templates/req-car-step-7.html',
    controller: 'reqCarStep_7_Ctrl'
  })

  .state('req-car-step-8', {
    url: '/req-car-step-8',
    templateUrl: 'templates/req-car-step-8.html',
    controller: 'reqCarStep_8_Ctrl'
  })

  .state('req-car-step-9', {
    url: '/req-car-step-9',
    templateUrl: 'templates/req-car-step-9.html',
    controller: 'reqCarStep_9_Ctrl'
  })

  .state('req-car-step-10', {
    url: '/req-car-step-10',
    templateUrl: 'templates/req-car-step-10.html',
    controller: 'reqCarStep_10_Ctrl'
  })

  .state('search-proc', {
    url: '/search_proc',
    templateUrl: 'templates/search-proc.html',
    controller: 'search_proc_Ctrl'
  })

  .state('search-detail', {
    url: '/search_detail/:id',
    templateUrl: 'templates/search-detail.html',
    controller: 'search_detail_Ctrl'
  })

  .state('search-invite', {
    url: '/search_invite',
    templateUrl: 'templates/search-invite.html',
    controller: 'search_invite_Ctrl'
  })

  .state('deal-list', {
    url: '/deal_list',
    templateUrl: 'templates/deal-list.html',
    controller: 'deal_list_Ctrl'
  })

  .state('deal-detail', {
    url: '/deal_detail/:id',
    templateUrl: 'templates/deal-detail.html',
    controller: 'deal_detail_Ctrl'
  })

  .state('deal-hide', {
    url: '/deal_hide',
    templateUrl: 'templates/deal-hide.html',
    controller: 'deal_hide_Ctrl'
  })

  .state('track-tabs', {
    url: '/track-tabs',
    abstract: true,
    templateUrl: 'templates/track-tabs.html'
  })

  .state('track-tabs.request', {
    url: '/request',
    views: {
      'track-tab-request': {
        templateUrl: 'templates/track-request.html',
        controller: 'track_request_Ctrl'
      }
    }
  })

  .state('track-request-detail', {
    url: '/track-request-detail/:id',
    templateUrl: 'templates/track-request-detail.html',
    controller: 'track_request_detail_Ctrl'
  })

  .state('track-tabs.estimate', {
    url: '/estimate',
    views: {
      'track-tab-estimate': {
        templateUrl: 'templates/track-estimate.html',
        controller: 'track_estimate_Ctrl'
      }
    }
  })

  .state('track-estimate-detail', {
    url: '/track-estimate-detail/:id',
    templateUrl: 'templates/track-estimate-detail.html',
    controller: 'track_estimate_detail_Ctrl'
  })

  .state('track-estimate-sign', {
    url: '/track-estimate-sign',
    templateUrl: 'templates/track-estimate-sign.html',
    controller: 'track_estimate_sign_Ctrl'
  })

  .state('track-tabs.job', {
    url: '/job',
    views: {
      'track-tab-job': {
        templateUrl: 'templates/track-job.html',
        controller: 'track_job_Ctrl'
      }
    }
  })

  .state('track-job-detail', {
    url: '/track-job-detail/:id',
    templateUrl: 'templates/track-job-detail.html',
    controller: 'track_job_detail_Ctrl'
  })

  .state('track-tabs.payment', {
    url: '/payment',
    views: {
      'track-tab-payment': {
        templateUrl: 'templates/track-payment.html',
        controller: 'track_payment_Ctrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/loading');
});
