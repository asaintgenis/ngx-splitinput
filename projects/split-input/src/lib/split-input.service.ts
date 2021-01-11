import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitInputService {

  private clearSplitInputSource = new Subject<any>();
  private onSplitInputClearedInternal: Observable<any> = this.clearSplitInputSource.asObservable();

  /** Trigger clearing of a SplitInput */
  clearSplitInput(): void {
    this.clearSplitInputSource.next();
  }

  /** Emits when a SplitInput has been cleared. */
  get onSplitInputCleared(): Observable<any> {
    return this.onSplitInputClearedInternal;
  }
}
