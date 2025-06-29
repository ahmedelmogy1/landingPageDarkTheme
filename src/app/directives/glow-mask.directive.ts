import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGlowMask]',
  standalone: true
})
export class GlowMaskDirective {

  constructor(private _ElementRef:ElementRef,private _Renderer2:Renderer2) {}

  @HostListener('mousemove',['$event'])
  onMouseMove(event:MouseEvent){
    
    const cards=this._ElementRef.nativeElement.querySelectorAll('.Card');
    cards.forEach((card:HTMLElement)=> {
      const distance = card.getBoundingClientRect()
          const x = event.clientX - distance.left;
          const y = event.clientY - distance.top;
        this._Renderer2.setStyle(card,'mask-image',`radial-gradient(100px 100px at ${x}px ${y}px, red, transparent)`)
        this._Renderer2.setStyle(card,'-webkit-mask-image',` radial-gradient(100px 100px at ${x}px ${y}px, red, transparent)`)
    });


    
  }

  @HostListener ('mouseleave')
  onMouseLeave(){
   const cards=this._ElementRef.nativeElement.querySelectorAll('.Card');
   cards.forEach((card:HTMLElement)=>{
    this._Renderer2.removeStyle(card,'mask-image')
        this._Renderer2.removeStyle(card,'-webkit-mask-image')
         this._Renderer2.setStyle(card,'mask-image',`radial-gradient(0px 0px at 0px 0px, red, transparent)`)
        this._Renderer2.setStyle(card,'-webkit-mask-image',` radial-gradient(0px 0px at 0px 0px, red, transparent)`)
   })
       
   

  }

}
