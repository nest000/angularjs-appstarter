'use strict';

describe('Service: backendApi', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var backendApi;
  beforeEach(inject(function (_backendApi_) {
    backendApi = _backendApi_;
  }));

  it('should do something', function () {
    expect(!!backendApi).toBe(true);
  });

});
