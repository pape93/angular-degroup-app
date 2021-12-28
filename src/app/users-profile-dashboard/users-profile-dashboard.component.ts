import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { UserProfileModel } from './users-profile-dashboard.model';

@Component({
  selector: 'app-users-profile-dashboard',
  templateUrl: './users-profile-dashboard.component.html',
  styleUrls: ['./users-profile-dashboard.component.css']
})
export class UsersProfileDashboardComponent implements OnInit {

  formValue !: FormGroup;
  userProfileModelObj : UserProfileModel = new UserProfileModel();
  userProfileData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formbuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary : ['']
    })
    this.getAllUserProfile();
  }

  clickAddUserProfile(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postUserProfileDetails() {
    this.userProfileModelObj.firstName = this.formValue.value.firstName;
    this.userProfileModelObj.lastName = this.formValue.value.lastName;
    this.userProfileModelObj.email = this.formValue.value.email;
    this.userProfileModelObj.mobile = this.formValue.value.mobile;
    this.userProfileModelObj.salary = this.formValue.value.salary;

    this.api.postUserProfile(this.userProfileModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("User Profile Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUserProfile();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllUserProfile() {
    this.api.getUserProfile()
    .subscribe(res=>{
      this.userProfileData = res;
    })
  }

  deleteUserProfile(row : any) {
    this.api.deleteUserProfile(row.id)
    .subscribe(res=>{
      alert("User profile deleted")
      this.getAllUserProfile();
    })
  }

  onEdit(row : any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.userProfileModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName)
    this.formValue.controls['lastName'].setValue(row.lastName)
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['salary'].setValue(row.salary)
  }

  updateUserProfileDetails(){
    this.userProfileModelObj.firstName = this.formValue.value.firstName;
    this.userProfileModelObj.lastName = this.formValue.value.lastName;
    this.userProfileModelObj.email = this.formValue.value.email;
    this.userProfileModelObj.mobile = this.formValue.value.mobile;
    this.userProfileModelObj.salary = this.formValue.value.salary;

    this.api.updateUserProfile(this.userProfileModelObj, this.userProfileModelObj.id)
    .subscribe(res=>{
      alert("updated successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUserProfile();
    })
  }
}
