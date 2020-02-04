import { Component, OnInit } from "@angular/core";
import { DynamicGrid } from "../grid.model";
//import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-saisi-bon",
  templateUrl: "./saisi-bon.component.html",
  styleUrls: ["./saisi-bon.component.css"]
})
export class SaisiBonComponent implements OnInit {
  constructor(/*private toastr: ToastrService*/) {}

  ngOnInit() {
    this.loadScripts();
  }
  /*public loadScript(url) {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }*/

  loadScripts() {
    const externalScriptArray = [
      "../assets/js/bootstrap-datepicker.js",
      "../assets/js/datepicker-init.js",
      "../assets/js/bootstrap-datetimepicker.js",
      "../assets/js/bootstrap-datetimepicker-init.js"
    ];
    for (let i = 0; i < externalScriptArray.length; i++) {
      const scriptTag = document.createElement("script");
      scriptTag.src = externalScriptArray[i];
      scriptTag.type = "text/javascript";
      scriptTag.async = false;
      scriptTag.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }
  }
}
