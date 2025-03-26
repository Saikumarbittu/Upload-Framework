class NaukriLocators{
      homelgbtn(){
        return cy.get('#login_Layer')
      }
      Email(){
        return cy.get("input[placeholder='Enter your active Email ID / Username']")
      }
      Pwdfield(){
        return cy.get("input[placeholder='Enter your password']")
      }
      rightside(){
        return cy.get('.naukri-drawer.right.open')
      }
      submitbtn(){
        return cy.get("button[type='submit']")
      }
      profilebtn(){
        return cy.get("a[href='/mnjuser/profile']").first()
      }
      uploadbtn(){
        return cy.get("input[type='file']").filter('[id="attachCV"]')
      }
      successmsg(){
        return cy.get(".truncate.exten")
      }

}export default NaukriLocators;

const naukri = new NaukriLocators();

export function LoginNaukri(){

     cy.visit('https://www.naukri.com/',{ headers:{'accept-encoding': 'gzip, deflate'}})
     naukri.homelgbtn().click();
     naukri.rightside().should('be.visible');
     naukri.Email().type("deshaganisaikumar@gmail.com");
     naukri.Pwdfield().type("Saikumar@007");
     naukri.submitbtn().click();
     cy.wait(2000);

}
export function UploadResume(){
    LoginNaukri();
    naukri.profilebtn().should('be.visible').click()
    naukri.uploadbtn().scrollIntoView().attachFile('Deshagani_Saikumar-2025.pdf');
   cy.wait(3000)
  naukri.successmsg().should('have.text','Deshagani_Saikumar-2025.pdf');


}