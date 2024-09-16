import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryCodePipe } from '../pipes/country-code.pipe';


function formatName (name : string) {
  return `Hii ${name}`
}


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CountryCodePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({transform : formatName}) name = ""
  @Input({transform : booleanAttribute}) isMarried! : boolean
  userName : string = ""
  @Input({transform : numberAttribute}) phoneNumber! : number
  @Output() myEvent = new EventEmitter<string>();
  onUserNameChange() {
    this.myEvent.emit(this.userName); 
  }
}
