import { Alert, Grid } from "@mui/material";
import ViewVehicles from "../ViewVehicles";
import ViewEmployees from "../../Employee/ViewEmployees";
import Button from "../../../commons/Button";
import { addEmployeeToVehicle } from "../../../apis/vehicleApi";
import { useState } from "react";
import AlertSnackbar from "../../../commons/AlertSnackbar/index";

const AddEmpToVehicle = () => {
    const [vehicle, setVehicle] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = () => {
        console.log("vehicle", vehicle)
        console.log("employee", employee)
        addEmployeeToVehicle(vehicle, employee.personnelNo).then(() => {
            setOpen(true);
            setSeverity("success");
            setMessage("Employee added to vehicle successfully");
        }).catch(() => {
            setOpen(true);
            setSeverity("error");
            setMessage("Error adding employee to vehicle");
        });

    };

    return (<>
        <Grid container spacing={2}>
            <Grid item md={12}>
                <ViewVehicles
                    setSelectionModel={setVehicle}
                />
            </Grid>

            <Grid item md={12}>
                <ViewEmployees
                    setSelectionModel={setEmployee}
                />
            </Grid>

            <Button
                label={"Add"}
                value="Add"
                onClick={handleSubmit}
            />
            <AlertSnackbar open={open}
            setOpen={setOpen}
            message={message}
            severity={severity}/>

        </Grid>
    </>)
}

export default AddEmpToVehicle;