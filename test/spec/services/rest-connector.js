'use strict';

describe('Service: RestConnector', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var RestConnector;
  beforeEach(inject(function (_RestConnector_) {
    RestConnector = _RestConnector_;
  }));

  it('should do something', function () {
    expect(!!RestConnector).toBe(true);
  });

});
