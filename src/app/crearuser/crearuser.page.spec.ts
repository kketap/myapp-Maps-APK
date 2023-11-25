import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearuserPage } from './crearuser.page';
import { IonicModule } from '@ionic/angular';

describe('CrearuserPage', () => {
  let component: CrearuserPage;
  let fixture: ComponentFixture<CrearuserPage>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearuserPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
