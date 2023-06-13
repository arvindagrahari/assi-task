import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'myApp';
  seachValue:any;
  isShowDetails: boolean = false;

listData= [
  {imdbID: 'tt0468569',"rating":9.2, Title: 'The Dark Knight', Year: '2008', Poster: 'https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  {imdbID: 'tt0118688',"rating":9.0, Title: 'Batman & Robin', Year: '1997', Poster: 'https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  {imdbID: 'tt1345836',"rating":7.8, Title: 'The Dark Knight Rises', Year: '2012', Poster: 'https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  {imdbID: 'tt0118688',"rating":9.6, Title: 'Batman & Robin', Year: '1997', Poster: 'https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  {imdbID: 'tt0103776',"rating":9.5, Title: 'Batman Returns', Year: '1992', Poster: 'https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg'}
]

  listNewData = this.listData;
  detailsData: any;

  constructor(private router:Router){
  }
  

  searchByValue() {
    const data = this.listData.filter(res => {
      return (JSON.stringify(res).toLocaleLowerCase()).match(this.seachValue.toLocaleLowerCase());
    });
    this.listNewData = [];
    this.listNewData = data;
  }

  detailsEvent(data:any) {
    this.isShowDetails = true;
    localStorage.clear();
    this.router.navigate(['/details']);
    localStorage.setItem('details',JSON.stringify(data));
}

}


