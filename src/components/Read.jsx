import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { getApiFakeData } from "../api";

import { Link } from "react-router-dom";

const Read = () => {
  const [systemMembers, setSystemMembers] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`https://62f1f364b1098f150807dadd.mockapi.io/fakeData`)
    //   .then((response) => {
    //     setAPIData(response.data);
    //   });

    async function getSystemMembers() {
      try {
        // GET
        const { data: items } = await getApiFakeData();
        setSystemMembers(items);
      } catch (err) {}
    }

    getSystemMembers();
  }, []);

  console.log("systemMembers", systemMembers);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    console.log("!", { id, firstName, lastName, checkbox });
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>權限</Table.HeaderCell>

            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {systemMembers.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.password}</Table.Cell>
                <Table.Cell>{data.role}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
