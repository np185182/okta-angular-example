import { Component } from '@angular/core';
import { mainList, ncr_logo, products_description } from '../productsList';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <div class="cards_container">
    @for (item of displayList; track $index) {
      <div class="card">
        <div class="card_bar">
          <h3>{{item}}</h3>
          <img src={{ncr_logo_i}} alt="logo">
        </div>
        <p>{{description}}</p>
      </div>
    }
    </div>
  `,
  styles: `
    h3{
      font-family:;

    }
    img{
      width:130px;
    }
    .cards_container{
      display : flex;
      flex-wrap : wrap;
    }
    .card{
      background : white;
      display : flex;
      align-items:center;
      justify-content:space-around;
      flex-direction:column;
      width : 30%;
      height:300px;
      margin:10px;
      padding: 10px;
      border-radius: 5px;
    }
    .card_bar{
      display : flex;
      align-items:center;
      justify-content:space-between;
      flex-direction:row;
      width:300px;
    }
  `
})
export class ProductsComponent {
  displayList = mainList;
  ncr_logo_i = ncr_logo;
  description = products_description;
}
