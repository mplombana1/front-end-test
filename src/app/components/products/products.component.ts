import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  animations: [
    trigger("changeDivSize", [
      state(
        "initial",
        style({
          margin: "0"
        })
      ),
      state(
        "final",
        style({
          margin: "0 3em"
        })
      ),
      transition("initial=>final", animate("600ms")),
      transition("final=>initial", animate("600ms"))
    ]),
    trigger("changeOpacity", [
      state(
        "initial",
        style({
          margin: "0"
        })
      ),
      state(
        "final",
        style({
          margin: "5em"
        })
      ),
      transition("initial=>final", animate("1000ms")),
      transition("final=>initial", animate("1500ms"))
    ])
  ]
})
export class ProductsComponent implements AfterViewInit {
  currentState = "initial";
  currentState2 = "initial";


  constructor(private cdr: ChangeDetectorRef) {}
  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";

  }

  changeMargin(){
    this.currentState2 = this.currentState2 === "initial" ? "final" : "final";

  }
  ngOnInit() {}

  ngAfterViewInit() {
    this.changeState();
    this.cdr.detectChanges();
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.changeMargin()
  }
}
