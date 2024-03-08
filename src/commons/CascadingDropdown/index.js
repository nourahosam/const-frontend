import React, { useEffect, useState } from 'react';
import DropdownSelect from './CustomSelect/index';
import { getEmployeeTypeByParent, getAllEmployeeTypes } from '../../apis/employeeApi';


const CascadingDropdown = ({ control, unregister }) => {
    const [selectMap, setSelectMap] = useState([]);

    async function checkForParent(id, index) {
        console.log("index in check", index)
        console.log("selectMap.slice(0, index)", selectMap.slice(0, index+1))
        const childrenTypes = await getEmployeeTypeByParent(id);
        if (childrenTypes.length !== 0) {
            const option = {
                options: childrenTypes,
                selectedValue: null,
                name: "empTypeId" + (index+1)
            }
            selectMap.push(option)
            for(let i = index+2; i< selectMap.length; i++){
                const name = selectMap[i].name;
                unregister(name);
            }
            setSelectMap(selectMap.slice(0, index+2));
        }else{
            for(let i = index+1; i< selectMap.length; i++){
                const name = selectMap[i].name;
                unregister(name);
            }
            setSelectMap(selectMap.slice(0, index+1));
        }
    }


    async function renderFirstSelect() {
        const firstRender = await getAllEmployeeTypes();
        console.log("firstRender", firstRender);
        const option = {
            options: firstRender,
            selectedValue: null,
            name: "empTypeId" + 0
        }
        setSelectMap([option]);
    }

    useEffect(() => {
        renderFirstSelect();
    }, [])

    return (
        <div>
            {console.log("selectmapppp", selectMap)}
            {selectMap.map((value, index) => {
                console.log("index in for loop", index)
                return (<DropdownSelect name={value.name}
                    label={'Employee Type'}
                    control={control}
                    sx={{ bgcolor: 'white', borderRadius: 1, margin: '2%', width: '340px' }}
                    menuoptions={value.options}
                    defaultValue={value.selectedValue ? value.selectedValue : ""}
                    checkForParent={checkForParent}
                    index={index}
                    selectMap={selectMap}
                    setSelectMap={setSelectMap}
                />)
            }
            )}
        </div>
    );
}

export default CascadingDropdown;