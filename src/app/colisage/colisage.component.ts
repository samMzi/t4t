import { Component, OnInit } from "@angular/core";
import { DynamicGrid } from "../grid.model";
@Component({
  selector: "app-colisage",
  templateUrl: "./colisage.component.html",
  styleUrls: ["./colisage.component.css"]
})
export class ColisageComponent implements OnInit {
  constructor() {}
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  ngOnInit() {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
  }
  addRow(index) {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
    // this.toastr.success("New row added successfully", "New Row");
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      /*  this.toastr.error(
        "Can't delete the row when there is only one row",
        "Warning"
      );*/
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      //this.toastr.warning("Row deleted successfully", "Delete row");
      return true;
    }
  }
}
