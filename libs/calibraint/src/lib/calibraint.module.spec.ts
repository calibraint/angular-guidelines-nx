import { async, TestBed } from '@angular/core/testing';
import { CalibraintModule } from './calibraint.module';

describe('CalibraintModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalibraintModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CalibraintModule).toBeDefined();
  });
});
