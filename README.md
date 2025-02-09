```graphql
# schema-codegen-start
const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Reports: [Premium_Report]
    Premium_Adjustments: [Premium_Adjustment]
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
  }

  input SearchProductInput {
    Price: Float
    Quantity: Int
    Category: String
  }

  input SearchCreditUnionInput {
    ContractNumber: String
    Name: String
    State: String
    NameAndState: String
  }

  input SearchPremiumReportInput {
    ProductName: String
    PremiumDue: Float
    Status: String
  }

  type Query {
    dummy: String
  }

  type Mutation {
    searchProductInfo(input: SearchProductInput): [Credit_Union]
    searchCreditUnion(input: SearchCreditUnionInput): [Credit_Union]
    searchPremiumReport(input: SearchPremiumReportInput): [Premium_Report]
  }
`;
# schema-codegen-end
```

```javascript
// resolver-codegen-start
const resolvers = {
  Query: {
    dummy: () => "This is a dummy query",
  },
  Mutation: {
    searchProductInfo: (_, { input }) => {
      // Sample data and filtering logic
      const creditUnions = [
        { id: 1, Contract_Number: "1234", Credit_Union_Name: "ABC Credit Union" },
        { id: 2, Contract_Number: "5678", Credit_Union_Name: "XYZ Credit Union" }
      ];

      // Implement actual search logic here
      return creditUnions.filter(cu => input.Price || input.Quantity || input.Category);
    },
    searchCreditUnion: (_, { input }) => {
      const creditUnions = [
        { id: 1, Contract_Number: "1234", Credit_Union_Name: "ABC Credit Union", State: "NY" },
        { id: 2, Contract_Number: "5678", Credit_Union_Name: "XYZ Credit Union", State: "CA" }
      ];

      // Implement actual search logic here
      return creditUnions.filter(cu => (input.ContractNumber && cu.Contract_Number.includes(input.ContractNumber)) ||
                                        (input.Name && cu.Credit_Union_Name.includes(input.Name)) ||
                                        (input.State && cu.State.includes(input.State)) ||
                                        (input.NameAndState && `${cu.Credit_Union_Name} ${cu.State}`.includes(input.NameAndState)));
    },
    searchPremiumReport: (_, { input }) => {
      const premiumReports = [
        { id: 1, Product_Name: "Product A", Premium_Due: 100.0, Status: "Active" },
        { id: 2, Product_Name: "Product B", Premium_Due: 200.0, Status: "Inactive" }
      ];

      // Implement actual search logic here
      return premiumReports.filter(pr => (input.ProductName && pr.Product_Name.includes(input.ProductName)) ||
                                         (input.PremiumDue && pr.Premium_Due === input.PremiumDue) ||
                                         (input.Status && pr.Status === input.Status));
    }
  }
};
// resolver-codegen-end
```