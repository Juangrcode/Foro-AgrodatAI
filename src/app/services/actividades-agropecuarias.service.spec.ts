/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActividadesAgropecuariasService } from './actividades-agropecuarias.service';

describe('Service: ActividadesAgropecuarias', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActividadesAgropecuariasService]
    });
  });

  it('should ...', inject([ActividadesAgropecuariasService], (service: ActividadesAgropecuariasService) => {
    expect(service).toBeTruthy();
  }));
});
