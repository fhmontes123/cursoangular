import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { HighlightGreenDirective } from '../directives/highlight-green.directive';
import { HighlightHoverDirective } from '../directives/highlight-hover.directive';

@Component({
  selector: 'app-mi-componente07',
  imports: [HighlightDirective, HighlightGreenDirective, HighlightHoverDirective],
  templateUrl: './mi-componente07.html',
  styleUrl: './mi-componente07.css',
})
export class MiComponente07 {}
