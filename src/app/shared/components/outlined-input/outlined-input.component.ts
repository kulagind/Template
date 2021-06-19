import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-outlined-input',
  templateUrl: './outlined-input.component.html',
  styleUrls: ['./outlined-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => OutlinedInputComponent)
    },
  ]
})
export class OutlinedInputComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string;
  @Input() public placeholder: string;
  @Input() public type: 'text' | 'password' | 'number';
  public onChange: (value: string) => any;
  private onTouched: (args: any) => void;

  constructor() {
    this.type = 'text';
    this.value = '';
  }

  public ngOnInit(): void {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(value: string): void {
    this.value = value;
  }

}
