import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import Select from './CustomSelect';
import axios from 'axios';
import { getProjTypeParentIdAPI } from '../../utils/apis/Project/ProjTypeAPI';


const CascadingDropdown = ({ name }) => {
    const [parentList, setParentList] = useState({});
    const [childList1, setChild1] = useState({});
    const [childList2, setChild2] = useState({});
    const [disableFirstChild, setFirstDisable] = useState(true);
    const [disableSecondChild, setSecondDisable] = useState(true);
    const [firstVal, setFirstVal] = useState("");
    const [secondVal, setSecondVal] = useState("");
    const [thirdVal, setThirdVal] = useState("");
    const { setFieldValue } = useFormikContext();

    const [field, meta] = useField(name);

    async function parentTypeAPI() {
        var temp = {};
        const response = axios.get("http://localhost:8080/api/v1/project/projectTypes/type/parent").then(res => {
            res.data.forEach(el => {
                temp[el.id] = el.type;
            })
            setParentList(temp);
            setFirstDisable(true);
            setSecondDisable(true);
            return res.data
        });

        return response;
    }
    async function subtype1(id) {
        var temp = {};
        const response = await getProjTypeParentIdAPI(id);
        response.forEach(el => {
            temp[el.id] = el.type;
        })
        return temp;
    }

    useEffect(() => {
        parentTypeAPI();
    }, [])

    async function handleChange1(e) {
        const list = await subtype1(e.target.value);
        if ((list.constructor === Object && Object.keys(list).length === 0)) {
            setChild1([]);
            setFirstVal(e.target.value)
            setSecondVal("");
            setThirdVal("")
            setFirstDisable(true);
            setSecondDisable(true);
        } else {
            setChild1(list);
            setFirstDisable(false);
            setSecondDisable(true);
            setFirstVal(e.target.value)
            setSecondVal("");
            setThirdVal("");
        }

    }
    async function handleChange2(e) {
        const list = await subtype1(e.target.value);
        if ((list.constructor === Object && Object.keys(list).length === 0)) { 
            setChild2([]);
            setSecondDisable(true);
            setSecondVal(e.target.value);
            setThirdVal("")
        }
        else {
            setChild2(list);
            setSecondDisable(false);
            setSecondVal(e.target.value);
            setThirdVal("")
        }
    }

    const handleThirdChange = (e) => {
        setThirdVal(e.target.value)
    }

    useEffect(()=> {
        if(thirdVal != ""){
            console.log("thirdVal", thirdVal)
            setFieldValue(name, thirdVal);
        }
        else if(secondVal != ""){
            setFieldValue(name, secondVal)
        }
        else {
            setFieldValue(name, firstVal);
        }
    }, [thirdVal, secondVal, firstVal])

    return (
        <div>
            <Select name={name}
                label='Project Type'
                sx={{ bgcolor: 'white', borderRadius: 1, margin: '2%', width: '340px' }}
                options={parentList}
                value={firstVal}
                onChange={handleChange1} />
            <Select name={name}
                label='Project First Type'
                sx={{ bgcolor: 'white', borderRadius: 1, margin: '2%', width: '340px' }}
                onChange={handleChange2}
                options={childList1}
                value={secondVal}
                disabled={disableFirstChild} />
            <Select name={name}
                label='Project Second Type'
                sx={{ bgcolor: 'white', borderRadius: 1, margin: '2%', width: '340px' }}
                options={childList2}
                value={thirdVal}
                onChange={handleThirdChange}
                disabled={disableSecondChild} />
        </div>
    );
}

export default CascadingDropdown;