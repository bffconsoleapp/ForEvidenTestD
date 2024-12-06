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
//

export default resolvers;