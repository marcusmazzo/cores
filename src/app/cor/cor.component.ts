import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cor } from './cor';


@Component({
  selector: 'app-cor',
  templateUrl: './cor.component.html',
  styleUrls: ['./cor.component.css']
})
export class CorComponent implements OnInit {


  cores: Cor[] = [];
  cor: Cor = new Cor();
  corSave: Cor = new Cor();
  corUpdate: Cor = new Cor();
  id: Number = null;
  idDelete: number = null;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("teste");
    this.corSave = new Cor();
    this.cor = new Cor();
    this.corUpdate = new Cor();
    this.id = null;
    this.idDelete = null;
    this.list();
  }

  save() {
    this.http.post<Cor>("http://localhost:8080/cores", this.corSave).subscribe(response => this.ngOnInit());
  }

  list() {
    this.http.get<Cor[]>("http://localhost:8080/cores").subscribe(response => this.cores = response);
  }
  
  byId() {
    this.http.get<Cor>("http://localhost:8080/cores/"+this.id).subscribe(response => this.cor = response);
  }
  
  update() {
    this.http.put<Cor>("http://localhost:8080/cores/"+this.corUpdate.id, this.corUpdate).subscribe(response => this.ngOnInit());
  }

  delete() {
    this.http.delete<Cor>("http://localhost:8080/cores/"+this.idDelete).subscribe(response => this.ngOnInit());
  }
}
