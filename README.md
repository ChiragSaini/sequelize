## Steps to Run the Project

- Prerequisite: Redis, Postgres and nodejs(with npm or yarn)

1. Run ```yarn``` to install the dependencies.
2. Create a db in postgres according to your databse using command ```createdb db_development```
3. Update the env variables accoridng to your postgres user, password and database name.
4. Run this to create a model and migration```sequelize model:generate --name State --attributes date:text,state:text,fips:integer,cases:integer,deaths:integer ```. You should have sequelize-cli installed in your pc. You can install it by ```npm i -g sequelize-cli```
5. Run ```yarn migrate``` to sync changes to db.
6. Run ```yarn seed``` to add seed data to db.
7. Now your setup should be done.
8. Run ```yarn dev``` to start dev server
9. Hit API Endpoint /search/:you_state_name to get that state data.
10. Once the data is retrieved , it is cached within redis with time to live for 60 seconds.