import { Component, OnInit } from "@angular/core";
// Service
import { DynamicScriptLoaderService } from "../dynamic-script-loader-service.service";

@Component({
  selector: "app-import",
  templateUrl: "./import.component.html",
  styleUrls: ["./import.component.css"]
})
export class ImportComponent implements OnInit {
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    const externalScriptArray = [
      "../assets/js/jquery.dataTables.min.js",
      "../assets/js/dataTables.bootstrap4.min.js",
      "../assets/js/dataTables.buttons.min.js",
      "../assets/js/buttons.flash.min.js",
      "../assets/js/jszip.min.js",
      "../assets/js/pdfmake.min.js",
      "../assets/js/vfs_fonts.js",
      "../assets/js/buttons.html5.min.js",
      "../assets/js/buttons.print.min.js",
      "../assets/js/table_data.js"
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
