import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent  {
  newProduit = new Produit();
  categories! : Categorie[];
  newcategorie! : Categorie;
  newIdCat! : number;
  constructor(private produitService: ProduitService,
     private router :Router){ }
     ngOnInit(): void {

  
    }
    addProduit(){
      this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
                        console.log(prod);
                        this.router.navigate(['produits']);
                        }); 
      }
}
