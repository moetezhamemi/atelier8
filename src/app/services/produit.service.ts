import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable}from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  @Injectable({
    providedIn: 'root'
  })
export class ProduitService {
  produits! : Produit[];
  apiURL: string = 'http://localhost:8090/produits/api';
  //categories : Categorie[];
    constructor(private http : HttpClient) {
       //this.categories = [{idcat : 1,nomcat : "pc"},{idcat : 2, nomcat : "imprimante"}];
       this.produits = [
         { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,
         dateCreation : new Date("01/14/2011"), categorie : {idcat : 1, nomcat : "PC"}},
         { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450,
         dateCreation : new Date("12/17/2010"), categorie : {idcat : 2, nomcat : "Imprimante"}},
         { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123,
       dateCreation : new Date("02/20/2020"),categorie : {idcat : 1, nomcat : "PC"}}
       ];  
   }
   produit! : Produit;
   listeProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }
    ajouterProduit( prod: Produit):Observable<Produit>{
      return this.http.post<Produit>(this.apiURL, prod, httpOptions);
      }
      supprimerProduit(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
    }
    trierProduits(){
      this.produits = this.produits.sort((n1,n2) => {
      if (n1.idProduit! > n2.idProduit!) {
      return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
      return -1;
      }
      return 0;
      });
      }
      
          updateProduit(prod :Produit) : Observable<Produit>
            {
                return this.http.put<Produit>(this.apiURL, prod, httpOptions);
            }
  //  listecategories():Categorie[] {
  //   return this.categories;
  //   }
  //   consultercategorie(id:number): Categorie{
  //     return this.categories.find(cat => cat.idcat == id)!;
  //   }
  listeCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.apiURL+"/cat");
    }
    
  }
