import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIndicatorsEconomics } from '../models/interfaces/indicators-economics.models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EconomicsIndicatorsService {

  /**
   * Constructor
   * @param {HttpClient} httpClient
   */
  constructor(private httpClient: HttpClient) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------
    // @ HTTP methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Call _requestService's HTTP method
     * @returns {Observable<IIndicatorsEconomics>}
     */
    getGeneralInidcators(): Observable<IIndicatorsEconomics[]> {
      return this.httpClient.get<IIndicatorsEconomics>(`${environment.url_api}/last`)
          .pipe(map((response: IIndicatorsEconomics) => {
              return response as IIndicatorsEconomics[];
          }));
  }
}
