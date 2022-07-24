import React, { Fragment, useState, useEffect, useCallback  } from "react";
import MaterialTable from "@material-table/core";
import { db } from "../firebase/firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

// Admin page
export default function Admin() {
    // List of applications
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "applications");

    // List of columns
    const tableColumns = [
      { title: "Client", field: "key" },
      { title: "Name", field: "name" },
  
      {
        title: "booleanValue",
        field: "booleanValue",
        editComponent: (props) => {
        //   console.log(props);
          return (
            <input
              type="checkbox"
              checked={props.value}
              onChange={(e) => props.onChange(e.target.checked)}
            />
          );
        },
        render: (rowdata) => (
          <input type="checkbox" checked={rowdata.booleanValue} readOnly />
        )
      }
    ];

    const getUsers = useCallback(async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
    }, [usersCollectionRef]);

    const createUser = async (newData) => {
        await addDoc(usersCollectionRef, newData);
        // getUsers();
      };
    
    const updateUser = async (id, newData) => {
        const userDoc = doc(db, "users", id);
        await updateDoc(userDoc, newData);
        // getUsers();
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        // getUsers();
    };

    // Get list of applications
    useEffect(() => {
        getUsers();
    }, [getUsers]);
  
    return (
      <Fragment>
        <MaterialTable
          columns={tableColumns}
          data={users}
          title="Material Table - Checkbox field  "
          options={{ search: false, actionsColumnIndex: -1, pageSizeOptions: [5, 10, 20, { value: users.length, label: 'All' }] }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                    createUser(newData);
                //   setUsers([...users, newData]);
  
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                //   console.log("old data: ", oldData);
                //   const dataUpdate = [...users];
                //   const index = oldData.tableData.id;
                //   dataUpdate[index] = newData;
                //   setUsers([...dataUpdate]);
                  updateUser(oldData.tableData.id, newData);
  
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) => {
                deleteUser(oldData.tableData.key);
            }
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //     //   const dataDelete = [...users];
            //     //   const index = oldData.tableData.id;
            //     //   dataDelete.splice(index, 1);
            //     //   setUsers([...dataDelete]);
            //         console.log("id is");
            //         console.log(oldData.tableData.id)
            //         deleteUser(oldData.tableData.id);
  
            //       resolve();
            //     }, 1000);
            //   })
          }}
        />
      </Fragment>
    );
  }
  