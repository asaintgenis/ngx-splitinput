import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {SplitInputEventHandlerService} from './split-input-event-handler.service';

@Directive({
  selector: '[libSplitInput]'
})
export class SplitInputDirective implements OnInit {

  private elementRefInternal: ElementRef;

  constructor(private el: ElementRef,
              private splitInputEventHandlerService: SplitInputEventHandlerService) {}

  ngOnInit(): void {
    this.elementRefInternal = this.el;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(e: KeyboardEvent): void {
    this.splitInputEventHandlerService.keyUp(e, this.elementRefInternal);
  }

  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent): void {
    this.splitInputEventHandlerService.clipboard(e, this.elementRefInternal);
  }

  get elementRef(): ElementRef {
    return this.elementRefInternal;
  }
}
