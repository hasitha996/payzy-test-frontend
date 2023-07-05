import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { FormModal, SystemButton } from '../components';
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [entities, setEntities] = useState([]);
  const [editId, setEditId] = useState([]);
  const [showModalState, setShowModalState] = useState(false);
  const [initialEntities, setInitialEntities] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem('token');
  const [newEntity, setNewEntity] = useState({
    id: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/login");
    window.location.reload();
  }

  const actionButtons = (email) => {
    return (
      <div>
        <div>
          <SystemButton type="edit" showText method={() => editRow(email)} />
        </div>
      </div>
    );
  };

  const toggleFormModal = () => {
    setShowModalState(!showModalState);

  };


  let dataColumns = [
    {
      name: 'Id',
      selector: 'id',
    },
    {
      name: 'Fist Name',
      selector: 'fist_name',
    },
    {
      name: 'Last name',
      selector: 'last_name',
      wrap: true,
      sortable: true,
    },
    {
      name: 'Contact Number',
      selector: 'mobile',
    },
    {
      name: 'Email',
      selector: 'email',
    },
    {
      name: 'Actions',
      selector: 'actions',
    },
  ];

  const handleValueChange = (e) => {
    const targetInput = e.target;
    const inputName = targetInput.name;
    const inputValue = targetInput.value;

    setNewEntity({
      ...newEntity,
      [inputName]: inputValue,
    });
  };
  let dataRows = [];
  const fetchData = async () => {
    if (!currentUser) {
      navigate("/login");
      window.location.reload();
    }

    try {


      const response = await AuthService.getAllUsers();

      await response.data.user.map((user) => {
        dataRows.push({
          id: user.id,
          fist_name: user.frist_name,
          last_name: user.last_name,
          mobile: user.mobile,
          email: user.email,
          actions: actionButtons(user.email),
        });
      });

      setEntities(dataRows);
      setInitialEntities(dataRows);

    } catch (error) {

      toast.error('Unable to fetch data!', {
        position: toast.POSITION.TOP_RIGHT
      });

    }
  };


  const editRow = (email) => {


    setNewEntity({
      email: email,
      actions: actionButtons(email),
    });
    setShowModalState(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.changePassword(newEntity.email, newEntity.password, token).then(
      () => {

        toast.error('Unable to fetch data!', {
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(window.location.reload(), 5000);
        
      },
      (error) => {
        toast.error('Unable to save!', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    );

    toast.success('saved done!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };


  return (
    <div className="container-fluid ">
      <header className="jumbotron">
        <div>
          <h3>
            Welcome To Dashbord
          </h3>

          <FormModal
            moduleName="Change password"
            modalState={showModalState}
            toggleFormModal={toggleFormModal}
            width='500px'
          >
            <form onSubmit={handleSubmit}>
              <div className="modal-body">

                <div className="row justify-content-center">

                  <div className="col-4">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        readOnly="True"
                        className="form-control form-control-sm"
                        value={newEntity.email}
                        onChange={handleValueChange}
                        maxLength="50"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control form-control-sm"
                        value={newEntity.password}
                        onChange={handleValueChange}
                        maxLength="50"
                        required
                      />
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <div className="modal-footer">
                <SystemButton type="close" method={toggleFormModal} />
                <SystemButton type="save" />
              </div>
            </form>
          </FormModal>

          <DataTable
            columns={dataColumns}
            data={entities}
            fixedHeader
            fixedHeaderScrollHeight="400px"
            pagination
            paginationPerPage={20}
            width="100%"
            paginationRowsPerPageOptions={[10, 20, 30, 60, 100]}
          />
        </div>

      </header>

    </div>
  );
};

export default Profile;
