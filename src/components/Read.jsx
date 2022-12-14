import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { getApiFakeData } from "../api";
import { Link } from "react-router-dom";

const Read = () => {
  const [systemMembers, setSystemMembers] = useState([]);

  useEffect(() => {
    async function getSystemMembers() {
      try {
        // GET
        const { data: items } = await getApiFakeData();
        setSystemMembers(items);
      } catch (err) {}
    }
    getSystemMembers();
  }, []);

  const setData = (data) => {
    let { id, name, password, role } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
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
                    <Button onClick={() => setData(data)}>編輯</Button>
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
