import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [CommonModule, ChildComponent]
})
export class ParentComponent implements OnInit{

    ngOnInit(): void {
      console.log('ngOnInit form ParentComponent.')
    }
    @Input()
    userName = 'Maria';
    
    updateUser(){
      this.userName = 'Chris';
    }
}
