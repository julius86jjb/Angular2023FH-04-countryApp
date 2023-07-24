import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription

  @Output() public onValue = new EventEmitter<string>();
  @Output() public onDebounce = new EventEmitter<string>();
  @Input() public placeholder: string = '';
  @Input() public initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(400)
    )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next (searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}
