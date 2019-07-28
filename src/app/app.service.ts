import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    divide(x: number, y: number) {
        return (x / y);
    }
}