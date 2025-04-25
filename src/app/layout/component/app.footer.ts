import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        ReferenceWebapp by
        <a target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">ModernApp Technologies</a>
    </div>`
})
export class AppFooter {}
