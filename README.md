# Boiled Page cookies script

Cookies script for Boiled Page frontend framework. It is intended to create, add or remove cookies.

## Install

Place `cookies.js` to `/assets/js` directory and add its path to `scripts` variable in `gulpfile.js` to be combined with other scripts.

## Methods

### Create cookie

`create(name, value, days)` - Create a new cookie with given name, value and expiration.

Parameter | Type | Required | Description
----------|------|----------|------------
`name` | String | Yes | Name of cookie.
`value` | String | Yes | Value of cookie.
`days` | String | Yes | Number of days after cookie expires.

### Read cookie

`read(name)` - Read cookie by given name.

Parameter | Type | Required | Description
----------|------|----------|------------
`name` | String | Yes | Name of cookie.

### Remove cookie

`remove(name)` - Remove cookie by given name.

Parameter | Type | Required | Description
----------|------|----------|------------
`name` | String | Yes | Name of cookie.
