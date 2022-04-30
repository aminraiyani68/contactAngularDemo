import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class SharedService {

    private taskCount = 0;
    private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor() { }

    /* Shared Loader Param */

    getLoader(): Observable<boolean> {
        return this.isLoading.asObservable();
    }

    setLoader(val: boolean): void {
        if (val) {
            this.taskCount += 1;
        } else {
            this.taskCount -= 1;
            if (this.taskCount !== 0) {
                val = true;
            }
        }
        this.isLoading.next(val);
    }

}
