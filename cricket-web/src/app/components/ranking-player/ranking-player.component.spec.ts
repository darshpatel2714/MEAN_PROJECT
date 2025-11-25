import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPlayerComponent } from './ranking-player.component';

describe('RankingPlayerComponent', () => {
  let component: RankingPlayerComponent;
  let fixture: ComponentFixture<RankingPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
