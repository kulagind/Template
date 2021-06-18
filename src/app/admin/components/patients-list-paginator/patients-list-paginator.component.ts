import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pagination } from '../../types/pagination.type';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-patients-list-paginator',
  templateUrl: './patients-list-paginator.component.html',
  styleUrls: ['./patients-list-paginator.component.css']
})
export class PatientsListPaginatorComponent implements OnInit, OnDestroy {

  @Input() public count: number = 1;
  public readonly itemsPerPage = 10;

  @Output()
  public readonly pagination: EventEmitter<Pagination>;
  public readonly pagination$: BehaviorSubject<Pagination>;
  public readonly pages$: BehaviorSubject<number[]>;
  private readonly destroy$: Subject<void>;

  constructor() {
    this.destroy$ = new Subject<void>();
    this.pages$ = new BehaviorSubject<number[]>([]);
    this.pagination = new EventEmitter<Pagination>();
    this.pagination$ = new BehaviorSubject<Pagination>(
      { page: 1, size: this.itemsPerPage }
    );
  }

  public ngOnInit(): void {
    this.listenPagination();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private listenPagination(): void {
    this.pagination$
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(this.distinctUntilChangedCompare),
        debounceTime(50),
        tap(options => {
          this.pagination.emit(options);
        })
      )
      .subscribe();
  }

  public paginate(options: Pagination): void {
    this.pagination$.next(options);
  }

  public switchToNextPage(): void {
    const { page, size } = this.pagination$.value;
    this.paginate({ page: page + 1, size });
  }

  public switchToPrevPage(): void {
    const { page, size } = this.pagination$.value;
    this.paginate({ page: page - 1, size });
  }

  private distinctUntilChangedCompare(current: Pagination, prevent: Pagination): boolean {
    return current.page === prevent.page && current.size === prevent.size;
  }
}
