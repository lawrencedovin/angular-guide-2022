import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getIngredients(url: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(url);
  }
}
