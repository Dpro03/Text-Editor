import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created!");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const getDb = async (content) => console.error("putDb not implemented");
console.log("GET data from database");

//connect to database and the version we want to use
const jateDB = await initdb("jate", 1);

//create a transaction
const tx = jateDB.transaction("jate", "readwrite");

//get the object store
const store = tx.objectStore("jate");

//Use get method to get one item from the database
const request = store.get(1);

//Get confirmation that the item was added to the database
const result = await request;
result
  ? console.log("data retrieved from database", result)
  : console.log("no data in database");
  return result?.value; 


console.log(result, value);


export const putDb = async (content) => {
  console.log("PUT data into database");

  //connect to database and the version we want to use
  const jateDB = await initdb("jate", 1);

  //create a transaction
  const tx = jateDB.transaction("jate", "readwrite");

  //get the object store
  const store = tx.objectStore("jate");

  //Use put method to add one item to the database
  const request = store.put({ id: 1, value: content });

  //Get confirmation that the item was added to the database
  const result = await request;
  console.log("data saved to database", result);
  

  console.log(data);
};

initdb();

