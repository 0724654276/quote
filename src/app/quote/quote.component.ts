import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Bob Marley', 'love the life you live. live the life you love.', 'admin', new Date(1980, 7, 12)),
    new Quote(2, 'Michael Jackson', 'If you wanna make the world a better place, take a look at yourself, then make that change.', 'admin', new Date(1992, 6, 13)),
    new Quote(3, 'Kenny Rogers', 'Do not be afraid to give up the good to go for the great.', 'admin', new Date(1984, 8, 17)),

  ]

showDescription= false;

  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete:any, index:any) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)

      if (toDelete) { this.quotes.splice(index, 1) }
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;
  }



ngOnInit() {
}

}
