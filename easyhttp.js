//ES5 version with AJAX and prototypes instead of classes

//constructor with 1 property: xhr
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Prototype Methods
//Make an HTTP GET request, pass in callback to make asynchronous
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  //An alternative to capture _this_ in onload function since we don't have the lexical scope of _this_ as we do with arrow functions in ES6
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
//Make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      //responseText here would return an empty object
      callback(null, 'Post deleted.');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
