import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  submitted = false;

  sendMessage() {
    this.submitted = true;
    if (this.form.valid) {
      const subject = this.buildSubject();
      const body = this.buildBody();
      location.href = `mailto:ejvillena22@gmail.com?subject=${subject}&body=${body}`;
    }
  }

  private buildBody(): string {
    return encodeURI(this.form.value.body ?? '');
  }

  private buildSubject(): string {
    return `[CONTACT ME] - ${this.form.value.fullName} - ${this.form.value.subject}`;
  }
}
