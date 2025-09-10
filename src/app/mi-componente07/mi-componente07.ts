import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { HighlightGreenDirective } from '../directives/highlight-green.directive';

@Component({
  selector: 'app-mi-componente07',
  imports: [HighlightDirective, HighlightGreenDirective],
  templateUrl: './mi-componente07.html',
  styleUrl: './mi-componente07.css',
})
export class MiComponente07 {}
