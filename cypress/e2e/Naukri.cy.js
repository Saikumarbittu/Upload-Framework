import {LoginNaukri, UploadResume} from '../Pages/Naukri.cy'


describe('template spec', () => {
  it.only('Login Naukri & Upload Resume ', () => {
    UploadResume();
    cy.task('logMessage',"Uploaded Resume in Naukri succesfully")
  })
})