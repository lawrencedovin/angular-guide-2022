import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getRecipes(url: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(url);
  }
}
