
Our project, "**PlateShare**," is a culmination of our Web Design Final Project, aimed at addressing the critical issue of food scarcity through the lens of community collaboration. In the contemporary landscape, food scarcity stands as a formidable global challenge. "PlateShare" serves as a pioneering web platform designed to foster Nourishing Networks: Building Bridges for Food Security.

Our innovative solution facilitates the connection between organizations committed to alleviating food insecurity and individuals eager to contribute to this cause. Through "PlateShare," organizations planning food donation drives, distributions, and social services can seamlessly connect with volunteers from the community who are willing to register and lend their support.

"**PlateShare**" offers a range of flexible volunteering opportunities, enabling individuals to donate their time, skills, and resources. Whether it's sparing a couple of hours from a busy work schedule to assist an NGO in setting up a basic website, leveraging management skills to organize donation camps, or contributing financial donations, our platform provides avenues for diverse forms of support. Together, we aim to forge a collaborative ecosystem where every contribution, no matter how small, makes a significant impact in the fight against food scarcity.

**Team Member:-
A. Akanksha Pandey - pandey.akan@northeastern.edu
B. Akanksha Pawar - pawar.ak@northeastern.edu
C. Chetan Warad - warad.c@northeastern.edu
D. Yash Deshpande - deshpande.ya@northeastern.edu** 
-------------------------------------------------------------------------------------
# Object Model

```mermaid

---
Object Model for PlatShare
---
classDiagram

    class Organization {
        +UUID organizationId
        +String name
        +Address address 
        +String phone
    }
    class Project {
      +UUID projectId 
      +UUID organizationId
      +String title
      +String description 
      +String location 
      +boolean status
      +String DonationTarget
      +DonationAmount donationReceived
      +UUID volunteerId
      +UUID volunteeringOpportunityId

    }
   
    class Donor {
      +UUID donorId
      +String name 
      +String phone
      +String location
    }
    class Donation {
      +UUID donationId 
      +UUID projectId 
      +UUID donorId
      +String type
      +String qty
      +DonationAmount donationAmountId
    }
    
    class Address {
      +UUID addressId 
      +String street 
      +String City
      +String state
      +String zipCode
    }
    class Skill {
      +UUID skillId
      +String skillName 
      +String description
    }
    class DonationAmount {
      +UUID donationAmountId
      +float amount
      +String Currency
    }
  
    Organization "1" -- "*" Project : has
    Organization "1" -- "1" Address : has
    Organization : uses > Address

    

    Project "1" -- "*" VolunteeringOpportunity : offers
    Project "*" -- "*" Donation : receives

    
    
    Donor "1" -- "*" Donation : makes
    
    Donation : uses > DonationAmount
    Donation "1" -- "0..*" DonationAmount : has
---------------------------------------------------------------------

Note - In the repository the woking cde is in the Client Folder