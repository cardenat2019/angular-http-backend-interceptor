import { Component } from '@angular/core';
import { HttpRequest, HttpXhrBackend } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    template: `
        <div><h3>Response</h3>{{response | async | json}}</div>
        <button (click)="request()">Make request</button>`
    ,
})
export class AppComponent {
    response: Observable<any>;
    constructor(private backend: HttpXhrBackend) {}

    request() {
        const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1');
        this.response = this.backend.handle(req);
    }
}
