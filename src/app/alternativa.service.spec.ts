import { TestBed, inject } from '@angular/core/testing';

import { AlternativaService } from './alternativa.service';

describe('AlternativaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlternativaService]
    });
  });

  it('should ...', inject([AlternativaService], (service: AlternativaService) => {
    expect(service).toBeTruthy();
  }));
});
