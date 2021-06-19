import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-applicant-list-search',
  templateUrl: './applicant-list-search.component.html',
  styleUrls: ['./applicant-list-search.component.css']
})
export class ApplicantListSearchComponent implements OnDestroy, AfterViewInit {

  @Output()
  public readonly search: EventEmitter<string>;
  private readonly destroy$: Subject<void>;

  @ViewChild('input', { static: false })
  private readonly input: ElementRef<HTMLInputElement>;

  constructor() {
    this.search = new EventEmitter<string>();
    this.destroy$ = new Subject();
  }

  public ngAfterViewInit(): void {
    this.listenSearch();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private listenSearch(): void {

    const input = this.input.nativeElement;

    fromEvent(input, 'input')
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(100),
      )
      .subscribe(() => {
        this.search.emit(input.value);
      });
  }

}
