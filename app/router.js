import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: 'hash'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('landing-page');
  this.route('about');
  this.route('defense-base-act');
  this.route('contact');
  this.route('practice-area');
  this.route('japan');
  this.resource('countries', function(){
    this.route('japan');
    this.route('kuwait');
    this.route('afghanistan');
    this.route('iraq');
    this.route('guam');
    this.route('qatar');
  });
});

export default Router.map(function() {
  this.resource('practice-areas', function() {
    this.route('non-appropriated');
    this.route('cruise-ship');
    this.route('outer-lands');
    this.route('jones-act');
    this.route('maritime-law');
    this.route('personal-injury');
    this.route('longshore-act');
    this.route('defense-base-acts');
    this.route('workers-comp');
  });

  this.resource('mega-menu', function() {
    this.route('countries');
  });

  this.resource('about-dba', function() {
    this.route('what-is-dba');
    this.route('dba-backgrounds');
    this.route('dba-claims');
    this.route('dba-comp');
    this.route('dba-injuries');
    this.route('dba-lawyers');
    this.route('what-to-expect');
    this.route('why-dba-attorney');
  });

  this.resource('about', function() {
    this.route('mario');
    this.route('randell');
    this.route('genevieve');
    this.route('alexander');
  });

  this.route('landing-page');
  this.route('home');

});
