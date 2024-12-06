import { gql } from 'apollo-server';

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

export default typeDefs;