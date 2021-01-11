import {ElementRef, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SplitInputClipboardEvent, SplitInputKeyUpEvent} from './model';

@Injectable({
  providedIn: 'root'
})
export class SplitInputEventHandlerService {

  // Observable sources
  private keyUpSource = new Subject<SplitInputKeyUpEvent>();
  private clipboardSource = new Subject<SplitInputClipboardEvent>();

  // Observable streams
  keyUp$ = this.keyUpSource.asObservable();
  clipboard$ = this.clipboardSource.asObservable();

  // Service message commands
  keyUp(e: KeyboardEvent, elem: ElementRef): void {
    this.keyUpSource.next(new SplitInputKeyUpEvent(e, elem));
  }

  clipboard(e: ClipboardEvent, elem: ElementRef): void {
    this.clipboardSource.next(new SplitInputClipboardEvent(e, elem));
  }
}
