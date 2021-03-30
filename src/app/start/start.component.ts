import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})

export class StartComponent implements OnChanges { 

    @Input()
    rating: number = 0;

    startwidth: any = Number ;

    ngOnChanges(): void {

        this.startwidth = this.rating * 74 / 5
    }

}