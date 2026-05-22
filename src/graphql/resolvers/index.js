const db = require('../../database/db');

const resolvers = {

    Query: {

        poets: async () =>
            await db.select().table('Poet'),

        poems: async () =>
            await db.select().table('Poem'),

        customers: async () =>
            await db.select().table('Customer'),

        publications: async () =>
            await db.select().table('Publication'),

        sales: async () =>
            await db.select().table('Sale'),

        poemPublications: async () =>
            await db.select().table('Poem_Publication'),

        salePublications: async () =>
            await db.select().table('Sale_Publication'),

        getPoetPoems: async () => {

            const result =
            await db.raw('CALL getPoetPoems()');

            return result[0][0];

        }

    },

    Mutation: {

        // POET

        addPoet: async (_,{
            first_name,
            surname,
            address,
            postcode,
            telephone_number
        }) => {

            const [poet_code] = await db('Poet').insert({

                first_name,
                surname,
                address,
                postcode,
                telephone_number

            });

            return await db('Poet')
                .where({poet_code})
                .first();

        },

        updatePoet: async (_,{
            poet_code,
            first_name,
            surname,
            address,
            postcode,
            telephone_number

        }) => {

            await db('Poet')
                .where({poet_code})
                .update({

                    first_name,
                    surname,
                    address,
                    postcode,
                    telephone_number

                });

            return await db('Poet')
                .where({poet_code})
                .first();

        },

        deletePoet: async (_,{poet_code}) => {

            await db('Poet')
                .where({poet_code})
                .del();

            return poet_code;

        },

        // POEM

        addPoem: async (_,{
            poem_title,
            poem_contents,
            poet_code,
            publication_code
        }) => {

            const [poem_code] = await db('Poem').insert({

                poem_title,
                poem_contents,
                poet_code

            });

            // Relación 

            if(publication_code){

                await db('Poem_Publication').insert({

                    poem_code,
                    publication_code

                });

            }

            return await db('Poem')
                .where({poem_code})
                .first();

        },

        updatePoem: async (_,{
            poem_code,
            poem_title,
            poem_contents

        }) => {

            await db('Poem')
                .where({poem_code})
                .update({

                    poem_title,
                    poem_contents

                });

            return await db('Poem')
                .where({poem_code})
                .first();

        },

        deletePoem: async (_,{poem_code}) => {

            await db('Poem')
                .where({poem_code})
                .del();

            return poem_code;

        },

        // CUSTOMER

        addCustomer: async (_,{
            first_name,
            surname,
            address,
            postcode,
            telephone_number
        }) => {

            const [customer_code] = await db('Customer').insert({

                first_name,
                surname,
                address,
                postcode,
                telephone_number

            });

            return await db('Customer')
                .where({customer_code})
                .first();

        },

        updateCustomer: async (_,{
            customer_code,
            first_name,
            surname,
            address,
            postcode,
            telephone_number

        }) => {

            await db('Customer')
                .where({customer_code})
                .update({

                    first_name,
                    surname,
                    address,
                    postcode,
                    telephone_number

                });

            return await db('Customer')
                .where({customer_code})
                .first();

        },

        deleteCustomer: async (_,{customer_code}) => {

            await db('Customer')
                .where({customer_code})
                .del();

            return customer_code;

        },

        // PUBLICATION

        addPublication: async (_,{
            title,
            price
        }) => {

            const [publication_code] =
            await db('Publication').insert({

                title,
                price

            });

            return await db('Publication')
                .where({publication_code})
                .first();

        },

        updatePublication: async (_,{
            publication_code,
            title,
            price
        }) => {

            await db('Publication')
                .where({publication_code})
                .update({

                    title,
                    price

                });

            return await db('Publication')
                .where({publication_code})
                .first();

        },

        deletePublication: async (_,{publication_code}) => {

            await db('Publication')
                .where({publication_code})
                .del();

            return publication_code;

        },

        // SALE

        addSale: async (_,{
            date,
            amount,
            customer_code,
            publication_code
        }) => {

            const [sale_code] = await db('Sale').insert({

                date,
                amount,
                customer_code

            });

            // Relación 

            if(publication_code){

                await db('Sale_Publication').insert({

                    sale_code,
                    publication_code

                });

            }

            return await db('Sale')
                .where({sale_code})
                .first();

        },

        updateSale: async (_,{
            sale_code,
            date,
            amount
        }) => {

            await db('Sale')
                .where({sale_code})
                .update({

                    date,
                    amount

                });

            return await db('Sale')
                .where({sale_code})
                .first();

        },

        deleteSale: async (_,{sale_code}) => {

            await db('Sale')
                .where({sale_code})
                .del();

            return sale_code;

        },

        // RELACIONES

        deletePoemPublication: async (_,{
            poem_code,
            publication_code
        }) => {

            await db('Poem_Publication')
                .where({

                    poem_code,
                    publication_code

                })
                .del();

            return poem_code;

        },

        deleteSalePublication: async (_,{
            sale_code,
            publication_code
        }) => {

            await db('Sale_Publication')
                .where({

                    sale_code,
                    publication_code

                })
                .del();

            return sale_code;

        }

    }

};

module.exports = resolvers;