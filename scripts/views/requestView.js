'use strict';

var app = app || {};

(module => {
  const requestView = {}

  requestView.initLoginPage = () => {
    let currentDate = new Date;
    let username = localStorage.username ? localStorage.username : '';
    if (!module.requestView.eventListener) $('.icon-menu').on('click', module.requestView.dropNav);
    requestView.eventListener = true;
    $('.tab-content').hide();
    $('#currentDate').empty();
    $('#currentDate').hide();
    $('#info').hide();
    $('#currentDate').append('The current date is ' + currentDate.toDateString(',') + '.');
    $('#currentDate').fadeIn(500);
    $('#info').fadeIn(750);
    $('.login').fadeIn(1000);
    $('#aboutUs').on('click', app.requestView.initAboutPage);
    $('#username').val(username);
  }

  requestView.initKnownUser = (user) => {
    $('.tab-content').hide();
    $('#info').hide();
    $('.request').fadeIn(750);
    let date = user[0].fav_date.split('T')[0].split('-');
    $('#year').val(date[0]);
    $('#month').val(date[1]);
    $('#day').val(date[2]);
  };

  requestView.initNewUser = (user) => {
    $('.tab-content').hide();
    $('.request').fadeIn(750);
    $('#year').val('');
    $('#month').val('');
    $('#day').val('');
  }

  requestView.initAboutPage = () => {
    $('.tab-content').hide();
    $('#currentDate').hide();
    $('#chosenDate').hide();
    $('#info').hide();
    $('.aboutUs').fadeIn(750);
  }

  requestView.showDate = () => {
    let currentDate = new Date;
    $('.tab-content').hide();
    $('#currentDate').append(currentDate.toDateString());
  }

  requestView.dropNav = () => {
    var drop = document.getElementById('topNav');
    if (drop.className === 'topNav') {
      drop.className += ' responsive';
    } else {
      drop.className = 'topNav';
    }
  }

  module.requestView = requestView;
})(app)

