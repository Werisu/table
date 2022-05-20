import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FrequenciaService {

  constructor(private http: HttpClient) { }

  getDias(){
    return this.http.get<any[]>('http://apiprofessor.ergonsistemas.com.br:7073/frequencia?tipo=DIAS&CDESCOLA=17005876&SEQUENCIAL=192466&DATABASE=gep_teste_aux',{
      headers: {"Authorization": "Basic Z2VwbW9iaWxlOkAjZ2VwbW9iaWxlI0A="}
    });
  }
}
