import {LoginNaukri, UploadResume, RemoveKeyskill,AddSkill} from '../Pages/Naukri.cy'

const Skills = {Cypress}

describe.only('template spec', () => {
  it('Login Naukri & Upload Resume ', () => {
    UploadResume();
    cy.task('logMessage',"Uploaded Resume in Naukri succesfully")
  })
  it('Remove Key Skill',()=>{
    RemoveKeyskill();
    cy.task('logMessage',"Remove Skill in Naukri succesfully")
  })
  it('Add Skill set',()=>
  {
    AddSkill();
    cy.task('logMessage',"Added Skill in Naukri succesfully")
  })
})