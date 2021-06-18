import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pagination } from '../../types/pagination.type';
import { pluck, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-patients-list-paginator-slider',
  templateUrl: './patients-list-paginator-slider.component.html',
  styleUrls: ['./patients-list-paginator-slider.component.css']
})
export class PatientsListPaginatorSliderComponent implements OnInit, OnChanges {

  @Input() public readonly pagination$: BehaviorSubject<Pagination | null>;
  @Input() public readonly count: number = 0;
  public pagesForView$: BehaviorSubject<number[]>;
  private pages: number[];
  private readonly paginatorSize = 4;
  private readonly range: { start: number, end: number } = {
    start: 0, end: 4
  };

  private destroy$: Subject<void>;

  constructor() {
    this.pagination$ = new BehaviorSubject<Pagination | null>(null);
    this.destroy$ = new Subject<void>();
    this.pagesForView$ = new BehaviorSubject<number[]>([]);
    this.pages = [];
  }

  public ngOnInit(): void {
    this.listenPagination();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.calculateAllPages();
    this.calculatePagesForViews();
  }

  public paginate(options: Pagination): void {
    this.pagination$.next(options);
  }

  public listenPagination(): void {
    this.pagination$
      .pipe(
        takeUntil(this.destroy$),
        pluck('page'),
        tap(page => {
          // @ts-ignore
          this.shiftPagesForView(page);
        })
      )
      .subscribe();
  }

  public calculatePagesForViews(): void {
    const { start, end } = this.range;
    this.pagesForView$.next(
      this.pages.slice(start, end)
    );
  }

  public calculateNextPagesForView(): void {
    this.range.start += this.paginatorSize;
    this.range.end += this.paginatorSize;
  }

  public calculatePrevPagesForView(): void {
    this.range.start -= this.paginatorSize;
    this.range.end -= this.paginatorSize;
  }

  public calculateAllPages(): void {

    if (this.pagination$.value !== null) {
      const { size } = this.pagination$.value;
      const amount = Math.ceil(this.count / size);
      this.pages = this.fillArrayAscendingNumbers(amount);
    }

  }

  private shiftPagesForView(page: number): void {

    const tail = this.pagesForView$.value[this.pagesForView$.value.length - 1];
    const head = this.pagesForView$.value[0];

    const isLastPage = tail === page - 1 && tail !== this.pages[this.pages.length - 1];
    const isFirstPage = head === page + 1 && head !== this.pages[0];

    if (isLastPage) {
      this.calculateNextPagesForView();
      this.calculatePagesForViews();
    }

    if (isFirstPage) {
      this.calculatePrevPagesForView();
      this.calculatePagesForViews();
    }
  }

  private fillArrayAscendingNumbers(length: number): number[] {
    return [...Array(length).keys()].map(i => i + 1);
  }
}
