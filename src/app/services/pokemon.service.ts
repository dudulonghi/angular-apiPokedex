import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL:string = "https://pokeapi.co/api/v2/pokemon/"
  private pokeData:PokemonData | any = ""
  constructor(
    private http: HttpClient) { 
    this.baseURL = this.baseURL
  }

  getPokemon(pokemonName: string):Observable<PokemonData>{
    return this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
  }
}
