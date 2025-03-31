class NaukriLocators{
      homelgbtn(){
        return cy.get('#login_Layer')
      }
      Email(){
        return cy.get("#usernameField")
      }
      Pwdfield(){
        return cy.get("#passwordField")
      }
      rightside(){
        return cy.get('.naukri-drawer.right.open')
      }
      submitbtn(){
        return cy.get(".blue-btn")
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
        Skilleditbtn(){
          return cy.get("div[class='widgetHead typ-16Bold'] span[class='edit icon']")
        }
        Skillset(){
          return cy.get("div[class*='waves-effect chip'] span[class='tagTxt']");//return 20 elements
        }
        skillsavebtn(){
          return cy.get("#saveKeySkills")
        }
        Addskillfield(){
          return cy.get("#keySkillSugg")
        }


}
export default NaukriLocators;

const naukri = new NaukriLocators();
const SkillText='Cypress'
export function LoginNaukri(){

  cy.visit('/nlogin/login?err=1', {
    timeout: 30000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept-Language': 'en-US,en;q=0.9'
    }
  });

     //naukri.homelgbtn().should('be.visible').click();
    // naukri.rightside().should('be.visible');
     naukri.Email().should('be.enabled').type("deshaganisaikumar@gmail.com");
     naukri.Pwdfield().should('be.enabled').type("Saikumar@007");
     naukri.submitbtn().click();
     cy.wait(2000);

}
export function UploadResume(){
  LoginNaukri();
  cy.wait(3000)
  naukri.profilebtn().should('be.visible').click()
  naukri.uploadbtn().scrollIntoView().attachFile('Deshagani_Saikumar-2025.pdf');

  naukri.successmsg().should('have.text','Deshagani_Saikumar-2025.pdf');
}

export function RemoveKeyskill(){
  //Log in App
    LoginNaukri();
  try {
    naukri.profilebtn().should('be.visible').click();
    //Click on Edit skill button
    naukri.Skilleditbtn().click();
    // Find and filter the element with specific text
    naukri.Skillset().then(($el)=>{
      if($el.text().includes(SkillText)){
        cy.wrap($el).contains(SkillText)
        // Find the element containing the text
         .parent() // Navigate to the parent if needed
         .find("a.material-icons.close") // Correctly target the close button using class selector
         .click();
         //Click on Save button
      }else{
        cy.log("Skill is not present")
      }
    })
  naukri.skillsavebtn().click();
  //Click on Edit skill button
  naukri.Skilleditbtn().scrollIntoView().click();

   //  Validate that the text is removed
     naukri.Skillset().should('not.contain', SkillText);
  } catch (error) {
    cy.log(error.message); // Logs the error message in Cypress
  }


}
export function AddSkill()
{
  LoginNaukri();

  naukri.profilebtn().should('be.visible').click();
  //Click on Edit skill button
  naukri.Skilleditbtn().scrollIntoView().click();
  cy.wait(2000);
  naukri.Addskillfield().type(SkillText);
  cy.get('.Sbtn').as('btn').should('be.visible')
  .contains(SkillText)
  .click();
  naukri.skillsavebtn().click()
    //Click on Edit skill button
    naukri.Skilleditbtn().scrollIntoView().click();

    //  Validate that the text is removed
      naukri.Skillset().should('contain', SkillText);
}