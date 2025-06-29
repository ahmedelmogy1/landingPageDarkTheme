import { Directive, ElementRef, OnInit } from '@angular/core';
import interact from 'interactjs';

@Directive({
  selector: '[appDragElement]',
  standalone: true
})
export class DragElementDirective implements OnInit {

  constructor(private _ElementRef:ElementRef) { }

 ngOnInit(): void {
    const ElementTarget:any=this._ElementRef.nativeElement;
               

    interact(ElementTarget).draggable({
      listeners:{
        move(event){

          const elment = event.target as HTMLElement;
          const x =(parseFloat(elment.getAttribute('data-x')!)||0)+event.dx
          const y =(parseFloat(elment.getAttribute('data-y')!)||0)+event.dy
           elment.style.transform=`translate(${x}px,${y}px)`
          elment.setAttribute('data-x',x.toString())
          elment.setAttribute('data-y',y.toString())
        },
        end(event){
          const elment=event.target as HTMLElement
          elment.style.transition='transform 0.5s ease';
          elment.style.transform='translate(0,0)';
          elment.setAttribute('data-x','0')
          elment.setAttribute('data-y','0')
          setTimeout(() => (elment.style.transition = ''), 500);
        }
      }
    })
 }

}
