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
        +String email
        +UUID employeeId
    }
    class Project {
      +UUID projectId 
      +UUID organizationId
      +String title
      +String description 
      +String location 
      +boolean status
      +UUID employeeId
      +String DonationTarget
      +DonationAmount donationReceived
      +UUID volunteerId
      +UUID volunteeringOpportunityId

    }

    class Volunteer {
      +UUID volunteerId 
      +String firstname
      +String lastname 
      +String phone
      +String email
      +Skill[] Skills 
      +String availability 
    }
    class Donor {
      +UUID donorId
      +String firstname
      +String lastname 
      +String phone
      +String email
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
    class VolunteeringOpportunity {
      +UUID volunteeringOpportunityId
      +String description 
      +Skill[] requiredSkills
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


    Volunteer "1" -- "1" Address : has
    Volunteer "n" -- "m" VolunteeringOpportunity : participates in
    Volunteer "1" -- "1..*" Skill
    

    Project "1" -- "*" VolunteeringOpportunity : offers
    Project "*" -- "*" Donation : receives
    

    VolunteeringOpportunity "1" -- "1..*" Skill
    
    Donor "1" -- "*" Donation : makes
    
    Donation "1" -- "0..*" DonationAmount : has
