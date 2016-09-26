import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
	selector: '[myHighlight]'
})
export class HighlightDirective {
	private _defaultColor ='red';
	color: string;

	constructor(
		private el: ElementRef, 
		private renderer: Renderer) { }

		@Input('myHighlight') highlightColor: string;

		@Input() set defaultColor(colorName: string) {
			this._defaultColor = colorName || this._defaultColor;
		}

		@HostListener('mouseenter') onMouseEnter() {
			this.highlight(this.highlightColor || this._defaultColor);
		}

		@HostListener('mouseleave') onMouseLeave() {
			this.highlight(null);
		}

		private highlight(color: string) {
			this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
		}

}