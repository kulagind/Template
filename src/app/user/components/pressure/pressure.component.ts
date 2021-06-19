import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientsHttpService } from '../../../admin/services/patients-http.service';
import { UserService } from '../../services/user.service';
import { map, startWith } from 'rxjs/operators';

const ACTIONS: string[] = [
  'Прогулка',
  'Сон',
  'Спорт',
  'Работа в офисе',
  'Физический труд',
  'Катание на велосипеде',
  'Уборка',
  'Просмотр телевизора',
  'Чтение',
  'Программирование',
  'Еда',
  'Езда за рулем',
  'Катание на коньках',
  'Чаепитие',
  'Езда на коне',
  'Шоппинг',
  'Покупка продуктов',
];

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {

  public actions = ACTIONS;

  public readonly formGroup = new FormGroup({
    lowerPoint: new FormControl(),
    upperPoint: new FormControl(),
    pulse: new FormControl(),
    action: new FormControl(),
  })

  public filteredActions = this.formGroup.get('action').valueChanges
    .pipe(
      startWith(''),
      map(action => action ? this._filter(action) : this.actions.slice())
    );

  constructor(
    private readonly patientHttpService: PatientsHttpService,
    private readonly userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.patientHttpService.sendMeasurements(
      this.userService.token,
      this.formGroup.value
    )
      .subscribe(() => {
        this.formGroup.reset();
      })
  }

  displayFn(action: string): string {
    return action;
  }

  private _filter(option: string): string[] {
    const filterValue = option.toLowerCase();
    return this.actions.filter(action => action.toLowerCase().includes(filterValue));
  }

}
