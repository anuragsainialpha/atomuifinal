import {MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuTrigger, MatPaginatorModule, MatTabsModule, MatTableModule, MatDatepickerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule, ViewChild } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatListModule,
        MatTooltipModule,
        MatExpansionModule,
        MatRadioModule
        
    ],
    exports:[
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatListModule,
        MatTooltipModule,
        MatExpansionModule,
        MatRadioModule
    ],
    providers:[
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},

    ]
})
export class customMaterialModule{
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
}