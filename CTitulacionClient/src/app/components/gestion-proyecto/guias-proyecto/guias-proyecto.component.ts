import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-guias-proyecto',
  templateUrl: './guias-proyecto.component.html',
  styleUrls: ['./guias-proyecto.component.css']
})
export class GuiasProyectoComponent {
  selectedEmp = 0
  empForm:FormGroup;


  constructor(private fb:FormBuilder) {

    this.empForm=this.fb.group({
      employees: this.fb.array([]) ,
    })
  }


  employees(): FormArray {
    return this.empForm.get("employees") as FormArray
  }


  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills:this.fb.array([])
    })
  }


  addEmployee() {
    console.log("Adding a employee");
    this.employees().push(this.newEmployee());
  }


  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }


  onSubmit() {
    console.log(this.empForm.value);
   const firstEmployeeSkills = this.empForm.value.employees[0].skills.map(x => x.skill);
   return firstEmployeeSkills;
    // console.log("skill is", this.getEmployeeSkills(0).value);
     
  }

  // getEmployeeSkills(index: number){
  //   const employee  = this.empForm.value.employees[index]
  //   if (employee === undefined) return null
  //   return employee.skills.length ===0 ? null: employee.skills.map(skill => skill.skill.value)
  // }


}


export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}
