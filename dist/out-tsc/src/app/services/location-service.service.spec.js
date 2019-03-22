import { TestBed } from '@angular/core/testing';
import { LocationServiceService } from './location-service.service';
describe('LocationServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LocationServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=location-service.service.spec.js.map