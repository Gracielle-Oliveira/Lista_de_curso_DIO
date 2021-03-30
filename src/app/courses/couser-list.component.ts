import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './couser-list.component.html'
    
    })
export class courseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/image/forms.png',
                price: 99.99,
                code: 'CXP-4215',
                duration: 120,
                rating: 4.5, 
                releaseDate: 'November, 2, 2020'
            },
            {
                id: 1,
                name: 'Angular: HTTP',
                imageUrl: '/assets/image/http.png',
                price: 45.99,
                code: 'COP-4215',
                duration: 80,
                rating: 4, 
                releaseDate: 'November, 2, 2020'
            }
        ]
    }
}