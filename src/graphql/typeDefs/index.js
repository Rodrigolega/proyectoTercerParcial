const { gql } = require('apollo-server');

const typeDefs = gql`

# TYPES

type Poet{

    poet_code: ID!
    first_name: String!
    surname: String!
    address: String
    postcode: String
    telephone_number: String

}

type Poem{

    poem_code: ID!
    poem_title: String!
    poem_contents: String
    poet_code: ID!

}

type Customer{

    customer_code: ID!
    first_name: String!
    surname: String!
    address: String
    postcode: String
    telephone_number: String

}

type Publication{

    publication_code: ID!
    title: String!
    price: Float

}

type Sale{

    sale_code: ID!
    date: String
    amount: Float
    customer_code: ID!

}

type PoemPublication{

    poem_code: ID!
    publication_code: ID!

}

type SalePublication{

    sale_code: ID!
    publication_code: ID!

}

type PoetPoemView{

poet_code:ID!
first_name:String!
surname:String!
poem_code:ID!
poem_title:String!

}

#  QUERIES

type Query{

    poets:[Poet]

    poems:[Poem]

    customers:[Customer]

    publications:[Publication]

    sales:[Sale]

    poemPublications:[PoemPublication]

    salePublications:[SalePublication]

    getPoetPoems:[PoetPoemView]

    poetByName(first_name:String!): [Poet]

}



#  MUTATIONS

type Mutation{

    # POET

    addPoet(
        first_name:String!,
        surname:String!,
        address:String,
        postcode:String,
        telephone_number:String
    ):Poet!

    updatePoet(
        poet_code:ID!,
        first_name:String,
        surname:String,
        address:String,
        postcode:String,
        telephone_number:String
    ):Poet!

    deletePoet(
        poet_code:ID!
    ):ID!

    #  POEM

    addPoem(
        poem_title:String!,
        poem_contents:String,
        poet_code:ID!,
        publication_code:ID
    ):Poem!

    updatePoem(
        poem_code:ID!,
        poem_title:String,
        poem_contents:String
    ):Poem!

    deletePoem(
        poem_code:ID!
    ):ID!

    #  CUSTOMER

    addCustomer(
        first_name:String!,
        surname:String!,
        address:String,
        postcode:String,
        telephone_number:String
    ):Customer!

    updateCustomer(
        customer_code:ID!,
        first_name:String,
        surname:String,
        address:String,
        postcode:String,
        telephone_number:String
    ):Customer!

    deleteCustomer(
        customer_code:ID!
    ):ID!

    #  PUBLICATION

    addPublication(
        title:String!,
        price:Float
    ):Publication!

    updatePublication(
        publication_code:ID!,
        title:String,
        price:Float
    ):Publication!

    deletePublication(
        publication_code:ID!
    ):ID!

    #  SALE

    addSale(
        date:String,
        amount:Float,
        customer_code:ID!,
        publication_code:ID
    ):Sale!

    updateSale(
        sale_code:ID!,
        date:String,
        amount:Float
    ):Sale!

    deleteSale(
        sale_code:ID!
    ):ID!

    #  RELATION TABLES

    deletePoemPublication(
        poem_code:ID!,
        publication_code:ID!
    ):ID!

    deleteSalePublication(
        sale_code:ID!,
        publication_code:ID!
    ):ID!

}

`;

module.exports = typeDefs;