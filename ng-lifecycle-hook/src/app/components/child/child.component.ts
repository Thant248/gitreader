import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges,OnInit,DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked
,OnDestroy{

  destroy(){
    this.isChildDestroyed = true;
  }

  isChildDestroyed = false;

  ngOnDestroy(): void {
    console.log('ngonDestroy ')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck -wrapper', this.
    wrapper)
  }

  ngAfterViewChecked(): void {

    console.log('ngAfterViewCheck  -wrapper', this.wrapper)
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit -wrapper', this.wrapper)
  }

   ngAfterContentInit(): void {
  
    console.log('ng AfterContentInit -wrapper ', this.wrapper)
    console.log('ng AfterContentInit -contentChild ', this.content)
   }

  @ContentChild('contentWrapper')
  content !:ElementRef 

  @ViewChild('wrapper')
  wrapper!: ElementRef

  

  ngDoCheck(): void {
    console.log('ngDoChecked triggered......');
  }


  ngOnInit(): void {
    console.log('ngOnInit from ChildComponent.')
  }

  @Input() 
  userName = '';

  ngOnChanges(changes:SimpleChanges){
      console.log('ngOnChanges triggered', changes);
      if(!changes['userName'].isFirstChange()){
        if(changes['userName'].currentValue === 'Chris'){
          this.userName = 'Hello' + this.userName;
        }
        else{
          this.userName = changes['userName'].previousValue;
        }
      }
  }

}
