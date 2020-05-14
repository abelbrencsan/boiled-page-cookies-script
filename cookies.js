/**
 * Cookies - v1.0.0
 * Copyright 2020 Abel Brencsan
 * Released under the MIT License
 */

var Cookies = (function(){

	'use strict';

	/**
	* Create a new cookie with given name, value and expiration. (public)
	* @param name string
	* @param value string
	* @param days number
	*/
	var create = function(name, value, days) {
		var expiration = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expiration = '; expires=' + date.toGMTString();
		}
		document.cookie = name + '=' + value + expiration + '; path=/';
	}

	/**
	* Read cookie by given name. (public)
	* @param name string
	*/
	var read = function(name) {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nameEQ) == 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	}

	/**
	* Remove cookie by given name. (public)
	* @param name string
	*/
	var remove = function(name) {
		create(name, '', -1);
	}

	return {
		create: create,
		read: read,
		remove: remove,
	};

})();
