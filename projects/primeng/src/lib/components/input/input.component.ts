import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ELJSInputSize } from '@elementixjs/angular/definitions/form/input';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'primeng-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
    ],
})
export class InputComponent {
    @Input() size: ELJSInputSize = 'normal';
    public value: string = '';
}
