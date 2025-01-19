import { Component, OnInit } from '@angular/core';
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";
import type { InstanceOptions } from 'flowbite';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../services/flowbite.service';




@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  // constructor(private flowbiteService: FlowbiteService) {}

  // ngOnInit(): void {
  //   this.flowbiteService.loadFlowbite(flowbite => {
  //     console.log('Flowbite loaded', flowbite);
  //   });
  // }

}
