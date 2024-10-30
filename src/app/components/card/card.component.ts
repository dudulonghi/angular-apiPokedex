import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';
import { NotFoundError } from 'rxjs';
import { TransformadorPipe } from '../../pipes/transformador.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TransformadorPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  pokemon:PokemonData


  constructor(private service: PokemonService){
    this.pokemon ={
      id: 0,
      name: '',
      sprites:{
        front_default: '',
      },
      types:[]
    }
  }
  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon (searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          console.log(this.pokemon);
        },
        error: (err) => console.log(NotFoundError)
      }
    )
  }
}
