import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IUserReponsibility } from '../../../auth/model/IUserReponsibility.model';
import { AuthorizeService } from '../../../auth/service/authorize.service';
import { GlDefService } from '../../services/gl-def.service';
import { ICurrency } from '../../model/gl-def/ICurrency.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
const ELEMENT_DATA: ICurrency[] = [];

@Component({
  selector: 'app-gl-currency',
  templateUrl: './gl-currency.page.html',
  styleUrls: ['./gl-currency.page.scss'],
})
export class GlCurrencyPage implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'curCode',
    'descAr',
    'descEn',
    'symbole',
    'prescioin',
    'startDate',
    'endDate',
    'enabled',
    'status',
  ];
  dataSource = new MatTableDataSource<ICurrency>(ELEMENT_DATA);
  selection = new SelectionModel<ICurrency>(false, []);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  userResp: IUserReponsibility;

  constructor(
    private authorizeService: AuthorizeService,
    private currService: GlDefService
  ) {}

  ngOnInit() {
    this.currService.getAll().subscribe((data) => {
      console.log('table data:', data);
      this.dataSource.data = data as ICurrency[];
    });
    this.authorizeService.getUserReponsibility(1).subscribe((data) => {
      if (data) {
        this.userResp = data;
      }
      console.log('userApps = ', this.userResp);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
