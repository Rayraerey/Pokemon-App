import { HttpClient } from '@angular/common/http';
import { Injectable,inject,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http=inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/pokemon';
  //reactive state
  pokemonList = signal<any[]>([]);

  //method use for saving data
  savePokemon(data:any ){
  return this.http.post(this.apiUrl,data);
  }

  //method use for fetching data
  fetchPokemon(){
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.pokemonList.set(data));
  }
  
}

