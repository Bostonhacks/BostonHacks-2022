import React, { useEffect, useState } from 'react';
import CRUDTable, {
  Fields,
  Field,
  UpdateForm,
  DeleteForm,
  Pagination,
} from 'react-crud-table';
import { db } from '../../firebase/firebase-config';
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import './AdminPanel.css';

// For sorting
const SORTERS = {
  NUMBER_ASCENDING: (mapper) => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: (mapper) => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: (mapper) => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: (mapper) => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
  const mapper = (x) => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === 'id') {
    sorter =
      data.direction === 'ascending'
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === 'ascending'
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

// Component gets the applications on load of the table and will then render each application to the
export default function AdminPanel() {
  const [applications, setApplications] = useState([]);
  const applicationsCollectionRef = collection(db, 'applications');

  //
  const service = {
    fetchItems: async (payload) => {
      const data = await getDocs(applicationsCollectionRef);
      setApplications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      let result = Array.from(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      result = result.sort(getSorter(payload.sort));
      const { activePage, itemsPerPage } = payload.pagination;
      const start = (activePage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return Promise.resolve(result.slice(start, end));
    },
    fetchTotal: async (payload) => {
      const data = await getDocs(applicationsCollectionRef);
      setApplications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      let result = Array.from(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      return Promise.resolve(result.length);
    },
    update: async (data) => {
      const application = applications.find((t) => t.id === data.id);
      const userDoc = doc(db, 'applications', data.id);
      await updateDoc(userDoc, data);
      return Promise.resolve(application);
    },
    delete: async (data) => {
      const application = applications.find((t) => t.id === data.id);
      const userDoc = doc(db, 'applications', data.id);
      await deleteDoc(userDoc);
      return Promise.resolve(application);
    },
  };

  var data = JSON.stringify(applications);

  var stripped = data.replace(/,(?!["{}[\]])/g, '');

  console.log(stripped);

  return (
    <div>
      <h3 style={{ color: 'white' }}>
        Total: {applications.length} Applications
      </h3>

      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Not Started';
          }).length
        }{' '}
        Not Started
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Submitted';
          }).length
        }{' '}
        Submitted
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return (
              el.status === 'Submitted' &&
              el.college.label === 'Boston University\r'
            );
          }).length
        }{' '}
        Boston University Students Submitted
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Waitlisted';
          }).length
        }{' '}
        Waitlisted
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Rejected';
          }).length
        }{' '}
        Rejected
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Declined';
          }).length
        }{' '}
        Declined
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Confirmed';
          }).length
        }{' '}
        Confirmed
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return (
              el.status === 'Confirmed' &&
              el.college.label === 'Boston University\r'
            );
          }).length
        }{' '}
        Boston University Students Confirmed
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Accepted';
          }).length
        }{' '}
        Accepted
      </h3>
      <h3 style={{ color: 'white' }}>
        Total:{' '}
        {
          applications.filter(function (el) {
            return el.status === 'Checked In';
          }).length
        }{' '}
        Checked In
      </h3>
      <CRUDTable
        caption="Applications"
        fetchItems={(payload) => service.fetchItems(payload)}
      >
        <Fields>
          <Field name="id" label="Id" readOnly />
          <Field name="name" label="Name" placeholder="Name" />
          <Field name="status" label="Status" placeholder="Status" />
        </Fields>

        <UpdateForm
          title="Application Update Process"
          message="Update application"
          trigger="Update"
          onSubmit={(application) => service.update(application)}
          submitText="Update"
          validate={(values) => {
            const errors = {};

            if (!values.id) {
              errors.id = 'Please, provide id';
            }

            if (!values.name) {
              errors.name = "Please, provide application's name";
            }

            if (!values.status) {
              errors.status = "Please, provide application's status";
            }

            return errors;
          }}
        />

        <DeleteForm
          title="Application Delete Process"
          message="Are you sure you want to delete the application?"
          trigger="Delete"
          onSubmit={(application) => service.delete(application)}
          submitText="Delete"
          validate={(values) => {
            const errors = {};
            if (!values.id) {
              errors.id = 'Please, provide id';
            }
            return errors;
          }}
        />
        <Pagination
          itemsPerPage={25}
          fetchTotalOfItems={(payload) => service.fetchTotal(payload)}
        />
      </CRUDTable>
    </div>
  );
}
