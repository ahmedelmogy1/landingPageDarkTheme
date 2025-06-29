import { Component } from '@angular/core';
import { IAsk } from '../../interfaces/iask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FAQsComponent {
  asks: IAsk[] = [
    { question: 'What payment methods do you accept ?', answer: 'We accept all major credit , PayPal , and various other payment method depending on your location , please contact our support team for more information on accepted payment methods in your region .  ',isOpen:true , ID:0 },
    { question: 'How does the pricing work for teams ?', answer: 'Our pricing is per user , per month This means you only pay for the number of team members you have on your account . Discouts are available for larger teams and annual subscription  ' ,isOpen:false ,ID:1},
    { question: 'Can I change my plan leter ?', answer: 'Yes, you can upgrade or downgrade your plan at any time . changes to your plan will be prorated and reflected in your next billing cycle  ',isOpen:false ,ID:2},
    { question: 'Is my data secure ?', answer: 'Security is our top priority . We use state-of-the-art encrption and comply with the best industry practicies to ensure that your data is stored securely and accessed only by authorized users   ',isOpen:false ,ID:3 }
  ]

  openClose(ID:number):void{
    if(!this.asks[ID].isOpen){
      this.asks.map(ask=>ask.isOpen=false)
      this.asks[ID].isOpen=true;
     
      
    }
    else{
      this.asks[ID].isOpen=false;
      if(ID!=0){
        this.asks[ID-1].isOpen=true;
      }else{
        this.asks[this.asks.length-1].isOpen=true;
      }

    }

  }

}
